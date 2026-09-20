import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowUp,
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
  ShieldCheck
} from 'lucide-react';
import { BRAND_INFO, SERVICES_LIST } from '../data/agencyData';
import { PageRoute, ServiceSlug } from '../types';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
  onSelectService: (serviceId: ServiceSlug) => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onSelectService,
  onOpenConsultation
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070B1A] text-white border-t border-slate-800/90 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Column 1: Brand & Slogan (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => onNavigate('home')}>
              <div className="w-10 h-10 rounded-xl brand-gradient flex items-center justify-center font-bold text-white text-lg shadow-lg shadow-blue-600/30">
                DN
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight font-['Outfit'] text-white">
                  Digi<span className="text-cyan-400">Nexa</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
                  Digital Marketing & Technology
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              DigiNexa is a professional Digital Marketing & Technology Agency partnering with startups, ambitious local brands, and global enterprises to build compounding revenue through data-driven digital growth.
            </p>

            <div className="pt-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 block mb-1">
                Brand Slogan
              </span>
              <span className="text-base font-extrabold text-white font-['Outfit'] tracking-wide">
                {BRAND_INFO.slogan}
              </span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href={BRAND_INFO.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 transition-colors border border-slate-800"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={BRAND_INFO.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 transition-colors border border-slate-800"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={BRAND_INFO.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 flex items-center justify-center text-slate-400 hover:text-white hover:bg-pink-600 transition-colors border border-slate-800"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={BRAND_INFO.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 flex items-center justify-center text-slate-400 hover:text-white hover:bg-red-600 transition-colors border border-slate-800"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-['Outfit']">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-cyan-400 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-cyan-400 transition-colors">
                  About DigiNexa
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-cyan-400 transition-colors">
                  All Services
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('case-studies')} className="hover:text-cyan-400 transition-colors">
                  Case Studies
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('pricing')} className="hover:text-cyan-400 transition-colors">
                  Pricing Plans
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('blog')} className="hover:text-cyan-400 transition-colors">
                  Blog & Insights
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-cyan-400 transition-colors">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-['Outfit']">
              Growth Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {SERVICES_LIST.map((srv) => (
                <li key={srv.id}>
                  <button
                    onClick={() => onSelectService(srv.id)}
                    className="hover:text-cyan-400 transition-colors text-left"
                  >
                    {srv.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Coverage (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-['Outfit']">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{BRAND_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href={`mailto:${BRAND_INFO.email}`} className="hover:text-white transition-colors">
                  {BRAND_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href={`tel:${BRAND_INFO.phone}`} className="hover:text-white transition-colors">
                  {BRAND_INFO.phone}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{BRAND_INFO.workingHours}</span>
              </div>
              <div className="pt-2">
                <button
                  onClick={onOpenConsultation}
                  className="w-full py-2.5 rounded-xl brand-gradient text-white font-bold text-xs shadow-md hover:scale-105 transition-all"
                >
                  Book Free Consultation
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} <span className="text-white font-semibold">DigiNexa</span>. All rights reserved. Strategy. Innovation. Growth.
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-300 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-300 cursor-pointer">Cookie Settings</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors flex items-center gap-1 ml-2"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="text-[11px] font-semibold">Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
