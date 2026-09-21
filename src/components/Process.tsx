'use client';

import React, { useState } from 'react';
import { processSteps } from '@/data/process';
import { Sparkles, ArrowRight, CheckCircle, Lightbulb } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="py-14 sm:py-20 lg:py-24 bg-canvas relative scroll-mt-20 sm:scroll-mt-28">
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
              <Lightbulb className="w-3.5 h-3.5" />
              <span>Creative Process / 05</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-ink uppercase">
              How Ideas Turn <br />
              <span className="text-brand-lime bg-ink px-2.5 sm:px-3 py-0.5 rounded-xl inline-block mt-1">
                Into Reality.
              </span>
            </h2>
          </div>

          <p className="font-sans text-xs sm:text-sm md:text-base text-ink-muted max-w-md leading-relaxed">
            A structured, collaborative 4-stage framework designed to eliminate guesswork, accelerate turnaround, and guarantee high-converting creative outcomes.
          </p>
        </motion.div>

        {/* Process Steps Interactive Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Step Selectors (Left / Top) */}
          <div className="lg:col-span-5 space-y-2.5 sm:space-y-3">
            {processSteps.map((step, idx) => (
              <motion.button
                key={step.number}
                type="button"
                whileHover={{ x: 2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveStep(idx)}
                className={`w-full text-left p-4 sm:p-6 rounded-2xl border-2 transition-all duration-200 flex items-center justify-between ${
                  activeStep === idx
                    ? 'border-ink bg-white shadow-tactile -translate-y-0.5'
                    : 'border-ink/10 bg-white/60 hover:border-ink/40 hover:bg-white'
                }`}
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <span
                    className={`font-display font-black text-2xl sm:text-3xl ${
                      activeStep === idx ? 'text-brand-coral' : 'text-ink-muted'
                    }`}
                  >
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-display font-black text-base sm:text-xl text-ink uppercase tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs font-sans text-ink-muted line-clamp-1">
                      {step.subtitle}
                    </p>
                  </div>
                </div>

                <ArrowRight
                  className={`w-4 sm:w-5 h-4 sm:h-5 transition-transform duration-200 shrink-0 ${
                    activeStep === idx ? 'translate-x-1 text-brand-coral' : 'opacity-30'
                  }`}
                />
              </motion.button>
            ))}
          </div>

          {/* Active Step Deep-Dive Canvas (Right) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="p-5 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl border-2 border-ink bg-white shadow-tactile-lg space-y-6 sm:space-y-8 relative overflow-hidden"
              >
                {/* Background Step Watermark */}
                <div className="absolute right-4 -bottom-6 font-display font-black text-7xl sm:text-9xl text-ink/5 pointer-events-none select-none">
                  {processSteps[activeStep].number}
                </div>

                {/* Active Step Header */}
                <div className="space-y-2 sm:space-y-3 relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-coral/10 text-brand-coral font-mono text-xs font-bold uppercase">
                    <span>Phase {processSteps[activeStep].number}</span>
                  </div>
                  <h3 className="font-display font-black text-2xl sm:text-4xl text-ink uppercase tracking-tight">
                    {processSteps[activeStep].title}
                  </h3>
                  <p className="font-display text-base sm:text-lg text-ink-muted leading-relaxed">
                    {processSteps[activeStep].subtitle}
                  </p>
                </div>

                {/* Detailed Description */}
                <p className="text-xs sm:text-sm md:text-base font-sans text-ink-muted leading-relaxed relative z-10">
                  {processSteps[activeStep].description}
                </p>

                {/* Deliverable Badge */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-canvas-subtle border-2 border-ink space-y-1 relative z-10">
                  <div className="text-[10px] sm:text-[11px] font-mono text-ink-muted uppercase font-bold">
                    Phase Deliverable:
                  </div>
                  <div className="font-display font-bold text-sm sm:text-base text-ink flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{processSteps[activeStep].deliverable}</span>
                  </div>
                </div>

                {/* Sub-steps Checklist */}
                <div className="space-y-2.5 sm:space-y-3 pt-4 border-t-2 border-ink/10 relative z-10">
                  <div className="text-[11px] sm:text-xs font-mono font-bold text-ink uppercase">
                    Key Milestones In This Stage:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {processSteps[activeStep].details.map((detail, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 sm:p-3 rounded-lg bg-zinc-50 border border-ink/10 flex items-start gap-2 text-xs font-sans text-ink"
                      >
                        <span className="text-brand-coral font-bold mt-0.5">•</span>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
