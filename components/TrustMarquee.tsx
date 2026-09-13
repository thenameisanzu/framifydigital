import React from "react";
import { Sparkles, CheckCircle2 } from "lucide-react";

const STRIP_ITEMS = [
  "🎨 LOGO DESIGN & BRANDING",
  "🎬 VIRAL REELS & VIDEO EDITING",
  "🖼️ SOCIAL MEDIA POSTERS",
  "⚡ HIGH-CTR YOUTUBE THUMBNAILS",
  "🚀 DIGITAL MARKETING GROWTH SYSTEMS",
  "📍 KOTTAYAM, KARUKACHAL 686540",
  "📞 +91 94475 20844",
];

export function TrustMarquee() {
  return (
    <section className="reveal relative w-full bg-[#090a0f] py-6 border-b border-white/[0.06] overflow-hidden">
      <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_64px,_black_calc(100%-64px),transparent_100%)]">
        <div className="flex w-max animate-marquee space-x-6 sm:space-x-10">
          {[...STRIP_ITEMS, ...STRIP_ITEMS].map((item, idx) => (
            <div
              key={`${item}-${idx}`}
              className="flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm"
            >
              <span className="size-1.5 rounded-full bg-cyan-400" />
              <span className="text-xs sm:text-sm font-mono font-bold tracking-wider text-slate-200">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustMarquee;
