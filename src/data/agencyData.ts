import { ServiceItem, CaseStudy, Testimonial, PricingTier, BlogPost } from '../types';

export const BRAND_INFO = {
  name: 'DigiNexa',
  slogan: 'Strategy. Innovation. Growth.',
  tagline: 'Strategy. Innovation. Growth.',
  heroHeading: 'Grow Your Business With Smarter Digital Marketing',
  heroSubheading:
    'From SEO and paid advertising to social media, AI marketing, content and web development, DigiNexa creates data-driven digital strategies that turn visibility into real business growth.',
  finalMessage: 'Smarter Digital Marketing. Stronger Business Growth.',
  mission: 'To empower ambitious businesses to scale and thrive in the modern digital economy by combining rigorous data analytics, high-converting creative design, and transformative AI technology.',
  vision: 'To become a globally recognized digital marketing and technology agency celebrated for strategic innovation, radical transparency, and measurable business growth.',
  email: 'contact@diginexa.agency',
  phone: '+880 1700-000000',
  secondaryPhone: '+1 (800) 555-NEXA',
  location: 'Gulshan 2, Dhaka 1212, Bangladesh',
  serviceCoverage: 'Serving Bangladesh & International Markets Worldwide',
  workingHours: 'Sunday – Thursday: 9:00 AM – 7:00 PM (BST) | Global 24/7 Client Support',
  socialLinks: {
    facebook: 'https://facebook.com/diginexa',
    linkedin: 'https://linkedin.com/company/diginexa',
    instagram: 'https://instagram.com/diginexa',
    youtube: 'https://youtube.com/@diginexa'
  }
};

export const TRUST_PILLARS = [
  {
    id: 'strategy',
    title: 'Digital Strategy',
    subtitle: 'Holistic Roadmaps',
    description: 'Every action is anchored in thorough industry benchmarking, competitor intelligence, and clear ROI milestones.',
    iconName: 'Compass'
  },
  {
    id: 'data-driven',
    title: 'Data Driven',
    subtitle: 'Zero Guesswork',
    description: 'Granular tracking across all touchpoints turns raw performance data into actionable growth levers.',
    iconName: 'BarChart3'
  },
  {
    id: 'result-focused',
    title: 'Result Focused',
    subtitle: 'Revenue First',
    description: 'We optimize for revenue, pipeline quality, and customer acquisition cost rather than superficial vanity metrics.',
    iconName: 'Target'
  },
  {
    id: 'client-centric',
    title: 'Client Centric',
    subtitle: 'Dedicated Partnership',
    description: 'Transparent communication, direct strategist access, and agile execution tailored to your market realities.',
    iconName: 'Users'
  }
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'seo',
    name: 'SEO (Search Engine Optimization)',
    badge: 'Organic Search Authority',
    tagline: 'Improve search visibility and attract high-intent organic traffic.',
    shortDescription: 'Comprehensive technical, on-page, and off-page SEO engineered to capture high-converting organic search queries and dominate competitive keywords.',
    iconName: 'Search',
    heroVisualType: 'seo',
    fullDescription: 'Our Search Engine Optimization practice combines technical site architecture audits, semantic search indexing, topical authority mapping, and high-quality link acquisition. We focus on search intent that delivers qualified inbound leads and durable keyword equity rather than temporary traffic spikes.',
    idealFor: [
      'B2B firms looking for continuous organic qualified leads',
      'E-commerce brands striving to decrease reliance on paid ads',
      'Healthcare, education, and professional service providers',
      'Startups building long-term search engine domain authority'
    ],
    deliverables: [
      { title: 'Comprehensive Technical SEO Audit', description: 'Deep crawl analysis of indexation, Core Web Vitals, site speed, crawl budget, and schema architecture.' },
      { title: 'Topical Authority & Semantic Keyword Mapping', description: 'Strategic clustering of primary, secondary, and transactional keywords aligned with buyer journey stages.' },
      { title: 'On-Page Optimization & Content Engineering', description: 'Meta tags, heading hierarchy, semantic structure, internal linking graph, and schema markup.' },
      { title: 'Authoritative Digital PR & Backlink Strategy', description: 'Editorial outreach, unlinked brand mention reclamation, and high-trust contextual backlink acquisition.' },
      { title: 'Monthly Executive SEO Intelligence Report', description: 'Keyword rank movement, organic click-through trends, organic revenue attribution, and next sprints.' }
    ],
    keyBenefits: [
      'Sustainable compounding traffic that lowers cost per acquisition over time',
      'High-intent search traffic with noticeably higher conversion propensity',
      'Improved Google Core Web Vitals score and site performance',
      'Competitive moat against rivals in Bangladeshi and global search results'
    ],
    processSteps: [
      { step: '01', title: 'Technical & Competitive Audit', description: 'Identify crawling bottlenecks, search visibility gaps, and competitor keyword positioning.' },
      { step: '02', title: 'Keyword & Content Architecture', description: 'Develop topic clusters, transactional landing page roadmaps, and content blueprints.' },
      { step: '03', title: 'On-Page & Speed Optimization', description: 'Implement code refactoring, schema tags, meta optimization, and internal link routing.' },
      { step: '04', title: 'Authority Building & Digital PR', description: 'Secure editorial mentions and contextual backlinks from respected industry publications.' },
      { step: '05', title: 'Continuous Crawl & Conversion Tracking', description: 'Weekly ranking checks, search console health monitoring, and organic lead attribution.' }
    ],
    metricsSummary: [
      { label: 'Organic Traffic Growth', value: '+185%', sublabel: 'Average 6-month compounding increase' },
      { label: 'Top 3 Keyword Rankings', value: '74%', sublabel: 'Of tracked transactional keywords' },
      { label: 'Cost Per Acquisition Drop', value: '-42%', sublabel: 'Vs. outbound marketing averages' }
    ],
    faq: [
      { question: 'How long does SEO take to produce measurable results?', answer: 'SEO is a compounding growth strategy. Most clients begin seeing indexing and ranking improvements within 60-90 days, with significant traffic and revenue growth between months 4 through 9 depending on domain history and market competition.' },
      { question: 'Do you optimize for local Bangladeshi search as well as international?', answer: 'Yes! We run dual-track SEO campaigns configured for both local Bengali & English intent in Bangladesh as well as high-value international markets like the US, UK, Canada, and Australia.' },
      { question: 'Do you guarantee #1 rankings on Google?', answer: 'No honest agency can guarantee specific #1 positions because Google search algorithms update constantly. What DigiNexa guarantees is strict adherence to white-hat best practices, transparent data reporting, and proven methodology that consistently delivers revenue-driving rank gains.' }
    ]
  },
  {
    id: 'local-seo',
    name: 'Local SEO & Maps Optimization',
    badge: 'Hyperlocal Domination',
    tagline: 'Help local businesses appear in Google Search and Google Maps when nearby customers are searching.',
    shortDescription: 'Dominate Google Local 3-Pack, Google Maps, and local search queries so nearby customers find and choose your business first.',
    iconName: 'MapPin',
    heroVisualType: 'local',
    fullDescription: 'Local SEO is vital for physical storefronts, clinics, restaurants, law practices, educational institutions, and regional service providers. DigiNexa optimizes your Google Business Profile (GBP), standardizes multi-platform NAP (Name, Address, Phone) citations, deploys localized schema markup, and orchestrates authentic customer review acquisition.',
    idealFor: [
      'Clinics, hospitals, and wellness centers in metropolitan hubs',
      'Restaurants, cafés, and retail chains across multiple locations',
      'Law firms, accounting practices, and financial consultancies',
      'Home service providers, interior design studios, and automotive workshops'
    ],
    deliverables: [
      { title: 'Google Business Profile (GBP) Full Optimization', description: 'Complete profile configuration with secondary categories, geotagged photos, service menus, and products.' },
      { title: 'Local 3-Pack Map Ranking Strategy', description: 'Geo-grid rank tracking, proximity signal optimization, and local relevance keyword injection.' },
      { title: 'Consistent NAP Citation Syndication', description: 'Listing verification and clean-up across top local directories, business registries, and map aggregators.' },
      { title: 'Review Generation & Reputation Architecture', description: 'Automated SMS/Email review request flows and professional response frameworks.' },
      { title: 'Localized Landing Pages & Geo Schema', description: 'City, neighborhood, and branch-specific pages with LocalBusiness structured JSON-LD data.' }
    ],
    keyBenefits: [
      'Top-tier placement in Google Local Map 3-Pack for "near me" searches',
      'Direct incoming phone calls, map direction requests, and in-person footfall',
      'Authentic review reputation that dramatically elevates customer trust',
      'Eliminates duplicate or contradictory business information across web directories'
    ],
    processSteps: [
      { step: '01', title: 'Local Presence & Citation Audit', description: 'Audit GBP health, photo quality, duplicate listings, and directory citation inconsistencies.' },
      { step: '02', title: 'Profile & Schema Engineering', description: 'Revamp GBP attributes, embed local schema markup, and structure localized URL paths.' },
      { step: '03', title: 'Local Citation Building', description: 'Submit verified business credentials to high-authority local and international business directories.' },
      { step: '04', title: 'Review Velocity Program', description: 'Implement automated review gathering sequences compliant with Google review policies.' },
      { step: '05', title: 'Proximity Grid Tracking', description: 'Monitor rank radius across neighborhood coordinates to expand local search reach.' }
    ],
    metricsSummary: [
      { label: 'Google Maps Call Growth', value: '+210%', sublabel: 'Direct phone inquiries from Map pack' },
      { label: 'Local 3-Pack Dominance', value: '88%', sublabel: 'Coverage within targeted city radius' },
      { label: 'Direction Requests', value: '+165%', sublabel: 'Verified footfall intent increase' }
    ],
    faq: [
      { question: 'What is the Google Local 3-Pack?', answer: 'The Google Local 3-Pack is the boxed section featuring three local business listings with a map that appears at the very top of Google search results for local queries. Capturing one of these 3 slots yields the majority of phone calls and direction requests.' },
      { question: 'How do you handle multi-location businesses?', answer: 'We create individual branch location architectures, verify each GBP listing, syndicate location-specific citations, and deploy localized geo-schema for each outlet.' }
    ]
  },
  {
    id: 'facebook-ads',
    name: 'Facebook & Meta Ads',
    badge: 'High-ROAS Paid Social',
    tagline: 'Create targeted campaigns designed to generate leads, sales and brand awareness.',
    shortDescription: 'Data-backed paid Meta campaigns across Facebook and Instagram with high-converting creative testing, audience segmentation, and full-funnel pixel tracking.',
    iconName: 'Facebook',
    heroVisualType: 'facebook',
    fullDescription: 'Meta advertising requires precision creative strategy, robust Conversion API (CAPI) infrastructure, and relentless testing. DigiNexa builds end-to-end paid social funnels: thumb-stopping short video creatives, dynamic catalog ads, customized lookalike cohorts, and automated retargeting sequences that maximize return on ad spend (ROAS).',
    idealFor: [
      'D2C and e-commerce brands looking to scale monthly gross merchandise value',
      'B2B companies seeking high-intent lead form submissions with qualification filters',
      'Real estate developers showcasing residential or commercial properties',
      'Event organizers and educational academies driving enrollment'
    ],
    deliverables: [
      { title: 'Full Meta Pixel & Conversions API (CAPI) Integration', description: 'Server-side tracking setup for 100% data fidelity bypassing iOS privacy blockages.' },
      { title: 'High-Impact Creative Production & Copywriting', description: 'Motion graphics, video hook variations, problem-solution angles, and persuasive ad copy.' },
      { title: 'Audience Research & Laser Segmentation', description: 'Custom audiences, high-value LTV lookalikes, affinity groups, and exclusion logic.' },
      { title: 'Full-Funnel Campaign Architecture', description: 'Top-of-funnel brand discovery, middle-of-funnel consideration, and dynamic bottom-of-funnel retargeting.' },
      { title: 'Bid Management & ROAS Scaling', description: 'Daily budget optimization, cost-cap testing, and horizontal scaling strategies.' }
    ],
    keyBenefits: [
      'Predictable, scalable pipeline of inbound customer leads and product orders',
      'Complete tracking transparency with first-party attribution data',
      'Rapid creative iteration to combat ad fatigue and maintain low CPMs',
      'Deep engagement with Bangladesh’s massive active Facebook user base & global audiences'
    ],
    processSteps: [
      { step: '01', title: 'Audience & Offer Discovery', description: 'Analyze customer unit economics, profit margins, and winning value propositions.' },
      { step: '02', title: 'Tracking Infrastructure Setup', description: 'Deploy Conversions API, event deduplication, and custom conversion events.' },
      { step: '03', title: 'Creative Batch Production', description: 'Script and design 10+ hook variations, static carousels, and high-energy video ads.' },
      { step: '04', title: 'Controlled Testing Phase', description: 'Run multivariate tests on headlines, hooks, and audience segments to identify winners.' },
      { step: '05', title: 'Vertical & Horizontal Scaling', description: 'Systematically increase budgets on winning combinations while keeping target ROAS intact.' }
    ],
    metricsSummary: [
      { label: 'Average Meta ROAS', value: '4.6x', sublabel: 'Across active e-commerce client campaigns' },
      { label: 'Cost Per Qualified Lead', value: '-38%', sublabel: 'Through conversational lead forms' },
      { label: 'First-Week Attribution', value: '99.4%', sublabel: 'Server-side Conversions API fidelity' }
    ],
    faq: [
      { question: 'What minimum ad budget do you recommend for Facebook Ads?', answer: 'We advise starting with a test budget that allows statistically significant data collection — typically minimum $300 to $1,000/month for localized campaigns, or higher for international scaling. Our agency fee is separate from your direct media spend.' },
      { question: 'Do you create the ad creatives and videos as well?', answer: 'Yes, our team handles ad scripting, visual motion design, video hook editing, and conversion copy tailored specifically to social feeds.' }
    ]
  },
  {
    id: 'google-ads',
    name: 'Google Ads & PPC Management',
    badge: 'High-Intent Search & PMax',
    tagline: 'Reach customers actively searching for your products and services.',
    shortDescription: 'Precision Google Search, Performance Max, Display, and YouTube campaigns capturing high-intent searchers at the exact moment of decision.',
    iconName: 'Sparkles',
    heroVisualType: 'google',
    fullDescription: 'Google Ads connects your business with prospects who have immediate commercial intent. DigiNexa plans and executes disciplined PPC strategies across Search, Performance Max, Display Network, and YouTube. We implement negative keyword guardrails, smart bidding scripts, offline conversion tracking, and high-converting landing page pairings.',
    idealFor: [
      'High-ticket service firms where each new client represents substantial revenue',
      'Urgent or emergency service providers (legal, medical, repair, logistics)',
      'SaaS platforms acquiring trial users or enterprise demo bookings',
      'E-commerce merchants scaling through Google Shopping and Performance Max'
    ],
    deliverables: [
      { title: 'Search Intent & Competitor Keyword Architecture', description: 'Granular single-theme ad groups, exact match anchors, and extensive negative keyword lists.' },
      { title: 'Performance Max (PMax) Asset Optimization', description: 'High-grade image assets, engaging headlines, audience signals, and product feed synchronization.' },
      { title: 'Conversion Tracking & Offline Value Tagging', description: 'Google Tag Manager setup, enhanced conversions, and CRM revenue sync.' },
      { title: 'Compelling Ad Copy & Sitelink Extensions', description: 'Callouts, structured snippets, price assets, and promo tags maximizing CTR.' },
      { title: 'Quality Score & Bid Strategy Optimization', description: 'Landing page relevance matching and target CPA / target ROAS algorithmic tuning.' }
    ],
    keyBenefits: [
      'Instant visibility at the very top of Google for competitive commercial keywords',
      'Zero wasted spend through rigorous negative keyword curation',
      'High-quality score ratings resulting in lower Cost-Per-Click (CPC) than rivals',
      'Direct attribution connecting ad spend directly to closed deals'
    ],
    processSteps: [
      { step: '01', title: 'Search Volume & Intent Modeling', description: 'Analyze high-CPC keywords, competitor bid strategies, and transactional queries.' },
      { step: '02', title: 'Conversion Tracking Setup', description: 'Deploy Google Enhanced Conversions and call-tracking scripts.' },
      { step: '03', title: 'Ad Copy & Asset Group Build', description: 'Craft persuasive responsive search ads (RSAs) with dynamic keyword insertion.' },
      { step: '04', title: 'Negative Keyword Filtering', description: 'Eliminate non-commercial queries, job seekers, and informational tyre-kickers.' },
      { step: '05', title: 'Smart Bidding Calibration', description: 'Scale toward optimal Target ROAS / Target CPA as machine learning accumulates conversion history.' }
    ],
    metricsSummary: [
      { label: 'Average Search CTR', value: '7.8%', sublabel: 'Well above industry average (3.2%)' },
      { label: 'Conversion Rate', value: '9.4%', sublabel: 'On purpose-built PPC landing pages' },
      { label: 'Quality Score Average', value: '8.7 / 10', sublabel: 'Yielding reduced CPC costs' }
    ],
    faq: [
      { question: 'Why choose Google Ads over Facebook Ads?', answer: 'Google Ads targets "pull" demand — people already searching for your exact service right now. Facebook Ads targets "push" demand — discovering interested people based on demographics and behavior. Most successful businesses deploy both together for full-funnel dominance.' },
      { question: 'Who pays Google for the ad clicks?', answer: 'You pay Google directly via your own billing account with your credit card or payment method. DigiNexa manages the campaigns, audits, assets, and optimizations under a transparent agency management fee.' }
    ]
  },
  {
    id: 'social-media-marketing',
    name: 'Social Media Marketing & Management',
    badge: 'Brand Authority & Engagement',
    tagline: 'Build a strong social presence with strategic content and audience engagement.',
    shortDescription: 'Strategic social content, aesthetic brand identity, community cultivation, and viral short-form video that turns followers into passionate brand advocates.',
    iconName: 'Share2',
    heroVisualType: 'social',
    fullDescription: 'Social media is the digital storefront of your company’s culture and credibility. DigiNexa curates and manages end-to-end social media operations across LinkedIn, Facebook, Instagram, YouTube, and TikTok. We design visually striking content pillars, write engaging copy, produce viral reels/shorts, and engage with your community daily.',
    idealFor: [
      'Brands aiming to establish undisputed industry thought leadership',
      'Consumer products requiring authentic visual storytelling and user-generated content',
      'Corporate entities and founders building strong personal/executive branding',
      'Businesses wanting a lively, responsive customer relationship channel'
    ],
    deliverables: [
      { title: 'Monthly Strategic Content Calendar', description: 'Curated mix of educational carousels, entertaining reels, case studies, and brand storytelling.' },
      { title: 'Premium Graphic Design & Motion Assets', description: 'On-brand visual identity guidelines, custom templates, vector infographics, and banners.' },
      { title: 'Short-Form Video Production (Reels & Shorts)', description: 'Scripting, editing, dynamic subtitles, and audio trends optimized for maximum algorithmic reach.' },
      { title: 'Proactive Community Moderation & DM Handling', description: 'Prompt replies to comments, incoming messages, and customer inquiries.' },
      { title: 'Growth & Sentiment Analytics Review', description: 'Audience demographic shifts, engagement rate trends, and viral reach breakdowns.' }
    ],
    keyBenefits: [
      'Elevates your brand perception from a generic vendor to a market leader',
      'Consistent posting schedule with zero stress or operational overhead for your team',
      'Organic virality through algorithm-optimized short-form video storytelling',
      'Direct customer feedback loop that guides product and service enhancements'
    ],
    processSteps: [
      { step: '01', title: 'Brand Voice & Aesthetic Definition', description: 'Establish color harmony, tone of voice, visual motifs, and competitor white-space.' },
      { step: '02', title: 'Content Pillar Construction', description: 'Define thematic buckets: Proof of Work, Educational Value, Founder Story, and Product Spotlights.' },
      { step: '03', title: 'Production & Asset Approval', description: 'Deliver batches of graphics and videos 10 days before scheduled publication for your review.' },
      { step: '04', title: 'Multi-Channel Scheduling', description: 'Publish at peak algorithmic audience activity windows across all target platforms.' },
      { step: '05', title: 'Engagement & Iteration', description: 'Engage actively in comments, analyze top-performing formats, and double down on winning hooks.' }
    ],
    metricsSummary: [
      { label: 'Follower Growth Rate', value: '+340%', sublabel: 'Organic year-over-year expansion' },
      { label: 'Average Engagement Rate', value: '5.2%', sublabel: 'Exceeds standard 1.5% benchmarks' },
      { label: 'Inbound Inquiries Generated', value: '45+', sublabel: 'Monthly direct message lead conversations' }
    ],
    faq: [
      { question: 'Which social media platforms do you specialize in?', answer: 'We cover Facebook, Instagram, LinkedIn, YouTube, and TikTok, tailored to where your specific target audience spends their attention.' }
    ]
  },
  {
    id: 'content-marketing',
    name: 'Content Marketing & Copywriting',
    badge: 'Authority & Conversion Copy',
    tagline: 'Create valuable content that attracts, educates and converts your target audience.',
    shortDescription: 'High-authority blog articles, conversion-focused website copy, lead magnets, whitepapers, and email newsletters that turn readers into buyers.',
    iconName: 'FileText',
    heroVisualType: 'content',
    fullDescription: 'Content is the backbone of all modern customer journeys. DigiNexa’s team of veteran copywriters and content strategists craft editorial pieces, sales letters, case study breakdowns, and email sequences that educate your market, dismantle buyer skepticism, and establish your brand as the definitive authority in your niche.',
    idealFor: [
      'Complex B2B solutions requiring consultative education before purchase',
      'Founders wanting authoritative ghostwritten LinkedIn or website thought leadership',
      'E-commerce brands seeking persuasive product storytelling and founder letters',
      'Websites in competitive sectors needing high-value topical content clusters'
    ],
    deliverables: [
      { title: 'Topical Content Strategy & Keyword Mapping', description: 'Data-driven editorial roadmap targeting key information-seeking and buyer intent queries.' },
      { title: 'Long-Form Authority Articles (1,500 - 3,500 words)', description: 'Meticulously researched, original guides infused with internal SME interviews and data graphs.' },
      { title: 'High-Converting Landing Page Sales Copy', description: 'Compelling benefit headlines, value stacks, objection-busting FAQs, and persuasive CTAs.' },
      { title: 'Automated Lead Nurturing Email Sequences', description: 'Welcome series, abandoned cart recovery, educational drips, and product launch sequences.' },
      { title: 'Downloadable Lead Magnets & Playbooks', description: 'Gated PDF guides, industry benchmark checklists, and interactive calculators.' }
    ],
    keyBenefits: [
      'Establishes durable brand credibility and authoritative industry prestige',
      'Pre-qualifies prospects before they ever get on a sales call with your team',
      'Powers evergreen organic search traffic and social distribution assets',
      'Significantly lifts conversion rates across all website landing pages'
    ],
    processSteps: [
      { step: '01', title: 'Audience Pain-Point Mining', description: 'Audit customer reviews, Reddit forums, sales recordings, and competitor commentary.' },
      { step: '02', title: 'Content Outline & Research', description: 'Structure comprehensive drafts with unique data hooks, visual mockups, and expert quotes.' },
      { step: '03', title: 'Copywriting & Semantic Polish', description: 'Craft crisp, jargon-free prose calibrated for maximum readability and emotional resonance.' },
      { step: '04', title: 'Visual Formatting & Publishing', description: 'Incorporate pull-quotes, bespoke graphics, callout boxes, and conversion trigger links.' },
      { step: '05', title: 'Multi-Format Repurposing', description: 'Slice each long-form article into 5 social posts, an email newsletter, and an infographic.' }
    ],
    metricsSummary: [
      { label: 'Time On Page', value: '4m 18s', sublabel: 'High reading engagement and retention' },
      { label: 'Newsletter Open Rate', value: '41.2%', sublabel: 'Substantially above industry 21% norm' },
      { label: 'Lead Magnet Opt-In Rate', value: '18.6%', sublabel: 'On dedicated content squeeze pages' }
    ],
    faq: [
      { question: 'Do you write both in English and Bengali?', answer: 'Yes! We produce fluent, grammatically flawless, culturally nuanced copy in both professional English (US/UK conventions) and modern standard Bengali.' }
    ]
  },
  {
    id: 'ai-marketing',
    name: 'AI Marketing & Business Solutions',
    badge: 'Next-Gen Intelligence',
    tagline: 'Use AI-powered tools, automation, analytics and smart strategies to improve marketing efficiency and business growth.',
    shortDescription: 'Deploy cutting-edge artificial intelligence, marketing automation workflows, predictive analytics, and smart agents to multiply marketing efficiency.',
    iconName: 'Cpu',
    heroVisualType: 'ai',
    fullDescription: 'The modern agency must master the convergence of human creative judgment and automated machine intelligence. DigiNexa integrates custom AI marketing stacks: automated conversational lead qualifications, predictive customer churn analytics, dynamic creative generation, automated CRM workflows, and intelligent business intelligence dashboards.',
    idealFor: [
      'Forward-thinking companies looking to reduce operational overhead',
      'E-commerce brands seeking personalized product recommendation engines',
      'High-volume sales teams needing instant 24/7 AI lead qualification',
      'Enterprises needing automated multi-channel reporting and real-time alerts'
    ],
    deliverables: [
      { title: 'AI Marketing Audit & Stack Architecture', description: 'Identify high-leverage workflows ripe for intelligent automation across your marketing pipeline.' },
      { title: 'Automated 24/7 Conversational AI Lead Qualifiers', description: 'Smart WhatsApp, Messenger, and web chat agents that book meetings directly into your calendar.' },
      { title: 'Predictive Audience & LTV Segmentation', description: 'Machine learning algorithms that predict highest-value customer segments before campaign launch.' },
      { title: 'AI-Enhanced Creative & Copy Production Pipelines', description: 'Streamlined multi-variant generation for continuous split testing with human editorial review.' },
      { title: 'Automated CRM & Multi-Channel Workflows', description: 'Integrations across HubSpot, Zapier, Make, and Meta for zero-latency lead routing.' }
    ],
    keyBenefits: [
      'Substantially lowers human labor hours spent on repetitive manual data entry',
      'Instant response time to inbound customer inquiries (under 60 seconds 24/7)',
      'Deeper predictive insights into customer buying cycles and churn likelihood',
      'Future-proofs your organization against rapid digital market shifts'
    ],
    processSteps: [
      { step: '01', title: 'Workflow & Friction Audit', description: 'Map out lead handoffs, manual communication bottlenecks, and repetitive tasks.' },
      { step: '02', title: 'AI Architecture Blueprint', description: 'Select the optimal LLMs, vector knowledge bases, and API webhook integrations.' },
      { step: '03', title: 'Custom Agent Training', description: 'Train conversational agents strictly on your brand guidelines, product catalogs, and policies.' },
      { step: '04', title: 'Workflow Integration & Testing', description: 'Connect agents with your CRM, Google Sheets, WhatsApp Business API, and email servers.' },
      { step: '05', title: 'Continuous Machine Optimization', description: 'Monitor prompt accuracy, conversion completion rates, and system latency.' }
    ],
    metricsSummary: [
      { label: 'Lead Response Time', value: '< 45 sec', sublabel: 'Instant 24/7 automated qualification' },
      { label: 'Team Operational Hours Saved', value: '35+ hrs/wk', sublabel: 'Through automated CRM pipelines' },
      { label: 'Conversion Lift', value: '+31%', sublabel: 'From real-time automated follow-up speeds' }
    ],
    faq: [
      { question: 'Will AI replace our marketing team?', answer: 'No. AI amplifies your team by removing tedious manual tasks like manual data entry, formatting, and initial triage, freeing up your human team to focus on strategic relationships, creative storytelling, and high-level negotiation.' }
    ]
  },
  {
    id: 'growth-solutions',
    name: 'Growth Solutions & Consulting',
    badge: 'Holistic Revenue Growth',
    tagline: 'Develop customized digital strategies focused on sustainable business growth.',
    shortDescription: 'Holistic growth engineering, unit economics optimization, retention loops, and multi-channel marketing roadmaps designed for sustainable scale.',
    iconName: 'TrendingUp',
    heroVisualType: 'growth',
    fullDescription: 'Growth is not an isolated tactic or a single ad campaign — it is a cohesive system encompassing acquisition, activation, retention, referral, and revenue (the AARRR pirate metrics). DigiNexa acts as your fractional Chief Marketing Officer and growth partner, aligning your sales, marketing, and product operations toward verifiable EBITDA and revenue expansion.',
    idealFor: [
      'Series A / bootstrapped startups preparing for accelerated market penetration',
      'Established mid-market enterprises modernizing legacy marketing departments',
      'Founders seeking a high-caliber strategic partner rather than just task-takers',
      'Businesses experiencing plateaus in customer acquisition or lifetime value'
    ],
    deliverables: [
      { title: 'Full-Funnel Unit Economics & CAC:LTV Modeling', description: 'Rigorous financial breakdown of customer acquisition costs, payback periods, and churn rates.' },
      { title: 'Omnichannel Go-To-Market Growth Roadmap', description: '12-month prioritized execution sprint combining paid, earned, shared, and owned media.' },
      { title: 'Conversion Rate Optimization (CRO) Roadmaps', description: 'Heatmap recordings, user testing interviews, checkout drop-off audits, and A/B test plans.' },
      { title: 'Customer Retention & Referral Loop Design', description: 'Loyalty programs, post-purchase onboarding sequences, and viral referral mechanisms.' },
      { title: 'Bi-Weekly Executive Growth Sprints & Board Reviews', description: 'Direct strategic sessions with senior growth principals to analyze key KPI velocities.' }
    ],
    keyBenefits: [
      'Eliminates wasted capital spent on disjointed, uncoordinated agency vendors',
      'Deep alignment between marketing campaigns and company bottom-line revenue',
      'Clear, predictable customer acquisition math and payback timeline visibility',
      'Agile tactical pivots based on live performance data rather than quarterly assumptions'
    ],
    processSteps: [
      { step: '01', title: 'Growth Diagnostic & Unit Economics', description: 'Evaluate current CAC, LTV, conversion bottlenecks, and customer churn drivers.' },
      { step: '02', title: 'Growth Model & Channel Fit', description: 'Determine the highest-probability growth vectors (SEO, paid ads, outbound, partnerships).' },
      { step: '03', title: 'Sprint Prioritization (ICE Framework)', description: 'Score initiatives by Impact, Confidence, and Ease to execute highest ROI quick-wins first.' },
      { step: '04', title: 'Cross-Functional Execution', description: 'Coordinate creative, tech, analytics, and sales workflows in 14-day rapid cycles.' },
      { step: '05', title: 'Compounding Scale & Moat Building', description: 'Institutionalize winning playbooks and scale capital allocation profitably.' }
    ],
    metricsSummary: [
      { label: 'Average Revenue Acceleration', value: '+284%', sublabel: 'Over 12-month growth partnership cycles' },
      { label: 'CAC Payback Period', value: '< 90 Days', sublabel: 'Down from 6+ months initially' },
      { label: 'LTV Expansion', value: '+47%', sublabel: 'Through automated retention sequences' }
    ],
    faq: [
      { question: 'What makes Growth Solutions different from standard marketing packages?', answer: 'Standard marketing sells you deliverables (e.g. 5 posts a week or an ad campaign). Our Growth Solutions look at your complete business machine: your pricing model, conversion funnel, retention cohorts, and unit economics to drive real, sustainable profit.' }
    ]
  },
  {
    id: 'website-development',
    name: 'Website Development & UI/UX',
    badge: 'Fast, Modern & Conversion-First',
    tagline: 'Build fast, responsive, SEO-friendly and conversion-focused websites.',
    shortDescription: 'High-speed, beautifully designed, mobile-responsive web experiences built on modern frameworks, engineered specifically for high conversion rates and technical SEO.',
    iconName: 'Layout',
    heroVisualType: 'web',
    fullDescription: 'Your website is the central engine of your entire digital presence. DigiNexa designs and develops lightning-fast, visually stunning, mobile-first websites. We engineer every page with clean semantic code, intuitive UI/UX, accessibility compliance, instant Core Web Vitals loading speeds, and battle-tested conversion architecture.',
    idealFor: [
      'Brands embarrassed by an outdated, sluggish, or non-responsive legacy website',
      'High-growth e-commerce merchants needing high-converting storefronts',
      'B2B firms and consultancies requiring a world-class professional presence',
      'Companies needing custom web applications, calculators, or client portals'
    ],
    deliverables: [
      { title: 'Custom UI/UX Wireframing & Prototype Design', description: 'Figma-crafted user journeys, responsive layouts, micro-interactions, and design systems.' },
      { title: 'Full Responsive Mobile & Tablet Engineering', description: 'Pixel-perfect mobile adaptation with touch-optimized navigation and fast assets.' },
      { title: 'Core Web Vitals & Speed Optimization (95+ score)', description: 'Modern Jamstack, Next.js, or lightweight headless builds loading under 1.5 seconds.' },
      { title: 'Technical SEO Built-In Architecture', description: 'Clean semantic HTML5, breadcrumb schema, OpenGraph tags, and sitemap generation.' },
      { title: 'CMS Integration & Easy Client Handover', description: 'Intuitive content management allowing your internal team to effortlessly edit pages and blogs.' }
    ],
    keyBenefits: [
      'Dramatically elevates perceived brand value and international credibility',
      'Sub-second load times that slash bounce rates and improve Google rankings',
      'Clear, distraction-free visual paths that direct visitors into inquiry forms and checkouts',
      'Bank-grade security standards with zero bloatware or unmaintained plugins'
    ],
    processSteps: [
      { step: '01', title: 'Information Architecture & UX Wireframes', description: 'Map user journeys, site hierarchy, conversion goals, and content wireframes.' },
      { step: '02', title: 'High-Fidelity Visual UI Design', description: 'Craft modern typography, brand colors, glassmorphic cards, and interactive states.' },
      { step: '03', title: 'Clean Component Development', description: 'Code with React, TypeScript, modern CSS, and lightweight animations.' },
      { step: '04', title: 'Cross-Device & Cross-Browser Testing', description: 'Rigorous quality assurance across iOS, Android, macOS, Windows, Chrome, Safari, and Firefox.' },
      { step: '05', title: 'SEO Pre-Launch Audit & Go-Live', description: 'Configure 301 redirects, schema markup, SSL certificates, and Google Analytics 4 tags.' }
    ],
    metricsSummary: [
      { label: 'Core Web Vitals Score', value: '98 / 100', sublabel: 'Google Lighthouse Performance rating' },
      { label: 'Average Bounce Rate Drop', value: '-35%', sublabel: 'Through snappy mobile UX and fast load' },
      { label: 'Form Conversion Lift', value: '+44%', sublabel: 'From optimized single-column lead capture' }
    ],
    faq: [
      { question: 'What technologies do you use for website development?', answer: 'We build with modern, high-performance web frameworks including React, Next.js, Vite, TypeScript, and modern headless CMS platforms (or WordPress if requested for specific content team workflows).' },
      { question: 'Will the website be mobile-friendly and fast?', answer: 'Absolutely. Every site we build is mobile-first, responsive across all screen sizes, and optimized to pass Google Core Web Vitals with flying colors.' }
    ]
  }
];

export const WHY_CHOOSE_US = [
  {
    id: 'strategy-first',
    title: 'Strategy First',
    description: 'Every campaign begins with research and a clear strategy. We never launch ads or code without understanding your market.',
    iconName: 'Compass',
    gradient: 'from-blue-500 to-indigo-600'
  },
  {
    id: 'data-driven',
    title: 'Data Driven',
    description: 'Use analytics and performance data to make better marketing decisions, eliminating guesswork and wasted budget.',
    iconName: 'BarChart2',
    gradient: 'from-indigo-500 to-violet-600'
  },
  {
    id: 'ai-human',
    title: 'AI + Human Expertise',
    description: 'Combine modern AI tools with human creativity and strategic thinking for unprecedented speed and creative depth.',
    iconName: 'BrainCircuit',
    gradient: 'from-violet-500 to-cyan-500'
  },
  {
    id: 'custom-solutions',
    title: 'Customized Solutions',
    description: 'No one-size-fits-all marketing packages. Every client receives an agile strategy tailored to their distinct goals and unit economics.',
    iconName: 'Sliders',
    gradient: 'from-cyan-500 to-blue-500'
  },
  {
    id: 'transparent-reporting',
    title: 'Transparent Reporting',
    description: 'Provide clear and understandable performance reports with direct access to live dashboards, metrics, and recorded video breakdowns.',
    iconName: 'FileCheck',
    gradient: 'from-blue-600 to-violet-600'
  },
  {
    id: 'growth-focused',
    title: 'Growth Focused',
    description: 'Focus on meaningful business outcomes — pipeline value, qualified revenue, and customer LTV — rather than vanity metrics.',
    iconName: 'Rocket',
    gradient: 'from-violet-600 to-fuchsia-600'
  }
];

export const HOW_WE_WORK_STEPS = [
  {
    number: '01',
    title: 'Discover',
    tagline: 'Market & Competitor Audit',
    description: 'Understand the business, target market, competitors, current customer economics, and core growth goals through collaborative discovery workshops.'
  },
  {
    number: '02',
    title: 'Strategize',
    tagline: 'Customized Growth Blueprint',
    description: 'Build a customized digital marketing strategy, map customer touchpoints, define channel mixes, set KPIs, and prepare creative assets.'
  },
  {
    number: '03',
    title: 'Execute',
    tagline: 'Multi-Channel Campaign Launch',
    description: 'Launch campaigns, content, SEO architectures, and digital initiatives with rigorous tracking, quality assurance, and creative precision.'
  },
  {
    number: '04',
    title: 'Optimize',
    tagline: 'Data Analysis & Refinement',
    description: 'Analyze real-time performance data, conduct multivariate testing, weed out underperforming ads, and continuously improve conversion rates.'
  },
  {
    number: '05',
    title: 'Grow',
    tagline: 'Sustainable Scaling & Moat',
    description: 'Scale successful strategies, expand into adjacent audiences and channels, and build compounding digital market dominance.'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs-ecommerce-fashion',
    title: 'Scaling D2C E-Commerce Brand with Meta Ads & Conversion Redesign',
    clientIndustry: 'E-Commerce & Fashion Retail',
    clientNamePlaceholder: '[Client Name: Leading Bangladeshi Apparel Brand]',
    summary: 'A fast-growing fashion brand needed to overcome rising acquisition costs and improve mobile storefront conversions before the seasonal shopping peak.',
    challenge: 'High Facebook Ad CPMs, poor mobile checkout speed, and lack of customer retargeting resulted in stagnant ROAS of 1.4x and heavy cart abandonment.',
    strategy: 'Implemented server-side Conversions API (CAPI), produced 15 UGC-style video hooks, redesigned checkout with one-click ordering, and deployed automated abandoned cart recovery sequences.',
    servicesUsed: ['Facebook Ads', 'Website Development', 'Content Marketing', 'Growth Solutions'],
    results: [
      '3.8x average Return on Ad Spend (ROAS) sustained over 6 consecutive months',
      '68% reduction in checkout drop-off rate after mobile UX revamp',
      'Over 22,000 new verified customer acquisitions within the first quarter'
    ],
    metrics: [
      { metric: 'Return On Ad Spend (ROAS)', before: '1.4x', after: '3.8x', change: '+171%' },
      { metric: 'Monthly Net Revenue', before: '$18,500', after: '$64,200', change: '+247%' },
      { metric: 'Mobile Bounce Rate', before: '64%', after: '28%', change: '-56%' }
    ],
    timeline: '4 Months',
    isPlaceholder: true
  },
  {
    id: 'cs-b2b-saas',
    title: 'B2B Enterprise Software Lead Generation via Google Ads & SEO Authority',
    clientIndustry: 'B2B Enterprise Software & Tech',
    clientNamePlaceholder: '[Client Name: Cloud ERP & Logistics Platform]',
    summary: 'An enterprise cloud software provider sought high-intent decision makers (CTOs, Operations Heads) across Bangladesh and Southeast Asia.',
    challenge: 'Previous agency wasted budget on broad informational search terms. Inbound demo requests were low quality and sales cycle exceeded 120 days.',
    strategy: 'Structured hyper-targeted Google Search campaigns using exact match transactional queries, combined with high-authority comparison guides and an interactive ROI calculator landing page.',
    servicesUsed: ['Google Ads', 'SEO', 'Content Marketing', 'Website Development'],
    results: [
      '142 Enterprise Demo Requests generated in 90 days from verified business emails',
      'Average cost per qualified sales lead decreased by 49%',
      'First-page rankings for 18 primary high-commercial intent enterprise software keywords'
    ],
    metrics: [
      { metric: 'Cost Per Qualified Lead', before: '$128', after: '$65', change: '-49%' },
      { metric: 'Demo Conversion Rate', before: '1.8%', after: '6.4%', change: '+255%' },
      { metric: 'Closed Pipeline Value', before: '$140k', after: '$520k', change: '+271%' }
    ],
    timeline: '6 Months',
    isPlaceholder: true
  },
  {
    id: 'cs-local-healthcare',
    title: 'Local SEO & Multi-Branch Map Pack Domination for Healthcare Group',
    clientIndustry: 'Healthcare & Specialized Clinics',
    clientNamePlaceholder: '[Client Name: Multi-Specialty Dental & Diagnostic Group]',
    summary: 'A regional healthcare clinic group with 4 locations wanted to capture local patients searching for specialized medical and dental treatments.',
    challenge: 'Google Business Profiles were unoptimized, review count was low, and competitors dominated the top 3 Google Maps pack in prime neighborhoods.',
    strategy: 'Standardized 80+ citation listings, revamped all 4 GBP listings with geotagged photography and doctors’ credentials, and automated post-appointment review gathering via SMS.',
    servicesUsed: ['Local SEO', 'SEO', 'Social Media Marketing'],
    results: [
      'Captured #1 ranking on Google Maps for high-value localized searches across all 4 branch zones',
      'Inbound patient appointment phone calls surged by 210%',
      'Acquired 340+ authentic 5-star Google reviews with zero policy violations'
    ],
    metrics: [
      { metric: 'Google Maps Inquiries', before: '110 / mo', after: '342 / mo', change: '+210%' },
      { metric: 'Average Star Rating', before: '3.8 ★', after: '4.9 ★', change: '+28%' },
      { metric: 'Organic Walk-In Patients', before: '45 / wk', after: '124 / wk', change: '+175%' }
    ],
    timeline: '3 Months',
    isPlaceholder: true
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: 'DigiNexa helped us improve our online visibility and create a much more structured digital marketing strategy. Their reporting is refreshingly transparent, and we finally have predictable customer acquisition.',
    author: '[Client Name]',
    role: 'Founder & Managing Director',
    company: '[Company Name — Retail Brand]',
    industry: 'Consumer Retail',
    isPlaceholder: true,
    avatarPlaceholderInitial: 'C1',
    rating: 5
  },
  {
    id: 't2',
    quote: 'Before working with DigiNexa, our digital ad spend felt like a black hole. Their team integrated full server-side tracking, rebuilt our Google and Meta ad funnels, and delivered a 3.4x ROAS in under 90 days.',
    author: '[Client Name]',
    role: 'Chief Marketing Officer',
    company: '[Company Name — Technology Services]',
    industry: 'B2B Services',
    isPlaceholder: true,
    avatarPlaceholderInitial: 'C2',
    rating: 5
  },
  {
    id: 't3',
    quote: 'The AI marketing workflows and automated lead qualification DigiNexa implemented completely revolutionized our sales cycle. Leads from Facebook and Google get contacted in under 60 seconds automatically.',
    author: '[Client Name]',
    role: 'Head of Business Development',
    company: '[Company Name — Real Estate & Development]',
    industry: 'Real Estate',
    isPlaceholder: true,
    avatarPlaceholderInitial: 'C3',
    rating: 5
  }
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'starter',
    name: 'STARTER',
    tagline: 'For small businesses beginning their digital journey.',
    priceDisplay: 'Custom Pricing',
    billingNote: 'Tailored monthly retainer based on channel selection',
    isPopular: false,
    ctaText: 'Get Started',
    targetAudience: 'Small businesses, single-location ventures, and startups launching digital presence.',
    features: [
      { name: 'Core Service Selection (1-2 Key Channels)', included: true },
      { name: 'Monthly Performance & Budget Optimization', included: true },
      { name: 'Monthly Executive PDF Reporting', included: true },
      { name: 'Standard Email & Ticket Support (24hr response)', included: true },
      { name: 'Basic Keyword & Audience Research', included: true },
      { name: 'Full Server-Side CAPI Tracking Setup', included: false },
      { name: 'Dedicated Senior Growth Strategist', included: false },
      { name: 'Custom AI Marketing Automations', included: false }
    ]
  },
  {
    id: 'growth',
    name: 'GROWTH',
    tagline: 'For businesses ready to scale aggressively.',
    priceDisplay: 'Custom Pricing',
    billingNote: 'Scalable retainer aligned with monthly growth milestones',
    isPopular: true,
    ctaText: 'Choose Growth',
    targetAudience: 'High-intent scaling brands, established e-commerce stores, and multi-service companies.',
    features: [
      { name: 'Multi-Channel Strategy (SEO + Meta Ads + Google Ads)', included: true },
      { name: 'Bi-Weekly Strategy Sprints & Performance Reviews', included: true },
      { name: 'Full Funnel Server-Side Tracking & Attribution', included: true },
      { name: 'Continuous Creative Testing (Graphics & Video Hooks)', included: true },
      { name: 'Local & National Organic SEO Management', included: true },
      { name: 'Dedicated Senior Strategist & WhatsApp Channel', included: true },
      { name: 'Live 24/7 Data Studio Performance Dashboard', included: true },
      { name: 'Enterprise Custom AI Engine Deployment', included: false }
    ]
  },
  {
    id: 'premium',
    name: 'PREMIUM',
    tagline: 'For businesses requiring customized digital growth solutions.',
    priceDisplay: 'Custom Pricing',
    billingNote: 'Full-service enterprise partnership with dedicated pods',
    isPopular: false,
    ctaText: 'Talk to an Expert',
    targetAudience: 'Established market leaders, enterprise B2B platforms, and international scaling firms.',
    features: [
      { name: 'Omnichannel Dominance (All 9 DigiNexa Service Pillars)', included: true },
      { name: 'Custom AI Automation & CRM Lead Qualification Bots', included: true },
      { name: 'High-Converting Web Development & CRO Sprints', included: true },
      { name: 'Dedicated Full Pod (Strategist, Copywriter, Media Buyer, Dev)', included: true },
      { name: 'Fractional CMO Strategic Direction & Board Advisory', included: true },
      { name: 'Priority 24/7 VIP Phone & Slack Support', included: true },
      { name: 'Bespoke Predictive Analytics & Churn Modeling', included: true },
      { name: 'International Market Geo-Expansion Blueprints', included: true }
    ]
  }
];

export const AI_CAPABILITIES = [
  { title: 'Content Creation', description: 'High-speed drafting of multi-format content variations, social hooks, and personalized ad copy with human editorial polish.' },
  { title: 'Marketing Automation', description: 'End-to-end trigger-based multi-channel workflows connecting Meta, Google, CRM, email, and WhatsApp.' },
  { title: 'Customer Insights', description: 'Natural language sentiment mining across thousands of customer reviews and support transcripts.' },
  { title: 'Data Analysis', description: 'Algorithmic cross-channel attribution modeling to identify which specific touchpoints drove customer revenue.' },
  { title: 'Ad Optimization', description: 'Predictive creative scoring and automated bid adjustments responsive to real-time inventory and weather trends.' },
  { title: 'Workflow Automation', description: 'Eliminate manual CSV exports and report generation through automated webhook pipelines.' },
  { title: 'Business Intelligence', description: 'Predictive forecasting of customer lifetime value (LTV) and inventory demand shifts.' },
  { title: 'Personalized Marketing', description: 'Dynamic website page personalization displaying relevant case studies according to visitor industry.' }
];

export const LOCAL_SEO_SERVICES = [
  { title: 'Google Business Profile Optimization', desc: 'Audit, verify, and fully optimize every attribute, category, and photo on your Google Business Profile.' },
  { title: 'Local Keyword Research', desc: 'Identify high-intent geo-targeted search phrases and "near me" customer queries.' },
  { title: 'Local Citations & Directory Sync', desc: 'Build and synchronize NAP data across high-authority local Bangladeshi and global business directories.' },
  { title: 'Review Generation Strategy', desc: 'Implement automated, compliant SMS and QR-code review collection sequences to build social proof.' },
  { title: 'Local On-Page SEO', desc: 'Embed localized schema markup, city-specific landing pages, and interactive map embeds.' },
  { title: 'Local Search Optimization', desc: 'Continuous proximity grid tracking and competitor local map position monitoring.' }
];

export const WEB_DEV_HIGHLIGHTS = [
  { title: 'Modern UI/UX', desc: 'Intuitive user experiences designed to guide attention seamlessly toward conversion points.' },
  { title: 'Mobile Responsive', desc: 'Flawless touch experience adapted mathematically to smartphones, tablets, and ultra-wide desktops.' },
  { title: 'Fast Performance', desc: 'Sub-second page loads scoring 95+ on Google Lighthouse with zero code bloat.' },
  { title: 'SEO Friendly', desc: 'Semantic HTML5 structure, schema microdata, and automatic XML sitemaps built directly into the codebase.' },
  { title: 'Secure Architecture', desc: 'Enterprise SSL, sanitized inputs, and hardened headers to protect against vulnerabilities.' },
  { title: 'Conversion Focused', desc: 'Single-column high-converting checkout flows, sticky mobile CTAs, and frictionless lead forms.' },
  { title: 'E-commerce Ready', desc: 'Scalable product catalogs, dynamic cart drawers, and secure multi-currency payment gateways.' }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    slug: 'future-of-ai-marketing-2026',
    title: 'How AI-Powered Marketing Is Redefining Business Growth in 2026',
    category: 'AI Marketing',
    shortDescription: 'Discover how modern agencies and brands are utilizing generative models and predictive analytics to slash CAC and scale customer touchpoints.',
    readingTime: '6 min read',
    publishDate: 'September 14, 2026',
    author: 'DigiNexa Strategy Team',
    authorRole: 'AI & Data Intelligence Practice',
    tags: ['Artificial Intelligence', 'Predictive Analytics', 'Marketing Automation'],
    content: `Artificial intelligence has evolved from an experimental curiosity into the core operating engine of modern performance marketing.

### The Shift From Guesswork to Predictive Precision
For years, digital marketing relied on post-hoc analysis: looking at what happened last month to guess what might happen next month. Today, machine learning models analyze behavioral patterns across millions of data points to predict customer lifetime value, churn probability, and creative fatigue before campaigns are even funded.

### The 3 Core Pillars of AI Marketing at DigiNexa
1. **Automated Creative Synthesis**: Generating 20+ hook variations for short-form video and testing audience resonance at fractional costs.
2. **24/7 Intelligent Triage**: Qualifying inbound prospects within 45 seconds using trained business agents.
3. **Algorithmic Budget Re-Allocation**: Dynamically shifting ad spend to the highest-converting geographic pockets in real time.

Combining human strategic intuition with machine computational speed is the ultimate competitive advantage for modern businesses.`
  },
  {
    id: 'b2',
    slug: 'local-seo-playbook-bangladesh',
    title: 'The Comprehensive Local SEO Guide: How to Dominate Google Maps in Bangladesh',
    category: 'Local SEO',
    shortDescription: 'A practical, step-by-step masterclass on optimizing your Google Business Profile to capture high-intent local customer phone calls and visits.',
    readingTime: '8 min read',
    publishDate: 'August 28, 2026',
    author: 'DigiNexa Search Team',
    authorRole: 'Search Engine Optimization Specialist',
    tags: ['Google Maps', 'Local SEO', 'Google Business Profile'],
    content: `When a customer in Dhaka, Chittagong, or Sylhet searches for "best clinic near me" or "corporate law firm in Gulshan", who appears in the top 3 Google Maps pack?

If your business isn't in those top three spots, you are losing over 70% of high-intent local inquiries directly to your immediate competitors.

### Essential Local SEO Optimization Checklist
* **Primary Category Alignment**: Select the single most specific primary category representing your core revenue service.
* **Geotagged Real Photography**: Upload genuine photos of your team, office entrance, and client spaces on a monthly basis.
* **Review Velocity Over Volume**: Consistent 5-star reviews received weekly signal active business relevance to Google far more than a sudden one-time batch.
* **NAP Consistency**: Ensure your exact legal business name, street address, and phone number match across all online citations.`
  },
  {
    id: 'b3',
    slug: 'facebook-ads-roas-framework',
    title: 'Why Most Facebook Ad Campaigns Fail and the ROAS Framework That Fixes Them',
    category: 'Facebook Ads',
    shortDescription: 'Unpack the critical mistakes in audience targeting, creative hook fatigue, and tracking fidelity that bleed paid ad budgets.',
    readingTime: '7 min read',
    publishDate: 'August 12, 2026',
    author: 'DigiNexa Performance Team',
    authorRole: 'Paid Media Director',
    tags: ['Meta Ads', 'ROAS', 'Paid Social'],
    content: `Many brand owners believe Facebook Ads "don't work anymore" because ad costs have increased. The truth is: lazy advertising no longer works.

### Why Generic Ads Fail
1. Weak 3-second visual hooks that users swipe past in their Instagram and Facebook feeds.
2. Relying strictly on client-side browser pixels that lose 30-40% of tracking data due to ad blockers and privacy updates.
3. Sending ad traffic to slow, bloated generic homepages rather than dedicated, conversion-optimized landing pages.

By deploying server-side Conversions API, testing 10+ hook angles, and directing clicks to single-objective landing pages, predictable 3x+ ROAS becomes repeatable.`
  },
  {
    id: 'b4',
    slug: 'technical-seo-core-web-vitals',
    title: 'Technical SEO & Core Web Vitals: Turning Site Speed Into Search Rankings',
    category: 'SEO',
    shortDescription: 'How optimizing Largest Contentful Paint (LCP) and Cumulative Layout Shift (CLS) directly boosts organic Google search positions.',
    readingTime: '5 min read',
    publishDate: 'July 30, 2026',
    author: 'DigiNexa Tech & Web Team',
    authorRole: 'Head of Web Engineering',
    tags: ['Core Web Vitals', 'Technical SEO', 'Site Speed'],
    content: `Search engines want to satisfy user intent with minimal friction. If your website takes 4 seconds to render on a mobile device, over 50% of visitors leave before reading your headline.

Google's Core Web Vitals update made speed and visual stability direct ranking factors. At DigiNexa, we architect websites with modern clean stacks, optimized image formats, and zero script bloat to ensure 95+ Lighthouse performance scores.`
  },
  {
    id: 'b5',
    slug: 'google-ads-pmax-vs-search',
    title: 'Google Search Ads vs. Performance Max: When to Use Each for Maximum ROI',
    category: 'Google Ads',
    shortDescription: 'Understand the strategic divide between precision keyword search campaigns and Google’s automated multi-channel Performance Max campaigns.',
    readingTime: '6 min read',
    publishDate: 'July 18, 2026',
    author: 'DigiNexa PPC Team',
    authorRole: 'Senior SEM Strategist',
    tags: ['Google Ads', 'PPC', 'Performance Max'],
    content: `Choosing between Google Search Ads and Performance Max (PMax) shouldn't be a coin toss. Search ads give you strict negative keyword control for high-ticket commercial queries, while PMax leverages machine learning across YouTube, Display, Discover, and Gmail to scale conversions. Discover our hybrid blueprint for balancing both.`
  },
  {
    id: 'b6',
    slug: 'b2b-growth-unit-economics',
    title: 'Unit Economics of Sustainable Growth: Calculating CAC, LTV and Payback Periods',
    category: 'Business Growth',
    shortDescription: 'A CFO-level guide for founders and marketers to align digital campaigns with bottom-line profitability and cashflow sustainability.',
    readingTime: '9 min read',
    publishDate: 'June 25, 2026',
    author: 'DigiNexa Growth Advisory',
    authorRole: 'Managing Partner',
    tags: ['Unit Economics', 'Growth Strategy', 'CAC:LTV'],
    content: `Revenue is vanity, profit is sanity, but cash flow is reality. Scaling an unprofitable customer acquisition engine will simply burn through your cash reserves faster. Learn the essential financial formulas that ensure every dollar deployed into DigiNexa campaigns yields compounding enterprise value.`
  }
];

export const FAQ_ITEMS = [
  {
    question: 'What services does DigiNexa provide?',
    answer: 'DigiNexa provides end-to-end digital growth solutions across nine core pillars: Search Engine Optimization (SEO), Local SEO & Maps, Facebook & Meta Ads, Google Ads (PPC), Social Media Marketing, Content Marketing & Copywriting, AI Marketing & Business Solutions, Growth Solutions & Consulting, and High-Performance Website Development.'
  },
  {
    question: 'Do you work with international clients?',
    answer: 'Yes. DigiNexa provides digital marketing and technology services to businesses in Bangladesh as well as international markets across North America, Europe, the Middle East, and Australia. Our team operates across global timezones with 24/7 client communication support.'
  },
  {
    question: 'How do I get started with DigiNexa?',
    answer: 'Getting started is simple and structured. Click "Get Free Consultation" or "Book a Strategy Call" anywhere on this website to share your business details and current challenges. A senior growth strategist will review your digital footprint and schedule a 30-minute discovery call to outline a customized growth roadmap.'
  },
  {
    question: 'Do you offer customized packages?',
    answer: 'Yes, absolutely. We do not believe in one-size-fits-all digital marketing packages. Every business has unique unit economics, competitor landscapes, and revenue goals. We craft customized strategies combining only the specific channels and solutions that will deliver the highest return on your investment.'
  },
  {
    question: 'How long does SEO take to show results?',
    answer: 'SEO is a compounding, long-term asset. While initial technical fixes and indexation improvements often reflect within 30 to 60 days, measurable organic traffic growth and competitive keyword ranking shifts typically accelerate significantly between months 3 through 6. For immediate inbound demand, we often pair SEO with targeted Google or Meta ad campaigns.'
  },
  {
    question: 'How does DigiNexa incorporate Artificial Intelligence into campaigns?',
    answer: 'We deploy AI to augment human creativity and execution speed: predictive customer lifetime value modeling, automated 24/7 lead qualification chatbots, dynamic creative variant testing, and instant multi-channel reporting workflows. Human strategists guide the vision and brand voice, while AI handles repetitive execution at scale.'
  },
  {
    question: 'How do you handle reporting and transparency?',
    answer: 'We provide total transparency. Every client receives access to a real-time 24/7 live dashboard showing exact spend, traffic, leads, conversion rates, and ROAS. Additionally, we conduct bi-weekly or monthly executive review calls with recorded video walkthroughs explaining what worked, what we learned, and what we are testing next.'
  },
  {
    question: 'Who owns the ad accounts, assets, and websites you create?',
    answer: 'You do. 100%. We operate transparently within your own business manager accounts, ad accounts, and repositories. You retain complete, unencumbered ownership of all intellectual property, creative assets, code, and customer data.'
  }
];
