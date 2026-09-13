'use client';

import React, { useState } from "react";
import confetti from "canvas-confetti";
import InstagramIcon from "./InstagramIcon";
import {
  Send,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  MessageCircle,
  Zap,
  ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";

const BUDGET_RANGES = [
  "₹10k – ₹25k / mo",
  "₹25k – ₹50k / mo",
  "₹50k – ₹1,00,000 / mo",
  "₹1,00,000+ / mo",
];

const AVAILABLE_SERVICES = [
  "Logo Design & Brand Identity Systems",
  "Instagram Reels & Video Production",
  "Social Media Posters & Creatives",
  "High-CTR YouTube Thumbnails",
  "Monthly Social Media Management",
  "Meta & Google Performance Ads",
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    budget: "₹25k – ₹50k / mo",
    selectedServices: ["Instagram Reels & Video Production"],
    goal: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => {
      const exists = prev.selectedServices.includes(service);
      return {
        ...prev,
        selectedServices: exists
          ? prev.selectedServices.filter((s) => s !== service)
          : [...prev.selectedServices, service],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || (!formData.email.trim() && !formData.phone.trim())) {
      setErrorMsg("Please provide your name and at least a phone number or email address.");
      return;
    }

    setErrorMsg("");
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
          colors: ["#38bdf8", "#2563eb", "#10b981", "#ffffff"],
        });
      } catch {
        // Fallback
      }
    }, 800);
  };

  return (
    <section id="contact" className="relative w-full py-24 bg-[#060a1d] border-b border-sky-500/15 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 size-[500px] rounded-full bg-cyan-600/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 size-[500px] rounded-full bg-blue-600/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/25 bg-[#0c1844]/80 px-3.5 py-1 text-xs font-mono text-cyan-300 backdrop-blur-md mb-4">
            <Zap className="size-3.5 text-cyan-400" />
            <span>LET'S BUILD YOUR GROWTH SYSTEM</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Connect With <span className="gradient-text-cyan">Framify Kerala</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Based in Kottayam, Karukachal. We collaborate with visionary businesses across Kerala, Pan-India, and global markets.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info & Location */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick WhatsApp Highlight Card */}
            <div className="glass-card rounded-2xl p-6 border border-emerald-500/30 bg-gradient-to-br from-[#0c2e28]/70 via-[#0c1844]/80 to-[#080e27]/90 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="size-11 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-lg shadow-emerald-600/30">
                  <MessageCircle className="size-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-emerald-400 font-bold block">Fastest Response</span>
                  <h4 className="text-base font-bold text-white">Direct WhatsApp Support</h4>
                </div>
              </div>
              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                Need an immediate quote for a logo, reel edit, or social media campaign? Message our team directly.
              </p>
              <a
                href="https://wa.me/919447520844?text=Hi%20Framify!%20I'd%20like%20to%20inquire%20about%20your%20design%20and%20marketing%20services."
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 py-3 text-xs font-bold text-white shadow-md transition-all active:scale-95"
              >
                <MessageCircle className="size-4" />
                <span>Open WhatsApp (+91 94475 20844)</span>
              </a>
            </div>

            {/* Direct Details Card */}
            <div className="glass-card rounded-2xl p-6 border border-sky-500/15 space-y-4">
              <div className="flex items-center gap-3 text-slate-200">
                <div className="size-9 rounded-xl bg-[#0c1844] border border-sky-500/30 flex items-center justify-center text-cyan-400">
                  <Phone className="size-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">Phone / WhatsApp</span>
                  <a href="tel:+919447520844" className="text-sm font-bold text-white hover:text-cyan-400 font-mono">
                    +91 94475 20844
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-slate-200">
                <div className="size-9 rounded-xl bg-[#0c1844] border border-sky-500/30 flex items-center justify-center text-pink-400">
                  <InstagramIcon className="size-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">Official Instagram</span>
                  <a
                    href="https://instagram.com/framifydigitalmarketing"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-bold text-white hover:text-pink-400 font-mono"
                  >
                    @framifydigitalmarketing
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-slate-200">
                <div className="size-9 rounded-xl bg-[#0c1844] border border-sky-500/30 flex items-center justify-center text-cyan-400">
                  <MapPin className="size-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">Studio Location</span>
                  <span className="text-sm text-slate-200 font-medium">
                    Kottayam, Karukachal 686540, Kerala
                  </span>
                </div>
              </div>
            </div>

            {/* Assurance Guarantee */}
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <ShieldCheck className="size-4 text-cyan-400 shrink-0" />
              <span>Direct creative partnership. Fast turnaround & source file delivery.</span>
            </div>
          </div>

          {/* Right Column: In-Depth Project Request Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-6 sm:p-10 border border-sky-500/25 bg-gradient-to-b from-[#0c1844]/95 to-[#080e27]/95 shadow-2xl relative">
              {isSubmitted ? (
                <div className="text-center py-12 space-y-6 animate-in zoom-in-95 duration-300">
                  <div className="size-16 rounded-full bg-gradient-to-tr from-cyan-400 to-emerald-500 mx-auto flex items-center justify-center text-white shadow-xl shadow-cyan-500/30">
                    <CheckCircle2 className="size-9" />
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                      Inquiry Received!
                    </h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto mt-2">
                      Thank you, <strong className="text-white">{formData.name}</strong>. The Framify team will connect with you on WhatsApp or call shortly.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#080e27] border border-sky-500/20 max-w-md mx-auto text-left text-xs text-slate-300 space-y-2">
                    <div className="flex items-center gap-2 text-emerald-400 font-semibold font-mono">
                      <Clock className="size-4" />
                      <span>Quick Connect: WhatsApp</span>
                    </div>
                    <p>
                      Want an instant reply right now? You can also ping us directly on{" "}
                      <a href="https://wa.me/919447520844" className="text-cyan-300 underline font-semibold">
                        +91 94475 20844
                      </a>.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        company: "",
                        website: "",
                        budget: "₹25k – ₹50k / mo",
                        selectedServices: ["Instagram Reels & Video Production"],
                        goal: "",
                      });
                    }}
                    className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 underline"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMsg && (
                    <div className="p-3 rounded-lg bg-red-950/80 border border-red-500/40 text-xs text-red-200">
                      {errorMsg}
                    </div>
                  )}

                  {/* 1. Monthly Budget */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-2 font-semibold tracking-wider">
                      Select Estimated Budget Range:
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {BUDGET_RANGES.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: b })}
                          className={cn(
                            "py-2.5 px-2 rounded-xl text-xs font-mono font-semibold text-center border transition-all",
                            formData.budget === b
                              ? "bg-gradient-to-r from-cyan-600 to-blue-600 border-cyan-400 text-white shadow-md shadow-cyan-950"
                              : "bg-[#080e27]/80 border-sky-500/15 text-slate-300 hover:border-sky-400/40"
                          )}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 2. Services Needed */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-2 font-semibold tracking-wider">
                      Select Services You Need:
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {AVAILABLE_SERVICES.map((s) => {
                        const isChecked = formData.selectedServices.includes(s);
                        return (
                          <button
                            key={s}
                            type="button"
                            onClick={() => handleServiceToggle(s)}
                            className={cn(
                              "p-2.5 rounded-xl text-xs font-medium text-left border flex items-center justify-between transition-all",
                              isChecked
                                ? "bg-sky-950/70 border-cyan-400 text-cyan-200"
                                : "bg-[#080e27]/60 border-sky-500/15 text-slate-300 hover:border-sky-400/30"
                            )}
                          >
                            <span className="truncate pr-2">{s}</span>
                            <div
                              className={cn(
                                "size-4 rounded border flex items-center justify-center shrink-0",
                                isChecked
                                  ? "bg-cyan-500 border-cyan-400 text-white"
                                  : "border-slate-600"
                              )}
                            >
                              {isChecked && <CheckCircle2 className="size-3" />}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 3. Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5 font-semibold">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Nair"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-xl bg-[#080e27] border border-sky-500/20 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5 font-semibold">
                        WhatsApp / Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-xl bg-[#080e27] border border-sky-500/20 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* 4. Brand / Instagram Handle & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5 font-semibold">
                        Brand / Instagram Handle
                      </label>
                      <input
                        type="text"
                        placeholder="@yourbrand or Company Name"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full rounded-xl bg-[#080e27] border border-sky-500/20 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5 font-semibold">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="rahul@brand.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-xl bg-[#080e27] border border-sky-500/20 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* 5. Project Details */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5 font-semibold">
                      Tell us about your project goals:
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Need 15 viral reels per month, logo redesign for our new outlet, daily social media creative management..."
                      value={formData.goal}
                      onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                      className="w-full rounded-xl bg-[#080e27] border border-sky-500/20 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 py-4 text-base font-bold text-white shadow-xl shadow-cyan-500/25 transition-all hover:scale-[1.01] hover:shadow-cyan-400/40 active:scale-[0.99] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2 font-mono">
                        <span className="size-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Submitting Inquiry...
                      </span>
                    ) : (
                      <>
                        <Sparkles className="size-5" />
                        <span>Send Project Inquiry</span>
                        <ArrowRight className="size-5" />
                      </>
                    )}
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
