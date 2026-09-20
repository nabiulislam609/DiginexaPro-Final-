import React from 'react';
import {
  Compass,
  BarChart2,
  BrainCircuit,
  Sliders,
  FileCheck,
  Rocket,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/agencyData';

interface WhyChooseUsSectionProps {
  onOpenConsultation: () => void;
}

export const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({
  onOpenConsultation
}) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Compass':
        return <Compass className="w-6 h-6 text-blue-600" />;
      case 'BarChart2':
        return <BarChart2 className="w-6 h-6 text-indigo-600" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-6 h-6 text-violet-600" />;
      case 'Sliders':
        return <Sliders className="w-6 h-6 text-cyan-600" />;
      case 'FileCheck':
        return <FileCheck className="w-6 h-6 text-blue-700" />;
      case 'Rocket':
        return <Rocket className="w-6 h-6 text-fuchsia-600" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-[#F8FAFC] text-slate-900 relative" id="why-choose-us-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-xs font-bold text-blue-800 uppercase tracking-wider mb-4">
            <span>The DigiNexa Distinction</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight font-['Outfit']">
            Why Choose DigiNexa?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            We reject lazy, copy-paste agency retainers. Here is why high-growth startups, ambitious local brands, and international enterprises trust DigiNexa to drive real business growth.
          </p>
        </div>

        {/* 6 Benefits Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={item.id}
              className="relative rounded-2xl bg-white border border-slate-200/90 p-8 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
            >
              <div>
                {/* Icon & Index */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 group-hover:scale-110 group-hover:bg-blue-50 transition-all duration-200">
                    {getIcon(item.iconName)}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    0{index + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 font-['Outfit'] mb-3 group-hover:text-blue-700 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Subtle Proof Marker */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-blue-600">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Rigorous Quality Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Callout Card */}
        <div className="mt-16 rounded-2xl bg-slate-900 text-white p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3 text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                Compare The Difference
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-['Outfit']">
                Tired of Agencies Selling Vanity Likes Instead of Real Pipeline?
              </h3>
              <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
                Most agencies stop at impressions and clicks. DigiNexa connects your advertising spend directly to verified customer inquiries, qualified leads, and closed revenue.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3.5 rounded-xl brand-gradient text-white text-sm font-semibold shadow-lg hover:scale-105 active:scale-95 transition-all text-center flex items-center justify-center gap-2"
              >
                <span>Book a Strategy Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <span className="text-[11px] text-center text-slate-400">
                100% Free • No Obligation Growth Audit
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
