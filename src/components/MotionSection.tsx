'use client';

import React, { useState, useRef } from 'react';
import { motionItems } from '@/data/motion';
import { MotionItem } from '@/types';
import { Play, Pause, Volume2, VolumeX, Sparkles, Film, X, Sliders, Mic, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MotionSection() {
  const [activeReel, setActiveReel] = useState<MotionItem | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const modalVideoRef = useRef<HTMLVideoElement | null>(null);

  const handleOpenReel = (reel: MotionItem) => {
    setActiveReel(reel);
    setIsPlaying(true);
    setIsMuted(false);
  };

  const handleTogglePlay = () => {
    if (!modalVideoRef.current) return;
    if (isPlaying) {
      modalVideoRef.current.pause();
      setIsPlaying(false);
    } else {
      modalVideoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleToggleMute = () => {
    if (!modalVideoRef.current) return;
    modalVideoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section id="motion" className="py-14 sm:py-20 lg:py-24 bg-ink text-white relative overflow-hidden border-y-2 border-ink scroll-mt-20 sm:scroll-mt-28">
      {/* Background Ambience */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-cobalt/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-coral/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 border-b border-zinc-800 pb-5 sm:pb-6"
        >
          <div className="space-y-2 sm:space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-brand-lime uppercase tracking-widest">
              <Film className="w-3.5 h-3.5" />
              <span>Motion &amp; Video / 03</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white uppercase">
              Static is only <br />
              <span className="text-brand-lime">One Frame.</span>
            </h2>
          </div>

          <p className="font-sans text-xs sm:text-sm md:text-base text-zinc-400 max-w-md leading-relaxed">
            I edit high-retention short-form video reels, dynamic podcast cuts, kinetic typography teasers, and sound-synchronized social media campaigns using Premiere Pro and motion workflows.
          </p>
        </motion.div>

        {/* Podcast Client Spotlight Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="p-4 sm:p-5 rounded-2xl bg-zinc-900/90 border-2 border-brand-lime/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-tactile-sm"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-brand-lime text-ink flex items-center justify-center font-display font-black text-lg border border-ink shadow-sm shrink-0">
              <Mic className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-brand-lime uppercase tracking-wider">
                  Client Spotlight / Shalu Nisha Podcast
                </span>
                <span className="px-2 py-0.5 rounded-full bg-brand-lime/20 text-brand-lime text-[10px] font-mono border border-brand-lime/30 hidden sm:inline-block">
                  Featured Reels
                </span>
              </div>
              <h3 className="font-display font-bold text-sm sm:text-base text-white">
                Selected Short-Form Podcast Video Cuts &amp; Narrative Edits
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 shrink-0">
            <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse" />
            <span>Click any reel to play full video with sound</span>
          </div>
        </motion.div>

        {/* 4-Reel Interactive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {motionItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleOpenReel(item)}
              className="group cursor-pointer rounded-2xl border-2 border-zinc-800 bg-zinc-900/80 hover:border-brand-lime transition-all duration-300 hover:shadow-tactile-lime flex flex-col justify-between overflow-hidden"
            >
              {/* Media Thumbnail & Video Preview Container */}
              <div className="relative aspect-[9/16] w-full bg-black overflow-hidden">
                {item.videoUrl ? (
                  <video
                    src={item.videoUrl}
                    playsInline
                    muted
                    loop
                    preload="metadata"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
                    onMouseEnter={(e) => {
                      const vid = e.currentTarget;
                      vid.play().catch(() => {});
                    }}
                    onMouseLeave={(e) => {
                      const vid = e.currentTarget;
                      vid.pause();
                      vid.currentTime = 0;
                    }}
                  />
                ) : (
                  <div className="absolute inset-0 w-full h-full bg-zinc-900 flex items-center justify-center">
                    <Film className="w-12 h-12 text-zinc-700" />
                  </div>
                )}

                {/* Film Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/50 pointer-events-none" />

                {/* Duration Badge */}
                <div className="absolute top-3 right-3 px-2 sm:px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-zinc-700 text-[10px] sm:text-[11px] font-mono text-white flex items-center gap-1.5 z-10">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-coral animate-ping" />
                  <span>{item.duration}</span>
                </div>

                {/* Podcast Tag Badge */}
                <div className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-brand-lime/20 border border-brand-lime/40 text-[9px] sm:text-[10px] font-mono font-bold text-brand-lime z-10">
                  {item.tag || '9:16 REEL'}
                </div>

                {/* Central Play Button Overlay - Perfectly Centered */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-brand-lime text-ink flex items-center justify-center border-2 border-ink shadow-tactile group-hover:scale-110 transition-transform duration-200">
                    <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-ink ml-0.5" />
                  </div>
                </div>

                {/* Focus Kicker Bottom Overlay */}
                <div className="absolute bottom-3 inset-x-3 text-[10px] sm:text-[11px] font-mono text-zinc-200 bg-black/80 backdrop-blur-md px-2.5 py-1.5 rounded-lg border border-zinc-800 z-10">
                  <span className="text-brand-lime font-bold">Focus:</span> {item.motionFocus}
                </div>
              </div>


              {/* Card Meta Content */}
              <div className="p-4 sm:p-5 space-y-2.5 sm:space-y-3 bg-zinc-900 border-t border-zinc-800">
                <div className="space-y-1">
                  <div className="text-[10px] sm:text-[11px] font-mono text-brand-coral uppercase tracking-wider font-bold">
                    {item.client || item.category}
                  </div>
                  <h3 className="font-display font-bold text-sm sm:text-base text-white group-hover:text-brand-lime transition-colors line-clamp-1">
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
            </motion.div>
          ))}
        </div>

        {/* Motion Capability Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="p-6 sm:p-8 rounded-3xl bg-zinc-900 border-2 border-zinc-800 grid grid-cols-1 md:grid-cols-3 gap-6 items-center"
        >
          <div className="space-y-2 md:col-span-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-brand-lime uppercase">
              <Sliders className="w-4 h-4" />
              <span>Full Video &amp; Podcast Editing Capabilities</span>
            </div>
            <h3 className="font-display font-black text-xl sm:text-2xl lg:text-3xl text-white uppercase">
              Need podcast reels or promotional video cuts?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              I handle pacing, kinetic word-by-word subtitles, sound design selection, multi-angle cut switching, color grading, and export optimization for Instagram Reels, YouTube Shorts, and TikTok.
            </p>
          </div>

          <div className="md:text-right pt-2 md:pt-0">
            <a href="#contact" className="btn-tactile-lime w-full md:w-auto text-center justify-center">
              <span>Book Video / Podcast Work</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Interactive Reel Video Player Modal */}
      <AnimatePresence>
        {activeReel && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/90 backdrop-blur-lg">
            <div className="absolute inset-0" onClick={() => setActiveReel(null)} />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25 }}
              className="relative z-10 w-full max-w-lg bg-zinc-950 border-2 border-brand-lime rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl p-4 sm:p-6 space-y-4 max-h-[92dvh] overflow-y-auto"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-coral animate-pulse" />
                  <span className="text-xs font-mono text-zinc-300 uppercase font-bold">
                    {activeReel.client || 'Shalu Nisha Podcast'} • {activeReel.duration}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveReel(null)}
                  className="p-1.5 rounded-xl border border-zinc-700 bg-zinc-900 text-white hover:bg-brand-coral transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Real HTML5 Video Player */}
              <div className="relative aspect-[9/16] max-h-[52vh] mx-auto rounded-2xl overflow-hidden border-2 border-zinc-800 bg-black flex items-center justify-center shadow-tactile">
                {activeReel.videoUrl ? (
                  <video
                    ref={modalVideoRef}
                    key={activeReel.videoUrl}
                    src={activeReel.videoUrl}
                    playsInline
                    autoPlay
                    loop
                    muted={isMuted}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-zinc-500 font-mono text-xs">Video preview unavailable</div>
                )}

                {/* Top Video Controls (Sound Toggle) */}
                <div className="absolute top-3 right-3 z-30">
                  <button
                    type="button"
                    onClick={handleToggleMute}
                    className="p-2 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white hover:bg-brand-lime hover:text-ink transition-colors"
                    title={isMuted ? 'Unmute video' : 'Mute video'}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                </div>

                {/* Central Tap To Play / Pause */}
                <button
                  type="button"
                  onClick={handleTogglePlay}
                  className={`absolute inset-0 z-20 flex items-center justify-center bg-black/30 transition-opacity duration-200 ${
                    isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'
                  }`}
                  aria-label={isPlaying ? 'Pause reel' : 'Play reel'}
                >
                  <div className="w-14 h-14 rounded-full bg-brand-lime text-ink border-2 border-ink shadow-tactile flex items-center justify-center transform hover:scale-110 transition-transform">
                    {isPlaying ? <Pause className="w-6 h-6 fill-ink" /> : <Play className="w-6 h-6 fill-ink ml-1" />}
                  </div>
                </button>
              </div>

              {/* Reel Description & Switcher */}
              <div className="space-y-3">
                <div className="space-y-1">
                  <h3 className="font-display font-bold text-base sm:text-lg text-white">
                    {activeReel.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {activeReel.description}
                  </p>
                </div>

                {/* Quick Switch to Other Podcast Reels */}
                <div className="space-y-1.5 pt-2 border-t border-zinc-800">
                  <div className="text-[10px] font-mono uppercase text-zinc-400 font-bold">
                    Switch Podcast Reel Cut:
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {motionItems.map((item, idx) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => handleOpenReel(item)}
                        className={`p-2 rounded-xl border text-center transition-all text-xs font-mono font-bold ${
                          activeReel.id === item.id
                            ? 'bg-brand-lime text-ink border-brand-lime'
                            : 'bg-zinc-900 text-zinc-300 border-zinc-800 hover:border-zinc-700'
                        }`}
                      >
                        Cut 0{idx + 1}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setActiveReel(null)}
                className="w-full btn-tactile-lime py-2.5 text-xs"
              >
                Close Player
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
