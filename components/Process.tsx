import React from "react";
import {
  Compass,
  Cpu,
  Rocket,
  LineChart,
  CheckCircle2,
  Sparkles,
  ArrowRight
} from "lucide-react";

const STEPS = [
  {
    step: "01",
    icon: Compass,
    title: "Deep Kinetic Audit & Conversion Recon",
    subtitle: "Days 1 – 7",
    description: "We dismantle your existing ad accounts, tracking architecture, and funnel drop-offs. We identify the top 20% of high-leverage revenue leaks and formulate your aggressive 90-day scale model.",
    deliverables: [
      "Full tracking CAPI & pixel health diagnostic",
      "Competitor ad intelligence & creative gap report",
      "Immediate quick-win cost reduction plan",
    ],
  },
  {
    step: "02",
    icon: Cpu,
    title: "Conversion Architecture & Creative Lab",
    subtitle: "Days 8 – 14",
    description: "Our in-house design & CRO engineers craft bespoke high-velocity landing pages, direct-response UGC video ads, and hook matrices specifically designed to out-convert current benchmarks.",
    deliverables: [
      "Custom high-speed landing page build",
      "Initial 25+ modular video & static ad creatives",
      "Full CRM / lead enrichment webhook automation",
    ],
  },
  {
    step: "03",
    icon: Rocket,
    title: "Omnichannel Kinetic Campaign Launch",
    subtitle: "Days 15 – 30",
    description: "We deploy multi-tiered acquisition campaigns across Google, Meta, TikTok & LinkedIn. Algorithmic budget pacing filters out losers within 48 hours to channel 80% of ad capital into verified winning angles.",
    deliverables: [
      "Multi-audience programmatic campaign deployment",
      "Automated bid & dayparting calibration",
      "Live real-time performance dashboard access",
    ],
  },
  {
    step: "04",
    icon: LineChart,
    title: "Aggressive Scale & Market Dominance",
    subtitle: "Day 30 and Beyond",
    description: "With proven unit economics secured, we scale ad budgets with confidence—doubling or tripling spend while sustaining target CAC and unlocking record quarterly gross margins.",
    deliverables: [
      "Weekly creative sprint refresh (zero ad fatigue)",
      "Continuous A/B split-testing on landing pages",
      "Bi-weekly strategic growth call with leadership",
    ],
  },
];

export function Process() {
  return (
    <section id="framework" className="relative w-full py-24 bg-[#060a1d] border-b border-sky-500/15 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 size-96 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/25 bg-[#0c1844]/80 px-3.5 py-1 text-xs font-mono text-cyan-300 backdrop-blur-md mb-4">
            <Sparkles className="size-3.5 text-cyan-400" />
            <span>THE FRAMIFY BLUEPRINT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            How We Engineer <span className="gradient-text-cyan">Unfair Market Advantage</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            A repeatable 4-stage growth engineering system honed across $48M+ in profitable ad spend.
          </p>
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className="group relative rounded-2xl glass-card p-6 flex flex-col justify-between border border-sky-500/15 hover:border-cyan-400/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black font-mono text-cyan-400/70 group-hover:text-cyan-300 transition-colors">
                      {step.step}
                    </span>
                    <span className="text-[10px] font-mono uppercase bg-sky-950 px-2 py-0.5 rounded border border-sky-500/30 text-slate-300">
                      {step.subtitle}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="size-12 rounded-xl bg-gradient-to-br from-blue-600/30 to-cyan-500/20 border border-sky-500/30 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-105 group-hover:border-cyan-400 transition-all">
                    <Icon className="size-6" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-200 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Deliverables Bullet List */}
                <div className="pt-4 border-t border-sky-500/15 space-y-2">
                  <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block font-semibold">
                    Core Output:
                  </span>
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

        {/* Bottom CTA Bar */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-[#0c1844] hover:bg-cyan-600 border border-sky-500/30 px-6 py-3 text-sm font-bold text-white transition-all shadow-lg hover:scale-105"
          >
            <span>Ready to implement this framework on your brand?</span>
            <ArrowRight className="size-4 text-cyan-400" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Process;
