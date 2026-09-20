import React from 'react';
import {
  ShieldCheck,
  Sparkles,
  Target,
  Compass,
  Rocket,
  Globe2,
  Users,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Award
} from 'lucide-react';
import { BRAND_INFO, TRUST_PILLARS, WHY_CHOOSE_US } from '../data/agencyData';

interface AboutViewProps {
  onOpenConsultation: () => void;
  onExploreServices: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  onOpenConsultation,
  onExploreServices
}) => {
  const coreValues = [
    {
      title: 'Strategy Precedes Execution',
      desc: 'We never spend client ad spend or publish content without a mathematical thesis, competitor audit, and target unit-economic model.'
    },
    {
      title: 'Absolute Attribution Transparency',
      desc: 'No vague spreadsheets or vanity metric gymnastics. If a campaign is underperforming, we diagnose the root cause immediately.'
    },
    {
      title: 'AI Speed + Human Taste',
      desc: 'We leverage AI models to compress research and technical work, while senior human brand thinkers safeguard quality and resonance.'
    },
    {
      title: 'Compounding Revenue Focus',
      desc: 'Our long-term retention depends on your bottom line. We prioritize retention, customer lifetime value, and organic momentum.'
    }
  ];

  return (
    <div className="bg-[#0B1026] text-white min-h-screen pt-8 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 pt-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700/80 text-xs font-semibold text-cyan-400 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Who We Are</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-['Outfit']">
            About <span className="brand-gradient-text">DigiNexa</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            DigiNexa is an integrated Digital Marketing & Technology Agency built for ambitious founders, startups, and growing enterprises seeking predictable, compounding market expansion.
          </p>
          <div className="pt-2">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
              {BRAND_INFO.slogan}
            </span>
          </div>
        </div>

        {/* Mission & Vision Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0F1635] border border-slate-800 shadow-2xl relative overflow-hidden flex flex-col justify-between group hover:border-blue-500/40 transition-colors">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                Our Mission
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-['Outfit']">
                Empowering Businesses to Lead in the Modern Digital Economy
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                {BRAND_INFO.mission}
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-400">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>Data-Driven • Creative Resonance • Technical Mastery</span>
            </div>
          </div>

          {/* Vision */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0F1635] border border-slate-800 shadow-2xl relative overflow-hidden flex flex-col justify-between group hover:border-purple-500/40 transition-colors">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-600/20 text-purple-400 border border-purple-500/30 flex items-center justify-center">
                <Globe2 className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
                Our Vision
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-['Outfit']">
                Setting the Global Benchmark for Innovation & ROI
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                {BRAND_INFO.vision}
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-400">
              <CheckCircle2 className="w-4 h-4 text-purple-400" />
              <span>Global Client Delivery • Enterprise Standard Execution</span>
            </div>
          </div>
        </div>

        {/* Strategic Footprint: Bangladesh Hub + Global Delivery */}
        <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
                <Globe2 className="w-4 h-4" />
                <span>Geographic Footprint</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-['Outfit']">
                Headquartered in Dhaka — Serving Global Markets
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                DigiNexa bridges deep localized commercial expertise in Bangladesh (Gulshan, Banani, Motijheel, Chittagong, Sylhet) with the highest standards of international performance marketing across North America, Europe, the Middle East, and APAC.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2 text-xs text-slate-300">
                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                  <div className="font-bold text-white mb-1">Primary Hub: Bangladesh</div>
                  <div className="text-slate-400">Local SEO, Bangla/English creative, bKash/Nagad e-commerce funnels.</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                  <div className="font-bold text-white mb-1">International Clients</div>
                  <div className="text-slate-400">PPC, programmatic, Shopify, SaaS growth funnels in USD/GBP/EUR.</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 rounded-2xl bg-gradient-to-br from-blue-950/60 to-purple-950/60 border border-slate-700/80 space-y-4 text-center sm:text-left">
              <span className="text-xs font-mono uppercase text-cyan-400 font-bold">
                Why Partners Choose DigiNexa
              </span>
              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>C-Level Strategic Advisory on every account</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Direct Slack/WhatsApp operational channels</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Weekly live video attribution checkpoints</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Continuous experimentation roadmap</span>
                </div>
              </div>

              <button
                onClick={onOpenConsultation}
                className="w-full py-3 rounded-xl brand-gradient text-white text-xs sm:text-sm font-bold shadow-md hover:scale-105 active:scale-95 transition-all mt-4"
              >
                Schedule Executive Briefing
              </button>
            </div>
          </div>
        </div>

        {/* 4 Core Values Grid */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold font-['Outfit']">
              Our Core Operating Values
            </h3>
            <p className="text-sm text-slate-400 mt-2">
              The foundational principles that guide every ad campaign, line of code, and marketing decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => (
              <div
                key={val.title}
                className="p-6 rounded-2xl bg-[#0F1635] border border-slate-800 hover:border-cyan-500/40 transition-colors"
              >
                <span className="text-xs font-mono font-bold text-cyan-400 block mb-2">
                  VALUE 0{idx + 1}
                </span>
                <h4 className="text-base font-bold text-white font-['Outfit'] mb-2">
                  {val.title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center py-8">
          <button
            onClick={onOpenConsultation}
            className="px-8 py-4 rounded-xl brand-gradient text-white font-bold text-base shadow-xl shadow-blue-600/30 hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-2"
          >
            <span>Partner With DigiNexa</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </div>
  );
};
