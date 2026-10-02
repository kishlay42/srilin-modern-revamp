import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import PoissonDiskSampling from 'poisson-disk-sampling';

// Ashima Arts Simplex 2D/3D Noise exact implementation from Google Antigravity
const GLSL_NOISE = `
  vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
  vec4 permute(vec4 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
  float permute(float x) { return floor(mod(((x*34.0)+1.0)*x, 289.0)); }

  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
  float taylorInvSqrt(float r) { return 1.79284291400159 - 0.85373472095314 * r; }

  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod(i, 289.0);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
    m = m * m;
    m = m * m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  float snoise(vec3 v) {
    const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);

    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);

    vec3 x1 = x0 - i1 + 1.0 * C.xxx;
    vec3 x2 = x0 - i2 + 2.0 * C.xxx;
    vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;

    i = mod(i, 289.0);
    vec4 p = permute(permute(permute(
              i.z + vec4(0.0, i1.z, i2.z, 1.0))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0));

    float n_ = 1.0 / 7.0;
    vec3 ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);

    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);

    vec4 s0 = floor(b0) * 2.0 + 1.0;
    vec4 s1 = floor(b1) * 2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);

    vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;

    vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
  }
`;

export default function ThreeAntigravityParticles({ className = '' }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.offsetWidth || window.innerWidth;
    let height = container.offsetHeight || window.innerHeight;
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

    // 1. Three.js Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.z = 3.1;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
        preserveDrawingBuffer: true,
        stencil: false,
        precision: 'highp',
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(pixelRatio);
      renderer.extensions.get('EXT_color_buffer_float');
      container.appendChild(renderer.domElement);
      renderer.domElement.style.width = '100%';
      renderer.domElement.style.height = '100%';
      renderer.domElement.style.position = 'absolute';
      renderer.domElement.style.top = '0';
      renderer.domElement.style.left = '0';
    } catch (err) {
      console.error('WebGL Initialization Error:', err);
      return;
    }

    // 2. Interactive Raycast Plane
    const raycastPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(12.5, 12.5),
      new THREE.MeshBasicMaterial({ visible: false, side: THREE.DoubleSide })
    );
    scene.add(raycastPlane);

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2(-999, -999);
    const intersectionPoint = new THREE.Vector3(0, 0, 0);
    let isIntersecting = false;
    let mouseIsOver = false;

    // 3. Poisson Disk Sampling for natural organic distribution
    const size = 256;
    const length = size * size;
    let pointsData = [];

    try {
      const pds = new PoissonDiskSampling({
        shape: [500, 500],
        minDistance: 3.86,
        maxDistance: 4.86,
        tries: 20,
      });
      const pdsPoints = pds.fill();
      for (let i = 0; i < pdsPoints.length; i++) {
        pointsData.push(pdsPoints[i][0] - 250, pdsPoints[i][1] - 250);
      }
    } catch (e) {
      console.warn('PoissonDiskSampling fallback:', e);
      for (let i = 0; i < 4000; i++) {
        pointsData.push((Math.random() - 0.5) * 500, (Math.random() - 0.5) * 500);
      }
    }

    const count = pointsData.length / 2;

    // DataTexture position buffer
    const posData = new Float32Array(length * 4);
    for (let t = 0; t < count; t++) {
      const n = t * 4;
      posData[n + 0] = pointsData[t * 2 + 0] * (1.0 / 250.0);
      posData[n + 1] = pointsData[t * 2 + 1] * (1.0 / 250.0);
      posData[n + 2] = 0;
      posData[n + 3] = 0;
    }
    const posTex = new THREE.DataTexture(
      posData,
      size,
      size,
      THREE.RGBAFormat,
      THREE.FloatType
    );
    posTex.needsUpdate = true;

    // Render Targets for GPGPU ping-pong
    const createRenderTarget = () =>
      new THREE.WebGLRenderTarget(size, size, {
        wrapS: THREE.ClampToEdgeWrapping,
        wrapT: THREE.ClampToEdgeWrapping,
        minFilter: THREE.NearestFilter,
        magFilter: THREE.NearestFilter,
        format: THREE.RGBAFormat,
        type: THREE.FloatType,
        depthBuffer: false,
        stencilBuffer: false,
      });

    let rt1 = createRenderTarget();
    let rt2 = createRenderTarget();

    renderer.setRenderTarget(rt1);
    renderer.setClearColor(0, 0);
    renderer.clear();
    renderer.setRenderTarget(rt2);
    renderer.setClearColor(0, 0);
    renderer.clear();
    renderer.setRenderTarget(null);

    // 4. Simulation Quad & Material (exact Antigravity GLSL physics)
    const simScene = new THREE.Scene();
    const simCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const ringPos = new THREE.Vector2(0, 0);
    const cursorPos = new THREE.Vector2(0, 0);

    const simMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uPosition: { value: posTex },
        uPosRefs: { value: posTex },
        uRingPos: { value: ringPos },
        uRingRadius: { value: 0.2 },
        uDeltaTime: { value: 0 },
        uRingWidth: { value: 0.006 },
        uRingWidth2: { value: 0.107 },
        uRingDisplacement: { value: 0.62 },
        uTime: { value: 0 },
      },
      vertexShader: `
        void main() {
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        precision highp float;
        uniform sampler2D uPosition;
        uniform sampler2D uPosRefs;
        uniform vec2 uRingPos;
        uniform float uTime;
        uniform float uDeltaTime;
        uniform float uRingRadius;
        uniform float uRingWidth;
        uniform float uRingWidth2;
        uniform float uRingDisplacement;

        ${GLSL_NOISE}

        void main() {
          vec2 simTexCoords = gl_FragCoord.xy / vec2(${size.toFixed(1)}, ${size.toFixed(1)});
          vec4 pFrame = texture2D(uPosition, simTexCoords);

          float scale = pFrame.z;
          float velocity = pFrame.w;
          vec2 refPos = texture2D(uPosRefs, simTexCoords).xy;

          float time = uTime * 0.5;
          vec2 curentPos = refPos;
          vec2 pos = pFrame.xy * 0.8;

          float dist = distance(curentPos.xy, uRingPos);
          float noise0 = snoise(vec3(curentPos.xy * 0.2 + vec2(18.4924, 72.9744), time * 0.5));
          float dist1 = distance(curentPos.xy + (noise0 * 0.005), uRingPos);

          float t = smoothstep(uRingRadius - (uRingWidth * 2.0), uRingRadius, dist) - smoothstep(uRingRadius, uRingRadius + uRingWidth, dist1);
          float t2 = smoothstep(uRingRadius - (uRingWidth2 * 2.0), uRingRadius, dist) - smoothstep(uRingRadius, uRingRadius + uRingWidth2, dist1);
          float t3 = smoothstep(uRingRadius + uRingWidth2, uRingRadius, dist);

          t = pow(t, 2.0);
          t2 = pow(t2, 3.0);
          t += t2 * 3.0;
          t += t3 * 0.4;
          t += snoise(vec3(curentPos.xy * 30.0 + vec2(11.4924, 12.9744), time * 0.5)) * t3 * 0.5;

          float nS = snoise(vec3(curentPos.xy * 2.0 + vec2(18.4924, 72.9744), time * 0.5));
          t += pow((nS + 1.5) * 0.5, 2.0) * 0.6;

          float noise1 = snoise(vec3(curentPos.xy * 4.0 + vec2(88.494, 32.4397), time * 0.35));
          float noise2 = snoise(vec3(curentPos.xy * 4.0 + vec2(50.904, 120.947), time * 0.35));
          float noise3 = snoise(vec3(curentPos.xy * 20.0 + vec2(18.4924, 72.9744), time * 0.5));
          float noise4 = snoise(vec3(curentPos.xy * 20.0 + vec2(50.904, 120.947), time * 0.5));

          vec2 disp = vec2(noise1, noise2) * 0.03 + vec2(noise3, noise4) * 0.005;

          disp.x += sin((refPos.x * 20.0) + (time * 4.0)) * 0.02 * clamp(dist, 0.0, 1.0);
          disp.y += cos((refPos.y * 20.0) + (time * 3.0)) * 0.02 * clamp(dist, 0.0, 1.0);

          pos -= (uRingPos - (curentPos + disp)) * pow(t2, 0.75) * uRingDisplacement;

          float scaleDiff = t - scale;
          scaleDiff *= 0.2;
          scale += scaleDiff;

          vec2 finalPos = curentPos + disp + (pos * 0.25);
          velocity *= 0.5;
          velocity += scale * 0.25;

          gl_FragColor = vec4(finalPos, scale, velocity);
        }
      `,
    });

    const simQuad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), simMaterial);
    simScene.add(simQuad);

    // 5. Points Render Geometry & Material (exact Antigravity dash capsules)
    const pointsGeom = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const uvs = new Float32Array(count * 2);
    const seeds = new Float32Array(count * 4);

    for (let e = 0; e < count; e++) {
      const tx = e % size;
      const ty = Math.floor(e / size);
      uvs[e * 2] = tx / size;
      uvs[e * 2 + 1] = ty / size;

      seeds[e * 4] = Math.random();
      seeds[e * 4 + 1] = Math.random();
      seeds[e * 4 + 2] = Math.random();
      seeds[e * 4 + 3] = Math.random();
    }

    pointsGeom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    pointsGeom.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
    pointsGeom.setAttribute('seeds', new THREE.BufferAttribute(seeds, 4));

    let particleScale = (width / pixelRatio / 2000) * 0.59;

    const renderMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uPosition: { value: posTex },
        uTime: { value: 0 },
        uColor1: { value: new THREE.Color('#2c64ed') }, // Google Cobalt Blue
        uColor2: { value: new THREE.Color('#f84242') }, // Google Crimson Red
        uColor3: { value: new THREE.Color('#ffcf03') }, // Google Warm Gold
        uAlpha: { value: 1.0 },
        uRingPos: { value: ringPos },
        uRez: { value: new THREE.Vector2(width, height) },
        uParticleScale: { value: particleScale },
        uPixelRatio: { value: pixelRatio },
        uColorScheme: { value: 1 },
      },
      vertexShader: `
        precision highp float;
        attribute vec4 seeds;

        uniform sampler2D uPosition;
        uniform float uTime;
        uniform float uParticleScale;
        uniform float uPixelRatio;
        uniform int uColorScheme;

        varying vec4 vSeeds;
        varying float vVelocity;
        varying vec2 vLocalPos;
        varying vec2 vScreenPos;
        varying float vScale;

        void main() {
          vec4 pos = texture2D(uPosition, uv);
          vSeeds = seeds;
          vVelocity = pos.w;
          vScale = pos.z;
          vLocalPos = pos.xy;
          vec4 viewSpace = modelViewMatrix * vec4(vec3(pos.xy, 0.0), 1.0);
          gl_Position = projectionMatrix * viewSpace;
          vScreenPos = gl_Position.xy;
          gl_PointSize = ((vScale * 7.0) * (uPixelRatio * 0.5) * uParticleScale);
        }
      `,
      fragmentShader: `
        precision highp float;
        varying vec4 vSeeds;
        varying vec2 vScreenPos;
        varying vec2 vLocalPos;
        varying float vScale;
        varying float vVelocity;

        uniform vec3 uColor1;
        uniform vec3 uColor2;
        uniform vec3 uColor3;
        uniform vec2 uRingPos;
        uniform vec2 uRez;
        uniform float uAlpha;
        uniform float uTime;
        uniform int uColorScheme;

        ${GLSL_NOISE}

        float sdRoundBox(in vec2 p, in vec2 b, in vec4 r) {
          r.xy = (p.x > 0.0) ? r.xy : r.zw;
          r.x  = (p.y > 0.0) ? r.x  : r.y;
          vec2 q = abs(p) - b + r.x;
          return min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - r.x;
        }

        vec2 rotate(vec2 v, float a) {
          float s = sin(a);
          float c = cos(a);
          return mat2(c, s, -s, c) * v;
        }

        void main() {
          float ratio = uRez.x / uRez.y;
          float noiseAngle = snoise(vec3(vLocalPos * 10.0 + vec2(18.4924, 72.9744), uTime * 0.85));
          float noiseColor = snoise(vec3(vLocalPos * 2.0 + vec2(74.664, 91.556), uTime * 0.5));
          noiseColor = (noiseColor + 1.0) * 0.5;

          float angle = atan(vLocalPos.y - uRingPos.y, vLocalPos.x - uRingPos.x);

          vec2 uv = gl_PointCoord.xy - vec2(0.5);
          uv.y *= -1.0;
          uv = rotate(uv, -angle + (noiseAngle * 0.5));

          float h = 0.8;
          float progress = smoothstep(0.0, 0.75, pow(noiseColor, 2.0));
          vec3 col = mix(mix(uColor1, uColor2, progress / h), mix(uColor2, uColor3, (progress - h) / (1.0 - h)), step(h, progress));
          vec3 color = col;

          float rounded = sdRoundBox(uv, vec2(0.5, 0.2), vec4(0.25));
          rounded = smoothstep(0.1, 0.0, rounded);

          float a = uAlpha * rounded * smoothstep(0.1, 0.2, vScale);

          if (a < 0.01) {
            discard;
          }

          color = clamp(color, 0.0, 1.0);
          color = mix(color, color * clamp(vVelocity, 0.0, 1.0), float(uColorScheme));

          gl_FragColor = vec4(color, clamp(a, 0.0, 1.0));
        }
      `,
      transparent: true,
      depthTest: false,
      depthWrite: false,
    });

    const pointsMesh = new THREE.Points(pointsGeom, renderMaterial);
    pointsMesh.position.set(0, 0, 0);
    pointsMesh.scale.set(5, 5, 5);
    scene.add(pointsMesh);

    // 6. Mouse Interaction & Responsive Events
    const handleMouseMove = (e) => {
      const rect = renderer.domElement.getBoundingClientRect();
      const clientX = e.clientX;
      const clientY = e.clientY;

      mouse.x = ((clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((clientY - rect.top) / rect.height) * 2 + 1;

      if (mouse.x >= -1.2 && mouse.x <= 1.2 && mouse.y >= -1.2 && mouse.y <= 1.2) {
        mouseIsOver = true;
      } else {
        mouseIsOver = false;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const handleResize = () => {
      if (!container) return;
      width = container.offsetWidth || window.innerWidth;
      height = container.offsetHeight || window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      particleScale = (width / pixelRatio / 2000) * 0.59;
      renderMaterial.uniforms.uRez.value.set(width, height);
      renderMaterial.uniforms.uParticleScale.value = particleScale;
    };

    window.addEventListener('resize', handleResize);

    // 7. Animation Loop
    const clock = new THREE.Clock();
    let everRendered = false;
    let animId = null;
    let lastTime = 0;

    const animate = () => {
      animId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();
      const dt = elapsedTime - lastTime;
      lastTime = elapsedTime;

      // Mouse raycasting to 3D plane
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObject(raycastPlane);

      const driftX = Math.sin(elapsedTime * 0.66 + 94.234) * 0.2;
      const driftY = Math.cos(elapsedTime * 0.75 + 21.028) * 0.1;

      if (intersects.length > 0 && mouseIsOver) {
        intersectionPoint.copy(intersects[0].point);
        isIntersecting = true;
        cursorPos.set(
          intersectionPoint.x * 0.175 + driftX * 0.08,
          intersectionPoint.y * 0.175 + driftY * 0.08
        );
        ringPos.set(
          ringPos.x + (cursorPos.x - ringPos.x) * 0.025,
          ringPos.y + (cursorPos.y - ringPos.y) * 0.025
        );
      } else {
        isIntersecting = false;
        cursorPos.set(driftX * 0.35, driftY * 0.25);
        ringPos.set(
          ringPos.x + (cursorPos.x - ringPos.x) * 0.012,
          ringPos.y + (cursorPos.y - ringPos.y) * 0.012
        );
      }

      // Simulation pass
      simMaterial.uniforms.uPosition.value = everRendered ? rt1.texture : posTex;
      simMaterial.uniforms.uTime.value = elapsedTime;
      simMaterial.uniforms.uDeltaTime.value = dt;
      simMaterial.uniforms.uRingRadius.value =
        0.175 + Math.sin(elapsedTime * 1.0) * 0.03 + Math.cos(elapsedTime * 3.0) * 0.02;
      simMaterial.uniforms.uRingPos.value.copy(ringPos);

      renderer.setRenderTarget(rt2);
      renderer.render(simScene, simCamera);
      renderer.setRenderTarget(null);

      // Render pass
      renderMaterial.uniforms.uPosition.value = everRendered ? rt2.texture : posTex;
      renderMaterial.uniforms.uTime.value = elapsedTime;
      renderMaterial.uniforms.uRingPos.value.copy(ringPos);

      renderer.autoClear = false;
      renderer.clear();
      renderer.render(scene, camera);

      // Swap ping-pong render targets
      const tmp = rt1;
      rt1 = rt2;
      rt2 = tmp;
      everRendered = true;
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      pointsGeom.dispose();
      renderMaterial.dispose();
      simMaterial.dispose();
      posTex.dispose();
      rt1.dispose();
      rt2.dispose();
      raycastPlane.geometry.dispose();
      raycastPlane.material.dispose();
      renderer.dispose();
      if (renderer.domElement.parentElement) {
        renderer.domElement.parentElement.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 w-full h-full overflow-hidden pointer-events-none ${className}`}
      data-main-particles-component=""
      data-theme="light"
      data-ring-width="0.006"
      data-ring-width2="0.107"
      data-ring-displacement="0.62"
      data-density="230"
      data-particles-scale="0.59"
    />
  );
}
