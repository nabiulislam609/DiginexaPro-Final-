import React, { useState } from 'react';
import {
  BookOpen,
  Clock,
  Calendar,
  ArrowRight,
  Search,
  Tag,
  Sparkles,
  TrendingUp,
  Share2
} from 'lucide-react';
import { BLOG_POSTS } from '../data/agencyData';
import { BlogPost } from '../types';

interface BlogSectionProps {
  onSelectPost: (post: BlogPost) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onSelectPost }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Digital Marketing',
    'SEO',
    'Local SEO',
    'Facebook Ads',
    'Google Ads',
    'AI Marketing',
    'Social Media',
    'Business Growth',
    'Website Development'
  ];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI Marketing': return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
      case 'Local SEO': return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30';
      case 'Facebook Ads': return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      case 'SEO': return 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30';
      case 'Google Ads': return 'bg-amber-500/20 text-amber-300 border-amber-500/30';
      case 'Business Growth': return 'bg-rose-500/20 text-rose-300 border-rose-500/30';
      default: return 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30';
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-[#0E1430] text-white relative border-y border-slate-800/80" id="blog-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700/80 text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>DigiNexa Growth Insights</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Outfit']">
            Insights, Playbooks & SEO Strategies
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Data-driven analyses, technical SEO breakdowns, and tactical ad optimization guides written by our practitioners.
          </p>

          {/* Search bar */}
          <div className="mt-8 max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search guides, strategies, or keywords..."
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
            />
          </div>

          {/* Categories Pill Bar */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="rounded-2xl bg-[#111836] border border-slate-800/90 overflow-hidden flex flex-col justify-between hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-blue-950/60 group"
            >
              <div>
                {/* Visual Header / Simulated Thumbnail */}
                <div className="h-44 bg-gradient-to-br from-slate-900 via-blue-950/40 to-slate-900 p-6 flex flex-col justify-between relative overflow-hidden border-b border-slate-800">
                  <div className="flex items-center justify-between z-10">
                    <span className={`px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider border ${getCategoryColor(post.category)}`}>
                      {post.category}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readingTime}
                    </span>
                  </div>

                  {/* Decorative background visual typography */}
                  <div className="text-4xl font-extrabold text-slate-800/40 select-none absolute -bottom-2 -right-2 font-['Outfit'] group-hover:text-blue-700/20 transition-colors">
                    DIGINEXA
                  </div>

                  {/* Date & Author */}
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 z-10">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{post.publishDate}</span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white font-['Outfit'] line-clamp-2 mb-3 group-hover:text-cyan-300 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3 mb-4">
                    {post.shortDescription}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {post.tags.slice(0, 2).map((t) => (
                      <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Read Article Action */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onSelectPost(post)}
                  className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-slate-200 hover:text-white text-xs sm:text-sm font-semibold border border-slate-700/80 transition-all flex items-center justify-center gap-2 group/btn"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
