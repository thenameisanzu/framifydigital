'use client';

import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import InstagramIcon from "./InstagramIcon";
import { useTheme } from "./ThemeProvider";
import {
  Menu,
  X,
  Sparkles,
  Palette,
  Layers,
  Calculator,
  Zap,
  Star,
  ChevronRight,
  MessageCircle,
  Phone,
  MapPin,
  Sun,
  Moon
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NavLinkItem {
  name: string;
  href: string;
  subtitle: string;
  icon: React.ElementType;
  colorClass: string;
  borderClass: string;
  iconBgClass: string;
}

const NAV_LINKS: NavLinkItem[] = [
  {
    name: "Services",
    href: "#services",
    subtitle: "Logos, Reels, Posters & Growth",
    icon: Palette,
    colorClass: "text-cyan-500 dark:text-cyan-400",
    borderClass: "border-cyan-500/30",
    iconBgClass: "bg-cyan-50 dark:bg-cyan-950/60"
  },
  {
    name: "Our Work",
    href: "#portfolio",
    subtitle: "Featured Creative Portfolio",
    icon: Layers,
    colorClass: "text-sky-500 dark:text-sky-400",
    borderClass: "border-sky-500/30",
    iconBgClass: "bg-sky-50 dark:bg-sky-950/60"
  },
  {
    name: "Packages",
    href: "#calculator",
    subtitle: "Deliverables & Cost Estimator",
    icon: Calculator,
    colorClass: "text-emerald-500 dark:text-emerald-400",
    borderClass: "border-emerald-500/30",
    iconBgClass: "bg-emerald-50 dark:bg-emerald-950/60"
  },
  {
    name: "How It Works",
    href: "#framework",
    subtitle: "4-Stage Creative Growth System",
    icon: Zap,
    colorClass: "text-amber-500 dark:text-amber-400",
    borderClass: "border-amber-500/30",
    iconBgClass: "bg-amber-50 dark:bg-amber-950/60"
  },
  {
    name: "Reviews",
    href: "#testimonials",
    subtitle: "Authentic Client Ratings & Feedback",
    icon: Star,
    colorClass: "text-yellow-500 dark:text-yellow-400",
    borderClass: "border-yellow-500/30",
    iconBgClass: "bg-yellow-50 dark:bg-yellow-950/60"
  },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = (e?: React.MouseEvent | React.TouchEvent) => {
    if (e) {
      e.stopPropagation();
    }
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-auto",
          isScrolled
            ? "bg-white/90 dark:bg-[#080e27]/95 backdrop-blur-xl border-b border-slate-200 dark:border-sky-500/20 py-3 shadow-lg shadow-slate-200/50 dark:shadow-blue-950/60"
            : "bg-transparent py-4 sm:py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center relative z-50">
              <Logo size="md" />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors relative py-1 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-500 dark:bg-cyan-400 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Desktop Right Action */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Theme Toggle Button */}
              <button
                type="button"
                onClick={toggleTheme}
                className="size-9 rounded-xl border border-slate-200 dark:border-sky-500/30 bg-slate-100 dark:bg-[#0c1844] p-2 text-slate-700 dark:text-slate-200 hover:text-cyan-500 dark:hover:text-cyan-400 hover:border-cyan-400 transition-all flex items-center justify-center cursor-pointer shadow-sm active:scale-95"
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                {theme === "dark" ? (
                  <Sun className="size-4 text-amber-400 animate-in spin-in-90 duration-200" />
                ) : (
                  <Moon className="size-4 text-indigo-600 animate-in spin-in-90 duration-200" />
                )}
              </button>

              <a
                href="https://instagram.com/framifydigitalmarketing"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs font-mono text-slate-700 dark:text-slate-300 hover:text-pink-500 dark:hover:text-pink-400 transition-colors bg-slate-100 dark:bg-[#0c1844] px-3 py-2 rounded-xl border border-slate-200 dark:border-sky-500/20 hover:border-pink-500/40"
                title="Instagram"
              >
                <InstagramIcon className="size-3.5 text-pink-500 dark:text-pink-400" />
                <span>Instagram</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-xs font-bold text-white shadow-md hover:scale-105 active:scale-95 transition-all"
              >
                <Sparkles className="size-3.5" />
                <span>Get Quote</span>
              </a>
            </div>

            {/* Mobile / Tablet Actions */}
            <div className="flex items-center gap-2 lg:hidden relative z-50">
              {/* Mobile Theme Toggle */}
              <button
                type="button"
                onClick={toggleTheme}
                className="size-9 rounded-xl border border-slate-200 dark:border-sky-500/30 bg-slate-100 dark:bg-[#0c1844] p-2 text-slate-700 dark:text-slate-200 hover:text-cyan-400 active:scale-95 transition-all flex items-center justify-center cursor-pointer touch-manipulation"
                aria-label="Toggle Theme"
              >
                {theme === "dark" ? (
                  <Sun className="size-4 text-amber-400" />
                ) : (
                  <Moon className="size-4 text-indigo-600" />
                )}
              </button>

              <a
                href="#contact"
                onClick={closeMobileMenu}
                className="inline-flex items-center gap-1 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-3 py-2 text-xs font-bold text-white shadow-md active:scale-95 transition-all"
              >
                <Sparkles className="size-3 text-white" />
                <span>Get Quote</span>
              </a>

              {/* Instant-response hamburger button */}
              <button
                type="button"
                onClick={toggleMobileMenu}
                className="min-h-[42px] min-w-[42px] rounded-xl border border-slate-200 dark:border-sky-500/30 bg-slate-100 dark:bg-[#0c1844] p-2.5 text-slate-800 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-white hover:border-cyan-400 active:bg-slate-200 dark:active:bg-sky-950 transition-all flex items-center justify-center cursor-pointer touch-manipulation select-none"
                style={{ touchAction: "manipulation" }}
                aria-label={mobileMenuOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="size-5 text-cyan-600 dark:text-cyan-300 animate-in spin-in-90 duration-150" />
                ) : (
                  <Menu className="size-5 text-slate-800 dark:text-slate-200" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay Backdrop */}
      {mobileMenuOpen && (
        <div
          onClick={closeMobileMenu}
          className="fixed inset-0 bg-black/60 dark:bg-black/70 backdrop-blur-md z-40 lg:hidden transition-opacity animate-in fade-in duration-200"
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer Menu Content */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-[64px] inset-x-0 bottom-0 z-40 bg-white/98 dark:bg-[#080e27]/98 backdrop-blur-2xl border-b border-slate-200 dark:border-sky-500/20 px-4 py-5 shadow-2xl overflow-y-auto transition-all animate-in slide-in-from-top-4 fade-in duration-200">
          <div className="max-w-md mx-auto flex flex-col space-y-2.5 pb-8">
            <div className="flex items-center justify-between px-1 mb-1">
              <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-bold">
                Navigation Menu
              </span>
              <button
                type="button"
                onClick={toggleTheme}
                className="flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-lg border border-slate-200 dark:border-sky-500/30 bg-slate-100 dark:bg-[#0c1844] text-slate-700 dark:text-slate-200"
              >
                {theme === "dark" ? <Sun className="size-3 text-amber-400" /> : <Moon className="size-3 text-indigo-600" />}
                <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
              </button>
            </div>

            {/* Redesigned Rich Navigation Cards */}
            {NAV_LINKS.map((link) => {
              const IconComp = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="group flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-[#0c1844]/80 hover:bg-slate-100 dark:hover:bg-[#102158] border border-slate-200 dark:border-sky-500/20 hover:border-cyan-500/50 transition-all active:scale-[0.99]"
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={cn(
                        "size-10 rounded-xl border flex items-center justify-center shrink-0 transition-transform group-hover:scale-105",
                        link.iconBgClass,
                        link.borderClass
                      )}
                    >
                      <IconComp className={cn("size-5", link.colorClass)} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                        {link.name}
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                        {link.subtitle}
                      </div>
                    </div>
                  </div>

                  <div className="size-7 rounded-lg bg-slate-200/70 dark:bg-sky-950/60 border border-slate-300/50 dark:border-sky-500/20 flex items-center justify-center text-slate-500 dark:text-slate-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 group-hover:border-cyan-500/40 transition-colors shrink-0">
                    <ChevronRight className="size-4" />
                  </div>
                </a>
              );
            })}

            {/* Quick Action Badges */}
            <div className="pt-4 border-t border-slate-200 dark:border-sky-500/20 flex flex-col gap-2.5">
              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href="https://instagram.com/framifydigitalmarketing"
                  target="_blank"
                  rel="noreferrer"
                  onClick={closeMobileMenu}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-100 dark:bg-[#0c1844] border border-pink-500/30 hover:border-pink-500 py-3 text-xs font-bold text-pink-600 dark:text-pink-300 active:scale-95 transition-all shadow-sm"
                >
                  <InstagramIcon className="size-4 text-pink-500 dark:text-pink-400" />
                  <span>Instagram</span>
                </a>

                <a
                  href="https://wa.me/919447520844"
                  target="_blank"
                  rel="noreferrer"
                  onClick={closeMobileMenu}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-50 dark:bg-[#0a2e22] border border-emerald-500/40 hover:border-emerald-500 py-3 text-xs font-bold text-emerald-700 dark:text-emerald-300 active:scale-95 transition-all shadow-sm"
                >
                  <MessageCircle className="size-4 text-emerald-600 dark:text-emerald-400" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <a
                href="#contact"
                onClick={closeMobileMenu}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 py-3.5 text-xs font-bold text-white shadow-lg shadow-cyan-500/25 active:scale-95 transition-all"
              >
                <Sparkles className="size-4" />
                <span>Request Project Quote</span>
              </a>

              {/* Contact Footer in Menu */}
              <div className="mt-2 p-3 rounded-xl bg-slate-100 dark:bg-[#05091a]/80 border border-slate-200 dark:border-sky-500/15 space-y-1.5 text-center text-xs font-mono text-slate-500 dark:text-slate-400">
                <div className="flex items-center justify-center gap-1.5 text-slate-700 dark:text-slate-300">
                  <Phone className="size-3 text-cyan-600 dark:text-cyan-400" />
                  <a href="tel:+919447520844" className="hover:text-cyan-600 dark:hover:text-cyan-400 font-semibold">
                    +91 94475 20844
                  </a>
                </div>
                <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-600 dark:text-slate-400">
                  <MapPin className="size-3 text-cyan-600 dark:text-cyan-400" />
                  <span>Kottayam, Karukachal 686540, Kerala</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;

