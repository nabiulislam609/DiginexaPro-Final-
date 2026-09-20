import React from 'react';
import { ArrowRight, CheckCircle2, Sparkles, Shield, Compass, TrendingUp } from 'lucide-react';
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
      {/* Background Decorative Gradients & Grid */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] rounded-full bg-blue-600/15 blur-[120px]"></div>
        <div className="absolute top-[20%] right-[5%] w-[450px] h-[450px] rounded-full bg-purple-600/15 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[30%] w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-[100px]"></div>
        
        {/* Subtle grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(#38bdf8 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-6 text-left">
            
            {/* Slogan pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-md">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="text-xs font-semibold tracking-wider uppercase text-cyan-300">
                {BRAND_INFO.tagline}
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-xs text-slate-400 font-medium">
                Bangladesh & Global
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white tracking-tight font-['Outfit'] leading-[1.1]">
              Grow Your Business With{' '}
              <span className="brand-gradient-text">
                Smarter Digital Marketing
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-xl">
              {BRAND_INFO.heroSubheading}
            </p>

            {/* Trust Bullets */}
            <div className="grid grid-cols-2 gap-3 pt-1 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Zero Guesswork • Data-Driven</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>AI + Human Strategic Edge</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Measurable Revenue Focus</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>100% Transparent Reporting</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onOpenConsultation}
                className="px-7 py-3.5 rounded-xl brand-gradient text-white font-semibold text-sm sm:text-base shadow-xl shadow-blue-600/30 hover:shadow-cyan-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center gap-2.5 group"
                id="hero-primary-cta"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreServices}
                className="px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm sm:text-base border border-slate-700/80 transition-all duration-200 flex items-center gap-2"
                id="hero-secondary-cta"
              >
                <span>Explore Our Services</span>
              </button>
            </div>

            {/* Small Trust Line */}
            <div className="pt-2 flex items-center gap-4 text-xs text-slate-400 border-t border-slate-800/80 max-w-md">
              <div className="flex items-center gap-1.5 text-slate-300 font-semibold">
                <Shield className="w-4 h-4 text-cyan-400" />
                <span>No Long Lock-in Contracts</span>
              </div>
              <span>•</span>
              <div>
                <span>Custom tailored roadmap in 48 hours</span>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Futuristic Marketing Dashboard */}
          <div className="lg:col-span-6 xl:col-span-6">
            <DashboardVisual />
          </div>

        </div>
      </div>
    </section>
  );
};
