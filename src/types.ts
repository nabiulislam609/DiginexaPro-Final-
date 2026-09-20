export type PageId =
  | 'home'
  | 'about'
  | 'services'
  | 'service-detail'
  | 'case-studies'
  | 'pricing'
  | 'blog'
  | 'blog-post'
  | 'contact';

export type PageRoute = PageId;

export type ServiceSlug =
  | 'seo'
  | 'local-seo'
  | 'facebook-ads'
  | 'google-ads'
  | 'social-media-marketing'
  | 'content-marketing'
  | 'ai-marketing'
  | 'growth-solutions'
  | 'website-development';

export interface ServiceItem {
  id: ServiceSlug;
  name: string;
  shortDescription: string;
  tagline: string;
  badge: string;
  iconName: string;
  heroVisualType: 'seo' | 'local' | 'facebook' | 'google' | 'social' | 'content' | 'ai' | 'growth' | 'web';
  fullDescription: string;
  idealFor: string[];
  deliverables: {
    title: string;
    description: string;
  }[];
  keyBenefits: string[];
  processSteps: {
    step: string;
    title: string;
    description: string;
  }[];
  metricsSummary: {
    label: string;
    value: string;
    sublabel: string;
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
}

export interface CaseStudy {
  id: string;
  title: string;
  clientIndustry: string;
  clientNamePlaceholder: string;
  summary: string;
  challenge: string;
  strategy: string;
  servicesUsed: string[];
  results: string[];
  metrics: {
    metric: string;
    before: string;
    after: string;
    change: string;
  }[];
  timeline: string;
  isPlaceholder: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string; // e.g. "[Client Name]"
  role: string;   // e.g. "Founder & Managing Director"
  company: string; // e.g. "[Company Name]"
  industry: string;
  isPlaceholder: boolean;
  avatarPlaceholderInitial: string;
  rating: number;
}

export interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  priceDisplay: string;
  billingNote: string;
  isPopular: boolean;
  ctaText: string;
  targetAudience: string;
  features: {
    name: string;
    included: boolean;
    tooltip?: string;
  }[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  content: string;
  readingTime: string;
  publishDate: string;
  author: string;
  authorRole: string;
  tags: string[];
}

export interface ConsultationFormData {
  name: string;
  businessName: string;
  email: string;
  phone: string;
  website: string;
  service: string;
  budget: string;
  message: string;
}
