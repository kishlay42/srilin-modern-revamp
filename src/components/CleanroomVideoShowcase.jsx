import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Play, Pause, Activity, ShieldCheck, Thermometer, Droplets, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function CleanroomVideoShowcase() {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const wrapperRef = useRef(null);
  const cursorPillRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const wrapper = wrapperRef.current;
    const pill = cursorPillRef.current;
    if (!section || !wrapper || !pill) return;

    // 1. Google Antigravity Scroll Expansion: scale from 0.6 to 1.0 scrubbed to scroll
    const scaleTween = gsap.fromTo(
      wrapper,
      { scale: 0.65, opacity: 0.85, borderRadius: '48px' },
      {
        scale: 1.0,
        opacity: 1,
        borderRadius: '32px',
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'top center',
          scrub: 1,
        },
      }
    );

    // 2. Google Antigravity Custom Cursor Follower on Media
    gsap.set(pill, { xPercent: -50, yPercent: -50, scale: 0, opacity: 0 });
    const quickX = gsap.quickTo(pill, 'x', { duration: 0.35, ease: 'power2.out' });
    const quickY = gsap.quickTo(pill, 'y', { duration: 0.35, ease: 'power2.out' });

    let isHovering = false;

    const onMouseEnter = (e) => {
      isHovering = true;
      wrapper.style.cursor = 'none';
      const rect = wrapper.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      gsap.set(pill, { x, y });
      gsap.to(pill, { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' });
    };

    const onMouseLeave = () => {
      isHovering = false;
      wrapper.style.cursor = 'auto';
      gsap.to(pill, { scale: 0, opacity: 0, duration: 0.2, ease: 'power2.in' });
    };

    const onMouseMove = (e) => {
      if (!isHovering) return;
      const rect = wrapper.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      quickX(x);
      quickY(y);
    };

    wrapper.addEventListener('mouseenter', onMouseEnter);
    wrapper.addEventListener('mouseleave', onMouseLeave);
    wrapper.addEventListener('mousemove', onMouseMove);

    return () => {
      scaleTween.kill();
      wrapper.removeEventListener('mouseenter', onMouseEnter);
      wrapper.removeEventListener('mouseleave', onMouseLeave);
      wrapper.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section ref={sectionRef} id="video-showcase" className="py-20 max-w-[1440px] mx-auto px-6 md:px-12 relative">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f8f9fc] border border-[rgba(33,34,38,0.06)] text-xs text-[#45474d] mb-3">
          <Activity className="w-3.5 h-3.5 text-[#1a73e8]" />
          <span>Live SMT Cleanroom Telemetry</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#121317]">
          Class 100,000 ISO 8 Cleanroom Campus
        </h2>
        <p className="mt-3 text-sm md:text-base text-[#45474d] max-w-xl mx-auto">
          214,000 sq ft facility operating Fuji AIMEX IIIc and Panasonic NPM-D3A high-speed lines in Hyderabad Fabcity.
        </p>
      </div>

      {/* Video Showcase Wrapper with Scroll Expansion & Ambient Cyan Glow */}
      <div className="relative flex justify-center">
        {/* Soft Ambient Antigravity Glow behind Video */}
        <div className="ambient-cyan-glow inset-0" />

        <div
          ref={wrapperRef}
          onClick={togglePlay}
          className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-2xl border border-[rgba(33,34,38,0.12)] bg-[#121317] group select-none transition-shadow"
          style={{ willChange: 'transform' }}
        >
          {/* Authentic Real PCB Cleanroom Manufacturing Video Stream */}
          <video
            ref={videoRef}
            src="/assets/video/srilin_cleanroom_manufacturing.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />

          {/* Antigravity Floating Interactive Cursor Pill */}
          <div
            ref={cursorPillRef}
            className="custom-cursor-pill pointer-events-none"
          >
            <div className="cursor-content">
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-[#c5283d]" />
                  <span>Pause Cleanroom Feed</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-[#1a73e8]" />
                  <span>Play Live Stream</span>
                </>
              )}
            </div>
          </div>

          {/* Top Telemetry Strip */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-mono text-[11px] tracking-wide">CAM 01: SMT LINE A • FUJI 103k CPH</span>
            </div>

            <div className="hidden sm:flex items-center gap-3 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white text-xs">
              <span className="flex items-center gap-1 font-mono text-[11px]">
                <Thermometer className="w-3 h-3 text-[#1a73e8]" /> 21.4°C
              </span>
              <span className="text-white/30">•</span>
              <span className="flex items-center gap-1 font-mono text-[11px]">
                <Droplets className="w-3 h-3 text-cyan-400" /> 46.2% RH
              </span>
              <span className="text-white/30">•</span>
              <span className="flex items-center gap-1 font-mono text-[11px]">
                <Zap className="w-3 h-3 text-amber-400" /> &lt;10V ESD
              </span>
            </div>
          </div>

          {/* Bottom Control / Quality Overlay */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white text-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>ANSI/ESD S20.20-2021 & IPC-A-610 Class 3</span>
            </div>

            <div className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white/80 font-mono text-[11px]">
              0.005mm (5µm) Laser Stencil Tolerance
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
