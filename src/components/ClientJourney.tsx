'use client';

import React from 'react';
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
    <section className="py-24 sm:py-32 bg-canvas relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-ink/10 pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-brand-coral uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Client Roadmap / 11</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl tracking-tight text-ink uppercase">
              What Happens After <br />
              <span className="text-brand-cobalt">You Hit Send?</span>
            </h2>
          </div>

          <p className="font-sans text-sm sm:text-base text-ink-muted max-w-md leading-relaxed">
            Zero ambiguity. A predictable, transparent 6-stage roadmap from initial hello to final master asset delivery.
          </p>
        </div>

        {/* 6-Step Journey Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.num}
                className="p-8 rounded-3xl border-2 border-ink bg-white shadow-tactile hover:shadow-tactile-lg hover:-translate-y-1 transition-all duration-200 space-y-4 flex flex-col justify-between"
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

                  <h3 className="font-display font-bold text-xl text-ink uppercase tracking-tight">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-sans text-ink-muted leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-ink/10 flex items-center gap-1 text-[11px] font-mono text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Clear &amp; Transparent</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
