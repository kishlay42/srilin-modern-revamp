import React, { useRef } from 'react';
import { Camera, Check, ArrowRight } from 'lucide-react';
import { OEM_PRODUCTS } from '../data/antigravitySrilinData';

export default function OEMProductPortalCard() {
  const product = OEM_PRODUCTS[0];
  const portalRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!portalRef.current) return;
    const rect = portalRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    portalRef.current.style.setProperty('--mouse-x', `${x}px`);
    portalRef.current.style.setProperty('--mouse-y', `${y}px`);

    const normX = (x / rect.width - 0.5) * 3;
    const normY = (0.5 - y / rect.height) * 3;
    portalRef.current.style.transform = `perspective(1000px) rotateX(${normY}deg) rotateY(${normX}deg)`;
  };

  const handleMouseLeave = () => {
    if (!portalRef.current) return;
    portalRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  };

  return (
    <section id="oem-product" className="relative py-20 max-w-[1440px] mx-auto px-6 md:px-12 select-none">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
        
        {/* Left Column: Editorial Typography */}
        <div className="lg:col-span-5 space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f8f9fc] border border-[rgba(33,34,38,0.06)] text-xs font-mono font-bold text-blue-600 uppercase tracking-wider">
            <Camera className="w-3.5 h-3.5" />
            <span>Proprietary SriLin OEM Hardware</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-[-1px] text-[#121317] leading-tight">
            AI ADAS + DMS camera system.
          </h2>

          <p className="text-sm sm:text-base text-[#45474d] leading-relaxed">
            Designed, calibrated, and assembled in our Hyderabad cleanroom facility. 
            Dual-channel automotive intelligence combining forward lane departure warnings with in-cabin infrared driver drowsiness tracking.
          </p>

          <div className="space-y-2 pt-2 text-xs">
            {product.features.slice(0, 4).map((f, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <div className="w-4 h-4 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-2.5 h-2.5" />
                </div>
                <div>
                  <strong className="text-[#121317]">{f.label}:</strong>{' '}
                  <span className="text-[#45474d]">{f.value}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-3">
            <a 
              href="https://wa.me/919177702120?text=Hello%20SriLin,%20I%20would%20like%20to%20request%20the%20technical%20datasheet%20for%20the%20AI%20ADAS%20+%20DMS%20Camera."
              target="_blank"
              rel="noopener noreferrer"
              className="google-pill google-pill-primary text-xs !h-11 !px-6 shadow-md"
            >
              <span>Request Technical Datasheet</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#e6a100]" />
            </a>
          </div>
        </div>

        {/* Right Column: Concentric Radial Glow Portal (Antigravity SDK Style) */}
        <div className="lg:col-span-7 relative flex items-center justify-center">
          
          {/* Antigravity Concentric Blue Radial Portal Glow */}
          <div className="absolute w-[440px] h-[440px] rounded-full bg-gradient-to-r from-blue-600/30 via-indigo-500/20 to-cyan-400/30 blur-[70px] pointer-events-none" />

          {/* Deep Navy Showcase Portal Container */}
          <div
            ref={portalRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-full aspect-square max-w-[480px] rounded-3xl bg-[#070e1e] p-6 border border-slate-800 shadow-2xl flex flex-col justify-between overflow-hidden transition-transform duration-200"
            style={{ willChange: 'transform' }}
          >
            {/* Spotlight */}
            <div className="card-spotlight bg-radial-[500px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(56,189,248,0.15),transparent_70%]" />

            {/* Top Status Bar */}
            <div className="flex items-center justify-between text-xs text-slate-300 z-10">
              <span className="flex items-center gap-1.5 font-mono text-[11px] text-cyan-300">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>EDGE NPU INFERENCE LIVE</span>
              </span>
              <span className="text-[10px] font-mono text-slate-400 border border-slate-700 px-2 py-0.5 rounded-full">
                AEC-Q100 SILICON
              </span>
            </div>

            {/* Central Hardware Image with Atmospheric Glow */}
            <div className="relative my-auto flex items-center justify-center py-4 z-10">
              <div className="relative w-full max-w-[340px] rounded-2xl overflow-hidden border border-slate-700 shadow-2xl group">
                <img 
                  src="/assets/image/adas-camera-real.jpg" 
                  alt="AI ADAS + DMS Camera Hardware" 
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Visual Camera Channel Overlay Tags */}
                <div className="absolute top-2 left-2 bg-black/70 backdrop-blur-md text-[10px] text-emerald-400 font-mono px-2 py-0.5 rounded border border-emerald-500/30">
                  CH1: 1080P Forward
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 backdrop-blur-md text-[10px] text-amber-400 font-mono px-2 py-0.5 rounded border border-amber-500/30">
                  CH2: 720P IR 940nm
                </div>
              </div>
            </div>

            {/* Bottom Hardware Spec Metrics Pill */}
            <div className="grid grid-cols-3 gap-2 bg-slate-900/90 border border-slate-800 p-2.5 rounded-2xl text-center text-white z-10">
              <div>
                <div className="text-[10px] text-slate-400 font-mono">FRAME RATE</div>
                <div className="text-xs font-bold text-cyan-300 font-mono">60 FPS HDR</div>
              </div>
              <div className="border-x border-slate-800">
                <div className="text-[10px] text-slate-400 font-mono">NPU POWER</div>
                <div className="text-xs font-bold text-emerald-300 font-mono">2.0 TOPS</div>
              </div>
              <div>
                <div className="text-[10px] text-slate-400 font-mono">CELLULAR</div>
                <div className="text-xs font-bold text-amber-300 font-mono">4G LTE Cat-4</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
