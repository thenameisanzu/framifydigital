'use client';

import React, { useState } from "react";
import {
  Star,
  Quote,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Testimonial {
  id: string;
  name: string;
  business: string;
  location: string;
  rating: number;
  highlight: string;
  content: string;
  serviceReceived: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "t-1",
    name: "Anoop K.",
    business: "Food & Cafe Venture",
    location: "Kottayam, Kerala",
    rating: 5,
    highlight: "Our reels started hitting 100k+ organic views consistently.",
    content: "Framify took over our Instagram reels production and social creatives. The editing pacing and visual hooks are top tier. We saw a direct increase in weekend customer footfalls.",
    serviceReceived: "Reels & Social Media Posters",
  },
  {
    id: "t-2",
    name: "Rahul M.",
    business: "Tech & Lifestyle Creator",
    location: "Kerala",
    rating: 5,
    highlight: "My YouTube video CTR shot up from 4% to over 11%.",
    content: "Their custom thumbnail designs and visual branding are incredible. Clean typography, perfect color contrast on mobile screens, and delivered on time every single time.",
    serviceReceived: "YouTube Thumbnails & Logo",
  },
  {
    id: "t-3",
    name: "Dr. Sreejith",
    business: "Ayurvedic Healthcare Clinic",
    location: "Kerala",
    rating: 5,
    highlight: "Our new logo and patient inquiry posters brought huge clarity to our brand.",
    content: "Framify created a modern, elegant identity for our clinic and designed our monthly promotional posters. Great communication via WhatsApp and very professional team.",
    serviceReceived: "Logo & Brand Identity",
  },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => {
    setActiveIndex((current) => (current === 0 ? TESTIMONIALS.length - 1 : current - 1));
  };

  const next = () => {
    setActiveIndex((current) => (current === TESTIMONIALS.length - 1 ? 0 : current + 1));
  };

  const currentT = TESTIMONIALS[activeIndex];

  return (
    <section id="testimonials" className="relative w-full py-20 bg-slate-50 dark:bg-[#080e27] border-b border-slate-200 dark:border-sky-500/15 overflow-hidden transition-colors duration-300">
      {/* Glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[500px] rounded-full bg-blue-500/5 dark:bg-blue-900/15 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-sky-500/25 bg-white/90 dark:bg-[#0c1844]/80 px-3.5 py-1 text-xs font-mono text-cyan-700 dark:text-cyan-300 backdrop-blur-md mb-3 shadow-sm">
            <Quote className="size-3.5 text-cyan-500 dark:text-cyan-400" />
            <span>CLIENT EXPERIENCES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Trusted by <span className="gradient-text-cyan">Creators & Businesses</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            What our clients say about our design quality, video editing, and on-time delivery.
          </p>
        </div>

        {/* Featured Testimonial Card */}
        <div className="max-w-3xl mx-auto">
          <div className="relative rounded-2xl glass-card p-7 sm:p-10 border border-slate-200 dark:border-sky-500/25 bg-gradient-to-br from-white via-sky-50/50 to-blue-50/50 dark:from-[#0c1844]/90 dark:via-[#0e2154]/70 dark:to-[#080e27]/95 shadow-xl">
            {/* Stars & Tag */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(currentT.rating)].map((_, i) => (
                  <Star key={i} className="size-4 text-amber-400 fill-amber-400" />
                ))}
              </div>

              <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-cyan-100 dark:bg-cyan-950 border border-cyan-200 dark:border-cyan-400/30 text-cyan-800 dark:text-cyan-300 font-medium">
                {currentT.serviceReceived}
              </span>
            </div>

            {/* Big Highlight */}
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-snug mb-4">
              "{currentT.highlight}"
            </h3>

            {/* Body */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              "{currentT.content}"
            </p>

            {/* Author and Nav */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-sky-500/20">
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                  {currentT.name}
                  <ShieldCheck className="size-4 text-cyan-500 dark:text-cyan-400" />
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  {currentT.business} · <span className="text-cyan-700 dark:text-cyan-300 font-semibold">{currentT.location}</span>
                </p>
              </div>

              {/* Slider Arrows */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prev}
                  className="p-2 rounded-lg border border-slate-200 dark:border-sky-500/30 bg-slate-100 dark:bg-[#0c1844] text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-cyan-400 transition-colors shadow-sm active:scale-95"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="size-4" />
                </button>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  {activeIndex + 1} / {TESTIMONIALS.length}
                </span>
                <button
                  type="button"
                  onClick={next}
                  className="p-2 rounded-lg border border-slate-200 dark:border-sky-500/30 bg-slate-100 dark:bg-[#0c1844] text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-cyan-400 transition-colors shadow-sm active:scale-95"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="size-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
