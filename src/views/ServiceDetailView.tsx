import React from 'react';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Zap,
  Target,
  Layers,
  HelpCircle,
  ShieldCheck,
  Search,
  MapPin,
  Facebook,
  Share2,
  FileText,
  Cpu,
  TrendingUp,
  Layout
} from 'lucide-react';
import { SERVICES_LIST } from '../data/agencyData';
import { ServiceSlug } from '../types';

interface ServiceDetailViewProps {
  serviceId: ServiceSlug;
  onBack: () => void;
  onSelectService: (serviceId: ServiceSlug) => void;
  onOpenConsultation: (serviceName?: string) => void;
}

export const ServiceDetailView: React.FC<ServiceDetailViewProps> = ({
  serviceId,
  onBack,
  onSelectService,
  onOpenConsultation
}) => {
  const service = SERVICES_LIST.find((s) => s.id === serviceId) || SERVICES_LIST[0];

  const getServiceIcon = (id: ServiceSlug) => {
    switch (id) {
      case 'seo': return <Search className="w-8 h-8 text-cyan-400" />;
      case 'local-seo': return <MapPin className="w-8 h-8 text-emerald-400" />;
      case 'facebook-ads': return <Facebook className="w-8 h-8 text-blue-400" />;
      case 'google-ads': return <Sparkles className="w-8 h-8 text-amber-400" />;
      case 'social-media-marketing': return <Share2 className="w-8 h-8 text-pink-400" />;
      case 'content-marketing': return <FileText className="w-8 h-8 text-violet-400" />;
      case 'ai-marketing': return <Cpu className="w-8 h-8 text-purple-400" />;
      case 'growth-solutions': return <TrendingUp className="w-8 h-8 text-sky-400" />;
      case 'website-development': return <Layout className="w-8 h-8 text-indigo-400" />;
      default: return <Sparkles className="w-8 h-8 text-cyan-400" />;
    }
  };

  return (
    <div className="bg-[#0B1026] text-white min-h-screen pt-8 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Navigation Bar */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Services</span>
          </button>
          <div className="text-xs text-slate-400">
            DigiNexa Growth Services / <span className="text-cyan-400 font-semibold">{service.name}</span>
          </div>
        </div>

        {/* Service Hero Banner */}
        <div className="rounded-3xl bg-[#0F1635] border border-slate-800 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl space-y-5">
            
            <div className="inline-flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-slate-900 border border-slate-700">
                {getServiceIcon(service.id)}
              </div>
              <span className="px-3 py-1 rounded-full bg-blue-600/30 text-cyan-300 text-xs font-bold border border-cyan-500/40">
                {service.badge}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Outfit'] tracking-tight">
              {service.name}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {service.fullDescription}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenConsultation(service.name)}
                className="px-7 py-3.5 rounded-xl brand-gradient text-white font-bold text-sm sm:text-base shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
              >
                <span>Request {service.name} Strategy</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <span className="text-xs text-slate-400">
                Custom Roadmap & Performance Audit Included
              </span>
            </div>

          </div>
        </div>

        {/* 2-Column: Key Benefits & Deliverables */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Key Strategic Benefits */}
          <div className="p-8 rounded-3xl bg-[#0E1430] border border-slate-800 space-y-6">
            <div className="flex items-center gap-2 text-cyan-400">
              <Target className="w-5 h-5" />
              <h3 className="text-xl font-bold font-['Outfit'] text-white">
                Key Strategic Benefits
              </h3>
            </div>
            <div className="space-y-3">
              {service.keyBenefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Included Deliverables */}
          <div className="p-8 rounded-3xl bg-[#0E1430] border border-slate-800 space-y-6">
            <div className="flex items-center gap-2 text-purple-400">
              <Layers className="w-5 h-5" />
              <h3 className="text-xl font-bold font-['Outfit'] text-white">
                Tangible Deliverables
              </h3>
            </div>
            <div className="space-y-3">
              {service.deliverables.map((del, idx) => (
                <div key={idx} className="flex flex-col gap-1 text-xs sm:text-sm text-slate-300 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <div className="flex items-center gap-2 font-bold text-white">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>{del.title}</span>
                  </div>
                  <p className="text-xs text-slate-400 pl-6 leading-relaxed">
                    {del.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Ideal Audience / Who This Service Is For */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#0F1635] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-3 text-center sm:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Ideal Fit
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-['Outfit']">
              Who Is This Service Best Suited For?
            </h3>
            <div className="flex flex-wrap gap-2 pt-1">
              {service.idealFor.map((item, i) => (
                <span key={i} className="px-3 py-1.5 rounded-xl bg-slate-900 text-slate-300 text-xs font-medium border border-slate-800">
                  ✓ {item}
                </span>
              ))}
            </div>
          </div>
          <button
            onClick={() => onOpenConsultation(service.name)}
            className="shrink-0 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs sm:text-sm font-semibold border border-slate-700"
          >
            Check If You Qualify
          </button>
        </div>

        {/* Delivery Process (4 Steps) */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              Operational Standard
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-['Outfit'] mt-1">
              How DigiNexa Delivers {service.name}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.processSteps.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-2xl bg-[#0E1430] border border-slate-800 text-center flex flex-col items-center"
              >
                <div className="w-12 h-12 rounded-full brand-gradient text-white flex items-center justify-center font-black font-['Outfit'] text-sm mb-4 shadow-md">
                  {step.step}
                </div>
                <h4 className="text-base font-bold text-white font-['Outfit'] mb-1.5">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Other Services Navigation Carousel */}
        <div className="pt-12 border-t border-slate-800 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold font-['Outfit'] text-white">
              Explore Complementary Growth Services
            </h3>
            <button
              onClick={onBack}
              className="text-xs font-semibold text-cyan-400 hover:underline"
            >
              View All 9 Services
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {SERVICES_LIST.filter((s) => s.id !== service.id).slice(0, 3).map((other) => (
              <div
                key={other.id}
                onClick={() => {
                  onSelectService(other.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="p-5 rounded-2xl bg-[#0F1635] border border-slate-800 hover:border-blue-500/40 cursor-pointer transition-all hover:-translate-y-1 group"
              >
                <span className="text-[11px] font-semibold text-cyan-400 uppercase tracking-wider block mb-1">
                  {other.badge}
                </span>
                <h4 className="text-base font-bold text-white font-['Outfit'] group-hover:text-cyan-300 transition-colors">
                  {other.name}
                </h4>
                <p className="text-xs text-slate-400 line-clamp-2 mt-1">
                  {other.shortDescription}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-8 sm:p-12 rounded-3xl brand-gradient text-white text-center space-y-4 shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-extrabold font-['Outfit']">
            Ready to Scale Your Business With {service.name}?
          </h3>
          <p className="text-sm text-slate-100 max-w-xl mx-auto">
            Speak with an account director today to receive a transparent performance forecast, competitor analysis, and implementation roadmap.
          </p>
          <button
            onClick={() => onOpenConsultation(service.name)}
            className="px-8 py-3.5 rounded-xl bg-slate-950 text-white hover:bg-slate-900 font-bold text-sm shadow-xl hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-2"
          >
            <span>Book Free Strategy Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
