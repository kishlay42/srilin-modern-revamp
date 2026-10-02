import React, { useState } from 'react';
import { 
  Check, 
  ArrowRight, 
  Zap, 
  ShieldCheck, 
  Factory, 
  FileText, 
  Clock, 
  Layers, 
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { SOLUTIONS_TIERS } from '../data/srilinAuthenticContent';

export default function SolutionsTiersSection() {
  const [selectedTier, setSelectedTier] = useState('all');

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const tier1 = SOLUTIONS_TIERS[0]; // Rapid NPI
  const tier2 = SOLUTIONS_TIERS[1]; // Mission-Critical Aerospace
  const tier3 = SOLUTIONS_TIERS[2]; // High Volume Mass Production

  return (
    <section 
      id="solutions-tiers" 
      className="py-24 bg-[#f8f9fc] border-t border-[rgba(33,34,38,0.06)] relative overflow-hidden"
    >
      {/* Navigation Anchor Aliases */}
      <span id="configurator" className="absolute -top-16" />
      <span id="pricing" className="absolute -top-16" />
      <span id="solutions" className="absolute -top-16" />
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[rgba(33,34,38,0.08)] shadow-xs mb-4">
            <span className="w-2 h-2 rounded-full bg-[#1a73e8]" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#45474d] font-semibold">
              FLEXIBLE MANUFACTURING ENGAGEMENT TIERS
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#121317] mb-4">
            From 24-Hour Prototype to Aerospace Fleet
          </h2>

          <p className="text-base md:text-lg text-[#45474d] leading-relaxed">
            Choose the engagement tier calibrated to your product lifecycle stage — rapid engineering verification or certified mission-critical volume production.
          </p>
        </div>

        {/* Dual Elevated Cards matching Google Antigravity Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Tier 1 Card: Rapid NPI & Engineering Prototype */}
          <div className="bg-white rounded-[32px] p-8 md:p-10 border border-[rgba(33,34,38,0.08)] shadow-lg shadow-black/[0.02] flex flex-col justify-between hover:border-[rgba(33,34,38,0.18)] transition-all duration-300 relative group">
            
            {/* Top Accent Pill */}
            <div className="flex items-center justify-between mb-6">
              <span className="px-3.5 py-1.5 rounded-full bg-[#eff2f7] text-[#121317] text-xs font-mono font-semibold uppercase tracking-wider">
                TIER 01 / RAPID NPI
              </span>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200 text-xs font-medium">
                <Clock className="w-3.5 h-3.5" />
                <span>24-48h Turnaround</span>
              </div>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#121317] tracking-tight mb-2">
                {tier1.tierName}
              </h3>
              
              <p className="text-sm text-[#45474d] mb-6 leading-relaxed">
                Accelerate hardware development with rapid automated SMT staging, real-time DFM clearance, and First Article Inspection reports.
              </p>

              {/* Volume & Quality Highlights */}
              <div className="grid grid-cols-2 gap-3 mb-6 p-4 rounded-2xl bg-[#f8f9fc] border border-[rgba(33,34,38,0.04)]">
                <div>
                  <div className="text-[11px] text-[#80868b] uppercase font-mono">Lot Size</div>
                  <div className="text-sm font-bold text-[#121317]">{tier1.targetVolume}</div>
                </div>
                <div>
                  <div className="text-[11px] text-[#80868b] uppercase font-mono">Quality Benchmark</div>
                  <div className="text-xs font-bold text-[#121317]">IPC Class 2 / Class 3</div>
                </div>
              </div>

              {/* Feature Checklist */}
              <div className="space-y-3 mb-8">
                <div className="text-xs font-mono uppercase tracking-wider text-[#80868b] font-semibold">
                  Program Inclusions
                </div>
                <ul className="space-y-3">
                  {tier1.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs md:text-sm text-[#2f3034]">
                      <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </div>
                      <span className="leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6 border-t border-[rgba(33,34,38,0.06)]">
              <button
                onClick={() => scrollToSection('intake-section')}
                className="w-full h-12 rounded-full bg-[#121317] text-white hover:bg-[#2f3034] text-sm font-medium transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm group-hover:shadow-md"
              >
                <span>Request 24h NPI Prototype Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-[11px] text-[#80868b] text-center mt-2.5">
                Instant DFM feedback within 2 hours of Gerber & BOM upload.
              </p>
            </div>

          </div>

          {/* Tier 2 Card: Mission-Critical Production & Aerospace EMS */}
          <div className="bg-[#121317] text-white rounded-[32px] p-8 md:p-10 border border-black/50 shadow-xl shadow-black/[0.08] flex flex-col justify-between relative group overflow-hidden">
            
            {/* Ambient subtle glow background */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#1a73e8]/20 via-[#c5283d]/15 to-transparent rounded-full blur-3xl pointer-events-none" />

            {/* Top Accent Pill */}
            <div className="flex items-center justify-between mb-6 relative z-10">
              <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-white text-xs font-mono font-semibold uppercase tracking-wider border border-white/10">
                TIER 02 / MISSION-CRITICAL
              </span>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-500/30 text-xs font-medium">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>AS9100D Rev D Certified</span>
              </div>
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-2">
                {tier2.tierName}
              </h3>
              
              <p className="text-sm text-[#b7bfd9] mb-6 leading-relaxed">
                Full-flight and life-critical assembly in Class 100,000 cleanroom with 100% component-to-box traceability and extended burn-in screening.
              </p>

              {/* Volume & Quality Highlights */}
              <div className="grid grid-cols-2 gap-3 mb-6 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div>
                  <div className="text-[11px] text-[#80868b] uppercase font-mono">Lot Size</div>
                  <div className="text-sm font-bold text-white">{tier2.targetVolume}</div>
                </div>
                <div>
                  <div className="text-[11px] text-[#80868b] uppercase font-mono">Workmanship Standard</div>
                  <div className="text-xs font-bold text-emerald-400">IPC-A-610 Class 3 Master</div>
                </div>
              </div>

              {/* Feature Checklist */}
              <div className="space-y-3 mb-8">
                <div className="text-xs font-mono uppercase tracking-wider text-[#80868b] font-semibold">
                  Program Inclusions
                </div>
                <ul className="space-y-3">
                  {tier2.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs md:text-sm text-white/90">
                      <div className="w-5 h-5 rounded-full bg-white/10 text-white flex items-center justify-center shrink-0 mt-0.5 border border-white/20">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </div>
                      <span className="leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6 border-t border-white/10 relative z-10">
              <button
                onClick={() => scrollToSection('intake-section')}
                className="w-full h-12 rounded-full bg-white text-[#121317] hover:bg-[#f1f3f8] text-sm font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md group-hover:shadow-lg"
              >
                <span>Schedule Aerospace & Defense Audit</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-[11px] text-[#80868b] text-center mt-2.5">
                Full Digital Device History Record (DHR) provided for every serial number.
              </p>
            </div>

          </div>

        </div>

        {/* Tier 3: High-Volume Commercial Strip */}
        <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 border border-[rgba(33,34,38,0.08)] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#f1f3f8] flex items-center justify-center shrink-0 text-[#121317]">
              <Factory className="w-6 h-6 text-[#1a73e8]" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#1a73e8]">
                  TIER 03 / MASS MANUFACTURING
                </span>
                <span className="text-xs px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-medium">
                  200,000 CPH
                </span>
              </div>
              <h4 className="text-lg font-bold text-[#121317]">
                {tier3.tierName}
              </h4>
              <p className="text-xs text-[#45474d] max-w-2xl">
                Continuous batch runs up to 500,000+ units with JIT Kanban delivery, automated PVA conformal coating, ultrasonic welding, and custom NI PXIe testing stations.
              </p>
            </div>
          </div>

          <button
            onClick={() => scrollToSection('intake-section')}
            className="google-pill google-pill-secondary shrink-0 cursor-pointer text-xs"
          >
            <span>Inquire for High Volume Mass Production</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
