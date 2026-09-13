'use client';

import React from 'react';
import Image from 'next/image';
import InstagramIcon from './InstagramIcon';
import { MessageCircle, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TeamMember {
  id: string;
  name: string;
  designation: string;
  imageSrc: string;
  stat: string;
  statLabel: string;
  accentGradient: string;
  waveGradient: string;
  borderHover: string;
  socialLinks: {
    icon: React.ElementType;
    href: string;
    label: string;
  }[];
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'akhil',
    name: 'AKHIL',
    designation: 'Founder & Creative Director',
    imageSrc: '/team/creative-director.jpg',
    stat: '120+',
    statLabel: 'Brands Scaled',
    accentGradient: 'from-cyan-500/10 via-blue-600/5 to-transparent',
    waveGradient: 'from-cyan-500/25 via-blue-600/10 to-transparent',
    borderHover: 'group-hover:border-cyan-400',
    socialLinks: [
      { icon: MessageCircle, href: 'https://wa.me/919447520844?text=Hi%20Akhil,%20I%20want%20to%20discuss%20a%20project.', label: 'WhatsApp' },
      { icon: InstagramIcon, href: 'https://instagram.com/framifydigitalmarketing', label: 'Instagram' },
      { icon: Mail, href: '#contact', label: 'Contact' },
    ],
  },
  {
    id: 'anandhu',
    name: 'ANANDHU PRASAD',
    designation: 'Senior Motion & Visual Specialist',
    imageSrc: '/team/video-editor.jpg',
    stat: '15M+',
    statLabel: 'Reel Views',
    accentGradient: 'from-indigo-500/10 via-blue-600/5 to-transparent',
    waveGradient: 'from-indigo-500/25 via-blue-600/10 to-transparent',
    borderHover: 'group-hover:border-indigo-400',
    socialLinks: [
      { icon: MessageCircle, href: 'https://wa.me/919447520844?text=Hi%20Anandhu,%20I%20want%20to%20produce%20reels/videos.', label: 'WhatsApp' },
      { icon: InstagramIcon, href: 'https://instagram.com/framifydigitalmarketing', label: 'Instagram' },
      { icon: Mail, href: '#contact', label: 'Contact' },
    ],
  },
  {
    id: 'anjali',
    name: 'ANJALI MENON',
    designation: 'Lead Brand & Identity Designer',
    imageSrc: '/team/brand-designer.jpg',
    stat: '350+',
    statLabel: 'Logos Crafted',
    accentGradient: 'from-pink-500/10 via-purple-600/5 to-transparent',
    waveGradient: 'from-pink-500/25 via-purple-600/10 to-transparent',
    borderHover: 'group-hover:border-pink-400',
    socialLinks: [
      { icon: MessageCircle, href: 'https://wa.me/919447520844?text=Hi%20Anjali,%20I%20need%20a%20logo%20or%20branding%20design.', label: 'WhatsApp' },
      { icon: InstagramIcon, href: 'https://instagram.com/framifydigitalmarketing', label: 'Instagram' },
      { icon: Mail, href: '#contact', label: 'Contact' },
    ],
  },
  {
    id: 'sneha',
    name: 'SNEHA VARMA',
    designation: 'Growth & Thumbnail Strategist',
    imageSrc: '/team/growth-lead.jpg',
    stat: '3.8x',
    statLabel: 'Avg CTR Boost',
    accentGradient: 'from-emerald-500/10 via-teal-600/5 to-transparent',
    waveGradient: 'from-emerald-500/25 via-teal-600/10 to-transparent',
    borderHover: 'group-hover:border-emerald-400',
    socialLinks: [
      { icon: MessageCircle, href: 'https://wa.me/919447520844?text=Hi%20Sneha,%20I%20want%20to%20scale%20our%20social%20reach.', label: 'WhatsApp' },
      { icon: InstagramIcon, href: 'https://instagram.com/framifydigitalmarketing', label: 'Instagram' },
      { icon: Mail, href: '#contact', label: 'Contact' },
    ],
  },
];

export function TeamSection() {
  return (
    <section id="team" className="relative w-full py-20 lg:py-28 bg-[#090a0f] border-b border-white/[0.06] overflow-hidden">
      {/* Subtle Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <svg className="h-full w-full" fill="none">
          <defs>
            <pattern id="team-pattern-grid" x="0" y="0" width="36" height="36" patternUnits="userSpaceOnUse">
              <path
                d="M36 0L0 0 0 36"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.8"
                className="text-cyan-500/30"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#team-pattern-grid)" />
        </svg>
      </div>

      {/* Ambient Radial Glows */}
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 size-96 rounded-full bg-cyan-500/[0.04] blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 size-96 rounded-full bg-indigo-500/[0.04] blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Clean Centered Header Section */}
        <div className="reveal text-center max-w-3xl mx-auto mb-14">
          <span className="gradient-text-cyan block text-xs sm:text-sm font-mono font-bold tracking-[0.35em] uppercase mb-2">
            O U R
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            CREATIVE TEAM
          </h2>
          <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed">
            Meet the seasoned brand designers, motion editors, and growth strategists engineering high-converting visual systems at Framify.
          </p>
        </div>

        {/* Team Members Grid with Staggered Reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {TEAM_MEMBERS.map((member, index) => {
            const delays = ["delay-75", "delay-150", "delay-200", "delay-250"];
            return (
              <div
                key={member.id}
                className={cn(
                  "reveal group relative flex flex-col items-center justify-end overflow-hidden rounded-2xl glass-card p-6 text-center border border-white/[0.08] transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/70",
                  delays[index % delays.length],
                  member.borderHover
                )}
                style={{
                  background: 'rgba(14, 18, 28, 0.72)',
                }}
              >
              {/* Dynamic Wave Hover Effect */}
              <div
                className={cn(
                  "absolute bottom-0 left-0 right-0 h-3/5 origin-bottom scale-y-0 transform rounded-t-full bg-gradient-to-t transition-transform duration-500 ease-out group-hover:scale-y-100 pointer-events-none",
                  member.waveGradient
                )}
                style={{ transitionDelay: `${index * 40}ms` }}
              />

              {/* Stat Highlight Pill */}
              <div className="absolute top-4 right-4 z-20 rounded-full bg-white/[0.06] border border-white/[0.12] px-2.5 py-0.5 text-[10px] font-mono font-bold text-cyan-300 backdrop-blur-md shadow-sm">
                <span>{member.stat}</span> <span className="text-slate-400 font-normal">{member.statLabel}</span>
              </div>

              {/* Member Image Avatar with double animated ring & zoom */}
              <div
                className={cn(
                  "relative z-10 h-36 w-36 overflow-hidden rounded-full border-4 border-white/10 bg-white/5 transition-all duration-500 ease-out group-hover:scale-105 shadow-xl",
                  member.borderHover
                )}
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <Image
                  src={member.imageSrc}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-110"
                />
              </div>

              {/* Member Info */}
              <h3 className="relative z-10 mt-5 text-lg font-extrabold tracking-wider text-white group-hover:text-cyan-300 transition-colors">
                {member.name}
              </h3>
              <p className="relative z-10 text-xs font-mono font-medium text-cyan-400/90 mt-1">
                {member.designation}
              </p>

              {/* Social / Action Links (Slide & Fade in on Hover) */}
              <div className="relative z-10 mt-4 flex items-center justify-center gap-2.5 opacity-0 translate-y-1 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                {member.socialLinks.map((link, linkIndex) => {
                  const IconComp = link.icon;
                  return (
                    <a
                      key={linkIndex}
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="size-8 rounded-full bg-white/[0.08] hover:bg-cyan-500 hover:text-slate-950 border border-white/[0.12] hover:border-cyan-400 flex items-center justify-center text-slate-300 transition-all duration-200 hover:scale-110"
                      aria-label={link.label}
                      title={link.label}
                    >
                      <IconComp className="size-4" />
                    </a>
                  );
                })}
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
