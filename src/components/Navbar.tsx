import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Search,
  MapPin,
  Facebook,
  Sparkles,
  Share2,
  FileText,
  Cpu,
  TrendingUp,
  Layout,
  Phone,
  Mail
} from 'lucide-react';
import { PageId, ServiceSlug } from '../types';
import { BRAND_INFO, SERVICES_LIST } from '../data/agencyData';

interface NavbarProps {
  currentPage: PageId;
  selectedServiceSlug?: ServiceSlug;
  onNavigate: (page: PageId, serviceSlug?: ServiceSlug) => void;
  onOpenConsultation: (service?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  selectedServiceSlug,
  onNavigate,
  onOpenConsultation
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getServiceIcon = (id: ServiceSlug) => {
    switch (id) {
      case 'seo': return <Search className="w-4 h-4 text-cyan-400" />;
      case 'local-seo': return <MapPin className="w-4 h-4 text-emerald-400" />;
      case 'facebook-ads': return <Facebook className="w-4 h-4 text-blue-400" />;
      case 'google-ads': return <Sparkles className="w-4 h-4 text-amber-400" />;
      case 'social-media-marketing': return <Share2 className="w-4 h-4 text-pink-400" />;
      case 'content-marketing': return <FileText className="w-4 h-4 text-violet-400" />;
      case 'ai-marketing': return <Cpu className="w-4 h-4 text-purple-400" />;
      case 'growth-solutions': return <TrendingUp className="w-4 h-4 text-sky-400" />;
      case 'website-development': return <Layout className="w-4 h-4 text-indigo-400" />;
      default: return <Sparkles className="w-4 h-4 text-cyan-400" />;
    }
  };

  const navLinks: { label: string; page: PageId; isDropdown?: boolean }[] = [
    { label: 'Home', page: 'home' },
    { label: 'About', page: 'about' },
    { label: 'Services', page: 'services', isDropdown: true },
    { label: 'Case Studies', page: 'case-studies' },
    { label: 'Pricing', page: 'pricing' },
    { label: 'Blog', page: 'blog' },
    { label: 'Contact', page: 'contact' }
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B1026]/95 backdrop-blur-md shadow-lg shadow-black/40 border-b border-slate-800/80 py-3'
          : 'bg-[#0B1026]/80 backdrop-blur-sm border-b border-slate-800/40 py-4'
      }`}
    >
      {/* Top micro bar for direct contact / regional announcement */}
      <div className="hidden lg:block border-b border-slate-800/40 pb-2 mb-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-xs text-slate-400">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              {BRAND_INFO.serviceCoverage}
            </span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-400 font-medium tracking-wide">
              {BRAND_INFO.tagline}
            </span>
          </div>
          <div className="flex items-center space-x-5">
            <a
              href={`mailto:${BRAND_INFO.email}`}
              className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>{BRAND_INFO.email}</span>
            </a>
            <a
              href={`tel:${BRAND_INFO.phone}`}
              className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>{BRAND_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* DigiNexa Logo */}
        <button
          onClick={() => {
            onNavigate('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 text-left group focus:outline-none"
          id="nav-logo-btn"
          aria-label="DigiNexa Home"
        >
          <div className="relative w-10 h-10 rounded-xl brand-gradient p-0.5 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all">
            <div className="w-full h-full bg-[#0B1026] rounded-[10px] flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 text-cyan-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 17 12 22 22 17" />
                <polyline points="2 12 12 17 22 12" />
              </svg>
            </div>
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight text-white font-['Outfit'] block leading-none">
              Digi<span className="text-cyan-400">Nexa</span>
            </span>
            <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-semibold mt-1">
              Strategy • Innovation • Growth
            </span>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {navLinks.map((link) => {
            if (link.isDropdown) {
              return (
                <div
                  key={link.page}
                  className="relative"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <button
                    onClick={() => onNavigate('services')}
                    className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                      currentPage === 'services' || currentPage === 'service-detail'
                        ? 'text-cyan-300 bg-slate-800/60'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                    }`}
                    id="nav-services-dropdown-btn"
                  >
                    <span>{link.label}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        servicesDropdownOpen ? 'rotate-180 text-cyan-400' : 'text-slate-400'
                      }`}
                    />
                  </button>

                  {/* Services Mega Dropdown */}
                  {servicesDropdownOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[680px] p-5 bg-[#0F1635] border border-slate-700/80 rounded-2xl shadow-2xl shadow-black/80 z-50 backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-150">
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                            Our Capabilities
                          </p>
                          <p className="text-sm font-medium text-white">
                            Data-Driven Growth & Technology Services
                          </p>
                        </div>
                        <button
                          onClick={() => {
                            setServicesDropdownOpen(false);
                            onNavigate('services');
                          }}
                          className="text-xs text-slate-400 hover:text-cyan-300 flex items-center gap-1 font-medium transition-colors"
                        >
                          View All Services <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        {SERVICES_LIST.map((service) => (
                          <button
                            key={service.id}
                            onClick={() => {
                              setServicesDropdownOpen(false);
                              onNavigate('service-detail', service.id);
                            }}
                            className={`flex items-start gap-3 p-2.5 rounded-xl text-left transition-all ${
                              selectedServiceSlug === service.id && currentPage === 'service-detail'
                                ? 'bg-slate-800 border border-cyan-500/30'
                                : 'hover:bg-slate-800/60 border border-transparent'
                            }`}
                          >
                            <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/60 mt-0.5">
                              {getServiceIcon(service.id)}
                            </div>
                            <div>
                              <span className="text-xs font-semibold text-slate-200 block hover:text-cyan-300 transition-colors">
                                {service.name}
                              </span>
                              <span className="text-[11px] text-slate-400 line-clamp-1">
                                {service.tagline}
                              </span>
                            </div>
                          </button>
                        ))}
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between bg-slate-900/40 -mx-5 -mb-5 p-4 rounded-b-2xl">
                        <span className="text-xs text-slate-400">
                          Need guidance on which service fits your current stage?
                        </span>
                        <button
                          onClick={() => {
                            setServicesDropdownOpen(false);
                            onOpenConsultation();
                          }}
                          className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 underline flex items-center gap-1"
                        >
                          Book a Strategy Call <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            const isActive = currentPage === link.page;
            return (
              <button
                key={link.page}
                onClick={() => onNavigate(link.page)}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive
                    ? 'text-cyan-300 bg-slate-800/60'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                }`}
                id={`nav-${link.page}-btn`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Primary CTA (Desktop) */}
        <div className="hidden lg:flex items-center space-x-3">
          <button
            onClick={() => onOpenConsultation()}
            className="relative group overflow-hidden px-5 py-2.5 rounded-xl brand-gradient text-white text-sm font-semibold shadow-lg shadow-blue-600/30 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2"
            id="nav-consultation-btn"
          >
            <span className="relative z-10 flex items-center gap-1.5">
              Get Free Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex lg:hidden items-center space-x-2">
          <button
            onClick={() => onOpenConsultation()}
            className="px-3 py-1.5 rounded-lg brand-gradient text-white text-xs font-semibold shadow-sm"
          >
            Consultation
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/80 focus:outline-none"
            id="mobile-menu-toggle-btn"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#0B1026] border-b border-slate-800 px-5 pt-3 pb-8 shadow-2xl max-h-[calc(100vh-65px)] overflow-y-auto">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate(link.page);
                }}
                className={`flex items-center justify-between py-3 px-3 rounded-lg text-base font-medium text-left ${
                  currentPage === link.page
                    ? 'text-cyan-300 bg-slate-800/60 font-semibold'
                    : 'text-slate-200 hover:bg-slate-800/40'
                }`}
              >
                <span>{link.label}</span>
                <ChevronDown className="w-4 h-4 -rotate-90 text-slate-500" />
              </button>
            ))}

            {/* Mobile Service Sub-links */}
            <div className="pt-2 pb-2 pl-3 border-l-2 border-slate-800 ml-3 space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 block px-2 py-1">
                All 9 Services
              </span>
              {SERVICES_LIST.map((srv) => (
                <button
                  key={srv.id}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onNavigate('service-detail', srv.id);
                  }}
                  className="w-full text-left px-2 py-1.5 text-xs text-slate-300 hover:text-cyan-300 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  {srv.name}
                </button>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-800/80 mt-2 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3 rounded-xl brand-gradient text-white text-sm font-semibold text-center flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30"
              >
                Get Free Consultation
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="text-center text-xs text-slate-400 pt-2">
                <p>{BRAND_INFO.phone}</p>
                <p className="text-slate-500">{BRAND_INFO.location}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
