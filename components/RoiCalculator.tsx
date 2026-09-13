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
    <section id="calculator" className="relative w-full py-20 bg-[#090a0f] border-b border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="reveal text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.04] px-3.5 py-1 text-xs font-mono text-cyan-300 backdrop-blur-md mb-3 shadow-sm">
            <Calculator className="size-3.5 text-cyan-400" />
            <span>PACKAGE ESTIMATOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Choose Your <span className="gradient-text-cyan">Creative Service</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300">
            Select a service below to see deliverables and get an instant quote on WhatsApp.
          </p>
        </div>

        {/* Package Selector Cards */}
        <div className="reveal delay-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {PACKAGES.map((pkg) => {
            const Icon = pkg.icon;
            const isSelected = selectedPkg === pkg.id;
            return (
              <button
                key={pkg.id}
                type="button"
                onClick={() => setSelectedPkg(pkg.id)}
                className={cn(
                  "relative p-5 rounded-2xl text-left border transition-all duration-200 cursor-pointer flex flex-col justify-between",
                  isSelected
                    ? "border-2 border-cyan-400 ring-2 ring-cyan-400/25 bg-gradient-to-b from-[#141d2e] via-[#101726] to-[#0c121d] shadow-xl shadow-cyan-500/15 scale-[1.03] z-10"
                    : "bg-white/[0.03] border-white/[0.08] hover:border-white/[0.2] hover:bg-white/[0.06] text-slate-400 opacity-80 hover:opacity-100"
                )}
              >
                {/* Active Selection Badge */}
                {isSelected && (
                  <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-cyan-400 text-slate-950 px-2 py-0.5 text-[10px] font-mono font-black shadow-md shadow-cyan-400/30 uppercase">
                    <CheckCircle2 className="size-3 fill-slate-950 text-cyan-400" />
                    <span>Selected</span>
                  </div>
                )}

                <div>
                  <div className={cn(
                    "size-11 rounded-xl border flex items-center justify-center mb-3 transition-all",
                    isSelected
                      ? "bg-cyan-400 border-cyan-300 text-slate-950 shadow-md shadow-cyan-400/40"
                      : "bg-white/[0.04] border-white/[0.08] text-cyan-400"
                  )}>
                    <Icon className="size-5 stroke-[2.2]" />
                  </div>
                  <h3 className={cn(
                    "text-sm font-bold mb-1 transition-colors",
                    isSelected ? "text-white font-extrabold text-[15px]" : "text-slate-300"
                  )}>
                    {pkg.name}
                  </h3>
                </div>

                <span className={cn(
                  "text-[11px] font-mono block mt-2 font-semibold",
                  isSelected ? "text-cyan-200" : "text-slate-400"
                )}>
                  {pkg.unit}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Package Details Box */}
        <div className="reveal delay-200 glass-card rounded-2xl p-6 sm:p-8 border border-white/[0.1] bg-gradient-to-r from-[#0e121a]/95 via-[#131926]/90 to-[#0e121a]/95 max-w-3xl mx-auto shadow-xl overflow-hidden min-h-[320px]">
          <div key={currentPackage.id} className="animate-detail-fade flex flex-col justify-between h-full">
            <div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
                <div>
                  <span className="text-xs font-mono uppercase text-cyan-400 font-semibold block">Selected Plan:</span>
                  <h3 className="text-xl font-bold text-white mt-0.5">{currentPackage.name}</h3>
                </div>

                <span className="text-xs font-mono text-cyan-200 bg-white/[0.06] px-3.5 py-1.5 rounded-full border border-white/[0.1] shadow-sm">
                  {currentPackage.unit}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 my-4 leading-relaxed">
                {currentPackage.description}
              </p>

              <div className="space-y-2.5 mb-6">
                {currentPackage.deliverables.map((d, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/[0.08]">
              <span className="text-xs font-mono text-slate-400 text-center sm:text-left">
                Fast turnaround & direct WhatsApp revision support
              </span>

              <a
                href={`https://wa.me/919447520844?text=Hi%20Framify,%20I'd%20like%20to%20get%20a%20quote%20for%20the%20${encodeURIComponent(currentPackage.name)}%20service.`}
                target="_blank"
                rel="noreferrer"
                className="btn-shimmer w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-lg shadow-emerald-500/20 transition-all hover:scale-105 active:scale-95 cursor-pointer"
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
