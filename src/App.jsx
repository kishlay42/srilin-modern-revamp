import React, { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import AntigravityNavbar from './components/AntigravityNavbar';
import AntigravityHero from './components/AntigravityHero';
import CleanroomVideoShowcase from './components/CleanroomVideoShowcase';
import ClientLogoArc from './components/ClientLogoArc';
import FeatureExplorer from './components/FeatureExplorer';
import UseCasesSection from './components/UseCasesSection';
import SolutionsTiersSection from './components/SolutionsTiersSection';
import LatestNewsSection from './components/LatestNewsSection';
import DownloadIntakeSection from './components/DownloadIntakeSection';
import AntigravityFooter from './components/AntigravityFooter';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  // Initialize Lenis Smooth Inertial Scrolling matching Google Antigravity
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const rafCallback = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(rafCallback);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(rafCallback);
      lenis.destroy();
    };
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-white text-[#121317] flex flex-col font-sans selection:bg-[#c5283d] selection:text-white relative">
      
      {/* 1. Google Antigravity Scroll-Reactive Header with Context Menu */}
      <AntigravityNavbar onOpenQuote={() => scrollToSection('intake-section')} />

      {/* 2. Monumental Dual-Tone Hero with Particle Canvas */}
      <AntigravityHero 
        onOpenQuote={() => scrollToSection('intake-section')}
        onExploreTour={() => scrollToSection('capabilities')}
      />

      {/* 3. Rounded 16:9 Cleanroom Showcase with Scroll Expansion & Custom Cursor Pill */}
      <CleanroomVideoShowcase />

      {/* 4. Signature Undulating Bouncer Arc with Authentic 35px Wavelength & Horizontal Scrub */}
      <ClientLogoArc />

      {/* 5. Google Antigravity Unified Interactive Feature Explorer */}
      <FeatureExplorer />

      {/* 6. Industry Use Cases Horizontal Slider with Mission Profiles */}
      <UseCasesSection />

      {/* 7. Dual Elevated Solution Tiers: Rapid NPI vs Mission-Critical Aerospace */}
      <SolutionsTiersSection />

      {/* 8. Corporate & Technical News Milestones with Interactive Modal */}
      <LatestNewsSection />

      {/* 9. Monumental Dark Intake & Gerber DFM Dropzone Container */}
      <DownloadIntakeSection />

      {/* 10. Minimalist Google Footer with Monumental Typography Watermark Banner */}
      <AntigravityFooter />

    </div>
  );
}
