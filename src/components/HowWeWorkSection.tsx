import React, { useState } from 'react';
import { Check, ArrowRight, Sparkles, Layers, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { HOW_WE_WORK_STEPS } from '../data/agencyData';

interface HowWeWorkSectionProps {
  onOpenConsultation: () => void;
}

export const HowWeWorkSection: React.FC<HowWeWorkSectionProps> = ({
  onOpenConsultation
}) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section className="py-20 sm:py-28 bg-[#0B1026] text-white relative overflow-hidden" id="how-we-work-section">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-blue-600/10 blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Proven 5-Stage Framework</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Outfit']">
            How We Work
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            A battle-tested, structured methodology engineered to transform raw digital visibility into predictable, compounding revenue.
          </p>
        </motion.div>

        {/* 5-Step Process Interactive Timeline */}
        <div className="relative">
          {/* Animated Connecting Line (Desktop) */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="hidden lg:block absolute top-14 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-400 z-0 origin-left"
          />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
            {HOW_WE_WORK_STEPS.map((step, idx) => {
              const isSelected = activeStep === idx;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -6 }}
                  onClick={() => setActiveStep(idx)}
                  className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 text-center flex flex-col items-center group relative ${
                    isSelected
                      ? 'bg-[#111836] border-2 border-cyan-400 shadow-xl shadow-cyan-500/20'
                      : 'bg-[#0F1635]/80 border border-slate-800 hover:border-slate-700 hover:bg-[#111836]'
                  }`}
                >
                  {/* Numbered Circle */}
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center font-bold font-['Outfit'] text-lg mb-5 transition-all duration-300 shadow-md ${
                      isSelected
                        ? 'brand-gradient text-white shadow-cyan-500/40 ring-4 ring-cyan-500/20 scale-110'
                        : 'bg-slate-900 text-slate-400 border border-slate-700 group-hover:text-white group-hover:border-cyan-400'
                    }`}
                  >
                    {step.number}
                  </div>

                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-1">
                    {step.title}
                  </span>

                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {step.tagline}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-800/80 w-full text-[11px] text-slate-400 flex items-center justify-center gap-1 font-medium">
                    <Check className={`w-3.5 h-3.5 ${isSelected ? 'text-cyan-400' : 'text-slate-500'}`} />
                    <span>Phase 0{idx + 1} Milestone</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Highlight Banner of Current Active Phase with AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="mt-14 rounded-2xl bg-gradient-to-r from-blue-950/70 via-purple-950/60 to-slate-900/80 border border-slate-700/80 p-6 sm:p-8 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6"
          >
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                Active Focus: Step {HOW_WE_WORK_STEPS[activeStep].number} — {HOW_WE_WORK_STEPS[activeStep].title}
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-white font-['Outfit']">
                {HOW_WE_WORK_STEPS[activeStep].tagline}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                {HOW_WE_WORK_STEPS[activeStep].description}
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenConsultation}
              className="shrink-0 px-6 py-3 rounded-xl brand-gradient text-white text-xs sm:text-sm font-semibold shadow-lg transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Start Phase {HOW_WE_WORK_STEPS[activeStep].number}</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
