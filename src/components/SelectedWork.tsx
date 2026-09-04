'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Project, ProjectCategory } from '@/types';
import { projectsData } from '@/data/projects';
import CaseStudyModal from './CaseStudyModal';
import { ArrowUpRight, Sparkles, Eye, Filter } from 'lucide-react';

export default function SelectedWork() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: { key: ProjectCategory; label: string }[] = [
    { key: 'all', label: 'All Projects' },
    { key: 'academy', label: 'Academy & EdTech' },
    { key: 'social', label: 'Brand Socials' },
    { key: 'festive', label: 'Festive & Cultural' },
    { key: 'editorial', label: 'Editorial & Print' },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="py-24 sm:py-32 bg-canvas relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-ink/10 pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-brand-coral uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Selected Work / 02</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl tracking-tight text-ink uppercase">
              Curated Work Made <br />
              <span className="text-brand-cobalt">To Stop The Scroll.</span>
            </h2>
          </div>

          <p className="font-sans text-sm sm:text-base text-ink-muted max-w-md leading-relaxed">
            Every project is engineered for visual retention, strategic clarity, and maximum conversion
            impact across digital and physical formats.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          <div className="flex items-center gap-1.5 text-xs font-mono text-ink-muted uppercase mr-2">
            <Filter className="w-3.5 h-3.5" />
            <span>Filter:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 rounded-xl text-xs font-display uppercase tracking-wider font-bold border-2 transition-all duration-150 ${
                activeCategory === cat.key
                  ? 'bg-ink text-white border-ink shadow-tactile-sm'
                  : 'bg-white text-ink-muted border-ink/10 hover:border-ink hover:text-ink'
              }`}
            >
              {cat.label}
              {cat.key === 'all' && ` (${projectsData.length})`}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project, index) => {
            const isFullWidth = index === 0 && activeCategory === 'all';
            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`group cursor-pointer rounded-2xl sm:rounded-3xl border-2 border-ink bg-white shadow-tactile transition-all duration-300 hover:shadow-tactile-lg hover:-translate-y-1 overflow-hidden flex flex-col justify-between ${
                  isFullWidth ? 'md:col-span-2' : ''
                }`}
              >
                {/* Project Header Meta */}
                <div className="p-6 sm:p-8 flex items-center justify-between border-b-2 border-ink/10 bg-canvas-subtle/50">
                  <div className="flex items-center gap-3">
                    <span className={`badge-tag ${project.badgeBg}`}>
                      {project.badgeText}
                    </span>
                    <span className="text-xs font-mono text-ink-muted">
                      {project.categoryLabel}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-xl border-2 border-ink bg-white flex items-center justify-center text-ink group-hover:bg-brand-coral group-hover:text-white transition-colors duration-200 shadow-tactile-sm">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                {/* Project Visual Presentation */}
                <div className="relative p-6 sm:p-8 flex-1 flex items-center justify-center bg-zinc-50 overflow-hidden">
                  <div
                    className={`relative w-full rounded-xl overflow-hidden border border-ink/15 shadow-sm bg-white ${
                      isFullWidth
                        ? 'aspect-[16/9] sm:aspect-[21/9]'
                        : 'aspect-[4/3] sm:aspect-[1/1]'
                    }`}
                  >
                    <Image
                      src={project.heroImage}
                      alt={project.title}
                      fill
                      sizes={isFullWidth ? '100vw' : '(max-width: 768px) 100vw, 50vw'}
                      className="object-contain p-2 group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                    />

                    {/* Hover Action Pill Overlay */}
                    <div className="absolute inset-0 bg-ink/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                      <span className="px-5 py-2.5 rounded-xl bg-white border-2 border-ink font-display font-bold text-xs uppercase tracking-wider text-ink shadow-tactile flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <Eye className="w-4 h-4 text-brand-coral" />
                        <span>Explore Deep Dive Case Study</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project Summary Footer */}
                <div className="p-6 sm:p-8 space-y-4 border-t-2 border-ink/10 bg-white">
                  <div className="space-y-1">
                    <h3 className="font-display font-black text-2xl sm:text-3xl text-ink tracking-tight group-hover:text-brand-coral transition-colors duration-150">
                      {project.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-ink-muted leading-relaxed line-clamp-2">
                      {project.subtitle}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-ink/10 text-xs font-mono text-ink-muted">
                    <div className="flex items-center gap-2">
                      {project.tools.map((t) => (
                        <span key={t} className="px-2.5 py-0.5 rounded-md bg-canvas-subtle text-ink font-semibold">
                          {t}
                        </span>
                      ))}
                    </div>
                    <span className="font-bold text-ink flex items-center gap-1">
                      Case Study ↗
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Case Study Modal Trigger */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectNext={(next) => setSelectedProject(next)}
        allProjects={projectsData}
      />
    </section>
  );
}
