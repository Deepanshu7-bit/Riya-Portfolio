'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { Project } from '@/types';
import { X, ArrowRight, CheckCircle2, Layers, Palette, Wrench, Sparkles } from 'lucide-react';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectNext: (nextProject: Project) => void;
  allProjects: Project[];
}

export default function CaseStudyModal({
  project,
  onClose,
  onSelectNext,
  allProjects,
}: CaseStudyModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 lg:p-6 bg-ink/80 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-5xl max-h-[92vh] bg-canvas border-2 border-ink rounded-2xl sm:rounded-3xl shadow-tactile-lg overflow-y-auto flex flex-col">
        
        {/* Modal Header Bar */}
        <div className="sticky top-0 z-30 bg-canvas/95 backdrop-blur-md px-6 py-4 border-b-2 border-ink/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className={`badge-tag ${project.badgeBg}`}>
              {project.badgeText}
            </span>
            <span className="text-xs font-mono text-ink-muted hidden sm:inline-block">
              {project.categoryLabel}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl border-2 border-ink bg-white hover:bg-brand-coral hover:text-white transition-colors duration-150 shadow-tactile-sm"
            aria-label="Close case study modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-10 space-y-10">
          
          {/* Project Title Block */}
          <div className="space-y-4">
            <div className="text-xs font-mono text-brand-coral uppercase tracking-widest">
              [CASE STUDY / {project.id.toUpperCase()}]
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl tracking-tight text-ink uppercase">
              {project.title}
            </h2>
            <p className="font-display text-lg sm:text-xl text-ink-muted leading-relaxed max-w-3xl">
              {project.subtitle}
            </p>
          </div>

          {/* Hero Showcase Image */}
          <div className="relative w-full rounded-2xl overflow-hidden border-2 border-ink shadow-tactile bg-white">
            <div className="bg-ink px-4 py-2 flex items-center justify-between text-white text-xs font-mono">
              <span>PRIMARY_SHOWCASE_VIEW</span>
              <span>YEAR: {project.year}</span>
            </div>
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-zinc-100">
              <Image
                src={project.heroImage}
                alt={project.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1000px"
                className="object-contain p-2 sm:p-6"
              />
            </div>
          </div>

          {/* Deep-Dive Grid: Challenge & Visual Strategy */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border-2 border-ink bg-white shadow-tactile-sm space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-brand-coral uppercase">
                <Layers className="w-4 h-4" />
                <span>The Challenge</span>
              </div>
              <h3 className="font-display font-bold text-xl text-ink">
                Breaking Through Visual Clutter
              </h3>
              <p className="text-sm font-sans text-ink-muted leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-6 rounded-2xl border-2 border-ink bg-white shadow-tactile-sm space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-brand-cobalt uppercase">
                <Sparkles className="w-4 h-4" />
                <span>The Visual Strategy</span>
              </div>
              <h3 className="font-display font-bold text-xl text-ink">
                Intentional Pacing &amp; Contrast
              </h3>
              <p className="text-sm font-sans text-ink-muted leading-relaxed">
                {project.visualDirection}
              </p>
            </div>
          </div>

          {/* Tools & Palette Breakdown */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4 border-t-2 border-ink/10">
            
            {/* Tools Used */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-ink-muted uppercase">
                <Wrench className="w-4 h-4" />
                <span>Creative Toolkit</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 rounded-lg bg-white border border-ink text-xs font-mono font-bold text-ink shadow-tactile-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Curated Color Palette */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-ink-muted uppercase">
                <Palette className="w-4 h-4" />
                <span>Color Palette</span>
              </div>
              <div className="flex items-center gap-3">
                {project.colors.map((c) => (
                  <div key={c.name} className="flex flex-col items-center gap-1">
                    <div
                      className="w-8 h-8 rounded-full border-2 border-ink shadow-tactile-sm"
                      style={{ backgroundColor: c.hex }}
                      title={`${c.name} (${c.hex})`}
                    />
                    <span className="text-[10px] font-mono text-ink-muted">{c.hex}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables List */}
            <div className="space-y-3 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-ink-muted uppercase">
                <CheckCircle2 className="w-4 h-4" />
                <span>Delivered Formats</span>
              </div>
              <ul className="space-y-1.5">
                {project.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs font-sans text-ink">
                    <span className="text-brand-coral font-bold mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Supporting Gallery Images */}
          {project.galleryImages.length > 1 && (
            <div className="space-y-4 pt-6 border-t-2 border-ink/10">
              <h3 className="font-display font-bold text-xl text-ink uppercase tracking-tight">
                Asset Showcase &amp; Detail Crops
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.galleryImages.slice(1).map((img, idx) => (
                  <div
                    key={idx}
                    className="relative aspect-[4/5] rounded-xl overflow-hidden border-2 border-ink shadow-tactile bg-white"
                  >
                    <Image
                      src={img}
                      alt={`${project.title} detail ${idx + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 450px"
                      className="object-contain p-3"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Strategic Takeaway Banner */}
          <div className="p-6 rounded-2xl bg-brand-lime border-2 border-ink shadow-tactile space-y-2">
            <div className="text-xs font-mono font-bold text-ink uppercase tracking-wider">
              Strategic Takeaway
            </div>
            <p className="font-display font-bold text-base sm:text-lg text-ink leading-snug">
              &ldquo;{project.takeaway}&rdquo;
            </p>
          </div>

          {/* Modal Footer: Next Project Navigation */}
          <div className="pt-6 border-t-2 border-ink/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              type="button"
              onClick={onClose}
              className="text-xs font-mono font-bold text-ink-muted uppercase tracking-wider hover:text-ink"
            >
              ← Back to Overview
            </button>

            <button
              type="button"
              onClick={() => onSelectNext(nextProject)}
              className="btn-tactile-primary flex items-center gap-2"
            >
              <span>Next Project: {nextProject.title.slice(0, 24)}...</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
