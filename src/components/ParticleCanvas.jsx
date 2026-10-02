import React, { useEffect, useRef } from 'react';

export default function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Mouse position & velocity tracking with smoothing
    const mouse = {
      x: width * 0.5,
      y: height * 0.5,
      prevX: width * 0.5,
      prevY: height * 0.5,
      vx: 0,
      vy: 0,
      active: false,
      lastMoveTime: 0
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const newX = e.clientX - rect.left;
      const newY = e.clientY - rect.top;
      
      mouse.vx = (newX - mouse.x) * 0.3;
      mouse.vy = (newY - mouse.y) * 0.3;
      mouse.x = newX;
      mouse.y = newY;
      mouse.active = true;
      mouse.lastMoveTime = performance.now();
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);

    // Google Antigravity Chromatic Color Spectrum
    // Left cluster: warm reds, oranges, ambers, golds
    // Right cluster: electric blues, cyan, cobalt, indigo
    // Lower cluster: magenta, green accents
    const WARM_COLORS = [
      '#ea4335', // Google Red / SriLin Red
      '#fbbc04', // Google Yellow / SriLin Gold
      '#ff7043', // Deep Amber
      '#c5283d', // SriLin Crimson
      '#fa903e', // Bright Orange
    ];

    const COOL_COLORS = [
      '#1a73e8', // Google Blue
      '#4285f4', // Electric Blue
      '#3186ff', // Antigravity Cobalt
      '#749bff', // Light Periwinkle
      '#00b0ff', // Vivid Cyan
    ];

    const ACCENT_COLORS = [
      '#34a853', // Google Green
      '#a142f4', // Purple / Violet
      '#e91e63', // Deep Pink
    ];

    // Particle count scaled to screen size
    const PARTICLE_COUNT = Math.min(320, Math.max(160, Math.floor((width * height) / 4500)));

    const particles = Array.from({ length: PARTICLE_COUNT }, (_, i) => {
      // Establish an organic elliptical distribution centered around the hero
      const angle = Math.random() * Math.PI * 2;
      const radiusX = (0.2 + Math.random() * 0.5) * width;
      const radiusY = (0.2 + Math.random() * 0.45) * height;
      
      const x = width * 0.5 + Math.cos(angle) * radiusX;
      const y = height * 0.45 + Math.sin(angle) * radiusY;

      // Determine color based on spatial position (Warm on left, Cool on right, matching Google)
      let color;
      if (x < width * 0.48) {
        color = WARM_COLORS[Math.floor(Math.random() * WARM_COLORS.length)];
      } else if (x > width * 0.52) {
        color = COOL_COLORS[Math.floor(Math.random() * COOL_COLORS.length)];
      } else {
        color = Math.random() > 0.5 
          ? ACCENT_COLORS[Math.floor(Math.random() * ACCENT_COLORS.length)] 
          : COOL_COLORS[0];
      }

      // Base orbital velocity vector creating the signature Antigravity toroidal swirl
      const orbitalSpeed = (Math.random() * 0.6 + 0.3) * (angle > Math.PI ? 1 : -1);
      const vx = -Math.sin(angle) * orbitalSpeed;
      const vy = Math.cos(angle) * orbitalSpeed * 0.5;

      return {
        x,
        y,
        originX: x,
        originY: y,
        vx,
        vy,
        baseVx: vx,
        baseVy: vy,
        length: Math.random() * 6 + 5,   // 5px - 11px elongated dash capsule
        width: Math.random() * 1.5 + 1.8, // 1.8px - 3.3px thickness
        color,
        opacity: Math.random() * 0.45 + 0.35,
        pulseOffset: Math.random() * Math.PI * 2,
        mass: Math.random() * 0.6 + 0.7,
      };
    });

    let lastTime = performance.now();

    const render = (currentTime) => {
      const dt = Math.min((currentTime - lastTime) / 1000, 0.1);
      lastTime = currentTime;

      ctx.clearRect(0, 0, width, height);

      const isMouseActive = mouse.active && (currentTime - mouse.lastMoveTime < 2500);

      // Damp mouse velocity
      mouse.vx *= 0.92;
      mouse.vy *= 0.92;

      particles.forEach((p) => {
        // 1. Organic baseline vortex flow around hero center
        const dxCenter = p.x - width * 0.5;
        const dyCenter = p.y - height * 0.45;
        const distCenter = Math.hypot(dxCenter, dyCenter) || 1;

        // Gentle central gravity + rotational swirl
        const orbitAngle = Math.atan2(dyCenter, dxCenter);
        const tangentX = -Math.sin(orbitAngle);
        const tangentY = Math.cos(orbitAngle);

        p.vx += tangentX * 0.08 * dt;
        p.vy += tangentY * 0.04 * dt;

        // 2. Interactive Mouse Repulsion & Swirl Vector Dynamics
        if (isMouseActive) {
          const dxMouse = p.x - mouse.x;
          const dyMouse = p.y - mouse.y;
          const distMouse = Math.hypot(dxMouse, dyMouse);
          const influenceRadius = 240;

          if (distMouse < influenceRadius && distMouse > 1) {
            const force = (1 - distMouse / influenceRadius);
            
            // Radial push away from cursor
            const pushFactor = (force * force * 450) / p.mass;
            p.vx += (dxMouse / distMouse) * pushFactor * dt;
            p.vy += (dyMouse / distMouse) * pushFactor * dt;

            // Fluid rotational swirl around cursor
            const swirlFactor = force * 200;
            p.vx += (-dyMouse / distMouse) * swirlFactor * dt;
            p.vy += (dxMouse / distMouse) * swirlFactor * dt;

            // Impart mouse momentum onto particle
            p.vx += mouse.vx * force * 0.15;
            p.vy += mouse.vy * force * 0.15;
          }
        }

        // 3. Fluid Physics Friction & Inertia
        p.vx *= 0.955;
        p.vy *= 0.955;

        // Subtle return to baseline drift
        p.vx += (p.baseVx - p.vx) * 0.02;
        p.vy += (p.baseVy - p.vy) * 0.02;

        p.x += p.vx;
        p.y += p.vy;

        // Wrap around viewport edges smoothly
        if (p.x < -40) p.x = width + 40;
        if (p.x > width + 40) p.x = -40;
        if (p.y < -40) p.y = height + 40;
        if (p.y > height + 40) p.y = -40;

        // 4. Render Elongated Capsule Dash Aligned to Velocity Direction
        const speed = Math.hypot(p.vx, p.vy);
        const angle = Math.atan2(p.vy, p.vx);
        const dynamicLength = Math.max(p.length, Math.min(22, p.length + speed * 3.5));

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(angle);

        ctx.beginPath();
        // Rounded capsule dash matching Google Antigravity vector strokes
        const r = p.width * 0.5;
        const len = dynamicLength;
        ctx.arc(-len * 0.5 + r, 0, r, Math.PI * 0.5, Math.PI * 1.5);
        ctx.arc(len * 0.5 - r, 0, r, -Math.PI * 0.5, Math.PI * 0.5);
        ctx.closePath();

        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 pointer-events-auto z-0"
    />
  );
}
