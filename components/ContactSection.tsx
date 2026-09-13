'use client';

import React, { useState } from "react";
import confetti from "canvas-confetti";
import InstagramIcon from "./InstagramIcon";
import {
  Sparkles,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  MessageCircle,
  Zap,
  ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";

const AVAILABLE_SERVICES = [
  "Logo Design & Brand Identity",
  "Instagram Reels & Video Editing",
  "Social Media Posters & Creatives",
  "YouTube & High-CTR Thumbnails",
  "Digital Marketing & Growth Systems",
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    selectedService: "Logo Design & Brand Identity",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg("Please provide your name and WhatsApp/phone number.");
      return;
    }

    setErrorMsg("");
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#38bdf8", "#2563eb", "#10b981", "#ffffff"],
        });
      } catch {
        // Fallback
      }
    }, 600);
  };

  return (
    <section id="contact" className="relative w-full py-20 bg-[#060a1d] border-b border-sky-500/15 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 size-[400px] rounded-full bg-cyan-600/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/25 bg-[#0c1844]/80 px-3.5 py-1 text-xs font-mono text-cyan-300 backdrop-blur-md mb-3">
            <Zap className="size-3.5 text-cyan-400" />
            <span>CONTACT US</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let’s Build Your <span className="gradient-text-cyan">Growth System</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300">
            Get in touch for logo designs, reels production, social media posters, or custom thumbnails.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-4">
            {/* WhatsApp Quick Action Card */}
            <div className="glass-card rounded-2xl p-6 border border-emerald-500/30 bg-gradient-to-br from-[#0c2e28]/70 via-[#0c1844]/80 to-[#080e27]/90 shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="size-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white">
                  <MessageCircle className="size-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-emerald-400 font-bold block">Instant Reply</span>
                  <h4 className="text-sm font-bold text-white">WhatsApp Chat</h4>
                </div>
              </div>
              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                Connect with our team directly on WhatsApp for immediate project quotes and turnaround time.
              </p>
              <a
                href="https://wa.me/919447520844?text=Hi%20Framify!%20I'd%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 py-3 text-xs font-bold text-white shadow-md transition-all"
              >
                <MessageCircle className="size-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Direct Contact Info */}
            <div className="glass-card rounded-2xl p-5 border border-sky-500/15 space-y-3.5">
              <div className="flex items-center gap-3 text-slate-200">
                <div className="size-8 rounded-lg bg-[#0c1844] border border-sky-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <Phone className="size-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">Phone</span>
                  <a href="tel:+919447520844" className="text-xs sm:text-sm font-bold text-white hover:text-cyan-400 font-mono">
                    +91 94475 20844
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-slate-200">
                <div className="size-8 rounded-lg bg-[#0c1844] border border-sky-500/30 flex items-center justify-center text-pink-400 shrink-0">
                  <InstagramIcon className="size-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">Instagram</span>
                  <a
                    href="https://instagram.com/framifydigitalmarketing"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs sm:text-sm font-bold text-white hover:text-pink-400 font-mono"
                  >
                    @framifydigitalmarketing
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-slate-200">
                <div className="size-8 rounded-lg bg-[#0c1844] border border-sky-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <MapPin className="size-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">Studio Location</span>
                  <span className="text-xs sm:text-sm text-slate-200">
                    Kottayam, Karukachal 686540, Kerala
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-sky-500/25 bg-gradient-to-b from-[#0c1844]/95 to-[#080e27]/95 shadow-xl">
              {isSubmitted ? (
                <div className="text-center py-8 space-y-4 animate-in zoom-in-95 duration-200">
                  <div className="size-14 rounded-full bg-emerald-600 mx-auto flex items-center justify-center text-white">
                    <CheckCircle2 className="size-8" />
                  </div>

                  <h3 className="text-xl font-bold text-white">
                    Inquiry Received!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto">
                    Thank you, <strong className="text-white">{formData.name}</strong>. We will message or call you on <span className="text-cyan-300 font-mono">{formData.phone}</span> shortly.
                  </p>

                  <a
                    href="https://wa.me/919447520844"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-xs font-bold text-white"
                  >
                    <MessageCircle className="size-4" />
                    <span>Open WhatsApp Directly</span>
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMsg && (
                    <div className="p-2.5 rounded-lg bg-red-950/80 border border-red-500/40 text-xs text-red-200">
                      {errorMsg}
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5 font-semibold">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl bg-[#080e27] border border-sky-500/20 px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5 font-semibold">
                      WhatsApp / Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-xl bg-[#080e27] border border-sky-500/20 px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5 font-semibold">
                      Service You Need:
                    </label>
                    <select
                      value={formData.selectedService}
                      onChange={(e) => setFormData({ ...formData, selectedService: e.target.value })}
                      className="w-full rounded-xl bg-[#080e27] border border-sky-500/20 px-3.5 py-2.5 text-xs sm:text-sm text-white focus:border-cyan-400 focus:outline-none"
                    >
                      {AVAILABLE_SERVICES.map((s) => (
                        <option key={s} value={s} className="bg-[#080e27] text-white">
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5 font-semibold">
                      Project Details / Requirements:
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us what you're looking for (e.g. Logo redesign, 10 reels per month, admission posters...)"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-xl bg-[#080e27] border border-sky-500/20 px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 py-3 text-xs sm:text-sm font-bold text-white shadow-lg shadow-cyan-500/25 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 transition-all"
                  >
                    <Sparkles className="size-4" />
                    <span>Send Project Request</span>
                    <ArrowRight className="size-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
