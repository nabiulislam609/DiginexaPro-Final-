import React, { useState } from 'react';
import {
  Monitor,
  Tablet,
  Smartphone,
  Gauge,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Zap,
  ShoppingBag
} from 'lucide-react';
import { WEB_DEV_HIGHLIGHTS } from '../data/agencyData';

interface WebDevelopmentSectionProps {
  onOpenConsultation: () => void;
  onExploreWebDevService: () => void;
}

export const WebDevelopmentSection: React.FC<WebDevelopmentSectionProps> = ({
  onOpenConsultation,
  onExploreWebDevService
}) => {
  const [devicePreview, setDevicePreview] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  return (
    <section className="py-20 sm:py-28 bg-[#F8FAFC] text-slate-900 relative" id="website-development-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100 border border-indigo-200 text-xs font-bold text-indigo-800 uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>High-Speed Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight font-['Outfit']">
            Websites Built For Business Growth
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Your website is the single most valuable digital asset your company owns. We craft bespoke, lightning-fast web experiences engineered to convert traffic into paying clients.
          </p>
        </div>

        {/* Responsive Showcase Mockups Container */}
        <div className="rounded-3xl bg-slate-900 text-white p-6 sm:p-10 shadow-2xl mb-16 border border-slate-800">
          
          {/* Controls Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                Multi-Device Responsiveness
              </span>
              <h3 className="text-lg font-bold text-white font-['Outfit']">
                Fluid Experience Across Every Screen
              </h3>
            </div>

            {/* Device Switcher */}
            <div className="flex items-center p-1 rounded-xl bg-slate-950 border border-slate-800 text-xs">
              <button
                onClick={() => setDevicePreview('desktop')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition-all ${
                  devicePreview === 'desktop'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
                <span>Desktop (1440px)</span>
              </button>
              <button
                onClick={() => setDevicePreview('tablet')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition-all ${
                  devicePreview === 'tablet'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Tablet className="w-3.5 h-3.5" />
                <span>Tablet (768px)</span>
              </button>
              <button
                onClick={() => setDevicePreview('mobile')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition-all ${
                  devicePreview === 'mobile'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Mobile (390px)</span>
              </button>
            </div>
          </div>

          {/* Device Showcase Canvas */}
          <div className="flex justify-center items-center py-6 min-h-[360px] bg-slate-950/80 rounded-2xl border border-slate-800/80 p-4 relative overflow-hidden">
            
            {/* Desktop Mockup */}
            {devicePreview === 'desktop' && (
              <div className="w-full max-w-4xl rounded-xl bg-[#0B1026] border border-slate-700 shadow-2xl overflow-hidden transition-all duration-300">
                {/* Browser bar */}
                <div className="bg-slate-800 px-4 py-2.5 flex items-center justify-between border-b border-slate-700">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                  </div>
                  <div className="px-6 py-1 rounded-md bg-slate-900 text-slate-400 text-xs font-mono">
                    https://yourbrand.com/growth-engine
                  </div>
                  <div className="text-[10px] text-emerald-400 font-bold flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" /> SSL 256-Bit
                  </div>
                </div>
                {/* Mock Content */}
                <div className="p-8 space-y-6">
                  <div className="flex justify-between items-center pb-4 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded brand-gradient"></div>
                      <span className="text-sm font-bold font-['Outfit']">Your Brand</span>
                    </div>
                    <div className="flex gap-4 text-xs text-slate-300 font-medium">
                      <span>Products</span>
                      <span>Services</span>
                      <span>Pricing</span>
                      <span className="px-3 py-1 rounded bg-blue-600 text-white font-bold">Book Demo</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 gap-6 items-center">
                    <div className="col-span-7 space-y-3">
                      <span className="text-[11px] font-bold text-cyan-400 uppercase">Engineered for Conversions</span>
                      <h4 className="text-2xl font-bold font-['Outfit'] leading-tight">
                        Transform Inbound Visitors Into Qualified Customer Pipeline
                      </h4>
                      <p className="text-xs text-slate-300">
                        Sub-second load times, intuitive navigation architecture, and frictionless inquiry forms that increase conversion rate by 40%+.
                      </p>
                    </div>
                    <div className="col-span-5 p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                      <div className="h-3 w-3/4 rounded bg-slate-700"></div>
                      <div className="h-3 w-1/2 rounded bg-slate-800"></div>
                      <div className="h-8 rounded bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center text-xs font-bold text-white mt-2">
                        Fast 1-Click Checkout
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tablet Mockup */}
            {devicePreview === 'tablet' && (
              <div className="w-[520px] rounded-2xl bg-[#0B1026] border-4 border-slate-700 shadow-2xl p-4 overflow-hidden transition-all duration-300">
                <div className="flex justify-between items-center pb-3 border-b border-slate-800 mb-4">
                  <span className="text-xs font-bold text-cyan-400">Tablet Optimized View</span>
                  <span className="text-[11px] text-slate-400">768 x 1024</span>
                </div>
                <div className="space-y-4">
                  <div className="h-6 w-1/3 rounded bg-blue-500/30"></div>
                  <div className="h-16 rounded-xl bg-slate-900 border border-slate-800 p-3 flex justify-between items-center">
                    <div className="space-y-1">
                      <div className="h-3 w-28 rounded bg-slate-700"></div>
                      <div className="h-2 w-20 rounded bg-slate-800"></div>
                    </div>
                    <div className="px-3 py-1.5 rounded brand-gradient text-xs font-bold text-white">Order</div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="h-20 rounded-lg bg-slate-900 p-2 border border-slate-800">
                      <div className="h-3 w-16 rounded bg-slate-700 mb-1"></div>
                      <div className="text-xs font-bold text-cyan-400">Touch Gestures</div>
                    </div>
                    <div className="h-20 rounded-lg bg-slate-900 p-2 border border-slate-800">
                      <div className="h-3 w-16 rounded bg-slate-700 mb-1"></div>
                      <div className="text-xs font-bold text-emerald-400">Instant Load</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Mobile Phone Mockup */}
            {devicePreview === 'mobile' && (
              <div className="w-[280px] rounded-3xl bg-[#0B1026] border-4 border-slate-700 shadow-2xl p-4 overflow-hidden transition-all duration-300">
                {/* Notch */}
                <div className="w-20 h-3 bg-slate-800 rounded-full mx-auto mb-3"></div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="w-5 h-5 rounded brand-gradient"></div>
                    <div className="w-5 h-3 flex flex-col justify-between">
                      <span className="h-0.5 w-full bg-slate-400"></span>
                      <span className="h-0.5 w-full bg-slate-400"></span>
                    </div>
                  </div>
                  <div className="h-4 w-3/4 rounded bg-cyan-400/40"></div>
                  <div className="h-10 rounded-lg bg-slate-900 border border-slate-800 p-2 text-[10px] text-slate-300">
                    Tap to Call / WhatsApp Ready
                  </div>
                  <div className="p-2 rounded-lg brand-gradient text-white text-center text-xs font-bold">
                    Sticky Mobile CTA
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Google Lighthouse Core Web Vitals Meter */}
          <div className="mt-8 pt-6 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
              <div className="text-2xl font-black text-emerald-400 font-mono">98</div>
              <div className="text-xs font-bold text-white mt-1">Performance</div>
              <div className="text-[10px] text-slate-400">Sub-1s LCP</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
              <div className="text-2xl font-black text-emerald-400 font-mono">100</div>
              <div className="text-xs font-bold text-white mt-1">Accessibility</div>
              <div className="text-[10px] text-slate-400">WCAG AA Certified</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
              <div className="text-2xl font-black text-emerald-400 font-mono">100</div>
              <div className="text-xs font-bold text-white mt-1">Best Practices</div>
              <div className="text-[10px] text-slate-400">Zero Security Flaws</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
              <div className="text-2xl font-black text-emerald-400 font-mono">100</div>
              <div className="text-xs font-bold text-white mt-1">Technical SEO</div>
              <div className="text-[10px] text-slate-400">Structured Schema</div>
            </div>
          </div>

        </div>

        {/* 7 Web Dev Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-14">
          {WEB_DEV_HIGHLIGHTS.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all group"
            >
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                <h4 className="text-base font-bold text-slate-900 font-['Outfit'] group-hover:text-blue-700 transition-colors">
                  {item.title}
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-7">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="text-center">
          <button
            onClick={onOpenConsultation}
            className="px-8 py-4 rounded-xl brand-gradient text-white font-bold text-base shadow-xl shadow-blue-600/30 hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-2.5"
            id="web-dev-cta-btn"
          >
            <span>Build My Website</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};
