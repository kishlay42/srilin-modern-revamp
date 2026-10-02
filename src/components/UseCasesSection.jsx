import React, { useRef, useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  ShieldCheck, 
  Rocket, 
  Crosshair, 
  Car, 
  HeartPulse, 
  Wifi, 
  CheckCircle2, 
  ArrowUpRight 
} from 'lucide-react';
import { INDUSTRY_USE_CASES } from '../data/srilinAuthenticContent';

export default function UseCasesSection() {
  const sliderRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  // Icon mapping per industry
  const industryIcons = {
    'aerospace-space': Rocket,
    'defense-telemetry': Crosshair,
    'automotive-adas': Car,
    'medical-diagnostics': HeartPulse,
    'audio-telecom-iot': Wifi
  };

  const updateScrollButtons = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    const cardWidth = 420; // approximate card width + gap
    const index = Math.round(scrollLeft / cardWidth);
    setActiveSlideIndex(Math.min(INDUSTRY_USE_CASES.length - 1, Math.max(0, index)));
  };

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateScrollButtons);
    updateScrollButtons();
    return () => el.removeEventListener('scroll', updateScrollButtons);
  }, []);

  const scroll = (direction) => {
    if (!sliderRef.current) return;
    const scrollAmount = 440;
    sliderRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <section 
      id="use-cases" 
      className="py-24 bg-white border-t border-[rgba(33,34,38,0.06)] relative overflow-hidden"
    >
      {/* Navigation Anchor Aliases */}
      <span id="verticals" className="absolute -top-16" />
      <span id="industries" className="absolute -top-16" />
      <span id="sectors" className="absolute -top-16" />
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Header & Controls Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f8f9fc] border border-[rgba(33,34,38,0.08)] mb-4">
              <span className="w-2 h-2 rounded-full bg-[#c5283d]" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#45474d] font-semibold">
                MISSION-CRITICAL INDUSTRY SOLUTIONS
              </span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#121317] mb-3">
              Precision Electronics for Demanding Environments
            </h2>
            
            <p className="text-base md:text-lg text-[#45474d]">
              Delivering AS9100D flight-critical avionics, automotive ASIL-B vision systems, and ISO 13485 life-diagnostic hardware across India's premier high-reliability programs.
            </p>
          </div>

          {/* Slider Navigation Buttons */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="text-xs font-mono text-[#80868b] mr-2 hidden sm:block">
              0{activeSlideIndex + 1} / 0{INDUSTRY_USE_CASES.length}
            </div>
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              aria-label="Previous Industry"
              className={`w-11 h-11 rounded-full flex items-center justify-center border transition-all cursor-pointer ${
                canScrollLeft
                  ? 'bg-white text-[#121317] border-[rgba(33,34,38,0.15)] hover:bg-[#f1f3f8] shadow-xs'
                  : 'bg-[#f8f9fc] text-[#cdd4dc] border-[rgba(33,34,38,0.06)] cursor-not-allowed'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              aria-label="Next Industry"
              className={`w-11 h-11 rounded-full flex items-center justify-center border transition-all cursor-pointer ${
                canScrollRight
                  ? 'bg-white text-[#121317] border-[rgba(33,34,38,0.15)] hover:bg-[#f1f3f8] shadow-xs'
                  : 'bg-[#f8f9fc] text-[#cdd4dc] border-[rgba(33,34,38,0.06)] cursor-not-allowed'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Card Slider Container */}
        <div 
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto pb-8 pt-2 no-scrollbar scroll-smooth snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {INDUSTRY_USE_CASES.map((uc, index) => {
            const Icon = industryIcons[uc.id] || Rocket;
            return (
              <div
                key={uc.id}
                className="w-[320px] sm:w-[380px] md:w-[420px] shrink-0 snap-start bg-[#f8f9fc] rounded-[28px] border border-[rgba(33,34,38,0.08)] hover:border-[rgba(33,34,38,0.18)] hover:shadow-xl hover:shadow-black/[0.04] transition-all duration-300 flex flex-col overflow-hidden group select-none"
              >
                {/* Visual Showcase Top Banner */}
                <div className="relative h-56 w-full bg-[#121317] overflow-hidden">
                  <img
                    src={uc.image}
                    alt={uc.industry}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121317]/90 via-[#121317]/30 to-transparent" />
                  
                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-mono font-semibold text-[#121317] shadow-xs">
                      {uc.badge}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white border border-white/10">
                      <Icon className="w-4 h-4 text-[#e6a100]" />
                    </div>
                  </div>

                  {/* Bottom Image Headline */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {uc.industry}
                    </h3>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  
                  {/* Client / Partner Ecosystem */}
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-[#80868b] mb-2 font-semibold">
                      Client & Program Ecosystem
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {uc.clientPartners.map((partner, pIdx) => (
                        <span 
                          key={pIdx}
                          className="px-2.5 py-1 rounded-md bg-white border border-[rgba(33,34,38,0.06)] text-xs font-medium text-[#121317]"
                        >
                          {partner}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Mission Profiles / Applications */}
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-[#80868b] mb-2.5 font-semibold">
                      Mission Deployments
                    </div>
                    <ul className="space-y-2 text-xs text-[#45474d]">
                      {uc.applications.map((app, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#1a73e8] shrink-0 mt-0.5" />
                          <span className="leading-snug">{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technical Highlights Box */}
                  <div className="p-3 rounded-xl bg-white border border-[rgba(33,34,38,0.06)] text-xs">
                    <span className="font-semibold text-[#121317] block mb-1">
                      Technical Assurance:
                    </span>
                    <span className="text-[#45474d] text-[11px] leading-relaxed">
                      {uc.technicalHighlights}
                    </span>
                  </div>

                  {/* Standards Badges Footer */}
                  <div className="pt-2 border-t border-[rgba(33,34,38,0.06)] flex flex-wrap gap-1.5">
                    {uc.standardsApplied.map((std, sIdx) => (
                      <span 
                        key={sIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#eff2f7] text-[#45474d]"
                      >
                        {std}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* Progress Bar Indicator */}
        <div className="w-full max-w-xs mx-auto mt-4 h-1 bg-[#eff2f7] rounded-full overflow-hidden">
          <div 
            className="h-full bg-[#121317] transition-all duration-300 rounded-full"
            style={{ 
              width: `${((activeSlideIndex + 1) / INDUSTRY_USE_CASES.length) * 100}%` 
            }}
          />
        </div>

      </div>
    </section>
  );
}
