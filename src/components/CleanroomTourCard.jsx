import React, { useState } from 'react';
import { Cpu, ShieldCheck, CheckCircle2, ArrowRight, Play, Eye } from 'lucide-react';

const MACHINES = [
  {
    id: 'fuji',
    name: 'Fuji AIMEX IIIc',
    speed: '103,000 CPH',
    accuracy: '±0.025 mm (3σ)',
    capability: '01005 Micro-Passives to 72mm ICs',
    role: 'Primary High-Density SMT Placement Robot'
  },
  {
    id: 'panasonic',
    name: 'Panasonic NPM-D3A',
    speed: '92,500 CPH',
    accuracy: '±0.025 mm (3σ)',
    capability: '50x50 mm to 510x590 mm Large Form Boards',
    role: 'High-Velocity SMT Dual-Gantry Placement'
  },
  {
    id: 'kohyoung',
    name: 'Koh Young 3D SPI',
    speed: 'Closed-Loop KSMART',
    accuracy: '0.37 µm Z-Resolution',
    capability: 'Volume, Height, Bridging & Coplanarity',
    role: 'Solder Paste 3D Inspection with Auto-Correction'
  },
  {
    id: 'nordson',
    name: 'Nordson 160kV X-Ray',
    speed: '7,500x Magnification',
    accuracy: '0.95 µm Feature Recognition',
    capability: 'BGA Void Percentage & Internal Delamination',
    role: 'Non-Destructive Aerospace Defect Inspection'
  }
];

export default function CleanroomTourCard() {
  const [activeMachine, setActiveMachine] = useState(MACHINES[0]);

  return (
    <section className="relative py-20 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Editorial Typography */}
        <div className="lg:col-span-5 space-y-5">
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full">
            <Cpu className="w-3.5 h-3.5" />
            <span>200,000 CPH SMT Fleet</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1f1f1f] leading-tight font-sans">
            Fuji & Panasonic cleanroom robotics.
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Operating in our Class 100,000 (ISO-8) cleanroom, our automated high-velocity SMT lines handle 
            everything from rapid 12-day flight prototypes to high-volume commercial production runs.
          </p>

          <div className="space-y-2 pt-2">
            <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
              Select Machine to Inspect Specs:
            </div>
            <div className="grid grid-cols-2 gap-2">
              {MACHINES.map((m) => (
                <button
                  key={m.id}
                  onClick={() => setActiveMachine(m)}
                  className={`p-2.5 rounded-xl text-left transition-all text-xs font-bold ${
                    activeMachine.id === m.id
                      ? 'bg-[#c5283d] text-white shadow-md'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                  }`}
                >
                  <div className="truncate">{m.name}</div>
                  <div className={`text-[10px] font-mono font-normal mt-0.5 ${activeMachine.id === m.id ? 'text-white/80' : 'text-slate-500'}`}>
                    {m.speed}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="pt-3">
            <a 
              href="https://wa.me/919177702120?text=Hello%20SriLin,%20I%20would%20like%20to%20schedule%20a%20physical%20cleanroom%20plant%20audit%20at%20Raviryala."
              target="_blank"
              rel="noopener noreferrer"
              className="glass-pill px-6 py-3 text-xs font-bold text-slate-800 hover:text-black inline-flex items-center space-x-2 shadow-sm"
            >
              <span>Schedule Plant Audit at Raviryala</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#c5283d]" />
            </a>
          </div>
        </div>

        {/* Right Column: Video & Technical Inspection Surface */}
        <div className="lg:col-span-7 relative">
          
          <div className="rainbow-glow opacity-50"></div>

          <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-6 sm:p-7 border border-black/[0.08] shadow-2xl relative">
            
            {/* Machine Video Stream Snippet */}
            <div className="rounded-2xl overflow-hidden aspect-[16/9] bg-black mb-5 relative group">
              <video
                src="/assets/video/srilin_cleanroom_manufacturing.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-mono text-emerald-400 flex items-center space-x-1.5 border border-emerald-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>LIVE SMT OPTICAL FEED</span>
              </div>
            </div>

            {/* Active Machine Technical Inspection Sheet */}
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono font-bold text-[#c5283d] uppercase tracking-wider block">
                    Equipment Specification
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    {activeMachine.name}
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono font-extrabold text-slate-900 bg-white border border-slate-200 px-2.5 py-1 rounded-lg shadow-sm block">
                    {activeMachine.speed}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs pt-1 border-t border-slate-200/60">
                <div>
                  <span className="text-slate-500 text-[11px] block">Placement Accuracy:</span>
                  <span className="font-bold font-mono text-slate-800">{activeMachine.accuracy}</span>
                </div>
                <div>
                  <span className="text-slate-500 text-[11px] block">Handling Window:</span>
                  <span className="font-bold text-slate-800">{activeMachine.capability}</span>
                </div>
              </div>

              <div className="text-[11px] text-slate-600 bg-white p-2.5 rounded-xl border border-slate-200/60">
                <strong>Process Role:</strong> {activeMachine.role}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
