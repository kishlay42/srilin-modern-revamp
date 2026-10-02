import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  ArrowUpRight, 
  X, 
  CheckCircle2, 
  Tag, 
  Building2, 
  Award, 
  GraduationCap, 
  FileText,
  ChevronRight
} from 'lucide-react';
import { NEWS_MILESTONES } from '../data/srilinAuthenticContent';

export default function LatestNewsSection() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  // Icon per category
  const getCategoryIcon = (cat) => {
    switch (cat) {
      case 'Strategic Partnership':
        return Building2;
      case 'Corporate Milestone':
        return Award;
      case 'Quality Standards':
        return Award;
      case 'Workforce Development':
        return GraduationCap;
      default:
        return FileText;
    }
  };

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedArticle(null);
    };
    if (selectedArticle) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedArticle]);

  return (
    <section 
      id="news-milestones" 
      className="py-24 bg-white border-t border-[rgba(33,34,38,0.06)] relative overflow-hidden"
    >
      {/* Navigation Anchor Aliases */}
      <span id="leadership" className="absolute -top-16" />
      <span id="company" className="absolute -top-16" />
      <span id="news" className="absolute -top-16" />
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f8f9fc] border border-[rgba(33,34,38,0.08)] mb-4">
              <span className="w-2 h-2 rounded-full bg-[#1a73e8]" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#45474d] font-semibold">
                PRESS RELEASES & STRATEGIC MILESTONES
              </span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#121317] mb-3">
              Latest Corporate & Technical News
            </h2>
            
            <p className="text-base md:text-lg text-[#45474d]">
              Track SriLin's 6X manufacturing expansion, Fortune 500 manufacturing pacts, quality recertifications, and academic incubation programs.
            </p>
          </div>

          <div className="text-xs font-mono text-[#80868b]">
            OFFICIAL MEDIA DESK & ARCHIVES
          </div>
        </div>

        {/* News Card Grid matching Google Antigravity Blog layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {NEWS_MILESTONES.map((item, index) => {
            const Icon = getCategoryIcon(item.category);
            const isFeatured = index === 0;

            return (
              <div
                key={item.id}
                onClick={() => setSelectedArticle(item)}
                className={`bg-[#f8f9fc] rounded-[28px] border border-[rgba(33,34,38,0.08)] p-6 md:p-8 flex flex-col justify-between hover:border-[rgba(33,34,38,0.2)] hover:shadow-lg hover:shadow-black/[0.03] transition-all duration-300 cursor-pointer group select-none ${
                  isFeatured ? 'md:col-span-2 lg:col-span-2 bg-gradient-to-br from-white to-[#f8f9fc]' : ''
                }`}
              >
                <div>
                  {/* Category Pill & Date */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-white border border-[rgba(33,34,38,0.06)] text-xs font-medium text-[#121317] flex items-center gap-1.5 shadow-2xs">
                        <Icon className="w-3.5 h-3.5 text-[#1a73e8]" />
                        <span>{item.category}</span>
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 text-[11px] font-semibold border border-amber-200">
                        {item.badge}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-mono text-[#80868b]">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.date}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className={`font-bold text-[#121317] tracking-tight group-hover:text-[#1a73e8] transition-colors mb-3 ${
                    isFeatured ? 'text-2xl md:text-3xl' : 'text-xl'
                  }`}>
                    {item.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs md:text-sm text-[#45474d] leading-relaxed line-clamp-3 mb-6">
                    {item.summary}
                  </p>
                </div>

                {/* Card Action Link */}
                <div className="pt-4 border-t border-[rgba(33,34,38,0.06)] flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#121317] group-hover:underline flex items-center gap-1">
                    <span>Read Verified Statement</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#1a73e8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                  <span className="text-[11px] font-mono text-[#80868b]">
                    {item.keyDetails.length} Key Points
                  </span>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Interactive Modal Drawer for Full Statement Details */}
      {selectedArticle && (
        <div 
          data-lenis-prevent
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-all"
          onClick={() => setSelectedArticle(null)}
        >
          <div 
            data-lenis-prevent
            className="bg-white w-full max-w-2xl rounded-[32px] border border-[rgba(33,34,38,0.1)] shadow-2xl relative max-h-[85vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
            onWheel={(e) => e.stopPropagation()}
          >
            {/* Modal Header Bar with Pinned Close Button */}
            <div className="flex items-center justify-between px-6 md:px-8 pt-6 pb-3 shrink-0 bg-white border-b border-[rgba(33,34,38,0.06)]">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#eff2f7] text-xs font-medium text-[#121317]">
                  {selectedArticle.category}
                </span>
                <span className="px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-semibold border border-amber-200">
                  {selectedArticle.badge}
                </span>
                <span className="text-xs font-mono text-[#80868b] hidden sm:inline ml-2">
                  {selectedArticle.date}
                </span>
              </div>

              <button
                onClick={() => setSelectedArticle(null)}
                aria-label="Close details"
                className="w-9 h-9 rounded-full bg-[#f1f3f8] hover:bg-[#e1e6ec] flex items-center justify-center text-[#121317] transition-colors cursor-pointer shrink-0 ml-4"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable Content Body with Hidden Scrollbar */}
            <div 
              data-lenis-prevent
              className="overflow-y-auto no-scrollbar overscroll-contain px-6 md:px-8 py-6 space-y-6 text-sm text-[#45474d] leading-relaxed"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-[#121317] tracking-tight">
                {selectedArticle.title}
              </h3>

              <p className="bg-[#f8f9fc] p-4 rounded-2xl border border-[rgba(33,34,38,0.06)] text-[#121317] font-medium">
                {selectedArticle.summary}
              </p>

              <div>
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#80868b] mb-3">
                  Verified Contract & Technical Highlights
                </h4>
                <ul className="space-y-2.5">
                  {selectedArticle.keyDetails.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2.5 text-xs md:text-sm text-[#2f3034]">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-[rgba(33,34,38,0.06)] flex flex-col sm:flex-row sm:items-center justify-between text-xs text-[#80868b] gap-2">
                <span>Source: SriLin Corporate Communications</span>
                <span>Hyderabad Fab City, Telangana</span>
              </div>
            </div>

            {/* Modal Footer Bar */}
            <div className="px-6 md:px-8 py-4 border-t border-[rgba(33,34,38,0.06)] flex justify-end shrink-0 bg-white">
              <button
                onClick={() => setSelectedArticle(null)}
                className="google-pill google-pill-primary text-xs cursor-pointer"
              >
                Close Statement
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
