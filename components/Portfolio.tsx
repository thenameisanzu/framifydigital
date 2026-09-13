'use client';

import React, { useState } from "react";
import {
  Palette,
  Video,
  Layout,
  Image as ImageIcon,
  ArrowUpRight,
  Sparkles,
  MessageCircle,
  CheckCircle2
} from "lucide-react";
import { cn } from "@/lib/utils";

interface PortfolioItem {
  id: string;
  title: string;
  category: "all" | "logos" | "reels" | "posters" | "thumbnails";
  categoryLabel: string;
  description: string;
  highlights: string[];
}

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "item-1",
    title: "Modern Cafe & Lifestyle Brand Identity",
    category: "logos",
    categoryLabel: "Logo & Branding",
    description: "Custom minimalist vector logo mark, warm color palette, typography hierarchy, and packaging guidelines.",
    highlights: [
      "Vector mark designed for both digital avatars and physical signage",
      "Comprehensive color scheme & typography system",
      "Full source files provided (AI, SVG, PNG, PDF)",
    ],
  },
  {
    id: "item-2",
    title: "High-Retention Instagram Reels Series",
    category: "reels",
    categoryLabel: "Reels & Video",
    description: "Viral 9:16 vertical reels featuring kinetic typography, sound design, and 3-second visual hooks.",
    highlights: [
      "Optimized for 80%+ audience retention",
      "Fast-paced b-roll sequencing & dynamic Malayalam/English captions",
      "Custom cover thumbnail matching Instagram grid aesthetic",
    ],
  },
  {
    id: "item-3",
    title: "Commercial Promotional Posters & Flyers",
    category: "posters",
    categoryLabel: "Posters & Creatives",
    description: "High-contrast promotional and festival posters designed to command immediate attention on Instagram feeds.",
    highlights: [
      "Bold typographic layout emphasizing offers and dates",
      "Optimized for both Feed (1:1/4:5) and Story (9:16) aspect ratios",
      "Direct WhatsApp / Call CTA integration",
    ],
  },
  {
    id: "item-4",
    title: "High-CTR YouTube Thumbnails",
    category: "thumbnails",
    categoryLabel: "Thumbnails",
    description: "Custom YouTube video thumbnails with punchy 3-word typographic hooks and expressive contrast pop.",
    highlights: [
      "Tested for crisp mobile readability on small smartphone screens",
      "Curiosity gap visual design boosting click-through rates",
      "Consistent creator branding across multiple video series",
    ],
  },
  {
    id: "item-5",
    title: "Fitness Studio Brand & Social Launch Kit",
    category: "logos",
    categoryLabel: "Logo & Branding",
    description: "Energetic brand icon, typography identity, and a 10-piece launch poster kit for social media rollout.",
    highlights: [
      "Dynamic emblem design symbolizing strength and momentum",
      "Matching Instagram story templates and highlight icons",
      "Ready-to-print vector formats",
    ],
  },
  {
    id: "item-6",
    title: "Educational Academy Admission Posters",
    category: "posters",
    categoryLabel: "Posters & Creatives",
    description: "Multi-slide educational carousel designs and admission announcement graphics driving direct WhatsApp inquiries.",
    highlights: [
      "Clean infographic breakdown of courses and features",
      "Urgency visual cues and clear contact details",
      "High engagement and save rates",
    ],
  },
];

const CATEGORIES = [
  { id: "all", label: "All Works" },
  { id: "logos", label: "Logos & Branding" },
  { id: "reels", label: "Reels & Video" },
  { id: "posters", label: "Posters & Creatives" },
  { id: "thumbnails", label: "Thumbnails" },
];

export function Portfolio() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems = activeTab === "all"
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((i) => i.category === activeTab);

  return (
    <section id="portfolio" className="relative w-full py-20 bg-[#090a0f] border-b border-white/[0.06] overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 size-[500px] rounded-full bg-cyan-500/[0.03] blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.04] px-3.5 py-1 text-xs font-mono text-cyan-300 backdrop-blur-md mb-3 shadow-sm">
              <Sparkles className="size-3.5 text-cyan-400" />
              <span>OUR WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured <span className="gradient-text-cyan">Creative Showcase</span>
            </h2>
            <p className="mt-2 text-sm text-slate-300 max-w-lg">
              A sample of the logos, reels, posters, and thumbnails we engineer for our clients.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1.5 rounded-xl bg-white/[0.04] border border-white/[0.1] backdrop-blur-md">
            {CATEGORIES.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "px-3 py-1.5 text-xs font-semibold rounded-lg transition-all",
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20"
                    : "text-slate-300 hover:text-white hover:bg-white/[0.06]"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            return (
              <div
                key={item.id}
                className="group relative rounded-2xl glass-card p-6 flex flex-col justify-between border border-white/[0.08] hover:border-cyan-400/40 transition-all duration-300 animate-in fade-in zoom-in-95 duration-200"
              >
              <div>
                <span className="text-[11px] font-mono font-semibold text-cyan-300 uppercase tracking-wider bg-white/[0.05] px-2.5 py-0.5 rounded-md border border-white/[0.1] mb-3 inline-block">
                  {item.categoryLabel}
                </span>

                <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="space-y-1.5 mb-5 pt-3 border-t border-white/[0.06]">
                  {item.highlights.slice(0, 2).map((h, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-xs text-slate-300">
                      <CheckCircle2 className="size-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-xs font-mono text-cyan-400">
                  Verified Delivery
                </span>

                <button
                  type="button"
                  onClick={() => setSelectedItem(item)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-200 bg-white/[0.06] hover:bg-cyan-600 border border-white/[0.1] px-3 py-1.5 rounded-lg transition-all"
                >
                  <span>View Details</span>
                  <ArrowUpRight className="size-3.5" />
                </button>
              </div>
            </div>
          );
        })}
        </div>
      </div>

      {/* Item Detail Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg rounded-2xl bg-[#0e121a] border border-white/[0.12] p-6 sm:p-7 shadow-2xl">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                  {selectedItem.categoryLabel}
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  {selectedItem.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="rounded-lg border border-white/[0.12] bg-white/[0.06] px-2.5 py-1 text-xs font-mono text-slate-300 hover:text-white"
              >
                CLOSE
              </button>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 mb-5 leading-relaxed">
              {selectedItem.description}
            </p>

            <div className="rounded-xl bg-white/[0.04] border border-white/[0.08] p-4 mb-6">
              <h4 className="text-xs font-mono uppercase text-cyan-400 font-semibold mb-2 flex items-center gap-1.5">
                <Sparkles className="size-3.5" /> Key Deliverables Included
              </h4>
              <ul className="space-y-2">
                {selectedItem.highlights.map((h, idx) => (
                  <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                    <CheckCircle2 className="size-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between gap-3 pt-3 border-t border-white/[0.08]">
              <a
                href={`https://wa.me/919447520844?text=Hi%20Framify,%20I'm%20interested%20in%20a%20project%20similar%20to%20${encodeURIComponent(selectedItem.title)}.`}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 py-2.5 text-xs font-bold text-white shadow-md"
              >
                <MessageCircle className="size-4" />
                <span>Discuss on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Portfolio;
