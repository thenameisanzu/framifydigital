'use client';

import React, { useState } from "react";
import {
  Star,
  Quote,
  ShieldCheck,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarText: string;
  rating: number;
  highlight: string;
  content: string;
  verifiedMetric: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "t-1",
    name: "Marcus Vance",
    role: "Chief Executive Officer",
    company: "Nexis AI Platform",
    avatarText: "MV",
    rating: 5,
    highlight: "Framify generated $4.2M in enterprise pipeline within 9 months.",
    content: "Before Framify, our ad spend was bleeding money on vanity clicks. Their team redesigned our B2B funnels and took our demo conversion rate from sub-1% to over 3.8%. They act as an extension of our executive growth team.",
    verifiedMetric: "7.8x Pipeline ROI",
  },
  {
    id: "t-2",
    name: "Elena Rostova",
    role: "VP of Growth & E-Commerce",
    company: "Aura Luxury Apparel",
    avatarText: "ER",
    rating: 5,
    highlight: "Blown away by their creative velocity and ROAS stability.",
    content: "Finding an agency that understands both ruthless data attribution and high-aesthetic brand design is nearly impossible. Framify delivered both. Our Q4 Black Friday was our most profitable quarter in company history.",
    verifiedMetric: "6.2x Blended ROAS",
  },
  {
    id: "t-3",
    name: "Dr. Julian Thorne",
    role: "Founder & CMO",
    company: "Volt Health & Longevity",
    avatarText: "JT",
    rating: 5,
    highlight: "Scalability with zero ad fatigue. We jumped from $85k to $640k/mo.",
    content: "The dynamic kinetic creative testing Framify runs is second to none. While other agencies were crying about iOS privacy changes, Framify built custom CAPI pipelines and scaled our TikTok & Meta ads effortlessly.",
    verifiedMetric: "+650% Revenue Scaled",
  },
  {
    id: "t-4",
    name: "Sarah Chen",
    role: "Head of Marketing",
    company: "Prism Global Fintech",
    avatarText: "SC",
    rating: 5,
    highlight: "Our KYC sign-up completion jumped from 12% to 28.6%.",
    content: "The CRO overhaul they implemented on our core registration funnel was transformative. They didn't just tweak button colors—they rebuilt the entire customer psychology journey. The ROI was paid back in 14 days.",
    verifiedMetric: "-60% CAC Reduction",
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
    <section id="testimonials" className="relative w-full py-24 bg-[#080e27] border-b border-sky-500/15 overflow-hidden">
      {/* Glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[550px] rounded-full bg-blue-900/15 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/25 bg-[#0c1844]/80 px-3.5 py-1 text-xs font-mono text-cyan-300 backdrop-blur-md mb-4">
            <Quote className="size-3.5 text-cyan-400" />
            <span>CLIENT REPUTATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Loved By <span className="gradient-text-cyan">Founders & CMOs</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Read what visionary executives say about scaling their revenue with Framify.
          </p>
        </div>

        {/* Featured Testimonial Spotlight */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative rounded-3xl glass-card p-8 sm:p-12 border border-sky-500/25 bg-gradient-to-br from-[#0c1844]/90 via-[#10235e]/70 to-[#080e27]/95 shadow-2xl">
            {/* Stars and Verified Metric Badge */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-1.5">
                {[...Array(currentT.rating)].map((_, i) => (
                  <Star key={i} className="size-5 text-amber-400 fill-amber-400" />
                ))}
              </div>

              <div className="inline-flex items-center gap-1.5 rounded-full bg-cyan-950 border border-cyan-400/40 px-3 py-1 text-xs font-mono font-bold text-cyan-300">
                <TrendingUp className="size-3.5 text-cyan-400" />
                <span>{currentT.verifiedMetric}</span>
              </div>
            </div>

            {/* Big Highlight Quote */}
            <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug mb-6">
              "{currentT.highlight}"
            </h3>

            {/* Body */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
              "{currentT.content}"
            </p>

            {/* Author Footer */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-sky-500/20">
              <div className="flex items-center gap-3.5">
                <div className="size-12 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold font-mono text-base shadow-md">
                  {currentT.avatarText}
                </div>
                <div>
                  <h4 className="text-base font-bold text-white flex items-center gap-1.5">
                    {currentT.name}
                    <ShieldCheck className="size-4 text-cyan-400" />
                  </h4>
                  <p className="text-xs text-slate-400 font-mono">
                    {currentT.role} · <span className="text-cyan-300">{currentT.company}</span>
                  </p>
                </div>
              </div>

              {/* Slider Arrows */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prev}
                  className="p-2.5 rounded-xl border border-sky-500/30 bg-[#0c1844] text-slate-300 hover:text-white hover:border-cyan-400 transition-colors"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="size-5" />
                </button>
                <div className="text-xs font-mono text-slate-400 px-2">
                  {activeIndex + 1} / {TESTIMONIALS.length}
                </div>
                <button
                  type="button"
                  onClick={next}
                  className="p-2.5 rounded-xl border border-sky-500/30 bg-[#0c1844] text-slate-300 hover:text-white hover:border-cyan-400 transition-colors"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="size-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Small Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {TESTIMONIALS.map((t, idx) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={cn(
                "p-4 rounded-xl text-left border transition-all",
                activeIndex === idx
                  ? "glass-card border-cyan-400 bg-sky-950/60 shadow-lg shadow-cyan-950"
                  : "bg-[#0c1844]/40 border-sky-500/10 hover:border-sky-400/30 hover:bg-[#0c1844]/70"
              )}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="size-6 rounded-full bg-cyan-500/30 flex items-center justify-center text-[10px] font-bold text-cyan-300">
                  {t.avatarText}
                </div>
                <span className="text-xs font-bold text-white truncate">{t.name}</span>
              </div>
              <p className="text-[11px] text-slate-300 font-mono truncate">{t.company}</p>
              <span className="text-[10px] font-mono text-cyan-400 mt-1 block">{t.verifiedMetric}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
