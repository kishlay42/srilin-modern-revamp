import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Cpu, 
  Scan, 
  Eye, 
  Activity, 
  CheckCircle2, 
  Zap, 
  Layers, 
  Radio, 
  ShieldCheck, 
  SlidersHorizontal,
  ChevronRight,
  Maximize2,
  Terminal,
  Gauge
} from 'lucide-react';
import { COMPANY_METRICS, EQUIPMENT_DATA, OEM_PRODUCTS } from '../data/srilinAuthenticContent';

gsap.registerPlugin(ScrollTrigger);

export default function FeatureExplorer() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeTelemetryMode, setActiveTelemetryMode] = useState(0);
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  const tabs = [
    {
      id: 'smt-assembly',
      tabTitle: 'Fuji AIMEX IIIc SMT',
      category: 'Pick & Place Fleet',
      icon: Cpu,
      title: 'Fuji AIMEX IIIc & Panasonic NPM-D3A SMT Assembly',
      badge: '200,000 CPH Throughput',
      shortDesc: 'Dual-robot automated surface-mount lines capable of handling 01005 micro-passives and 0.30mm BGA pitch in ISO-8 cleanroom.',
      specs: [
        { label: 'Combined Placement Speed', value: '200,000 CPH' },
        { label: 'Smallest Passive Package', value: '01005 (0.4 x 0.2 mm)' },
        { label: 'Fine Pitch BGA Placement', value: '0.30 mm Ball Pitch' },
        { label: 'Thermal Profile Control', value: '13-Zone Nitrogen Reflow' },
        { label: 'Placement Accuracy', value: '+/- 0.025 mm (Cpk >= 1.00)' },
        { label: 'Cleanroom Classification', value: 'Class 100,000 (ISO-8)' }
      ],
      telemetryModes: [
        {
          name: 'Nitrogen Reflow (<500 ppm O2)',
          readout: 'Atmosphere: 99.999% N2 | Oxygen Level: 380 ppm | Delta T: +/- 1.5 deg C',
          detail: 'Cryogenic on-site nitrogen generation continuously purges all 13 convection zones to eliminate intermetallic oxidation.'
        },
        {
          name: 'KIC-X5 9-Channel Thermal Profiler',
          readout: 'Zone 1-10 Soak: 165-180 deg C | Peak Reflow: 242 deg C | TAL: 68 sec',
          detail: 'Real-time wireless temperature curve profiling calibrated for SAC305 lead-free and high-reliability Sn63Pb37 alloys.'
        },
        {
          name: 'Fuji GPX-CII Solder Stencil Printing',
          readout: 'Alignment Accuracy: +/- 0.010 mm | Wet Print: +/- 0.018 mm | Cycle: 6.0 sec',
          detail: 'Closed-loop automated stencil printer with inline Koh Young 3D SPI offset auto-correction.'
        }
      ],
      standards: ['AS9100D Rev D', 'IPC-A-610 Class 3', 'ANSI/ESD S20.20-2021', 'J-STD-001'],
      image: '/assets/image/factory-smt-line.jpg',
      equipment: 'Fuji AIMEX IIIc + Panasonic NPM-D3A + JTR-1000N'
    },
    {
      id: 'optical-xray',
      tabTitle: '3D AOI & 160kV X-Ray',
      category: 'Non-Destructive Testing',
      icon: Scan,
      title: '3D Automated Optical Inspection & 160kV Quadra X-Ray',
      badge: '0.95 um Sub-Micron Precision',
      shortDesc: 'Sub-micron radiographic verification paired with 5-way Moire light 3D optical profilometry for zero-escape quality control.',
      specs: [
        { label: 'X-Ray Feature Resolution', value: '0.95 um Sub-Micron' },
        { label: 'Geometric Magnification', value: 'Up to 7,500x' },
        { label: 'Tube Voltage & Target Power', value: '160 kV / 3 Watts' },
        { label: '3D AOI Height Range', value: '25 mm Clearance (8 MP)' },
        { label: '3D SPI Z-Resolution', value: '0.37 um Vertical' },
        { label: 'Oblique Viewing Angles', value: '2x 65 deg with 360 deg Orbit' }
      ],
      telemetryModes: [
        {
          name: 'Nordson Dage 160kV Radiography',
          readout: 'Feature Resolution: 0.95 um | Tube Voltage: 160 kV | Oblique Tilt: 65 deg',
          detail: 'Sub-micron micro-focus tube inspects concealed BGA solder balls, QFN thermal pads, and semiconductor wire bonds.'
        },
        {
          name: 'BGA Void Percentage Algorithm',
          readout: 'BGA Void Threshold: < 15% | Measured Mean: 4.8% | Resolution: 0.1%',
          detail: 'Automated quantitative computation verifies void percentages against stringent IPC-7095 Class 3 aerospace criteria.'
        },
        {
          name: 'Koh Young 3D SPI Closed-Loop',
          readout: 'SPI Lateral: 15 um | Z-Res: 0.37 um | SPC Plus Link: Active Synchronized',
          detail: 'Patented shadow-free dual projection 3D measurement detects solder volume displacement before SMT placement.'
        }
      ],
      standards: ['IPC-7095 Class 3', 'IPC-A-610 Class 3', 'AS9100D Rev D', 'MIL-STD-883'],
      image: '/assets/image/factory-inspection-xray.jpg',
      equipment: 'Nordson Dage Quadra 160kV + Koh Young ZENITH ALPHA HS+ + KY8080-L'
    },
    {
      id: 'oem-vision',
      tabTitle: 'Proprietary OEM Vision',
      category: 'Edge AI Edge Hardware',
      icon: Eye,
      title: 'SL-ADAS-DMS-V2 Edge AI Dual-Camera Hardware Platform',
      badge: 'Automotive ASIL-B Safety Ready',
      shortDesc: 'SriLin proprietary edge vision hardware integrating forward-facing collision warning with in-cabin 940nm infrared driver monitoring.',
      specs: [
        { label: 'Edge AI Neural Processing', value: '4 to 26 TOPS NPU' },
        { label: 'Forward Sensor (ADAS)', value: '1080P Sony Starvis HDR' },
        { label: 'In-Cabin Sensor (DMS)', value: '720P with 940nm Invisible IR' },
        { label: 'Automotive Input Range', value: 'DC 9V - 36V Wide Range' },
        { label: 'Transient Protection', value: 'ISO 7637-2 Automotive Pulses' },
        { label: 'Telemetry & Connectivity', value: '4G LTE + GNSS + CAN-FD' }
      ],
      telemetryModes: [
        {
          name: 'Qualcomm / Hailo-8 NPU Inference',
          readout: 'Inference Engine: 26 TOPS | Latency: 12 ms | FPS: 30 fps Real-Time',
          detail: 'Executes concurrent forward collision warning (FCW), lane departure (LDW), and driver drowsiness eye-tracking on-chip.'
        },
        {
          name: '940nm In-Cabin Infrared Night Vision',
          readout: 'Wavelength: 940 nm | Illuminator: 4x IR LEDs | Eye-Tracking: Active',
          detail: 'Invisible infrared illumination delivers high-contrast cockpit driver monitoring in total darkness without driver glare.'
        },
        {
          name: 'ISO 7637-2 Surge & Power Protection',
          readout: 'Clamp Threshold: 36V | Reverse Polarity: Active | Pulse 1/2a/3b: Protected',
          detail: 'Automotive transient suppression stage shields electronics against vehicle alternator load dumps and inductive spikes.'
        }
      ],
      standards: ['ISO 26262 ASIL-B', 'ARAI Certified', 'IATF 16949 Line', 'AEC-Q100'],
      image: '/assets/image/adas-camera-real.jpg',
      equipment: 'SL-ADAS-DMS-V2 Commercial Fleet Camera Platform'
    },
    {
      id: 'test-boxbuild',
      tabTitle: 'NI LabVIEW & Box Build',
      category: 'Test & System Integration',
      icon: Activity,
      title: 'National Instruments LabVIEW Automated ATE & Turnkey Box Build',
      badge: 'Turnkey Box Build & PXIe ATE',
      shortDesc: 'Automated PXIe test racks up to 6 GHz, PVA robotic selective conformal coating, Herrmann ultrasonic plastic bonding, and 100% MES serialization.',
      specs: [
        { label: 'Test Sequencing Software', value: 'NI LabVIEW & TestStand' },
        { label: 'RF Telemetry Range', value: 'Up to 6.0 GHz Microwave' },
        { label: 'Conformal Coating System', value: 'PVA 4-Axis Selective Spray' },
        { label: 'Coating Film Thickness', value: '25 um to 125 um Uniform' },
        { label: 'Plastic Welding Frequency', value: '20 kHz / 35 kHz Acoustic' },
        { label: 'Digital MES Traceability', value: '100% Component-to-Box DHR' }
      ],
      telemetryModes: [
        {
          name: 'National Instruments PXIe Testbench',
          readout: 'Chassis: NI PXIe-1082 | RF Span: 6.0 GHz | Voltage Accuracy: 0.0035%',
          detail: 'Custom bed-of-nails and PXIe automated test fixtures run zero-variance functional verification on 100% of manufactured boards.'
        },
        {
          name: 'PVA 4-Axis Robotic Conformal Coating',
          readout: 'Film: 75 um Polyurethane (UR) | Edge Tolerance: +/- 0.025 mm | UV Trace: OK',
          detail: 'Selective atomized spray dispensing eliminates manual masking errors and provides hermetic defense against humidity and salt-fog.'
        },
        {
          name: 'Fiber Laser MES Serialization',
          readout: 'Code: 2D DataMatrix ECC200 | Cell Pitch: 0.15 mm | MES Link: Real-Time',
          detail: 'Laser-etched permanent serial codes link each circuit board to raw material reel batch numbers and reflow thermal curves.'
        }
      ],
      standards: ['IPC-CC-830C', 'IPC/WHMA-A-620', 'AS9100D Rev D', 'FDA 21 CFR Part 11'],
      image: '/assets/image/pcba-smt.webp',
      equipment: 'NI PXIe Test Station + PVA Coating Robot + IPG Fiber Laser'
    }
  ];

  const currentTab = tabs[activeTab];

  // GSAP animation when active tab changes
  useEffect(() => {
    setActiveTelemetryMode(0);
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
      );
    }
  }, [activeTab]);

  return (
    <section 
      id="capabilities" 
      ref={sectionRef}
      className="py-24 bg-[#f8f9fc] border-t border-[rgba(33,34,38,0.06)] relative overflow-hidden"
    >
      {/* Navigation Anchor Aliases */}
      <span id="feature-explorer" className="absolute -top-16" />
      <span id="cleanroom-tour" className="absolute -top-16" />
      <span id="labview" className="absolute -top-16" />
      <span id="oem-product" className="absolute -top-16" />
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Section Header with Google Antigravity aesthetic */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[rgba(33,34,38,0.08)] shadow-xs mb-4">
            <span className="w-2 h-2 rounded-full bg-[#1a73e8] animate-pulse" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#45474d] font-semibold">
              INSPECT CLEANROOM EMS ARCHITECTURE
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#121317] mb-4">
            Unified Hardware & Cleanroom Capabilities
          </h2>
          
          <p className="text-base md:text-lg text-[#45474d] leading-relaxed">
            From 200,000 CPH Fuji surface-mount assembly to 160kV micro-focus radiographic inspection 
            and proprietary edge AI hardware — explore our certified ISO-8 ESDM facility.
          </p>
        </div>

        {/* Tab Navigation Pill Bar matching Google Antigravity */}
        <div className="flex items-center justify-start md:justify-center overflow-x-auto no-scrollbar gap-2 mb-10 pb-2">
          {tabs.map((tab, idx) => {
            const Icon = tab.icon;
            const isActive = activeTab === idx;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap cursor-pointer select-none ${
                  isActive
                    ? 'bg-[#121317] text-white shadow-md'
                    : 'bg-white text-[#45474d] hover:text-[#121317] hover:bg-[#eff2f7] border border-[rgba(33,34,38,0.06)]'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#e6a100]' : 'text-[#80868b]'}`} />
                <span>{tab.tabTitle}</span>
                <span className={`text-[11px] px-2 py-0.5 rounded-full ${
                  isActive 
                    ? 'bg-white/20 text-white font-mono' 
                    : 'bg-[#f1f3f8] text-[#80868b] font-mono'
                }`}>
                  0{idx + 1}
                </span>
              </button>
            );
          })}
        </div>

        {/* Interactive Feature Display Window */}
        <div 
          ref={contentRef}
          className="bg-white rounded-[28px] md:rounded-[36px] border border-[rgba(33,34,38,0.08)] shadow-lg shadow-black/[0.03] overflow-hidden"
        >
          {/* Top Console Instrument Bar */}
          <div className="px-6 md:px-8 py-4 bg-[#fcfdfe] border-b border-[rgba(33,34,38,0.06)] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#121317]">
                STATUS: LIVE FACILITY TELEMETRY
              </span>
              <span className="text-[#cdd4dc] hidden sm:inline">|</span>
              <span className="text-xs font-mono text-[#80868b] hidden sm:inline">
                {currentTab.equipment}
              </span>
            </div>

            <div className="inline-flex items-center gap-2">
              <span className="text-[11px] font-mono text-[#80868b] uppercase tracking-wide">
                CLASS: ISO 8 (100k)
              </span>
              <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200">
                {currentTab.badge}
              </span>
            </div>
          </div>

          {/* Split Content Body */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 p-6 md:p-10">
            
            {/* Left Column: Specifications, Telemetry Toggles & Details */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div>
                <div className="text-xs font-mono font-semibold uppercase tracking-widest text-[#1a73e8] mb-2">
                  {currentTab.category}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#121317] tracking-tight mb-3">
                  {currentTab.title}
                </h3>
                <p className="text-sm md:text-base text-[#45474d] leading-relaxed mb-6">
                  {currentTab.shortDesc}
                </p>

                {/* 6 Key Performance Metric Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                  {currentTab.specs.map((item, idx) => (
                    <div 
                      key={idx}
                      className="p-3 rounded-xl bg-[#f8f9fc] border border-[rgba(33,34,38,0.06)] hover:border-[rgba(33,34,38,0.12)] transition-colors"
                    >
                      <div className="text-[11px] text-[#80868b] leading-tight mb-1">
                        {item.label}
                      </div>
                      <div className="text-xs font-bold text-[#121317] font-mono truncate">
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Interactive Telemetry Parameter Switcher */}
                <div className="bg-[#121317] text-white p-5 rounded-2xl shadow-inner border border-black/40">
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-[#e6a100]" />
                      <span className="text-xs font-mono uppercase tracking-wider text-white/90">
                        Operational Telemetry Channels
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400">
                      INTERACTIVE VIEW
                    </span>
                  </div>

                  {/* Telemetry Channel Selector Buttons */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {currentTab.telemetryModes.map((mode, mIdx) => (
                      <button
                        key={mIdx}
                        onClick={() => setActiveTelemetryMode(mIdx)}
                        className={`text-xs px-3 py-1.5 rounded-lg font-mono transition-all cursor-pointer ${
                          activeTelemetryMode === mIdx
                            ? 'bg-white text-[#121317] font-bold shadow-xs'
                            : 'bg-white/10 text-white/70 hover:bg-white/15'
                        }`}
                      >
                        Ch 0{mIdx + 1}: {mode.name.split(' ')[0]}
                      </button>
                    ))}
                  </div>

                  {/* Channel Live Readout */}
                  <div className="bg-black/50 p-3 rounded-xl font-mono text-xs border border-white/5 space-y-1.5">
                    <div className="text-emerald-400 font-bold tracking-tight">
                      &gt; {currentTab.telemetryModes[activeTelemetryMode].name}
                    </div>
                    <div className="text-[#b7bfd9] text-[11px]">
                      {currentTab.telemetryModes[activeTelemetryMode].readout}
                    </div>
                    <div className="text-white/60 text-[11px] pt-1 border-t border-white/5">
                      {currentTab.telemetryModes[activeTelemetryMode].detail}
                    </div>
                  </div>
                </div>
              </div>

              {/* Quality Standards Pills */}
              <div className="pt-2 flex flex-wrap items-center gap-2">
                <span className="text-xs text-[#80868b] mr-1">Compliance:</span>
                {currentTab.standards.map((std, sIdx) => (
                  <span 
                    key={sIdx}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-medium px-2.5 py-1 rounded-full bg-[#f1f3f8] text-[#2f3034]"
                  >
                    <CheckCircle2 className="w-3 h-3 text-[#1a73e8]" />
                    {std}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column: High-Res Cleanroom Equipment Showcase Window */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-[rgba(33,34,38,0.08)] bg-[#121317] group aspect-[4/3] flex items-center justify-center">
                <img 
                  src={currentTab.image} 
                  alt={currentTab.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />

                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                {/* Technical HUD Overlay Grid / Reticle */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <div className="px-3 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-mono text-white/90">
                    LAT: 17.1856 deg N | LON: 78.5085 deg E
                  </div>
                  <div className="px-2.5 py-1 rounded-md bg-white/20 backdrop-blur-md text-[11px] font-mono text-white flex items-center gap-1.5">
                    <Maximize2 className="w-3 h-3" />
                    <span>OPTICAL RETICLE</span>
                  </div>
                </div>

                {/* Bottom Spec Summary Box */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/70 backdrop-blur-md border border-white/15 text-white">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold font-mono tracking-wide uppercase text-[#e6a100]">
                      {currentTab.tabTitle}
                    </span>
                    <span className="text-[11px] font-mono text-white/70">
                      Hyderabad Cleanroom Bay 01
                    </span>
                  </div>
                  <p className="text-xs text-white/80 line-clamp-2">
                    {currentTab.shortDesc}
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
