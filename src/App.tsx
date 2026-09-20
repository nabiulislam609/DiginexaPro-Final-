import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TrustSection } from './components/TrustSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { HowWeWorkSection } from './components/HowWeWorkSection';
import { FeaturedFunnelSection } from './components/FeaturedFunnelSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { AiMarketingSection } from './components/AiMarketingSection';
import { LocalSeoSection } from './components/LocalSeoSection';
import { WebDevelopmentSection } from './components/WebDevelopmentSection';
import { PricingSection } from './components/PricingSection';
import { BlogSection } from './components/BlogSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { BlogDetailModal } from './components/BlogDetailModal';
import { AboutView } from './views/AboutView';
import { ServiceDetailView } from './views/ServiceDetailView';
import { PageRoute, ServiceSlug, BlogPost } from './types';
import { MessageCircle, Phone, Sparkles } from 'lucide-react';
import { BRAND_INFO } from './data/agencyData';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<ServiceSlug | null>(null);
  
  // Modals state
  const [isConsultationOpen, setIsConsultationOpen] = useState<boolean>(false);
  const [consultationPrefill, setConsultationPrefill] = useState<string | undefined>(undefined);
  const [consultationTitle, setConsultationTitle] = useState<string | undefined>(undefined);
  const [selectedBlogPost, setSelectedBlogPost] = useState<BlogPost | null>(null);

  // Scroll to top whenever route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentRoute, selectedServiceId]);

  const handleNavigate = (route: PageRoute) => {
    setSelectedServiceId(null);
    setCurrentRoute(route);
  };

  const handleSelectService = (serviceId: ServiceSlug) => {
    setSelectedServiceId(serviceId);
    setCurrentRoute('services');
  };

  const handleOpenConsultation = (serviceName?: string, customTitle?: string) => {
    setConsultationPrefill(serviceName);
    setConsultationTitle(customTitle || (serviceName ? `Get Free ${serviceName} Strategy` : 'Get Free Consultation'));
    setIsConsultationOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0B1026] text-slate-100 flex flex-col font-['Plus_Jakarta_Sans'] selection:bg-cyan-500 selection:text-white">
      
      {/* Top Banner for Strategy Call Offer */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white text-[11px] sm:text-xs py-2 px-4 text-center border-b border-blue-800/40 font-medium">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
          <span>
            <strong>DigiNexa Growth Advisory:</strong> Claim your complimentary 2025 Digital Competitive & SEO Audit (Valued at $450)
          </span>
          <button
            onClick={() => handleOpenConsultation(undefined, 'Claim Free 2025 Growth & SEO Audit')}
            className="underline text-cyan-300 hover:text-white font-bold ml-1"
          >
            Claim Audit →
          </button>
        </div>
      </div>

      {/* Primary Sticky Header */}
      <Navbar
        currentPage={currentRoute}
        selectedServiceSlug={selectedServiceId || undefined}
        onNavigate={(page, serviceSlug) => {
          if (serviceSlug) {
            handleSelectService(serviceSlug);
          } else {
            handleNavigate(page);
          }
        }}
        onOpenConsultation={(service) => handleOpenConsultation(service)}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        
        {/* If a specific service is selected, show the Service Detail View */}
        {selectedServiceId ? (
          <ServiceDetailView
            serviceId={selectedServiceId}
            onBack={() => setSelectedServiceId(null)}
            onSelectService={handleSelectService}
            onOpenConsultation={(svc) => handleOpenConsultation(svc)}
          />
        ) : (
          <>
            {/* Route: Home (Full comprehensive growth marketing agency landing experience) */}
            {currentRoute === 'home' && (
              <>
                <HeroSection
                  onOpenConsultation={() => handleOpenConsultation()}
                  onExploreServices={() => {
                    const servicesEl = document.getElementById('services-section');
                    if (servicesEl) {
                      servicesEl.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      handleNavigate('services');
                    }
                  }}
                />

                <TrustSection
                  onOpenConsultation={() => handleOpenConsultation(undefined, 'Claim Free Digital Marketing Audit')}
                />

                <ServicesSection
                  onSelectService={handleSelectService}
                  onOpenConsultation={(svc) => handleOpenConsultation(svc)}
                />

                <WhyChooseUsSection
                  onOpenConsultation={() => handleOpenConsultation(undefined, 'Schedule Strategy Call')}
                />

                <HowWeWorkSection
                  onOpenConsultation={() => handleOpenConsultation(undefined, 'Start 5-Stage Growth Program')}
                />

                <FeaturedFunnelSection
                  onOpenConsultation={() => handleOpenConsultation('Growth Solutions', 'Build My Custom Growth Engine')}
                />

                <CaseStudiesSection
                  onOpenConsultation={() => handleOpenConsultation(undefined, 'Apply for Case Study Partnership')}
                />

                <TestimonialsSection />

                <AiMarketingSection
                  onOpenConsultation={() => handleOpenConsultation('AI Marketing & Business Automation')}
                  onExploreAiService={() => handleSelectService('ai-marketing')}
                />

                <LocalSeoSection
                  onOpenConsultation={() => handleOpenConsultation('Local SEO & Google Maps')}
                  onExploreLocalSeoService={() => handleSelectService('local-seo')}
                />

                <WebDevelopmentSection
                  onOpenConsultation={() => handleOpenConsultation('Website Development')}
                  onExploreWebDevService={() => handleSelectService('website-development')}
                />

                <PricingSection
                  onOpenConsultation={(tier) => handleOpenConsultation(tier, `Inquire About ${tier || 'Custom Pricing'}`)}
                />

                <BlogSection
                  onSelectPost={(post) => setSelectedBlogPost(post)}
                />

                <FaqSection
                  onOpenConsultation={() => handleOpenConsultation()}
                />

                <ContactSection />
              </>
            )}

            {/* Route: About */}
            {currentRoute === 'about' && (
              <AboutView
                onOpenConsultation={() => handleOpenConsultation()}
                onExploreServices={() => handleNavigate('services')}
              />
            )}

            {/* Route: Services (Shows full services grid and allows clicking each) */}
            {currentRoute === 'services' && (
              <div className="pt-8">
                <ServicesSection
                  onSelectService={handleSelectService}
                  onOpenConsultation={(svc) => handleOpenConsultation(svc)}
                />
                <FeaturedFunnelSection
                  onOpenConsultation={() => handleOpenConsultation('Growth Solutions')}
                />
                <WhyChooseUsSection
                  onOpenConsultation={() => handleOpenConsultation()}
                />
              </div>
            )}

            {/* Route: Case Studies */}
            {currentRoute === 'case-studies' && (
              <div className="pt-8">
                <CaseStudiesSection
                  onOpenConsultation={() => handleOpenConsultation()}
                />
                <TestimonialsSection />
                <TrustSection
                  onOpenConsultation={() => handleOpenConsultation()}
                />
              </div>
            )}

            {/* Route: Pricing */}
            {currentRoute === 'pricing' && (
              <div className="pt-8">
                <PricingSection
                  onOpenConsultation={(tier) => handleOpenConsultation(tier)}
                />
                <FaqSection
                  onOpenConsultation={() => handleOpenConsultation()}
                />
              </div>
            )}

            {/* Route: Blog */}
            {currentRoute === 'blog' && (
              <div className="pt-8">
                <BlogSection
                  onSelectPost={(post) => setSelectedBlogPost(post)}
                />
              </div>
            )}

            {/* Route: Contact */}
            {currentRoute === 'contact' && (
              <div className="pt-8">
                <ContactSection />
                <FaqSection
                  onOpenConsultation={() => handleOpenConsultation()}
                />
              </div>
            )}
          </>
        )}

      </main>

      {/* Floating Action Button for Instant WhatsApp / Direct Call (Great for BD & Global Clients) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5">
        <button
          onClick={() => handleOpenConsultation(undefined, 'Instant Strategy Chat')}
          className="flex items-center gap-2.5 px-4 py-3 rounded-full brand-gradient text-white text-xs sm:text-sm font-bold shadow-2xl shadow-blue-600/50 hover:shadow-cyan-400/50 hover:scale-105 active:scale-95 transition-all group"
          id="floating-consult-btn"
          aria-label="Book Consultation"
        >
          <MessageCircle className="w-5 h-5 text-cyan-300 animate-pulse" />
          <span className="hidden sm:inline">Book Strategy Call</span>
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
        </button>
      </div>

      {/* Global Modals */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        prefilledService={consultationPrefill}
        defaultTitle={consultationTitle}
      />

      <BlogDetailModal
        post={selectedBlogPost}
        onClose={() => setSelectedBlogPost(null)}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Global Agency Footer */}
      <Footer
        onNavigate={handleNavigate}
        onSelectService={handleSelectService}
        onOpenConsultation={() => handleOpenConsultation()}
      />

    </div>
  );
}
