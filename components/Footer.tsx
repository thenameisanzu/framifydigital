'use client';

import React, { useState } from "react";
import Logo from "./Logo";
import InstagramIcon from "./InstagramIcon";
import {
  ArrowUp,
  Sparkles,
  MessageCircle,
  Phone,
  MapPin
} from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-[#05091a] text-slate-300 pt-16 pb-12 border-t border-sky-500/20 overflow-hidden">
      {/* Glow background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-sky-500/15">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="md" />
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              <strong>Framify Digital Marketing</strong> — Kerala's premier creative design & branding agency. We build growth systems through iconic logo design, viral Instagram reels, showstopping commercial posters, high-CTR thumbnails, and performance marketing.
            </p>

            <div className="space-y-2 text-xs font-mono text-slate-300 pt-2">
              <div className="flex items-center gap-2">
                <MapPin className="size-4 text-cyan-400 shrink-0" />
                <span>Kottayam, Karukachal 686540, Kerala</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="size-4 text-cyan-400 shrink-0" />
                <a href="tel:+919447520844" className="hover:text-cyan-400 transition-colors">
                  +91 94475 20844
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com/framifydigitalmarketing"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0c1844] border border-pink-500/30 text-pink-300 hover:border-pink-400 transition-colors text-xs font-mono font-medium"
                aria-label="Instagram"
              >
                <InstagramIcon className="size-3.5 text-pink-400" />
                <span>@framifydigitalmarketing</span>
              </a>

              <a
                href="https://wa.me/919447520844"
                target="_blank"
                rel="noreferrer"
                className="size-9 rounded-lg bg-emerald-950 border border-emerald-500/30 flex items-center justify-center text-emerald-400 hover:bg-emerald-900 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="size-4" />
              </a>
            </div>
          </div>

          {/* Solutions Col */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Creative Services
            </h4>
            <ul className="space-y-2 text-sm text-slate-400 font-medium">
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">
                  Logo Design & Branding
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">
                  Reels & Video Production
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">
                  Social Media Posters
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">
                  YouTube & High-CTR Thumbnails
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">
                  Social Media Management
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">
                  Performance Meta & Google Ads
                </a>
              </li>
            </ul>
          </div>

          {/* Evidence & Case Studies */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Growth & Evidence
            </h4>
            <ul className="space-y-2 text-sm text-slate-400 font-medium">
              <li>
                <a href="#portfolio" className="hover:text-cyan-400 transition-colors">
                  Recent Brand Portfolios
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-cyan-400 transition-colors">
                  Viral Reels Showcase
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-cyan-400 transition-colors">
                  Interactive Reach Forecaster
                </a>
              </li>
              <li>
                <a href="#framework" className="hover:text-cyan-400 transition-colors">
                  The Framify Growth System
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-cyan-400 transition-colors">
                  Client Success Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Direct WhatsApp Box */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
              <Sparkles className="size-3.5 text-cyan-400" />
              <span>Direct WhatsApp Chat</span>
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Have a project idea? Chat directly with our creative team on WhatsApp for quick estimates and turnaround times.
            </p>

            <a
              href="https://wa.me/919447520844?text=Hi%20Framify,%20I'd%20like%20to%20know%20more%20about%20your%20design%20packages."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-xs font-bold text-white shadow-lg transition-all"
            >
              <MessageCircle className="size-4" />
              <span>Message on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Bottom copyright & Back-to-top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} Framify Digital Marketing. Kottayam, Karukachal 686540, Kerala. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="https://wa.me/919447520844" className="hover:text-emerald-400 transition-colors">WhatsApp: +91 94475 20844</a>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1 text-cyan-400 hover:text-white transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="size-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
