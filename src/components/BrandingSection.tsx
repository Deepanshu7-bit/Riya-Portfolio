'use client';

import React from 'react';
import Image from 'next/image';
import { Layers, Sparkles, Type, Palette, Grid, CheckCircle2 } from 'lucide-react';

export default function BrandingSection() {
  const brandPillars = [
    {
      icon: Type,
      title: 'Typographic Hierarchy',
      desc: 'Pairing high-contrast display headlines with ultra-readable body fonts to establish immediate reading order.',
      accent: 'text-brand-coral',
    },
    {
      icon: Palette,
      title: 'Curated Color Harmonies',
      desc: 'Purposeful palettes that convey warmth, urgency, trust, or celebration without visual dissonance.',
      accent: 'text-brand-cobalt',
    },
    {
      icon: Grid,
      title: 'Modular Layout Grids',
      desc: 'Structured mathematical alignments that flex seamlessly between 9:16 vertical reels, 1:1 feeds, and print brochures.',
      accent: 'text-brand-lime',
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-canvas relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-ink/10 pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-brand-cobalt uppercase tracking-widest">
              <Layers className="w-3.5 h-3.5" />
              <span>Design Systems / 04</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl tracking-tight text-ink uppercase">
              From A Single Mark <br />
              <span className="text-brand-coral">To A Visual Language.</span>
            </h2>
          </div>

          <p className="font-sans text-sm sm:text-base text-ink-muted max-w-md leading-relaxed">
            I don&apos;t just create isolated graphics. I build scalable design systems where typography,
            color rules, and visual rhythm work in harmony across every digital touchpoint.
          </p>
        </div>

        {/* Visual Language Showcase Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Design System Breakdown Cards */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              <h3 className="font-display font-black text-2xl sm:text-3xl text-ink uppercase tracking-tight">
                Systematic Thinking In Practice
              </h3>
              <p className="text-sm font-sans text-ink-muted leading-relaxed">
                Whether designing a multi-week academy campaign or a festive celebration suite, each asset adheres to a coherent set of visual principles:
              </p>
            </div>

            <div className="space-y-4">
              {brandPillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl border-2 border-ink bg-white shadow-tactile-sm space-y-2 hover:shadow-tactile hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-ink text-white flex items-center justify-center">
                        <Icon className={`w-4 h-4 ${pillar.accent}`} />
                      </div>
                      <h4 className="font-display font-bold text-lg text-ink">
                        {pillar.title}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm font-sans text-ink-muted leading-relaxed pl-11">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Multi-Format System Grid Collage */}
          <div className="lg:col-span-6 relative">
            <div className="p-6 sm:p-8 rounded-3xl border-2 border-ink bg-canvas-subtle shadow-tactile-lg space-y-6">
              <div className="flex items-center justify-between border-b-2 border-ink/10 pb-4">
                <span className="text-xs font-mono font-bold text-ink uppercase">
                  CROSS_FORMAT_CONSISTENCY.SYS
                </span>
                <span className="badge-tag bg-brand-coral text-white border-ink text-[10px]">
                  MULTI-CHANNEL
                </span>
              </div>

              {/* Nested Visual Samples */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden border-2 border-ink shadow-tactile-sm bg-white aspect-[4/5] relative">
                  <Image
                    src="/riya-work/Design 2.png"
                    alt="Orientation Campaign Asset"
                    fill
                    sizes="250px"
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-ink/80 text-[9px] font-mono text-white">
                    ADMISSIONS
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden border-2 border-ink shadow-tactile-sm bg-white aspect-[4/5] relative">
                  <Image
                    src="/riya-work/Design 3.png"
                    alt="Bootcamp Promo Asset"
                    fill
                    sizes="250px"
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-ink/80 text-[9px] font-mono text-white">
                    BOOTCAMP
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border-2 border-ink flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span className="text-xs font-display font-bold text-ink uppercase">
                    One unified visual tone across all deliverables
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
