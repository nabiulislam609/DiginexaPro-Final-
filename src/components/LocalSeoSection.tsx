import React, { useState } from 'react';
import {
  MapPin,
  Search,
  Star,
  Phone,
  Compass,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { LOCAL_SEO_SERVICES } from '../data/agencyData';

interface LocalSeoSectionProps {
  onOpenConsultation: () => void;
  onExploreLocalSeoService: () => void;
}

export const LocalSeoSection: React.FC<LocalSeoSectionProps> = ({
  onOpenConsultation,
  onExploreLocalSeoService
}) => {
  const [activeCity, setActiveCity] = useState<'dhaka' | 'chittagong' | 'global'>('dhaka');

  const cityData = {
    dhaka: {
      searchQuery: 'best cosmetic clinic in gulshan dhaka',
      packRank: '#1 on Google Local 3-Pack',
      mapReviews: '4.9 ★★★★★ (248 reviews)',
      callsGrowth: '+210% inbound phone inquiries'
    },
    chittagong: {
      searchQuery: 'corporate legal consultant agrabad chittagong',
      packRank: '#1 on Google Local 3-Pack',
      mapReviews: '4.9 ★★★★★ (184 reviews)',
      callsGrowth: '+185% localized search visits'
    },
    global: {
      searchQuery: 'emergency plumbing service london central',
      packRank: '#1 on Google Local 3-Pack',
      mapReviews: '5.0 ★★★★★ (312 reviews)',
      callsGrowth: '+265% direction & call volume'
    }
  };

  const currentCity = cityData[activeCity];

  return (
    <section className="py-20 sm:py-28 bg-[#0E1430] text-white relative border-y border-slate-800/80" id="local-seo-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/70 border border-emerald-800/60 text-xs font-semibold text-emerald-300 uppercase tracking-wider mb-4">
            <MapPin className="w-3.5 h-3.5 text-emerald-400" />
            <span>Hyperlocal Domination</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Outfit']">
            Get Found By Customers Near You
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Help your business become more visible when local customers search for your products or services.
          </p>
        </div>

        {/* 2-Column Grid: Left is Interactive Google Maps & 3-Pack Mockup, Right is Services List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Google-Style Search & Local 3-Pack Interactive Mockup */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-white text-slate-900 p-5 sm:p-6 shadow-2xl border border-slate-200">
              
              {/* Google Search Bar Mockup */}
              <div className="flex items-center gap-3 p-3 rounded-full bg-slate-100 border border-slate-300 shadow-inner mb-4">
                <Search className="w-5 h-5 text-slate-400 shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-700 truncate">
                  {currentCity.searchQuery}
                </span>
                <span className="ml-auto text-[11px] font-semibold text-blue-600 shrink-0">
                  Google Search
                </span>
              </div>

              {/* City Switcher */}
              <div className="flex items-center gap-1.5 mb-4 pb-3 border-b border-slate-200 text-xs">
                <span className="text-slate-500 font-semibold mr-1">Demo Market:</span>
                <button
                  onClick={() => setActiveCity('dhaka')}
                  className={`px-3 py-1 rounded-md font-semibold transition-all ${
                    activeCity === 'dhaka'
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  Dhaka
                </button>
                <button
                  onClick={() => setActiveCity('chittagong')}
                  className={`px-3 py-1 rounded-md font-semibold transition-all ${
                    activeCity === 'chittagong'
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  Chittagong
                </button>
                <button
                  onClick={() => setActiveCity('global')}
                  className={`px-3 py-1 rounded-md font-semibold transition-all ${
                    activeCity === 'global'
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  International
                </button>
              </div>

              {/* Simulated Map Header */}
              <div className="relative h-32 rounded-xl bg-slate-200 overflow-hidden mb-4 border border-slate-300 flex items-center justify-center">
                {/* Stylized vector map lines */}
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:16px_16px]"></div>
                <div className="absolute w-3/4 h-1 bg-slate-300 rotate-12"></div>
                <div className="absolute w-full h-1 bg-slate-300 -rotate-45"></div>

                {/* Animated #1 Map Pin */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg ring-4 ring-red-300 animate-bounce">
                    <MapPin className="w-5 h-5 fill-current" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-900 bg-white px-2 py-0.5 rounded shadow mt-1">
                    Your Business (#1 Ranked)
                  </span>
                </div>
              </div>

              {/* Local 3-Pack First Result (Client Card) */}
              <div className="p-4 rounded-xl bg-blue-50/70 border-2 border-blue-500 shadow-sm space-y-2">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-100 px-2 py-0.5 rounded">
                      Google Local 3-Pack Winner
                    </span>
                    <h4 className="text-base font-bold text-slate-900 mt-1">
                      [Your Brand Name] — Prime Location
                    </h4>
                    <div className="flex items-center gap-1.5 text-xs text-amber-600 font-semibold mt-0.5">
                      <span>4.9</span>
                      <div className="flex text-amber-500">
                        {'★'.repeat(5)}
                      </div>
                      <span className="text-slate-500">(250+ Verified Google Reviews)</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="p-2 rounded-lg bg-blue-600 text-white shadow hover:bg-blue-700 transition-colors">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="p-2 rounded-lg bg-slate-800 text-white shadow hover:bg-slate-900 transition-colors">
                      <Compass className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-600 pt-2 border-t border-blue-200">
                  <span className="text-emerald-700 font-semibold">Open Now • Closes 8:00 PM</span>
                  <span className="text-blue-700 font-semibold">{currentCity.callsGrowth}</span>
                </div>
              </div>

              {/* Local Proof Micro Stats */}
              <div className="mt-4 pt-3 border-t border-slate-200 grid grid-cols-2 gap-2 text-center text-xs">
                <div className="p-2 rounded-lg bg-slate-50">
                  <div className="font-bold text-slate-900">76% of Searchers</div>
                  <div className="text-[11px] text-slate-500">Visit a local store in 24h</div>
                </div>
                <div className="p-2 rounded-lg bg-slate-50">
                  <div className="font-bold text-slate-900">28% Conversion</div>
                  <div className="text-[11px] text-slate-500">From Local Map Inquiries</div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: 6 Dedicated Local SEO Services */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Turn Local Searches Into Paying Customers
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-['Outfit'] mt-1">
                Everything Required to Win Local Google Searches
              </h3>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                When nearby customers search for your product or service, you cannot afford to hide on page 2. We put you right at the top of Google Maps where high-intent decisions are made.
              </p>
            </div>

            {/* 6 Local SEO Services List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {LOCAL_SEO_SERVICES.map((item) => (
                <div
                  key={item.title}
                  className="p-4 rounded-xl bg-[#111836] border border-slate-800 hover:border-emerald-500/40 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <h4 className="text-sm font-bold text-white font-['Outfit']">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed pl-6">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Action CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3 rounded-xl brand-gradient text-white text-sm font-semibold shadow-lg shadow-blue-600/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
                id="local-seo-cta-btn"
              >
                <span>Get a Local SEO Strategy</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreLocalSeoService}
                className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white text-sm font-semibold border border-slate-700/80 transition-colors"
              >
                <span>Read Full Service Details</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
