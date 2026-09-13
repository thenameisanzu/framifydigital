'use client';

import React, { useState, useMemo } from "react";
import {
  Calculator,
  TrendingUp,
  DollarSign,
  ArrowRight,
  Sparkles,
  Zap,
  CheckCircle2,
  MessageCircle
} from "lucide-react";
import { cn } from "@/lib/utils";

interface CategoryModel {
  name: string;
  expectedViews: string;
  inquiryRate: string;
  roiUplift: string;
}

const CATEGORIES: Record<string, CategoryModel> = {
  reels: {
    name: "Reels & Video Content Strategy",
    expectedViews: "250k – 1.5M+ Views",
    inquiryRate: "180 – 500+ DMs / Leads",
    roiUplift: "4.5x Reach Multiplier",
  },
  branding: {
    name: "Logo & Visual Brand Overhaul",
    expectedViews: "High Authority Positioning",
    inquiryRate: "3x Better Conversion on Ads",
    roiUplift: "Instant Market Trust",
  },
  posters: {
    name: "Social Media Posters & Creatives",
    expectedViews: "Consistent Daily Feed Presence",
    inquiryRate: "+240% Engagement & Saves",
    roiUplift: "3.2x Community Growth",
  },
  ads: {
    name: "Meta & Google Paid Ad Campaigns",
    expectedViews: "50,000+ Targeted Kerala Reach",
    inquiryRate: "350+ Direct WhatsApp Inquiries",
    roiUplift: "5.2x Revenue ROAS",
  },
};

export function RoiCalculator() {
  const [budget, setBudget] = useState<number>(25000);
  const [categoryKey, setCategoryKey] = useState<string>("reels");
  const [currency, setCurrency] = useState<"INR" | "USD">("INR");

  const selectedCategory = CATEGORIES[categoryKey] || CATEGORIES.reels;

  const formatCurrency = (val: number) => {
    if (currency === "INR") {
      return `₹${val.toLocaleString("en-IN")}`;
    }
    return `$${Math.round(val / 85).toLocaleString("en-US")}`;
  };

  const estimatedReach = useMemo(() => {
    const factor = budget / 10000;
    const viewsMin = Math.round(50 * factor);
    const viewsMax = Math.round(180 * factor);
    const estimatedLeads = Math.round(35 * factor);

    return {
      views: `${viewsMin}k – ${viewsMax}k+ Impressions`,
      leads: `${estimatedLeads}+ Direct WhatsApp / DM Leads`,
      roi: `${(3.5 + factor * 0.2).toFixed(1)}x`,
    };
  }, [budget]);

  return (
    <section id="calculator" className="relative w-full py-24 bg-[#080e27] border-b border-sky-500/15 overflow-hidden">
      {/* Glow ambient background */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 size-96 rounded-full bg-cyan-600/10 blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 size-96 rounded-full bg-blue-600/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/25 bg-[#0c1844]/80 px-3.5 py-1 text-xs font-mono text-cyan-300 backdrop-blur-md mb-4">
            <Calculator className="size-3.5 text-cyan-400" />
            <span>INTERACTIVE GROWTH ESTIMATOR</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Estimate Your <span className="gradient-text-cyan">Creative & Campaign Reach</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            See the projected impact Framify's growth systems, viral reels, and creative branding can deliver for your monthly budget.
          </p>
        </div>

        {/* Main Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Inputs Card */}
          <div className="lg:col-span-6 glass-card rounded-2xl p-6 sm:p-8 border border-sky-500/20">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="flex size-6 rounded-md bg-cyan-500/20 border border-cyan-400/40 items-center justify-center text-xs font-mono text-cyan-300">01</span>
                <span>Select Your Requirements</span>
              </h3>

              {/* Currency switch */}
              <div className="flex items-center gap-1 bg-[#0c1844] p-1 rounded-lg border border-sky-500/20 text-xs font-mono">
                <button
                  type="button"
                  onClick={() => setCurrency("INR")}
                  className={cn("px-2 py-0.5 rounded", currency === "INR" ? "bg-cyan-500 text-slate-950 font-bold" : "text-slate-400")}
                >
                  INR (₹)
                </button>
                <button
                  type="button"
                  onClick={() => setCurrency("USD")}
                  className={cn("px-2 py-0.5 rounded", currency === "USD" ? "bg-cyan-500 text-slate-950 font-bold" : "text-slate-400")}
                >
                  USD ($)
                </button>
              </div>
            </div>

            {/* Service Category Selection */}
            <div className="mb-8">
              <label className="block text-xs font-mono uppercase text-slate-300 mb-3 tracking-wider font-semibold">
                Primary Goal / Service Focus:
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                {Object.entries(CATEGORIES).map(([key, item]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setCategoryKey(key)}
                    className={cn(
                      "p-3 rounded-xl border text-xs font-semibold text-left transition-all",
                      categoryKey === key
                        ? "bg-gradient-to-r from-blue-900/60 to-cyan-950/60 border-cyan-400 text-white shadow-md shadow-cyan-950"
                        : "bg-[#0c1844]/60 border-sky-500/15 text-slate-300 hover:border-sky-400/40 hover:text-white"
                    )}
                  >
                    <span className="block font-bold">{item.name}</span>
                    <span className="text-[10px] font-mono text-cyan-300/80">
                      {item.roiUplift}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Monthly Budget Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-mono uppercase text-slate-300 tracking-wider font-semibold">
                  Monthly Marketing / Creative Budget:
                </label>
                <span className="text-lg font-bold font-mono text-cyan-300 bg-[#0c1844] px-3 py-1 rounded-lg border border-sky-500/20">
                  {formatCurrency(budget)}
                </span>
              </div>
              <input
                type="range"
                min="10000"
                max="250000"
                step="5000"
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full h-2 bg-[#0c1844] rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-2">
                <span>{currency === "INR" ? "₹10,000" : "$120"}</span>
                <span>{currency === "INR" ? "₹75,000" : "$900"}</span>
                <span>{currency === "INR" ? "₹1,50,000" : "$1,800"}</span>
                <span>{currency === "INR" ? "₹2,50,000+" : "$3,000+"}</span>
              </div>
            </div>
          </div>

          {/* Right Live Projections Card */}
          <div className="lg:col-span-6 glass-card rounded-2xl p-6 sm:p-8 border border-cyan-500/30 bg-gradient-to-b from-[#0c1844]/90 to-[#080e27]/90 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 px-4 py-1.5 rounded-bl-xl bg-cyan-500/20 border-b border-l border-cyan-400/40 text-[11px] font-mono text-cyan-300 font-semibold">
              KINETIC PROJECTION
            </div>

            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="flex size-6 rounded-md bg-cyan-500/20 border border-cyan-400/40 items-center justify-center text-xs font-mono text-cyan-300">02</span>
              <span>Projected Growth Output</span>
            </h3>

            {/* Estimated Reach Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0c1844] via-[#10235e] to-[#0c1844] border border-cyan-400/30 mb-6 relative group">
              <span className="text-xs font-mono uppercase text-cyan-300 font-semibold block mb-1">
                Projected Monthly Reach & Visibility:
              </span>
              <div className="text-2xl sm:text-4xl font-black text-white font-mono tracking-tight">
                {estimatedReach.views}
              </div>

              <div className="mt-3 pt-3 border-t border-sky-500/20 flex items-center justify-between text-xs">
                <span className="text-slate-300">
                  Estimated Inquiries: <strong className="text-emerald-400 font-mono">{estimatedReach.leads}</strong>
                </span>
                <span className="font-mono text-cyan-300 bg-sky-950 px-2 py-0.5 rounded border border-sky-500/30">
                  {estimatedReach.roi} Expected ROAS
                </span>
              </div>
            </div>

            {/* Deliverable assurance */}
            <div className="space-y-2 mb-6 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-cyan-400 shrink-0" />
                <span>Tailored for Kerala regional markets, Pan-India & international diaspora</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-cyan-400 shrink-0" />
                <span>Fast turnaround with dedicated WhatsApp group for real-time reviews</span>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <a
                href={`https://wa.me/919447520844?text=Hi%20Framify,%20I'm%20looking%20for%20${encodeURIComponent(selectedCategory.name)}%20with%20a%20budget%20of%20${encodeURIComponent(formatCurrency(budget))}.`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-1/2 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 py-3.5 text-xs font-bold text-white shadow-lg shadow-emerald-600/30 transition-all"
              >
                <MessageCircle className="size-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href="#contact"
                className="w-full sm:w-1/2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 py-3.5 text-xs font-bold text-white shadow-lg shadow-cyan-500/25 hover:scale-105 transition-all"
              >
                <Sparkles className="size-4" />
                <span>Get Detailed Proposal</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RoiCalculator;
