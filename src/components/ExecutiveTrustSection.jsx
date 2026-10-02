import React, { useState } from 'react';
import { LEADERSHIP_TEAM, CORPORATE_MILESTONES } from '../data/antigravitySrilinData';
import { Award, Briefcase, GraduationCap, Building2, CheckCircle, ArrowRight } from 'lucide-react';

export default function ExecutiveTrustSection() {
  const [activeTab, setActiveTab] = useState('leadership'); // 'leadership', 'milestones'

  return (
    <section id="milestones" className="relative py-20 max-w-6xl mx-auto px-4 sm:px-6">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-[11px] font-mono font-bold text-[#c5283d] uppercase tracking-wider bg-red-50 px-3.5 py-1 rounded-full">
          CORPORATE GOVERNANCE & PROVEN TRACK RECORD
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1f1f1f] mt-3 font-sans">
          Guided by industry veterans.
        </h2>
        <p className="text-sm sm:text-base text-slate-600 mt-2">
          From scaling high-density mobile SMT lines to mission-critical aerospace defense programs, 
          our board and executive team ensure zero-compromise execution.
        </p>

        {/* Tab Switcher */}
        <div className="inline-flex p-1 bg-slate-100 rounded-full mt-6 text-xs font-bold shadow-inner">
          <button
            onClick={() => setActiveTab('leadership')}
            className={`px-5 py-2 rounded-full transition-all cursor-pointer ${
              activeTab === 'leadership' ? 'bg-white shadow text-[#c5283d]' : 'text-slate-600 hover:text-black'
            }`}
          >
            Executive Leadership & Advisors
          </button>
          <button
            onClick={() => setActiveTab('milestones')}
            className={`px-5 py-2 rounded-full transition-all cursor-pointer ${
              activeTab === 'milestones' ? 'bg-white shadow text-[#c5283d]' : 'text-slate-600 hover:text-black'
            }`}
          >
            Milestones & Strategic Alliances
          </button>
        </div>
      </div>

      {/* 1. Leadership Team View */}
      {activeTab === 'leadership' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-200">
          {LEADERSHIP_TEAM.map((exec, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl p-6 border border-black/[0.08] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden border border-slate-200 shadow-sm shrink-0 bg-slate-100">
                    <img 
                      src={exec.image} 
                      alt={exec.name} 
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform"
                      onError={(e) => {
                        e.target.src = '/assets/image/srilin-logo.png';
                        e.target.className = "w-full h-full object-contain p-2";
                      }}
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-[#c5283d] transition-colors leading-snug">
                      {exec.name}
                    </h3>
                    <div className="text-[11px] font-mono font-bold text-[#c5283d] mt-0.5">
                      {exec.role}
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5 text-xs text-slate-600 mb-4 pt-3 border-t border-slate-100">
                  <div className="flex items-center space-x-1.5 text-slate-800 font-medium">
                    <GraduationCap className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{exec.credentials}</span>
                  </div>
                  <div className="flex items-center space-x-1.5 text-slate-500 text-[11px]">
                    <Briefcase className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{exec.experience}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {exec.bio}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 text-[11px] font-mono text-slate-400">
                Focus: <strong className="text-slate-700">{exec.focus}</strong>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 2. Milestones & Strategic Alliances View */}
      {activeTab === 'milestones' && (
        <div className="space-y-4 animate-in fade-in duration-200">
          {CORPORATE_MILESTONES.map((m, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-black/[0.08] shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="space-y-2 max-w-3xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono font-extrabold text-[#c5283d] bg-red-50 border border-red-200 px-2.5 py-0.5 rounded-full">
                    {m.year}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-full">
                    {m.highlight}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  {m.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {m.description}
                </p>
              </div>

              <div className="shrink-0">
                <a
                  href={`https://wa.me/919177702120?text=Hello%20SriLin,%20I%20would%20like%20to%20learn%20more%20about%20your%20partnership%20milestone:%20${encodeURIComponent(m.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-pill px-4 py-2 text-xs font-bold text-slate-800 hover:text-black inline-flex items-center space-x-1.5"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

    </section>
  );
}
