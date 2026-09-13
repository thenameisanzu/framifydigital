'use client';

import React, { useState } from "react";
import {
  TrendingUp,
  ArrowUpRight,
  Sparkles,
  BarChart2,
  Paintbrush,
  Video,
  Layout,
  MessageCircle,
  CheckCircle2,
  Image as ImageIcon
} from "lucide-react";
import { cn } from "@/lib/utils";

interface PortfolioItem {
  id: string;
  client: string;
  category: "all" | "branding" | "reels" | "posters" | "thumbnails" | "ads";
  categoryLabel: string;
  tagline: string;
  metricsHighlight: string;
  metricLabel: string;
  growth: string;
  timeline: string;
  summary: string;
  highlights: string[];
}

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "item-1",
    client: "Kerala Lifestyle & D2C Brand",
    category: "branding",
    categoryLabel: "Logo & Brand Identity",
    tagline: "Complete visual identity overhaul, custom mascot design & cohesive packaging guidelines",
    metricsHighlight: "100% Vector",
    metricLabel: "Custom Typography & Iconography",
    growth: "+180% Brand Recall",
    timeline: "2 Weeks",
    summary: "Crafted a distinctive, modern brand identity that works seamlessly across Instagram feed, packaging boxes, store signage, and website UI.",
    highlights: [
      "Custom vector mascot & primary mark designed for instant recognition",
      "Comprehensive typography hierarchy and color contrast rules",
      "Full digital and print collateral pack delivered in vector formats",
    ],
  },
  {
    id: "item-2",
    client: "Culinary & Food Chain Kerala",
    category: "reels",
    categoryLabel: "Reels & Short-Form Video",
    tagline: "High-retention Instagram Reels series with 3-second visual hooks generating 1.2M+ organic views",
    metricsHighlight: "1.2M+ Views",
    metricLabel: "Organic Instagram Reach",
    growth: "+430% Profile Visits",
    timeline: "Monthly Sprint",
    summary: "Produced 15 rapid-paced, appetizing reels with dynamic transitions, rhythmic Malayalam background scores, and clear restaurant location tags.",
    highlights: [
      "3-second hook testing resulted in 48% completion rate",
      "Audio-synced fast cuts optimized for the Instagram Explore algorithm",
      "Generated 2,400+ direct location saves & WhatsApp reservation chats",
    ],
  },
  {
    id: "item-3",
    client: "Tech Academy & Educational Institute",
    category: "posters",
    categoryLabel: "Social Media Posters",
    tagline: "High-impact admission posters, event creatives & carousel infographics driving 340+ student enrollments",
    metricsHighlight: "340+ Leads",
    metricLabel: "Direct Student Enrollments",
    growth: "+220% Inbound DMs",
    timeline: "Quarterly Campaign",
    summary: "Engineered bold, commercial social media posters combining 3D elements, vibrant contrast, and clear urgency deadlines.",
    highlights: [
      "Multi-slide carousel breakdowns explaining course curriculums",
      "Bold typographic hierarchy with clear WhatsApp CTA integration",
      "Custom story creatives matching seasonal admission intake dates",
    ],
  },
  {
    id: "item-4",
    client: "Leading Tech & Finance Creator Channel",
    category: "thumbnails",
    categoryLabel: "High-CTR Thumbnails",
    tagline: "Custom YouTube thumbnail series increasing channel click-through rate from 4.2% to 11.6%",
    metricsHighlight: "11.6% CTR",
    metricLabel: "YouTube Click-Through Rate",
    growth: "2.7x View Uplift",
    timeline: "Ongoing Retainer",
    summary: "Redesigned video thumbnails using curiosity triggers, facial emotion grading, and punchy 3-word typographic hooks.",
    highlights: [
      "Tested color psychology and border framing to break feed monotony",
      "Optimized for small mobile viewports across YouTube App and feed",
      "Consistent visual branding across 40+ published episodes",
    ],
  },
  {
    id: "item-5",
    client: "Ayurvedic Wellness & Healthcare Hub",
    category: "ads",
    categoryLabel: "Paid Meta & Google Ads",
    tagline: "Targeted Facebook & Instagram WhatsApp-click ad campaign delivering 650+ verified patient inquiries",
    metricsHighlight: "5.2x ROAS",
    metricLabel: "Patient Acquisition Efficiency",
    growth: "₹18 Cost / Lead",
    timeline: "60 Days",
    summary: "Built a hyper-local ad campaign across Kottayam, Kochi, and GCC Malayali diaspora driving qualified consultation appointments.",
    highlights: [
      "Direct Click-to-WhatsApp ad funnel eliminating complex form drop-offs",
      "Dual language Malayalam + English ad copies",
      "Creative variation testing across 20+ video and static poster angles",
    ],
  },
];

const CATEGORIES = [
  { id: "all", label: "All Works" },
  { id: "branding", label: "Logo & Branding" },
  { id: "reels", label: "Reels & Video" },
  { id: "posters", label: "Posters & Creatives" },
  { id: "thumbnails", label: "Thumbnails" },
  { id: "ads", label: "Performance Ads" },
];

export function Portfolio() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems = activeTab === "all"
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((i) => i.category === activeTab);

  return (
    <section id="portfolio" className="relative w-full py-24 bg-[#060a1d] border-b border-sky-500/15 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 size-[600px] rounded-full bg-blue-900/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/25 bg-[#0c1844]/80 px-3.5 py-1 text-xs font-mono text-cyan-300 backdrop-blur-md mb-4">
              <BarChart2 className="size-3.5 text-cyan-400" />
              <span>PROVEN CREATIVE RESULTS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Featured Works & <span className="gradient-text-cyan">Creative Showcase</span>
            </h2>
            <p className="mt-3 text-base text-slate-300 max-w-xl">
              See how Framify elevates brands with world-class logos, viral reels, high-converting posters, and measurable growth systems.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-[#0c1844]/80 border border-sky-500/20 backdrop-blur-md">
            {CATEGORIES.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all",
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20"
                    : "text-slate-300 hover:text-white hover:bg-sky-900/30"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl glass-card p-6 sm:p-7 flex flex-col justify-between border border-sky-500/15 hover:border-cyan-400/40 transition-all duration-300"
            >
              <div>
                {/* Top Meta */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider bg-sky-950/80 px-3 py-1 rounded-md border border-sky-500/20">
                    {item.categoryLabel}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {item.timeline}
                  </span>
                </div>

                {/* Client Name & Tagline */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {item.client}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-slate-200 leading-snug mb-5">
                  {item.tagline}
                </p>

                {/* Performance Pill Metrics Grid */}
                <div className="grid grid-cols-2 gap-2.5 mb-5 p-3.5 rounded-xl bg-[#080e27]/80 border border-sky-500/15">
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase block">{item.metricLabel}</span>
                    <span className="text-base font-bold text-cyan-300 font-mono">{item.metricsHighlight}</span>
                  </div>
                  <div className="border-l border-sky-500/15 pl-2.5">
                    <span className="text-[10px] font-mono text-slate-400 uppercase block">Impact Lift</span>
                    <span className="text-base font-bold text-emerald-400 font-mono">{item.growth}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-300 line-clamp-2 mb-6">
                  {item.summary}
                </p>
              </div>

              {/* View Full Case Button */}
              <div className="pt-4 border-t border-sky-500/15 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                  <CheckCircle2 className="size-3.5 text-cyan-400" /> Verified Delivery
                </span>

                <button
                  type="button"
                  onClick={() => setSelectedItem(item)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#0c1844] hover:bg-cyan-600 border border-sky-500/30 px-3.5 py-1.5 rounded-lg transition-all"
                >
                  <span>Explore</span>
                  <ArrowUpRight className="size-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Item Breakdown Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl rounded-2xl bg-[#080e27] border border-sky-500/30 p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                  {selectedItem.categoryLabel} | {selectedItem.timeline}
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {selectedItem.client}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="rounded-lg border border-sky-500/30 bg-[#0c1844] px-3 py-1.5 text-xs font-mono text-slate-300 hover:text-white hover:border-cyan-400"
              >
                CLOSE [ESC]
              </button>
            </div>

            <p className="text-sm sm:text-base text-cyan-200 font-medium mb-6">
              {selectedItem.tagline}
            </p>

            <div className="p-4 rounded-xl bg-[#0c1844]/70 border border-sky-500/20 mb-6">
              <span className="text-xs font-mono uppercase text-slate-400 block mb-1">Project Summary:</span>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {selectedItem.summary}
              </p>
            </div>

            {/* Strategic Execution */}
            <div className="rounded-xl bg-[#0c1844]/40 border border-sky-500/15 p-5 mb-6">
              <h4 className="text-xs font-mono uppercase text-cyan-400 font-semibold mb-3 flex items-center gap-1.5">
                <Sparkles className="size-4" /> Deliverables & Execution Highlights
              </h4>
              <ul className="space-y-2.5">
                {selectedItem.highlights.map((h, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-sky-500/20">
              <a
                href="https://wa.me/919447520844"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-emerald-500"
              >
                <MessageCircle className="size-4" />
                <span>Discuss Similar Project on WhatsApp</span>
              </a>

              <a
                href="#contact"
                onClick={() => setSelectedItem(null)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-cyan-500/20 hover:scale-105 transition-all"
              >
                <span>Get Quotation</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Portfolio;
