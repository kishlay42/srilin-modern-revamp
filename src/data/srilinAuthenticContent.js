/**
 * SriLin Electronics - Authentic Corporate & Technical Data Module
 * Cleanroom EMS & ESDM Facility at E-City EMC, Hyderabad, India.
 * AS9100D Rev D & ISO 9001:2015 Certified.
 * 
 * STRICT COMPLIANCE:
 * - Zero emojis throughout text and code.
 * - Accurate technical metrics, tolerances, equipment specs, and leadership credentials.
 * - Valid ES Module syntax.
 */

// ============================================================================
// 1. COMPANY METRICS & BENCHMARKS
// ============================================================================
export const COMPANY_METRICS = {
  placementCapacityCph: 200000,
  placementCapacityFormatted: "200,000 CPH",
  firstPassYieldPercentage: 99.8,
  firstPassYieldFormatted: "99.8%",
  coreEmsDisciplinesCount: 14,
  quickturnTurnaroundHours: "24-48 Hours",
  traceabilityPercentage: 100,
  traceabilityFormatted: "100% Lot-to-Serial Traceability",
  activeCleanroomSqft: 25000,
  activeCleanroomFormatted: "25,000 sq.ft",
  campusReserveSqft: 214000,
  campusReserveFormatted: "214,000 sq.ft (8x Expansion Ready)",
  cleanroomClassification: "Class 100,000 (ISO Class 8)",
  esdStandards: "ANSI/ESD S20.20-2021 & IEC 61340-5-1",
  smallestComponentSize: "01005 chip (0.4 x 0.2 mm)",
  finePitchBgaCapability: "0.30 mm pitch",
  airportProximityMinutes: 15,
  airportProximityFormatted: "15 Minutes to RGIA Cargo Terminal",
  establishedYear: 2017,
  clientsServedCount: "149+",
  projectsDeliveredCount: "347+",
  onTimeDeliveryRate: "98.2%",
  inspectionMagnification: "7,500x",
  xrayFeatureResolution: "0.95 um"
};

// ============================================================================
// 2. CORE SERVICES (ALL 14 AUTHENTIC EMS DISCIPLINES)
// ============================================================================
export const CORE_SERVICES = [
  {
    id: "embedded-design",
    serviceNumber: 1,
    title: "Embedded Hardware & Firmware Design",
    shortTitle: "Embedded Design",
    slug: "embedded-design-services",
    category: "Design & Engineering",
    shortDesc: "End-to-end concept-to-architecture engineering, high-speed DSP/FPGA integration, and edge AI hardware design.",
    fullDescription: "SriLin delivers comprehensive embedded design services ranging from system architecture definition to production-ready hardware and firmware. Our engineering team specializes in ultra-low-power microcontrollers, multi-core DSPs, high-throughput FPGAs, and edge AI processors (Qualcomm, Hailo, NXP, STM32). We perform full schematic capture, BOM optimization for component lifecycle, thermal dissipation modeling, power tree design, and signal integrity simulations ensuring seamless transition into volume manufacturing.",
    tolerances: "Sub-millivolt power rail ripple; sub-picosecond jitter on high-speed clock domains.",
    keyMetrics: [
      { label: "High-Speed Clock Domains", value: "Up to 5.0 GHz" },
      { label: "BOM Sourcing Optimization", value: "100% Franchise Tracked" },
      { label: "Edge AI Processing", value: "Up to 26 TOPS" },
      { label: "Pre-Compliance Validation", value: "MIL-STD-461 / FCC / CE" }
    ],
    specifications: [
      "Microcontroller platforms: ARM Cortex-M0+/M4/M7, RISC-V, ESP32, STM32 family.",
      "High-performance computing: Qualcomm Snapdragon automotive, Hailo-8 AI NPUs, Xilinx Zynq FPGAs.",
      "Power management: Multi-phase switching regulators, PMIC configuration, battery fuel gauging.",
      "Firmware development: Bare-metal C/C++, FreeRTOS, Embedded Linux, secure bootloader integration.",
      "Compliance engineering: EMI/EMC pre-compliance scanning, thermal runaway mitigation, ESD protection."
    ],
    standards: ["IPC-2221", "DO-254", "MIL-STD-810G", "ISO 26262 ASIL-B"],
    equipmentUsed: [
      "Rigol & Keysight 1 GHz Digital Storage Oscilloscopes",
      "Rohde & Schwarz RF Spectrum Analyzers",
      "National Instruments PXIe Automated Test Stations"
    ],
    image: "/assets/image/chip-stm32.jpg",
    badge: "Concept to Production"
  },
  {
    id: "ecad-layout",
    serviceNumber: 2,
    title: "ECAD PCB Layout & DFM Simulation",
    shortTitle: "ECAD Layout",
    slug: "ecad-layout-services",
    category: "Design & Engineering",
    shortDesc: "High-speed multi-layer, HDI, RF microwave, and rigid-flex PCB layout with strict DFM/DFA/DFT rules.",
    fullDescription: "Our ECAD engineering division produces complex printed circuit board layouts designed specifically for automated SMT assembly. Supporting up to 32 layer multi-layer architectures, high-density interconnect (HDI) with laser micro-vias, and rigid-flex substrates. We implement rigorous controlled impedance routing (single-ended and differential pairs), length and phase matching for high-speed DDR4/DDR5/PCIe interfaces, via-in-pad plated over (VIPPO) technology, and extensive Design for Manufacturing (DFM) verification prior to fabrication.",
    tolerances: "Impedance tolerance +/-5%; differential length matching down to +/-0.05 mm; trace/space down to 3/3 mil.",
    keyMetrics: [
      { label: "Maximum Layer Count", value: "Up to 32 Layers" },
      { label: "Controlled Impedance", value: "+/- 5% Tolerance" },
      { label: "Minimum Trace / Space", value: "3 mil / 3 mil" },
      { label: "HDI Micro-Via Drill", value: "0.10 mm Laser Drilled" }
    ],
    specifications: [
      "Layer stack-ups: FR4 high-TG, Rogers RF ceramic hydrocarbon, Polyimide flex, Aluminum metal-core.",
      "High-speed routing: DDR4/DDR5 fly-by and T-topology, PCIe Gen 3/4/5, Gigabit Ethernet, HDMI/MIPI CSI.",
      "Via technologies: Blind, buried, stacked micro-vias, copper filled via-in-pad plated over (VIPPO).",
      "Thermal management: Direct copper thermal coin insertion, heavy copper inner layers up to 6 oz.",
      "DFM/DFA validation: Automated rule checks against SriLin's Fuji and Panasonic line tolerances."
    ],
    standards: ["IPC-2221B", "IPC-7351B", "IPC-6012 Class 3", "AS9100D"],
    equipmentUsed: [
      "Altium Designer 365 Enterprise",
      "Cadence Allegro PCB Editor",
      "Siemens Valor NPI DFM Simulator"
    ],
    image: "/assets/image/pcb-layout.webp",
    badge: "Up to 32 Layers"
  },
  {
    id: "smt-assembly",
    serviceNumber: 3,
    title: "Surface Mount Technology (SMT) Assembly",
    shortTitle: "SMT Assembly",
    slug: "pcba-capabilities",
    category: "Manufacturing",
    shortDesc: "High-speed 200,000 CPH automated SMT placement down to 01005 chips and 0.3mm BGA pitch in ISO-8 cleanroom.",
    fullDescription: "The core of SriLin's electronic manufacturing line consists of synchronized Fuji AIMEX IIIc and Panasonic NPM-D3A automated pick-and-place systems. Capable of placing up to 200,000 components per hour, our SMT lines handle miniature 01005 passives, ultra-fine pitch BGAs down to 0.3 mm pitch, CSPs, QFNs, and odd-form connectors. Operating in a Class 100,000 (ISO Class 8) cleanroom with continuous ESD monitoring, nitrogen reflow, and full inline 3D SPI and 3D AOI closed-loop feedback.",
    tolerances: "Chip placement accuracy +/-0.025 mm @ Cpk >= 1.00 (3 sigma); solder paste print accuracy +/-0.010 mm @ 6 sigma.",
    keyMetrics: [
      { label: "Combined Throughput", value: "200,000 CPH" },
      { label: "Placement Accuracy", value: "+/-0.025 mm (Cpk >= 1.00)" },
      { label: "Smallest Component", value: "01005 Chip" },
      { label: "Max Board Handling", value: "510 mm x 590 mm" }
    ],
    specifications: [
      "Pick and Place fleet: Fuji AIMEX IIIc (103,000 CPH, 2 robots x 2 modules) + Panasonic NPM-D3A (92,500 CPH).",
      "Solder paste printing: Fuji GPX-CII automated printer with 6.0 sec cycle time and wet print accuracy of +/-0.018 mm.",
      "Feeder technology: Variable pitch electric intelligent feeders (4 mm to 72 mm) with barcode verification.",
      "Component handling: 01005, 0201, 0402, QFP, QFN, BGA, Micro-BGA, CSP, POP (Package-on-Package).",
      "Cleanroom environment: ISO-8 (Class 100,000) ESD-safe flooring and workstations conforming to ANSI/ESD S20.20-2021."
    ],
    standards: ["IPC-A-610 Class 3", "IPC-J-STD-001", "AS9100D Rev D", "IATF 16949"],
    equipmentUsed: [
      "Fuji AIMEX IIIc Modular Placement Machine",
      "Panasonic NPM-D3A High-Speed Mounter",
      "Fuji GPX-CII Automated Solder Paste Printer",
      "Koh Young KY8080-L Inline 3D SPI"
    ],
    image: "/assets/image/factory-smt-line.jpg",
    badge: "200,000 CPH Capacity"
  },
  {
    id: "through-hole",
    serviceNumber: 4,
    title: "Through-Hole Technology (THT) & Wave Soldering",
    shortTitle: "THT Assembly",
    slug: "tht-wave-soldering",
    category: "Manufacturing",
    shortDesc: "Automated wave soldering, selective soldering, and IPC Class 3 precision manual insertion lines.",
    fullDescription: "For heavy power electronics, high-vibration connectors, aerospace relays, and legacy pin-through-hole assemblies, SriLin operates dedicated THT lines. Featuring automated lead forming, ESD-protected manual insertion conveyor tracks, and dual-wave nitrogen-purged soldering machines. Every solder joint is evaluated to guarantee greater than 75% vertical barrel fill in full adherence to IPC-A-610 Class 3 requirements.",
    tolerances: "Vertical barrel fill >75% minimum (IPC Class 3 requires 75%, SriLin typically achieves 95%+).",
    keyMetrics: [
      { label: "Barrel Fill Target", value: "> 95% Average" },
      { label: "Wave Solder Atmosphere", value: "Nitrogen (N2) Purged" },
      { label: "Workmanship Standard", value: "IPC-A-610 Class 3" },
      { label: "Lead Forming Accuracy", value: "+/- 0.10 mm" }
    ],
    specifications: [
      "Lead forming: Automated cutting and bending for axial, radial, and multi-lead power transistors (TO-220, TO-247).",
      "Wave soldering: Dual-wave laminar and turbulent wave configuration with lead-free SAC305 alloy pot.",
      "Flux application: High-precision ultrasonic spray fluxer with minimal residue formation.",
      "Selective soldering: Multi-axis nozzle soldering for mixed-technology PCBA with populated SMT on underside.",
      "Operator certification: All hand-soldering operators certified to IPC-A-610 Class 3 Master Trainer standards."
    ],
    standards: ["IPC-A-610 Class 3", "IPC-J-STD-001", "MIL-STD-2000"],
    equipmentUsed: [
      "Dual-Wave Nitrogen Convection Wave Soldering Machine",
      "Selective Soldering Robot Workstations",
      "HAKKO ESD Digital Temperature-Controlled Soldering Stations",
      "Pneumatic Component Lead Forming Presses"
    ],
    image: "/assets/image/pcba-smt.webp",
    badge: "IPC Class 3 Compliant"
  },
  {
    id: "aoi-xray-inspection",
    serviceNumber: 5,
    title: "3D AOI & 160kV Micro-Focus X-Ray Inspection",
    shortTitle: "3D AOI & X-Ray",
    slug: "testing-services",
    category: "Quality Assurance",
    shortDesc: "Inline 3D moire optical inspection and sub-micron 160kV micro-focus non-destructive X-ray verification.",
    fullDescription: "SriLin deploys a dual-tier non-destructive optical and radiographic inspection architecture. Inline Koh Young ZENITH ALPHA HS+ 3D AOI uses 5-way moire light projection and an 8 Megapixel camera to detect coplanarity, tombstoning, lifted leads, and insufficient solder volume in real-time. For hidden solder joints (BGA, QFN, CSP, land-grid arrays), our Nordson Dage 160kV / 3W Quadra micro-focus X-ray provides sub-micron 0.95 um feature recognition, 7,500x magnification, and 360-degree oblique viewing with automated void percentage computation.",
    tolerances: "BGA solder voiding calculated down to 0.1% resolution; feature recognition down to 0.95 um.",
    keyMetrics: [
      { label: "X-Ray Tube Voltage", value: "160 kV Micro-Focus" },
      { label: "Feature Recognition", value: "0.95 um Sub-Micron" },
      { label: "Total Magnification", value: "Up to 7,500x" },
      { label: "3D AOI Camera", value: "8 MP 5-Way Projection" }
    ],
    specifications: [
      "3D AOI parameters: 25 mm 3D height clearance, 100% false-call suppression, real-time OCV/OCR text check.",
      "X-Ray stage envelope: 510 mm x 445 mm motorized 4-axis active manipulator stage.",
      "Oblique angle inspection: 2x 65-degree oblique viewing angle with 360-degree continuous rotation around point of interest.",
      "Defect classification: Void percentage computation, solder bridging, wire-bond sweep, head-in-pillow, barrel fill.",
      "KSMART SPC integration: Closed-loop real-time statistical process control linking AOI results back to printer and mounter."
    ],
    standards: ["IPC-A-610 Class 3", "IPC-7095 (BGA Design & Inspection)", "AS9100D Rev D"],
    equipmentUsed: [
      "Koh Young ZENITH ALPHA HS+ Inline 3D AOI",
      "Nordson Dage Quadra 160kV / 3W Micro-Focus X-Ray System",
      "Koh Young KY8080-L 3D Solder Paste Inspection (SPI)"
    ],
    image: "/assets/image/factory-inspection-xray.jpg",
    badge: "Sub-Micron 0.95 um Precision"
  },
  {
    id: "fct-ict-testing",
    serviceNumber: 6,
    title: "Functional Circuit Testing (FCT) & In-Circuit Testing (ICT)",
    shortTitle: "FCT / ICT Testing",
    slug: "testing-services",
    category: "Quality Assurance",
    shortDesc: "Custom NI LabVIEW PXIe automated test stations, bed-of-nails ICT, and RF telemetry validation.",
    fullDescription: "Zero defective units reach dispatch thanks to our multi-tier electrical testing infrastructure. We engineer custom bed-of-nails In-Circuit Test (ICT) fixtures for passive/active component verification and shorts/opens isolation. For functional validation, SriLin builds dedicated NI PXIe automated test benches powered by National Instruments LabVIEW and TestStand, simulating real-world operating voltages, high-speed digital communications, sensor inputs, and RF transmissions up to 6 GHz.",
    tolerances: "Voltage measurement accuracy 0.0035%; resistance measurement down to micro-ohms; RF power measurement +/-0.5 dB.",
    keyMetrics: [
      { label: "Test Architecture", value: "NI PXIe Modular Chassis" },
      { label: "Software Sequencing", value: "NI LabVIEW & TestStand" },
      { label: "RF Spectrum Range", value: "Up to 6.0 GHz" },
      { label: "Test Data Logging", value: "100% Serialized into MES" }
    ],
    specifications: [
      "In-Circuit Testing: Bed-of-nails custom vacuum and pneumatic fixtures checking component values, orientation, and clamping.",
      "Functional Testing: Full emulation of vehicle bus (CAN-FD, LIN), industrial interfaces (RS485, Modbus), and avionics telemetry.",
      "Boundary Scan: JTAG IEEE 1149.1 / IEEE 1149.6 testing for high-density BGA net interconnectivity without physical test points.",
      "High-precision instrumentation: Keysight 6.5-digit digital multimeters, multi-channel programmable DC power supplies, electronic loads.",
      "Firmware flashing: High-speed Gang programmers writing encrypted firmware and cryptographic keys during ICT/FCT."
    ],
    standards: ["IEEE 1149.1", "MIL-STD-810G", "ISO 17025", "AS9100D"],
    equipmentUsed: [
      "National Instruments PXIe-1082 Chassis with PXIe Controllers",
      "Keysight 34465A 6.5 Digit Truevolt Multimeters",
      "Rigol Programmable DC Electronic Loads & Power Supplies",
      "Custom Bed-of-Nails Pneumatic Fixture Stations"
    ],
    image: "/assets/image/feature-3.jpg",
    badge: "NI LabVIEW Automated Stations"
  },
  {
    id: "conformal-coating",
    serviceNumber: 7,
    title: "Automated Conformal Coating & Potting",
    shortTitle: "Conformal Coating",
    slug: "conformal-coating-services",
    category: "Manufacturing",
    shortDesc: "Robotic selective atomized spray dispensing of acrylic, silicone, and polyurethane in controlled cleanroom.",
    fullDescription: "To withstand harsh operational environments (aerospace high altitude, defense desert heat, marine salt-fog, automotive engine bay vibration), SriLin operates automated PVA robotic selective conformal coating systems. The line applies uniform protective coatings without manual masking errors. We support Acrylic (AR), Silicone (SR), Polyurethane (UR), and Water-based chemistries with integrated UV tracers for automated blacklight inspection.",
    tolerances: "Film thickness strictly maintained between 25 um and 125 um per IPC-CC-830 specifications.",
    keyMetrics: [
      { label: "Thickness Uniformity", value: "25 um to 125 um" },
      { label: "Dispense System", value: "4-Axis Robotic Selective Spray" },
      { label: "Coating Chemistries", value: "AR, UR, SR & Aqua" },
      { label: "Curing Mechanism", value: "Inline Convection & UV Oven" }
    ],
    specifications: [
      "Selective dispensing: 4-axis multi-head robotic valve dispensing atomized fan spray and precision micro-needle beads.",
      "Masking elimination: High-precision edge definition eliminates manual tape masking around connectors, test pads, and RF shields.",
      "Inspection: 100% blacklight UV inspection station with calibrated optical density sensors.",
      "Potting & encapsulation: Two-part polyurethane and silicone potting dispensing for waterproof IP67/IP68 and explosion-proof assemblies.",
      "Environmental resistance: Certified resistance to humidity, salt spray, thermal cycling, and chemical exposure."
    ],
    standards: ["IPC-CC-830C", "MIL-I-46058C", "UL94-V0", "AS9100D"],
    equipmentUsed: [
      "PVA Automated Selective Conformal Coating Robot Line",
      "Inline Convective IR and Long-Wave UV Curing Tunnel",
      "High-Intensity UV Blacklight Inspection Stations"
    ],
    image: "/assets/image/fr4-pcb.webp",
    badge: "PVA Robotic Selective Dispensing"
  },
  {
    id: "box-build",
    serviceNumber: 8,
    title: "Turnkey Box Build & Complete System Integration",
    shortTitle: "Box Build Integration",
    slug: "box-build-integration",
    category: "Integration",
    shortDesc: "Full electro-mechanical assembly, custom wire harnesses, thermal potting, calibration, and retail packaging.",
    fullDescription: "SriLin provides complete turnkey box-build manufacturing, transforming bare circuit boards into finished, tested, and packaged commercial and industrial products. Our mechanical assembly cells handle precision CNC-machined aluminum enclosures, die-cast shells, sheet metal chassis, and plastic injection moldings. We route complex custom wire harnesses, mount display panels, integrate thermal interfaces, flash production firmware, and conduct final end-to-end burn-in and packaging.",
    tolerances: "Torque control calibration within +/-0.05 Nm; chassis dimensional fit within +/-0.05 mm.",
    keyMetrics: [
      { label: "Integration Scope", value: "PCB to Complete Retail Unit" },
      { label: "Torque Tightening", value: "Calibrated Electric Screwdrivers" },
      { label: "Harness Testing", value: "100% Continuity & Hi-Pot" },
      { label: "Packaging Options", value: "Industrial, Defense & Retail" }
    ],
    specifications: [
      "Mechanical integration: Enclosure installation, gasket insertion, thermal pad/grease automated dispensing.",
      "Wiring & cabling: Custom cable harness routing, crimping, wire tie securing, and automated continuity checking.",
      "Calibration & test: Unit-level functional test, sensor zero-calibration, display touch panel calibration.",
      "Serialization & labeling: Permanent laser engraved or tamper-evident serial plates with regulatory marks (BIS, CE, FCC).",
      "Full turnkey logistics: Protective ESD anti-static packaging, drop-ship fulfillment, and export crating."
    ],
    standards: ["IPC/WHMA-A-620", "ISO 9001:2015", "AS9100D Rev D", "UL 508A"],
    equipmentUsed: [
      "Atlas Copco Calibrated Precision Torque Driver Workstations",
      "Cirris Automated Cable Harness Analyzers",
      "Automated Thermal Interface Material (TIM) Dispensers",
      "Pneumatic Press-Fit Connector Insertion Machines"
    ],
    image: "/assets/image/all-in-one-banner.webp",
    badge: "Electro-Mechanical Assembly"
  },
  {
    id: "ultrasonic-welding",
    serviceNumber: 9,
    title: "Ultrasonic Plastic Enclosure Welding",
    shortTitle: "Ultrasonic Welding",
    slug: "ultrasonic-welding-services",
    category: "Integration",
    shortDesc: "High-frequency molecular acoustic bonding of plastic enclosures for hermetic IP67/IP68 sealing.",
    fullDescription: "For automotive sensors, medical electronics, and waterproof consumer IoT devices, SriLin provides ultrasonic plastic welding. Using 20 kHz and 35 kHz high-power acoustic transducers, the system induces localized frictional heat at the joint interface, creating a continuous molecular bond without chemical adhesives, solvent vapors, mechanical screws, or thermal distortion. Microprocessor-controlled collapse depth monitoring ensures identical hermetic seals across high-volume production.",
    tolerances: "Weld collapse depth accuracy +/-0.01 mm; weld time repeatability within 1 millisecond.",
    keyMetrics: [
      { label: "Acoustic Frequency", value: "20 kHz / 35 kHz" },
      { label: "Collapse Precision", value: "+/- 0.01 mm" },
      { label: "Sealing Rating", value: "Hermetic IP67 / IP68" },
      { label: "Cycle Time", value: "0.8 to 2.5 Seconds" }
    ],
    specifications: [
      "Plastic material compatibility: ABS, Polycarbonate (PC), Polyamide (Nylon), PBT, PMMA, and Acrylic blends.",
      "Joint design support: Energy director joints, shear joints, and tongue-and-groove hermetic hermetic seals.",
      "Process control: Digital parameter regulation monitoring energy, collapse distance, peak power, and time.",
      "Hermetic testing: Inline pneumatic air-decay pressure leak testing verifying IP67/IP68 ingress protection.",
      "Tooling: Custom acoustic titanium and aluminum sonotrodes engineered with finite element acoustic modeling."
    ],
    standards: ["ISO 20430", "IP67 / IP68 Ingress Protection", "RoHS Compliant"],
    equipmentUsed: [
      "High-Precision 20 kHz / 35 kHz Ultrasonic Plastic Welding Systems",
      "Pneumatic Air Decay Pressure Leak Testers",
      "Custom Titanium Sonotrode Acoustic Horns"
    ],
    image: "/assets/image/case-siemens.webp",
    badge: "Hermetic IP67 / IP68 Bonding"
  },
  {
    id: "laser-marking",
    serviceNumber: 10,
    title: "Fiber Laser Marking & Serialization",
    shortTitle: "Laser Marking",
    slug: "laser-marking-services",
    category: "Traceability",
    shortDesc: "High-resolution permanent laser engraving of 2D DataMatrix ECC200, QR codes, and serialized tracking.",
    fullDescription: "SriLin integrates inline fiber laser marking systems to permanently etch machine-readable 2D DataMatrix ECC 200, QR codes, barcode symbologies, and human-readable alphanumeric text directly onto PCB substrates, solder masks, metal shielding cans, and IC packaging. Markings withstand aggressive solvent washes, reflow temperatures, and conformal coating, providing tamper-proof traceability linked directly to our central Manufacturing Execution System (MES).",
    tolerances: "Cell size resolution down to 0.15 mm; positioning accuracy +/-0.02 mm.",
    keyMetrics: [
      { label: "Laser Technology", value: "High-Speed Fiber / Nd:YVO4" },
      { label: "Min 2D Code Size", value: "0.15 mm Cell Pitch" },
      { label: "Engraving Speed", value: "Up to 7,000 mm/sec" },
      { label: "MES Synchronization", value: "Real-Time Serial Generation" }
    ],
    specifications: [
      "Substrates supported: Standard FR4 solder mask, Rogers RF substrates, Aluminum IMS, stainless steel, plastic housings.",
      "Symbology standards: DataMatrix ECC 200, QR Code, GS1-128, Code 39, Code 128, micro-alphanumeric text.",
      "Inline verification: Integrated Cognex vision scanner reads and verifies symbol grading immediately after mark generation.",
      "Traceability linkage: Serial code encapsulates PCB batch ID, SMT line number, date-time stamp, and panel position.",
      "Thermal resistance: Engraving remains readable after 260 deg C lead-free reflow and solvent wash."
    ],
    standards: ["IPC-1782 (Traceability)", "MIL-STD-130N", "AIM DPM-1-2006", "AS9100D"],
    equipmentUsed: [
      "Automated Inline PCB Fiber Laser Marking System",
      "Cognex Industrial 2D DataMatrix Verification Readers",
      "Central MES Serialization Database Server"
    ],
    image: "/assets/image/smt-stencil.webp",
    badge: "Inline MES Serialization"
  },
  {
    id: "burn-in-room",
    serviceNumber: 11,
    title: "Burn-in Room & Environmental Stress Screening (ESS)",
    shortTitle: "Burn-in Room",
    slug: "burn-in-room-services",
    category: "Reliability",
    shortDesc: "High-temperature continuous power cycling from 8 to 240 hours eliminating infant mortality failures.",
    fullDescription: "To eradicate early component infant mortality defects in mission-critical aerospace, defense, and industrial electronics, SriLin maintains a state-of-the-art walk-in and chamber Burn-In Testing Room. Electronics undergo sustained electrical power stressing under elevated ambient temperatures ranging from +40 deg C up to +85 deg C (chamber up to +125 deg C) for durations between 8 hours and 240 hours. Automated multichannel telemetry records live current, voltage, and bus responses to guarantee uncompromising field reliability.",
    tolerances: "Temperature uniformity within +/-1.5 deg C across the entire burn-in chamber volume.",
    keyMetrics: [
      { label: "Chamber Temp Range", value: "Ambient to +125 deg C" },
      { label: "Screening Duration", value: "8 Hours to 240 Hours" },
      { label: "Telemetry Channels", value: "Continuous Automated Logging" },
      { label: "Infant Failure Elimination", value: "> 99.9% Target" }
    ],
    specifications: [
      "Stress profiles: Static burn-in, dynamic burn-in (active input clocking), and cyclic power-on/power-off thermal cycling.",
      "Power infrastructure: Programmable multi-channel DC power racks with automated current limit trip monitoring.",
      "Thermal control: Multi-zone forced air convection with PID controllers and redundant over-temperature safety cutoffs.",
      "Telemetry logging: Real-time logging of current draw, voltage rails, and communication error counters into MES.",
      "Application scope: Satellite avionics, automotive engine controllers, high-power telecom rectifiers, military guidance modules."
    ],
    standards: ["MIL-STD-883 Method 1015", "JESD22-A108", "IPC-9592B", "AS9100D"],
    equipmentUsed: [
      "Custom Multi-Bay Industrial Walk-in Burn-in Chamber",
      "Programmable Multichannel Electronic DC Load Racks",
      "Automated Environmental Data Acquisition Units"
    ],
    image: "/assets/image/rigid-pcb.webp",
    badge: "8h to 240h Stress Profiling"
  },
  {
    id: "component-sourcing",
    serviceNumber: 12,
    title: "Turnkey Component Sourcing & Supply Chain Management",
    shortTitle: "Component Sourcing",
    slug: "component-sourcing-services",
    category: "Supply Chain",
    shortDesc: "Authorized franchised distributor procurement, anti-counterfeit testing, and MSD dry storage management.",
    fullDescription: "SriLin provides complete Bill of Materials (BOM) management and component procurement through authorized franchised global channels (Arrow, Avnet, DigiKey, Mouser, Future Electronics) and direct semiconductor fab relationships. Our procurement division protects customers against counterfeit parts through incoming optical microscopy, decapsulation validation, solderability testing, and strict Certificate of Conformance (CoC) verification. All moisture-sensitive devices are stored in Dr. Storage low-humidity cabinets under 5% RH.",
    tolerances: "100% franchised distributor traceability; 0% tolerance for unverified broker stock.",
    keyMetrics: [
      { label: "Procurement Network", value: "Tier-1 Global Franchised" },
      { label: "MSD Storage Humidity", value: "< 5% RH (Dr. Storage)" },
      { label: "Traceability Assurance", value: "Full CoC & Batch Tracked" },
      { label: "Obsolescence Monitoring", value: "Proactive EOL Alerts" }
    ],
    specifications: [
      "Franchised channels: Direct relationships with major semiconductor manufacturers (ST, TI, Microchip, NXP, Qualcomm).",
      "Anti-counterfeit screening: Visual inspection, marking permanence, pin finish XRF analysis, and electrical parameter checks.",
      "Moisture protection: IPC/JEDEC J-STD-033 dry cabinets, vacuum seal packaging with humidity indicator cards.",
      "Buffer stock management: Dedicated bonded inventory rooms for customer-dedicated Kanban programs.",
      "Obsolescence management: Early notification of End-of-Life (EOL) parts and immediate drop-in replacement engineering."
    ],
    standards: ["AS6081 (Counterfeit Mitigation)", "IPC/JEDEC J-STD-033", "RoHS 3 / REACH", "AS9100D"],
    equipmentUsed: [
      "Dr. Storage Ultra-Low Humidity (<5% RH) Nitrogen Cabinets",
      "Inspection Stereo Microscopes with High-Res Digital Imaging",
      "Component Vacuum Heat-Sealing Packaging Stations"
    ],
    image: "/assets/image/parts-marketplace.webp",
    badge: "Franchised Anti-Counterfeit"
  },
  {
    id: "mes-traceability",
    serviceNumber: 13,
    title: "Manufacturing Execution System (MES) & Complete Traceability",
    shortTitle: "MES Traceability",
    slug: "mes-traceability-services",
    category: "Traceability",
    shortDesc: "Real-time digital paperless factory floor tracking from component reel to final box build shipment.",
    fullDescription: "SriLin's manufacturing floor is controlled by an integrated digital Manufacturing Execution System (MES). Every raw material reel, stencil, solder paste jar, and individual PCB carries a unique barcode scanned at every processing node: Solder Paste Printer -> 3D SPI -> SMT 1 -> SMT 2 -> Reflow -> 3D AOI -> 160kV X-Ray -> THT -> Coating -> Testing -> Packaging. The system enforces electronic route enforcement (preventing bypassed operations), records operator IDs, machine parameters, and thermal profiles, generating a comprehensive Digital Device History Record (DHR).",
    tolerances: "100% component-to-box traceability; zero bypass enforcement across all 14 stages.",
    keyMetrics: [
      { label: "Traceability Depth", value: "Component Lot to Box" },
      { label: "Route Enforcement", value: "Automated Station Interlock" },
      { label: "DHR Generation", value: "Permanent Digital Archive" },
      { label: "ERP Integration", value: "Live Production Tracking" }
    ],
    specifications: [
      "Feeder verification: Smart feeder barcode scanning prevents incorrect component reels from being loaded onto Fuji/Panasonic mounters.",
      "Solder paste tracking: Tracks paste expiry, ambient thaw time, jar opening time, and stencil life cycle limits.",
      "Thermal profile logging: Individual PCB serials tied to KIC-X5 reflow temperature profile curves.",
      "Inspection archiving: Koh Young 3D SPI, 3D AOI, and Nordson X-ray images stored in central server against PCB serial numbers.",
      "Audit compliance: Instant one-click DHR retrieval for aerospace AS9100D, automotive IATF, and medical ISO 13485 audits."
    ],
    standards: ["IPC-1782 Class 4", "FDA 21 CFR Part 11", "AS9100D Rev D", "IATF 16949"],
    equipmentUsed: [
      "Central High-Availability MES Cluster Servers",
      "Industrial Handheld Barcode Scanners at All 24 Workstations",
      "Automated Line Interlock PLC Gateways"
    ],
    image: "/assets/image/factory-inspection-xray.jpg",
    badge: "100% Component-to-Box DHR"
  },
  {
    id: "bga-rework",
    serviceNumber: 14,
    title: "Precision BGA Rework, Reballing & Micro-Soldering",
    shortTitle: "BGA Rework",
    slug: "bga-rework-services",
    category: "Manufacturing",
    shortDesc: "Computer-controlled split-vision optical alignment BGA rework, reballing, and X-ray post-validation.",
    fullDescription: "For high-value aerospace circuit boards, prototype engineering modifications, and salvage operations, SriLin operates precision computer-controlled BGA rework stations. Utilizing split-vision prism optics for simultaneous component-to-board alignment, our technicians safely de-solder, clean pads, re-ball, and re-mount fine-pitch BGAs, CSPs, LGAs, and QFNs without thermal damage to adjacent components or inner PCB layers. Every reworked assembly undergoes mandatory 160kV micro-focus X-ray validation to guarantee zero bridging and voiding below 15%.",
    tolerances: "Optical placement alignment within +/-0.010 mm; peak temperature profile accuracy +/-2 deg C.",
    keyMetrics: [
      { label: "Min BGA Pitch", value: "0.30 mm Ball Pitch" },
      { label: "Alignment Optical System", value: "High-Res Split-Vision Prism" },
      { label: "Heating Technology", value: "Multi-Zone Closed-Loop IR/Hot-Air" },
      { label: "Post-Rework Validation", value: "100% 160kV X-Ray Verified" }
    ],
    specifications: [
      "Thermal profiling: Multi-zone top hot-air, bottom hot-air, and large-area infrared under-board preheater preventing PCB warpage.",
      "Optical alignment: High-definition split-vision prism overlaying solder balls and PCB pads on a dual-color display.",
      "Reballing tooling: Precision direct-heat micro-stencils and sphere placement jigs for SAC305 lead-free and Sn63Pb37 alloys.",
      "Site redressing: Non-contact hot-air desoldering tools and copper solder-braid pad cleaning under stereo microscope.",
      "Aerospace certification: Rework conducted strictly according to IPC-7711/7721 Rework, Modification and Repair of Electronic Assemblies."
    ],
    standards: ["IPC-7711/7721", "IPC-A-610 Class 3", "IPC-7095", "AS9100D"],
    equipmentUsed: [
      "Advanced Split-Vision Optical Alignment BGA Rework Station",
      "Precision BGA Reballing Stencil & Fixture Tooling Sets",
      "Nordson Dage 160kV Micro-Focus X-Ray Inspection Machine",
      "Olympus Stereo Inspection Microscopes"
    ],
    image: "/assets/image/chip-fpga.jpg",
    badge: "0.30mm BGA Pitch Alignment"
  }
];

// ============================================================================
// 3. EQUIPMENT SPECIFICATIONS & FLEET DATA
// ============================================================================
export const EQUIPMENT_DATA = [
  {
    id: "fuji-nxt-aimex",
    machineName: "Fuji AIMEX IIIc Modular SMT Placement System",
    manufacturer: "Fuji Corporation (Japan)",
    category: "SMT Pick & Place",
    keyCapability: "High-speed high-accuracy flexible placement",
    specifications: {
      speed: "103,000 CPH (2 Robots x 2 Modules)",
      accuracy: "+/- 0.025 mm @ Cpk >= 1.00 (3 sigma)",
      componentRange: "01005 chips (0.4x0.2mm) to 74x74mm ICs, height up to 38.1mm",
      finePitchCapability: "0.3mm BGA pitch, 0.3mm lead pitch QFP, Micro-BGA, CSP, POP",
      boardSizeRange: "48 mm x 48 mm to 508 mm x 400 mm",
      feeders: "Intelligent smart electric feeders (4mm to 72mm) + 3 vibratory stick feeders + tray unit",
      carts: "3 extra feeder carts for zero-downtime quick changeover",
      alignment: "High-speed flying vision CCD optical inspection with built-in auto-calibration"
    },
    description: "The Fuji AIMEX IIIc forms the primary placement engine at SriLin. Equipped with dual robotic modules, intelligent variable-pitch feeders, and hybrid thermal calibration, it guarantees extreme placement repeatability across aerospace and automotive assemblies.",
    cleanroomClass: "Class 100,000 (ISO-8)",
    image: "/assets/image/factory-smt-line.jpg"
  },
  {
    id: "panasonic-npm-d3a",
    machineName: "Panasonic NPM-D3A High-Speed Pick and Place Machine",
    manufacturer: "Panasonic Corporation (Japan)",
    category: "SMT Pick & Place",
    keyCapability: "Ultra-high throughput chip mounting",
    specifications: {
      speed: "92,500 CPH",
      accuracy: "+/- 0.025 mm @ Cpk >= 1.00 (3 sigma)",
      componentRange: "01005 chips to 100x90mm odd-form components",
      boardSizeRange: "50 mm x 50 mm to 510 mm x 590 mm",
      feeders: "Intelligent smart feeders (4mm to 32mm)",
      carts: "2 extra feeder carts for quick product changeover",
      calibration: "Built-in auto-calibration and hybrid thermal compensation"
    },
    description: "Working in tandem with the Fuji line, the Panasonic NPM-D3A delivers extreme placement speed for high-density consumer, telecom, and automotive IoT boards, bringing SriLin's total placement capacity to 200,000 CPH.",
    cleanroomClass: "Class 100,000 (ISO-8)",
    image: "/assets/image/factory-smt-line.jpg"
  },
  {
    id: "fuji-gpx-cii",
    machineName: "Fuji GPX-CII Automated Solder Paste / Glue Printer",
    manufacturer: "Fuji Corporation (Japan)",
    category: "Solder Paste Printing",
    keyCapability: "Precision sub-mil stencil printing",
    specifications: {
      alignmentAccuracy: "+/- 0.010 mm, 6 sigma [Cpk >= 2.0]",
      wetPrintAccuracy: "+/- 0.018 mm, 6 sigma [Cpk >= 2.0]",
      cycleTime: "6.0 seconds per panel (including load, fiducial read, stencil align, print, unload)",
      applicablePanelSize: "48 mm x 48 mm to 610 mm x 610 mm",
      stencilCleaning: "Dry + Wet solvent + Vacuum filtration cycle",
      pasteDispenser: "Auto paste dispenser JAR type with solder roll diameter monitoring",
      closedLoop: "Inline SPI closed-loop feedback with auto-offset correction",
      widthAdjustment: "Fully automatic conveyor width adjustment"
    },
    description: "Industry-leading stencil printing precision. The GPX-CII automatically adjusts print offsets based on real-time feedback from the Koh Young 3D SPI, ensuring zero solder bridge or insufficient paste defects at the source.",
    cleanroomClass: "Class 100,000 (ISO-8)",
    image: "/assets/image/smt-stencil.webp"
  },
  {
    id: "koh-young-spi",
    machineName: "Koh Young KY8080-L Inline 3D Solder Paste Inspection (SPI)",
    manufacturer: "Koh Young Technology (South Korea)",
    category: "3D Solder Inspection",
    keyCapability: "Patented shadow-free dual projection 3D measurement",
    specifications: {
      lateralResolution: "15 um X/Y resolution (configurable to 20/25 um)",
      verticalResolution: "0.37 um Z resolution",
      camera: "4 Megapixel B/W digital camera with telecentric optical system",
      inspectionEnvelope: "50 mm x 50 mm to 510 mm x 510 mm",
      minPasteDeposit: "Up to 3.94 mils supported",
      measurementAccuracy: "< 1% on calibration target; < 3% on production PCB",
      measurementRepeatability: "< 10% on 01005 deposits @ 6 sigma",
      defectsDetected: "Insufficient paste, excessive paste, missing paste, bridging, shape deformity, displacement, height, volume, area",
      software: "SPC Plus (Statistical Process Control) & KSMART Link closed-loop feedback"
    },
    description: "Koh Young's world-leading 3D SPI technology eliminates solder paste defects before boards enter the pick-and-place machines. Dynamic Z-tracking eliminates board warpage measurement distortion.",
    cleanroomClass: "Class 100,000 (ISO-8)",
    image: "/assets/image/factory-inspection-xray.jpg"
  },
  {
    id: "jtr-1000n-reflow",
    machineName: "JTR-1000N 13-Zone Nitrogen Reflow Convection Oven",
    manufacturer: "JTR Technologies",
    category: "Thermal Reflow",
    keyCapability: "Ultra-stable multi-zone thermal profiling with nitrogen purge",
    specifications: {
      heatingZones: "10 Top and 10 Bottom heating convection zones (20 total heaters)",
      coolingZones: "3 Top and 3 Bottom cooling zones with forced chilled air",
      atmosphere: "Nitrogen (N2) ready with precision oxygen analyzer (< 500 ppm O2)",
      profiler: "Inbuilt KIC-X5 9-channel real-time thermal profiler with insulated carrier",
      conveyors: "Dual conveyor system: Stainless steel mesh belt and pin-chain conveyor",
      lubrication: "Automatic computerized chain oiler and lubrication system",
      safetyFeatures: "Entrance/exit board drop sensors with real-time UI animation and alarm"
    },
    description: "The 13-zone JTR-1000N reflow oven delivers smooth, controllable thermal curves for complex mixed-mass assemblies. Nitrogen purging eliminates oxidation, ensuring pristine wetting on lead-free SAC305 and high-reliability SnPb alloys.",
    cleanroomClass: "Class 100,000 (ISO-8)",
    image: "/assets/image/factory-smt-line.jpg"
  },
  {
    id: "koh-young-zenith-aoi",
    machineName: "Koh Young ZENITH ALPHA HS+ Inline 3D AOI",
    manufacturer: "Koh Young Technology (South Korea)",
    category: "3D Optical Inspection",
    keyCapability: "True 3D component and solder joint geometric profiling",
    specifications: {
      camera: "8 Megapixel high-speed 3D sensor camera",
      lightingSystem: "5-Way 3D Moire projector lighting system",
      heightInspection: "Up to 25 mm 3D component height inspection clearance",
      boardSizeRange: "Up to 490 mm x 510 mm",
      threeDDefects: "Missing components, offset, billboarding, tombstoning, coplanarity, lifted leads, bridging, insufficient/excessive solder fillet",
      twoDInspection: "Optical Character Recognition (OCR) and Optical Character Verification (OCV) for polarity and part markings",
      programming: "Auto-programming AI engine with offline programming workstation",
      integration: "Central KSMART server network traceability"
    },
    description: "Eliminating subjective visual inspection, the ZENITH ALPHA HS+ measures true 3D volumetric shapes of solder fillets and component bodies against IPC-A-610 Class 3 criteria.",
    cleanroomClass: "Class 100,000 (ISO-8)",
    image: "/assets/image/factory-inspection-xray.jpg"
  },
  {
    id: "nordson-dage-xray",
    machineName: "Nordson Dage 160kV / 3W Quadra Micro-Focus X-Ray Inspection System",
    manufacturer: "Nordson DAGE (United Kingdom)",
    category: "Radiographic Inspection",
    keyCapability: "Sub-micron non-destructive internal defect detection",
    specifications: {
      tubeVoltage: "160 kV open micro-focus X-ray tube with 3W target power",
      featureRecognition: "0.95 um sub-micron feature resolution",
      geometricMagnification: "Up to 7,500x total system magnification",
      stageEnvelope: "510 mm x 445 mm motorized active 4-axis manipulator stage",
      obliqueViewing: "2x 65-degree oblique viewing angles with 360-degree orbital rotation around point of interest",
      quantitativeTools: "Automated BGA voiding area percentage calculator, barrel fill percentage, wire-bond sweep angle",
      complianceVerification: "IPC-A-610 and IPC-7095 BGA criteria validation"
    },
    description: "The gold standard for aerospace and defense non-destructive verification. The 160kV micro-focus tube inspects concealed BGA solder balls, QFN thermal pads, plated through-holes, and semiconductor wire bonds.",
    cleanroomClass: "Class 100,000 (ISO-8)",
    image: "/assets/image/factory-inspection-xray.jpg"
  },
  {
    id: "pva-conformal-line",
    machineName: "PVA Automated Selective Conformal Coating Robot Line",
    manufacturer: "PVA (Precision Valve & Automation, USA)",
    category: "Conformal Coating",
    keyCapability: "Maskless robotic selective fluid dispensing",
    specifications: {
      robotics: "4-Axis closed-loop servo driven robotic gantry with +/-0.025 mm repeatability",
      valves: "Dual atomized spray valve and micro-dispense needle valve",
      thicknessRange: "25 um to 125 um precision layer thickness control",
      supportedChemistries: "Acrylic (AR), Silicone (SR), Polyurethane (UR), Water-based coatings",
      curingTunnel: "Inline multi-zone infrared convection and long-wave UV cure oven",
      inspection: "High-intensity UV blacklight station with automated fluorescence checking"
    },
    description: "Automated selective coating prevents material deposition on connector contacts and test pads while maintaining hermetic environmental protection against humidity, fungus, salt-spray, and vibration.",
    cleanroomClass: "Class 100,000 (ISO-8)",
    image: "/assets/image/fr4-pcb.webp"
  },
  {
    id: "ni-pxie-test-station",
    machineName: "National Instruments PXIe Automated Test Stations (LabVIEW)",
    manufacturer: "National Instruments (USA)",
    category: "Functional Testing",
    keyCapability: "Modular automated test sequencing & RF validation",
    specifications: {
      chassis: "NI PXIe-1082 high-bandwidth chassis with multicore embedded controllers",
      instruments: "PXIe high-speed digitizers, digital multimeters, arbitrary waveform generators, programmable matrix switches",
      rfTesting: "Vector signal analyzers and generators up to 6.0 GHz for wireless telemetry",
      software: "Custom test suites written in NI LabVIEW and NI TestStand",
      dataLogging: "100% test telemetry saved directly to central MES server"
    },
    description: "Custom-configured PXIe test racks simulate real operating environments for aerospace sensors, missile telemetry boards, automotive ADAS cameras, and IoT radios with zero human testing variance.",
    cleanroomClass: "Class 100,000 (ISO-8)",
    image: "/assets/image/feature-3.jpg"
  },
  {
    id: "ultrasonic-plastic-welder",
    machineName: "Industrial Ultrasonic Plastic Welding Machine",
    manufacturer: "Herrmann / Branson Specification",
    category: "Mechanical Integration",
    keyCapability: "Molecular acoustic bonding of enclosures without screws or glue",
    specifications: {
      frequency: "20 kHz and 35 kHz high-efficiency piezoelectric transducers",
      powerRating: "2,000 Watts peak ultrasonic power",
      depthControl: "Microprocessor-controlled collapse depth regulation (+/- 0.01 mm)",
      modes: "Weld by time, weld by energy, weld by peak power, weld by absolute distance",
      hermeticSealing: "Qualified for IP67 and IP68 waterproof enclosure ratings"
    },
    description: "Produces strong, clean, and hermetically sealed seams for automotive electronics, medical handpieces, and outdoor IoT sensor nodes in under two seconds.",
    cleanroomClass: "Class 100,000 (ISO-8)",
    image: "/assets/image/case-siemens.webp"
  },
  {
    id: "fiber-laser-marking",
    machineName: "Automated Inline Fiber Laser Marking System",
    manufacturer: "IPG Photonics / Telesis Specification",
    category: "Traceability",
    keyCapability: "Permanent high-speed micro-serialization",
    specifications: {
      laserSource: "20W pulsed Fiber Laser (1064 nm wavelength)",
      markingSpeed: "Up to 7,000 mm per second",
      symbologies: "2D DataMatrix ECC 200, QR Code, Code 128, alphanumeric micro-text",
      minCellPitch: "0.15 mm cell size",
      verification: "Integrated Cognex high-resolution industrial barcode verification camera"
    },
    description: "Permanently engraves serial codes and traceability matrices directly onto PCB laminates and metallic shields before SMT assembly, feeding data into the plant MES.",
    cleanroomClass: "Class 100,000 (ISO-8)",
    image: "/assets/image/smt-stencil.webp"
  },
  {
    id: "burn-in-environmental-room",
    machineName: "Burn-in Room & Environmental Stress Screening Facility",
    manufacturer: "Custom Industrial Thermal Racks",
    category: "Reliability Screening",
    keyCapability: "Extended accelerated aging under continuous electrical load",
    specifications: {
      temperatureRange: "Ambient to +85 deg C (walk-in room) / up to +125 deg C (chamber)",
      duration: "Programmable cycles from 8 hours to 240 hours continuous stress",
      telemetry: "Real-time automated multichannel voltage, current, and communication logging",
      powerDistribution: "Dual redundant regulated DC power buses with automated crowbar over-current trips"
    },
    description: "Weeds out semiconductor and solder joint infant mortality failures under controlled thermal elevation and dynamic electrical loading prior to delivery.",
    cleanroomClass: "Class 100,000 (ISO-8)",
    image: "/assets/image/rigid-pcb.webp"
  }
];

// ============================================================================
// 4. OEM PRODUCTS (PROPRIETARY HARDWARE)
// ============================================================================
export const OEM_PRODUCTS = [
  {
    id: "sl-adas-dms-camera",
    sku: "SL-ADAS-DMS-V2",
    productName: "AI ADAS + DMS Edge Dual-Camera System",
    tagline: "Edge AI-Powered Vehicular Intelligence & Driver Monitoring Hardware",
    category: "Automotive & Fleet Intelligence",
    status: "Active Production",
    complianceRating: "Automotive ASIL-B Safety Ready | ARAI Certified | IATF 16949 Line",
    description: "SriLin's proprietary dual-camera edge AI intelligent vision system for commercial fleets, passenger vehicles, and industrial transport. Combines forward-facing Advanced Driver Assistance (ADAS) with in-cabin Driver Monitoring (DMS) and optional third-channel rear/cargo camera. Onboard deep learning neural network executes real-time computer vision algorithms for forward collision warning, lane departure, headway monitoring, driver drowsiness, phone distraction, and smoking detection without cloud latency.",
    overviewParagraphs: [
      "The SL-ADAS-DMS-V2 represents SriLin's end-to-end design and manufacturing capability in the automotive electronics sector. Engineered from the ground up at our E-City Hyderabad facility, the unit integrates automotive-grade microprocessors, high-sensitivity Sony Starvis image sensors, and robust 4G LTE/GNSS connectivity.",
      "Operating across extreme automotive temperature profiles (-20 deg C to +70 deg C), the system incorporates transient voltage suppression conforming to ISO 7637-2 pulse standards, an integrated 6-axis IMU for crash and rollover detection, and an emergency SOS hardware trigger for instant incident dispatch."
    ],
    technicalSpecifications: {
      processor: "Embedded Edge AI Neural Processing Unit (NPU) delivering up to 4-26 TOPS vision inference (Qualcomm / Hailo-8 platform)",
      memoryStorage: "8GB eMMC + 1GB LPDDR4 or 16GB eMMC + 2GB LPDDR4 options",
      storageExpansion: "High-endurance MicroSD card slot supporting up to 128GB (Class 10 / U3 / V30)",
      frontCameraAdas: {
        resolution: "1080P Full HD @ 30fps",
        sensor: "Sony Starvis low-light high dynamic range (HDR) automotive sensor",
        fieldOfView: "140 degree wide diagonal FOV",
        aperture: "F/1.8 optical glass lens with IR cut filter",
        safetyFeatures: "Forward Collision Warning (FCW), Lane Departure Warning (LDW), Pedestrian Collision Warning (PCW), Headway Monitoring (HMW)"
      },
      inCabinCameraDms: {
        resolution: "720P HD @ 30fps",
        nightVision: "Built-in 940 nm invisible Infrared (IR) LEDs for darkness operation",
        fieldOfView: "120 degree wide FOV focused on driver cockpit",
        safetyFeatures: "Driver drowsiness detection, eye-closure tracking, yawning analysis, phone distraction warning, smoking alert, driver face recognition"
      },
      optionalThirdChannel: "720P HD waterproof rear tail/cargo camera with parking grid guide",
      videoCompression: "Dual-stream hardware H.264 / H.265 video encoding",
      sensors: "Built-in 6-Axis Inertial Measurement Unit (IMU / G-Sensor) for harsh braking, sudden cornering, impact, and rollover events",
      connectivity: {
        cellular: "4G LTE Multi-band Cat-4 modem with 3G/2G fallback and internal high-gain antennas",
        wireless: "Dual-band Wi-Fi (802.11 b/g/n/ac) and Bluetooth Low Energy (BLE 5.0)",
        gnss: "High-sensitivity multi-constellation GPS / GLONASS / BeiDou / NavIC receiver"
      },
      automotiveInterfaces: "FAKRA coaxial RF connectors, Gigabit Ethernet (1000BASE-T1), CAN Bus (CAN-FD), isolated RS232/RS485",
      electrical: {
        inputVoltage: "DC 9V to 36V wide range automotive input",
        protection: "ISO 7637-2 transient pulse protection, reverse polarity protection, over-voltage clamping",
        powerConsumption: "< 8 Watts nominal during active dual-channel recording and AI inference"
      },
      environmental: {
        operatingTemperature: "-20 deg C to +70 deg C",
        storageTemperature: "-40 deg C to +85 deg C",
        enclosureSealing: "Ruggedized die-cast aluminum enclosure with vibration-damping mount (IP65 rated)"
      },
      safetyEmergency: "Integrated hardware SOS panic button, automated eCall collision notification, encrypted cloud event upload"
    },
    image: "/assets/image/adas-camera-real.jpg"
  }
];

// ============================================================================
// 5. LEADERSHIP TEAM & BOARD ADVISORS
// ============================================================================
export const LEADERSHIP_DATA = {
  executiveTeam: [
    {
      id: "akhil-nandepu",
      name: "Akhil Nandepu",
      title: "Managing Director & Chief Executive Officer",
      shortRole: "MD & CEO",
      credentials: "IIM Indore Alumnus | B.Tech ECE (Amrita University)",
      experienceYears: "12+ Years Industry Experience",
      focusAreas: "Corporate Strategy, High-Reliability Defense EMS, Capital Allocation & Technology Innovation",
      bio: "An IIM Indore alumnus and Electronics & Communication Engineering graduate from Amrita University, Akhil brings an exceptional blend of strategic vision and engineering depth. As MD & CEO, he carries complete responsibility for SriLin's operational trajectory, governance, and rapid scaling. With 12+ years hands-on experience in electronics R&D and advanced manufacturing, he orchestrated SriLin's 6X revenue expansion, cleanroom capacity doubling to 200,000 CPH, AS9100D aerospace certification, and landmark partnerships with Fortune 500 enterprises and defense agencies.",
      achievements: [
        "Led SriLin's 6X manufacturing capacity expansion in FY 2025-26",
        "Doubled automated SMT line throughput to 200,000 CPH",
        "Orchestrated AS9100D Rev D aerospace and ISO 13485:2016 medical certifications",
        "Secured high-reliability EMS manufacturing partnerships with Fortune 500 clients"
      ],
      image: "https://res.cloudinary.com/rhprdf7l/image/upload/v1783427636/srilin/team/gyp5pwbxqdocv6oi2wrs.jpg"
    },
    {
      id: "satyanarayana-vaddi",
      name: "Dr. Satyanarayana Vaddi",
      title: "Senior Board Advisor - Strategy & Finance",
      shortRole: "Board Advisor (Strategy & Finance)",
      credentials: "Stanford Seed Consultant | AIM NITI Aayog Mentor | WBAF Senator | WEF Member",
      experienceYears: "25+ Years Global Financial & Industrial Leadership",
      focusAreas: "Defense Supply Chain, Institutional Capital, M&A Governance & Strategic Alliances",
      bio: "Dr. Satyanarayana Vaddi is an internationally recognized investment banker, Stanford Seed consultant, mentor at Atal Innovation Mission (NITI Aayog), World Business Angels Investment Forum (WBAF) Senator, and World Economic Forum member. Honored among the Top 10 Leaders of Finance in 2021. As Senior Advisor to SriLin, he guides major capital structuring, institutional alliances, and defense offsets. He was the chief architect of the landmark tri-party electronics manufacturing collaboration with INP Technologies and Creative NewTech (Honeywell distribution partner).",
      achievements: [
        "Awarded Top 10 Leaders of Finance 2021",
        "Architect of Honeywell partner tri-party manufacturing agreement",
        "Strategic advisor on defense offset execution and capital allocation",
        "Stanford Seed consultant and global business mentor"
      ],
      image: "https://res.cloudinary.com/dopds7qjr/image/upload/v1782742335/srilin/team/siaqhtro5dylw1ex6cqj.jpg"
    },
    {
      id: "nandepu-srinivas",
      name: "Nandepu Srinivas",
      title: "Founding Director & Chairman",
      shortRole: "Chairman",
      credentials: "Industrialist | A.P. State Convenor (FCCI) | Ex-Director CREDAI",
      experienceYears: "40+ Years Diversified Business Leadership",
      focusAreas: "Corporate Governance, Industrial Infrastructure, Major CapEx & Statutory Compliance",
      bio: "Nandepu Srinivas brings over four decades of diversified business leadership across infrastructure, manufacturing, FMCG, finance, and real estate. Began his career managing family industrial enterprises and successfully developed large-scale infrastructure projects. Serves as A.P. State Convenor for the Federation of Chambers of Commerce and Industry (FCCI) and President for 24+ years of Sri Venkateswara General Market Committee, one of Asia's largest integrated wholesale markets. At SriLin, he steers long-term infrastructure assets, state regulatory compliance, and campus expansion at E-City EMC.",
      achievements: [
        "40+ years executive leadership across large-scale industrial enterprises",
        "A.P. State Convenor - Federation of Chambers of Commerce & Industry",
        "President for 24+ years of Sri Venkateswara General Market Committee",
        "Spearheaded acquisition and development of SriLin's 214,000 sq.ft E-City campus"
      ],
      image: "https://res.cloudinary.com/dopds7qjr/image/upload/v1782742156/srilin/team/r1fz3ahcvebhzihfqgoo.jpg"
    },
    {
      id: "phani-kumar-vejju",
      name: "Phani Kumar Vejju",
      title: "Chief Operating Officer",
      shortRole: "COO",
      credentials: "Operations Leader | Production Scaling Specialist",
      experienceYears: "18+ Years Operations & Plant Management",
      focusAreas: "Plant Operations, Cleanroom Throughput, MES Optimization & Quality Audits",
      bio: "Leads day-to-day manufacturing operations, SMT line scheduling, supply chain alignment, and continuous improvement across SriLin's cleanroom and box-build cells.",
      image: "https://res.cloudinary.com/dopds7qjr/image/upload/v1782742299/srilin/team/ov5dnjnqazk3hd8m3z3"
    },
    {
      id: "manu-seth",
      name: "Manu Seth",
      title: "Chief Revenue Officer",
      shortRole: "CRO",
      credentials: "Commercial Strategist | Global Electronics Market Leader",
      experienceYears: "20+ Years Global Sales & Enterprise Revenue",
      focusAreas: "Global Commercial Growth, OEM Partnerships, Strategic Account Penetration",
      bio: "Directs SriLin's worldwide business development, OEM commercial pipelines, and strategic customer acquisition across automotive, aerospace, telecom, and medtech verticals.",
      image: "https://res.cloudinary.com/dopds7qjr/image/upload/v1782742200/srilin/team/mcjc8nwyjrwihe3ut97r.jpg"
    },
    {
      id: "sri-lakshmi-rani",
      name: "Sri Lakshmi Rani",
      title: "Director",
      shortRole: "Director",
      credentials: "Corporate Governance Specialist",
      experienceYears: "15+ Years Corporate Governance",
      focusAreas: "Corporate Governance, Talent Welfare, CSR Initiatives",
      bio: "Serves on SriLin's Board of Directors guiding human capital development, employee welfare standards, and corporate governance compliance.",
      image: "https://res.cloudinary.com/dopds7qjr/image/upload/v1782742236/srilin/team/i2mltaw4jl98cg8txzwr.jpg"
    },
    {
      id: "lakshmi-sahaja",
      name: "Lakshmi Sahaja",
      title: "Director",
      shortRole: "Director",
      credentials: "Business Administration & Strategy",
      experienceYears: "10+ Years Strategic Management",
      focusAreas: "Legal Affairs, Statutory Compliance, Community Partnerships",
      bio: "Board Director contributing to long-term corporate positioning, ethical governance, statutory frameworks, and stakeholder engagement.",
      image: "https://res.cloudinary.com/dopds7qjr/image/upload/v1782742260/srilin/team/pa7flp4fyu3v2jhnvas2.jpg"
    }
  ],
  boardAdvisors: [
    {
      id: "ram-reddy-palukuru",
      name: "Ram Reddy Palukuru",
      title: "Senior Advisor - Technical Partnerships",
      shortRole: "Tech Partnerships Advisor",
      credentials: "Former Vice President (OnePlus India) | IIT Kharagpur Alumnus",
      experienceYears: "22+ Years Consumer Tech & Semiconductor Scaling",
      focusAreas: "Smartphone Architecture, Telecom Infrastructure, Tier-1 Semiconductor Alliances",
      bio: "Former Vice President at OnePlus India and proud IIT Kharagpur alumnus. Pioneered the world's first 3G smartphone with video calling on Qualcomm Snapdragon. Industry veteran with deep domain mastery developing smartphones, tablets, wearables, smart TVs, and telecom hardware on Qualcomm, MediaTek, and Unisoc platforms. Advises SriLin on high-volume commercial scaling and advanced chip partnerships.",
      image: "https://res.cloudinary.com/dopds7qjr/image/upload/v1782742410/srilin/team/k01cusfdqjgejpexbrlh.jpg"
    },
    {
      id: "venkata-subba-rao-pasupuleti",
      name: "Dr. Venkata Subba Rao Pasupuleti",
      title: "Senior Advisor - Government Partnerships & Infrastructure",
      shortRole: "Govt Partnerships Advisor",
      credentials: "Former GM (E&M) Singareni Collieries | Independent Director (Bondada Engineering)",
      experienceYears: "45+ Years Electrical Engineering & Energy Infrastructure",
      focusAreas: "Public Sector Electronics, High-Voltage Power Systems, Defense Offset Programs",
      bio: "Visionary engineering leader with 45+ years in Electrical Engineering, EHT power systems, and energy management. Former General Manager (E&M) at Singareni Collieries and Independent Director at Bondada Engineering Ltd. Assists SriLin in navigating public sector partnerships, government defense manufacturing tenders, and large industrial energy installations.",
      image: "https://res.cloudinary.com/dopds7qjr/image/upload/v1782742379/srilin/team/ltv6olfigc7d1uxczvsv.jpg"
    },
    {
      id: "anil-hongal",
      name: "Anil Hongal",
      title: "Senior Advisor - Manufacturing & Quality Standards",
      shortRole: "Quality Standards Advisor",
      credentials: "Former AVP Operations (SMILE Electronics) | Ex-Manufacturing Manager (DEC / Compaq) | M.Tech (NITK)",
      experienceYears: "40+ Years Electronics Manufacturing Services",
      focusAreas: "SMT Yield Optimization, Zero-Defect IPC Class 3 Quality, Plant Engineering",
      bio: "With over 40 years of EMS industry expertise, Anil served 14 years as AVP - Operations at SMILE Electronics and 10 years as Manufacturing Manager at Digital Equipment India / Compaq. Holds an M.Tech in Industrial Electronics from NIT Karnataka (NITK Surathkal). Guides SriLin's engineering team on advanced SMT process optimization, reflow profile accuracy, and AS9100D aerospace quality rigor.",
      image: "https://res.cloudinary.com/rhprdf7l/image/upload/v1783427934/srilin/team/mpm1yug2umkiqpgizpuq.jpg"
    }
  ],
  operationalLeadership: [
    {
      name: "Azeezuddin",
      role: "General Manager - Operations",
      department: "Plant Operations",
      responsibility: "SMT line scheduling, plant capacity balancing, equipment preventive maintenance."
    },
    {
      name: "Anil",
      role: "Materials Manager",
      department: "Supply Chain",
      responsibility: "Component procurement, franchise vendor management, ESD-safe warehouse staging."
    },
    {
      name: "Chandu",
      role: "Lead Quality & Process Engineer",
      department: "Quality Assurance",
      responsibility: "IPC-A-610 Class 3 compliance, 3D SPI/AOI thermal profiles, first-article inspection."
    },
    {
      name: "Monika",
      role: "Lead HR & Administration",
      department: "Human Resources",
      responsibility: "Cleanroom technical workforce training, talent recruitment, regulatory compliance."
    },
    {
      name: "Sathyaiah",
      role: "Production Lead",
      department: "Manufacturing",
      responsibility: "Cleanroom floor supervision, THT wave soldering operations, box-build integration."
    }
  ]
};

// ============================================================================
// 6. FACILITY & CAMPUS INFRASTRUCTURE
// ============================================================================
export const FACILITY_DATA = {
  facilityName: "SriLin Electronics Advanced ESDM Campus",
  corporateLegalName: "SRILIN ELECTRONICS PRIVATE LIMITED",
  address: {
    plotNo: "PLOT: S-1/P/D",
    industrialArea: "E-City EMC (Formerly Fabcity)",
    village: "Raviryala Village, Maheshwaram Mandal",
    district: "Ranga Reddy District",
    state: "Telangana",
    postalCode: "501359",
    country: "India"
  },
  formattedAddress: "PLOT: S-1/P/D, E-City EMC (Formerly Fabcity), Raviryala Village, Maheshwaram Mandal, Ranga Reddy District, Telangana 501359, India",
  strategicCorridor: {
    title: "Hyderabad Aerospace & Defense Manufacturing Corridor",
    airportDistanceMinutes: 15,
    airportDescription: "Exactly 15 minutes drive from Rajiv Gandhi International Airport (RGIA) and international air cargo terminal, facilitating rapid import of electronic components and same-day export dispatch of finished assemblies.",
    industrialEcosystem: "Situated within E-City EMC alongside leading aerospace, defense, and semiconductor enterprises in southern Hyderabad."
  },
  footprintMetrics: {
    activeCleanroomSqft: 25000,
    activeCleanroomFormatted: "25,000 sq.ft ESD Cleanroom Footprint",
    campusExpansionReserveSqft: 214000,
    campusExpansionReserveFormatted: "214,000 sq.ft Contiguous Expansion Reserve",
    expansionMultiplier: "8x Footprint Ready on Same Campus (Zero Greenfield Delay)",
    totalCampusFootprintSqft: 239000
  },
  environmentalCleanroomSpecs: {
    cleanroomClass: "Class 100,000 (ISO Class 8)",
    airborneParticulateLimit: "< 3,520,000 particles per cubic meter for particles >= 0.5 um",
    temperatureControl: "22 deg C +/- 2 deg C tightly monitored by multi-zone precision HVAC",
    relativeHumidityControl: "45% to 55% RH continuously maintained to prevent ESD build-up and flux moisture absorption",
    esdStandards: "ANSI/ESD S20.20-2021 & IEC 61340-5-1 compliant conductive static-dissipative epoxy flooring (< 1.0 x 10^6 ohms)",
    monitoring: "Continuous wrist strap resistance monitors, grounded workstations, ionizing blowers at sensitive nodes"
  },
  powerAndUtilities: {
    powerRedundancy: "100% dual online UPS backup + dedicated diesel generator array for uninterrupted reflow cycles",
    nitrogenSupply: "Dedicated on-site cryogenic high-purity nitrogen generation plant (>99.999% N2) directly piped to reflow ovens",
    compressedAir: "Dry, oil-free compressed air filtration system meeting ISO 8573-1 Class 1.2.1 standards",
    msdStorage: "Dr. Storage automated nitrogen-purged dry cabinets maintained below 5% RH for moisture-sensitive semiconductors"
  },
  coordinates: {
    latitude: 17.1856,
    longitude: 78.5085,
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=SRILIN+ELECTRONICS+PRIVATE+LIMITED"
  }
};

// ============================================================================
// 7. NEWS, EXPANSIONS & MILESTONES
// ============================================================================
export const NEWS_MILESTONES = [
  {
    id: "honeywell-agreement",
    date: "2026",
    title: "Tri-Party Collaboration Agreement with INP Technologies and Creative NewTech (Honeywell Partner)",
    category: "Strategic Partnership",
    badge: "Landmark Contract",
    summary: "SriLin Electronics signed a landmark tripartite electronics manufacturing agreement with INP Technologies and Creative NewTech (authorized Honeywell national distribution partner) and ACS Technologies. The contract entrusts SriLin with the complete manufacturing of Honeywell-branded communications and enterprise hardware. Alongside the manufacturing agreement, SriLin welcomed a reputed single family office as a strategic equity investor to accelerate campus expansion.",
    keyDetails: [
      "Manufacturing complete product lines for Honeywell distribution partner Creative NewTech",
      "Partnership with INP Technologies and ACS Technologies for advanced enterprise hardware",
      "Strategic equity investment from reputed family office to fund high-speed machinery additions",
      "Reinforces SriLin's standing as a premier Tier-1 EMS manufacturing partner in India"
    ]
  },
  {
    id: "campus-expansion-6x",
    date: "FY 2025-26",
    title: "Celebrating 6X Growth & Fab City Campus Expansion Inauguration",
    category: "Corporate Milestone",
    badge: "6X Growth",
    summary: "SriLin Electronics marked an extraordinary milestone of 6X capacity expansion at its E-City Fabcity campus. The inauguration was attended by Shri D. Sridhar Babu (Hon'ble Minister for IT, Electronics & Industries, Telangana) and Dr. G. Satheesh Reddy (Former Scientific Advisor to Raksha Mantri and Former Chairman of DRDO). The expansion doubled SMT capacity to 200,000 CPH, added an advanced PVA automated conformal coating line, an environmental burn-in stress screening room, and a dedicated National Instruments PXIe LabVIEW testing lab.",
    keyDetails: [
      "Doubled total assembly capacity to 200,000 Components Per Hour (CPH)",
      "Integrated automated fiber laser marking and ultrasonic plastic welding systems",
      "Commissioned walk-in 8h to 240h environmental burn-in reliability screening room",
      "Launched complete concept-to-production Electronics Design & Development services"
    ]
  },
  {
    id: "quality-recertification",
    date: "2025 - 2026",
    title: "ISO 13485:2016 Medical & AS9100D Rev D Aerospace Quality Re-certification",
    category: "Quality Standards",
    badge: "Aerospace & Medical",
    summary: "SriLin successfully completed rigorous surveillance audits for both AS9100D (Rev D) Aerospace Quality Management System and ISO 13485:2016 Medical Devices Quality Management System. The certifications validate SriLin's end-to-end traceability, zero-defect process controls, and IPC-A-610 Class 3 workmanship across flight avionics and life-critical medical instrumentation.",
    keyDetails: [
      "AS9100D Rev D aerospace certification for flight-critical sub-assemblies",
      "ISO 13485:2016 medical device manufacturing quality certification",
      "ANSI/ESD S20.20-2021 electrostatic discharge facility certification",
      "Full digital DHR (Device History Record) traceability compliance"
    ]
  },
  {
    id: "university-mous",
    date: "April 2026",
    title: "Strategic Academic Incubation MoUs with SR University & Vaagdevi College",
    category: "Workforce Development",
    badge: "Industry-Academia",
    summary: "SriLin Electronics formalized strategic MoUs with SR University (18th April 2026), Vaagdevi Engineering College, and Malla Reddy Engineering College. The initiatives provide specialized hands-on training in SMT manufacturing, IPC soldering standards, and embedded design, bridging academia and India's semiconductor/ESDM industry.",
    keyDetails: [
      "MoU signed with SR University on 18th April 2026 for joint research and cleanroom training",
      "Partnership with Vaagdevi Engineering College for student internships and IPC certifications",
      "Hosted technical factory exposure tours for engineering students from Malla Reddy College",
      "Contributing to India's national semiconductor mission workforce development"
    ]
  },
  {
    id: "esdm-inflection-whitepaper",
    date: "2025",
    title: "India's ESDM Sector at a Defining Inflection Point: Transitioning to IP-Led EMS",
    category: "Industry Leadership",
    badge: "Strategic Paper",
    summary: "Strategic whitepaper authored by SriLin's leadership analyzing the Government of India's Production Linked Incentive (PLI) scheme, SPECS framework, and the transition of Indian manufacturing from traditional contract build-to-print to high-value design-led electronics system design and manufacturing (ESDM).",
    keyDetails: [
      "In-depth analysis of India's Make in India and PLI policy impacts on electronic component ecosystems",
      "Roadmap for Indian EMS providers migrating from assembly-only to proprietary ODM intellectual property",
      "Highlights SriLin's proprietary AI ADAS edge camera platform as a blueprint for Indian design leadership"
    ]
  }
];

// ============================================================================
// 8. SOLUTIONS TIERS & SERVICE LEVELS
// ============================================================================
export const SOLUTIONS_TIERS = [
  {
    id: "tier-1-npi",
    tierNumber: 1,
    tierName: "Rapid NPI & Engineering Prototype",
    turnaround: "24-48 Hours Turnaround",
    targetVolume: "1 to 100 Units",
    idealFor: "Aerospace flight test prototypes, defense breadboards, startup MVP validation, fast engineering revisions",
    features: [
      "24-48 hour expedited manufacturing cycle for time-critical engineering iterations",
      "Real-time automated DFM & DFT confidence scoring before stencil fabrication",
      "Turnkey parts staging with active franchised inventory or consigned kit inspection",
      "Laser-cut stainless steel stencils with dedicated prototype line staging",
      "Comprehensive First Article Inspection (FAI) report with high-resolution optical inspection"
    ],
    qualityAssurance: "IPC-A-610 Class 2 / Class 3 inspection with 3D AOI & X-Ray check"
  },
  {
    id: "tier-2-aerospace-mission",
    tierNumber: 2,
    tierName: "Mission-Critical Production & Aerospace EMS",
    turnaround: "Standard Scheduled Turnaround",
    targetVolume: "100 to 10,000 Units",
    idealFor: "Satellite avionics, missile guidance seekers, military tactical radios, IVD medical diagnostic equipment",
    features: [
      "Full adherence to AS9100D Rev D aerospace and ISO 13485:2016 medical standards",
      "Class 100,000 (ISO-8) cleanroom manufacturing with continuous nitrogen reflow",
      "100% 3D SPI + 100% 3D AOI + 160kV micro-focus oblique X-ray verification",
      "100% component-to-box serialization linked to central MES Digital Device History Records (DHR)",
      "Extended burn-in room stress screening (8 to 240 hours) eliminating infant mortality"
    ],
    qualityAssurance: "IPC-A-610 Class 3 Master Workmanship, MIL-STD-810G, AS9100D Rev D"
  },
  {
    id: "tier-3-volume-commercial",
    tierNumber: 3,
    tierName: "High-Volume Commercial & Industrial Mass Production",
    turnaround: "Continuous Batch Runs / JIT Kanban",
    targetVolume: "1,000 to 500,000+ Units",
    idealFor: "Automotive ADAS cameras, smart electricity meters, enterprise telecom routers, IoT gateways, consumer audio",
    features: [
      "High-speed automated Fuji and Panasonic line deployment delivering 200,000 CPH throughput",
      "Closed-loop automated solder paste printing with real-time SPI offset correction",
      "Automated PVA robotic conformal coating and ultrasonic plastic enclosure welding",
      "Global supply chain management with bonded buffer stock agreements and franchised vendor Kanban",
      "Custom NI LabVIEW PXIe functional testing stations for zero-defect end-of-line verification"
    ],
    qualityAssurance: "IATF 16949 compliant line, 99.8% First-Pass Yield target, ISO 9001:2015"
  }
];

// ============================================================================
// 9. INDUSTRY VERTICALS & REAL-WORLD USE CASES
// ============================================================================
export const INDUSTRY_USE_CASES = [
  {
    id: "aerospace-space",
    industry: "Aerospace & Launch Vehicles",
    badge: "Space & Defense",
    clientPartners: ["ISRO", "Skyroot Aerospace", "Dhruva Space", "Ananth Technologies"],
    applications: [
      "Launch vehicle flight computers and telemetry modules",
      "Satellite power distribution units (PDU) and solar array drive electronics",
      "Avionics instrumentation, altitude sensors, and inertial navigation systems",
      "Spacecraft payload controller PCBAs with radiation-hardened components"
    ],
    standardsApplied: ["AS9100D Rev D", "IPC-A-610 Class 3", "MIL-STD-810G", "ECSS Standards"],
    technicalHighlights: "160kV micro-focus X-ray inspection for BGA voiding <15%, high-vibration potting, conformal coating.",
    image: "/assets/image/aerospace-satellite.jpg"
  },
  {
    id: "defense-telemetry",
    industry: "Defense Telemetry & Guidance Systems",
    badge: "Mission Critical",
    clientPartners: ["DRDO", "Bharat Electronics (BEL)", "Apollo Computing", "Trenton Systems"],
    applications: [
      "Precision missile guidance seekers and proximity fuse electronics",
      "Tactical secure software-defined radios (SDR) and encrypted communications",
      "Radar signal processing sub-racks and beamformer controllers",
      "Ruggedized military computing single-board computers (SBC)"
    ],
    standardsApplied: ["AS9100D Rev D", "MIL-STD-461 (EMI/EMC)", "MIL-STD-883", "ANSI/ESD S20.20"],
    technicalHighlights: "Extended 8h-240h burn-in screening, -40 deg C to +85 deg C operating qualification, conformal silicone coating.",
    image: "/assets/image/rigid-pcb.webp"
  },
  {
    id: "automotive-adas",
    industry: "Automotive ADAS & Smart Vision",
    badge: "Automotive ASIL-B",
    clientPartners: ["FICOSA", "Pixcellence Technologies"],
    applications: [
      "Edge AI Advanced Driver Assistance (ADAS) dual-camera vision systems",
      "In-cabin infrared Driver Monitoring Systems (DMS)",
      "Electric Vehicle (EV) Battery Management Systems (BMS)",
      "Digital automotive instrument clusters and body control modules"
    ],
    standardsApplied: ["IATF 16949 Line Standards", "ISO 26262 ASIL-B", "AEC-Q100 / AEC-Q200", "IPC-A-610 Class 3"],
    technicalHighlights: "FAKRA RF connectors, ISO 7637-2 pulse suppression, ultrasonic enclosure sealing, zero-defect MES traceability.",
    image: "/assets/image/adas-camera-real.jpg"
  },
  {
    id: "medical-diagnostics",
    industry: "Medical Devices & Diagnostic Instrumentation",
    badge: "Life Critical",
    clientPartners: ["Transasia Bio-Medicals"],
    applications: [
      "In-Vitro Diagnostic (IVD) automated hematology and biochemistry analyzers",
      "Portable patient vital signs monitoring instruments",
      "Ultrasonic transducer beamformer front-end boards",
      "Laboratory centrifugal controller and optical sensor interfaces"
    ],
    standardsApplied: ["ISO 13485:2016", "IEC 60601-1", "RoHS 3 Lead-Free", "IPC Class 3"],
    technicalHighlights: "Ultra-low-noise analog signal integrity layout, sub-millivolt ripple, complete DHR audit trail.",
    image: "/assets/image/chip-pmic.jpg"
  },
  {
    id: "audio-telecom-iot",
    industry: "High-Volume Audio, Telecom & Industrial IoT",
    badge: "High Volume",
    clientPartners: ["Mivi", "Quadgen Wireless", "Honeywell", "Airgap Networks", "Carrier"],
    applications: [
      "True Wireless Stereo (TWS) premium Bluetooth audio hardware",
      "Enterprise Wi-Fi 6 wireless access points and outdoor mesh routers",
      "Industrial smart energy meters and PLC communication modems",
      "Commercial HVAC electronic control units and building automation"
    ],
    standardsApplied: ["ISO 9001:2015", "FCC / CE Standards", "RoHS & REACH", "IPC-A-610 Class 2/3"],
    technicalHighlights: "High-speed 200,000 CPH placement throughput, RF spectrum validation up to 6 GHz, automated packaging.",
    image: "/assets/image/case-raspberry-pi.webp"
  }
];

// ============================================================================
// 10. CLIENT PARTNERS & TESTIMONIALS
// ============================================================================
export const CLIENT_PARTNERS = [
  { name: "Honeywell", logo: "/assets/image/brands/honeywell.svg", category: "Global Industrial" },
  { name: "FICOSA", logo: "/assets/image/brands/ficosa.png", category: "Automotive Tier-1" },
  { name: "Mivi", logo: "/assets/image/brands/mivi.png", category: "Consumer Audio" },
  { name: "Transasia Bio-Medicals", logo: "/assets/image/brands/transasia.png", category: "Medical Instrumentation" },
  { name: "Skyroot Aerospace", logo: "/assets/image/brands/skyroot.svg", category: "Aerospace & Launchers" },
  { name: "DRDO", logo: "/assets/image/brands/drdo.png", category: "Defense Research" },
  { name: "ISRO", logo: "/assets/image/brands/isro.svg", category: "Space Research" },
  { name: "Pixcellence Technologies", logo: "/assets/image/brands/pixcellence.png", category: "Vision Systems" },
  { name: "Carrier", logo: "/assets/image/brands/carrier.svg", category: "HVAC & Industrial" },
  { name: "Dhruva Space", logo: "/assets/image/brands/dhruva.svg", category: "Satellite Tech" },
  { name: "Ananth Technologies", logo: "/assets/image/brands/ananth.webp", category: "Aerospace Electronics" },
  { name: "Apollo Computing", logo: "/assets/image/brands/apollo.svg", category: "Defense Computing" },
  { name: "National Instruments", logo: "/assets/image/brands/ni.svg", category: "Test & Measurement" },
  { name: "Trenton Systems", logo: "/assets/image/brands/trenton.png", category: "Rugged Defense Computing" },
  { name: "Bondada Engineering", logo: "/assets/image/brands/bondada.png", category: "Telecom Infrastructure" },
  { name: "Accord Software", logo: "/assets/image/brands/accord.png", category: "Avionics & GNSS" }
];

export const CLIENT_TESTIMONIALS = [
  {
    id: "testimonial-ficosa",
    clientName: "Aravind",
    clientTitle: "Technical Director",
    company: "FICOSA India",
    industry: "Automotive Electronics",
    quote: "The seamless integration of SriLin team efforts with FICOSA's requirements has been instrumental in achieving high-quality outcomes. Their responsiveness, technical expertise, and proactive approach have significantly enhanced the collaboration. SriLin stands out as a model of professionalism, innovation and quality in the electronics manufacturing domain."
  },
  {
    id: "testimonial-pixcellence",
    clientName: "Huzaifa Najmi",
    clientTitle: "President & CEO",
    company: "Pixcellence Technologies",
    industry: "Embedded Vision Systems",
    quote: "Pixcellence greatly appreciates SriLin Team's unwavering commitment to delivering high-quality PCBAs, reliable on-time shipments, competitive BOM pricing and open communication. Your meticulous attention to detail and stringent quality control have significantly reduced defects and enhanced our operational efficiency."
  },
  {
    id: "testimonial-quadgen",
    clientName: "C S Rao",
    clientTitle: "Chairman",
    company: "Quadgen Wireless",
    industry: "Telecom Infrastructure",
    quote: "Working with SriLin Electronics has been a seamless experience. Their quality, reliability, and prompt support have consistently exceeded our expectations. SriLin is a trusted and talented EMS partner for anyone who chooses to engage their Electronics Manufacturing services."
  }
];

// ============================================================================
// 11. QUALITY CERTIFICATIONS & STANDARDS
// ============================================================================
export const CERTIFICATIONS_DATA = [
  {
    code: "AS9100D Rev D",
    name: "Aerospace Quality Management System",
    issuer: "Aviation, Space and Defense Organization",
    scope: "Design, development, and assembly of printed circuit boards and electro-mechanical systems for aerospace and defense."
  },
  {
    code: "ISO 9001:2015",
    name: "Quality Management System",
    issuer: "International Organization for Standardization",
    scope: "Electronics Manufacturing Services (EMS), SMT assembly, testing, and box build integration."
  },
  {
    code: "ISO 13485:2016",
    name: "Medical Devices Quality Management System",
    issuer: "International Organization for Standardization",
    scope: "Contract manufacturing of medical device printed circuit assemblies and diagnostic instrumentation."
  },
  {
    code: "ANSI/ESD S20.20-2021",
    name: "Electrostatic Discharge Control Program",
    issuer: "EOS/ESD Association",
    scope: "Protection of electrical and electronic parts, assemblies and equipment from electrostatic phenomena."
  },
  {
    code: "IEC 61340-5-1",
    name: "Protection of Electronic Devices from ESD",
    issuer: "International Electrotechnical Commission",
    scope: "General requirements for ESD-safe cleanroom flooring, apparel, ionizers, and grounding monitors."
  },
  {
    code: "IPC-A-610 Class 3",
    name: "Acceptability of Electronic Assemblies",
    issuer: "IPC (Association Connecting Electronics Industries)",
    scope: "High-performance electronic products where continued performance or performance-on-demand is critical."
  },
  {
    code: "IPC-J-STD-001",
    name: "Requirements for Soldered Electrical Assemblies",
    issuer: "IPC",
    scope: "Materials, methods and verification criteria for producing high-quality soldered lead-free and SnPb interconnections."
  },
  {
    code: "RoHS 3 / REACH",
    name: "Hazardous Substances & Chemical Restriction",
    issuer: "European Union Directives",
    scope: "Lead-free soldering processes, non-hazardous materials compliance across all manufactured products."
  }
];

// ============================================================================
// 12. CONTACT & LOCATION DETAILS
// ============================================================================
export const CONTACT_INFO = {
  companyName: "SriLin Electronics Private Limited",
  corporateAddress: "PLOT: S-1/P/D, E-City EMC (Formerly Fabcity), Raviryala Village, Maheshwaram Mandal, Ranga Reddy District, Telangana 501359, India",
  phoneNumbers: [
    { label: "Sales & Inquiries", number: "+91 73850 69999" },
    { label: "Direct Operations", number: "+91 91777 02120" },
    { label: "Landline Office", number: "+91 40 2988 2120" }
  ],
  whatsappNumber: "+91 73850 69999",
  whatsappUrl: "https://wa.me/917385069999",
  emails: [
    { label: "Sales & RFQ", email: "sales@srilinelectronics.com" },
    { label: "General Information", email: "info@srilinelectronics.com" },
    { label: "Careers & HR", email: "hr@srilinelectronics.com" }
  ],
  website: "https://www.srilinelectronics.com",
  socialLinks: {
    linkedin: "https://www.linkedin.com/company/srilin-electronics/",
    facebook: "https://www.facebook.com/share/1YZoEwWDgn/?mibextid=wwXIfr",
    instagram: "https://www.instagram.com/srilin_electronics_pvtltd?igsh=ZXI3aXZteHhyaDl4"
  },
  workingHours: "Monday to Saturday: 9:00 AM - 6:30 PM IST (24/7 Cleanroom Production Shifts)",
  coordinates: {
    latitude: 17.1856,
    longitude: 78.5085
  }
};
