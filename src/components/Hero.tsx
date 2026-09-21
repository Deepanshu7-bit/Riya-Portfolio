'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowDown, Sparkles, Layers, PlayCircle, Eye } from 'lucide-react';
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
      <div className="absolute top-16 right-6 text-xs font-mono text-ink-light select-none hidden md:block">
        MOHALI, INDIA (IST)
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center"
        >
          {/* Left Column: Typography & Intent */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
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
              <h1 className="font-display font-black text-3xl sm:text-5xl md:text-6xl xl:text-7xl leading-[0.95] tracking-tighter text-ink uppercase break-words">
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

          {/* Right Column: Layered Interactive Artwork Composition */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 relative mt-4 lg:mt-0 flex justify-center"
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-none aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5] flex items-center justify-center">
              {/* Background Glow Ring */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-coral/20 via-brand-cobalt/20 to-brand-lime/20 rounded-3xl blur-2xl transform -rotate-3 scale-95 pointer-events-none" />

              {/* Primary Artwork Card: Landing Slide Master Artwork */}
              <motion.div
                whileHover={{ scale: 1.02, rotate: -0.5 }}
                className="relative z-20 w-[86%] sm:w-[78%] rounded-2xl overflow-hidden border-2 border-ink shadow-tactile-lg bg-white transform transition-all duration-300"
              >
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
                    sizes="(max-width: 768px) 85vw, 40vw"
                    className="object-cover object-top"
                  />
                </div>
              </motion.div>

              {/* Floating Interactive Badge (Bottom Right) */}
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="absolute -bottom-2 right-1 sm:right-4 z-30 bg-ink text-white p-2.5 sm:p-3 rounded-xl sm:rounded-2xl border-2 border-ink shadow-tactile flex items-center gap-2.5 sm:gap-3 transform rotate-2 max-w-[220px] sm:max-w-none"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-brand-coral flex items-center justify-center text-white shrink-0">
                  <Eye className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                </div>
                <div>
                  <div className="text-[9px] sm:text-[10px] font-mono text-zinc-400 uppercase">Focus</div>
                  <div className="font-display font-bold text-[11px] sm:text-xs uppercase tracking-wider text-brand-lime leading-tight">
                    Attention &amp; Conversion
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
