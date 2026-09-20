import React, { useState } from 'react';
import {
  Search,
  MapPin,
  Facebook,
  Sparkles,
  Share2,
  FileText,
  Cpu,
  TrendingUp,
  Layout,
  ArrowRight,
  CheckCircle,
  Zap
} from 'lucide-react';
import { SERVICES_LIST } from '../data/agencyData';
import { ServiceSlug } from '../types';

interface ServicesSectionProps {
  onSelectService: (serviceId: ServiceSlug) => void;
  onOpenConsultation: (serviceName?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onOpenConsultation
}) => {
  const [filter, setFilter] = useState<'all' | 'organic' | 'paid' | 'tech'>('all');

  const getIcon = (id: ServiceSlug) => {
    switch (id) {
      case 'seo':
        return <Search className="w-6 h-6 text-cyan-400" />;
      case 'local-seo':
        return <MapPin className="w-6 h-6 text-emerald-400" />;
      case 'facebook-ads':
        return <Facebook className="w-6 h-6 text-blue-400" />;
      case 'google-ads':
        return <Sparkles className="w-6 h-6 text-amber-400" />;
      case 'social-media-marketing':
        return <Share2 className="w-6 h-6 text-pink-400" />;
      case 'content-marketing':
        return <FileText className="w-6 h-6 text-violet-400" />;
      case 'ai-marketing':
        return <Cpu className="w-6 h-6 text-purple-400" />;
      case 'growth-solutions':
        return <TrendingUp className="w-6 h-6 text-sky-400" />;
      case 'website-development':
        return <Layout className="w-6 h-6 text-indigo-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-cyan-400" />;
    }
  };

  const filteredServices = SERVICES_LIST.filter((service) => {
    if (filter === 'all') return true;
    if (filter === 'organic') {
      return ['seo', 'local-seo', 'content-marketing', 'social-media-marketing'].includes(service.id);
    }
    if (filter === 'paid') {
      return ['facebook-ads', 'google-ads', 'growth-solutions'].includes(service.id);
    }
    if (filter === 'tech') {
      return ['ai-marketing', 'website-development', 'growth-solutions'].includes(service.id);
    }
    return true;
  });

  return (
    <section className="py-20 sm:py-28 bg-[#0B1026] relative" id="services-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-4">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span>Full-Funnel Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Outfit']">
            Our Digital Growth Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Everything you need to build visibility, attract customers and grow your business online.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'All 9 Core Services' },
              { id: 'organic', label: 'Organic Search & Content' },
              { id: 'paid', label: 'Paid Ads & PPC' },
              { id: 'tech', label: 'AI & Web Development' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  filter === tab.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                    : 'bg-slate-900/70 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 9 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="relative rounded-2xl bg-[#0F1635] border border-slate-800/80 p-6 sm:p-7 flex flex-col justify-between hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-blue-950/60 group"
            >
              <div>
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-700/80 group-hover:scale-110 group-hover:border-cyan-500/50 transition-all duration-200">
                    {getIcon(service.id)}
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-900 text-slate-300 border border-slate-800 group-hover:border-slate-700">
                    {service.badge}
                  </span>
                </div>

                {/* Service Name */}
                <h3 className="text-xl font-bold text-white font-['Outfit'] mb-2 group-hover:text-cyan-300 transition-colors">
                  {service.name}
                </h3>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                  {service.shortDescription}
                </p>

                {/* Key Benefits Preview */}
                <div className="space-y-1.5 mb-6 pt-3 border-t border-slate-800/60">
                  {service.keyBenefits.slice(0, 2).map((benefit, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-400/80 mt-0.5 shrink-0" />
                      <span className="line-clamp-1">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                <button
                  onClick={() => onSelectService(service.id)}
                  className="text-xs sm:text-sm font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 group/link transition-colors"
                  id={`service-learn-${service.id}`}
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => onOpenConsultation(service.name)}
                  className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors"
                >
                  Consult Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 text-center">
          <p className="text-sm text-slate-400 mb-4">
            Unsure which mix of services will generate the fastest return for your business?
          </p>
          <button
            onClick={() => onOpenConsultation()}
            className="px-8 py-3.5 rounded-xl brand-gradient text-white font-semibold text-sm shadow-xl shadow-blue-600/30 hover:shadow-cyan-500/30 hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-2"
          >
            <span>Get Free Growth Strategy Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
