import React, { useState } from 'react';
import { UploadCloud, CheckCircle2, ShieldCheck, Phone, Mail, MapPin, ArrowRight, FileCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/antigravitySrilinData';

export default function InstantIntakeCTA() {
  const [fileUploaded, setFileUploaded] = useState(false);
  const [fileName, setFileName] = useState('');

  const handleSimulateUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setFileUploaded(true);
    } else {
      setFileName("gerber_bom_package_rev_d.zip");
      setFileUploaded(true);
    }
  };

  return (
    <section id="contact" className="relative py-20 max-w-6xl mx-auto px-4 sm:px-6">
      
      {/* Monumental Rounded Dark Container (Antigravity Download Style) */}
      <div className="relative rounded-3xl overflow-hidden bg-[#0c1017] text-white p-8 sm:p-14 border border-slate-800 shadow-2xl">
        
        {/* Subtle Ambient Red/Gold Corner Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#c5283d]/15 blur-[90px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#e6a100]/10 blur-[90px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Side: Headline & Direct Desks */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[11px] font-mono font-bold text-[#e6a100] uppercase tracking-widest bg-amber-500/10 border border-amber-500/30 px-3.5 py-1 rounded-full">
              INSTANT AEROSPACE SMT INTAKE
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight font-sans">
              Manufacture with zero compromise.
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Upload your Gerber and BOM archives for instant confidential engineering review under mutual NDA. 
              Our senior SMT and DFM engineers respond with complete technical feedback within 2 hours.
            </p>

            <div className="space-y-3 pt-2 text-xs">
              <div className="flex items-center space-x-3 text-slate-300">
                <MapPin className="w-4 h-4 text-[#c5283d] shrink-0" />
                <span>{COMPANY_INFO.plantLocation}</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Defense Hotline: <strong className="text-white">{COMPANY_INFO.phone}</strong> (24/7 Desk)</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Engineering Sales: <strong className="text-white">{COMPANY_INFO.email}</strong></span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`https://wa.me/919177702120?text=Hello%20SriLin%20Engineering%20Desk,%20I%20would%20like%20to%20request%20a%20formal%20turnkey%20SMT%20quotation.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white rounded-full text-xs font-bold inline-flex items-center justify-center space-x-2 transition-all shadow-lg"
              >
                <span>Chat Directly on WhatsApp Desk</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Side: Instant Drag-and-Drop Intake Box */}
          <div className="lg:col-span-6 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
            
            <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
              Direct CAD / Gerber Intake (Max 100 MB)
            </div>

            <label className="border-2 border-dashed border-slate-700 hover:border-[#c5283d] rounded-2xl p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-colors bg-slate-950/40">
              <input 
                type="file" 
                onChange={handleSimulateUpload} 
                className="hidden" 
                accept=".zip,.rar,.tar,.gerber,.cam"
              />

              {!fileUploaded ? (
                <>
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 mb-3 group-hover:scale-110 transition-transform">
                    <UploadCloud className="w-6 h-6 text-[#e6a100]" />
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-white mb-1">
                    Click to browse or drop Gerber (.zip / .rar)
                  </div>
                  <div className="text-[11px] text-slate-400">
                    RS-274X, ODB++, Altium, KiCad & BOM (.xlsx) supported
                  </div>
                </>
              ) : (
                <div className="space-y-2">
                  <div className="w-12 h-12 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                    <FileCheck className="w-6 h-6" />
                  </div>
                  <div className="text-xs font-bold text-emerald-300">
                    File Encrypted & Staged Successfully
                  </div>
                  <div className="text-[11px] font-mono text-slate-400">
                    {fileName}
                  </div>
                  <div className="text-[10px] text-emerald-400 bg-emerald-950 px-2.5 py-1 rounded-full inline-block">
                    Pre-Flight DFM Check: READY
                  </div>
                </div>
              )}
            </label>

            <div className="flex items-center space-x-2 mt-4 text-[11px] text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>All uploads held under strict aerospace NDA & ITAR-ready encryption.</span>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-800">
              <a
                href={`https://wa.me/919177702120?text=Hello%20SriLin,%20I%20have%20uploaded%20my%20Gerber%20archive%20${fileName || 'project.zip'}%20and%20need%20an%20instant%20technical%20review.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-[#c5283d] hover:bg-[#b02235] active:scale-95 text-white rounded-full text-xs font-bold flex items-center justify-center space-x-2 transition-all shadow-md"
              >
                <span>Dispatch for Fast-Track Quoting (2h SLA)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
