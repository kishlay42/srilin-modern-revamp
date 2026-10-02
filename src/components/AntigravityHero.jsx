import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Download, ArrowRight } from 'lucide-react';
import ThreeAntigravityParticles from './ThreeAntigravityParticles';

gsap.registerPlugin(ScrollTrigger);

export default function AntigravityHero({ onOpenQuote, onExploreTour }) {
  const heroRef = useRef(null);
  const particlesWrapperRef = useRef(null);
  const logoRef = useRef(null);
  const typedContainerRef = useRef(null);
  const typedContentRef = useRef(null);
  const cursorRef = useRef(null);
  const ctaRef = useRef(null);

  // SriLin headline matching Google Antigravity monumentality
  const headline = "Experience liftoff with next-gen electronics platform";
  const words = headline.split(' ');

  useEffect(() => {
    if (!typedContentRef.current || !cursorRef.current || !typedContainerRef.current) return;

    const chars = typedContentRef.current.querySelectorAll('.char-span');
    if (!chars.length) return;

    // Reset initial states
    gsap.set(chars, { opacity: 0 });
    gsap.set(cursorRef.current, { opacity: 0 });
    gsap.set(logoRef.current, { opacity: 0, y: 20 });
    gsap.set(ctaRef.current, { opacity: 0, y: 50 });
    gsap.set(particlesWrapperRef.current, { opacity: 0.15 });

    // Initial position cursor at the very first char
    const firstChar = chars[0];
    if (firstChar) {
      cursorRef.current.style.transform = `translate(${firstChar.offsetLeft}px, ${firstChar.offsetTop}px)`;
    }

    // Master Timeline matching Google Antigravity ag_index.js choreography
    const tl = gsap.timeline({ delay: 0.3 });

    // 1. Reveal cursor
    tl.set(cursorRef.current, { opacity: 1 });

    // 2. Typewriter animation character-by-character with exact cursor tracking
    tl.to(chars, {
      opacity: 1,
      duration: 0.01,
      stagger: {
        each: 0.038,
        onStart: function () {
          const target = this.targets()[0];
          if (target && cursorRef.current) {
            cursorRef.current.style.transform = `translate(${target.offsetLeft + target.offsetWidth + 2}px, ${target.offsetTop}px)`;
          }
        },
      },
      ease: 'power2.out',
      onComplete: () => {
        // Cursor blinks and fades out matching Google Antigravity
        if (cursorRef.current) {
          gsap.to(cursorRef.current, { opacity: 0, duration: 0.45, ease: 'none' });
        }
      },
    });

    // 3. Right as typing completes: Logo, CTAs, and Particles bloom simultaneously (<)
    tl.fromTo(
      logoRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.8, ease: 'power2.out' }
    )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.8, ease: 'power2.out' },
        '<'
      )
      .fromTo(
        particlesWrapperRef.current,
        { opacity: 0.15 },
        { opacity: 1, duration: 3.2, ease: 'power2.out' },
        '<'
      );

    // 4. Scroll-reactive scrub: smoothly fade out particles as hero leaves viewport
    const trigger = ScrollTrigger.create({
      trigger: heroRef.current,
      start: 'center top',
      end: 'bottom top',
      scrub: true,
      onUpdate: (self) => {
        if (particlesWrapperRef.current) {
          particlesWrapperRef.current.style.opacity = String(1 - self.progress);
        }
      },
    });

    return () => {
      tl.kill();
      trigger.kill();
    };
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="welcome-wrapper relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-white select-none px-6 pt-20"
      data-welcome-section=""
    >
      {/* 1. Full-Viewport GPGPU WebGL Particles Field */}
      <div
        ref={particlesWrapperRef}
        className="hero-video-wrapper absolute inset-0 w-full h-full pointer-events-none z-0"
        data-hero-particles=""
      >
        <ThreeAntigravityParticles />
      </div>

      {/* 2. Welcome Content Container (Exact Google Antigravity Layout & Tokens) */}
      <div 
        className="welcome-section relative z-10 max-w-[1100px] w-full mx-auto flex flex-col items-center text-center py-12"
        data-welcome-content=""
      >
        
        {/* Centered Brand Mark (Exact Google Antigravity data-logo) */}
        <div
          ref={logoRef}
          className="logo-container flex items-center justify-center gap-2 mb-8 select-none"
          data-logo=""
        >
          <img
            src="/assets/image/srilin-logo.png"
            alt="SriLin Electronics"
            className="h-[26px] sm:h-[30px] w-auto object-contain"
          />
          <span className="h-4 sm:h-5 w-px bg-[rgba(33,34,38,0.2)] mx-1" />
          <span className="text-xs sm:text-sm font-medium tracking-tight text-[#45474d]">
            Perfection Reinvented
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#f1f3f4] text-[#45474d] ml-0.5">
            EMS
          </span>
        </div>

        {/* H1 Landing Main Header with TypedHeader Character Stagger */}
        <h1 className="landing-main-header max-w-[1060px] text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-[450] tracking-[-0.025em] leading-[1.08] text-[#121317] mb-12 text-center">
          <span
            ref={typedContainerRef}
            className="typed-container relative inline-block text-center"
            data-typed-header=""
          >
            {/* Blinking Multi-Color Gradient Tracking Cursor */}
            <div
              ref={cursorRef}
              className="cursor-container absolute top-0 left-0 pointer-events-none transition-transform duration-75 ease-out z-20 flex items-center"
              data-cursor-container=""
            >
              <span className="w-[3px] h-[0.9em] bg-[#1a73e8] rounded-full inline-block shadow-[0_0_10px_rgba(26,115,232,0.8)] animate-pulse" />
            </div>

            {/* Split Character Spans for Staggered Typewriter Reveal */}
            <span
              ref={typedContentRef}
              className="typed-content inline-block text-center"
            >
              {words.map((word, wIdx) => (
                <span
                  key={wIdx}
                  className="inline-block whitespace-nowrap mr-[0.28em]"
                >
                  {word.split('').map((char, cIdx) => (
                    <span
                      key={cIdx}
                      className="char-span inline-block"
                    >
                      {char}
                    </span>
                  ))}
                </span>
              ))}
            </span>
          </span>
        </h1>

        {/* Dual Pill CTA Buttons (Exact Google Antigravity data-cta) */}
        <div
          ref={ctaRef}
          className="cta-container flex flex-wrap items-center justify-center gap-4 z-20"
          data-cta=""
        >
          <button
            onClick={() => scrollTo('configurator')}
            className="h-[47.4px] px-6 rounded-full bg-[#121317] hover:bg-black text-white text-[17.5px] font-[450] inline-flex items-center gap-2.5 transition-all duration-200 active:scale-95 shadow-sm"
          >
            <Download className="w-5 h-5 text-white" />
            <span>Instant Gerber & CAD Quote</span>
          </button>

          <button
            onClick={() => scrollTo('cleanroom-tour')}
            className="h-[47.4px] px-6 rounded-full bg-[#eff2f7] hover:bg-[#e2e7f0] text-[#121317] text-[17.5px] font-[450] inline-flex items-center gap-2 transition-all duration-200 active:scale-95"
          >
            <span>Explore Cleanroom Fleet</span>
            <ArrowRight className="w-5 h-5 text-[#45474d]" />
          </button>
        </div>

      </div>

    </section>
  );
}
