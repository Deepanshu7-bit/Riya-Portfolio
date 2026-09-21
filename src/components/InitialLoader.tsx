'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function InitialLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(15);

  useEffect(() => {
    // Fast simulated progressive loading
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 250);
          return 100;
        }
        const step = Math.floor(Math.random() * 25) + 15;
        return Math.min(prev + step, 100);
      });
    }, 80);

    const fallbackTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      clearInterval(interval);
      clearTimeout(fallbackTimeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="initial-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.45, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[999] bg-canvas text-ink flex flex-col items-center justify-center p-6 select-none"
        >
          {/* Ambient Glows */}
          <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-brand-coral/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-brand-lime/20 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-sm w-full space-y-6 text-center relative z-10">
            {/* Logo Badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="mx-auto w-14 h-14 rounded-2xl bg-ink text-white flex items-center justify-center font-display font-black text-2xl border-2 border-ink shadow-tactile"
            >
              R
            </motion.div>

            {/* Name & Subtitle */}
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold text-brand-coral uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Creative Portfolio</span>
              </div>
              <h1 className="font-display font-black text-3xl sm:text-4xl text-ink tracking-tight uppercase">
                RIYA MAHAJAN<span className="text-brand-coral">.</span>
              </h1>
              <p className="text-xs font-mono text-ink-muted">
                Graphic Designer • Visual Systems • Motion
              </p>
            </div>

            {/* Progress Bar Container */}
            <div className="space-y-2 pt-2">
              <div className="w-full h-2.5 rounded-full bg-zinc-200 border border-ink/20 overflow-hidden p-0.5 shadow-inner">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-brand-coral via-brand-cobalt to-brand-lime"
                  initial={{ width: '15%' }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: 'easeOut', duration: 0.15 }}
                />
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-ink-muted">
                <span>Loading Experience...</span>
                <span className="font-bold text-ink">{progress}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
