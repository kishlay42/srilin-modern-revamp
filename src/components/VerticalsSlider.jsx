import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Rocket, Car, HeartPulse, Radio, Cpu, TrainTrack, ArrowRight } from 'lucide-react';
import { INDUSTRY_VERTICALS } from '../data/antigravitySrilinData';

const VERTICAL_CARDS = [
  {
    id: "aero",
    title: "Aviation, Space & Defense",
    badge: "AS9100D Rev D",
    desc: "Flight-grade avionics, satellite payloads, and vibration-hardened telemetry conforming to strict aerospace quality management.",
    specs: ["100% Component Serialization", "Nordson 160kV X-Ray Void Check", "Conformal Moisture Barrier"],
    icon: Rocket,
    color: "#c5283d"
  },
  {
    id: "auto",
    title: "Automotive & EV Electronics",
    badge: "AEC-Q100 / IATF",
    desc: "EV battery management systems (BMS), proprietary AI ADAS camera suites, and motor controllers engineered for thermal resilience.",
    specs: ["Heavy Copper 3oz-6oz", "Ultrasonic Terminal Welding", "ISO 16750 Harsh Vibration"],
    icon: Car,
    color: "#1a73e8"
  },
  {
    id: "med",
    title: "Medical & Diagnostic IVD",
    badge: "ISO 13485 Cleanroom",
    desc: "Class II/III medical instrumentation, patient diagnostic equipment, and surgical robotics operating under ISO-8 cleanroom protocol.",
    specs: ["IPC Class 3 Assemblies", "Zero Flux Residue Washing", "Traceable Component Batches"],
    icon: HeartPulse,
    color: "#00b95c"
  },
  {
    id: "telecom",
    title: "5G Infrastructure & Telecom",
    badge: "Rogers RF / 77GHz",
    desc: "High-frequency microwave boards, 5G phased array antennas, and macro base stations with tight controlled impedance tolerances.",
    specs: ["50Ω Single-Ended / 100Ω Diff", "Low-Loss Ceramic Substrates", "LDI Fine Line Micro-Etch"],
    icon: Radio,
    color: "#e6a100"
  },
  {
    id: "iot",
    title: "AI, Edge IoT & Automation",
    badge: "Quick-Turn NPI",
    desc: "Compact smart gateways, edge neural inference nodes, and industrial PLC control modules with fast 12-day turnaround cycles.",
    specs: ["01005 Micro Component SMT", "Automated Bed-of-Nails FCT", "Direct Enclosure Integration"],
    icon: Cpu,
    color: "#8e44ad"
  }
];

export default function VerticalsSlider() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const offset = direction === 'left' ? -380 : 380;
    scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
  };

  return (
    <section className="relative py-20 max-w-7xl mx-auto px-4 sm:px-6">
      
      {/* Header with Slider Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div className="max-w-2xl">
          <span className="text-[11px] font-mono font-bold text-[#c5283d] uppercase tracking-wider bg-red-50 px-3 py-1 rounded-full">
            MARKET VERTICALS & SECTOR SOLUTIONS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1f1f1f] mt-3 font-sans">
            Built for mission-critical sectors.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            SriLin Electronics is built for high reliability, whether you're developing orbital launch avionics, 
            EV battery management systems, or life-support medical diagnostics.
          </p>
        </div>

        {/* Antigravity Pill Slider Navigation Buttons */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => scroll('left')}
            className="w-10 h-10 rounded-full border border-slate-300 hover:bg-slate-100 flex items-center justify-center text-slate-700 transition-colors cursor-pointer active:scale-95"
            aria-label="Previous Sector"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-10 h-10 rounded-full border border-slate-300 hover:bg-slate-100 flex items-center justify-center text-slate-700 transition-colors cursor-pointer active:scale-95"
            aria-label="Next Sector"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Horizontal Carousel Track */}
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-6 pt-2"
      >
        {VERTICAL_CARDS.map((card) => {
          const IconComponent = card.icon;
          return (
            <div
              key={card.id}
              className="min-w-[320px] sm:min-w-[360px] max-w-[380px] bg-white rounded-3xl p-6 border border-black/[0.08] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div 
                    className="w-10 h-10 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: `${card.color}15`, color: card.color }}
                  >
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                    {card.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#c5283d] transition-colors mb-2">
                  {card.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {card.desc}
                </p>

                <div className="space-y-1.5 pt-4 border-t border-slate-100">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                    Manufacturing Standards:
                  </span>
                  {card.specs.map((s, idx) => (
                    <div key={idx} className="text-xs text-slate-700 font-medium flex items-center space-x-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c5283d]"></span>
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <a
                  href={`https://wa.me/919177702120?text=Hello%20SriLin,%20I%20would%20like%20to%20discuss%20an%20electronics%20project%20for%20the%20${encodeURIComponent(card.title)}%20sector.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-slate-900 hover:text-[#c5283d] flex items-center space-x-1.5 transition-colors"
                >
                  <span>Explore Sector Capabilities</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
