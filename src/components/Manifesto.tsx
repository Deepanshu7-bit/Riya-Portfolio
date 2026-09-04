'use client';

import React from 'react';
import { Sparkles, Compass, Lightbulb, Zap } from 'lucide-react';

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
    <div className="relative border-y-2 border-ink bg-ink text-white py-16 overflow-hidden">
      {/* Infinite Kinetic Ticker */}
      <div className="relative flex overflow-x-hidden border-b border-zinc-800 pb-6 mb-12">
        <div className="py-2 animate-marquee whitespace-nowrap flex items-center gap-8 text-sm sm:text-base font-mono font-bold tracking-widest text-brand-lime">
          {tickerItems.concat(tickerItems).map((item, idx) => (
            <span key={idx} className={item === '✦' ? 'text-brand-coral' : ''}>
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Section Kicker */}
          <div className="lg:col-span-4 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-brand-coral uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Manifesto / 01</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl leading-tight text-white uppercase">
              Design is more than <br />
              <span className="text-zinc-400 italic font-serif">decoration.</span>
            </h2>
            <p className="text-sm font-sans text-zinc-400 leading-relaxed">
              Every curve, color pairing, and typographic decision exists to solve a communication
              problem.
            </p>
          </div>

          {/* Core Editorial Statement */}
          <div className="lg:col-span-8 space-y-6">
            <p className="font-display text-xl sm:text-2xl lg:text-3xl leading-snug text-zinc-200">
              I believe great design should do two things simultaneously:{' '}
              <span className="text-brand-lime font-bold">command immediate attention</span> on a crowded
              screen and{' '}
              <span className="text-white underline decoration-brand-coral decoration-2 underline-offset-4 font-bold">
                communicate complex ideas with effortless clarity
              </span>
              .
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-zinc-800">
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <Compass className="w-5 h-5 text-brand-coral mb-2" />
                <h3 className="font-display font-bold text-sm uppercase tracking-wider text-white">
                  Intentional Pacing
                </h3>
                <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                  Directing the viewer&apos;s eye precisely where the message matters most.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <Lightbulb className="w-5 h-5 text-brand-lime mb-2" />
                <h3 className="font-display font-bold text-sm uppercase tracking-wider text-white">
                  Strategic Contrast
                </h3>
                <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                  Stopping the scroll with bold color harmony and crisp typographic scale.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <Zap className="w-5 h-5 text-brand-cobalt mb-2" />
                <h3 className="font-display font-bold text-sm uppercase tracking-wider text-white">
                  Motion Ready
                </h3>
                <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                  Designing static assets with kinetic rhythm built into their layout bones.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
