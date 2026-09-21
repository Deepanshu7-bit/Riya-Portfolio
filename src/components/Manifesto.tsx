'use client';

import React from 'react';
import { Sparkles, Compass, Lightbulb, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Manifesto() {
  const tickerItems = [
    'GRAPHIC DESIGN',
    '✦',
    'BRAND SYSTEMS',
    '✦',
    'SOCIAL MEDIA CREATIVES',
    '✦',
    'MOTION GRAPHICS',
    '✦',
    'EDTECH CAMPAIGNS',
    '✦',
    'EDITORIAL BROCHURES',
    '✦',
    'VISUAL STORYTELLING',
    '✦',
  ];

  return (
    <section className="relative border-y-2 border-ink bg-ink text-white py-12 sm:py-20 overflow-hidden">
      {/* Infinite Kinetic Ticker */}
      <div className="relative flex overflow-x-hidden border-b border-zinc-800 pb-4 sm:pb-6 mb-10 sm:mb-14 select-none">
        <div className="py-1 animate-marquee whitespace-nowrap flex items-center gap-6 sm:gap-8 text-xs sm:text-sm md:text-base font-mono font-bold tracking-widest text-brand-lime shrink-0">
          {tickerItems.concat(tickerItems).concat(tickerItems).map((item, idx) => (
            <span key={idx} className={item === '✦' ? 'text-brand-coral' : ''}>
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start"
        >
          {/* Section Kicker */}
          <div className="lg:col-span-4 space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-brand-coral uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Manifesto / 01</span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-4xl leading-tight text-white uppercase">
              Design is more than <br />
              <span className="text-zinc-400 italic font-serif">decoration.</span>
            </h2>
            <p className="text-xs sm:text-sm font-sans text-zinc-400 leading-relaxed">
              Every curve, color pairing, and typographic decision exists to solve a communication
              problem.
            </p>
          </div>

          {/* Core Editorial Statement */}
          <div className="lg:col-span-8 space-y-6">
            <p className="font-display text-lg sm:text-2xl lg:text-3xl leading-snug text-zinc-200">
              I believe great design should do two things simultaneously:{' '}
              <span className="text-brand-lime font-bold">command immediate attention</span> on a crowded
              screen and{' '}
              <span className="text-white underline decoration-brand-coral decoration-2 underline-offset-4 font-bold">
                communicate complex ideas with effortless clarity
              </span>
              .
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-6 border-t border-zinc-800">
              <motion.div
                whileHover={{ y: -3 }}
                className="p-4 rounded-xl bg-zinc-900/70 border border-zinc-800 transition-colors hover:border-brand-coral/50"
              >
                <Compass className="w-5 h-5 text-brand-coral mb-2" />
                <h3 className="font-display font-bold text-sm uppercase tracking-wider text-white">
                  Intentional Pacing
                </h3>
                <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                  Directing the viewer&apos;s eye precisely where the message matters most.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -3 }}
                className="p-4 rounded-xl bg-zinc-900/70 border border-zinc-800 transition-colors hover:border-brand-lime/50"
              >
                <Lightbulb className="w-5 h-5 text-brand-lime mb-2" />
                <h3 className="font-display font-bold text-sm uppercase tracking-wider text-white">
                  Strategic Contrast
                </h3>
                <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                  Stopping the scroll with bold color harmony and crisp typographic scale.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -3 }}
                className="p-4 rounded-xl bg-zinc-900/70 border border-zinc-800 transition-colors hover:border-brand-cobalt/50"
              >
                <Zap className="w-5 h-5 text-brand-cobalt mb-2" />
                <h3 className="font-display font-bold text-sm uppercase tracking-wider text-white">
                  Motion Ready
                </h3>
                <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                  Designing static assets with kinetic rhythm built into their layout bones.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
