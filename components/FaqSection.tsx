'use client';

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

const FAQS: FaqItem[] = [
  {
    question: "What is your typical turnaround time for logo design?",
    answer: "Initial logo concepts are delivered within 3 to 5 business days. Once you choose a direction, revisions and final vector exports (AI, SVG, PNG, PDF + social avatar kit) are delivered within 48 hours.",
    category: "Logos & Branding"
  },
  {
    question: "How does the monthly Instagram Reels editing sprint work?",
    answer: "You send us your raw video clips via Google Drive/Dropbox. Our editors script hooks, craft 9:16 vertical edits, synchronize trending audio, and add dynamic Malayalam or English subtitles with custom cover thumbnails. Delivery is batched weekly for continuous posting.",
    category: "Reels & Video"
  },
  {
    question: "Do you provide source files for posters and graphics?",
    answer: "Yes! For all social media creatives, festival posts, and commercial flyers, we provide full editable Photoshop (.PSD) or Figma source files along with high-res PNG/JPG exports optimized for Feed & Stories.",
    category: "Posters & Creatives"
  },
  {
    question: "How many revisions are included in packages?",
    answer: "We offer 3 rounds of comprehensive revisions on all design deliverables to ensure total satisfaction. Minor text tweaks and fast adjustments can be requested directly via WhatsApp.",
    category: "Revisions & Support"
  },
  {
    question: "How do we get started and what is the payment structure?",
    answer: "You can click 'Get Quote' or chat with us on WhatsApp to discuss your project requirements. We work with a 50% advance to start design and 50% upon final sign-off and source file handoff via UPI/Bank Transfer.",
    category: "Process & Payment"
  }
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="relative w-full py-20 bg-[#090a0f] border-b border-white/[0.06] overflow-hidden">
      {/* Glow ambient background */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 size-[450px] rounded-full bg-cyan-500/[0.03] blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="reveal text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.04] px-3.5 py-1 text-xs font-mono text-cyan-300 backdrop-blur-md mb-3 shadow-sm">
            <HelpCircle className="size-3.5 text-cyan-400" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Got Questions? <span className="gradient-text-cyan">We Have Answers</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300">
            Everything you need to know about working with Framify Digital Marketing.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={cn(
                  "reveal rounded-2xl border transition-all duration-300 overflow-hidden",
                  isOpen
                    ? "glass-card border-cyan-400/40 bg-[#0e121a] shadow-xl shadow-black/40"
                    : "bg-white/[0.03] border-white/[0.08] hover:border-white/[0.18] hover:bg-white/[0.05]"
                )}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-5 text-left transition-colors cursor-pointer select-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5 pr-4">
                    <span className="size-2 rounded-full bg-cyan-400 shrink-0" />
                    <span className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300">
                      {faq.question}
                    </span>
                  </div>

                  <div
                    className={cn(
                      "size-8 rounded-xl border flex items-center justify-center shrink-0 transition-transform duration-300",
                      isOpen
                        ? "rotate-180 bg-cyan-500/20 border-cyan-400 text-cyan-300"
                        : "bg-white/[0.04] border-white/[0.08] text-slate-400"
                    )}
                  >
                    <ChevronDown className="size-4" />
                  </div>
                </button>

                {/* Animated Answer Body */}
                <div
                  className={cn(
                    "grid transition-all duration-300 ease-in-out",
                    isOpen ? "grid-rows-[1fr] opacity-100 pb-5 px-5" : "grid-rows-[0fr] opacity-0 px-5"
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="pt-2 border-t border-white/[0.06] text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Contact Prompt */}
        <div className="reveal delay-200 mt-10 text-center p-6 rounded-2xl glass-card border border-white/[0.1] bg-gradient-to-r from-[#0e121a]/95 via-[#131926]/90 to-[#0e121a]/95 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-bold text-white">Have a specific question about your project?</h4>
            <p className="text-xs text-slate-400 mt-0.5">Chat with our creative director on WhatsApp for instant guidance.</p>
          </div>

          <a
            href="https://wa.me/919447520844?text=Hi%20Framify,%20I%20have%20a%20question%20about%20your%20services."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-5 py-2.5 text-xs font-bold text-white shadow-lg transition-all active:scale-95 shrink-0"
          >
            <MessageCircle className="size-4" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
