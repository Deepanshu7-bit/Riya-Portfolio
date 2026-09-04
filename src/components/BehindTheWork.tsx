'use client';

import React from 'react';
import Image from 'next/image';
import { Eye, Sparkles, Layers, Sliders } from 'lucide-react';

export default function BehindTheWork() {
  const steps = [
    {
      num: '01',
      title: 'Strategic Brief',
      desc: 'Defining the single most important message and call-to-action.',
      tag: 'OBJECTIVE',
    },
    {
      num: '02',
      title: 'Typographic & Palette Scale',
      desc: 'Pairing display type with punchy accent colors for scroll stopping retention.',
      tag: 'HIERARCHY',
    },
    {
      num: '03',
      title: 'Composition & Pacing',
      desc: 'Balancing negative space, badges, and visual anchors.',
      tag: 'LAYOUT',
    },
    {
      num: '04',
      title: 'Motion & Final Polish',
      desc: 'Adding kinetic micro-animations and multi-channel exports.',
      tag: 'DELIVERY',
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-canvas-subtle/50 border-y-2 border-ink relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-ink/10 pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-brand-cobalt uppercase tracking-widest">
              <Eye className="w-3.5 h-3.5" />
              <span>Behind The Work / 06</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl tracking-tight text-ink uppercase">
              Thinking Behind <br />
              <span className="text-brand-coral">The Visuals.</span>
            </h2>
          </div>

          <p className="font-sans text-sm sm:text-base text-ink-muted max-w-md leading-relaxed">
            Great visual design is never an accident. Every layout is the result of structured typographic hierarchy, intentional color temperature, and rigorous compositional balance.
          </p>
        </div>

        {/* Workflow Sequence Horizontal Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, idx) => (
            <div
              key={s.num}
              className="p-6 rounded-2xl border-2 border-ink bg-white shadow-tactile-sm hover:shadow-tactile hover:-translate-y-1 transition-all duration-200 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-display font-black text-2xl text-brand-coral">
                    {s.num}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-canvas-subtle text-[10px] font-mono font-bold text-ink border border-ink/20">
                    {s.tag}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-ink uppercase tracking-tight">
                  {s.title}
                </h3>
                <p className="text-xs font-sans text-ink-muted leading-relaxed">
                  {s.desc}
                </p>
              </div>

              {/* Progress Arrow indicator */}
              <div className="pt-3 border-t border-ink/10 flex items-center justify-between text-[11px] font-mono text-ink-muted">
                <span>Stage {idx + 1} of 4</span>
                <span>{idx < 3 ? '→ Next' : '✓ Done'}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Anatomy Showcase Card */}
        <div className="p-8 sm:p-12 rounded-3xl border-2 border-ink bg-white shadow-tactile-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-5 space-y-4">
            <div className="badge-tag bg-brand-lime text-ink border-ink">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Anatomy of a High-Impact Graphic</span>
            </div>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-ink uppercase tracking-tight">
              3-Second Retention Architecture
            </h3>
            <p className="text-xs sm:text-sm font-sans text-ink-muted leading-relaxed">
              When a user scrolls Instagram or LinkedIn, our eyes scan in a rapid Z-pattern. The headline catches the glance, the color temperature creates the emotion, and the badge directs the click.
            </p>
            <div className="space-y-2 pt-2 text-xs font-mono text-ink">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-coral" />
                <span>Primary Focal Point (Oversized Headline)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-cobalt" />
                <span>Secondary Value Proposition (Scannable Details)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-lime" />
                <span>Action Target (Call-to-Action Badge)</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border-2 border-ink shadow-tactile bg-zinc-100">
              <Image
                src="/riya-work/Design 5.png"
                alt="Web Dev Career Push Creative"
                fill
                sizes="(max-width: 1024px) 100vw, 700px"
                className="object-contain p-4"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
