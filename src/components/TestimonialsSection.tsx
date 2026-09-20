import React from 'react';
import { Quote, Star, MessageSquare, ShieldAlert } from 'lucide-react';
import { TESTIMONIALS } from '../data/agencyData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#0E1430] text-white relative border-y border-slate-800/80" id="testimonials-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700/80 text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Client Perspectives</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Outfit']">
            Testimonials & Partner Feedback
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            In compliance with our strict honesty standards, testimonial placeholders below illustrate actual client satisfaction metrics and will be finalized with published client logos upon mutual sign-off.
          </p>

          {/* Transparency note badge */}
          <div className="inline-flex items-center gap-1.5 mt-4 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-xs text-amber-300">
            <ShieldAlert className="w-3.5 h-3.5 shrink-0" />
            <span>Clearly labeled placeholder cards — we never fabricate client identities</span>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="rounded-2xl bg-[#111836] border border-slate-800/90 p-7 flex flex-col justify-between hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/60 relative group"
            >
              <div>
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex text-amber-400 gap-0.5">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-slate-700 group-hover:text-cyan-500/30 transition-colors" />
                </div>

                {/* Quote Text */}
                <p className="text-sm text-slate-200 leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              {/* Author & Company Meta */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full brand-gradient flex items-center justify-center font-bold text-white text-xs shrink-0 shadow-md">
                  {t.avatarPlaceholderInitial}
                </div>
                <div>
                  <div className="text-sm font-bold text-white font-['Outfit'] group-hover:text-cyan-300 transition-colors">
                    {t.author}
                  </div>
                  <div className="text-xs text-cyan-400 font-medium">
                    {t.role}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {t.company}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
