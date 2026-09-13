'use client';

import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import InstagramIcon from "./InstagramIcon";
import { Menu, X, ArrowRight, PhoneCall, Sparkles, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Services", href: "#services" },
  { name: "Creative Work", href: "#portfolio" },
  { name: "Growth Forecaster", href: "#calculator" },
  { name: "Growth Blueprint", href: "#framework" },
  { name: "Testimonials", href: "#testimonials" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-[#080e27]/95 backdrop-blur-xl border-b border-sky-500/20 py-3 shadow-2xl shadow-blue-950/60"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <Logo size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://instagram.com/framifydigitalmarketing"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-pink-400 transition-colors bg-[#0c1844] px-2.5 py-1.5 rounded-lg border border-sky-500/20"
              title="Instagram @framifydigitalmarketing"
            >
              <InstagramIcon className="size-3.5 text-pink-400" />
              <span>@framifydigitalmarketing</span>
            </a>

            <a
              href="tel:+919447520844"
              className="flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-cyan-300 transition-colors"
            >
              <PhoneCall className="size-3.5 text-cyan-400" />
              <span>+91 94475 20844</span>
            </a>

            <a
              href="https://wa.me/919447520844"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 px-4 py-2 text-xs font-bold text-white shadow-lg shadow-emerald-600/25 transition-all hover:scale-105"
            >
              <MessageCircle className="size-3.5" />
              <span>WhatsApp</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 px-4 py-2 text-xs font-bold text-white shadow-lg shadow-cyan-500/20 transition-all hover:scale-105"
            >
              <Sparkles className="size-3.5" />
              <span>Get Free Proposal</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="https://wa.me/919447520844"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 rounded-lg bg-emerald-600 px-2.5 py-1.5 text-[11px] font-bold text-white shadow-md"
            >
              <MessageCircle className="size-3" />
              <span>WhatsApp</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-1 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-2.5 py-1.5 text-[11px] font-bold text-white shadow-md"
            >
              <span>Get Audit</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-lg border border-sky-500/30 bg-[#0c1844] p-2 text-slate-300 hover:text-white hover:border-cyan-400 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-[#080e27]/98 backdrop-blur-2xl border-b border-sky-500/20 px-4 py-6 shadow-2xl transition-all animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-200 hover:text-cyan-400 px-3 py-2 rounded-lg hover:bg-sky-900/20 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowRight className="size-4 text-cyan-400" />
              </a>
            ))}

            <div className="pt-4 border-t border-sky-500/15 flex flex-col gap-2.5">
              <a
                href="https://wa.me/919447520844"
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 py-2.5 text-xs font-bold text-white shadow-lg"
              >
                <MessageCircle className="size-4" />
                <span>Chat on WhatsApp (+91 94475 20844)</span>
              </a>

              <a
                href="https://instagram.com/framifydigitalmarketing"
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#0c1844] border border-pink-500/30 py-2.5 text-xs font-bold text-pink-300"
              >
                <InstagramIcon className="size-4 text-pink-400" />
                <span>Follow @framifydigitalmarketing</span>
              </a>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 py-3 text-sm font-bold text-white shadow-lg shadow-cyan-500/25"
              >
                <Sparkles className="size-4" />
                <span>Request Free Strategy Proposal</span>
              </a>

              <a
                href="tel:+919447520844"
                className="flex items-center justify-center gap-2 text-xs font-mono text-slate-300 py-1"
              >
                <PhoneCall className="size-3.5 text-cyan-400" />
                <span>Call Directly: +91 94475 20844</span>
              </a>

              <p className="text-[11px] font-mono text-center text-slate-400">
                📍 Kottayam, Karukachal 686540, Kerala
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
