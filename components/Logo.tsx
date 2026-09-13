import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showSubtitle?: boolean;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className = "", showSubtitle = true, size = "md" }: LogoProps) {
  const iconSizes = {
    sm: "w-9 h-9 sm:w-10 sm:h-10",
    md: "w-11 h-11 sm:w-12 sm:h-12",
    lg: "w-14 h-14 sm:w-16 sm:h-16",
  };

  const textSizes = {
    sm: "text-lg sm:text-xl",
    md: "text-2xl sm:text-[26px]",
    lg: "text-3xl sm:text-4xl",
  };

  return (
    <div className={cn("flex items-center gap-3 select-none group cursor-pointer", className)}>
      {/* Framify Circular Logo Emblem with Solid White Border */}
      <div
        className={cn(
          "relative shrink-0 rounded-full overflow-hidden border-2 border-white shadow-lg shadow-sky-950/40 transition-transform duration-300 group-hover:scale-105",
          iconSizes[size]
        )}
      >
        <Image
          src="/framify-logo.png"
          alt="Framify Emblem"
          width={96}
          height={96}
          className="w-full h-full object-cover"
          priority
        />
      </div>

      {/* Brand Name & Tagline */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center">
          <span className={cn("font-black tracking-tight text-white leading-none font-sans drop-shadow-sm", textSizes[size])}>
            Framify
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 ml-1 mb-1 animate-pulse shrink-0" />
        </div>
        {showSubtitle && (
          <span className="text-[10px] sm:text-[11px] uppercase font-mono tracking-widest text-cyan-400 font-semibold mt-0.5">
            Digital Marketing
          </span>
        )}
      </div>
    </div>
  );
}

export default Logo;
