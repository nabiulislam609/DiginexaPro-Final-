import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Globe,
  Facebook,
  Linkedin,
  Instagram,
  Youtube
} from 'lucide-react';
import { motion } from 'motion/react';
import { BRAND_INFO, SERVICES_LIST } from '../data/agencyData';
import { ConsultationFormData } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    website: '',
    service: 'All-in-One Growth Solutions',
    budget: '$1,000 - $3,000 / month',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate submission validation and response
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section className="py-20 sm:py-28 bg-[#0B1026] text-white relative overflow-hidden" id="contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700/80 text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Connect With Our Team</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Outfit']">
            Let's Grow Your Business Together
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Tell us about your business, your goals and where you want to go.
          </p>
        </motion.div>

        {/* 2-Column Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Agency Information & Service Footprint */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="rounded-3xl bg-[#0F1635] border border-slate-800 p-6 sm:p-8 space-y-6">
              <h3 className="text-xl font-bold text-white font-['Outfit']">
                Agency Headquarters & Contact
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Whether you are a startup in Dhaka or an established international brand expanding into new territories, our digital strategists are ready to partner with you.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                  <div className="p-2 rounded-xl bg-slate-900 text-cyan-400 border border-slate-700/80 shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-semibold block">Office Location</span>
                    <span className="font-medium text-white">{BRAND_INFO.location}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                  <div className="p-2 rounded-xl bg-slate-900 text-cyan-400 border border-slate-700/80 shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-semibold block">Direct Inquiries</span>
                    <a href={`mailto:${BRAND_INFO.email}`} className="font-medium text-white hover:text-cyan-300 transition-colors">
                      {BRAND_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                  <div className="p-2 rounded-xl bg-slate-900 text-cyan-400 border border-slate-700/80 shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-semibold block">Direct Phone</span>
                    <a href={`tel:${BRAND_INFO.phone}`} className="font-medium text-white hover:text-cyan-300 transition-colors">
                      {BRAND_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                  <div className="p-2 rounded-xl bg-slate-900 text-cyan-400 border border-slate-700/80 shrink-0 mt-0.5">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-semibold block">Operating Coverage</span>
                    <span className="font-medium text-white">{BRAND_INFO.serviceCoverage}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                  <div className="p-2 rounded-xl bg-slate-900 text-cyan-400 border border-slate-700/80 shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-semibold block">Business Hours</span>
                    <span className="font-medium text-slate-300">{BRAND_INFO.workingHours}</span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-6 border-t border-slate-800">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-3">
                  Connect on Social Media
                </span>
                <div className="flex items-center gap-2.5">
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={BRAND_INFO.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-900 text-slate-300 hover:text-white hover:bg-blue-600 transition-all border border-slate-800"
                    aria-label="DigiNexa Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={BRAND_INFO.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-900 text-slate-300 hover:text-white hover:bg-blue-600 transition-all border border-slate-800"
                    aria-label="DigiNexa LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={BRAND_INFO.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-900 text-slate-300 hover:text-white hover:bg-pink-600 transition-all border border-slate-800"
                    aria-label="DigiNexa Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={BRAND_INFO.socialLinks.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-900 text-slate-300 hover:text-white hover:bg-red-600 transition-all border border-slate-800"
                    aria-label="DigiNexa YouTube"
                  >
                    <Youtube className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>

            </div>

            {/* Quick Consultation Promise */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 space-y-2">
              <div className="flex items-center gap-2 text-cyan-400 font-bold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Our 48-Hour Response SLA</span>
              </div>
              <p>
                Every submission is reviewed personally by a senior strategist. We will provide a competitive audit and scheduled 30-minute roadmap review.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Professional Lead Generation Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl bg-[#0F1635] border border-slate-800 p-6 sm:p-10 shadow-2xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in zoom-in-95 duration-200">
                  <div className="w-16 h-16 rounded-full brand-gradient text-white flex items-center justify-center mx-auto shadow-xl">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-['Outfit']">
                    Consultation Request Received!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-cyan-400 font-semibold">{formData.name}</span>. A senior DigiNexa growth strategist has received your details for <span className="text-white font-medium">{formData.businessName || 'your business'}</span> and will reach out to <span className="text-cyan-400">{formData.email}</span> within 24 to 48 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        businessName: '',
                        email: '',
                        phone: '',
                        website: '',
                        service: 'All-in-One Growth Solutions',
                        budget: '$1,000 - $3,000 / month',
                        message: ''
                      });
                    }}
                    className="mt-6 px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Tanvir Ahmed"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                      />
                    </div>

                    {/* Business Name */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        Business Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        placeholder="e.g. Apex Lifestyle Ltd"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="tanvir@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+880 17XX-XXXXXX"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Website URL */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Current Website or Social Page (Optional)
                    </label>
                    <input
                      type="url"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      placeholder="https://yourwebsite.com or facebook.com/page"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Service Interested In */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        Service Interested In
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                      >
                        <option value="All-in-One Growth Solutions">All-in-One Growth Solutions</option>
                        {SERVICES_LIST.map((s) => (
                          <option key={s.id} value={s.name}>
                            {s.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Monthly Marketing Budget */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        Monthly Marketing Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                      >
                        <option value="Under $1,000 / mo">Under $1,000 / mo</option>
                        <option value="$1,000 - $3,000 / month">$1,000 - $3,000 / month</option>
                        <option value="$3,000 - $7,500 / month">$3,000 - $7,500 / month</option>
                        <option value="$7,500 - $15,000 / month">$7,500 - $15,000 / month</option>
                        <option value="$15,000+ / month (Enterprise)">$15,000+ / month (Enterprise)</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Tell Us About Your Goals & Challenges
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="What is your biggest bottleneck right now? (e.g., high ad costs, poor website conversions, need local map dominance, wanting to scale internationally)"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl brand-gradient text-white text-base font-bold shadow-xl shadow-blue-600/30 hover:shadow-cyan-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    id="contact-submit-btn"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin"></span>
                        Transmitting to Strategist...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <span>Request a Free Consultation</span>
                        <Send className="w-4 h-4" />
                      </span>
                    )}
                  </motion.button>

                  <div className="text-center text-[11px] text-slate-400 pt-1">
                    Your details are 100% confidential. No spam, ever.
                  </div>
                </form>
              )}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
