import React, { useState, useRef } from 'react';
import { Terminal, CheckCircle, Activity, Play, RefreshCw, Cpu, Layers } from 'lucide-react';
import { TEST_ENGINEERING_LABVIEW } from '../data/antigravitySrilinData';

export default function LabVIEWTerminalCard() {
  const [testState, setTestState] = useState('idle'); // 'idle', 'running', 'passed'
  const terminalRef = useRef(null);

  const runTestSequence = () => {
    setTestState('running');
    setTimeout(() => {
      setTestState('passed');
    }, 1800);
  };

  const handleMouseMove = (e) => {
    if (!terminalRef.current) return;
    const rect = terminalRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    terminalRef.current.style.setProperty('--mouse-x', `${x}px`);
    terminalRef.current.style.setProperty('--mouse-y', `${y}px`);

    const normX = (x / rect.width - 0.5) * 3;
    const normY = (0.5 - y / rect.height) * 3;
    terminalRef.current.style.transform = `perspective(1000px) rotateX(${normY}deg) rotateY(${normX}deg)`;
  };

  const handleMouseLeave = () => {
    if (!terminalRef.current) return;
    terminalRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  };

  return (
    <section id="labview" className="relative py-20 max-w-[1440px] mx-auto px-6 md:px-12 select-none">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
        
        {/* Left Column: Editorial Typography */}
        <div className="lg:col-span-5 space-y-5 order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f8f9fc] border border-[rgba(33,34,38,0.06)] text-xs font-mono font-bold text-amber-600 uppercase tracking-wider">
            <Terminal className="w-3.5 h-3.5" />
            <span>NI LabVIEW Test Engineering</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-[-1px] text-[#121317] leading-tight">
            Sub-45s automated test engineering.
          </h2>

          <p className="text-sm sm:text-base text-[#45474d] leading-relaxed">
            Eliminate human operator error with dedicated National Instruments LabVIEW automated test suites. 
            Directly interfacing with Keysight, Rohde & Schwarz, and NI PXI instrumentation for complete electrical, RF, and thermal validation.
          </p>

          <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
            <div className="p-3.5 bg-[#f8f9fc] rounded-2xl border border-[rgba(33,34,38,0.06)]">
              <span className="font-semibold text-[#121317] block">Bed-of-Nails FCT</span>
              <span className="text-[#80868b] text-[11px]">Custom in-house pneumatic test fixtures</span>
            </div>
            <div className="p-3.5 bg-[#f8f9fc] rounded-2xl border border-[rgba(33,34,38,0.06)]">
              <span className="font-semibold text-[#121317] block">DAQ Telemetry</span>
              <span className="text-[#80868b] text-[11px]">Serialized parametric yield logging</span>
            </div>
          </div>

          <div className="pt-3">
            <button
              onClick={runTestSequence}
              className="google-pill google-pill-primary text-xs !h-11 !px-6 cursor-pointer shadow-md"
            >
              <Play className="w-3.5 h-3.5 fill-white" />
              <span>Simulate Automated ATE Test Run</span>
            </button>
          </div>
        </div>

        {/* Right Column: Dark macOS Terminal Window (Antigravity CLI Style) */}
        <div className="lg:col-span-7 order-1 lg:order-2 relative">
          
          {/* Deep Space Background Glow */}
          <div className="absolute inset-0 bg-blue-600/15 blur-[70px] rounded-full pointer-events-none" />

          <div
            ref={terminalRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="bg-[#0e1117] text-slate-200 rounded-3xl p-5 sm:p-7 border border-slate-800 shadow-2xl relative font-mono text-xs transition-transform duration-200 overflow-hidden"
            style={{ willChange: 'transform' }}
          >
            {/* Terminal Spotlight */}
            <div className="card-spotlight bg-radial-[500px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(59,130,246,0.12),transparent_70%]" />

            {/* macOS Window Title Bar */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-4 relative z-10">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block" />
              </div>
              <span className="text-[11px] text-slate-400">
                srilin-ate-bench — ni-pxi-1082e [CH1-CH8]
              </span>
              <span className="text-[10px] text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
                ONLINE
              </span>
            </div>

            {/* Terminal Body */}
            <div className="space-y-2.5 text-[11px] sm:text-xs relative z-10">
              <div className="text-slate-500">
                # National Instruments LabVIEW 2026 Engine Initialized
              </div>
              <div className="text-slate-400">
                &gt; target: PCBA_SRILIN_AERO_REV_D | serial: SN-2026-9042
              </div>
              <div className="text-slate-400">
                &gt; instrument_bus: GPIB0::14::INSTR, USB0::0x0957::0x0607
              </div>

              <div className="pt-2 text-cyan-400 flex items-center gap-2">
                <Activity className="w-3.5 h-3.5 animate-pulse text-cyan-300 shrink-0" />
                <span>[1/4] DC POWER RAILS: 3.3V (3.298V, ripple 8.2mV)</span>
                <span className="text-emerald-400 font-bold ml-auto">[PASS]</span>
              </div>

              <div className="text-cyan-400 flex items-center gap-2">
                <Activity className="w-3.5 h-3.5 text-cyan-300 shrink-0" />
                <span>[2/4] SPI / I2C BUS FREQUENCY: 50.00 MHz locked</span>
                <span className="text-emerald-400 font-bold ml-auto">[PASS]</span>
              </div>

              <div className="text-amber-400 flex items-center gap-2">
                <Activity className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                <span>[3/4] NORDSON 160kV X-RAY: BGA voiding 4.2% (&lt; 15%)</span>
                <span className="text-emerald-400 font-bold ml-auto">[PASS]</span>
              </div>

              <div className="text-emerald-400 flex items-center gap-2">
                <Activity className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
                <span>[4/4] RF MICROWAVE RETURN LOSS: -26.4 dB @ 2.4GHz</span>
                <span className="text-emerald-400 font-bold ml-auto">[PASS]</span>
              </div>

              {testState === 'running' && (
                <div className="pt-3 flex items-center gap-2 text-amber-300 animate-pulse">
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span>Executing High-Pot & In-Circuit Stress Matrix...</span>
                </div>
              )}

              {testState === 'passed' && (
                <div className="mt-3 p-3 bg-emerald-950/60 border border-emerald-500/40 rounded-2xl text-emerald-300 flex items-center justify-between">
                  <span className="font-bold flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span>ZERO-DEFECT ASSEMBLY PASSED (38.4 SECONDS)</span>
                  </span>
                  <span className="text-[10px] bg-emerald-900/60 px-2 py-0.5 rounded-md">
                    SERIALIZED TO MES
                  </span>
                </div>
              )}

              <div className="pt-2 text-slate-500 text-[10px]">
                Click 'Simulate Automated ATE Test Run' to trigger automated diagnostic cycle.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
