import React from "react";
import {
  Compass,
  Palette,
  Video,
  Rocket,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  MessageCircle
} from "lucide-react";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    step: "01",
    icon: Compass,
    title: "Brand Discovery & Strategy",
    description: "We analyze your business, competitors, and target audience in Kerala and online to define a distinct visual and marketing direction.",
    deliverables: [
      "Visual positioning strategy",
      "Audience engagement goals",
    ],
  },
  {
    step: "02",
    icon: Palette,
    title: "Identity & Visual Assets",
    description: "Crafting iconic logos, brand guidelines, and distinctive graphic elements that make your brand immediately recognizable.",
    deliverables: [
      "Custom vector logo marks",
      "Typography & color systems",
    ],
  },
  {
    step: "03",
    icon: Video,
    title: "Content & Creative Production",
    description: "Producing viral Instagram Reels, commercial posters, and click-generating thumbnails engineered for maximum feed retention.",
    deliverables: [
      "High-retention 9:16 vertical reels",
      "Feed posters & story creatives",
    ],
  },
  {
    step: "04",
    icon: Rocket,
    title: "Systemized Growth",
    description: "Deploying a consistent publishing and marketing system that turns social media attention into direct customer inquiries and sales.",
    deliverables: [
      "Publishing schedule & DM funnels",
      "Targeted reach & community growth",
    ],
  },
];

export function Process() {
  return (
    <section id="framework" className="relative w-full py-20 bg-[#090a0f] border-b border-white/[0.06] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 size-96 rounded-full bg-cyan-500/[0.03] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="reveal text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.04] px-3.5 py-1 text-xs font-mono text-cyan-300 backdrop-blur-md mb-3 shadow-sm">
            <Sparkles className="size-3.5 text-cyan-400" />
            <span>HOW IT WORKS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Smart Businesses <span className="gradient-text-cyan">Create Systems</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            A proven 4-step creative workflow from brand concept to consistent digital growth.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            const delays = ["delay-100", "delay-150", "delay-200", "delay-250"];
            return (
              <div
                key={step.step}
                className={cn(
                  "reveal group relative rounded-2xl glass-card p-6 flex flex-col justify-between border border-white/[0.08] hover:border-cyan-400/40 transition-all duration-300 hover:-translate-y-1",
                  delays[index % delays.length]
                )}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black font-mono text-cyan-400/70 group-hover:text-cyan-300 transition-colors">
                      {step.step}
                    </span>
                  </div>

                  <div className="size-11 rounded-xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-105 group-hover:border-cyan-400 transition-all">
                    <Icon className="size-5" />
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.06] space-y-1.5">
                  {step.deliverables.map((d, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-xs text-slate-300">
                      <CheckCircle2 className="size-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="reveal delay-200 mt-10 text-center">
          <a
            href="#contact"
            className="btn-shimmer inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-lg transition-all hover:scale-105 active:scale-95"
          >
            <span>Start Your Project</span>
            <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Process;
