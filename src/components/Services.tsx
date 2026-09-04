'use client';

import React from 'react';
import { servicesData } from '@/data/services';
import { Sparkles, Share2, Film, BookOpen, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function Services() {
  const iconMap = {
    Sparkles: Sparkles,
    Share2: Share2,
    Film: Film,
    BookOpen: BookOpen,
  };

  return (
    <section id="services" className="py-24 sm:py-32 bg-canvas relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-ink/10 pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-brand-coral uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Capabilities / 07</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl tracking-tight text-ink uppercase">
              Services Tailored <br />
              <span className="text-brand-cobalt">For Growth.</span>
            </h2>
          </div>

          <p className="font-sans text-sm sm:text-base text-ink-muted max-w-md leading-relaxed">
            From strategic brand identities to high-converting social campaigns and short-form video reels — here is how I help brands and academies stand out.
          </p>
        </div>

        {/* Services 2x2 Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((srv) => {
            const IconComponent = iconMap[srv.iconName] || Sparkles;
            return (
              <div
                key={srv.id}
                className="p-8 sm:p-10 rounded-3xl border-2 border-ink bg-white shadow-tactile hover:shadow-tactile-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-8"
              >
                <div className="space-y-6">
                  {/* Service Card Top Header */}
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-2xl border-2 border-ink ${srv.accentBg} shadow-tactile-sm`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="font-display font-black text-3xl text-ink-muted">
                      {srv.number}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-2">
                    <h3 className="font-display font-black text-2xl sm:text-3xl text-ink uppercase tracking-tight">
                      {srv.title}
                    </h3>
                    <p className="font-display font-bold text-sm text-brand-coral">
                      {srv.tagline}
                    </p>
                    <p className="text-sm font-sans text-ink-muted leading-relaxed pt-1">
                      {srv.description}
                    </p>
                  </div>
                </div>

                {/* Deliverables List */}
                <div className="space-y-4 pt-6 border-t-2 border-ink/10">
                  <div className="text-xs font-mono font-bold text-ink uppercase">
                    Key Deliverables:
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {srv.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs font-sans text-ink">
                        <CheckCircle2 className="w-4 h-4 text-brand-coral shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-xs font-display font-bold uppercase tracking-wider text-ink hover:text-brand-coral transition-colors"
                    >
                      <span>Inquire About This Service</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
