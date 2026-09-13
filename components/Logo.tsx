import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showSubtitle?: boolean;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className = "", showSubtitle = true, size = "md" }: LogoProps) {
  const iconSizes = {
    sm: "w-7 h-7",
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
      {/* Circle Icon matching the logo */}
      <div
        className={cn(
          "relative flex items-center justify-center rounded-full bg-white text-[#080e27] shadow-lg shadow-blue-900/30 transition-transform duration-300 group-hover:scale-105",
          iconSizes[size]
        )}
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-4/5 h-4/5"
        >
          {/* Connecting frame lines */}
          <path
            d="M 28 36 L 72 40 L 72 68 L 28 64 Z"
            stroke="#0c1844"
            strokeWidth="5"
            strokeLinejoin="round"
          />
          {/* Interior subtle glow line */}
          <path
            d="M 28 36 L 72 40 L 72 68 L 28 64 Z"
            stroke="#38bdf8"
            strokeWidth="1.5"
            strokeDasharray="4 3"
            opacity="0.6"
          />
          {/* 4 Nodes */}
          <circle cx="28" cy="36" r="7" fill="#0c1844" />
          <circle cx="28" cy="36" r="3" fill="#38bdf8" />

          <circle cx="72" cy="40" r="7" fill="#0c1844" />
          <circle cx="72" cy="40" r="3" fill="#38bdf8" />

          <circle cx="72" cy="68" r="7" fill="#0c1844" />
          <circle cx="72" cy="68" r="3" fill="#38bdf8" />

          <circle cx="28" cy="64" r="7" fill="#0c1844" />
          <circle cx="28" cy="64" r="3" fill="#38bdf8" />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className="flex items-center">
          <span className={cn("font-extrabold tracking-tight text-white leading-none", textSizes[size])}>
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
