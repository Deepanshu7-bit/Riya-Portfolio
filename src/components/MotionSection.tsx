'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motionItems } from '@/data/motion';
import { MotionItem } from '@/types';
import { Play, Sparkles, Film, X, CheckCircle2, Sliders } from 'lucide-react';

export default function MotionSection() {
  const [activeReel, setActiveReel] = useState<MotionItem | null>(null);
  const [isPlayingMock, setIsPlayingMock] = useState(true);

  return (
    <section id="motion" className="py-24 sm:py-32 bg-ink text-white relative overflow-hidden border-y-2 border-ink">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-cobalt/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-coral/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-800 pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-brand-lime uppercase tracking-widest">
              <Film className="w-3.5 h-3.5" />
              <span>Motion &amp; Video / 03</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl tracking-tight text-white uppercase">
              Static is only <br />
              <span className="text-brand-lime">One Frame.</span>
            </h2>
          </div>

          <p className="font-sans text-sm sm:text-base text-zinc-400 max-w-md leading-relaxed">
            I don&apos;t just design static visuals — I turn them into high-energy short-form video reels,
            kinetic typography teasers, and sound-synchronized social cuts using Premiere Pro and motion workflows.
          </p>
        </div>

        {/* Motion Grid Showcase */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {motionItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => {
                setActiveReel(item);
                setIsPlayingMock(true);
              }}
              className="group cursor-pointer rounded-2xl border-2 border-zinc-800 bg-zinc-900/70 hover:border-brand-lime transition-all duration-300 hover:shadow-tactile-lime hover:-translate-y-1 flex flex-col justify-between overflow-hidden"
            >
              {/* Media Thumbnail Container */}
              <div className="relative aspect-[9/16] w-full bg-black overflow-hidden flex items-center justify-center">
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />

                {/* Film Overlay Scanlines / Grid */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40" />

                {/* Duration Badge */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-zinc-700 text-[11px] font-mono text-white flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-coral animate-ping" />
                  <span>{item.duration}</span>
                </div>

                {/* Aspect Ratio Badge */}
                <div className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-brand-lime/20 border border-brand-lime/40 text-[10px] font-mono font-bold text-brand-lime">
                  {item.aspectRatio} REEL
                </div>

                {/* Central Play Button */}
                <div className="w-14 h-14 rounded-full bg-brand-lime text-ink flex items-center justify-center border-2 border-ink shadow-tactile-sm group-hover:scale-110 transition-transform duration-200 z-20">
                  <Play className="w-6 h-6 fill-ink translate-x-0.5" />
                </div>

                {/* Focus Kicker Bottom Overlay */}
                <div className="absolute bottom-3 inset-x-3 text-[11px] font-mono text-zinc-300 bg-black/60 backdrop-blur-md px-2.5 py-1.5 rounded-lg border border-zinc-800">
                  <span className="text-brand-lime font-bold">Focus:</span> {item.motionFocus}
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 space-y-3 bg-zinc-900 border-t border-zinc-800">
                <div className="space-y-1">
                  <div className="text-[11px] font-mono text-brand-coral uppercase tracking-wider">
                    {item.category}
                  </div>
                  <h3 className="font-display font-bold text-base text-white group-hover:text-brand-lime transition-colors">
                    {item.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-zinc-800/80">
                  {item.software.map((s) => (
                    <span key={s} className="px-2 py-0.5 rounded bg-zinc-800 text-[10px] font-mono text-zinc-300">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Motion Capability Banner */}
        <div className="p-8 rounded-3xl bg-zinc-900 border-2 border-zinc-800 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="space-y-1 md:col-span-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-brand-lime uppercase">
              <Sliders className="w-4 h-4" />
              <span>Full Video Editing Capabilities</span>
            </div>
            <h3 className="font-display font-black text-2xl text-white uppercase">
              Need short-form reels or promotional video cuts?
            </h3>
            <p className="text-sm text-zinc-400">
              I handle pacing, sound design selection, kinetic lower thirds, color grading, and export optimization for Instagram, YouTube Shorts, and TikTok.
            </p>
          </div>

          <div className="md:text-right">
            <a href="#contact" className="btn-tactile-lime inline-flex">
              <span>Book Video / Motion Work</span>
            </a>
          </div>
        </div>

      </div>

      {/* Interactive Reel Viewer Modal */}
      {activeReel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-zinc-950 border-2 border-brand-lime rounded-3xl overflow-hidden shadow-2xl p-6 space-y-6">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-coral animate-pulse" />
                <span className="text-xs font-mono text-zinc-300 uppercase">
                  {activeReel.category} • {activeReel.duration}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setActiveReel(null)}
                className="p-1.5 rounded-xl border border-zinc-700 bg-zinc-900 text-white hover:bg-brand-coral"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Reel Video Simulator Player */}
            <div className="relative aspect-[9/16] max-h-[50vh] mx-auto rounded-2xl overflow-hidden border-2 border-zinc-800 bg-black flex items-center justify-center">
              <Image
                src={activeReel.thumbnail}
                alt={activeReel.title}
                fill
                className="object-cover"
              />
              
              {/* Overlay animated simulated motion scanline */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-lime/10 to-transparent animate-bounce-subtle pointer-events-none" />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent p-4 space-y-2">
                <div className="h-1 w-full bg-zinc-700 rounded-full overflow-hidden">
                  <div className="h-full bg-brand-lime w-2/3 animate-pulse" />
                </div>
                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-300">
                  <span>0:08</span>
                  <span>{activeReel.duration}</span>
                </div>
              </div>
            </div>

            {/* Reel Description */}
            <div className="space-y-2">
              <h3 className="font-display font-bold text-xl text-white">
                {activeReel.title}
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {activeReel.description}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setActiveReel(null)}
              className="w-full btn-tactile-lime py-3 text-xs"
            >
              Close Reel Preview
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
