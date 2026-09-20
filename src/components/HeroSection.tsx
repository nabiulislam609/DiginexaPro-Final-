import React from 'react';
import { ArrowRight, CheckCircle2, Sparkles, Shield, Compass, TrendingUp, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { BRAND_INFO } from '../data/agencyData';
import { DashboardVisual } from './DashboardVisual';

interface HeroSectionProps {
  onOpenConsultation: () => void;
  onExploreServices: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenConsultation,
  onExploreServices
}) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-20 sm:pt-12 sm:pb-28 bg-[#0B1026]">
      {/* Background Hero Image & Environmental Overlays */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        {/* High-Resolution Tech & Digital Growth Hero Background */}
        <motion.img
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1.05, opacity: 0.25 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2160&q=80"
          alt="Digital Growth & Technology Network"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter contrast-125 brightness-75"
        />

        {/* Ambient Dark Gradient Overlays for High Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1026] via-[#0B1026]/80 to-[#0B1026]/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1026] via-[#0B1026]/70 to-[#0B1026]/90" />

        {/* Glowing Ambient Light Orbs with subtle motion */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.18, 0.26, 0.18],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[-10%] left-[10%] w-[550px] h-[550px] rounded-full bg-blue-600/20 blur-[130px]"
        />
        <motion.div
          animate={{
            scale: [1.08, 1, 1.08],
            opacity: [0.16, 0.24, 0.16],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-[20%] right-[5%] w-[500px] h-[500px] rounded-full bg-purple-600/20 blur-[130px]"
        />
        <div className="absolute bottom-[-10%] left-[30%] w-[450px] h-[450px] rounded-full bg-cyan-500/15 blur-[120px]" />

        {/* Subtle Cyber Coordinate Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(#38bdf8 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 xl:col-span-6 space-y-6 text-left"
          >
            
            {/* Slogan pill badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-md backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span className="text-xs font-semibold tracking-wider uppercase text-cyan-300">
                {BRAND_INFO.tagline}
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-xs text-slate-400 font-medium">
                Bangladesh & Global
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white tracking-tight font-['Outfit'] leading-[1.1]"
            >
              Grow Your Business With{' '}
              <span className="brand-gradient-text drop-shadow-sm">
                Smarter Digital Marketing
              </span>
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-xl"
            >
              {BRAND_INFO.heroSubheading}
            </motion.p>

            {/* Trust Bullets */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="grid grid-cols-2 gap-3 pt-1 text-xs sm:text-sm text-slate-300"
            >
              {[
                'Zero Guesswork • Data-Driven',
                'AI + Human Strategic Edge',
                'Measurable Revenue Focus',
                '100% Transparent Reporting'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 group">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="group-hover:text-white transition-colors">{item}</span>
                </div>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: '0 10px 30px -5px rgba(37,99,235,0.5)' }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenConsultation}
                className="px-7 py-3.5 rounded-xl brand-gradient text-white font-semibold text-sm sm:text-base shadow-xl shadow-blue-600/30 hover:shadow-cyan-500/30 transition-all duration-200 flex items-center gap-2.5 group cursor-pointer"
                id="hero-primary-cta"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(30, 41, 59, 1)' }}
                whileTap={{ scale: 0.98 }}
                onClick={onExploreServices}
                className="px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm sm:text-base border border-slate-700/80 transition-all duration-200 flex items-center gap-2 cursor-pointer"
                id="hero-secondary-cta"
              >
                <span>Explore Our Services</span>
              </motion.button>
            </motion.div>

            {/* Small Trust Line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="pt-2 flex items-center gap-4 text-xs text-slate-400 border-t border-slate-800/80 max-w-md"
            >
              <div className="flex items-center gap-1.5 text-slate-300 font-semibold">
                <Shield className="w-4 h-4 text-cyan-400" />
                <span>No Long Lock-in Contracts</span>
              </div>
              <span>•</span>
              <div>
                <span>Custom tailored roadmap in 48 hours</span>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Column: Premium Futuristic Marketing Dashboard with entrance motion */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 xl:col-span-6 relative"
          >
            {/* Subtle floating badge */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="hidden sm:flex absolute -top-4 -right-4 z-20 items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-cyan-500/40 shadow-xl backdrop-blur-md text-[11px] text-white"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="font-semibold text-cyan-300">Live Client Data</span>
              <span className="text-slate-400">| +3.8x Avg ROAS</span>
            </motion.div>

            <DashboardVisual />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
