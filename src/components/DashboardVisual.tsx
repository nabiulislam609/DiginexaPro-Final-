import React, { useState } from 'react';
import {
  TrendingUp,
  Search,
  Sparkles,
  BarChart3,
  Cpu,
  ArrowUpRight,
  Activity,
  Zap,
  Globe,
  DollarSign
} from 'lucide-react';

export const DashboardVisual: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'seo' | 'ads' | 'ai'>('overview');
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d'>('30d');

  const getMetricData = () => {
    switch (timeRange) {
      case '7d':
        return {
          revenue: '$34,850',
          revChange: '+28.4%',
          traffic: '42,800',
          trafficChange: '+31.2%',
          roas: '4.4x',
          roasChange: '+0.6x',
          aiScore: '99.2%',
          aiStatus: 'Auto-tuning 18 campaigns'
        };
      case '90d':
        return {
          revenue: '$418,200',
          revChange: '+340%',
          traffic: '520,000',
          trafficChange: '+295%',
          roas: '4.9x',
          roasChange: '+1.8x',
          aiScore: '98.8%',
          aiStatus: '14,280 Conversions Attributed'
        };
      case '30d':
      default:
        return {
          revenue: '$142,500',
          revChange: '+284%',
          traffic: '168,400',
          trafficChange: '+192%',
          roas: '4.8x',
          roasChange: '+1.4x',
          aiScore: '98.4%',
          aiStatus: 'AI Predictive Bidding Active'
        };
    }
  };

  const metrics = getMetricData();

  // SVG Chart points based on time range
  const chartPoints =
    timeRange === '7d'
      ? '0,85 20,70 40,60 60,50 80,30 100,20'
      : timeRange === '90d'
      ? '0,90 15,80 30,68 45,55 60,42 75,25 90,18 100,10'
      : '0,80 16,68 32,72 48,50 64,38 80,28 100,14';

  return (
    <div className="relative w-full rounded-2xl p-1 bg-gradient-to-br from-blue-600/40 via-purple-600/30 to-cyan-500/40 shadow-2xl shadow-blue-900/40 border border-slate-700/60">
      {/* Background ambient glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition duration-1000"></div>

      <div className="relative bg-[#0F1635] rounded-[14px] p-4 sm:p-6 overflow-hidden">
        {/* Top Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800/80">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-cyan-400">
              <Activity className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-white font-['Outfit']">
                  DigiNexa Growth Intelligence
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  Live Data
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Cross-channel attribution & automated analytics
              </p>
            </div>
          </div>

          {/* Timeframe Selectors */}
          <div className="flex items-center p-1 rounded-lg bg-slate-900/90 border border-slate-800 text-xs">
            {(['7d', '30d', '90d'] as const).map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-2.5 py-1 rounded-md font-medium transition-all ${
                  timeRange === range
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {range === '7d' ? '7 Days' : range === '30d' ? '30 Days' : '90 Days'}
              </button>
            ))}
          </div>
        </div>

        {/* Channel Navigation Pills */}
        <div className="flex items-center gap-2 pt-3 pb-4 overflow-x-auto no-scrollbar">
          {[
            { id: 'overview', label: 'All Growth Channels', icon: BarChart3 },
            { id: 'seo', label: 'SEO & Organic Search', icon: Search },
            { id: 'ads', label: 'Google & Meta Ads', icon: Sparkles },
            { id: 'ai', label: 'AI Optimization Engine', icon: Cpu }
          ].map((tab) => {
            const Icon = tab.icon;
            const isCurrent = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  isCurrent
                    ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-md shadow-blue-500/20'
                    : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* 4 Interactive KPI Metric Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-colors">
            <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
              <span>Attributed Revenue</span>
              <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            <div className="text-lg sm:text-xl font-bold text-white font-['Outfit']">
              {metrics.revenue}
            </div>
            <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-400 mt-0.5">
              <TrendingUp className="w-3 h-3" />
              <span>{metrics.revChange}</span>
              <span className="text-slate-500 font-normal">vs prev</span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-colors">
            <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
              <span>Website Traffic</span>
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
            </div>
            <div className="text-lg sm:text-xl font-bold text-white font-['Outfit']">
              {metrics.traffic}
            </div>
            <div className="flex items-center gap-1 text-[11px] font-semibold text-cyan-400 mt-0.5">
              <ArrowUpRight className="w-3 h-3" />
              <span>{metrics.trafficChange}</span>
              <span className="text-slate-500 font-normal">organic</span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-colors">
            <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
              <span>Blended ROAS</span>
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            </div>
            <div className="text-lg sm:text-xl font-bold text-white font-['Outfit']">
              {metrics.roas}
            </div>
            <div className="flex items-center gap-1 text-[11px] font-semibold text-purple-400 mt-0.5">
              <ArrowUpRight className="w-3 h-3" />
              <span>{metrics.roasChange}</span>
              <span className="text-slate-500 font-normal">target 3.0x</span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-colors">
            <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
              <span>AI Opt Score</span>
              <Zap className="w-3.5 h-3.5 text-amber-400" />
            </div>
            <div className="text-lg sm:text-xl font-bold text-white font-['Outfit']">
              {metrics.aiScore}
            </div>
            <div className="text-[11px] text-amber-300/90 font-medium truncate mt-0.5">
              {metrics.aiStatus}
            </div>
          </div>
        </div>

        {/* Main Growth Graph Area */}
        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 mb-3">
          <div className="flex items-center justify-between mb-3 text-xs">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
                Organic Search Traffic
              </span>
              <span className="flex items-center gap-1.5 text-slate-400 font-medium">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-500"></span>
                Paid Conversion Value
              </span>
            </div>
            <span className="text-slate-500 text-[11px]">Compounding Growth Trajectory</span>
          </div>

          {/* Dynamic SVG Area Chart */}
          <div className="h-32 sm:h-40 w-full relative">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="cyanGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.0" />
                </linearGradient>
                <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Horizontal Grid lines */}
              <line x1="0" y1="20" x2="100" y2="20" stroke="#334155" strokeWidth="0.4" strokeDasharray="1,2" />
              <line x1="0" y1="50" x2="100" y2="50" stroke="#334155" strokeWidth="0.4" strokeDasharray="1,2" />
              <line x1="0" y1="80" x2="100" y2="80" stroke="#334155" strokeWidth="0.4" strokeDasharray="1,2" />

              {/* Cyan Area */}
              <polygon
                points={`0,100 ${chartPoints} 100,100`}
                fill="url(#cyanGradient)"
              />

              {/* Main Cyan Line */}
              <polyline
                fill="none"
                stroke="#06B6D4"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                points={chartPoints}
              />

              {/* Purple Secondary Line */}
              <polyline
                fill="none"
                stroke="#7C3AED"
                strokeWidth="2"
                strokeDasharray="2,2"
                points="0,88 20,78 40,70 60,45 80,36 100,22"
              />
            </svg>

            {/* Floating Highlight Badge on Graph Peak */}
            <div className="absolute top-2 right-2 sm:right-6 bg-slate-900/90 border border-cyan-500/40 rounded-lg px-2.5 py-1 text-[11px] shadow-lg flex items-center gap-1.5 text-cyan-300">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span>+284% Accelerated Peak</span>
            </div>
          </div>

          <div className="flex justify-between text-[10px] text-slate-500 mt-2 px-1">
            <span>Month 1 (Audit)</span>
            <span>Month 2 (Launch)</span>
            <span>Month 3 (Optimize)</span>
            <span>Month 4 (Scale)</span>
            <span>Month 5 (Dominate)</span>
          </div>
        </div>

        {/* AI Insight Pill */}
        <div className="flex items-start gap-3 p-3 rounded-xl bg-gradient-to-r from-blue-950/60 to-purple-950/60 border border-blue-800/40">
          <div className="p-1.5 rounded-lg bg-blue-600/30 text-cyan-400 mt-0.5">
            <Cpu className="w-4 h-4 animate-spin-slow" />
          </div>
          <div className="text-xs">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-200">DigiNexa AI Recommendation</span>
              <span className="text-[10px] text-cyan-400 font-mono">Confidence: 96%</span>
            </div>
            <p className="text-slate-400 mt-0.5 text-[11px]">
              {activeTab === 'seo'
                ? 'High-intent localized keywords in Dhaka & Chittagong show +45% lower keyword difficulty. Deploying localized topic clusters will yield estimated +60% organic conversions.'
                : activeTab === 'ads'
                ? 'Meta ad creative #4 has 4.8x ROAS. Shifted 22% of daily budget from low-performing carousel to video hook variant #4.'
                : activeTab === 'ai'
                ? 'Automated WhatsApp & Messenger response latency under 35 seconds lifted qualification conversion rate by +31%.'
                : 'Blended acquisition funnel reached optimal unit economics. Recommended next step: scale paid ad budgets horizontally while organic SEO compound kicks in.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
