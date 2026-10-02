import React, { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CLIENT_LOGOS } from '../data/clientLogosData';
import { Shield, Sparkles, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ClientLogoArc() {
  const sectionRef = useRef(null);
  const listRef = useRef(null);
  const waveAnimationRef = useRef(null);
  const leaveTimerRef = useRef(null);
  const [activeClient, setActiveClient] = useState(null);

  const handleHover = useCallback((client) => {
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current);
      leaveTimerRef.current = null;
    }
    setActiveClient(client);
  }, []);

  const handleLeave = useCallback(() => {
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current);
    }
    leaveTimerRef.current = setTimeout(() => {
      setActiveClient(null);
    }, 180);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const list = listRef.current;
    if (!section || !list) return;

    const items = list.querySelectorAll('[data-bouncer]');
    if (!items.length) return;

    let s = window.innerWidth;
    let listRect = list.getBoundingClientRect();
    let c = [];

    const calculateCenters = () => {
      s = window.innerWidth;
      listRect = list.getBoundingClientRect();
      c = [];
      items.forEach((el) => {
        const rect = el.getBoundingClientRect();
        c.push(rect.left - listRect.left + rect.width / 2);
      });
    };

    calculateCenters();

    // GSAP quickSetter for butter-smooth 120fps direct GPU transforms without style recalculation
    const l = Array.from(items).map((t) => gsap.quickSetter(t, 'y', 'px'));
    const u = { phase: 0 };

    const updateWave = () => {
      const currentPhase = u.phase;
      for (let t = 0; t < items.length; t++) {
        const angle = ((c[t] + currentPhase) / s) * Math.PI * 2;
        const yOffset = Math.sin(angle) * 35; // Exact Google Antigravity 35px sine wave amplitude
        l[t](yOffset);
      }
    };

    // Continuous 7-second sine wave loop matching Google Antigravity
    const waveAnimation = gsap.to(u, {
      phase: s,
      duration: 7,
      ease: 'none',
      repeat: -1,
      onUpdate: updateWave,
    });
    waveAnimationRef.current = waveAnimation;

    // Initial exact wave placement
    items.forEach((t, n) => {
      const initialY = Math.sin((c[n] / s) * Math.PI * 2) * 35;
      gsap.set(t, { x: 0, y: initialY, opacity: 1, force3D: true });
    });

    // Horizontal Scroll Scrubbing (-220px scrub matching Google Antigravity)
    const scrubTween = gsap.to(list, {
      x: -220,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    // Viewport Liveness: pause loop when off-screen to preserve GPU cycles
    const trigger = ScrollTrigger.create({
      trigger: section,
      start: 'top bottom',
      end: 'bottom top',
      onEnter: () => waveAnimation?.play(),
      onLeave: () => waveAnimation?.pause(),
      onEnterBack: () => waveAnimation?.play(),
      onLeaveBack: () => waveAnimation?.pause(),
    });

    const handleResize = () => {
      calculateCenters();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (leaveTimerRef.current) {
        clearTimeout(leaveTimerRef.current);
      }
      waveAnimation.kill();
      scrubTween.kill();
      trigger.kill();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="client-arc"
      className="agent-first-section py-20 relative overflow-hidden select-none bg-white"
      data-agent-first-section=""
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 mb-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f8f9fc] border border-[rgba(33,34,38,0.06)] text-xs text-[#45474d] mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#1a73e8]" />
          <span>Ecosystem & Defense Provenance</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-[450] tracking-tight text-[#121317] max-w-3xl mx-auto">
          Trusted by India's Top Aerospace, Space & Defense Primes
        </h2>
        <p className="mt-3 text-sm md:text-base text-[#45474d] max-w-xl mx-auto">
          From ISRO satellite packages and DRDO defense telemetry to Skyroot orbital avionics and Honeywell manufacturing.
        </p>
      </div>

      {/* Undulating Bouncer Ribbon with Horizontal Scroll-Scrub */}
      <div className="w-full overflow-hidden py-12 relative flex justify-center">
        <ul
          ref={listRef}
          data-bouncer-list=""
          className="icon-list flex items-center gap-4 min-w-max px-8 will-change-transform"
          style={{ willChange: 'transform' }}
          onMouseEnter={() => {
            if (waveAnimationRef.current) {
              gsap.to(waveAnimationRef.current, { timeScale: 0.15, duration: 0.4 });
            }
          }}
          onMouseLeave={() => {
            handleLeave();
            if (waveAnimationRef.current) {
              gsap.to(waveAnimationRef.current, { timeScale: 1, duration: 0.4 });
            }
          }}
        >
          {CLIENT_LOGOS.map((client) => {
            const isCenterZone = [
              'ficosa', 'skyroot', 'isro', 'drdo', 'honeywell', 'dhruva', 'carrier', 'apollo', 'ni'
            ].includes(client.id);

            return (
              <li
                key={client.id}
                data-bouncer=""
                className="flex-shrink-0 cursor-pointer list-none"
                onMouseEnter={() => handleHover(client)}
                onMouseLeave={handleLeave}
                style={{ willChange: 'transform' }}
              >
                <div
                  className={`bouncer group w-[104px] h-[104px] rounded-full p-3 flex flex-col items-center justify-center relative transition-all duration-200 border ${
                    activeClient?.id === client.id
                      ? 'border-[#121317] shadow-lg bg-white ring-2 ring-[#121317]/10 scale-105'
                      : isCenterZone
                      ? 'bg-white border-[rgba(33,34,38,0.12)] shadow-sm hover:border-[#121317]/40 hover:shadow-md'
                      : 'bg-[#b7bfd9]/10 border-[rgba(33,34,38,0.06)] hover:bg-white hover:shadow-sm'
                  }`}
                >
                  {/* High Quality Official Brand Logo */}
                  <div className="w-12 h-10 flex items-center justify-center">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-w-[52px] max-h-[36px] w-auto h-auto object-contain transition-transform duration-200 group-hover:scale-110 select-none pointer-events-none"
                      loading="lazy"
                    />
                  </div>

                  {/* Brand Short Name */}
                  <span className="text-[10px] font-medium text-[#121317] tracking-tight text-center mt-1 truncate max-w-[84px] select-none">
                    {client.shortName || client.name}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Active Client Details Drawer */}
      <div 
        className="max-w-2xl mx-auto px-6 h-28 flex items-center justify-center mt-2"
        onMouseEnter={() => {
          if (leaveTimerRef.current) {
            clearTimeout(leaveTimerRef.current);
            leaveTimerRef.current = null;
          }
        }}
        onMouseLeave={handleLeave}
      >
        {activeClient ? (
          <div className="w-full p-4 bg-white rounded-2xl border border-[rgba(33,34,38,0.08)] shadow-md flex items-center justify-between gap-4 transition-all duration-200">
            <div className="flex items-center gap-4">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center bg-[#f8f9fc] border border-[rgba(33,34,38,0.06)] p-2 shadow-inner flex-shrink-0"
              >
                <img
                  src={activeClient.logo}
                  alt={activeClient.name}
                  className="max-w-[46px] max-h-[38px] w-auto h-auto object-contain"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-sm text-[#121317]">{activeClient.name}</h3>
                  <span 
                    className="text-[10px] px-2 py-0.5 rounded-full font-semibold text-white"
                    style={{ backgroundColor: activeClient.color }}
                  >
                    {activeClient.tag}
                  </span>
                </div>
                <p className="text-xs text-[#45474d] mt-1 line-clamp-1">
                  {activeClient.highlight}
                </p>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-emerald-700 font-medium px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200/60 flex-shrink-0">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{activeClient.standard}</span>
            </div>
          </div>
        ) : (
          <p className="text-xs text-[#80868b] tracking-wide flex items-center gap-2">
            <Shield className="w-3.5 h-3.5 text-[#1a73e8]" />
            Hover over any partner bubble to view mission profile and verified manufacturing standards
          </p>
        )}
      </div>
    </section>
  );
}
