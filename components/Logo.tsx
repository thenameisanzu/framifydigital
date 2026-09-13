import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showSubtitle?: boolean;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className = "", size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "h-8 w-8 sm:h-9 sm:w-9",
    md: "h-10 w-10 sm:h-12 sm:w-12",
    lg: "h-14 w-14 sm:h-16 sm:w-16",
  };

  return (
    <div className={cn("flex items-center select-none group cursor-pointer", className)}>
      <Image
        src="/framify-logo.png"
        alt="Framify Digital Marketing"
        width={160}
        height={160}
        className={cn(
          "object-contain rounded-full shadow-md transition-transform duration-300 group-hover:scale-105",
          sizeClasses[size]
        )}
        priority
      />
    </div>
  );
}

export default Logo;
