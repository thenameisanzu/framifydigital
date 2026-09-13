'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Quote, Star, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

const SQRT_5000 = Math.sqrt(5000);

interface TestimonialItem {
  id: number;
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
    id: 0,
    testimonial: "Our reels started hitting 100k+ organic views consistently within 3 weeks. Framify's pacing and visual hook design is truly unbeatable.",
    by: "Anoop K.",
    role: "Founder, Cafe & Food Venture",
    location: "Kottayam, Kerala",
    rating: 5,
    service: "Reels & Social Posters",
    imgSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    id: 1,
    testimonial: "Our new minimalist logo and patient inquiry posters brought unprecedented clarity to our brand. Direct WhatsApp inquiries surged by 65%.",
    by: "Dr. Sreejith",
    role: "Director, Ayurvedic Healthcare Clinic",
    location: "Kerala",
    rating: 5,
    service: "Logo & Brand Identity",
    imgSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    id: 2,
    testimonial: "My YouTube video CTR shot up from 4.2% to over 11.8%. The custom thumbnails have aggressive contrast and supreme mobile readability.",
    by: "Rahul M.",
    role: "Tech & Lifestyle Creator",
    location: "Kerala & Online",
    rating: 5,
    service: "High-CTR Thumbnails",
    imgSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    id: 3,
    testimonial: "From luxury brand typography to daily festival creatives, Framify handles our entire visual pipeline with fast turnaround and 0 hassle.",
    by: "Meera Nair",
    role: "Creative Head, Couture Boutique",
    location: "Kochi, Kerala",
    rating: 5,
    service: "Brand Identity & Posters",
    imgSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    id: 4,
    testimonial: "The 10-piece launch kit and dynamic motion reels gave our fitness studio a massive sold-out opening month across Kottayam.",
    by: "Kevin Thomas",
    role: "Managing Partner, Velocity Fitness",
    location: "Kottayam, Kerala",
    rating: 5,
    service: "Brand Launch Kit & Reels",
    imgSrc: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    id: 5,
    testimonial: "Their multi-slide carousel infographics and admission posters drove record enrollments. Clear communication on WhatsApp every day.",
    by: "Sandra Philip",
    role: "Academic Coordinator, Apex Academy",
    location: "Kerala",
    rating: 5,
    service: "Social Posters & Carousels",
    imgSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    id: 6,
    testimonial: "Unparalleled design consistency. Whether it's high-res vector source files or urgent weekend story creatives, Framify delivers.",
    by: "Nithin Raj",
    role: "Lead Architect, Habitat Studios",
    location: "Thrissur, Kerala",
    rating: 5,
    service: "Visual Guidelines & Posters",
    imgSrc: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    id: 7,
    testimonial: "Framify built our entire visual brand system from scratch. The aesthetic is clean, modern, and easily beats multinational agency work.",
    by: "Deepak V.",
    role: "Co-Founder, Urban Brews",
    location: "Calicut, Kerala",
    rating: 5,
    service: "Complete Brand Identity",
    imgSrc: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    id: 8,
    testimonial: "The video pacing and sound engineering in our product reveal reels helped us cross 500+ pre-orders in the first 48 hours.",
    by: "Reshma S.",
    role: "Product Lead, Aura Organics",
    location: "Kochi, Kerala",
    rating: 5,
    service: "Product Launch Reels",
    imgSrc: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    id: 9,
    testimonial: "Extremely reliable turnaround. We needed 15 event posters during festival week and Framify delivered every single creative on time.",
    by: "Mathew Varghese",
    role: "Events Director, Grand Festive Events",
    location: "Kottayam, Kerala",
    rating: 5,
    service: "Festival Creatives Pack",
    imgSrc: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    id: 10,
    testimonial: "Our channel growth jumped 300% after Framify redesigned our video hooks and thumbnail typography. Best investment for creators.",
    by: "Arun Joseph",
    role: "Finance & Creator Educator",
    location: "Kerala & Online",
    rating: 5,
    service: "Thumbnails & Reel Hooks",
    imgSrc: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    id: 11,
    testimonial: "Top-notch vector craft. The icon mark works flawlessly on physical neon signage, business cards, and digital apps alike.",
    by: "Kavya R.",
    role: "CEO, Nexora Technologies",
    location: "Trivandrum, Kerala",
    rating: 5,
    service: "Vector Brand Icon",
    imgSrc: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    id: 12,
    testimonial: "Professional, responsive, and creative. They understand what sells on Instagram and how to capture short attention spans.",
    by: "Gokul Krishna",
    role: "Marketing Head, Elite Automotive",
    location: "Kollam, Kerala",
    rating: 5,
    service: "Automotive Social Reels",
    imgSrc: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    id: 13,
    testimonial: "Our restaurant's daily story engagement tripled with Framify's animated motion graphics. Highly recommended!",
    by: "Pooja Pillai",
    role: "Hospitality Manager, Spice Garden",
    location: "Alappuzha, Kerala",
    rating: 5,
    service: "Food Motion Creatives",
    imgSrc: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    id: 14,
    testimonial: "Framify gave our academy a premium corporate look. Students and parents immediately noticed the quality leap.",
    by: "Sujith Nair",
    role: "Director, Global IELTS Institute",
    location: "Kottayam, Kerala",
    rating: 5,
    service: "Educational Ad Creatives",
    imgSrc: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=200&h=200&q=80",
  },
];

export function Testimonials() {
  const [cardSize, setCardSize] = useState(365);
  const [offset, setOffset] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const targetOffsetRef = useRef(0);
  const currentOffsetRef = useRef(0);
  const isHoveredRef = useRef(false);

  // Responsive card size
  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia('(min-width: 640px)');
      setCardSize(matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // Vertical scroll linkage to 3D carousel progression
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let rafId: number;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const deltaY = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;

      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        // Check if section is in or near viewport
        if (rect.top < window.innerHeight * 1.3 && rect.bottom > -window.innerHeight * 0.3) {
          targetOffsetRef.current += deltaY * 0.0028;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    const animate = () => {
      // Subtle ambient drift when not hovered
      if (!isHoveredRef.current) {
        targetOffsetRef.current += 0.0015;
      }

      // Buttery smooth lerp
      currentOffsetRef.current += (targetOffsetRef.current - currentOffsetRef.current) * 0.08;
      setOffset(currentOffsetRef.current);

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const totalCards = TESTIMONIALS_DATA.length;

  const handleCardClick = (diff: number) => {
    targetOffsetRef.current = Math.round(targetOffsetRef.current) + diff;
  };

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative w-full py-20 bg-[#090a0f] border-b border-white/[0.06] overflow-hidden select-none"
      onMouseEnter={() => { isHoveredRef.current = true; }}
      onMouseLeave={() => { isHoveredRef.current = false; }}
    >
      {/* Background Ambience Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[650px] rounded-full bg-cyan-500/[0.03] blur-[150px] pointer-events-none" />

      {/* Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-10">
        <div className="reveal text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.04] px-3.5 py-1 text-xs font-mono text-cyan-300 backdrop-blur-md mb-3 shadow-sm">
            <Quote className="size-3.5 text-cyan-400" />
            <span>CLIENT EXPERIENCES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Trusted by <span className="gradient-text-cyan">Creators & Businesses</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300">
            Scroll vertically to browse real client feedback and verified creative results.
          </p>
        </div>
      </div>

      {/* 3D Staggered Polygon Carousel Stage - Driven by vertical scroll */}
      <div className="relative w-full overflow-hidden" style={{ height: 570 }}>
        {TESTIMONIALS_DATA.map((testimonial, i) => {
          // Calculate wrapped circular distance
          let diff = (i - (offset % totalCards) + totalCards) % totalCards;
          if (diff > totalCards / 2) diff -= totalCards;

          // Only render visible cards within horizon
          if (Math.abs(diff) > 3.2) return null;

          const isCenter = Math.abs(diff) < 0.5;
          const translateX = diff * (cardSize * 0.72);
          const translateY = isCenter
            ? -60
            : (Math.sin(diff * 1.6) * 16 + (Math.abs(diff) * 10 - 20));
          const rotateDeg = isCenter ? 0 : diff * 3.2;
          const scale = Math.max(0.72, 1 - Math.abs(diff) * 0.08);
          const opacity = Math.max(0, 1 - Math.pow(Math.abs(diff) / 3.8, 1.8));
          const zIndex = Math.round(40 - Math.abs(diff) * 8);

          return (
            <div
              key={testimonial.id}
              data-center={isCenter ? "true" : "false"}
              onClick={() => handleCardClick(diff)}
              className={cn(
                "testimonial-stagger-card absolute left-1/2 top-1/2 cursor-pointer border-2 p-6 sm:p-8 select-none will-change-transform",
                isCenter
                  ? "is-center bg-gradient-to-b from-[#141d2e] via-[#101726] to-[#0c121d] text-white border-cyan-400 shadow-2xl shadow-cyan-500/20 ring-2 ring-cyan-400/25"
                  : "bg-[#0e121a]/90 backdrop-blur-md text-slate-200 border-white/[0.08] hover:border-cyan-400/50 hover:bg-[#141a26]"
              )}
              style={{
                width: cardSize,
                height: cardSize,
                zIndex,
                opacity,
                clipPath: `polygon(45px 0%, calc(100% - 45px) 0%, 100% 45px, 100% 100%, calc(100% - 45px) 100%, 45px 100%, 0 100%, 0 0)`,
                transform: `
                  translate(-50%, -50%)
                  translate3d(${translateX}px, ${translateY}px, 0)
                  rotate(${rotateDeg}deg)
                  scale(${scale})
                `,
                transition: 'border-color 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease',
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
                      "h-12 w-12 rounded-xl object-cover object-top border-2 shadow-md transition-all shrink-0",
                      isCenter ? "border-cyan-300 shadow-cyan-400/30" : "border-sky-500/30"
                    )}
                  />
                  <div>
                    <div className="flex items-center gap-1 mb-0.5">
                      {[...Array(testimonial.rating)].map((_, idx) => (
                        <Star key={idx} className="size-3 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                    <div className={cn("text-[10px] font-mono font-semibold", isCenter ? "text-cyan-200" : "text-slate-400")}>
                      {testimonial.service}
                    </div>
                  </div>
                </div>

                {isCenter && (
                  <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-mono font-bold text-slate-950 bg-cyan-400 px-2.5 py-0.5 rounded-full shadow-sm shrink-0">
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
        })}
      </div>
    </section>
  );
}

export default Testimonials;
