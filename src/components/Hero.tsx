'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowDown, Sparkles, Layers, PlayCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen pt-24 pb-12 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 overflow-hidden bg-dots flex items-center">
      {/* Background Decorative Location Accent */}
      {/* <div className="absolute top-16 right-6 text-xs font-mono text-ink-light select-none hidden md:block">
        MOHALI, INDIA (IST) • AVAILABLE FOR SELECT PROJECTS
      </div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center"
        >
          {/* Left Column: Typography & Intent */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-6 sm:space-y-8">
            {/* Tagline / Kicker Badges */}
            <motion.div variants={itemVariants} className="inline-flex flex-wrap items-center gap-2">
              <span className="badge-tag bg-brand-coral/10 text-brand-coral border-brand-coral/30">
                <Sparkles className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                Graphic Design
              </span>
              <span className="badge-tag bg-brand-cobalt/10 text-brand-cobalt border-brand-cobalt/30">
                <Layers className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                Brand Systems
              </span>
              <span className="badge-tag bg-brand-lime/30 text-ink border-ink/30">
                <PlayCircle className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                Motion &amp; Video
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div variants={itemVariants} className="space-y-2 sm:space-y-3">
              <h1 className="font-display font-black text-3xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl leading-[0.98] tracking-tighter text-ink uppercase break-words">
                I Turn Ideas Into <br />
                <span className="relative inline-block text-brand-coral">
                  Visuals
                  <svg
                    className="absolute -bottom-1.5 sm:-bottom-2 inset-x-0 w-full text-brand-coral opacity-80"
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
                <span className="bg-brand-lime px-2.5 sm:px-3 py-0.5 rounded-lg sm:rounded-xl border-2 border-ink inline-block shadow-tactile-sm">
                  Remember.
                </span>
              </h1>
            </motion.div>

            {/* Supporting Summary */}
            <motion.p
              variants={itemVariants}
              className="font-sans text-sm sm:text-base lg:text-lg text-ink-muted max-w-xl leading-relaxed"
            >
              Hey, I&apos;m <strong>Riya</strong> — a multidisciplinary creative designer crafting
              scroll-stopping social campaigns, scalable brand visual systems, educational promos, and
              dynamic motion graphics.
            </motion.p>

            {/* Action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
              <motion.a
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ y: 1, scale: 0.98 }}
                href="#work"
                className="btn-tactile-primary"
              >
                <span>View Selected Work</span>
                <ArrowDown className="w-3.5 sm:w-4 h-3.5 sm:h-4 animate-bounce" />
              </motion.a>

              <motion.a
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ y: 1, scale: 0.98 }}
                href="#contact"
                className="btn-tactile-coral"
              >
                <span>Start A Project</span>
                <Sparkles className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
              </motion.a>
            </motion.div>

            {/* Proof Metric Row */}
            <motion.div
              variants={itemVariants}
              className="pt-5 sm:pt-6 border-t-2 border-ink/10 grid grid-cols-3 gap-2 sm:gap-4 max-w-md"
            >
              <div className="space-y-0.5">
                <div className="font-display font-black text-xl sm:text-3xl text-ink">50+</div>
                <div className="text-[10px] sm:text-[11px] font-mono text-ink-muted uppercase tracking-wider">
                  Projects Shipped
                </div>
              </div>
              <div className="space-y-0.5">
                <div className="font-display font-black text-xl sm:text-3xl text-brand-cobalt">
                  1+ Yrs
                </div>
                <div className="text-[10px] sm:text-[11px] font-mono text-ink-muted uppercase tracking-wider">
                  Designing Daily
                </div>
              </div>
              <div className="space-y-0.5">
                <div className="font-display font-black text-xl sm:text-3xl text-brand-coral">
                  Multi-Format
                </div>
                <div className="text-[10px] sm:text-[11px] font-mono text-ink-muted uppercase tracking-wider">
                  Static + Motion
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Transparent Hero Portrait Directly on Screen */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-6 xl:col-span-6 relative mt-6 lg:mt-0 flex items-center justify-center w-full"
          >
            <div className="relative w-full max-w-[380px] sm:max-w-[460px] lg:max-w-[500px] xl:max-w-[540px]">
              {/* Dynamic Soft Ambient Glow Behind Figure & Paint Stream */}
              <motion.div
                animate={{
                  scale: [0.95, 1.05, 0.95],
                  opacity: [0.5, 0.75, 0.5],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 bg-gradient-to-tr from-purple-500/25 via-brand-coral/25 to-brand-lime/25 rounded-full blur-3xl pointer-events-none transform -translate-y-4"
              />

              {/* Direct Transparent Cutout Artwork - No Box, No Borders */}
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative z-20 w-full aspect-[966/1024] filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.12)] dark:drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
              >
                <Image
                  src="/riya-work/riya-hero-transparent.png"
                  alt="Riya Mahajan — Creative Designer & Visual Storyteller"
                  fill
                  priority
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 540px"
                  className="object-contain object-bottom"
                />
              </motion.div>

              {/* Floating Tool Badge 1: Premiere Pro (Top Left Corner) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.4, y: 20 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -10, 0],
                  rotate: [-3, 1, -3],
                }}
                transition={{
                  y: {
                    duration: 3.4,
                    repeat: Infinity,
                    ease: [0.45, 0, 0.55, 1],
                  },
                  rotate: {
                    duration: 3.4,
                    repeat: Infinity,
                    ease: [0.45, 0, 0.55, 1],
                  },
                  opacity: { duration: 0.4, delay: 0.2 },
                  scale: { type: 'spring', stiffness: 280, damping: 18, delay: 0.2 },
                }}
                whileHover={{
                  scale: 1.12,
                  y: -14,
                  rotate: 0,
                  transition: { type: 'spring', stiffness: 400, damping: 12 },
                }}
                whileTap={{ scale: 0.95 }}
                className="absolute -top-3 -left-2 sm:-top-4 sm:-left-6 z-30 bg-canvas-card dark:bg-canvas-darkCard text-ink dark:text-white px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl border-2 border-ink dark:border-ink-faint/30 shadow-tactile flex items-center gap-2 sm:gap-2.5 cursor-pointer select-none backdrop-blur-sm"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#00005B] border border-[#9999FF]/50 flex items-center justify-center shrink-0 shadow-sm p-1">
                  <svg className="w-full h-full" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M6.5 7h6.2c3 0 5 1.9 5 4.6 0 2.8-2 4.7-5 4.7H9.2v6.7H6.5V7zm2.7 6.9h3.3c1.5 0 2.4-.9 2.4-2.3 0-1.3-.9-2.3-2.4-2.3H9.2v4.6z"
                      fill="#9999FF"
                    />
                    <path
                      d="M19.5 12.2h2.6v1.8c.7-1.3 1.8-2 3.1-2 .5 0 .9.1 1.3.3v2.7c-.5-.3-1-.4-1.5-.4-1.6 0-2.8 1.1-2.8 3v5.4h-2.7V12.2z"
                      fill="#9999FF"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-[9px] sm:text-[10px] font-mono text-ink-muted dark:text-zinc-400 uppercase tracking-wider leading-none">
                    Motion &amp; Video
                  </div>
                  <div className="font-display font-black text-xs sm:text-sm text-ink dark:text-white leading-tight">
                    Premiere Pro
                  </div>
                </div>
              </motion.div>

              {/* Floating Tool Badge 2: Figma (Top Right Corner) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.4, y: 20 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -12, 0],
                  rotate: [3, -1, 3],
                }}
                transition={{
                  y: {
                    duration: 3.9,
                    delay: 0.4,
                    repeat: Infinity,
                    ease: [0.45, 0, 0.55, 1],
                  },
                  rotate: {
                    duration: 3.9,
                    delay: 0.4,
                    repeat: Infinity,
                    ease: [0.45, 0, 0.55, 1],
                  },
                  opacity: { duration: 0.4, delay: 0.35 },
                  scale: { type: 'spring', stiffness: 280, damping: 18, delay: 0.35 },
                }}
                whileHover={{
                  scale: 1.12,
                  y: -14,
                  rotate: 0,
                  transition: { type: 'spring', stiffness: 400, damping: 12 },
                }}
                whileTap={{ scale: 0.95 }}
                className="absolute -top-3 -right-2 sm:-top-4 sm:-right-6 z-30 bg-canvas-card dark:bg-canvas-darkCard text-ink dark:text-white px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl border-2 border-ink dark:border-ink-faint/30 shadow-tactile flex items-center gap-2 sm:gap-2.5 cursor-pointer select-none backdrop-blur-sm"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-ink/5 dark:bg-white/10 flex items-center justify-center shrink-0 p-1">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE" />
                    <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
                    <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
                    <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
                    <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
                  </svg>
                </div>
                <div>
                  <div className="text-[9px] sm:text-[10px] font-mono text-ink-muted dark:text-zinc-400 uppercase tracking-wider leading-none">
                    UI &amp; Systems
                  </div>
                  <div className="font-display font-black text-xs sm:text-sm text-ink dark:text-white leading-tight">
                    Figma
                  </div>
                </div>
              </motion.div>

              {/* Floating Tool Badge 3: Canva (Bottom Right Corner) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.4, y: 20 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -11, 0],
                  rotate: [-2, 2, -2],
                }}
                transition={{
                  y: {
                    duration: 3.6,
                    delay: 0.8,
                    repeat: Infinity,
                    ease: [0.45, 0, 0.55, 1],
                  },
                  rotate: {
                    duration: 3.6,
                    delay: 0.8,
                    repeat: Infinity,
                    ease: [0.45, 0, 0.55, 1],
                  },
                  opacity: { duration: 0.4, delay: 0.5 },
                  scale: { type: 'spring', stiffness: 280, damping: 18, delay: 0.5 },
                }}
                whileHover={{
                  scale: 1.12,
                  y: -14,
                  rotate: 0,
                  transition: { type: 'spring', stiffness: 400, damping: 12 },
                }}
                whileTap={{ scale: 0.95 }}
                className="absolute bottom-4 -right-2 sm:bottom-6 sm:-right-6 z-30 bg-canvas-card dark:bg-canvas-darkCard text-ink dark:text-white px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl border-2 border-ink dark:border-ink-faint/30 shadow-tactile flex items-center gap-2 sm:gap-2.5 cursor-pointer select-none backdrop-blur-sm"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-[#00C4CC] via-[#0077FF] to-[#7D2AE8] flex items-center justify-center shrink-0 shadow-sm p-1">
                  <svg className="w-full h-full" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M21.5 13.2c-1-2.1-3.2-3.5-6-3.5-4.4 0-7.7 3.6-7.7 8.3 0 4.4 3 7.5 7.5 7.5 2.9 0 5.4-1.7 6.5-4.3.3-.7-.4-1.3-1-1-.9.5-2.6 1.3-4.8 1.3-3.2 0-4.8-2.6-4.5-5.2.3-3 2.6-4.3 5-4.3 1.8 0 3.2.8 4.2 1.9.5.6 1.5-.2 1.3-.9z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-[9px] sm:text-[10px] font-mono text-ink-muted dark:text-zinc-400 uppercase tracking-wider leading-none">
                    Graphics &amp; Brand
                  </div>
                  <div className="font-display font-black text-xs sm:text-sm text-ink dark:text-white leading-tight">
                    Canva
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}


