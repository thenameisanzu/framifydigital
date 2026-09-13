'use client';

import React from "react";
import Logo from "./Logo";
import InstagramIcon from "./InstagramIcon";
import { ArrowUp, Phone, MapPin, MessageCircle } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer" className="relative w-full bg-[#05091a] text-slate-300 pt-16 pb-12 border-t border-sky-500/20 overflow-hidden">
      {/* Glow background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-sky-500/15 footer-main-grid">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="md" />
            <p className="text-sm text-slate-400 footer-brand-desc max-w-sm leading-relaxed">
              <strong className="text-white footer-brand-strong">Framify Digital Marketing</strong> — Kerala's premier creative design & branding agency. We build growth systems through iconic logo design, viral Instagram reels, commercial posters, and high-CTR thumbnails.
            </p>

            <div className="space-y-2 text-xs font-mono text-slate-300 footer-contact-info pt-1">
              <div className="flex items-center gap-2">
                <MapPin className="size-4 text-cyan-400 shrink-0 footer-icon" />
                <span>Kottayam, Karukachal 686540, Kerala</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="size-4 text-cyan-400 shrink-0 footer-icon" />
                <a href="tel:+919447520844" className="hover:text-cyan-400 transition-colors">
                  +91 94475 20844
                </a>
              </div>
            </div>

            {/* Social & Contact Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-2.5">
              <a
                href="https://instagram.com/framifydigitalmarketing"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0c1844] border border-pink-500/30 text-pink-300 hover:border-pink-400 hover:text-white transition-colors text-xs font-mono font-medium footer-social-btn"
                aria-label="Instagram"
              >
                <InstagramIcon className="size-3.5 text-pink-400" />
                <span>Instagram</span>
              </a>

              <a
                href="https://wa.me/919447520844"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0a2e22] border border-emerald-500/40 text-emerald-300 hover:border-emerald-400 hover:text-white transition-colors text-xs font-mono font-medium footer-social-btn"
                aria-label="WhatsApp"
              >
                <MessageCircle className="size-3.5 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Solutions Col */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white footer-col-title">
              Creative Services
            </h4>
            <ul className="space-y-2 text-sm text-slate-400 footer-col-links font-medium">
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
                  Social Media Growth Systems
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links & Quote CTA */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white footer-col-title">
              Explore
            </h4>
            <ul className="space-y-2 text-sm text-slate-400 footer-col-links font-medium">
              <li>
                <a href="#portfolio" className="hover:text-cyan-400 transition-colors">
                  Featured Works
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-cyan-400 transition-colors">
                  Creative Packages
                </a>
              </li>
              <li>
                <a href="#framework" className="hover:text-cyan-400 transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-cyan-400 transition-colors">
                  Client Reviews
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-cyan-400 transition-colors">
                  FAQ & Questions
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors">
                  Request a Quote
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & Back-to-top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 footer-bottom-row">
          <div>
            © {new Date().getFullYear()} Framify Digital Marketing. Kottayam, Karukachal 686540, Kerala. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1 text-cyan-400 hover:text-white transition-colors cursor-pointer footer-back-to-top"
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
