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
    md: "w-10 h-10",
    lg: "w-14 h-14",
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl",
  };

  return (
    <div className={cn("flex items-center gap-2.5 select-none group cursor-pointer", className)}>
      {/* Exact Circular Logo Icon with Transparent Background */}
      <div
        className={cn(
          "relative flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105",
          iconSizes[size]
        )}
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-md"
        >
          <defs>
            <radialGradient id="discGrad" cx="50%" cy="38%" r="62%">
              <stop offset="0%" stopColor="#101d52" />
              <stop offset="65%" stopColor="#081033" />
              <stop offset="100%" stopColor="#04081c" />
            </radialGradient>
          </defs>

          {/* Navy Blue Circular Disc with Transparent Outer BG */}
          <circle cx="50" cy="50" r="48" fill="url(#discGrad)" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.4" />

          {/* White Inner Circle */}
          <circle cx="50" cy="50" r="28" fill="#ffffff" />

          {/* 4-Node Connecting Frame Quad */}
          <line x1="39" y1="43.5" x2="61" y2="45.5" stroke="#081033" strokeWidth="2.8" strokeLinecap="round" />
          <line x1="61" y1="45.5" x2="61" y2="57.5" stroke="#081033" strokeWidth="2.8" strokeLinecap="round" />
          <line x1="61" y1="57.5" x2="39" y2="55" stroke="#081033" strokeWidth="2.8" strokeLinecap="round" />
          <line x1="39" y1="55" x2="39" y2="43.5" stroke="#081033" strokeWidth="2.8" strokeLinecap="round" />

          {/* 4 Connected Nodes */}
          <circle cx="39" cy="43.5" r="3.8" fill="#081033" />
          <circle cx="61" cy="45.5" r="3.8" fill="#081033" />
          <circle cx="61" cy="57.5" r="3.8" fill="#081033" />
          <circle cx="39" cy="55" r="3.8" fill="#081033" />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className="flex items-center">
          <span className={cn("font-black tracking-tight text-white leading-none font-sans", textSizes[size])}>
            Framify
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 ml-1 mb-2 animate-pulse" />
        </div>
        {showSubtitle && (
          <span className="text-[9px] uppercase font-mono tracking-widest text-cyan-400/90 font-medium -mt-0.5">
            Digital Marketing
          </span>
        )}
      </div>
    </div>
  );
}

export default Logo;
