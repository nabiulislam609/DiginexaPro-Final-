import React, { useState } from 'react';
import { Check, ArrowRight, Sparkles, Shield, Calculator, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { PRICING_TIERS } from '../data/agencyData';

interface PricingSectionProps {
  onOpenConsultation: (tierName?: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  onOpenConsultation
}) => {
  const [selectedChannels, setSelectedChannels] = useState<string[]>([
    'Search Engine Optimization',
    'Facebook & Meta Ads'
  ]);

  const channelOptions = [
    'Search Engine Optimization (SEO)',
    'Local SEO & Google Maps',
    'Facebook & Instagram Ads',
    'Google Search & PMax Ads',
    'Social Media Management',
    'Content Marketing & Copywriting',
    'AI Marketing & Automation',
    'Conversion Website Development'
  ];

  const toggleChannel = (channel: string) => {
    if (selectedChannels.includes(channel)) {
      if (selectedChannels.length > 1) {
        setSelectedChannels(selectedChannels.filter((c) => c !== channel));
      }
    } else {
      setSelectedChannels([...selectedChannels, channel]);
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-[#0B1026] text-white relative overflow-hidden" id="pricing-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700/80 text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Value-Driven Partnership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Outfit']">
            Transparent, Results-Focused Pricing
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            No cookie-cutter packages. Every investment is calibrated directly to your target return, unit economics, and operational capacity.
          </p>
        </motion.div>

        {/* 3 Pricing Tiers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {PRICING_TIERS.map((tier, idx) => {
            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                whileHover={{ y: -8 }}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  tier.isPopular
                    ? 'bg-[#111836] border-2 border-cyan-400 shadow-2xl shadow-blue-900/40 lg:-translate-y-2'
                    : 'bg-[#0F1635] border border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Most Popular Badge */}
                {tier.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full brand-gradient text-white text-xs font-black uppercase tracking-wider shadow-lg">
                    MOST POPULAR
                  </div>
                )}

                <div>
                  {/* Tier Title & Tagline */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white font-['Outfit']">
                      {tier.name}
                    </h3>
                    <p className="text-xs text-slate-300 mt-1.5 min-h-[32px]">
                      {tier.tagline}
                    </p>
                  </div>

                  {/* Price Display */}
                  <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 mb-6">
                    <div className="text-3xl font-extrabold text-white font-['Outfit'] text-cyan-400">
                      {tier.priceDisplay}
                    </div>
                    <div className="text-xs text-slate-400 mt-1">
                      {tier.billingNote}
                    </div>
                  </div>

                  {/* Target Audience */}
                  <div className="text-xs text-slate-400 mb-6 pb-4 border-b border-slate-800">
                    <span className="font-semibold text-slate-300">Ideal for: </span>
                    {tier.targetAudience}
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Included Capabilities:
                    </span>
                    {tier.features.map((feat) => (
                      <div
                        key={feat.name}
                        className="flex items-start gap-3 text-xs sm:text-sm"
                      >
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                            feat.included
                              ? 'bg-cyan-500/20 text-cyan-400'
                              : 'bg-slate-800 text-slate-600'
                          }`}
                        >
                          <Check className="w-3 h-3" />
                        </div>
                        <span
                          className={
                            feat.included ? 'text-slate-200' : 'text-slate-500 line-through'
                          }
                        >
                          {feat.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tier CTA Button */}
                <div>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => onOpenConsultation(tier.name)}
                    className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                      tier.isPopular
                        ? 'brand-gradient text-white shadow-lg shadow-blue-600/30'
                        : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                    }`}
                    id={`pricing-cta-${tier.id}`}
                  >
                    <span>{tier.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                  <p className="text-[11px] text-center text-slate-400 mt-2">
                    Custom roadmap delivered within 48 hours
                  </p>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Interactive Custom Quote Scope Configurator */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-[#0F1635] border border-slate-800 p-8 sm:p-10 shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400">
                <Calculator className="w-4 h-4" />
                <span>Tailor Your Custom Scope</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-['Outfit']">
                Select Your Desired Growth Channels
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Click to add or remove services. We will build a customized proposal factoring in your selected channels, geographic focus, and monthly advertising budget.
              </p>

              {/* Channels Selector Chips */}
              <div className="flex flex-wrap gap-2 pt-2">
                {channelOptions.map((opt) => {
                  const isChecked = selectedChannels.includes(opt);
                  return (
                    <button
                      key={opt}
                      onClick={() => toggleChannel(opt)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all border cursor-pointer ${
                        isChecked
                          ? 'bg-blue-600/30 border-cyan-400 text-cyan-300 shadow-sm'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      {isChecked ? '✓ ' : '+ '}
                      {opt}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-4 text-center sm:text-left">
              <div className="flex justify-between items-center text-xs text-slate-400">
                <span>Selected Channels:</span>
                <span className="font-bold text-cyan-400">{selectedChannels.length} Channels</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-900 text-xs text-slate-300 space-y-1">
                <div className="font-semibold text-white">Estimated Retainer Type:</div>
                <div className="text-cyan-300 font-bold">
                  {selectedChannels.length <= 2 ? 'Starter / Focused Sprint' : selectedChannels.length <= 4 ? 'Full Growth Engine' : 'Omnichannel Enterprise'}
                </div>
                <div className="text-[11px] text-slate-400">
                  Custom Pricing based on ad spend volume and audit requirements.
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onOpenConsultation(`Custom Scope (${selectedChannels.length} Channels)`)}
                className="w-full py-3.5 rounded-xl brand-gradient text-white text-sm font-bold shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request Custom Quote</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
