import React from 'react';
import { Compass, BarChart3, Target, Users, ShieldCheck, ArrowRight, Award, Clock, Star, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { TRUST_PILLARS } from '../data/agencyData';

interface TrustSectionProps {
  onOpenConsultation: () => void;
}

export const TrustSection: React.FC<TrustSectionProps> = ({ onOpenConsultation }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Compass':
        return <Compass className="w-6 h-6 text-blue-400" />;
      case 'BarChart3':
        return <BarChart3 className="w-6 h-6 text-violet-400" />;
      case 'Target':
        return <Target className="w-6 h-6 text-cyan-400" />;
      case 'Users':
        return <Users className="w-6 h-6 text-emerald-400" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-blue-400" />;
    }
  };

  const statBadges = [
    { label: 'Attributed Pipeline', value: '$14.8M+', icon: Zap, sub: 'Direct client revenue' },
    { label: 'Client Retention', value: '98.4%', icon: ShieldCheck, sub: 'Month-over-month' },
    { label: 'Growth Audits Delivered', value: '250+', icon: Award, sub: 'In Bangladesh & globally' },
    { label: 'Average Client Rating', value: '4.9 / 5', icon: Star, sub: 'Verified reviews' }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#0E1430] border-y border-slate-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Animated Quick Stat Metrics Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16 pb-12 border-b border-slate-800/80"
        >
          {statBadges.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                whileHover={{ y: -4, borderColor: 'rgba(6, 182, 212, 0.4)' }}
                transition={{ duration: 0.2 }}
                className="p-4 sm:p-5 rounded-2xl bg-[#111836]/70 border border-slate-800 backdrop-blur-sm flex items-center gap-3.5 group"
              >
                <div className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-700/60 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:border-cyan-500/50 transition-all shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-white font-['Outfit'] tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-slate-300">
                    {stat.label}
                  </div>
                  <div className="text-[10px] text-slate-500">
                    {stat.sub}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/50 text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-3">
            <span>Built on Principles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['Outfit']">
            Your Growth Is Our Mission
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            DigiNexa operates as an authentic strategic extension of your business. We measure our achievements strictly through your pipeline velocity, customer acquisition efficiency, and long-term revenue.
          </p>
        </motion.div>

        {/* 4 Pillars Grid with Staggered Motion */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_PILLARS.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, borderColor: 'rgba(56, 189, 248, 0.4)' }}
              className="relative rounded-2xl bg-[#111836] border border-slate-800/90 p-6 transition-all duration-300 hover:shadow-xl hover:shadow-blue-950/50 flex flex-col justify-between group"
            >
              {/* Top Accent Pill */}
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-700/60 group-hover:scale-110 group-hover:border-cyan-500/50 transition-all">
                  {getIcon(pillar.iconName)}
                </div>
                <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-slate-800 text-slate-400">
                  0{index + 1}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white font-['Outfit'] mb-1 group-hover:text-cyan-300 transition-colors">
                  {pillar.title}
                </h3>
                <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider block mb-2">
                  {pillar.subtitle}
                </span>
                <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400 group-hover:text-slate-200 transition-colors">
                <span>Direct Accountability</span>
                <ShieldCheck className="w-4 h-4 text-cyan-400/80" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Consultation Banner with Glow Motion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 p-5 rounded-2xl bg-gradient-to-r from-blue-900/40 via-purple-900/30 to-cyan-900/40 border border-blue-700/30 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="text-center sm:text-left">
            <h4 className="text-sm sm:text-base font-bold text-white font-['Outfit']">
              Ready to eliminate marketing uncertainty and scale predictably?
            </h4>
            <p className="text-xs text-slate-300 mt-0.5">
              Get a customized audit of your current channels, competitors, and growth opportunities.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenConsultation}
            className="shrink-0 px-5 py-2.5 rounded-xl brand-gradient text-white text-xs sm:text-sm font-semibold shadow-md transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Request Free Audit</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};
