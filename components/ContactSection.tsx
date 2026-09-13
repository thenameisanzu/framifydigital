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
        <div className="reveal text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-sky-500/25 bg-white/90 dark:bg-[#0c1844]/80 px-3.5 py-1 text-xs font-mono text-slate-800 dark:text-cyan-300 backdrop-blur-md mb-3 shadow-sm">
            <Zap className="size-3.5 text-cyan-600 dark:text-cyan-400" />
            <span className="font-bold">CONTACT US</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Let’s Build Your <span className="gradient-text-cyan">Growth System</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-700 dark:text-slate-300 font-medium">
            Get in touch for logo designs, reels production, social media posters, or custom thumbnails.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          {/* Left Column: Direct Info */}
          <div className="reveal delay-100 lg:col-span-5 space-y-4">
            <div className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-sky-500/20 bg-white/95 dark:bg-[#0c1844]/80 backdrop-blur-md space-y-4 shadow-xl">
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-sky-600 dark:text-cyan-300">
                Direct Contact
              </h3>
              
              <div className="space-y-4 pt-1">
                <div className="flex items-center gap-3.5 text-slate-800 dark:text-slate-200">
                  <div className="size-10 rounded-xl bg-sky-50 dark:bg-[#080e27] border border-sky-200 dark:border-sky-500/30 flex items-center justify-center text-sky-600 dark:text-cyan-400 shrink-0 shadow-sm">
                    <Phone className="size-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-500 dark:text-slate-400 block font-bold">Phone</span>
                    <a href="tel:+919447520844" className="text-sm font-bold text-slate-900 dark:text-white hover:text-sky-600 dark:hover:text-cyan-400 font-mono transition-colors">
                      +91 94475 20844
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 text-slate-800 dark:text-slate-200">
                  <div className="size-10 rounded-xl bg-pink-50 dark:bg-[#080e27] border border-pink-200 dark:border-pink-500/30 flex items-center justify-center text-pink-600 dark:text-pink-400 shrink-0 shadow-sm">
                    <InstagramIcon className="size-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-500 dark:text-slate-400 block font-bold">Social</span>
                    <a
                      href="https://instagram.com/framifydigitalmarketing"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-bold text-slate-900 dark:text-white hover:text-pink-600 dark:hover:text-pink-400 font-mono transition-colors"
                    >
                      Instagram
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 text-slate-800 dark:text-slate-200">
                  <div className="size-10 rounded-xl bg-sky-50 dark:bg-[#080e27] border border-sky-200 dark:border-sky-500/30 flex items-center justify-center text-sky-600 dark:text-cyan-400 shrink-0 shadow-sm">
                    <MapPin className="size-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-500 dark:text-slate-400 block font-bold">Studio Location</span>
                    <span className="text-sm text-slate-900 dark:text-slate-200 font-bold">
                      Kottayam, Karukachal 686540, Kerala
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 text-slate-800 dark:text-slate-200 pt-2 border-t border-slate-200 dark:border-sky-500/15">
                  <div className="size-10 rounded-xl bg-emerald-50 dark:bg-[#080e27] border border-emerald-200 dark:border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0 shadow-sm">
                    <ShieldCheck className="size-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-500 dark:text-slate-400 block font-bold">Fast Response</span>
                    <span className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                      Direct creative team consultation & custom quotes
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Inquiry Form */}
          <div className="reveal delay-200 lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-sky-500/25 bg-white/95 dark:bg-gradient-to-b dark:from-[#0c1844]/95 dark:to-[#080e27]/95 shadow-xl">
              {isSubmitted ? (
                <div className="text-center py-8 space-y-4 animate-in zoom-in-95 duration-200">
                  <div className="size-14 rounded-full bg-emerald-600 mx-auto flex items-center justify-center text-white">
                    <CheckCircle2 className="size-8" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Inquiry Received!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 max-w-sm mx-auto">
                    Thank you, <strong className="text-slate-900 dark:text-white">{formData.name}</strong>. We will message or call you on <span className="text-sky-600 dark:text-cyan-300 font-mono font-bold">{formData.phone}</span> shortly.
                  </p>

                  <a
                    href="https://wa.me/919447520844"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-5 py-2.5 text-xs font-bold text-white shadow-md transition-all hover:scale-105"
                  >
                    <MessageCircle className="size-4" />
                    <span>Open WhatsApp Directly</span>
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMsg && (
                    <div className="p-2.5 rounded-lg bg-red-100 dark:bg-red-950/80 border border-red-300 dark:border-red-500/40 text-xs text-red-800 dark:text-red-200 font-medium">
                      {errorMsg}
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-800 dark:text-slate-300 mb-1.5 font-bold">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl bg-slate-50 dark:bg-[#080e27] border border-slate-300 dark:border-sky-500/20 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-sky-500 dark:focus:border-cyan-400 focus:bg-white focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-800 dark:text-slate-300 mb-1.5 font-bold">
                      WhatsApp / Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-xl bg-slate-50 dark:bg-[#080e27] border border-slate-300 dark:border-sky-500/20 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-sky-500 dark:focus:border-cyan-400 focus:bg-white focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-800 dark:text-slate-300 mb-1.5 font-bold">
                      Service You Need:
                    </label>
                    <select
                      value={formData.selectedService}
                      onChange={(e) => setFormData({ ...formData, selectedService: e.target.value })}
                      className="w-full rounded-xl bg-slate-50 dark:bg-[#080e27] border border-slate-300 dark:border-sky-500/20 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white focus:border-sky-500 dark:focus:border-cyan-400 focus:bg-white focus:outline-none transition-all cursor-pointer"
                    >
                      {AVAILABLE_SERVICES.map((s) => (
                        <option key={s} value={s} className="bg-white dark:bg-[#080e27] text-slate-900 dark:text-white">
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-800 dark:text-slate-300 mb-1.5 font-bold">
                      Project Details / Requirements:
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us what you're looking for (e.g. Logo redesign, 10 reels per month, admission posters...)"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-xl bg-slate-50 dark:bg-[#080e27] border border-slate-300 dark:border-sky-500/20 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-sky-500 dark:focus:border-cyan-400 focus:bg-white focus:outline-none resize-none transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 py-3 text-xs sm:text-sm font-bold text-white shadow-lg shadow-cyan-600/25 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 transition-all cursor-pointer"
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
