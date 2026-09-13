import React from "react";
import { Award, ShieldCheck, Zap } from "lucide-react";

const PARTNERS = [
  { name: "Google Premier Partner", badge: "Top 3% Agency", type: "Certification" },
  { name: "Meta Business Partner", badge: "Diamond Tier", type: "Certification" },
  { name: "TikTok Ads Partner", badge: "Elite Scaling", type: "Certification" },
  { name: "Shopify Plus Expert", badge: "Conversion Spec", type: "E-Commerce" },
  { name: "HubSpot Platinum Partner", badge: "CRM & RevOps", type: "Tech" },
  { name: "Klaviyo Elite Partner", badge: "Retention Master", type: "Lifecycle" },
];

const CLIENT_BRANDS = [
  "NEXIS AI",
  "VOLT HEALTH",
  "LUMEN CLOUD",
  "AURA APPAREL",
  "SYNAPSE PAY",
  "HYPERDRIVE SAAS",
  "KINETIC ROBOTICS",
  "PRISM FINTECH",
];

export function TrustMarquee() {
  return (
    <section className="relative w-full bg-[#060a1d] py-12 border-b border-sky-500/10 overflow-hidden">
      {/* Glow background accent */}
      <div className="absolute inset-0 bg-radial-navy opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-sky-500/10">
          <div className="text-center md:text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold flex items-center justify-center md:justify-start gap-1.5">
              <Award className="size-4" /> Official Certified Growth Partner
            </span>
            <p className="text-lg font-bold text-white mt-1">
              Engineered & Certified By The Industry's Highest Tier Ad Networks
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {PARTNERS.slice(0, 3).map((p) => (
              <div
                key={p.name}
                className="inline-flex items-center gap-2 rounded-lg bg-[#0c1844]/90 border border-sky-500/20 px-3 py-1.5 text-xs text-slate-200 backdrop-blur-md"
              >
                <ShieldCheck className="size-3.5 text-cyan-400" />
                <span className="font-semibold">{p.name}</span>
                <span className="text-[10px] text-cyan-300/80 bg-sky-950 px-1.5 py-0.5 rounded font-mono">
                  {p.badge}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Continuous Client Ticker */}
        <div className="pt-8">
          <p className="text-center text-xs font-mono uppercase tracking-wider text-slate-400 mb-6">
            TRUSTED BY 140+ INDUSTRY LEADERS, FAST-GROWTH SCALEUPS & ENTERPRISE DISRUPTORS
          </p>

          <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <div className="flex w-max animate-marquee space-x-8 sm:space-x-12">
              {[...CLIENT_BRANDS, ...CLIENT_BRANDS].map((brand, idx) => (
                <div
                  key={`${brand}-${idx}`}
                  className="flex items-center gap-3 px-4 py-2 rounded-xl bg-[#0c1844]/40 border border-sky-500/10 backdrop-blur-sm group hover:border-cyan-400/40 transition-all cursor-default"
                >
                  <div className="size-2 rounded-full bg-cyan-400/80 group-hover:scale-150 transition-transform" />
                  <span className="text-sm sm:text-base font-extrabold tracking-widest text-slate-300 font-mono group-hover:text-cyan-300 transition-colors">
                    {brand}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustMarquee;
