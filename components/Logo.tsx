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
    sm: "w-8 h-8",
    md: "w-9 h-9 sm:w-10 sm:h-10",
    lg: "w-12 h-12 sm:w-14 sm:h-14",
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-xl sm:text-2xl",
    lg: "text-2xl sm:text-3xl",
  };

  return (
    <div className={cn("flex items-center gap-2.5 select-none group cursor-pointer", className)}>
      {/* Framify Circular Logo Emblem */}
      <div
        className={cn(
          "relative shrink-0 rounded-full overflow-hidden shadow-md shadow-sky-950/20 transition-transform duration-300 group-hover:scale-105",
          iconSizes[size]
        )}
      >
        <Image
          src="/framify-logo.png"
          alt="Framify Emblem"
          width={80}
          height={80}
          className="w-full h-full object-cover"
          priority
        />
      </div>

      {/* Brand Name & Tagline */}
      <div className="flex flex-col">
        <div className="flex items-center">
          <span className={cn("font-black tracking-tight text-white leading-none font-sans", textSizes[size])}>
            Framify
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 ml-1 mb-1 animate-pulse shrink-0" />
        </div>
        {showSubtitle && (
          <span className="text-[9px] sm:text-[10px] uppercase font-mono tracking-widest text-cyan-400/90 font-semibold mt-0.5">
            Digital Marketing
          </span>
        )}
      </div>
    </div>
  );
}

export default Logo;
