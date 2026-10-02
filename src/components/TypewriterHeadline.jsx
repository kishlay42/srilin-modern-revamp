import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FULL_TEXT =
  "SriLin Electronics is our premier aerospace & defense EMS platform, allowing anyone to manufacture mission-critical hardware in the Make-in-India era.";

export default function TypewriterHeadline() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const textEl = textRef.current;
    const cursor = cursorRef.current;
    if (!container || !textEl || !cursor) return;

    // Split text into individual span elements
    textEl.innerHTML = '';
    const chars = [];
    const words = FULL_TEXT.split(' ');

    words.forEach((word, wIdx) => {
      const wordSpan = document.createElement('span');
      wordSpan.style.display = 'inline-block';
      wordSpan.style.whiteSpace = 'nowrap';
      wordSpan.style.marginRight = '0.3em';

      for (let i = 0; i < word.length; i++) {
        const charSpan = document.createElement('span');
        charSpan.innerText = word[i];
        charSpan.style.opacity = '0';
        charSpan.style.display = 'inline-block';
        charSpan.style.transition = 'opacity 0.05s ease';
        wordSpan.appendChild(charSpan);
        chars.push(charSpan);
      }
      textEl.appendChild(wordSpan);
    });

    const updateCursorPosition = (el) => {
      if (!el || !container) return;
      const elRect = el.getBoundingClientRect();
      const parentRect = container.getBoundingClientRect();
      const posX = elRect.right - parentRect.left + 2;
      const posY = elRect.top - parentRect.top;
      cursor.style.setProperty('--cursor-pos-x', `${posX}px`);
      cursor.style.setProperty('--cursor-pos-y', `${posY}px`);
    };

    // Initialize cursor at beginning
    cursor.style.opacity = '0';
    if (chars[0]) {
      const firstRect = chars[0].getBoundingClientRect();
      const parentRect = container.getBoundingClientRect();
      cursor.style.setProperty('--cursor-pos-x', `${firstRect.left - parentRect.left}px`);
      cursor.style.setProperty('--cursor-pos-y', `${firstRect.top - parentRect.top}px`);
    }

    // ScrollTrigger to trigger typing on scroll into view
    const trigger = ScrollTrigger.create({
      trigger: container,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        cursor.style.opacity = '1';
        const tl = gsap.timeline();

        tl.to(chars, {
          opacity: 1,
          duration: 0.01,
          stagger: {
            each: 0.02,
            onStart: function () {
              const activeChar = this.targets()[0];
              updateCursorPosition(activeChar);
            },
          },
          ease: 'power2.out',
          onComplete: () => {
            if (chars[chars.length - 1]) {
              updateCursorPosition(chars[chars.length - 1]);
            }
          },
        });
      },
    });

    // Handle window resize to keep cursor aligned
    const handleResize = () => {
      const lastChar = chars[chars.length - 1];
      if (lastChar && lastChar.style.opacity === '1') {
        updateCursorPosition(lastChar);
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      trigger.kill();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-12">
      <div
        ref={containerRef}
        className="relative max-w-4xl mx-auto p-6 md:p-8 rounded-3xl bg-[#f8f9fc] border border-[rgba(33,34,38,0.06)] shadow-sm select-none"
      >
        {/* Antigravity Custom Cursor Container */}
        <div
          ref={cursorRef}
          className="cursor-container flex items-center"
          style={{ willChange: 'transform' }}
        >
          <span className="w-[3px] h-[0.9em] bg-[#1a73e8] rounded-full inline-block shadow-[0_0_10px_rgba(26,115,232,0.8)] animate-pulse" />
        </div>

        {/* Typed Content Container */}
        <p
          ref={textRef}
          className="text-xl md:text-3xl font-medium tracking-tight text-[#121317] leading-relaxed md:leading-normal"
        >
          {FULL_TEXT}
        </p>

        {/* Provenance badge below */}
        <div className="mt-4 pt-4 border-t border-[rgba(33,34,38,0.06)] flex items-center justify-between text-xs text-[#80868b]">
          <span>AS9100D Rev D Certified Cleanroom Campus</span>
          <span className="font-mono text-[11px] text-[#45474d]">200k CPH SMT • Hyderabad Fabcity</span>
        </div>
      </div>
    </div>
  );
}
