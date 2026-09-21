'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MessageCircle, FileText, Palette, CheckCircle2, Rocket, RefreshCw } from 'lucide-react';

export default function ClientJourney() {
  const steps = [
    {
      num: '01',
      icon: MessageCircle,
      title: 'Initial Discovery',
      desc: 'We discuss your project goals, target audience, format needs, and timeline.',
    },
    {
      num: '02',
      icon: FileText,
      title: 'Creative Brief',
      desc: 'We align on scope, deliverables, and exact aspect ratios required.',
    },
    {
      num: '03',
      icon: Palette,
      title: 'Visual Direction',
      desc: 'I share moodboards, typography directions, and sample layout concepts.',
    },
    {
      num: '04',
      icon: Sparkles,
      title: 'Design & Motion',
      desc: 'Crafting pixel-perfect vector artwork, layouts, and video motion cuts.',
    },
    {
      num: '05',
      icon: RefreshCw,
      title: 'Review & Refine',
      desc: 'Collaborative feedback rounds to ensure every detail exceeds expectations.',
    },
    {
      num: '06',
      icon: Rocket,
      title: 'Master Delivery',
      desc: 'Organized production exports ready for instant launch across all platforms.',
    },
  ];

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-canvas relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        
        {/* Section Header */}

        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-ink/10 pb-8"
        >
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-brand-coral uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Client Roadmap / 11</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-ink uppercase break-words">
              What Happens After <br className="hidden sm:inline" />
              <span className="text-brand-cobalt">You Hit Send?</span>
            </h2>
          </div>

          <p className="font-sans text-sm sm:text-base text-ink-muted max-w-md leading-relaxed">
            Zero ambiguity. A predictable, transparent 6-stage roadmap from initial hello to final master asset delivery.
          </p>
        </motion.div>

        {/* 6-Step Journey Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {steps.map((s, index) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-6 sm:p-8 rounded-3xl border-2 border-ink bg-white shadow-tactile hover:shadow-tactile-lg transition-shadow duration-200 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-ink text-white flex items-center justify-center shadow-tactile-sm">
                      <Icon className="w-5 h-5 text-brand-lime" />
                    </div>
                    <span className="font-display font-black text-2xl text-ink-muted">
                      {s.num}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg sm:text-xl text-ink uppercase tracking-tight">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-sans text-ink-muted leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-ink/10 flex items-center gap-1.5 text-[11px] font-mono text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>Clear &amp; Transparent</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

