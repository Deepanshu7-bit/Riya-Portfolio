'use client';

import React from 'react';
import { Layers, Target, MessageSquare, Compass, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

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
    <section className="py-14 sm:py-20 lg:py-24 bg-ink text-white relative overflow-hidden border-y-2 border-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        {/* Section Header */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 border-b border-zinc-800 pb-6 sm:pb-8"
        >
          <div className="space-y-2 sm:space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-brand-lime uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>The Advantage / 08</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white uppercase">
              Why Partner <br />
              <span className="text-brand-lime">With Riya?</span>
            </h2>
          </div>

          <p className="font-sans text-xs sm:text-sm md:text-base text-zinc-400 max-w-md leading-relaxed">
            I combine creative intuition with analytical rigor to create design work that feels distinct and delivers genuine ROI.
          </p>
        </motion.div>

        {/* 4 Value Proposition Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -3 }}
                className="p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border-2 border-zinc-800 bg-zinc-900/80 hover:border-brand-lime transition-all duration-300 hover:shadow-tactile-lime space-y-3 sm:space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className={`p-2.5 sm:p-3 rounded-2xl border ${pt.accent}`}>
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <span className="font-display font-black text-xl sm:text-2xl text-zinc-700">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="font-display font-black text-xl sm:text-2xl text-white uppercase tracking-tight">
                  {pt.title}
                </h3>
                <p className="text-xs sm:text-sm font-sans text-zinc-400 leading-relaxed">
                  {pt.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
