import React, { useState } from 'react';
import {
  ArrowRight,
  Eye,
  Users,
  Target,
  UserCheck,
  TrendingUp,
  Sparkles,
  Zap
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FeaturedFunnelSectionProps {
  onOpenConsultation: () => void;
}

export const FeaturedFunnelSection: React.FC<FeaturedFunnelSectionProps> = ({
  onOpenConsultation
}) => {
  const [funnelModel, setFunnelModel] = useState<'b2b' | 'ecommerce' | 'local'>('b2b');

  const funnelData = {
    b2b: {
      title: 'B2B & High-Ticket Services Funnel',
      stages: [
        { name: 'Visibility', metric: '100,000+', label: 'Targeted Market Impressions', desc: 'Google Search, LinkedIn & Meta authority content', icon: Eye, color: 'from-blue-600 to-indigo-600' },
        { name: 'Traffic', metric: '6,500', label: 'High-Intent Site Visits', desc: 'Landing pages optimized for sub-2s mobile loading', icon: Users, color: 'from-indigo-600 to-violet-600' },
        { name: 'Leads', metric: '420', label: 'Qualified Inbound Inquiries', desc: 'Conversion copywriting & interactive qualification forms', icon: Target, color: 'from-violet-600 to-purple-600' },
        { name: 'Customers', metric: '48', label: 'Closed Deals / Client Retainers', desc: 'Automated CRM follow-up & executive sales demos', icon: UserCheck, color: 'from-purple-600 to-fuchsia-600' },
        { name: 'Growth', metric: '$240,000+', label: 'Compounding Lifetime Pipeline', desc: 'Client retention, cross-selling & referral loops', icon: TrendingUp, color: 'from-fuchsia-600 to-cyan-500' }
      ]
    },
    ecommerce: {
      title: 'D2C E-Commerce Growth Funnel',
      stages: [
        { name: 'Visibility', metric: '450,000+', label: 'Social Feed & Search Impressions', desc: 'High-energy video ad hooks & Google Shopping feeds', icon: Eye, color: 'from-blue-600 to-indigo-600' },
        { name: 'Traffic', metric: '32,000', label: 'Product Page Shoppers', desc: 'Frictionless mobile navigation and instant product views', icon: Users, color: 'from-indigo-600 to-violet-600' },
        { name: 'Leads', metric: '2,800', label: 'Add-to-Carts & Email Subscribers', desc: 'Exit-intent discounts & abandoned cart text alerts', icon: Target, color: 'from-violet-600 to-purple-600' },
        { name: 'Customers', metric: '1,120', label: 'Completed Orders (3.5x ROAS)', desc: '1-click checkout with local and international payments', icon: UserCheck, color: 'from-purple-600 to-fuchsia-600' },
        { name: 'Growth', metric: '42% LTV', label: 'Repeat Customer Expansion', desc: 'Post-purchase loyalty campaigns & automated replenishment', icon: TrendingUp, color: 'from-fuchsia-600 to-cyan-500' }
      ]
    },
    local: {
      title: 'Local Business & Clinic Map Funnel',
      stages: [
        { name: 'Visibility', metric: '50,000+', label: 'Local Map & "Near Me" Searches', desc: 'Top 3 Google Maps pack & localized citations', icon: Eye, color: 'from-blue-600 to-indigo-600' },
        { name: 'Traffic', metric: '4,200', label: 'Profile Clicks & Direction Requests', desc: 'Google Business Profile photos and service menus', icon: Users, color: 'from-indigo-600 to-violet-600' },
        { name: 'Leads', metric: '580', label: 'Direct Calls & WhatsApp Chats', desc: 'Instant tap-to-call buttons and appointment calendar', icon: Target, color: 'from-violet-600 to-purple-600' },
        { name: 'Customers', metric: '210', label: 'In-Clinic / In-Store Appointments', desc: 'Automated SMS appointment reminders reducing no-shows', icon: UserCheck, color: 'from-purple-600 to-fuchsia-600' },
        { name: 'Growth', metric: '4.9 ★', label: 'Local Market Domination & Referrals', desc: 'Automated 5-star review collection compounding rankings', icon: TrendingUp, color: 'from-fuchsia-600 to-cyan-500' }
      ]
    }
  };

  const current = funnelData[funnelModel];

  return (
    <section className="py-20 sm:py-28 bg-[#0E1430] text-white relative border-y border-slate-800/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/60 text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Transformation Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Outfit']">
            Turn Your Digital Presence Into a Growth Engine
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Stop treating marketing as disconnected tactics. Watch how DigiNexa connects the dots from initial brand visibility straight through to customer retention and bottom-line growth.
          </p>

          {/* Model Selector with motion layout pill */}
          <div className="inline-flex items-center p-1.5 rounded-xl bg-slate-900 border border-slate-800 mt-8 relative">
            {(['b2b', 'ecommerce', 'local'] as const).map((model) => {
              const active = funnelModel === model;
              const labels = {
                b2b: 'B2B & High-Ticket',
                ecommerce: 'E-Commerce & Retail',
                local: 'Local Business & Clinic'
              };
              return (
                <button
                  key={model}
                  onClick={() => setFunnelModel(model)}
                  className={`relative px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors z-10 cursor-pointer ${
                    active ? 'text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {active && (
                    <motion.div
                      layoutId="activeFunnelModelPill"
                      className="absolute inset-0 bg-blue-600 rounded-lg shadow-md -z-10"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  {labels[model]}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* The 5-Step Funnel Visual with AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={funnelModel}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="max-w-5xl mx-auto space-y-4"
          >
            {current.stages.map((stage, idx) => {
              const Icon = stage.icon;
              const widths = ['w-full', 'w-full sm:w-[94%]', 'w-full sm:w-[88%]', 'w-full sm:w-[82%]', 'w-full sm:w-[76%]'];
              return (
                <div key={stage.name} className="flex justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    whileHover={{ scale: 1.015, borderColor: 'rgba(6, 182, 212, 0.5)' }}
                    className={`${widths[idx]} transition-all duration-300 rounded-2xl p-5 sm:p-6 bg-gradient-to-r from-slate-900/90 to-[#121B3B] border border-slate-700/80 shadow-lg hover:shadow-xl hover:shadow-blue-900/20 flex flex-col sm:flex-row items-center justify-between gap-4 group`}
                  >
                    <div className="flex items-center gap-4 text-center sm:text-left">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stage.color} flex items-center justify-center text-white shrink-0 shadow-md group-hover:scale-110 transition-transform`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex items-center justify-center sm:justify-start gap-2">
                          <span className="text-xs font-mono font-bold text-cyan-400">
                            STAGE 0{idx + 1}
                          </span>
                          <span className="text-slate-600">•</span>
                          <h3 className="text-lg font-bold text-white font-['Outfit']">
                            {stage.name}
                          </h3>
                        </div>
                        <p className="text-xs text-slate-400 mt-0.5 max-w-md">
                          {stage.desc}
                        </p>
                      </div>
                    </div>

                    <div className="text-center sm:text-right shrink-0 bg-slate-950/60 px-5 py-2.5 rounded-xl border border-slate-800">
                      <div className="text-xl sm:text-2xl font-extrabold text-white font-['Outfit'] group-hover:text-cyan-300 transition-colors">
                        {stage.metric}
                      </div>
                      <div className="text-[11px] text-slate-400 font-medium">
                        {stage.label}
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Funnel Transformation Arrows with glowing progression */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-semibold text-cyan-400 flex-wrap"
        >
          <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 shadow-sm">Visibility</span>
          <ArrowRight className="w-4 h-4 text-cyan-400 animate-pulse" />
          <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 shadow-sm">Traffic</span>
          <ArrowRight className="w-4 h-4 text-cyan-400 animate-pulse" />
          <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 shadow-sm">Leads</span>
          <ArrowRight className="w-4 h-4 text-cyan-400 animate-pulse" />
          <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 shadow-sm">Customers</span>
          <ArrowRight className="w-4 h-4 text-cyan-400 animate-pulse" />
          <span className="px-3.5 py-1.5 rounded-lg brand-gradient text-white shadow-lg shadow-blue-600/30">Compounding Growth</span>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenConsultation}
            className="px-8 py-4 rounded-xl brand-gradient text-white font-bold text-base shadow-xl shadow-blue-600/30 hover:shadow-cyan-500/40 transition-all inline-flex items-center gap-2.5 cursor-pointer"
            id="funnel-cta-btn"
          >
            <span>Build My Growth Strategy</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};
