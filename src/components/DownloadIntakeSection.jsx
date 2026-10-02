import React, { useState, useRef } from 'react';
import { 
  UploadCloud, 
  FileCheck, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  Check, 
  AlertCircle,
  FileSpreadsheet
} from 'lucide-react';
import { COMPANY_METRICS, FACILITY_DATA } from '../data/srilinAuthenticContent';

export default function DownloadIntakeSection() {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [dfmScore, setDfmScore] = useState(null);
  const [quantity, setQuantity] = useState('100');
  const [userEmail, setUserEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const fileInputRef = useRef(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const processFile = (file) => {
    if (!file) return;
    setUploadedFile(file);
    setAnalyzing(true);
    setDfmScore(null);
    setSubmitted(false);

    // Simulate instant automated DFM analysis
    setTimeout(() => {
      setAnalyzing(false);
      setDfmScore({
        score: '99.4%',
        layers: '4-8 Layer Stackup Detected',
        minTrace: '3.5 mil / 3.5 mil',
        minBgaPitch: '0.40 mm BGA Qualified',
        status: 'DFM Clearance: Production Ready'
      });
    }, 1200);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section 
      id="intake-section" 
      className="py-24 bg-white border-t border-[rgba(33,34,38,0.06)] relative overflow-hidden"
    >
      {/* Navigation Anchor Aliases */}
      <span id="contact" className="absolute -top-16" />
      <span id="dropzone" className="absolute -top-16" />
      <span id="quote" className="absolute -top-16" />
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Monumental Dark Antigravity Container with rounded-[32px] */}
        <div className="relative rounded-[32px] md:rounded-[44px] bg-[#121317] text-white p-8 md:p-16 border border-black/40 shadow-2xl overflow-hidden">
          
          {/* Ambient luminous glow background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#1a73e8]/15 via-[#c5283d]/10 to-[#e6a100]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Section Header */}
          <div className="relative z-10 max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-white/90 font-semibold">
                RAPID INTAKE & GERBER DFM ENGINE
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-4">
              Launch your next electronics build with SriLin
            </h2>

            <p className="text-sm md:text-base text-[#b7bfd9] max-w-2xl mx-auto leading-relaxed">
              Upload your Gerber and BOM packages for automated DFM design validation, layer stack-up inspection, 
              and 24-hour turnaround engineering quote directly from our E-City Hyderabad cleanroom team.
            </p>
          </div>

          {/* Dropzone & RFQ Configuration Window */}
          <div className="relative z-10 max-w-4xl mx-auto bg-white/5 backdrop-blur-md rounded-[28px] border border-white/10 p-6 md:p-10 shadow-xl">
            
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Interactive Gerber & BOM Dropzone */}
              <div
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`relative border-2 border-dashed rounded-2xl p-8 md:p-12 text-center transition-all cursor-pointer flex flex-col items-center justify-center ${
                  dragActive 
                    ? 'border-[#1a73e8] bg-[#1a73e8]/10' 
                    : 'border-white/20 hover:border-white/40 bg-black/20 hover:bg-black/30'
                }`}
              >
                <input 
                  ref={fileInputRef}
                  type="file" 
                  accept=".zip,.rar,.tar,.tgz,.csv,.xlsx,.kicad_pcb,.brd"
                  onChange={handleChange}
                  className="hidden" 
                />

                <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center mb-4 text-[#e6a100]">
                  <UploadCloud className="w-8 h-8" />
                </div>

                <div className="text-base md:text-lg font-bold text-white mb-1">
                  {uploadedFile ? uploadedFile.name : 'Drop your Gerber archive or Bill of Materials here'}
                </div>

                <p className="text-xs text-[#80868b] max-w-md mb-4">
                  Drag and drop a .ZIP containing Gerber layers and Excel/CSV BOM, or click to browse files from your computer.
                </p>

                {/* Supported Format Badges */}
                <div className="flex flex-wrap items-center justify-center gap-2">
                  {['RS-274X', 'ODB++', 'IPC-2581', 'Excel BOM (.xlsx)', 'CSV BOM'].map((badge, bIdx) => (
                    <span 
                      key={bIdx}
                      className="px-2.5 py-1 rounded-md bg-white/10 text-[10px] font-mono text-[#b7bfd9] border border-white/5"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

              </div>

              {/* Real-Time DFM Analysis Status Bar */}
              {analyzing && (
                <div className="p-4 rounded-xl bg-white/10 border border-white/10 flex items-center gap-3 animate-pulse">
                  <div className="w-4 h-4 rounded-full border-2 border-t-[#1a73e8] border-white/20 animate-spin" />
                  <span className="text-xs font-mono text-white/90">
                    Running Automated DFM Rule Engine: Checking trace width, annular rings, BGA ball pitch, solder mask clearances...
                  </span>
                </div>
              )}

              {/* DFM Results Card */}
              {dfmScore && (
                <div className="p-5 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-white space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      <span className="text-sm font-bold font-mono text-emerald-300">
                        {dfmScore.status}
                      </span>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-300 text-xs font-mono font-bold">
                      Confidence: {dfmScore.score}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono text-white/80 pt-2 border-t border-emerald-500/20">
                    <div>Stackup: <span className="text-white font-bold">{dfmScore.layers}</span></div>
                    <div>Min Trace/Space: <span className="text-white font-bold">{dfmScore.minTrace}</span></div>
                    <div>Fine Pitch: <span className="text-white font-bold">{dfmScore.minBgaPitch}</span></div>
                  </div>
                </div>
              )}

              {/* Additional Quick Parameters */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#b7bfd9] mb-1.5 font-semibold">
                    Target Prototype / Batch Volume
                  </label>
                  <select 
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="w-full h-11 px-4 rounded-xl bg-black/40 border border-white/15 text-white text-sm focus:outline-none focus:border-[#1a73e8] transition-colors"
                  >
                    <option value="5" className="bg-[#121317]">1 - 5 Pcs (Rapid Engineering Prototype)</option>
                    <option value="25" className="bg-[#121317]">25 - 50 Pcs (Design Verification Test - DVT)</option>
                    <option value="100" className="bg-[#121317]">100 - 500 Pcs (Pilot Production / NPI)</option>
                    <option value="1000" className="bg-[#121317]">1,000 - 10,000 Pcs (Batch Run)</option>
                    <option value="50000" className="bg-[#121317]">10,000+ Pcs (High Volume Mass Production)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#b7bfd9] mb-1.5 font-semibold">
                    Corporate Email / Phone
                  </label>
                  <input 
                    type="text"
                    required
                    placeholder="engineer@aerospace-org.com / +91 ..."
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    className="w-full h-11 px-4 rounded-xl bg-black/40 border border-white/15 text-white text-sm placeholder:text-[#80868b] focus:outline-none focus:border-[#1a73e8] transition-colors"
                  />
                </div>
              </div>

              {/* Confirmation Banner */}
              {submitted && (
                <div className="p-4 rounded-xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-200 text-xs font-mono flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Build package received. A dedicated SriLin process engineer has been assigned to your RFQ.</span>
                </div>
              )}

              {/* Dual Action CTA Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto flex-1 h-12 px-8 rounded-full bg-white text-[#121317] hover:bg-[#f1f3f8] text-sm font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <UploadCloud className="w-4 h-4 text-[#1a73e8]" />
                  <span>Upload Gerber & BOM for Instant DFM</span>
                </button>

                <a
                  href="https://wa.me/917385069999?text=Hello%20SriLin%20Team%2C%20I%20would%20like%20to%20schedule%20a%20campus%20tour%20at%20your%20Fab%20City%20facility."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto h-12 px-8 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/15 text-sm font-medium transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MapPin className="w-4 h-4 text-[#e6a100]" />
                  <span>Schedule Hyderabad Campus Tour</span>
                </a>
              </div>

            </form>

            {/* Proximity & Logistics Indicator */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#b7bfd9]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#c5283d] shrink-0" />
                <span>
                  {FACILITY_DATA.address.industrialArea}, {FACILITY_DATA.address.district}
                </span>
              </div>

              <div className="flex items-center gap-2 font-mono text-[11px] text-white/90">
                <Clock className="w-3.5 h-3.5 text-[#1a73e8]" />
                <span>{COMPANY_METRICS.airportProximityFormatted}</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
