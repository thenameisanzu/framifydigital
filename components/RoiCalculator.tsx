'use client';

import React, { useState } from "react";
import {
  Calculator,
  CheckCircle2,
  MessageCircle,
  Sparkles,
  Palette,
  Video,
  Layout,
  Image as ImageIcon
} from "lucide-react";
import { cn } from "@/lib/utils";

interface PackageItem {
  id: string;
  name: string;
  icon: React.ElementType;
  unit: string;
  basePriceINR: number;
  description: string;
  deliverables: string[];
}

const PACKAGES: PackageItem[] = [
  {
    id: "logos",
    name: "Logo & Brand Identity",
    icon: Palette,
    unit: "Complete Identity Kit",
    basePriceINR: 5000,
    description: "Custom vector logo marks, color guide, typography & profile kit.",
    deliverables: ["Vector AI / SVG / PNG source files", "Color palette & typography guide", "Social media avatar kit"],
  },
  {
    id: "reels",
    name: "Instagram Reels Package",
    icon: Video,
    unit: "Monthly Sprint (8 - 15 Reels)",
    basePriceINR: 12000,
    description: "High-retention 9:16 vertical edits, kinetic captions & cover thumbnails.",
    deliverables: ["Hook optimization & trending sound sync", "Dynamic Malayalam/English subtitles", "Custom grid cover thumbnails"],
  },
  {
    id: "posters",
    name: "Social Media Posters Pack",
    icon: Layout,
    unit: "Pack of 12 - 20 Creatives",
    basePriceINR: 8000,
    description: "High-contrast commercial posters, event announcements & carousel slides.",
    deliverables: ["Feed & Story aspect ratio exports", "Photoshop / Figma source files", "Fast turnaround"],
  },
  {
    id: "thumbnails",
    name: "YouTube Thumbnails Bundle",
    icon: ImageIcon,
    unit: "Bundle of 10 Thumbnails",
    basePriceINR: 4000,
    description: "Click-generating custom thumbnails with aggressive contrast and punchy text.",
    deliverables: ["1280x720 High-Res PNGs", "Mobile-optimized readability", "A/B test variations"],
  },
];

export function RoiCalculator() {
  const [selectedPkg, setSelectedPkg] = useState<string>("reels");

  const currentPackage = PACKAGES.find((p) => p.id === selectedPkg) || PACKAGES[0];

  return (
    <section id="calculator" className="relative w-full py-20 bg-[#080e27] border-b border-sky-500/15 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="reveal text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-sky-500/25 bg-white/90 dark:bg-[#0c1844]/80 px-3.5 py-1 text-xs font-mono text-slate-800 dark:text-cyan-300 backdrop-blur-md mb-3 shadow-sm">
            <Calculator className="size-3.5 text-cyan-600 dark:text-cyan-400" />
            <span className="font-bold">PACKAGE ESTIMATOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Choose Your <span className="gradient-text-cyan">Creative Service</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-700 dark:text-slate-300 font-medium">
            Select a service below to see deliverables and get an instant quote on WhatsApp.
          </p>
        </div>

        {/* Package Selector Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {PACKAGES.map((pkg) => {
            const Icon = pkg.icon;
            const isSelected = selectedPkg === pkg.id;
            return (
              <button
                key={pkg.id}
                type="button"
                onClick={() => setSelectedPkg(pkg.id)}
                className={cn(
                  "p-5 rounded-2xl text-left border transition-all duration-200 cursor-pointer",
                  isSelected
                    ? "bg-white dark:bg-[#0e2154]/90 border-sky-500 dark:border-cyan-400 shadow-xl shadow-sky-500/15 dark:shadow-cyan-950/80 scale-[1.02] ring-2 ring-sky-500 dark:ring-transparent"
                    : "bg-white/95 dark:bg-[#0c1844]/40 border-slate-200 dark:border-sky-500/15 hover:border-sky-400 hover:bg-sky-50/50 dark:hover:bg-[#0c1844]/70 text-slate-700 dark:text-slate-300 shadow-sm"
                )}
              >
                <div className={cn(
                  "size-10 rounded-xl border flex items-center justify-center mb-3 transition-colors",
                  isSelected
                    ? "bg-sky-100 dark:bg-cyan-500/20 border-sky-400 dark:border-cyan-400 text-sky-600 dark:text-cyan-300"
                    : "bg-slate-100 dark:bg-[#080e27] border-slate-200 dark:border-sky-500/25 text-sky-600 dark:text-cyan-400"
                )}>
                  <Icon className="size-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1">{pkg.name}</h3>
                <span className="text-[11px] font-mono text-sky-600 dark:text-cyan-300 font-semibold block">{pkg.unit}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Package Details Box */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-cyan-500/30 bg-white/95 dark:bg-gradient-to-r dark:from-[#0c1844]/95 dark:via-[#0e2257]/90 dark:to-[#0c1844]/95 max-w-3xl mx-auto shadow-xl overflow-hidden min-h-[320px]">
          <div key={currentPackage.id} className="animate-detail-fade flex flex-col justify-between h-full">
            <div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-sky-500/20">
                <div>
                  <span className="text-xs font-mono uppercase text-sky-600 dark:text-cyan-400 font-bold block">Selected Plan:</span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-0.5">{currentPackage.name}</h3>
                </div>

                <span className="text-xs font-mono text-sky-700 dark:text-cyan-200 bg-sky-100 dark:bg-sky-950/80 px-3.5 py-1.5 rounded-full border border-sky-200 dark:border-sky-500/30 font-semibold shadow-sm">
                  {currentPackage.unit}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 my-4 leading-relaxed font-medium">
                {currentPackage.description}
              </p>

              <div className="space-y-2.5 mb-6">
                {currentPackage.deliverables.map((d, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs text-slate-800 dark:text-slate-200 font-medium">
                    <CheckCircle2 className="size-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200 dark:border-sky-500/20">
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 text-center sm:text-left font-medium">
                Fast turnaround & direct WhatsApp revision support
              </span>

              <a
                href={`https://wa.me/919447520844?text=Hi%20Framify,%20I'd%20like%20to%20get%20a%20quote%20for%20the%20${encodeURIComponent(currentPackage.name)}%20service.`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-lg shadow-emerald-600/20 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <MessageCircle className="size-4" />
                <span>Get WhatsApp Quote</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RoiCalculator;
