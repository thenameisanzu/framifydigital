'use client';

import React, { useState, useEffect, useRef } from "react";
import Logo from "./Logo";
import InstagramIcon from "./InstagramIcon";
import ThemeToggle from "./ThemeToggle";
import { useFluidPill, FluidPillIndicator } from "./ui/FluidPill";
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
  MapPin
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
    colorClass: "text-cyan-400",
    borderClass: "border-cyan-500/30",
    iconBgClass: "bg-cyan-950/60"
  },
  {
    name: "Our Work",
    href: "#portfolio",
    subtitle: "Featured Creative Portfolio",
    icon: Layers,
    colorClass: "text-sky-400",
    borderClass: "border-sky-500/30",
    iconBgClass: "bg-sky-950/60"
  },
  {
    name: "Packages",
    href: "#calculator",
    subtitle: "Deliverables & Cost Estimator",
    icon: Calculator,
    colorClass: "text-emerald-400",
    borderClass: "border-emerald-500/30",
    iconBgClass: "bg-emerald-950/60"
  },
  {
    name: "How It Works",
    href: "#framework",
    subtitle: "4-Stage Creative Growth System",
    icon: Zap,
    colorClass: "text-amber-400",
    borderClass: "border-amber-500/30",
    iconBgClass: "bg-amber-950/60"
  },
  {
    name: "Reviews",
    href: "#testimonials",
    subtitle: "Authentic Client Ratings & Feedback",
    icon: Star,
    colorClass: "text-yellow-400",
    borderClass: "border-yellow-500/30",
    iconBgClass: "bg-yellow-950/60"
  },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMenuMounted, setIsMenuMounted] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const navContainerRef = useRef<HTMLDivElement | null>(null);
  const { pillRef } = useFluidPill({
    activeId: activeSection,
    containerRef: navContainerRef,
    duration: 300,
    stretchIntensity: 0.18,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // If at top of page (Hero), clear active section
      if (window.scrollY < 260) {
        setActiveSection("");
        return;
      }

      // Pinpoint accurate viewport scroll spy
      const sectionIds = ["services", "portfolio", "calculator", "framework", "testimonials"];
      const navbarOffset = 100;
      let currentSection = "";

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Active when the section top has crossed into the upper portion of viewport and bottom is still visible
          if (rect.top <= window.innerHeight * 0.45 && rect.bottom >= navbarOffset) {
            currentSection = id;
          }
        }
      }

      // Always update active section (resets to "" when scrolled past all nav sections like into Team, FAQ, Contact, Footer)
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
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
    if (mobileMenuOpen) {
      closeMobileMenu();
    } else {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
      setIsMenuMounted(true);
      setMobileMenuOpen(true);
    }
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = setTimeout(() => {
      setIsMenuMounted(false);
    }, 240);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#") && href.length > 1) {
      e.preventDefault();
      const sectionId = href.replace("#", "");
      const element = document.getElementById(sectionId);
      if (element) {
        setActiveSection(sectionId);
        closeMobileMenu();

        const lenis = (window as unknown as { __lenis?: { scrollTo: (el: HTMLElement | string, opts?: { offset?: number; duration?: number }) => void } }).__lenis;
        if (lenis) {
          lenis.scrollTo(element, { offset: -70, duration: 1.1 });
        } else {
          const offset = 70;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const offsetPosition = elementRect - bodyRect - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-auto",
          isScrolled
            ? "bg-[#090a0f]/90 backdrop-blur-xl border-b border-white/[0.08] py-2.5 sm:py-3 shadow-2xl shadow-black/60"
            : "bg-transparent py-3 sm:py-4"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActiveSection("");
                const lenis = (window as unknown as { __lenis?: { scrollTo: (target: number | string, opts?: { duration?: number }) => void } }).__lenis;
                if (lenis) {
                  lenis.scrollTo(0, { duration: 1.0 });
                } else {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="flex items-center relative z-50 cursor-pointer"
            >
              <Logo size="md" />
            </a>

            {/* Desktop Navigation Links with Apple-style Fluid Morphing Pill */}
            <nav
              ref={navContainerRef}
              className="relative hidden lg:flex items-center gap-1.5 p-1 rounded-full bg-white/[0.04] border border-white/[0.1] backdrop-blur-md shadow-inner"
            >
              <FluidPillIndicator pillRef={pillRef} className="rounded-full" />
              {NAV_LINKS.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    data-nav-id={sectionId}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={cn(
                      "text-xs font-semibold px-3.5 py-1.5 rounded-full transition-colors duration-200 relative z-10 cursor-pointer select-none",
                      isActive
                        ? "text-white font-bold"
                        : "text-slate-300 hover:text-white hover:bg-white/[0.04]"
                    )}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Desktop Right Action */}
            <div className="hidden lg:flex items-center gap-3">
              <ThemeToggle />

              <a
                href="https://instagram.com/framifydigitalmarketing"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-pink-400 transition-colors bg-white/[0.04] px-3 py-2 rounded-xl border border-white/[0.1] hover:border-pink-500/40"
                title="Instagram"
              >
                <InstagramIcon className="size-3.5 text-pink-400" />
                <span>Instagram</span>
              </a>

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="btn-shimmer inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-xs font-bold text-white shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <Sparkles className="size-3.5" />
                <span>Get Quote</span>
              </a>
            </div>

            {/* Mobile / Tablet Actions */}
            <div className="flex items-center gap-2 lg:hidden relative z-50">
              <ThemeToggle />

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="inline-flex items-center gap-1 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-3 py-2 text-xs font-bold text-white shadow-md active:scale-95 transition-all cursor-pointer"
              >
                <Sparkles className="size-3 text-white" />
                <span>Quote</span>
              </a>

              {/* Smooth Animated Morphing Hamburger Button */}
              <button
                type="button"
                onClick={toggleMobileMenu}
                className="min-h-[42px] min-w-[42px] rounded-xl border border-white/[0.12] bg-white/[0.05] p-2.5 text-slate-200 hover:text-white hover:border-cyan-400 active:bg-white/[0.1] active:scale-95 transition-all flex items-center justify-center cursor-pointer touch-manipulation select-none"
                style={{ touchAction: "manipulation" }}
                aria-label={mobileMenuOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
                aria-expanded={mobileMenuOpen}
              >
                <div className="relative w-5 h-4 flex flex-col justify-between items-center pointer-events-none">
                  <span
                    className={cn(
                      "w-full h-0.5 rounded-full transition-all duration-300 ease-out origin-center",
                      mobileMenuOpen ? "translate-y-[7px] rotate-45 bg-cyan-300" : "translate-y-0 rotate-0 bg-slate-200"
                    )}
                  />
                  <span
                    className={cn(
                      "w-full h-0.5 rounded-full transition-all duration-200 ease-out",
                      mobileMenuOpen ? "opacity-0 scale-x-0 bg-cyan-300" : "opacity-100 scale-x-100 bg-slate-200"
                    )}
                  />
                  <span
                    className={cn(
                      "w-full h-0.5 rounded-full transition-all duration-300 ease-out origin-center",
                      mobileMenuOpen ? "-translate-y-[7px] -rotate-45 bg-cyan-300" : "translate-y-0 rotate-0 bg-slate-200"
                    )}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay Backdrop with Smooth Fade In & Out */}
      {isMenuMounted && (
        <div
          onClick={closeMobileMenu}
          className={cn(
            "fixed inset-0 bg-black/75 backdrop-blur-md z-40 lg:hidden transition-all",
            mobileMenuOpen ? "animate-in fade-in duration-300" : "animate-backdrop-out"
          )}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer Menu Content with Apple-style Fluid Reveal & Smooth Closing */}
      {isMenuMounted && (
        <div
          className={cn(
            "lg:hidden fixed top-[60px] inset-x-0 bottom-0 z-40 bg-[#090a0f]/98 backdrop-blur-2xl border-b border-white/[0.08] px-4 py-5 shadow-2xl overflow-y-auto",
            mobileMenuOpen ? "animate-mobile-drawer" : "animate-mobile-drawer-out"
          )}
        >
          <div className="max-w-md mx-auto flex flex-col space-y-2.5 pb-8">
            <div className="animate-mobile-item text-[11px] font-mono uppercase tracking-widest text-cyan-400 font-bold px-1 mb-1" style={{ animationDelay: '30ms' }}>
              Navigation Menu
            </div>

            {/* Redesigned Rich Navigation Cards with Staggered Cascading Reveal */}
            {NAV_LINKS.map((link, idx) => {
              const IconComp = link.icon;
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              const itemDelay = `${idx * 50 + 60}ms`;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    handleNavClick(e, link.href);
                    closeMobileMenu();
                  }}
                  style={{ animationDelay: itemDelay }}
                  className={cn(
                    "animate-mobile-item group flex items-center justify-between p-3 rounded-2xl border transition-all active:scale-[0.98]",
                    isActive
                      ? "bg-gradient-to-r from-[#141d2e] to-[#0c121d] border-cyan-400 shadow-lg ring-1 ring-cyan-400/40"
                      : "bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.08] hover:border-cyan-400/50"
                  )}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={cn(
                        "size-10 rounded-xl border flex items-center justify-center shrink-0 transition-transform group-hover:scale-105",
                        isActive ? "bg-cyan-400 border-cyan-300 text-slate-950 shadow-md shadow-cyan-400/30" : "bg-white/[0.04] border-white/[0.08]",
                        isActive ? "" : link.borderClass
                      )}
                    >
                      <IconComp className={cn("size-5", isActive ? "text-slate-950 stroke-[2.2]" : link.colorClass)} />
                    </div>
                    <div>
                      <div className={cn("text-sm font-bold transition-colors", isActive ? "text-cyan-300" : "text-white group-hover:text-cyan-300")}>
                        {link.name}
                      </div>
                      <div className={cn("text-[11px] font-medium", isActive ? "text-slate-300" : "text-slate-400")}>
                        {link.subtitle}
                      </div>
                    </div>
                  </div>

                  <div className={cn(
                    "size-7 rounded-lg border flex items-center justify-center transition-colors shrink-0",
                    isActive ? "bg-cyan-400 text-slate-950 border-cyan-300 font-bold" : "bg-white/[0.04] border-white/[0.08] text-slate-400 group-hover:text-cyan-300 group-hover:border-cyan-500/40"
                  )}>
                    <ChevronRight className="size-4" />
                  </div>
                </a>
              );
            })}

            {/* Quick Action Badges */}
            <div
              className="animate-mobile-item pt-4 border-t border-white/[0.08] flex flex-col gap-2.5"
              style={{ animationDelay: `${NAV_LINKS.length * 50 + 80}ms` }}
            >
              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href="https://instagram.com/framifydigitalmarketing"
                  target="_blank"
                  rel="noreferrer"
                  onClick={closeMobileMenu}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/[0.04] border border-pink-500/30 hover:border-pink-400 py-3 text-xs font-bold text-pink-300 active:scale-95 transition-all"
                >
                  <InstagramIcon className="size-4 text-pink-400" />
                  <span>Instagram</span>
                </a>

                <a
                  href="https://wa.me/919447520844"
                  target="_blank"
                  rel="noreferrer"
                  onClick={closeMobileMenu}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/[0.04] border border-emerald-500/40 hover:border-emerald-400 py-3 text-xs font-bold text-emerald-300 active:scale-95 transition-all"
                >
                  <MessageCircle className="size-4 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <a
                href="#contact"
                onClick={(e) => {
                  handleNavClick(e, "#contact");
                  closeMobileMenu();
                }}
                className="btn-shimmer w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 py-3.5 text-xs font-bold text-white shadow-lg shadow-cyan-500/25 active:scale-95 transition-all cursor-pointer"
              >
                <Sparkles className="size-4" />
                <span>Request Project Quote</span>
              </a>

              {/* Contact Footer in Menu */}
              <div className="mt-2 p-3 rounded-xl bg-white/[0.02] border border-white/[0.08] space-y-1.5 text-center text-xs font-mono text-slate-400">
                <div className="flex items-center justify-center gap-1.5 text-slate-300">
                  <Phone className="size-3 text-cyan-400" />
                  <a href="tel:+919447520844" className="hover:text-cyan-400">
                    +91 94475 20844
                  </a>
                </div>
                <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-400">
                  <MapPin className="size-3 text-cyan-400" />
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

