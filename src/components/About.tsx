'use client';

import React from 'react';
import { Sparkles, GraduationCap, Briefcase, Code, Heart, ArrowUpRight } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-canvas relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-ink/10 pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-brand-coral uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Personal Story / 09</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl tracking-tight text-ink uppercase">
              Hi, I&apos;m Riya <br />
              <span className="text-brand-coral">Mahajan.</span>
            </h2>
          </div>

          <p className="font-sans text-sm sm:text-base text-ink-muted max-w-md leading-relaxed">
            A graphic designer and visual storyteller who bridges analytical engineering thinking with expressive digital art.
          </p>
        </div>

        {/* About Main Story Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Conversational Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <p className="font-display text-xl sm:text-2xl text-ink leading-snug font-bold">
              I turn quiet ideas into loud, colorful, scroll-stopping visuals.
            </p>

            <div className="space-y-4 text-sm sm:text-base font-sans text-ink-muted leading-relaxed">
              <p>
                Based in Mohali, India, I specialize in crafting high-conversion promotional campaigns,
                educational brochures, social media suites, and dynamic video reels for academies, growing
                brands, and ambitious creators.
              </p>
              <p>
                A unique aspect of my creative journey is my foundational background in <strong>Computer Science &amp; Engineering</strong>.
                This background gives me a distinct edge: I don’t just look at aesthetics in isolation; I understand technical constraints,
                responsive aspect ratios, system logic, and pixel-level hierarchy.
              </p>
              <p>
                Whether building a multi-asset bootcamp launch, an appetite-driven gourmet social ad, or an ornate festive celebration greeting,
                my goal remains constant: make it intentional, make it memorable, and make it convert.
              </p>
            </div>

            {/* Core Design Values */}
            <div className="pt-6 border-t-2 border-ink/10 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-white border-2 border-ink shadow-tactile-sm">
                <Heart className="w-5 h-5 text-brand-coral mb-2" />
                <div className="font-display font-bold text-sm text-ink uppercase">Craft First</div>
                <p className="text-[11px] text-ink-muted mt-0.5">Every detail is considered.</p>
              </div>
              <div className="p-4 rounded-xl bg-white border-2 border-ink shadow-tactile-sm">
                <Code className="w-5 h-5 text-brand-cobalt mb-2" />
                <div className="font-display font-bold text-sm text-ink uppercase">Tech Fluency</div>
                <p className="text-[11px] text-ink-muted mt-0.5">CS Engineering foundation.</p>
              </div>
              <div className="p-4 rounded-xl bg-white border-2 border-ink shadow-tactile-sm col-span-2 sm:col-span-1">
                <Sparkles className="w-5 h-5 text-brand-lime text-ink mb-2" />
                <div className="font-display font-bold text-sm text-ink uppercase">Continuous Motion</div>
                <p className="text-[11px] text-ink-muted mt-0.5">Static + video synergy.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Experience & Education Timeline Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Experience Card */}
            <div className="p-6 sm:p-8 rounded-3xl border-2 border-ink bg-white shadow-tactile space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-brand-coral uppercase">
                <Briefcase className="w-4 h-4" />
                <span>Professional Experience</span>
              </div>

              <div className="space-y-4 border-l-2 border-ink pl-4">
                <div className="space-y-1">
                  <div className="inline-block px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-700 border border-emerald-500/20 text-[10px] font-mono font-bold">
                    PRESENT ROLE
                  </div>
                  <h3 className="font-display font-black text-xl text-ink">
                    Graphic Designer
                  </h3>
                  <div className="text-xs font-mono text-brand-cobalt font-semibold">
                    Nugen IT Services, Mohali
                  </div>
                  <p className="text-xs font-sans text-ink-muted leading-relaxed pt-1">
                    Designing social media creatives, high-impact marketing campaigns, promotional flyers, and short-form video edits focused on audience engagement.
                  </p>
                </div>
              </div>
            </div>

            {/* Education Card */}
            <div className="p-6 sm:p-8 rounded-3xl border-2 border-ink bg-white shadow-tactile space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-brand-cobalt uppercase">
                <GraduationCap className="w-4 h-4" />
                <span>Academic Foundation</span>
              </div>

              <div className="space-y-5 border-l-2 border-ink pl-4">
                <div className="space-y-1">
                  <h4 className="font-display font-bold text-base text-ink">
                    Bachelor of Computer Science &amp; Engineering
                  </h4>
                  <div className="text-xs font-mono text-ink-muted">
                    DAV Institute of Engineering &amp; Technology, Jalandhar
                  </div>
                </div>

                <div className="space-y-1">
                  <h4 className="font-display font-bold text-base text-ink">
                    Diploma in Computer Science &amp; Engineering
                  </h4>
                  <div className="text-xs font-mono text-ink-muted">
                    Mehr Chand Polytechnic College, Jalandhar
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
