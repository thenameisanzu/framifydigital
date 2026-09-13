'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

const SQRT_5000 = Math.sqrt(5000);

interface TestimonialItem {
  tempId: number;
  testimonial: string;
  by: string;
  role: string;
  location: string;
  rating: number;
  service: string;
  imgSrc: string;
}

const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    tempId: 0,
    testimonial: "Our reels started hitting 100k+ organic views consistently within 3 weeks. Framify's pacing and visual hook design is truly unbeatable.",
    by: "Anoop K.",
    role: "Founder, Cafe & Food Venture",
    location: "Kottayam, Kerala",
    rating: 5,
    service: "Reels & Social Posters",
    imgSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    tempId: 1,
    testimonial: "Our new minimalist logo and patient inquiry posters brought unprecedented clarity to our brand. Direct WhatsApp inquiries surged by 65%.",
    by: "Dr. Sreejith",
    role: "Director, Ayurvedic Healthcare Clinic",
    location: "Kerala",
    rating: 5,
    service: "Logo & Brand Identity",
    imgSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    tempId: 2,
    testimonial: "My YouTube video CTR shot up from 4.2% to over 11.8%. The custom thumbnails have aggressive contrast and supreme mobile readability.",
    by: "Rahul M.",
    role: "Tech & Lifestyle Creator",
    location: "Kerala & Online",
    rating: 5,
    service: "High-CTR Thumbnails",
    imgSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    tempId: 3,
    testimonial: "From luxury brand typography to daily festival creatives, Framify handles our entire visual pipeline with fast turnaround and 0 hassle.",
    by: "Meera Nair",
    role: "Creative Head, Couture Boutique",
    location: "Kochi, Kerala",
    rating: 5,
    service: "Brand Identity & Posters",
    imgSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    tempId: 4,
    testimonial: "The 10-piece launch kit and dynamic motion reels gave our fitness studio a massive sold-out opening month across Kottayam.",
    by: "Kevin Thomas",
    role: "Managing Partner, Velocity Fitness",
    location: "Kottayam, Kerala",
    rating: 5,
    service: "Brand Launch Kit & Reels",
    imgSrc: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    tempId: 5,
    testimonial: "Their multi-slide carousel infographics and admission posters drove record enrollments. Clear communication on WhatsApp every day.",
    by: "Sandra Philip",
    role: "Academic Coordinator, Apex Academy",
    location: "Kerala",
    rating: 5,
    service: "Social Posters & Carousels",
    imgSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    tempId: 6,
    testimonial: "Unparalleled design consistency. Whether it's high-res vector source files or urgent weekend story creatives, Framify delivers.",
    by: "Nithin Raj",
    role: "Lead Architect, Habitat Studios",
    location: "Thrissur, Kerala",
    rating: 5,
    service: "Visual Guidelines & Posters",
    imgSrc: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    tempId: 7,
    testimonial: "Framify built our entire visual brand system from scratch. The aesthetic is clean, modern, and easily beats multinational agency work.",
    by: "Deepak V.",
    role: "Co-Founder, Urban Brews",
    location: "Calicut, Kerala",
    rating: 5,
    service: "Complete Brand Identity",
    imgSrc: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    tempId: 8,
    testimonial: "The video pacing and sound engineering in our product reveal reels helped us cross 500+ pre-orders in the first 48 hours.",
    by: "Reshma S.",
    role: "Product Lead, Aura Organics",
    location: "Kochi, Kerala",
    rating: 5,
    service: "Product Launch Reels",
    imgSrc: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    tempId: 9,
    testimonial: "Extremely reliable turnaround. We needed 15 event posters during festival week and Framify delivered every single creative on time.",
    by: "Mathew Varghese",
    role: "Events Director, Grand Festive Events",
    location: "Kottayam, Kerala",
    rating: 5,
    service: "Festival Creatives Pack",
    imgSrc: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    tempId: 10,
    testimonial: "Our channel growth jumped 300% after Framify redesigned our video hooks and thumbnail typography. Best investment for creators.",
    by: "Arun Joseph",
    role: "Finance & Creator Educator",
    location: "Kerala & Online",
    rating: 5,
    service: "Thumbnails & Reel Hooks",
    imgSrc: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    tempId: 11,
    testimonial: "Top-notch vector craft. The icon mark works flawlessly on physical neon signage, business cards, and digital apps alike.",
    by: "Kavya R.",
    role: "CEO, Nexora Technologies",
    location: "Trivandrum, Kerala",
    rating: 5,
    service: "Vector Brand Icon",
    imgSrc: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    tempId: 12,
    testimonial: "Professional, responsive, and creative. They understand what sells on Instagram and how to capture short attention spans.",
    by: "Gokul Krishna",
    role: "Marketing Head, Elite Automotive",
    location: "Kollam, Kerala",
    rating: 5,
    service: "Automotive Social Reels",
    imgSrc: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    tempId: 13,
    testimonial: "Our restaurant's daily story engagement tripled with Framify's animated motion graphics. Highly recommended!",
    by: "Pooja Pillai",
    role: "Hospitality Manager, Spice Garden",
    location: "Alappuzha, Kerala",
    rating: 5,
    service: "Food Motion Creatives",
    imgSrc: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    tempId: 14,
    testimonial: "Framify gave our academy a premium corporate look. Students and parents immediately noticed the quality leap.",
    by: "Sujith Nair",
    role: "Director, Global IELTS Institute",
    location: "Kottayam, Kerala",
    rating: 5,
    service: "Educational Ad Creatives",
    imgSrc: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=200&h=200&q=80",
  },
];

interface TestimonialCardProps {
  position: number;
  testimonial: TestimonialItem;
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  position,
  testimonial,
  handleMove,
  cardSize,
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "testimonial-stagger-card absolute left-1/2 top-1/2 cursor-pointer border-2 p-6 sm:p-8 transition-all duration-500 ease-in-out select-none",
        isCenter
          ? "z-20 bg-gradient-to-b from-[#16337a] via-[#0f2458] to-[#0c1844] text-white border-cyan-400 shadow-2xl shadow-cyan-500/25 ring-2 ring-cyan-400/30"
          : "z-0 bg-[#0c1844]/80 backdrop-blur-md text-slate-200 border-sky-500/25 hover:border-cyan-400/60 hover:bg-[#102258]"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(45px 0%, calc(100% - 45px) 0%, 100% 45px, 100% 100%, calc(100% - 45px) 100%, 45px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.4) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
      }}
    >
      {/* Angled Corner Accent Line */}
      <span
        className={cn(
          "absolute block origin-top-right rotate-45 transition-colors",
          isCenter ? "bg-cyan-400 shadow-sm shadow-cyan-400" : "bg-sky-500/30"
        )}
        style={{
          right: -2,
          top: 43,
          width: SQRT_5000,
          height: 2,
        }}
      />

      {/* Top Header: Avatar + Rating & Service Pill */}
      <div className="flex items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-3">
          <img
            src={testimonial.imgSrc}
            alt={testimonial.by}
            className={cn(
              "h-12 w-12 rounded-xl object-cover object-top border-2 shadow-md transition-all",
              isCenter ? "border-cyan-300 shadow-cyan-400/30" : "border-sky-500/30"
            )}
          />
          <div>
            <div className="flex items-center gap-1 mb-0.5">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="size-3 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <div className={cn("text-[10px] font-mono font-semibold", isCenter ? "text-cyan-200" : "text-slate-400")}>
              {testimonial.service}
            </div>
          </div>
        </div>

        {isCenter && (
          <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-mono font-bold text-slate-950 bg-cyan-400 px-2.5 py-0.5 rounded-full shadow-sm">
            <ShieldCheck className="size-3 stroke-[2.5]" /> Verified
          </span>
        )}
      </div>

      {/* Testimonial Quote */}
      <h3
        className={cn(
          "text-sm sm:text-base font-semibold leading-relaxed line-clamp-4",
          isCenter ? "text-white" : "text-slate-200"
        )}
      >
        "{testimonial.testimonial}"
      </h3>

      {/* Author Footer */}
      <div className="absolute bottom-6 left-6 right-6 pt-3 border-t border-sky-500/15">
        <p className={cn("text-xs font-bold leading-tight", isCenter ? "text-white" : "text-slate-200")}>
          {testimonial.by}
        </p>
        <p className={cn("text-[11px] mt-0.5", isCenter ? "text-cyan-200/90" : "text-slate-400")}>
          {testimonial.role} · <span className="font-semibold text-cyan-300">{testimonial.location}</span>
        </p>
      </div>
    </div>
  );
};

export function Testimonials() {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(TESTIMONIALS_DATA);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <section id="testimonials" className="relative w-full py-20 bg-[#080e27] border-b border-sky-500/15 overflow-hidden">
      {/* Background Ambience Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] rounded-full bg-blue-900/15 blur-[140px] pointer-events-none" />

      {/* Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-8">
        <div className="reveal text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/25 bg-[#0c1844]/80 px-3.5 py-1 text-xs font-mono text-cyan-300 backdrop-blur-md mb-3 shadow-sm">
            <Quote className="size-3.5 text-cyan-400" />
            <span>CLIENT EXPERIENCES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Trusted by <span className="gradient-text-cyan">Creators & Businesses</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300">
            Click any card or use navigation arrows to explore real results and client feedback.
          </p>
        </div>
      </div>

      {/* 3D Staggered Carousel Area - Full-Bleed Edge-to-Edge */}
      <div className="relative w-full overflow-hidden" style={{ height: 570 }}>
        {testimonialsList.map((testimonial, index) => {
          const position = testimonialsList.length % 2
            ? index - (testimonialsList.length + 1) / 2
            : index - testimonialsList.length / 2;
          return (
            <TestimonialCard
              key={testimonial.tempId}
              testimonial={testimonial}
              handleMove={handleMove}
              position={position}
              cardSize={cardSize}
            />
          );
        })}

        {/* Center Bottom Control Buttons */}
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-3 z-30">
          <button
            onClick={() => handleMove(-1)}
            className={cn(
              "flex h-12 w-12 items-center justify-center rounded-2xl border transition-all duration-200 cursor-pointer shadow-lg active:scale-95",
              "bg-[#0c1844] border-sky-500/30 text-cyan-300 hover:bg-cyan-500 hover:text-slate-950 hover:border-cyan-400 hover:shadow-cyan-500/30"
            )}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="size-6" />
          </button>
          <button
            onClick={() => handleMove(1)}
            className={cn(
              "flex h-12 w-12 items-center justify-center rounded-2xl border transition-all duration-200 cursor-pointer shadow-lg active:scale-95",
              "bg-[#0c1844] border-sky-500/30 text-cyan-300 hover:bg-cyan-500 hover:text-slate-950 hover:border-cyan-400 hover:shadow-cyan-500/30"
            )}
            aria-label="Next testimonial"
          >
            <ChevronRight className="size-6" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
