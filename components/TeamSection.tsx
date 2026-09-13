'use client';

import React from 'react';
import Image from 'next/image';
import { Users, Sparkles, Award, Video, Palette, TrendingUp, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  skills: string[];
  stat: string;
  statLabel: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'rahul',
    name: 'Rahul K. S.',
    role: 'Founder & Creative Director',
    image: '/team/creative-director.jpg',
    bio: 'Visionary brand architect leading creative direction and growth frameworks for 120+ businesses across Kerala & abroad.',
    skills: ['Brand Strategy', 'Visual Identity', 'Creative Direction'],
    stat: '120+',
    statLabel: 'Brands Scaled',
  },
  {
    id: 'anjali',
    name: 'Anjali Menon',
    role: 'Lead Brand & Identity Designer',
    image: '/team/brand-designer.jpg',
    bio: 'Typography and vector mark specialist crafting timeless minimalist logos, packaging systems, and visual guidelines.',
    skills: ['Logo Systems', 'Packaging', 'Typography Hierarchy'],
    stat: '350+',
    statLabel: 'Logos Crafted',
  },
  {
    id: 'arjun',
    name: 'Arjun Das',
    role: 'Senior Motion & Reel Specialist',
    image: '/team/video-editor.jpg',
    bio: 'Master of viral 9:16 vertical pacing, audio-visual kinetic transitions, and high-retention social reel sequences.',
    skills: ['Kinetic Editing', 'Sound Design', '9:16 Virality'],
    stat: '15M+',
    statLabel: 'Reel Views',
  },
  {
    id: 'sneha',
    name: 'Sneha Varma',
    role: 'Social Media & Growth Strategist',
    image: '/team/growth-lead.jpg',
    bio: 'Data-driven performance marketer designing high-CTR thumbnail hooks, carousel funnels, and ad creative strategy.',
    skills: ['Thumbnail Hooks', 'Ad Creatives', 'Conversion Design'],
    stat: '3.8x',
    statLabel: 'Avg CTR Boost',
  },
];

export function TeamSection() {
  return (
    <section id="team" className="relative w-full py-20 bg-[#080e27] border-b border-sky-500/15 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 size-96 rounded-full bg-cyan-900/10 blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 size-96 rounded-full bg-blue-900/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="reveal text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/25 bg-[#0c1844]/80 px-3.5 py-1 text-xs font-mono text-cyan-300 backdrop-blur-md mb-3 shadow-sm">
            <Users className="size-3.5 text-cyan-400" />
            <span>OUR TEAM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            The Creative Minds Behind <span className="gradient-text-cyan">Your Growth</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Meet the seasoned brand designers, motion editors, and growth strategists powering high-conversion visuals at Framify.
          </p>
        </div>

        {/* Team Grid */}
        <div className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="glass-card group rounded-2xl overflow-hidden border border-sky-500/15 hover:border-cyan-400/40 bg-[#0a1336]/80 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-cyan-950/60"
            >
              <div>
                {/* Portrait Container with Hover Zoom */}
                <div className="relative aspect-square w-full overflow-hidden bg-[#05091a]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-108"
                    priority
                  />
                  {/* Subtle Gradient Shade on bottom of photo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1336] via-transparent to-transparent opacity-80" />

                  {/* Highlight Stat Pill in Corner */}
                  <div className="absolute bottom-3 right-3 rounded-xl bg-[#080e27]/90 border border-sky-500/30 px-2.5 py-1 backdrop-blur-md text-right shadow-md">
                    <div className="text-xs font-mono font-black text-cyan-300">{member.stat}</div>
                    <div className="text-[9px] font-mono uppercase text-slate-400 leading-none">{member.statLabel}</div>
                  </div>
                </div>

                {/* Member Info Deck */}
                <div className="p-5">
                  <div className="text-[11px] font-mono uppercase font-bold text-cyan-400 tracking-wider mb-1">
                    {member.role}
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed font-normal line-clamp-3">
                    {member.bio}
                  </p>
                </div>
              </div>

              {/* Skills Tags */}
              <div className="px-5 pb-5 pt-2 border-t border-sky-500/10 flex flex-wrap gap-1.5">
                {member.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#0c1844] border border-sky-500/20 text-slate-300 group-hover:border-cyan-500/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
