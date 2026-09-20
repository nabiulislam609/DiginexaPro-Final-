import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { FAQ_ITEMS } from '../data/agencyData';

interface FaqSectionProps {
  onOpenConsultation: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenConsultation }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 sm:py-28 bg-[#0B1026] text-white relative" id="faq-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700/80 text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Clarity & Transparency</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Outfit']">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Straight answers to the most common questions business owners and founders ask before partnering with DigiNexa.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#111836] border-cyan-500/40 shadow-xl shadow-blue-950/40'
                    : 'bg-[#0F1635] border-slate-800 hover:border-slate-700'
                }`}
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-white font-['Outfit']">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'brand-gradient text-white rotate-180 shadow-md'
                        : 'bg-slate-900 text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 mt-1 animate-in fade-in duration-200">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions? */}
        <div className="mt-14 text-center p-8 rounded-2xl bg-gradient-to-r from-blue-950/40 via-purple-950/30 to-cyan-950/40 border border-slate-800">
          <h4 className="text-lg font-bold text-white font-['Outfit']">
            Have a specific question not covered here?
          </h4>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 mb-4">
            Our growth strategists are happy to review your current tech stack and ad accounts directly.
          </p>
          <button
            onClick={onOpenConsultation}
            className="px-6 py-2.5 rounded-xl brand-gradient text-white text-xs sm:text-sm font-semibold shadow-md hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-2"
          >
            <span>Ask a Strategist</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
