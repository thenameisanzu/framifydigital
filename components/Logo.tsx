import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showSubtitle?: boolean;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className = "", showSubtitle = true, size = "md" }: LogoProps) {
  const iconSizes = {
    sm: "w-8 h-8",
    md: "w-9 h-9",
    lg: "w-12 h-12",
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl",
  };

  return (
    <div className={cn("flex items-center gap-2.5 select-none group cursor-pointer", className)}>
      {/* High-Contrast White Circular Badge Icon (Always clearly visible on dark navbar) */}
      <div
        className={cn(
          "relative flex items-center justify-center shrink-0 rounded-full bg-white shadow-lg shadow-cyan-500/10 transition-transform duration-300 group-hover:scale-105 p-1",
          iconSizes[size]
        )}
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* 4-Node Connecting Frame Lines (Deep Navy) */}
          <line x1="28" y1="36" x2="72" y2="40" stroke="#081033" strokeWidth="5.5" strokeLinecap="round" />
          <line x1="72" y1="40" x2="72" y2="68" stroke="#081033" strokeWidth="5.5" strokeLinecap="round" />
          <line x1="72" y1="68" x2="28" y2="64" stroke="#081033" strokeWidth="5.5" strokeLinecap="round" />
          <line x1="28" y1="64" x2="28" y2="36" stroke="#081033" strokeWidth="5.5" strokeLinecap="round" />

          {/* 4 Connected Nodes */}
          <circle cx="28" cy="36" r="7.5" fill="#081033" />
          <circle cx="72" cy="40" r="7.5" fill="#081033" />
          <circle cx="72" cy="68" r="7.5" fill="#081033" />
          <circle cx="28" cy="64" r="7.5" fill="#081033" />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className="flex items-center">
          <span className={cn("font-black tracking-tight text-slate-900 dark:text-white leading-none font-sans", textSizes[size])}>
            Framify
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400 ml-1 mb-2 animate-pulse" />
        </div>
        {showSubtitle && (
          <span className="text-[9px] uppercase font-mono tracking-widest text-cyan-700 dark:text-cyan-400 font-semibold -mt-0.5">
            Digital Marketing
          </span>
        )}
      </div>
    </div>
  );
}

export default Logo;
