'use client';

import React from 'react';
import { Layers, Target, MessageSquare, Compass, Sparkles } from 'lucide-react';

export default function WhyRiya() {
  const points = [
    {
      icon: Layers,
      title: 'One Creative Brain, Multiple Formats',
      desc: 'No need to hire three separate freelancers for branding, social feeds, and motion reels. I bring static and kinetic visual execution under a unified vision.',
      accent: 'bg-brand-coral/10 text-brand-coral border-brand-coral/30',
    },
    {
      icon: Target,
      title: 'Design With Business Purpose',
      desc: 'Visuals shouldn’t just look nice; they should guide attention, improve brand recall, and convert scrollers into students, clients, and customers.',
      accent: 'bg-brand-cobalt/10 text-brand-cobalt border-brand-cobalt/30',
    },
    {
      icon: MessageSquare,
      title: 'Direct, Fast Collaboration',
      desc: 'Work directly with the designer who actually builds your assets. No agency bureaucracy, no communication handoff lag — just fast, thoughtful iterations.',
      accent: 'bg-brand-lime/30 text-ink border-ink/30',
    },
    {
      icon: Compass,
      title: 'Technical & Engineering Precision',
      desc: 'My background in Computer Science & Engineering gives me an obsession with grid alignment, export optimization, pixel fidelity, and structured file management.',
      accent: 'bg-purple-500/10 text-purple-600 border-purple-500/30',
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-ink text-white relative overflow-hidden border-y-2 border-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-800 pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-brand-lime uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>The Advantage / 08</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl tracking-tight text-white uppercase">
              Why Partner <br />
              <span className="text-brand-lime">With Riya?</span>
            </h2>
          </div>

          <p className="font-sans text-sm sm:text-base text-zinc-400 max-w-md leading-relaxed">
            I combine creative intuition with analytical rigor to create design work that feels distinct and delivers genuine ROI.
          </p>
        </div>

        {/* 4 Value Proposition Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="p-8 sm:p-10 rounded-3xl border-2 border-zinc-800 bg-zinc-900/80 hover:border-brand-lime transition-all duration-300 hover:shadow-tactile-lime hover:-translate-y-1 space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-2xl border ${pt.accent}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-display font-black text-2xl text-zinc-700">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="font-display font-black text-2xl text-white uppercase tracking-tight">
                  {pt.title}
                </h3>
                <p className="text-sm font-sans text-zinc-400 leading-relaxed">
                  {pt.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
