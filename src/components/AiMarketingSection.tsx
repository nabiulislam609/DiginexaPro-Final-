import React, { useState } from 'react';
import {
  Cpu,
  BrainCircuit,
  Sparkles,
  Zap,
  ArrowRight,
  Bot,
  Layers,
  Search,
  Facebook,
  Share2,
  FileText,
  BarChart3,
  TrendingUp,
  CheckCircle
} from 'lucide-react';
import { AI_CAPABILITIES } from '../data/agencyData';

interface AiMarketingSectionProps {
  onOpenConsultation: () => void;
  onExploreAiService: () => void;
}

export const AiMarketingSection: React.FC<AiMarketingSectionProps> = ({
  onOpenConsultation,
  onExploreAiService
}) => {
  const [selectedChannel, setSelectedChannel] = useState<string>('all');

  const channelNodes = [
    { id: 'seo', name: 'SEO', icon: Search, color: 'text-cyan-400', desc: 'Predictive keyword clustering & AI semantic indexing' },
    { id: 'ads', name: 'Paid Ads', icon: Facebook, color: 'text-blue-400', desc: 'Real-time multivariate creative testing & bid optimization' },
    { id: 'social', name: 'Social Media', icon: Share2, color: 'text-pink-400', desc: 'AI trend scraping & automated reel script generation' },
    { id: 'content', name: 'Content', icon: FileText, color: 'text-violet-400', desc: 'Fast editorial draft synthesis with human strategic polish' },
    { id: 'analytics', name: 'Analytics', icon: BarChart3, color: 'text-emerald-400', desc: 'Multi-touch cross-channel attribution & churn scoring' },
    { id: 'growth', name: 'Business Growth', icon: TrendingUp, color: 'text-amber-400', desc: 'Automated 24/7 lead qualification & CRM webhook routing' }
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#0B1026] text-white relative overflow-hidden" id="ai-marketing-section">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/70 border border-purple-800/60 text-xs font-semibold text-purple-300 uppercase tracking-wider mb-4">
            <Cpu className="w-3.5 h-3.5 text-purple-400" />
            <span>Next-Generation Intelligence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Outfit']">
            Smarter Marketing With AI
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Harness machine computational speed without losing human emotional depth. DigiNexa integrates custom AI marketing stacks that automate manual busywork and multiply campaign performance.
          </p>
        </div>

        {/* Visual Concept: Futuristic AI Hub Connected to All 6 Growth Nodes */}
        <div className="rounded-3xl bg-[#0F1635] border border-slate-700/80 p-6 sm:p-10 mb-16 shadow-2xl relative overflow-hidden">
          
          <div className="text-center mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
              DigiNexa AI Growth Neural Hub
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 font-['Outfit']">
              Centrally Connecting Every Growth Channel
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto mt-1">
              Click any channel node below to view how AI intelligence compounds results.
            </p>
          </div>

          {/* Central AI Brain with Orbiting Nodes */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 relative">
            {channelNodes.map((node) => {
              const Icon = node.icon;
              const isSelected = selectedChannel === node.id || selectedChannel === 'all';
              return (
                <div
                  key={node.id}
                  onClick={() => setSelectedChannel(node.id === selectedChannel ? 'all' : node.id)}
                  className={`cursor-pointer rounded-2xl p-4 transition-all duration-300 border flex flex-col items-center text-center group ${
                    isSelected
                      ? 'bg-slate-900/90 border-cyan-500/50 shadow-lg shadow-cyan-950/50 scale-105'
                      : 'bg-slate-950/60 border-slate-800 opacity-60 hover:opacity-100'
                  }`}
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Icon className={`w-6 h-6 ${node.color}`} />
                  </div>
                  <span className="text-xs font-bold text-white mb-1">
                    {node.name}
                  </span>
                  <p className="text-[11px] text-slate-400 leading-snug">
                    {node.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Integration Ribbon Bar */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="font-semibold text-white">Central Ecosystem:</span>
              <span>SEO + Ads + Social Media + Content + Analytics + Business Growth</span>
            </div>
            <button
              onClick={onExploreAiService}
              className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 hover:underline"
            >
              <span>View Full AI Marketing Spec</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* 8 AI Capabilities Grid */}
        <div className="mb-14">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-['Outfit']">
              8 Ways DigiNexa Deploys AI For Your Business
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Measurable, pragmatic implementations that save hundreds of staff hours and increase conversion rates.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {AI_CAPABILITIES.map((cap, i) => (
              <div
                key={cap.title}
                className="p-5 rounded-2xl bg-[#0E1533] border border-slate-800/80 hover:border-purple-500/40 transition-all hover:-translate-y-1 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-700/60 group-hover:border-purple-500/40 transition-colors">
                    <BrainCircuit className="w-4 h-4 text-purple-400" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">0{i + 1}</span>
                </div>
                <h4 className="text-base font-bold text-white font-['Outfit'] mb-1.5 group-hover:text-purple-300 transition-colors">
                  {cap.title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* AI Action CTA */}
        <div className="text-center">
          <button
            onClick={onExploreAiService}
            className="px-8 py-3.5 rounded-xl brand-gradient text-white font-semibold text-sm shadow-xl shadow-purple-600/30 hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-2"
          >
            <span>Explore AI Solutions</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
