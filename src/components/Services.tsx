'use client';

import React from 'react';
import { servicesData } from '@/data/services';
import { Sparkles, Share2, Film, BookOpen, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Services() {
  const iconMap = {
    Sparkles: Sparkles,
    Share2: Share2,
    Film: Film,
    BookOpen: BookOpen,
  };

  return (
    <section id="services" className="py-14 sm:py-20 lg:py-24 bg-canvas relative scroll-mt-20 sm:scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        {/* Section Header */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 border-b-2 border-ink/10 pb-6 sm:pb-8"
        >
          <div className="space-y-2 sm:space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-brand-coral uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Capabilities / 07</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-ink uppercase">
              Services Tailored <br />
              <span className="text-brand-cobalt">For Growth.</span>
            </h2>
          </div>

          <p className="font-sans text-xs sm:text-sm md:text-base text-ink-muted max-w-md leading-relaxed">
            From strategic brand identities to high-converting social campaigns and short-form video reels — here is how I help brands and academies stand out.
          </p>
        </motion.div>

        {/* Services 2x2 Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {servicesData.map((srv, idx) => {
            const IconComponent = iconMap[srv.iconName] || Sparkles;
            return (
              <motion.div
                key={srv.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -3 }}
                className="p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border-2 border-ink bg-white shadow-tactile hover:shadow-tactile-lg transition-all duration-300 flex flex-col justify-between space-y-6 sm:space-y-8"
              >
                <div className="space-y-4 sm:space-y-6">
                  {/* Service Card Top Header */}
                  <div className="flex items-center justify-between">
                    <div className={`p-2.5 sm:p-3 rounded-2xl border-2 border-ink ${srv.accentBg} shadow-tactile-sm`}>
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <span className="font-display font-black text-2xl sm:text-3xl text-ink-muted">
                      {srv.number}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-1.5 sm:space-y-2">
                    <h3 className="font-display font-black text-xl sm:text-2xl lg:text-3xl text-ink uppercase tracking-tight">
                      {srv.title}
                    </h3>
                    <p className="font-display font-bold text-xs sm:text-sm text-brand-coral">
                      {srv.tagline}
                    </p>
                    <p className="text-xs sm:text-sm font-sans text-ink-muted leading-relaxed pt-1">
                      {srv.description}
                    </p>
                  </div>
                </div>

                {/* Deliverables List */}
                <div className="space-y-3 sm:space-y-4 pt-4 sm:pt-6 border-t-2 border-ink/10">
                  <div className="text-[11px] sm:text-xs font-mono font-bold text-ink uppercase">
                    Key Deliverables:
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                    {srv.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2 text-xs font-sans text-ink">
                        <CheckCircle2 className="w-4 h-4 text-brand-coral shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2 sm:pt-4">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-xs font-display font-bold uppercase tracking-wider text-ink hover:text-brand-coral transition-colors"
                    >
                      <span>Inquire About This Service</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
