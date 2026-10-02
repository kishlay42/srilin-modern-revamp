import React, { useState, useRef } from 'react';
import { Layers, ShieldCheck, Zap, ArrowRight, CheckCircle2, Sliders, Info, Sparkles } from 'lucide-react';
import { calculateDfmConfidence } from '../data/antigravitySrilinData';

export default function ConfiguratorCard() {
  const [layers, setLayers] = useState(4);
  const [substrate, setSubstrate] = useState('FR-4');
  const [quantity, setQuantity] = useState(10);
  const [surfaceFinish, setSurfaceFinish] = useState('ENIG (Gold)');
  const [bgaInspection, setBgaInspection] = useState(true);
  const [minTraceMil, setMinTraceMil] = useState(4);
  const [currency, setCurrency] = useState('INR');

  const cardRef = useRef(null);

  // Dynamic DFM confidence calculation
  const dfmResult = calculateDfmConfidence({
    layers,
    minTraceMil,
    surfaceFinish,
    bgaInspection,
  });

  // Dynamic price calculation
  const basePriceINR =
    (layers * 480 +
      (substrate === 'Rogers 4350B' ? 4200 : substrate === 'Aluminum' ? 1800 : 500) +
      (surfaceFinish.includes('Gold') ? 950 : 250)) *
    (quantity <= 10 ? 1 : 0.85);
  const totalCostINR = Math.round(basePriceINR * quantity);
  const totalCostUSD = (totalCostINR / 87.5).toFixed(2);

  // Mouse Spotlight & 3D Tilt interaction
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);

    const normX = (x / rect.width - 0.5) * 3;
    const normY = (0.5 - y / rect.height) * 3;
    cardRef.current.style.transform = `perspective(1000px) rotateX(${normY}deg) rotateY(${normX}deg)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  };

  return (
    <section id="configurator" className="relative py-20 max-w-[1440px] mx-auto px-6 md:px-12 select-none">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
        
        {/* Left Column: Editorial Typography */}
        <div className="lg:col-span-5 space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f8f9fc] border border-[rgba(33,34,38,0.06)] text-xs font-mono font-bold text-[#c5283d] uppercase tracking-wider">
            <Sliders className="w-3.5 h-3.5" />
            <span>SriLin Configurator 2.0</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-[-1px] text-[#121317] leading-tight">
            Your command center for turnkey SMT intake.
          </h2>

          <p className="text-sm sm:text-base text-[#45474d] leading-relaxed">
            Configure complex multi-layer boards, select specialized Rogers RF or heavy copper substrates, 
            and evaluate real-time DFM process windows. Instant estimates backed by our Class 100,000 cleanroom guarantee.
          </p>

          <ul className="space-y-2.5 text-xs text-[#121317] pt-2">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span><strong>100% Domestic EMS:</strong> Claim 18% GST input tax credit immediately</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span><strong>AS9100D Rev D:</strong> Full component traceability from reel to dispatch</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span><strong>Automated Pre-Flight:</strong> Gerber & BOM encrypted intake</span>
            </li>
          </ul>

          <div className="pt-4">
            <a 
              href="https://wa.me/919177702120?text=Hello%20SriLin,%20I%20would%20like%20to%20submit%20an%20RFQ%20for%20a%20turnkey%20SMT%20build."
              target="_blank"
              rel="noopener noreferrer"
              className="google-pill google-pill-secondary text-xs !h-10 !px-5"
            >
              <span>Schedule Engineering Review</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#c5283d]" />
            </a>
          </div>
        </div>

        {/* Right Column: Luminous Card with Rainbow Glow and Mouse Spotlight */}
        <div className="lg:col-span-7 relative">
          
          {/* Antigravity Rainbow Backlight Blur */}
          <div className="rainbow-glow" />

          {/* Interactive Card Surface */}
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="luminous-card bg-white/95 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-2xl relative transition-transform duration-200"
            style={{ willChange: 'transform' }}
          >
            {/* Dynamic Mouse Spotlight */}
            <div className="card-spotlight" />

            <div className="flex items-center justify-between pb-4 border-b border-[rgba(33,34,38,0.06)] relative z-10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-mono font-bold text-[#121317] uppercase">Live Pricing & DFM Engine</span>
              </div>
              <div className="flex items-center bg-[#f0f4f9] p-0.5 rounded-xl text-xs font-semibold">
                <button
                  onClick={() => setCurrency('INR')}
                  className={`px-3 py-1 rounded-lg transition-all ${currency === 'INR' ? 'bg-white shadow-sm text-[#c5283d]' : 'text-[#45474d]'}`}
                >
                  INR ₹
                </button>
                <button
                  onClick={() => setCurrency('USD')}
                  className={`px-3 py-1 rounded-lg transition-all ${currency === 'USD' ? 'bg-white shadow-sm text-[#c5283d]' : 'text-[#45474d]'}`}
                >
                  USD $
                </button>
              </div>
            </div>

            {/* Configurator Controls Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-6 text-xs relative z-10">
              
              {/* Layer Count */}
              <div>
                <label className="block text-[#45474d] font-semibold mb-1.5">Layer Count</label>
                <div className="grid grid-cols-6 gap-1.5">
                  {[2, 4, 6, 8, 12, 16].map((num) => (
                    <button
                      key={num}
                      onClick={() => setLayers(num)}
                      className={`py-2 rounded-xl font-bold font-mono text-center transition-all ${
                        layers === num 
                          ? 'bg-[#c5283d] text-white shadow-md scale-105' 
                          : 'bg-[#f0f4f9] hover:bg-[#e6eaf0] text-[#121317]'
                      }`}
                    >
                      {num}L
                    </button>
                  ))}
                </div>
              </div>

              {/* Base Substrate */}
              <div>
                <label className="block text-[#45474d] font-semibold mb-1.5">Substrate Material</label>
                <div className="grid grid-cols-3 gap-1.5">
                  {['FR-4', 'Rogers 4350B', 'Aluminum'].map((sub) => (
                    <button
                      key={sub}
                      onClick={() => setSubstrate(sub)}
                      className={`py-2 px-1 text-[11px] rounded-xl font-semibold text-center truncate transition-all ${
                        substrate === sub 
                          ? 'bg-[#121317] text-white shadow-md' 
                          : 'bg-[#f0f4f9] hover:bg-[#e6eaf0] text-[#121317]'
                      }`}
                    >
                      {sub}
                    </button>
                  ))}
                </div>
              </div>

              {/* Surface Finish */}
              <div>
                <label className="block text-[#45474d] font-semibold mb-1.5">Surface Metallurgy</label>
                <div className="grid grid-cols-2 gap-1.5">
                  {['ENIG (Gold)', 'Lead-Free HASL'].map((finish) => (
                    <button
                      key={finish}
                      onClick={() => setSurfaceFinish(finish)}
                      className={`py-2 px-2 text-[11px] rounded-xl font-semibold text-center truncate transition-all ${
                        surfaceFinish === finish 
                          ? 'bg-[#121317] text-white shadow-md' 
                          : 'bg-[#f0f4f9] hover:bg-[#e6eaf0] text-[#121317]'
                      }`}
                    >
                      {finish}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Slider */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-[#45474d] font-semibold">Production Quantity</label>
                  <span className="font-mono font-bold text-[#121317]">{quantity} Units</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="500"
                  step="5"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="w-full accent-[#c5283d] h-2 bg-[#f0f4f9] rounded-lg cursor-pointer"
                />
              </div>

            </div>

            {/* DFM Confidence Bar */}
            <div className="p-3.5 bg-[#f8f9fc] rounded-2xl border border-[rgba(33,34,38,0.06)] relative z-10 mb-6">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="font-semibold text-[#121317] flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  DFM Process Window Capability
                </span>
                <span className="font-mono font-bold text-emerald-600">
                  {dfmResult.score}% Optimal
                </span>
              </div>
              <div className="w-full bg-[#e6eaf0] h-2 rounded-full overflow-hidden">
                <div
                  className="bg-emerald-500 h-full rounded-full transition-all duration-500"
                  style={{ width: `${dfmResult.score}%` }}
                />
              </div>
              <p className="text-[11px] text-[#45474d] mt-1.5">
                {dfmResult.notes}
              </p>
            </div>

            {/* Price Output & Instant Action */}
            <div className="flex flex-col sm:flex-row items-center justify-between pt-4 border-t border-[rgba(33,34,38,0.06)] gap-4 relative z-10">
              <div>
                <span className="text-[11px] text-[#80868b] block">Estimated Turnkey PCBA</span>
                <div className="text-2xl font-bold font-mono text-[#121317]">
                  {currency === 'INR' ? `₹${totalCostINR.toLocaleString()}` : `$${totalCostUSD}`}
                  <span className="text-xs font-normal text-[#80868b] ml-1.5 font-sans">
                    ({quantity} boards + SMT setup)
                  </span>
                </div>
              </div>

              <a
                href={`https://wa.me/919177702120?text=Hello%20SriLin,%20I%20configured%20a%20${layers}-layer%20${substrate}%20PCBA%20(${quantity}%20units)%20on%20SriLin%20Electronics.%20Estimate:%20${currency}%20${currency === 'INR' ? totalCostINR : totalCostUSD}.%20Please%20review%20my%20Gerbers.`}
                target="_blank"
                rel="noopener noreferrer"
                className="google-pill google-pill-primary text-xs w-full sm:w-auto justify-center"
              >
                <span>Upload Gerbers & Lock Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
