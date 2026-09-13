'use client';

import React, { useState } from "react";
import {
  Paintbrush,
  Video,
  Layout,
  Image as ImageIcon,
  TrendingUp,
  Target,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Zap,
  MessageCircle,
  Layers
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceItem {
  id: string;
  icon: React.ElementType;
  title: string;
  category: string;
  shortDesc: string;
  metrics: string;
  badge: string;
  features: string[];
  tactics: string[];
  deliverables: string[];
}

const SERVICES: ServiceItem[] = [
  {
    id: "logo-branding",
    icon: Paintbrush,
    category: "Brand Identity",
    title: "Logo Design & Brand Identity Systems",
    shortDesc: "Distinctive, timeless logos and complete brand guidelines that establish instant authority in the market and stick in customers' minds.",
    metrics: "100% Vector Precision",
    badge: "Core Expertise",
    features: [
      "Custom vector logo concepts with comprehensive mark variations",
      "Typography styling, palette curation & brand guideline book",
      "Mascot, badge, icon & stationery design package",
    ],
    tactics: [
      "Visual psychology & industry competitor differentiation",
      "Print and digital responsive scalability checks",
      "Social media ready avatar & banner ecosystem",
    ],
    deliverables: [
      "AI, SVG, EPS, PNG, PDF source files",
      "Brand style guide document",
      "Social media profile kit",
    ],
  },
  {
    id: "reels-video",
    icon: Video,
    category: "Short-Form Video",
    title: "Viral Reels & Video Content Production",
    shortDesc: "High-retention Reels, Shorts & TikToks crafted with irresistible 3-second hooks, dynamic motion graphics, and Malayalam/English voiceovers.",
    metrics: "+340% View Retention",
    badge: "High Growth",
    features: [
      "Scroll-stopping 3-second hook crafting & storytelling",
      "Fast-paced kinetic captions & sound design",
      "Trend-jacking, educational & high-converting promotional reels",
    ],
    tactics: [
      "B-roll selection & visual pacing for maximum watch-time",
      "Audio sync with trending sounds and high-energy music",
      "Direct Call-To-Action overlays to drive DM inquiries",
    ],
    deliverables: [
      "1080x1920 4K/FHD master exports",
      "Custom cover thumbnail for Instagram feed grid",
      "Full caption and hashtag strategy",
    ],
  },
  {
    id: "posters-creatives",
    icon: Layout,
    category: "Graphic Design",
    title: "Commercial Posters & Social Media Creatives",
    shortDesc: "Eye-catching social media posters, promotional flyers, festival creatives, and product banners engineered to command attention on the feed.",
    metrics: "+220% Feed Engagement",
    badge: "Popular",
    features: [
      "High-contrast commercial product & service posters",
      "Event, festival, seasonal & flash-sale launch creatives",
      "Multi-slide carousel educational infographics",
    ],
    tactics: [
      "Color grading & photo manipulation for visual pop",
      "Strategic layout composition that guides the eye to the CTA",
      "Custom 3D-styled typography and badge overlays",
    ],
    deliverables: [
      "Instagram Feed (1:1 & 4:5) + Story (9:16) format variations",
      "Editable design source files",
      "Same-day emergency turnaround option",
    ],
  },
  {
    id: "thumbnails-design",
    icon: ImageIcon,
    category: "High-CTR Graphics",
    title: "High-CTR Thumbnails for YouTube & Social",
    shortDesc: "Click-generating custom thumbnails with aggressive contrast, expressive typography, and clear visual hierarchy designed to skyrocket your click-through rates.",
    metrics: "12.8% Avg CTR",
    badge: "CTR Booster",
    features: [
      "Facial expression cutout enhancement & glow outlining",
      "Bold, readable typography that stands out on mobile screens",
      "A/B split testing thumbnail variations for creator channels",
    ],
    tactics: [
      "Visual curiosity gap & pattern interrupt strategy",
      "High-saturation color theory matching YouTube algorithm preferences",
      "Mobile screen readability stress-testing",
    ],
    deliverables: [
      "1280x720 High-Res PNG / JPG formats",
      "Layered PSD / Figma design files",
      "2-3 hook angle variations per video",
    ],
  },
  {
    id: "growth-systems",
    icon: Target,
    category: "Growth Systems",
    title: "Social Media Growth Systems & Management",
    shortDesc: "We don't just post content—we engineer growth systems. Content calendars, automated DM inquiry funnels, and organic community expansion.",
    metrics: "3x Consistent Growth",
    badge: "Systemized",
    features: [
      "Comprehensive monthly content planning & publishing schedule",
      "Bio optimization, story highlight architecture & link-in-bio funnels",
      "Automated WhatsApp & DM lead routing triggers",
    ],
    tactics: [
      "Data-backed posting time analysis & audience demographic sync",
      "Hashtag matrix & audio momentum tracking",
      "Active comment moderation & inbound inquiry capture",
    ],
    deliverables: [
      "Monthly growth reporting & analytics deck",
      "Dedicated creative account manager",
      "Direct WhatsApp communication group",
    ],
  },
  {
    id: "performance-ads",
    icon: TrendingUp,
    category: "Paid Acquisition",
    title: "Performance Digital Marketing & Paid Ads",
    shortDesc: "Laser-targeted Meta (Instagram/Facebook) & Google Ads that convert local and regional Kerala audiences into paying customers and high-intent leads.",
    metrics: "4.8x Avg ROAS",
    badge: "Revenue Engine",
    features: [
      "Hyper-local geographic targeting across Kerala and national markets",
      "WhatsApp direct click-to-chat ad campaigns",
      "High-converting ad copy in Malayalam and English",
    ],
    tactics: [
      "Lookalike and interest-based audience testing",
      "Retargeting website visitors and Instagram engagers",
      "Lead generation forms with instant phone/WhatsApp routing",
    ],
    deliverables: [
      "Custom weekly ROAS & lead count dashboard",
      "Complete ad creative asset variations",
      "Zero budget waste monitoring",
    ],
  },
];

export function Services() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="relative w-full py-24 bg-[#080e27] border-b border-sky-500/15 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 -left-40 size-96 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 size-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/25 bg-[#0c1844]/80 px-3.5 py-1 text-xs font-mono text-cyan-300 backdrop-blur-md mb-4">
            <Zap className="size-3.5 text-cyan-400" />
            <span>KERALA'S CREATIVE & GROWTH LAB</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Our Core Services & <span className="gradient-text-cyan">Creative Arsenal</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            From iconic logos and viral Instagram Reels to high-CTR thumbnails and conversion ads—everything your business needs to dominate the digital space.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative rounded-2xl glass-card p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5"
              >
                {/* Accent Top Border Glow */}
                <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-medium text-cyan-400 uppercase tracking-wider">
                      {service.category}
                    </span>
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-sky-950 border border-sky-500/30 text-cyan-300">
                      {service.badge}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="size-12 rounded-xl bg-gradient-to-br from-blue-600/30 to-cyan-500/20 border border-sky-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:border-cyan-400 transition-all shadow-md">
                      <Icon className="size-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white leading-snug group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Key Features */}
                  <div className="space-y-2.5 mb-6 pt-2 border-t border-sky-500/10">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="size-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Stats & CTA */}
                <div className="pt-4 border-t border-sky-500/15 flex items-center justify-between mt-auto">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-400 block">Performance Impact</span>
                    <span className="text-base font-bold text-cyan-300 font-mono">{service.metrics}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#152766] hover:bg-cyan-600 border border-sky-500/30 px-3.5 py-2 rounded-lg transition-all active:scale-95 shadow-sm"
                  >
                    <span>View Details</span>
                    <ArrowRight className="size-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Solution Callout */}
        <div className="mt-16 rounded-2xl glass-card p-6 sm:p-10 border border-sky-500/25 bg-gradient-to-r from-[#0c1844]/90 via-[#10235e]/80 to-[#0c1844]/90 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold flex items-center justify-center md:justify-start gap-1.5">
              <MessageCircle className="size-4" /> Ready to Scale Your Brand in Kerala & Beyond?
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Direct consultation with our creative lead on WhatsApp: +91 94475 20844
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              Get an instant quotation for your logo, reels package, monthly social media management, or paid ad campaigns.
            </p>
          </div>

          <a
            href="https://wa.me/919447520844"
            target="_blank"
            rel="noreferrer"
            className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/30 hover:scale-105 transition-all"
          >
            <MessageCircle className="size-4" />
            <span>Chat on WhatsApp Now</span>
          </a>
        </div>
      </div>

      {/* Deep Dive Service Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl rounded-2xl bg-[#080e27] border border-sky-500/30 p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                  {selectedService.category}
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {selectedService.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="rounded-lg border border-sky-500/30 bg-[#0c1844] px-3 py-1.5 text-xs font-mono text-slate-300 hover:text-white hover:border-cyan-400"
              >
                CLOSE [ESC]
              </button>
            </div>

            <p className="text-sm text-slate-300 mb-6 leading-relaxed">
              {selectedService.shortDesc}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div className="rounded-xl bg-[#0c1844]/60 border border-sky-500/15 p-4">
                <h4 className="text-xs font-mono uppercase text-cyan-400 font-semibold mb-3 flex items-center gap-1.5">
                  <Sparkles className="size-4" /> Execution Strategy
                </h4>
                <ul className="space-y-2">
                  {selectedService.tactics.map((tac, i) => (
                    <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                      <span className="size-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                      <span>{tac}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl bg-[#0c1844]/60 border border-sky-500/15 p-4">
                <h4 className="text-xs font-mono uppercase text-cyan-400 font-semibold mb-3 flex items-center gap-1.5">
                  <CheckCircle2 className="size-4" /> Key Deliverables
                </h4>
                <ul className="space-y-2">
                  {selectedService.deliverables.map((del, i) => (
                    <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                      <span className="size-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-sky-500/20">
              <div className="text-center sm:text-left">
                <span className="text-[11px] font-mono text-slate-400 block">Standard Quality Standard</span>
                <span className="text-lg font-bold text-cyan-300">{selectedService.metrics}</span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={`https://wa.me/919447520844?text=Hi%20Framify,%20I'm%20interested%20in%20your%20${encodeURIComponent(selectedService.title)}%20service.`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-4 py-2.5 text-xs font-bold text-white transition-all shadow-md"
                >
                  <MessageCircle className="size-3.5" />
                  <span>WhatsApp Query</span>
                </a>

                <a
                  href="#contact"
                  onClick={() => setSelectedService(null)}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-cyan-500/20 hover:scale-105 transition-all"
                >
                  <span>Select Service</span>
                  <ArrowRight className="size-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Services;
