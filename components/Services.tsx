'use client';

import React, { useState } from "react";
import {
  Palette,
  Video,
  Layout,
  Image as ImageIcon,
  Target,
  CheckCircle2,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceItem {
  id: string;
  icon: React.ElementType;
  title: string;
  category: string;
  tagline: string;
  shortDesc: string;
  deliverables: string[];
}

const SERVICES: ServiceItem[] = [
  {
    id: "logos",
    icon: Palette,
    category: "Brand Identity",
    title: "Logo Design & Branding",
    tagline: "Logos that command immediate recognition",
    shortDesc: "Custom vector logos, color palettes, and typography systems tailored to make your business distinct and memorable.",
    deliverables: [
      "Custom vector logo marks & typography",
      "Brand color palette & font pairings",
      "Complete source files (AI, SVG, PNG, PDF)",
      "Social media profile kit & avatars",
    ],
  },
  {
    id: "reels",
    icon: Video,
    category: "Video Production",
    title: "Instagram Reels & Video Editing",
    tagline: "Short-form video built for high retention",
    shortDesc: "Scroll-stopping Instagram Reels, YouTube Shorts, and promo videos crafted with strong 3-second hooks, dynamic cuts, and engaging captions.",
    deliverables: [
      "High-retention 9:16 vertical video edits",
      "Dynamic captions & kinetic text overlays",
      "Trending audio integration & sound effects",
      "Custom cover thumbnail for your feed grid",
    ],
  },
  {
    id: "posters",
    icon: Layout,
    category: "Graphic Design",
    title: "Commercial Posters & Creatives",
    tagline: "High-impact social media creatives",
    shortDesc: "Eye-catching commercial posters, promotional flyers, event creatives, and multi-slide carousels designed to stand out on the feed.",
    deliverables: [
      "High-contrast product & service posters",
      "Event, seasonal & promotional announcements",
      "Multi-slide carousel educational guides",
      "Feed (1:1 / 4:5) and Story (9:16) format sizes",
    ],
  },
  {
    id: "thumbnails",
    icon: ImageIcon,
    category: "High-CTR Graphics",
    title: "YouTube & Social Thumbnails",
    tagline: "Click-generating custom thumbnails",
    shortDesc: "High-CTR custom thumbnails engineered with aggressive visual contrast, expressive typography, and clear visual hierarchy to boost clicks.",
    deliverables: [
      "High-resolution (1280x720) optimized PNGs",
      "Bold, readable typography on mobile screens",
      "Subject cutout enhancements & contrast pop",
      "Hook variations for split-testing",
    ],
  },
  {
    id: "growth-systems",
    icon: Target,
    category: "Digital Marketing",
    title: "Digital Marketing & Growth Systems",
    tagline: "Smart businesses create systems",
    shortDesc: "We don't just post content—we build growth systems. Structured content planning, lead generation, and digital marketing strategies that turn viewers into paying customers.",
    deliverables: [
      "Monthly content calendar & publishing framework",
      "Social media profile & bio optimization",
      "Direct WhatsApp inquiry routing setup",
      "Paid ad creatives for targeted local reach",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="relative w-full py-20 bg-slate-50 dark:bg-[#080e27] border-b border-slate-200 dark:border-sky-500/15 overflow-hidden transition-colors duration-300">
      {/* Background glow effects */}
      <div className="absolute top-1/4 -left-40 size-96 rounded-full bg-blue-500/10 dark:bg-blue-600/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 size-96 rounded-full bg-cyan-400/10 dark:bg-cyan-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-sky-500/25 bg-white/90 dark:bg-[#0c1844]/80 px-3.5 py-1 text-xs font-mono text-cyan-700 dark:text-cyan-300 backdrop-blur-md mb-3 shadow-sm">
            <Sparkles className="size-3.5 text-cyan-500 dark:text-cyan-400" />
            <span>WHAT WE DO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Our Core <span className="gradient-text-cyan">Creative Services</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Logos, Reels, Posters, and Thumbnails crafted with precision to give your business an unfair advantage.
          </p>
        </div>

        {/* Services Grid (Clean 5 items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative rounded-2xl glass-card p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40"
              >
                <div>
                  {/* Category */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono font-medium text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">
                      {service.category}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-3.5 mb-3">
                    <div className="size-11 rounded-xl bg-slate-100 dark:bg-[#0c1844] border border-slate-200 dark:border-sky-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 group-hover:scale-105 group-hover:border-cyan-400 transition-all shadow-sm">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-xs font-medium text-cyan-700 dark:text-cyan-200/90 mb-2">
                    {service.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                    {service.shortDesc}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-2 mb-6 pt-3 border-t border-slate-200 dark:border-sky-500/10">
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="size-3.5 text-cyan-500 dark:text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Action */}
                <div className="pt-3 border-t border-slate-200 dark:border-sky-500/15 flex items-center justify-between mt-auto">
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    Custom Deliverables
                  </span>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300"
                  >
                    <span>Get Quote</span>
                    <ArrowRight className="size-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clean Consultation Callout */}
        <div className="mt-12 rounded-2xl glass-card p-6 sm:p-8 border border-slate-200 dark:border-sky-500/25 bg-gradient-to-r from-sky-50/80 via-blue-50/70 to-indigo-50/80 dark:from-[#0c1844]/95 dark:via-[#0d2157]/90 dark:to-[#0c1844]/95 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-md">
          <div>
            <span className="text-xs font-mono uppercase text-cyan-700 dark:text-cyan-400 font-bold block mb-1">
              📍 Kottayam, Karukachal 686540, Kerala
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
              Ready to upgrade your brand's visual identity and content?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
              Let's create high-converting logos, viral reels, and commercial posters for your business.
            </p>
          </div>

          <a
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-lg transition-all hover:scale-105 active:scale-95"
          >
            <span>Request Project Quote</span>
            <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;
