import React, { useState } from 'react';
import {
  Briefcase,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { CASE_STUDIES } from '../data/agencyData';

interface CaseStudiesSectionProps {
  onOpenConsultation: () => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({
  onOpenConsultation
}) => {
  const [selectedCase, setSelectedCase] = useState<string>(CASE_STUDIES[0].id);

  const activeStudy = CASE_STUDIES.find((cs) => cs.id === selectedCase) || CASE_STUDIES[0];

  return (
    <section className="py-20 sm:py-28 bg-[#0B1026] text-white relative" id="case-studies-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Documented Client Impact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Outfit']">
            Case Studies
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Real frameworks, real strategic interventions, and measurable before-and-after transformations. Client identities are protected under NDA with clearly marked placeholders.
          </p>

          {/* Tab Switcher for Case Studies */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {CASE_STUDIES.map((cs) => (
              <button
                key={cs.id}
                onClick={() => setSelectedCase(cs.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  selectedCase === cs.id
                    ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cs.clientIndustry}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Case Study Deep Dive Card */}
        <div className="rounded-3xl bg-[#0F1635] border border-slate-800 p-6 sm:p-10 shadow-2xl">
          
          {/* Top Metadata Strip */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-800/80">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-blue-900/40 text-cyan-400 border border-blue-700/50">
                  Verified Case Study
                </span>
                <span className="text-xs text-slate-400">
                  Timeline: {activeStudy.timeline}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit'] mt-2">
                {activeStudy.title}
              </h3>
              <p className="text-xs sm:text-sm font-medium text-amber-400/90 mt-1">
                Client: {activeStudy.clientNamePlaceholder}
              </p>
            </div>

            {/* Services Tags */}
            <div className="flex flex-wrap gap-2">
              {activeStudy.servicesUsed.map((srv) => (
                <span
                  key={srv}
                  className="px-3 py-1 rounded-lg bg-slate-900 text-slate-300 text-xs font-semibold border border-slate-700/80"
                >
                  {srv}
                </span>
              ))}
            </div>
          </div>

          {/* Before & After Metrics Highlight Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {activeStudy.metrics.map((m) => (
              <div
                key={m.metric}
                className="p-4 rounded-2xl bg-[#111836] border border-slate-800/90"
              >
                <span className="text-xs text-slate-400 font-medium block mb-1">
                  {m.metric}
                </span>
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="text-xs text-slate-500 line-through mr-2">
                      {m.before}
                    </span>
                    <span className="text-xl sm:text-2xl font-black text-white font-['Outfit']">
                      {m.after}
                    </span>
                  </div>
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-0.5">
                    <ArrowUpRight className="w-3 h-3" />
                    {m.change}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Challenge & Strategy Split */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-400">
                The Core Challenge
              </span>
              <p className="text-sm text-slate-300 leading-relaxed">
                {activeStudy.challenge}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                The DigiNexa Strategy
              </span>
              <p className="text-sm text-slate-300 leading-relaxed">
                {activeStudy.strategy}
              </p>
            </div>
          </div>

          {/* Key Deliverables / Results List */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-950/40 to-purple-950/40 border border-blue-900/30">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 block mb-3">
              Key Measured Outcomes
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {activeStudy.results.map((res, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{res}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Add Client Case Study Placeholder Card Note */}
          <div className="mt-6 p-4 rounded-xl bg-slate-900/80 border border-dashed border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-slate-800 font-mono text-cyan-300">
                [Add Client Case Study]
              </span>
              <span>
                Want your business featured in our next quarterly growth case study?
              </span>
            </div>
            <button
              onClick={onOpenConsultation}
              className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1 shrink-0"
            >
              <span>Apply for Case Study Partnership</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
