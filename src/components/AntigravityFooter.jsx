import React from 'react';
import { 
  ShieldCheck, 
  MapPin, 
  Mail, 
  Phone, 
  ExternalLink, 
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Building
} from 'lucide-react';
import { FACILITY_DATA, CONTACT_INFO, CERTIFICATIONS_DATA } from '../data/srilinAuthenticContent';

export default function AntigravityFooter() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="footer bg-[#f8f9fc] border-t border-[rgba(33,34,38,0.08)] pt-16 pb-12 select-none overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Monumental Google Antigravity-Style Wordmark SVG Banner across the top */}
        <div className="w-full pb-16 flex items-center justify-center opacity-15 hover:opacity-25 transition-opacity duration-300">
          <svg
            className="w-full max-h-[120px] text-[#121317]"
            viewBox="0 0 1200 120"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <text
              x="50%"
              y="95"
              textAnchor="middle"
              fontFamily="Google Sans Flex, Google Sans, sans-serif"
              fontWeight="900"
              fontSize="100"
              letterSpacing="10"
            >
              SRILIN ELECTRONICS
            </text>
          </svg>
        </div>

        {/* 4-Column Structured Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-16 border-b border-[rgba(33,34,38,0.06)]">
          
          {/* Col 1: Manufacturing Services */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#121317]">
              Manufacturing Services
            </h4>
            <ul className="space-y-2.5 text-xs text-[#45474d]">
              <li>
                <button onClick={() => scrollTo('capabilities')} className="hover:text-[#121317] hover:underline cursor-pointer text-left">
                  Fuji AIMEX IIIc SMT (200,000 CPH)
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('capabilities')} className="hover:text-[#121317] hover:underline cursor-pointer text-left">
                  Through-Hole & Dual-Wave Soldering
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('capabilities')} className="hover:text-[#121317] hover:underline cursor-pointer text-left">
                  Koh Young 3D SPI & 3D AOI Inspection
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('capabilities')} className="hover:text-[#121317] hover:underline cursor-pointer text-left">
                  Nordson Dage 160kV Quadra X-Ray
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('capabilities')} className="hover:text-[#121317] hover:underline cursor-pointer text-left">
                  PVA Robotic Selective Conformal Coating
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('capabilities')} className="hover:text-[#121317] hover:underline cursor-pointer text-left">
                  Turnkey Box Build & Electromechanical
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('capabilities')} className="hover:text-[#121317] hover:underline cursor-pointer text-left">
                  Precision 0.30mm BGA Rework & Reballing
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: OEM Products & Solutions */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#121317]">
              OEM Products & Solutions
            </h4>
            <ul className="space-y-2.5 text-xs text-[#45474d]">
              <li>
                <button onClick={() => scrollTo('capabilities')} className="hover:text-[#121317] hover:underline cursor-pointer text-left">
                  SL-ADAS-DMS-V2 Edge AI Dual Camera
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('solutions-tiers')} className="hover:text-[#121317] hover:underline cursor-pointer text-left">
                  Rapid NPI Prototyping (24-48h)
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('solutions-tiers')} className="hover:text-[#121317] hover:underline cursor-pointer text-left">
                  Mission-Critical Aerospace EMS
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('use-cases')} className="hover:text-[#121317] hover:underline cursor-pointer text-left">
                  Automotive Fleet Intelligence
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('capabilities')} className="hover:text-[#121317] hover:underline cursor-pointer text-left">
                  NI LabVIEW PXIe Automated ATE
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('capabilities')} className="hover:text-[#121317] hover:underline cursor-pointer text-left">
                  Ultrasonic Hermetic Enclosure Welding
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('intake-section')} className="hover:text-[#121317] hover:underline cursor-pointer text-left">
                  Automated Gerber & BOM DFM Engine
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Quality & Certifications */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#121317]">
              Quality & Certifications
            </h4>
            <ul className="space-y-2.5 text-xs text-[#45474d]">
              <li className="flex items-center gap-1.5 font-medium text-[#121317]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#1a73e8]" />
                <span>AS9100D Rev D Aerospace QMS</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>ISO 13485:2016 Medical Devices</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>ISO 9001:2015 Quality Management</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                <span>ANSI/ESD S20.20-2021 Facility</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#121317]" />
                <span>IPC-A-610 Class 3 Master</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>RoHS 3 & REACH Compliant</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#1a73e8]" />
                <span>100% Component-to-Shipment DHR</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Corporate & Campus Governance */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#121317]">
              Corporate & Campus
            </h4>
            <div className="text-xs text-[#45474d] space-y-3 leading-relaxed">
              <div className="flex items-start gap-2">
                <Building className="w-4 h-4 text-[#c5283d] shrink-0 mt-0.5" />
                <span>
                  {FACILITY_DATA.facilityName}<br />
                  {FACILITY_DATA.address.plotNo}, {FACILITY_DATA.address.industrialArea},<br />
                  {FACILITY_DATA.address.district}, Telangana {FACILITY_DATA.address.postalCode}
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs text-[#1a73e8]">
                <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                <a 
                  href={FACILITY_DATA.coordinates.googleMapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:underline font-medium"
                >
                  View on Google Maps
                </a>
              </div>

              <div className="pt-2 border-t border-[rgba(33,34,38,0.06)] space-y-1.5">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#80868b] shrink-0" />
                  <a href={`tel:${CONTACT_INFO.phoneNumbers[0].number}`} className="hover:underline">
                    {CONTACT_INFO.phoneNumbers[0].number}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#80868b] shrink-0" />
                  <a href={`mailto:${CONTACT_INFO.emails[0].email}`} className="hover:underline">
                    {CONTACT_INFO.emails[0].email}
                  </a>
                </div>
              </div>

              <button
                onClick={() => scrollTo('intake-section')}
                className="w-full h-9 rounded-full bg-[#121317] text-white hover:bg-[#2f3034] text-xs font-medium transition-all flex items-center justify-center gap-1.5 cursor-pointer mt-2"
              >
                <span>Instant RFQ & DFM</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Lower Metadata Row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#80868b] gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <span>© {new Date().getFullYear()} SriLin Electronics Private Limited. All rights reserved.</span>
            <span>•</span>
            <span>AS9100D Rev D Aerospace EMS</span>
            <span>•</span>
            <span>E-City EMC Hyderabad</span>
          </div>

          <div className="flex items-center gap-4 font-mono text-[11px] text-[#45474d]">
            <span>AS9100D</span>
            <span>ISO 13485</span>
            <span>ISO 9001</span>
            <span>ANSI/ESD S20.20</span>
            <span>IPC CLASS 3</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
