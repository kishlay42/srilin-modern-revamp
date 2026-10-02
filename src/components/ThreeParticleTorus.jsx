import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeParticleTorus() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let width = mount.clientWidth || window.innerWidth;
    let height = mount.clientHeight || window.innerHeight;

    // 1. Scene, Camera, Renderer (matching Google Antigravity data-engine="three.js r180")
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 24;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0); // Transparent background
    mount.appendChild(renderer.domElement);

    // 2. Mouse Tracking & Raycasting Setup
    const mouse = new THREE.Vector2(0, 0);
    const targetMouse = new THREE.Vector2(0, 0);
    const mouseSpeed = new THREE.Vector2(0, 0);
    let prevMouse = new THREE.Vector2(0, 0);
    let isMouseActive = false;
    let lastMouseMoveTime = 0;

    const raycaster = new THREE.Raycaster();
    const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0); // Z=0 interaction plane
    const planeIntersect = new THREE.Vector3();

    const onMouseMove = (e) => {
      const rect = mount.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / width) * 2 - 1;
      const y = -((e.clientY - rect.top) / height) * 2 + 1;

      targetMouse.x = x;
      targetMouse.y = y;

      mouseSpeed.x = (x - prevMouse.x) * 20;
      mouseSpeed.y = (y - prevMouse.y) * 20;
      prevMouse.x = x;
      prevMouse.y = y;

      isMouseActive = true;
      lastMouseMoveTime = performance.now();
    };

    const onMouseLeave = () => {
      isMouseActive = false;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseleave', onMouseLeave);

    // 3. Google Antigravity Toroidal Chromatic Particle Geometry
    // 2,200 particle capsules forming the signature elliptical swirl ring
    const PARTICLE_COUNT = 2400;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const basePositions = new Float32Array(PARTICLE_COUNT * 3);
    const velocities = new Float32Array(PARTICLE_COUNT * 3);
    const colors = new Float32Array(PARTICLE_COUNT * 3);
    const sizes = new Float32Array(PARTICLE_COUNT);

    // Chromatic Palettes
    // Left: Google Yellow / Warm Red / Amber / SriLin Red
    const WARM_COLORS = [
      new THREE.Color('#ea4335'), // Google Red
      new THREE.Color('#fbbc04'), // Google Gold
      new THREE.Color('#ff7043'), // Amber
      new THREE.Color('#c5283d'), // SriLin Red
      new THREE.Color('#fa903e'), // Coral
    ];

    // Right: Google Blue / Cobalt / Cyan / Periwinkle
    const COOL_COLORS = [
      new THREE.Color('#1a73e8'), // Google Blue
      new THREE.Color('#3186ff'), // Antigravity Cobalt
      new THREE.Color('#4285f4'), // Electric Blue
      new THREE.Color('#749bff'), // Soft Periwinkle
      new THREE.Color('#00b0ff'), // Cyan
    ];

    // Bottom / Center Accents
    const ACCENT_COLORS = [
      new THREE.Color('#34a853'), // Google Green
      new THREE.Color('#a142f4'), // Violet
      new THREE.Color('#e91e63'), // Magenta
    ];

    const majorRadiusX = 14.5;
    const majorRadiusY = 8.5;
    const ringThickness = 3.6;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      // Elliptical distribution matching the hero layout
      const theta = Math.random() * Math.PI * 2;
      const radialOffset = (Math.random() - 0.5) * ringThickness;
      const zOffset = (Math.random() - 0.5) * 3.2;

      const x = Math.cos(theta) * (majorRadiusX + radialOffset);
      const y = Math.sin(theta) * (majorRadiusY + radialOffset * 0.7);
      const z = zOffset + Math.sin(theta * 2) * 1.2;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      basePositions[i * 3] = x;
      basePositions[i * 3 + 1] = y;
      basePositions[i * 3 + 2] = z;

      velocities[i * 3] = 0;
      velocities[i * 3 + 1] = 0;
      velocities[i * 3 + 2] = 0;

      // Color mapping: warm on left, cool on right
      let chosenColor;
      if (x < -1.5) {
        chosenColor = WARM_COLORS[Math.floor(Math.random() * WARM_COLORS.length)];
      } else if (x > 1.5) {
        chosenColor = COOL_COLORS[Math.floor(Math.random() * COOL_COLORS.length)];
      } else {
        chosenColor = Math.random() > 0.4 
          ? ACCENT_COLORS[Math.floor(Math.random() * ACCENT_COLORS.length)] 
          : COOL_COLORS[0];
      }

      colors[i * 3] = chosenColor.r;
      colors[i * 3 + 1] = chosenColor.g;
      colors[i * 3 + 2] = chosenColor.b;

      // Varied size for depth
      sizes[i] = Math.random() * 4.5 + 2.5;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    // Custom Shader Material for crisp elongated particle capsules with soft glow
    const vertexShader = `
      attribute float size;
      varying vec3 vColor;
      varying float vDist;

      void main() {
        vColor = color;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = size * (28.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
        vDist = -mvPosition.z;
      }
    `;

    const fragmentShader = `
      varying vec3 vColor;
      varying float vDist;

      void main() {
        // Draw an elongated oriented pill capsule
        vec2 coord = gl_PointCoord - vec2(0.5);
        // Stretch along x/y to give capsule appearance
        float dist = length(coord * vec2(1.0, 2.2));
        if (dist > 0.5) discard;

        float alpha = smoothstep(0.5, 0.2, dist) * 0.85;
        gl_FragColor = vec4(vColor, alpha);
      }
    `;

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      vertexColors: true,
      transparent: true,
      depthWrite: false,
      blending: THREE.NormalBlending,
    });

    const particleSystem = new THREE.Points(geometry, material);
    scene.add(particleSystem);

    // 4. Animation Loop with Physics & 3D Perspective Tilt
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const delta = Math.min(clock.getDelta(), 0.05);
      const time = clock.getElapsedTime();

      // Smooth mouse interpolation
      mouse.x += (targetMouse.x - mouse.x) * 0.08;
      mouse.y += (targetMouse.y - mouse.y) * 0.08;

      // 3D Perspective Camera Tilt (Google Antigravity Signature)
      particleSystem.rotation.y = mouse.x * 0.18 + Math.sin(time * 0.15) * 0.05;
      particleSystem.rotation.x = -mouse.y * 0.14 + Math.cos(time * 0.2) * 0.04;
      particleSystem.rotation.z = time * 0.03; // Gentle ambient orbital spin

      // Raycast to find 3D mouse position on Z=0 plane
      raycaster.setFromCamera(mouse, camera);
      raycaster.ray.intersectPlane(plane, planeIntersect);

      const posAttr = geometry.attributes.position;
      const currentPos = posAttr.array;
      const mouseActive = isMouseActive && (performance.now() - lastMouseMoveTime < 2500);

      const influenceRadius = 5.5;
      const influenceRadiusSq = influenceRadius * influenceRadius;

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const idx = i * 3;
        let px = currentPos[idx];
        let py = currentPos[idx + 1];
        let pz = currentPos[idx + 2];

        const bx = basePositions[idx];
        const by = basePositions[idx + 1];
        const bz = basePositions[idx + 2];

        // 1. Interactive Mouse Repulsion & Swirl Vector Dynamics
        if (mouseActive) {
          const dx = px - planeIntersect.x;
          const dy = py - planeIntersect.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < influenceRadiusSq && distSq > 0.01) {
            const dist = Math.sqrt(distSq);
            const force = (1 - dist / influenceRadius);
            
            // Radial push outward
            const repelStrength = force * force * 18.0;
            velocities[idx] += (dx / dist) * repelStrength * delta;
            velocities[idx + 1] += (dy / dist) * repelStrength * delta;

            // Fluid tangential vortex swirl
            const swirlStrength = force * 12.0;
            velocities[idx] += (-dy / dist) * swirlStrength * delta;
            velocities[idx + 1] += (dx / dist) * swirlStrength * delta;

            // Z-axis displacement
            velocities[idx + 2] += Math.sin(dist * 3.0) * force * 8.0 * delta;
          }
        }

        // 2. Spring force returning particle to base orbit position
        const toBaseX = bx - px;
        const toBaseY = by - py;
        const toBaseZ = bz - pz;

        velocities[idx] += toBaseX * 2.2 * delta;
        velocities[idx + 1] += toBaseY * 2.2 * delta;
        velocities[idx + 2] += toBaseZ * 2.2 * delta;

        // 3. Fluid drag / friction
        velocities[idx] *= 0.94;
        velocities[idx + 1] *= 0.94;
        velocities[idx + 2] *= 0.94;

        // 4. Update position
        currentPos[idx] += velocities[idx];
        currentPos[idx + 1] += velocities[idx + 1];
        currentPos[idx + 2] += velocities[idx + 2];
      }

      posAttr.needsUpdate = true;
      renderer.render(scene, camera);
    };

    animate();

    // 5. Responsive Resize
    const handleResize = () => {
      if (!mount) return;
      width = mount.clientWidth || window.innerWidth;
      height = mount.clientHeight || window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="absolute inset-0 pointer-events-auto z-0 overflow-hidden" 
      style={{ width: '100%', height: '100%' }}
    />
  );
}
