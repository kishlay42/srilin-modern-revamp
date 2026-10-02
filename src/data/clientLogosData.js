/**
 * 16 Collaborating Brands, Aerospace Primes & Enterprise Partners
 * Popular Tier-1 Defense & Aerospace Primes placed at the CENTER for maximum user attraction.
 * High-quality official vector SVGs and crisp transparent PNG assets.
 */
export const ARC_PARTNERS = [
  // Left Wing: High-Tech Engineering & Infrastructure
  {
    id: "pixcellence",
    name: "Pixcellence",
    shortName: "PIXCELLENCE",
    logo: "/assets/image/brands/pixcellence.png",
    category: "Optoelectronics & AI Vision",
    highlight: "Edge AI cameras, surveillance imaging modules, and smart sensor PCBAs.",
    standard: "ISO 9001:2015 Verified",
    tag: "Edge Vision",
    color: "#00b95c"
  },
  {
    id: "bondada",
    name: "Bondada Eng",
    shortName: "BONDADA",
    logo: "/assets/image/brands/bondada.png",
    category: "Telecom & Power Infra",
    highlight: "High-power renewable energy controllers and industrial telecom infrastructure.",
    standard: "Heavy Copper / Rugged SMT",
    tag: "Telecom Infra",
    color: "#1565c0"
  },
  {
    id: "accord",
    name: "Accord Soft",
    shortName: "ACCORD",
    logo: "/assets/image/brands/accord.png",
    category: "Avionics & GNSS Navigation",
    highlight: "Multi-layer flight navigation units, GPS/NavIC receivers, and avionics flight boards.",
    standard: "IPC-A-610 Class 3",
    tag: "Flight Avionics",
    color: "#2e7d32"
  },
  {
    id: "transasia",
    name: "Transasia",
    shortName: "TRANSASIA",
    logo: "/assets/image/brands/transasia.png",
    category: "Clinical IVD Instrumentation",
    highlight: "In-vitro diagnostic medical analyzers manufactured in ISO 13485 cleanroom bays.",
    standard: "ISO 13485 Certified",
    tag: "Medical IVD",
    color: "#0288d1"
  },
  {
    id: "ananth",
    name: "Ananth Tech",
    shortName: "ANANTH",
    logo: "/assets/image/brands/ananth.webp",
    category: "Aerospace Defense Electronics",
    highlight: "Satellite telemetry systems, radar signal processors, and defense computers.",
    standard: "AS9100D Rev D",
    tag: "Space Avionics",
    color: "#673ab7"
  },
  {
    id: "mivi",
    name: "Mivi Audio",
    shortName: "MIVI",
    logo: "/assets/image/brands/mivi.png",
    category: "High-Volume Consumer Tech",
    highlight: "Automated high-velocity SMT surface mount assembly at 200,000 CPH.",
    standard: "High-Velocity SMT",
    tag: "Consumer Tech",
    color: "#e91e63"
  },

  // ==========================================
  // CENTER ZONE: POPULAR TIER-1 PRIMES (HERO FOCUS)
  // ==========================================
  {
    id: "ficosa",
    name: "FICOSA",
    shortName: "FICOSA",
    logo: "/assets/image/brands/ficosa.png",
    category: "Automotive ADAS & Smart Vision",
    highlight: "Global Tier-1 automotive camera modules, blind-spot radar, and ADAS hardware.",
    standard: "IATF 16949 / AEC-Q100",
    tag: "Tier-1 Auto",
    color: "#c5283d"
  },
  {
    id: "skyroot",
    name: "Skyroot Aerospace",
    shortName: "SKYROOT",
    logo: "/assets/image/brands/skyroot.svg",
    category: "Orbital Launch Vehicles",
    highlight: "Vikram rocket stage avionics, payload telemetry, and launch vehicle control computers.",
    standard: "AS9100D Aerospace Certified",
    tag: "Orbital Rockets",
    color: "#1a73e8"
  },
  {
    id: "isro",
    name: "ISRO Ecosystem",
    shortName: "ISRO",
    logo: "/assets/image/brands/isro.svg",
    category: "Space Research Subsystems",
    highlight: "Space-grade electronic packages, radiation-hardened circuitry, and satellite subsystems.",
    standard: "National Space Standard",
    tag: "National Space Prime",
    color: "#ff6f00"
  },
  {
    id: "drdo",
    name: "DRDO Suppliers",
    shortName: "DRDO",
    logo: "/assets/image/brands/drdo.png",
    category: "Defence Research & Development",
    highlight: "Missile guidance telemetry, naval radar packages, and vibration-hardened defense electronics.",
    standard: "MIL-STD-810H Hardened",
    tag: "National Defense",
    color: "#00796b"
  },
  {
    id: "honeywell",
    name: "Honeywell Partner",
    shortName: "HONEYWELL",
    logo: "/assets/image/brands/honeywell.svg",
    category: "Enterprise Avionics & Industrial",
    highlight: "Tri-party manufacturing agreement with Creative NewTech & INP Technologies for Honeywell products.",
    standard: "Global Enterprise Standard",
    tag: "Global Prime",
    color: "#ea4335"
  },
  {
    id: "dhruva",
    name: "Dhruva Space",
    shortName: "DHRUVA",
    logo: "/assets/image/brands/dhruva.svg",
    category: "Satellite Platforms & Payloads",
    highlight: "Space-bound CubeSat motherboards, EPS power management, and optical payload packages.",
    standard: "AS9100D Cleanroom",
    tag: "Space Systems",
    color: "#fbbc04"
  },
  {
    id: "carrier",
    name: "Carrier",
    shortName: "CARRIER",
    logo: "/assets/image/brands/carrier.svg",
    category: "Building Automation & IoT",
    highlight: "Commercial building HVAC automation controllers and IoT connectivity modules.",
    standard: "Enterprise EMS",
    tag: "Industrial IoT",
    color: "#003882"
  },
  {
    id: "apollo",
    name: "Apollo Hospitals",
    shortName: "APOLLO",
    logo: "/assets/image/brands/apollo.svg",
    category: "Medical Diagnostics Instrumentation",
    highlight: "Life-critical ICU telemetry equipment and clinical diagnostic instrumentation.",
    standard: "ISO 13485 Medical",
    tag: "Healthcare Prime",
    color: "#d32f2f"
  },
  {
    id: "ni",
    name: "National Instruments",
    shortName: "NI",
    logo: "/assets/image/brands/ni.svg",
    category: "Automated Test Systems",
    highlight: "LabVIEW automated test engineering fixtures and automated boundary-scan validation.",
    standard: "NI LabVIEW Platform",
    tag: "Test Systems",
    color: "#03b584"
  }
];

export const CLIENT_LOGOS = ARC_PARTNERS.map((partner) => ({
  ...partner,
  sector: partner.category,
  status: 'Active AS9100D Verified',
}));
