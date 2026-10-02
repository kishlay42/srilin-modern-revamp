import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  Check, 
  Copy, 
  ExternalLink, 
  Cpu, 
  Layers, 
  Zap, 
  Box, 
  ShieldCheck, 
  Radio, 
  Award, 
  FileText, 
  Terminal, 
  Camera, 
  Activity, 
  Rocket, 
  Download, 
  X, 
  Menu,
  Building2,
  Users,
  Briefcase,
  MapPin,
  Flame,
  Wrench,
  Search,
  CheckCircle2
} from 'lucide-react';

export default function AntigravityNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // 'capabilities', 'industries', 'company'
  const [contextMenuVisible, setContextMenuVisible] = useState(false);
  const [copiedSuccess, setCopiedSuccess] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const lastScrollY = useRef(0);
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const contextMenuRef = useRef(null);
  const hoverTimeoutRef = useRef(null);

  // Smooth hover enter with timer cancellation
  const handleMenuEnter = (menuKey) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setActiveDropdown(menuKey);
  };

  // Graceful hover leave: 220ms buffer prevents accidental close when crossing into bottom sheet
  const handleMenuLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 220);
  };

  // Scroll Reactive Physics matching Google Antigravity Header.astro
  useEffect(() => {
    const handleScroll = () => {
      if (mobileMenuOpen) return;
      const currentY = window.scrollY;

      // When scrolled > 15px, header turns solid white with bottom elevation border
      setIsScrolled(currentY > 15);

      // Scroll delta calculation
      const delta = currentY - lastScrollY.current;
      if (delta > 5 && currentY > 70) {
        // Scrolling down -> hide header via translateY(-100%)
        setIsHidden(true);
        setActiveDropdown(null);
        setContextMenuVisible(false);
      } else if (delta < -5) {
        // Scrolling up -> slide header back in via translateY(0)
        setIsHidden(false);
      }

      if (Math.abs(delta) > 5) {
        lastScrollY.current = currentY;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  // Click outside listener for logo context menu
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        contextMenuRef.current && 
        !contextMenuRef.current.contains(e.target) && 
        logoRef.current && 
        !logoRef.current.contains(e.target)
      ) {
        setContextMenuVisible(false);
      }
    };
    window.addEventListener('pointerdown', handleClickOutside);
    return () => window.removeEventListener('pointerdown', handleClickOutside);
  }, []);

  const handleLogoContextMenu = (e) => {
    e.preventDefault();
    setContextMenuVisible(true);
  };

  const handleCopyLogoSvg = () => {
    const svgCode = `<svg viewBox="0 0 160 40" xmlns="http://www.w3.org/2000/svg"><path d="M12 8 C16 4, 24 4, 28 8 L22 14 C20 12, 18 12, 16 14 C14 16, 16 18, 20 20 L24 22 C30 25, 30 32, 24 36 C18 40, 10 39, 6 34 L12 28 C14 31, 17 32, 20 30 C22 28, 21 26, 18 24 L14 22 C8 19, 8 12, 12 8 Z" fill="#c5283d"/><text x="42" y="27" font-family="Google Sans, sans-serif" font-weight="700" font-size="20" fill="#121317">SRILIN</text></svg>`;
    navigator.clipboard.writeText(svgCode);
    setCopiedSuccess(true);
    setTimeout(() => {
      setCopiedSuccess(false);
      setContextMenuVisible(false);
    }, 1200);
  };

  const scrollTo = (id) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <header
        ref={headerRef}
        className={`header-reactive ${isHidden ? 'header-hidden' : ''} ${
          isScrolled || activeDropdown || mobileMenuOpen ? 'header-scrolled' : ''
        }`}
        onMouseLeave={handleMenuLeave}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-[52px] flex items-center justify-between">
          
          {/* 1. Left: Authentic SriLin Brand Logo & Context Menu */}
          <div className="relative flex items-center">
            <a
              ref={logoRef}
              href="#hero"
              onContextMenu={handleLogoContextMenu}
              onClick={(e) => { e.preventDefault(); scrollTo('hero'); }}
              className="flex items-center gap-2 select-none group"
              title="Right-click for SriLin brand assets menu"
            >
              <img 
                src="/assets/image/srilin-logo.png" 
                alt="SriLin Electronics" 
                className="h-[22px] w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]" 
              />
              <span className="hidden sm:inline-block text-[11px] font-medium tracking-tight text-[#45474d] ml-1 pl-2 border-l border-[rgba(33,34,38,0.12)]">
                Perfection Reinvented
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#f1f3f4] text-[#45474d] ml-0.5">
                EMS
              </span>
            </a>

            {/* Google-style Logo Popover Context Menu */}
            {contextMenuVisible && (
              <div
                ref={contextMenuRef}
                className="logo-context-menu absolute top-10 left-0 w-64 bg-white rounded-2xl shadow-2xl border border-[rgba(0,0,0,0.08)] p-2 z-50 animate-in fade-in zoom-in-95 duration-150"
              >
                <div className="text-[11px] font-semibold text-[#74777f] px-3 py-1.5 border-b border-[rgba(33,34,38,0.06)] uppercase tracking-wider">
                  SriLin Brand Assets
                </div>
                <button
                  onClick={handleCopyLogoSvg}
                  className="w-full text-left px-3 py-2 text-xs text-[#121317] hover:bg-[#eff2f7] hover:text-[#1a73e8] rounded-xl flex items-center justify-between transition-colors mt-1"
                >
                  <span className="flex items-center gap-2">
                    <Copy className="w-3.5 h-3.5 text-[#45474d]" />
                    Copy Logo as SVG
                  </span>
                  {copiedSuccess && (
                    <span className="text-[11px] text-emerald-600 font-medium flex items-center gap-1">
                      <Check className="w-3 h-3" /> Copied!
                    </span>
                  )}
                </button>
                <div className="h-[1px] bg-[rgba(33,34,38,0.06)] my-1" />
                <a
                  href="#contact"
                  onClick={() => setContextMenuVisible(false)}
                  className="w-full text-left px-3 py-2 text-xs text-[#121317] hover:bg-[#eff2f7] hover:text-[#1a73e8] rounded-xl flex items-center justify-between transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <FileText className="w-3.5 h-3.5 text-[#45474d]" />
                    AS9100D Quality Dossier
                  </span>
                </a>
              </div>
            )}
          </div>

          {/* 2. Center: Mega-Navigation Bar (Desktop) with Full SriLin Parity */}
          <nav className="hidden lg:flex items-center gap-1">
            
            {/* 1. Capabilities Dropdown Trigger */}
            <div
              className="relative"
              onMouseEnter={() => handleMenuEnter('capabilities')}
            >
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'capabilities' ? null : 'capabilities')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors flex items-center gap-1.5 ${
                  activeDropdown === 'capabilities'
                    ? 'bg-[#eff2f7] text-[#121317]'
                    : 'text-[#45474d] hover:text-[#121317] hover:bg-[#f8f9fc]'
                }`}
              >
                <span>Capabilities</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'capabilities' ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* 2. Industries Dropdown Trigger */}
            <div
              className="relative"
              onMouseEnter={() => handleMenuEnter('industries')}
            >
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'industries' ? null : 'industries')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors flex items-center gap-1.5 ${
                  activeDropdown === 'industries'
                    ? 'bg-[#eff2f7] text-[#121317]'
                    : 'text-[#45474d] hover:text-[#121317] hover:bg-[#f8f9fc]'
                }`}
              >
                <span>Industries</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'industries' ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* 3. Company Dropdown Trigger */}
            <div
              className="relative"
              onMouseEnter={() => handleMenuEnter('company')}
            >
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'company' ? null : 'company')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors flex items-center gap-1.5 ${
                  activeDropdown === 'company'
                    ? 'bg-[#eff2f7] text-[#121317]'
                    : 'text-[#45474d] hover:text-[#121317] hover:bg-[#f8f9fc]'
                }`}
              >
                <span>Company</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'company' ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* 4. Pricing / Configurator Link */}
            <button
              onClick={() => scrollTo('configurator')}
              className="px-3.5 py-1.5 rounded-full text-xs font-medium text-[#45474d] hover:text-[#121317] hover:bg-[#f8f9fc] transition-colors"
            >
              Pricing
            </button>

            {/* 5. Contact Us Link (Original Site Parity) */}
            <button
              onClick={() => scrollTo('contact')}
              className="px-3.5 py-1.5 rounded-full text-xs font-medium text-[#45474d] hover:text-[#121317] hover:bg-[#f8f9fc] transition-colors"
            >
              Contact
            </button>

          </nav>

          {/* 3. Right: Instant Quote Pill */}
          <div className="flex items-center gap-3">

            {/* Download / Instant Quote Pill (Exact Antigravity Button Style) */}
            <button
              onClick={() => scrollTo('configurator')}
              className="call-to-action--nav button button-primary button-compact download-button flex items-center gap-2 bg-[#2f3034] text-white hover:bg-[#121317] text-xs font-semibold px-4 py-2 rounded-full shadow-sm transition-all duration-200 active:scale-95"
            >
              <span>Instant Quote</span>
              <Download className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full hover:bg-[#f8f9fc] transition-colors text-[#121317]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* ============================================================ */}
        {/* EXACT GOOGLE ANTIGRAVITY SLEEK BOTTOM SHEET MEGA DROPDOWNS */}
        {/* WITH AUTHENTIC HOVER EFFECT (rgb(239, 242, 247) + Google Blue) */}
        {/* ============================================================ */}
        {activeDropdown && (
          <div
            className="w-full bg-white border-b border-[rgba(33,34,38,0.08)] shadow-[0_24px_48px_-12px_rgba(0,0,0,0.08)] rounded-b-[32px] overflow-hidden transition-all duration-200 animate-in fade-in slide-in-from-top-1"
            onMouseEnter={() => handleMenuEnter(activeDropdown)}
            onMouseLeave={handleMenuLeave}
          >
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-7">
              
              {/* 1. Capabilities Panel: All 14 Core SriLin Services Cleanly Grouped */}
              {activeDropdown === 'capabilities' && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  
                  {/* Col 1 (3.2 cols): Headline & Pill CTA */}
                  <div className="md:col-span-3 pr-2">
                    <h3 className="text-2xl font-bold tracking-tight text-[#121317] leading-tight">
                      Explore our next generation EMS platforms
                    </h3>
                    <div className="mt-6">
                      <button
                        onClick={() => scrollTo('configurator')}
                        className="px-4 py-2 rounded-full bg-[#f1f3f4] hover:bg-[#e2e7f0] text-[13px] font-medium text-[#1f1f1f] transition-all inline-flex items-center gap-1.5"
                      >
                        See overview
                      </button>
                    </div>
                  </div>

                  {/* Col 2 (4.4 cols): Assembly & Hardware (Single-line items with Google hover effect) */}
                  <div className="md:col-span-4 border-r border-[rgba(0,0,0,0.08)] pr-6">
                    <p className="text-xs font-medium text-[#74777f] mb-3">
                      Assembly & Hardware
                    </p>
                    <nav className="space-y-1.5" role="menu">
                      <button
                        onClick={() => scrollTo('cleanroom-tour')}
                        className="group flex items-center justify-between w-full text-left px-3 py-1.5 rounded-lg text-sm text-[#121317] hover:text-[#1a73e8] hover:bg-[#eff2f7] transition-all duration-200"
                      >
                        <div className="flex items-center gap-2.5">
                          <Cpu className="w-[18px] h-[18px] text-[#45474d] group-hover:text-[#1a73e8] transition-colors" />
                          <span>Fuji NXT III SMT Assembly</span>
                        </div>
                      </button>

                      <button
                        onClick={() => scrollTo('configurator')}
                        className="group flex items-center justify-between w-full text-left px-3 py-1.5 rounded-lg text-sm text-[#121317] hover:text-[#1a73e8] hover:bg-[#eff2f7] transition-all duration-200"
                      >
                        <div className="flex items-center gap-2.5">
                          <Layers className="w-[18px] h-[18px] text-[#45474d] group-hover:text-[#1a73e8] transition-colors" />
                          <span>Multi-Layer PCBA (2L–16L)</span>
                        </div>
                      </button>

                      <button
                        onClick={() => scrollTo('configurator')}
                        className="group flex items-center justify-between w-full text-left px-3 py-1.5 rounded-lg text-sm text-[#121317] hover:text-[#1a73e8] hover:bg-[#eff2f7] transition-all duration-200"
                      >
                        <div className="flex items-center gap-2.5">
                          <Box className="w-[18px] h-[18px] text-[#45474d] group-hover:text-[#1a73e8] transition-colors" />
                          <span>Turnkey Box Build Systems</span>
                        </div>
                        <ExternalLink className="w-3.5 h-3.5 text-[#74777f] group-hover:text-[#1a73e8]" />
                      </button>

                      <button
                        onClick={() => scrollTo('configurator')}
                        className="group flex items-center justify-between w-full text-left px-3 py-1.5 rounded-lg text-sm text-[#121317] hover:text-[#1a73e8] hover:bg-[#eff2f7] transition-all duration-200"
                      >
                        <div className="flex items-center gap-2.5">
                          <Terminal className="w-[18px] h-[18px] text-[#45474d] group-hover:text-[#1a73e8] transition-colors" />
                          <span>Embedded ECAD & Design</span>
                        </div>
                      </button>

                      <button
                        onClick={() => scrollTo('oem-product')}
                        className="group flex items-center justify-between w-full text-left px-3 py-1.5 rounded-lg text-sm text-[#121317] hover:text-[#1a73e8] hover:bg-[#eff2f7] transition-all duration-200"
                      >
                        <div className="flex items-center gap-2.5">
                          <Camera className="w-[18px] h-[18px] text-[#45474d] group-hover:text-[#1a73e8] transition-colors" />
                          <span>OEM AI ADAS + DMS Camera</span>
                        </div>
                        <ExternalLink className="w-3.5 h-3.5 text-[#74777f] group-hover:text-[#1a73e8]" />
                      </button>

                      <button
                        onClick={() => scrollTo('configurator')}
                        className="group flex items-center justify-between w-full text-left px-3 py-1.5 rounded-lg text-sm text-[#121317] hover:text-[#1a73e8] hover:bg-[#eff2f7] transition-all duration-200"
                      >
                        <div className="flex items-center gap-2.5">
                          <Search className="w-[18px] h-[18px] text-[#45474d] group-hover:text-[#1a73e8] transition-colors" />
                          <span>Component Sourcing Vault</span>
                        </div>
                      </button>
                    </nav>
                  </div>

                  {/* Col 3 (4.4 cols): Testing & Cleanroom Operations */}
                  <div className="md:col-span-4 pl-2">
                    <p className="text-xs font-medium text-[#74777f] mb-3">
                      Testing & Cleanroom Services
                    </p>
                    <nav className="space-y-1.5" role="menu">
                      <button
                        onClick={() => scrollTo('labview')}
                        className="group flex items-center justify-between w-full text-left px-3 py-1.5 rounded-lg text-sm text-[#121317] hover:text-[#1a73e8] hover:bg-[#eff2f7] transition-all duration-200"
                      >
                        <div className="flex items-center gap-2.5">
                          <Zap className="w-[18px] h-[18px] text-[#45474d] group-hover:text-[#1a73e8] transition-colors" />
                          <span>NI LabVIEW Automated ATE</span>
                        </div>
                      </button>

                      <button
                        onClick={() => scrollTo('cleanroom-tour')}
                        className="group flex items-center justify-between w-full text-left px-3 py-1.5 rounded-lg text-sm text-[#121317] hover:text-[#1a73e8] hover:bg-[#eff2f7] transition-all duration-200"
                      >
                        <div className="flex items-center gap-2.5">
                          <ShieldCheck className="w-[18px] h-[18px] text-[#45474d] group-hover:text-[#1a73e8] transition-colors" />
                          <span>160kV Real-Time X-Ray CT</span>
                        </div>
                      </button>

                      <button
                        onClick={() => scrollTo('cleanroom-tour')}
                        className="group flex items-center justify-between w-full text-left px-3 py-1.5 rounded-lg text-sm text-[#121317] hover:text-[#1a73e8] hover:bg-[#eff2f7] transition-all duration-200"
                      >
                        <div className="flex items-center gap-2.5">
                          <Activity className="w-[18px] h-[18px] text-[#45474d] group-hover:text-[#1a73e8] transition-colors" />
                          <span>Class 100,000 Cleanroom</span>
                        </div>
                        <ExternalLink className="w-3.5 h-3.5 text-[#74777f] group-hover:text-[#1a73e8]" />
                      </button>

                      <button
                        onClick={() => scrollTo('cleanroom-tour')}
                        className="group flex items-center justify-between w-full text-left px-3 py-1.5 rounded-lg text-sm text-[#121317] hover:text-[#1a73e8] hover:bg-[#eff2f7] transition-all duration-200"
                      >
                        <div className="flex items-center gap-2.5">
                          <Flame className="w-[18px] h-[18px] text-[#45474d] group-hover:text-[#1a73e8] transition-colors" />
                          <span>Conformal Coating & Potting</span>
                        </div>
                      </button>

                      <button
                        onClick={() => scrollTo('cleanroom-tour')}
                        className="group flex items-center justify-between w-full text-left px-3 py-1.5 rounded-lg text-sm text-[#121317] hover:text-[#1a73e8] hover:bg-[#eff2f7] transition-all duration-200"
                      >
                        <div className="flex items-center gap-2.5">
                          <Wrench className="w-[18px] h-[18px] text-[#45474d] group-hover:text-[#1a73e8] transition-colors" />
                          <span>Ultrasonic Welding & Harness</span>
                        </div>
                      </button>

                      <button
                        onClick={() => scrollTo('cleanroom-tour')}
                        className="group flex items-center justify-between w-full text-left px-3 py-1.5 rounded-lg text-sm text-[#121317] hover:text-[#1a73e8] hover:bg-[#eff2f7] transition-all duration-200"
                      >
                        <div className="flex items-center gap-2.5">
                          <CheckCircle2 className="w-[18px] h-[18px] text-[#45474d] group-hover:text-[#1a73e8] transition-colors" />
                          <span>BGA Rework & MES Traceability</span>
                        </div>
                      </button>
                    </nav>
                  </div>

                </div>
              )}

              {/* 2. Industries Panel: All Key Verticals */}
              {activeDropdown === 'industries' && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  
                  {/* Col 1: Headline & Pill CTA */}
                  <div className="md:col-span-3 pr-2">
                    <h3 className="text-2xl font-bold tracking-tight text-[#121317] leading-tight">
                      Built for mission-critical flight hardware
                    </h3>
                    <div className="mt-6">
                      <button
                        onClick={() => scrollTo('verticals')}
                        className="px-4 py-2 rounded-full bg-[#f1f3f4] hover:bg-[#e2e7f0] text-[13px] font-medium text-[#1f1f1f] transition-all inline-flex items-center gap-1.5"
                      >
                        See overview
                      </button>
                    </div>
                  </div>

                  {/* Col 2: Mission Critical Sectors */}
                  <div className="md:col-span-4 border-r border-[rgba(0,0,0,0.08)] pr-6">
                    <p className="text-xs font-medium text-[#74777f] mb-3">
                      Aerospace & Defense
                    </p>
                    <nav className="space-y-1.5" role="menu">
                      <button
                        onClick={() => scrollTo('verticals')}
                        className="group flex items-center justify-between w-full text-left px-3 py-1.5 rounded-lg text-sm text-[#121317] hover:text-[#1a73e8] hover:bg-[#eff2f7] transition-all duration-200"
                      >
                        <span>Space & Satellite Launch Vehicles</span>
                      </button>

                      <button
                        onClick={() => scrollTo('verticals')}
                        className="group flex items-center justify-between w-full text-left px-3 py-1.5 rounded-lg text-sm text-[#121317] hover:text-[#1a73e8] hover:bg-[#eff2f7] transition-all duration-200"
                      >
                        <span>Defense Avionics & Tactical Radar</span>
                      </button>

                      <button
                        onClick={() => scrollTo('verticals')}
                        className="group flex items-center justify-between w-full text-left px-3 py-1.5 rounded-lg text-sm text-[#121317] hover:text-[#1a73e8] hover:bg-[#eff2f7] transition-all duration-200"
                      >
                        <span>Tactical Drones & UAV Telemetry</span>
                      </button>
                    </nav>
                  </div>

                  {/* Col 3: Industrial, Automotive & Healthcare */}
                  <div className="md:col-span-4 pl-2">
                    <p className="text-xs font-medium text-[#74777f] mb-3">
                      Commercial & Industrial
                    </p>
                    <nav className="space-y-1.5" role="menu">
                      <button
                        onClick={() => scrollTo('verticals')}
                        className="group flex items-center justify-between w-full text-left px-3 py-1.5 rounded-lg text-sm text-[#121317] hover:text-[#1a73e8] hover:bg-[#eff2f7] transition-all duration-200"
                      >
                        <span>Automotive Tier-1 & ADAS (FICOSA)</span>
                      </button>

                      <button
                        onClick={() => scrollTo('verticals')}
                        className="group flex items-center justify-between w-full text-left px-3 py-1.5 rounded-lg text-sm text-[#121317] hover:text-[#1a73e8] hover:bg-[#eff2f7] transition-all duration-200"
                      >
                        <span>Industrial IoT & Smart Energy (Honeywell)</span>
                      </button>

                      <button
                        onClick={() => scrollTo('verticals')}
                        className="group flex items-center justify-between w-full text-left px-3 py-1.5 rounded-lg text-sm text-[#121317] hover:text-[#1a73e8] hover:bg-[#eff2f7] transition-all duration-200"
                      >
                        <span>Medical Class II & III Diagnostic</span>
                      </button>
                    </nav>
                  </div>

                </div>
              )}

              {/* 3. Company Panel: Leadership, Alliance & Infrastructure */}
              {activeDropdown === 'company' && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  
                  {/* Col 1: Headline & Pill CTA */}
                  <div className="md:col-span-3 pr-2">
                    <h3 className="text-2xl font-bold tracking-tight text-[#121317] leading-tight">
                      Engineering leadership and global trust
                    </h3>
                    <div className="mt-6">
                      <button
                        onClick={() => scrollTo('leadership')}
                        className="px-4 py-2 rounded-full bg-[#f1f3f4] hover:bg-[#e2e7f0] text-[13px] font-medium text-[#1f1f1f] transition-all inline-flex items-center gap-1.5"
                      >
                        Meet leadership
                      </button>
                    </div>
                  </div>

                  {/* Col 2: Governance & Partnerships */}
                  <div className="md:col-span-4 border-r border-[rgba(0,0,0,0.08)] pr-6">
                    <p className="text-xs font-medium text-[#74777f] mb-3">
                      Executive Governance
                    </p>
                    <nav className="space-y-1.5" role="menu">
                      <button
                        onClick={() => scrollTo('leadership')}
                        className="group flex items-center justify-between w-full text-left px-3 py-1.5 rounded-lg text-sm text-[#121317] hover:text-[#1a73e8] hover:bg-[#eff2f7] transition-all duration-200"
                      >
                        <div className="flex items-center gap-2.5">
                          <Users className="w-[18px] h-[18px] text-[#45474d] group-hover:text-[#1a73e8] transition-colors" />
                          <span>Akhil Nandepu (MD & CEO)</span>
                        </div>
                      </button>

                      <button
                        onClick={() => scrollTo('leadership')}
                        className="group flex items-center justify-between w-full text-left px-3 py-1.5 rounded-lg text-sm text-[#121317] hover:text-[#1a73e8] hover:bg-[#eff2f7] transition-all duration-200"
                      >
                        <div className="flex items-center gap-2.5">
                          <Award className="w-[18px] h-[18px] text-[#45474d] group-hover:text-[#1a73e8] transition-colors" />
                          <span>Dr. Satyanarayana Vaddi (Advisor)</span>
                        </div>
                      </button>

                      <button
                        onClick={() => scrollTo('client-arc')}
                        className="group flex items-center justify-between w-full text-left px-3 py-1.5 rounded-lg text-sm text-[#121317] hover:text-[#1a73e8] hover:bg-[#eff2f7] transition-all duration-200"
                      >
                        <div className="flex items-center gap-2.5">
                          <Building2 className="w-[18px] h-[18px] text-[#45474d] group-hover:text-[#1a73e8] transition-colors" />
                          <span>Honeywell Tri-Party Agreement</span>
                        </div>
                      </button>
                    </nav>
                  </div>

                  {/* Col 3: Campus & Resources */}
                  <div className="md:col-span-4 pl-2">
                    <p className="text-xs font-medium text-[#74777f] mb-3">
                      Infrastructure & Careers
                    </p>
                    <nav className="space-y-1.5" role="menu">
                      <button
                        onClick={() => scrollTo('contact')}
                        className="group flex items-center justify-between w-full text-left px-3 py-1.5 rounded-lg text-sm text-[#121317] hover:text-[#1a73e8] hover:bg-[#eff2f7] transition-all duration-200"
                      >
                        <div className="flex items-center gap-2.5">
                          <MapPin className="w-[18px] h-[18px] text-[#45474d] group-hover:text-[#1a73e8] transition-colors" />
                          <span>Hyderabad Fabcity (214k sq ft)</span>
                        </div>
                      </button>

                      <button
                        onClick={() => scrollTo('contact')}
                        className="group flex items-center justify-between w-full text-left px-3 py-1.5 rounded-lg text-sm text-[#121317] hover:text-[#1a73e8] hover:bg-[#eff2f7] transition-all duration-200"
                      >
                        <div className="flex items-center gap-2.5">
                          <FileText className="w-[18px] h-[18px] text-[#45474d] group-hover:text-[#1a73e8] transition-colors" />
                          <span>AS9100D & ISO Certifications</span>
                        </div>
                        <ExternalLink className="w-3.5 h-3.5 text-[#74777f] group-hover:text-[#1a73e8]" />
                      </button>

                      <button
                        onClick={() => scrollTo('contact')}
                        className="group flex items-center justify-between w-full text-left px-3 py-1.5 rounded-lg text-sm text-[#121317] hover:text-[#1a73e8] hover:bg-[#eff2f7] transition-all duration-200"
                      >
                        <div className="flex items-center gap-2.5">
                          <Briefcase className="w-[18px] h-[18px] text-[#45474d] group-hover:text-[#1a73e8] transition-colors" />
                          <span>Engineering Careers</span>
                        </div>
                        <ExternalLink className="w-3.5 h-3.5 text-[#74777f] group-hover:text-[#1a73e8]" />
                      </button>
                    </nav>
                  </div>

                </div>
              )}

            </div>
          </div>
        )}
      </header>

      {/* ============================================================ */}
      {/* MOBILE FULL-SCREEN ACCORDION MENU */}
      {/* ============================================================ */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[52px] bg-white z-40 overflow-y-auto px-6 py-6 border-t border-[rgba(33,34,38,0.06)] animate-in fade-in duration-200">
          <div className="space-y-4">
            
            {/* Mobile Item: Capabilities */}
            <div className="border-b border-[rgba(33,34,38,0.06)] pb-4">
              <button
                onClick={() => setMobileDropdown(mobileDropdown === 'capabilities' ? null : 'capabilities')}
                className="w-full flex items-center justify-between text-lg font-semibold text-[#121317]"
              >
                <span>Capabilities</span>
                <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${mobileDropdown === 'capabilities' ? 'rotate-180' : ''}`} />
              </button>
              {mobileDropdown === 'capabilities' && (
                <div className="mt-3 space-y-2 pl-2">
                  <button onClick={() => scrollTo('cleanroom-tour')} className="block text-sm text-[#45474d] hover:text-[#1a73e8] py-1">
                    Fuji NXT III SMT Assembly
                  </button>
                  <button onClick={() => scrollTo('configurator')} className="block text-sm text-[#45474d] hover:text-[#1a73e8] py-1">
                    Multi-Layer PCBA (2L–16L)
                  </button>
                  <button onClick={() => scrollTo('configurator')} className="block text-sm text-[#45474d] hover:text-[#1a73e8] py-1">
                    Turnkey Box Build Systems
                  </button>
                  <button onClick={() => scrollTo('labview')} className="block text-sm text-[#45474d] hover:text-[#1a73e8] py-1">
                    NI LabVIEW Automated ATE
                  </button>
                  <button onClick={() => scrollTo('cleanroom-tour')} className="block text-sm text-[#45474d] hover:text-[#1a73e8] py-1">
                    160kV Real-Time X-Ray CT
                  </button>
                  <button onClick={() => scrollTo('cleanroom-tour')} className="block text-sm text-[#45474d] hover:text-[#1a73e8] py-1">
                    Class 100,000 Cleanroom
                  </button>
                  <button onClick={() => scrollTo('oem-product')} className="block text-sm text-[#45474d] hover:text-[#1a73e8] py-1">
                    OEM AI ADAS + DMS Camera
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Item: Industries */}
            <div className="border-b border-[rgba(33,34,38,0.06)] pb-4">
              <button
                onClick={() => setMobileDropdown(mobileDropdown === 'industries' ? null : 'industries')}
                className="w-full flex items-center justify-between text-lg font-semibold text-[#121317]"
              >
                <span>Industries</span>
                <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${mobileDropdown === 'industries' ? 'rotate-180' : ''}`} />
              </button>
              {mobileDropdown === 'industries' && (
                <div className="mt-3 space-y-2 pl-2">
                  <button onClick={() => scrollTo('verticals')} className="block text-sm text-[#45474d] hover:text-[#1a73e8] py-1">
                    Space & Satellite Launch Vehicles
                  </button>
                  <button onClick={() => scrollTo('verticals')} className="block text-sm text-[#45474d] hover:text-[#1a73e8] py-1">
                    Defense Avionics & Tactical Radar
                  </button>
                  <button onClick={() => scrollTo('verticals')} className="block text-sm text-[#45474d] hover:text-[#1a73e8] py-1">
                    Automotive Tier-1 & ADAS (FICOSA)
                  </button>
                  <button onClick={() => scrollTo('verticals')} className="block text-sm text-[#45474d] hover:text-[#1a73e8] py-1">
                    Industrial IoT & Smart Energy (Honeywell)
                  </button>
                  <button onClick={() => scrollTo('verticals')} className="block text-sm text-[#45474d] hover:text-[#1a73e8] py-1">
                    Medical Class II & III Diagnostic
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Item: Company */}
            <div className="border-b border-[rgba(33,34,38,0.06)] pb-4">
              <button
                onClick={() => setMobileDropdown(mobileDropdown === 'company' ? null : 'company')}
                className="w-full flex items-center justify-between text-lg font-semibold text-[#121317]"
              >
                <span>Company</span>
                <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${mobileDropdown === 'company' ? 'rotate-180' : ''}`} />
              </button>
              {mobileDropdown === 'company' && (
                <div className="mt-3 space-y-2 pl-2">
                  <button onClick={() => scrollTo('leadership')} className="block text-sm text-[#45474d] hover:text-[#1a73e8] py-1">
                    Akhil Nandepu (MD & CEO)
                  </button>
                  <button onClick={() => scrollTo('leadership')} className="block text-sm text-[#45474d] hover:text-[#1a73e8] py-1">
                    Dr. Satyanarayana Vaddi (Advisor)
                  </button>
                  <button onClick={() => scrollTo('client-arc')} className="block text-sm text-[#45474d] hover:text-[#1a73e8] py-1">
                    Honeywell Tri-Party Agreement
                  </button>
                  <button onClick={() => scrollTo('contact')} className="block text-sm text-[#45474d] hover:text-[#1a73e8] py-1">
                    Hyderabad Fabcity Aerospace Campus
                  </button>
                </div>
              )}
            </div>

            {/* Direct Links */}
            <div className="border-b border-[rgba(33,34,38,0.06)] pb-4">
              <button onClick={() => scrollTo('configurator')} className="text-lg font-semibold text-[#121317]">
                Pricing
              </button>
            </div>

            <div className="border-b border-[rgba(33,34,38,0.06)] pb-4">
              <button onClick={() => scrollTo('contact')} className="text-lg font-semibold text-[#121317]">
                Contact Us
              </button>
            </div>

            <div className="pt-4">
              <button
                onClick={() => scrollTo('configurator')}
                className="w-full py-3 rounded-full bg-[#121317] text-white font-semibold text-sm shadow-md"
              >
                Configure & Quote Turnkey PCBA
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
