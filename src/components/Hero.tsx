'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowDown, Sparkles, Layers, PlayCircle, Eye } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-dots flex items-center">
      {/* Background Decorative Grid Accents */}
      <div className="absolute top-12 left-6 text-xs font-mono text-ink-light select-none hidden sm:block">
        [RIYA MAHAJAN / VISUAL PORTFOLIO 2026]
      </div>
      <div className="absolute top-12 right-6 text-xs font-mono text-ink-light select-none hidden sm:block">
        MOHALI, INDIA (IST)
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & Intent */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Tagline / Kicker Badge */}
            <div className="inline-flex flex-wrap items-center gap-2">
              <span className="badge-tag bg-brand-coral/10 text-brand-coral border-brand-coral/30">
                <Sparkles className="w-3.5 h-3.5" />
                Graphic Design
              </span>
              <span className="badge-tag bg-brand-cobalt/10 text-brand-cobalt border-brand-cobalt/30">
                <Layers className="w-3.5 h-3.5" />
                Brand Systems
              </span>
              <span className="badge-tag bg-brand-lime/30 text-ink border-ink/30">
                <PlayCircle className="w-3.5 h-3.5" />
                Motion &amp; Video
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="font-display font-black text-4xl sm:text-6xl xl:text-7xl leading-[0.94] tracking-tighter text-ink uppercase">
                I Turn Ideas Into <br />
                <span className="relative inline-block text-brand-coral">
                  Visuals
                  <svg
                    className="absolute -bottom-2 inset-x-0 w-full text-brand-coral opacity-80"
                    viewBox="0 0 300 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.5 14.5C65.5 4.5 195.5 -1.5 297.5 12"
                      stroke="currentColor"
                      strokeWidth="6"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>{' '}
                People <br />
                <span className="bg-brand-lime px-3 py-0.5 rounded-lg border-2 border-ink inline-block shadow-tactile-sm">
                  Remember.
                </span>
              </h1>
            </div>

            {/* Supporting Summary */}
            <p className="font-sans text-base sm:text-lg text-ink-muted max-w-xl leading-relaxed">
              Hey, I&apos;m <strong>Riya</strong> — a multidisciplinary creative designer crafting
              scroll-stopping social campaigns, scalable brand visual systems, educational promos, and
              dynamic motion graphics.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href="#work" className="btn-tactile-primary">
                <span>View Selected Work</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </a>

              <a href="#contact" className="btn-tactile-coral">
                <span>Start A Project</span>
                <Sparkles className="w-4 h-4" />
              </a>
            </div>

            {/* Proof Metric Row */}
            <div className="pt-6 border-t-2 border-ink/10 grid grid-cols-3 gap-4 max-w-md">
              <div>
                <div className="font-display font-black text-2xl sm:text-3xl text-ink">50+</div>
                <div className="text-[11px] font-mono text-ink-muted uppercase tracking-wider">
                  Projects Shipped
                </div>
              </div>
              <div>
                <div className="font-display font-black text-2xl sm:text-3xl text-brand-cobalt">
                  3+ Yrs
                </div>
                <div className="text-[11px] font-mono text-ink-muted uppercase tracking-wider">
                  Designing Daily
                </div>
              </div>
              <div>
                <div className="font-display font-black text-2xl sm:text-3xl text-brand-coral">
                  Multi-Format
                </div>
                <div className="text-[11px] font-mono text-ink-muted uppercase tracking-wider">
                  Static + Motion
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Layered Interactive Artwork Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-[420px] lg:max-w-none aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5] flex items-center justify-center">
              
              {/* Background Glow Ring */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-coral/20 via-brand-cobalt/20 to-brand-lime/20 rounded-3xl blur-2xl transform -rotate-3 scale-95" />

              {/* Primary Artwork Card: Landing Slide Master Artwork */}
              <div className="relative z-20 w-[82%] sm:w-[75%] rounded-2xl overflow-hidden border-2 border-ink shadow-tactile-lg bg-white transform transition-all duration-300 hover:scale-[1.02] hover:-rotate-1">
                <div className="bg-ink px-3 py-1.5 flex items-center justify-between text-white text-[10px] font-mono">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-brand-coral" />
                    <span className="w-2 h-2 rounded-full bg-brand-lime" />
                    <span className="w-2 h-2 rounded-full bg-brand-cobalt" />
                  </span>
                  <span>RIYA_PORTFOLIO_CORE.PNG</span>
                </div>
                <div className="relative aspect-[4/5] w-full bg-zinc-100">
                  <Image
                    src="/riya-work/landing-slide.png"
                    alt="Riya Mahajan Creative Artwork"
                    fill
                    priority
                    sizes="(max-width: 768px) 90vw, 40vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {/* Floating Supporting Card 1: Food Design Accent (Top Right) */}
              <div className="absolute -top-4 -right-2 sm:-right-4 z-30 w-36 sm:w-44 rounded-xl overflow-hidden border-2 border-ink shadow-tactile bg-white transform rotate-6 hover:rotate-0 transition-transform duration-200">
                <div className="bg-brand-coral px-2 py-1 text-white text-[9px] font-mono font-bold flex items-center justify-between">
                  <span>FOOD_PROMO</span>
                  <span>01</span>
                </div>
                <div className="relative aspect-square w-full">
                  <Image
                    src="/riya-work/food design 1.png"
                    alt="Food Social Creative"
                    fill
                    sizes="180px"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Floating Supporting Card 2: Cultural / Festive Art (Bottom Left) */}
              <div className="absolute -bottom-6 -left-2 sm:-left-6 z-30 w-36 sm:w-48 rounded-xl overflow-hidden border-2 border-ink shadow-tactile bg-white transform -rotate-6 hover:rotate-0 transition-transform duration-200">
                <div className="bg-brand-lime px-2 py-1 text-ink text-[9px] font-mono font-bold flex items-center justify-between">
                  <span>FESTIVE_STORY</span>
                  <span>02</span>
                </div>
                <div className="relative aspect-square w-full">
                  <Image
                    src="/riya-work/lohri.png"
                    alt="Lohri Festive Campaign"
                    fill
                    sizes="190px"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Floating Interactive Badge (Bottom Right) */}
              <div className="absolute -bottom-2 right-2 sm:right-6 z-30 bg-ink text-white p-3 rounded-2xl border-2 border-ink shadow-tactile flex items-center gap-3 transform rotate-3">
                <div className="w-8 h-8 rounded-full bg-brand-coral flex items-center justify-center text-white">
                  <Eye className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-zinc-400 uppercase">Focus</div>
                  <div className="font-display font-bold text-xs uppercase tracking-wider text-brand-lime">
                    Attention &amp; Conversion
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
