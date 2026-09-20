import React from 'react';
import { X, Calendar, Clock, User, Tag, ArrowLeft, Share2, Check } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogDetailModalProps {
  post: BlogPost | null;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const BlogDetailModal: React.FC<BlogDetailModalProps> = ({
  post,
  onClose,
  onOpenConsultation
}) => {
  if (!post) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl rounded-3xl bg-[#0F1635] border border-slate-700 shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Sticky Header */}
        <div className="p-5 sm:p-6 border-b border-slate-800 bg-[#0B1026] flex items-center justify-between sticky top-0 z-10">
          <button
            onClick={onClose}
            className="text-xs sm:text-sm text-slate-400 hover:text-white flex items-center gap-2 font-semibold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Insights</span>
          </button>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-6 text-slate-200">
          
          {/* Metadata badges */}
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
            <span className="px-3 py-1 rounded-full bg-blue-600/30 text-cyan-300 font-bold border border-cyan-500/40">
              {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              {post.publishDate}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              {post.readingTime}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-['Outfit'] leading-tight">
            {post.title}
          </h2>

          {/* Author info box */}
          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800">
            <div className="w-10 h-10 rounded-xl brand-gradient flex items-center justify-center text-white font-bold text-sm">
              DN
            </div>
            <div>
              <div className="text-sm font-bold text-white font-['Outfit']">
                {post.author}
              </div>
              <div className="text-xs text-cyan-400">
                {post.authorRole} • DigiNexa Digital Marketing Agency
              </div>
            </div>
          </div>

          {/* Content Body */}
          <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed text-sm sm:text-base space-y-4 pt-2">
            {post.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={index} className="text-lg sm:text-xl font-bold text-white font-['Outfit'] pt-4 text-cyan-300">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              if (paragraph.startsWith('* ')) {
                const bulletItems = paragraph.split('\n* ');
                return (
                  <ul key={index} className="space-y-2 pl-4 list-disc marker:text-cyan-400 text-sm">
                    {bulletItems.map((item, i) => (
                      <li key={i}>{item.replace('* ', '')}</li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={index} className="leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Tags */}
          <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center gap-2">
            <span className="text-xs text-slate-400 font-semibold">Filed under:</span>
            {post.tags.map((tag) => (
              <span key={tag} className="text-xs px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 border border-slate-700">
                #{tag}
              </span>
            ))}
          </div>

          {/* Bottom Consultation Banner */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-900/40 via-purple-900/40 to-cyan-900/30 border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
            <div className="text-center sm:text-left">
              <h4 className="text-base font-bold text-white">
                Want us to implement these strategies for your business?
              </h4>
              <p className="text-xs text-slate-300 mt-0.5">
                Speak directly with a DigiNexa growth strategist to build your custom roadmap.
              </p>
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenConsultation();
              }}
              className="shrink-0 px-5 py-2.5 rounded-xl brand-gradient text-white text-xs sm:text-sm font-semibold shadow-lg hover:scale-105 active:scale-95 transition-all"
            >
              Get Free Consultation
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
