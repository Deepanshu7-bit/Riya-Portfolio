'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Project, ProjectCategory } from '@/types';
import { projectsData } from '@/data/projects';
import CaseStudyModal from './CaseStudyModal';
import {
  ArrowUpRight,
  Sparkles,
  Eye,
  Filter,
  LayoutGrid,
  Sparkle,
  Layers,
  CheckCircle2,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SelectedWork() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'spotlight' | 'grid'>('spotlight');

  const categories: { key: ProjectCategory; label: string }[] = [
    { key: 'all', label: 'All Projects' },
    { key: 'social', label: 'Brand Socials & Motion' },
    { key: 'academy', label: 'Academy & EdTech' },
    { key: 'editorial', label: 'Editorial & Print' },
    { key: 'festive', label: 'Festive & Cultural' },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  const activeHeroProject = filteredProjects[activeProjectIndex] || filteredProjects[0] || projectsData[0];

  const handleNextProject = () => {
    setActiveProjectIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const handlePrevProject = () => {
    setActiveProjectIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  return (
    <section id="work" className="py-14 sm:py-20 lg:py-24 bg-canvas relative scroll-mt-20 sm:scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 border-b-2 border-ink/10 pb-5 sm:pb-6"
        >
          <div className="space-y-2 sm:space-y-2.5">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-brand-coral uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Selected Work / 02</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-ink uppercase">
              Curated Work Made <br />
              <span className="text-brand-cobalt">To Stop The Scroll.</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between md:justify-end">
            <p className="font-sans text-xs sm:text-sm text-ink-muted max-w-sm leading-relaxed">
              Every project is engineered for visual retention, strategic clarity, and maximum conversion
              impact across digital and physical formats.
            </p>

            {/* View Mode Toggle (Desktop only) */}
            <div className="hidden lg:flex items-center gap-1.5 p-1 rounded-xl bg-canvas-subtle border-2 border-ink/15 self-start sm:self-auto">
              <button
                type="button"
                onClick={() => setViewMode('spotlight')}
                className={`px-3 py-1.5 rounded-lg text-xs font-display font-bold uppercase transition-all flex items-center gap-1.5 ${
                  viewMode === 'spotlight'
                    ? 'bg-ink text-white shadow-sm'
                    : 'text-ink-muted hover:text-ink'
                }`}
                title="Spotlight Studio View"
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Spotlight</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`px-3 py-1.5 rounded-lg text-xs font-display font-bold uppercase transition-all flex items-center gap-1.5 ${
                  viewMode === 'grid'
                    ? 'bg-ink text-white shadow-sm'
                    : 'text-ink-muted hover:text-ink'
                }`}
                title="Matrix Grid View"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Grid</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Filter Bar (Touch-friendly & clean wrap) */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
          <div className="flex items-center gap-1.5 text-xs font-mono text-ink-muted uppercase mr-1 shrink-0">
            <Filter className="w-3.5 h-3.5" />
            <span>Filter:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => {
                setActiveCategory(cat.key);
                setActiveProjectIndex(0);
              }}
              className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-display uppercase tracking-wider font-bold border-2 transition-all duration-150 shrink-0 ${
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

        {/* ========================================================================= */}
        {/* DESKTOP VIEW MODE 1: SPOTLIGHT STUDIO DECK (High-Impact Editorial Layout) */}
        {/* ========================================================================= */}
        <div className={`${viewMode === 'spotlight' ? 'hidden lg:block' : 'hidden'}`}>
          <div className="grid grid-cols-12 gap-6 items-stretch">
            
            {/* Left Big Spotlight Hero Pane */}
            <motion.div
              key={activeHeroProject.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="col-span-8 p-6 lg:p-8 rounded-3xl border-2 border-ink bg-white shadow-tactile flex flex-col justify-between space-y-6"
            >
              {/* Hero Header Meta */}
              <div className="flex items-center justify-between border-b-2 border-ink/10 pb-4">
                <div className="flex items-center gap-3">
                  <span className={`badge-tag ${activeHeroProject.badgeBg}`}>
                    {activeHeroProject.badgeText}
                  </span>
                  <span className="text-xs font-mono text-ink-muted">
                    {activeHeroProject.categoryLabel} • {activeHeroProject.year}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrevProject}
                    className="w-8 h-8 rounded-lg border-2 border-ink bg-canvas-subtle hover:bg-ink hover:text-white flex items-center justify-center transition-colors shadow-tactile-sm"
                    aria-label="Previous project"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="text-xs font-mono font-bold text-ink px-1">
                    0{activeProjectIndex + 1} / 0{filteredProjects.length}
                  </span>
                  <button
                    type="button"
                    onClick={handleNextProject}
                    className="w-8 h-8 rounded-lg border-2 border-ink bg-canvas-subtle hover:bg-ink hover:text-white flex items-center justify-center transition-colors shadow-tactile-sm"
                    aria-label="Next project"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Main Visual Display Container */}
              <div
                onClick={() => setSelectedProject(activeHeroProject)}
                className="group cursor-pointer relative w-full h-[320px] rounded-2xl border-2 border-ink/15 bg-zinc-50 overflow-hidden flex items-center justify-center shadow-inner"
              >
                <Image
                  src={activeHeroProject.heroImage}
                  alt={activeHeroProject.title}
                  fill
                  sizes="60vw"
                  className="object-contain p-4 group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                  priority
                />
                <div className="absolute inset-0 bg-ink/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <span className="px-4 py-2.5 rounded-xl bg-white border-2 border-ink font-display font-bold text-xs uppercase tracking-wider text-ink shadow-tactile flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <Eye className="w-4 h-4 text-brand-coral" />
                    <span>Open Interactive Case Study ↗</span>
                  </span>
                </div>
              </div>

              {/* Spotlight Project Story & Actions */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start justify-between gap-6">
                  <div className="space-y-1">
                    <h3 className="font-display font-black text-2xl lg:text-3xl text-ink uppercase tracking-tight">
                      {activeHeroProject.title}
                    </h3>
                    <p className="font-sans text-xs lg:text-sm text-ink-muted leading-relaxed line-clamp-2">
                      {activeHeroProject.subtitle}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedProject(activeHeroProject)}
                    className="btn-tactile-coral px-4 py-2.5 text-xs shrink-0 flex items-center gap-1.5"
                  >
                    <span>Explore Case Study</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Deliverables and Tool Badges */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-ink/10 text-xs font-mono">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-ink-muted">Tools:</span>
                    {activeHeroProject.tools.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded-md bg-canvas-subtle text-ink font-bold text-[11px] border border-ink/10">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-1.5 text-emerald-700 font-sans text-xs">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Client Ready Production Assets</span>
                  </div>
                </div>
              </div>

            </motion.div>

            {/* Right Interactive Project Switcher Strip */}
            <div className="col-span-4 space-y-3 flex flex-col justify-between">
              <div className="text-xs font-mono uppercase text-ink-muted font-bold tracking-wider px-1">
                Featured Project Queue ({filteredProjects.length})
              </div>

              <div className="space-y-3 flex-1 overflow-y-auto max-h-[540px] pr-1">
                {filteredProjects.map((proj, idx) => {
                  const isCurrent = (filteredProjects[activeProjectIndex] || filteredProjects[0])?.id === proj.id;
                  return (
                    <div
                      key={proj.id}
                      onClick={() => setActiveProjectIndex(idx)}
                      className={`cursor-pointer p-3.5 rounded-2xl border-2 transition-all duration-200 flex items-center gap-3.5 group ${
                        isCurrent
                          ? 'bg-ink text-white border-ink shadow-tactile-sm -translate-y-0.5'
                          : 'bg-white text-ink border-ink/10 hover:border-ink hover:bg-canvas-subtle'
                      }`}
                    >
                      <div className="relative w-14 h-14 rounded-xl overflow-hidden border border-ink/20 bg-canvas-subtle shrink-0">
                        <Image
                          src={proj.heroImage}
                          alt={proj.title}
                          fill
                          className="object-contain p-1"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className={`text-[10px] font-mono uppercase px-1.5 py-0.2 rounded ${
                            isCurrent ? 'bg-white/20 text-brand-lime' : 'bg-canvas-subtle text-ink-muted'
                          }`}>
                            0{idx + 1}
                          </span>
                          <span className={`text-[11px] font-mono line-clamp-1 ${isCurrent ? 'text-zinc-300' : 'text-ink-muted'}`}>
                            {proj.categoryLabel}
                          </span>
                        </div>
                        <h4 className={`font-display font-bold text-xs sm:text-sm uppercase tracking-tight truncate mt-0.5 ${
                          isCurrent ? 'text-white' : 'text-ink group-hover:text-brand-coral'
                        }`}>
                          {proj.title}
                        </h4>
                      </div>

                      <div className={`shrink-0 w-6 h-6 rounded-lg flex items-center justify-center text-xs ${
                        isCurrent ? 'text-brand-lime font-bold' : 'text-ink-muted opacity-0 group-hover:opacity-100'
                      }`}>
                        →
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE + DESKTOP MATRIX GRID VIEW (Clean, balanced cards)                 */}
        {/* ========================================================================= */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 ${
          viewMode === 'spotlight' ? 'lg:hidden' : ''
        }`}>
          {filteredProjects.map((project, index) => {
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.99 }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer rounded-2xl sm:rounded-3xl border-2 border-ink bg-white shadow-tactile transition-all duration-200 hover:shadow-tactile-lg overflow-hidden flex flex-col justify-between"
              >
                {/* Project Header Meta */}
                <div className="p-4 sm:p-5 flex items-center justify-between border-b-2 border-ink/10 bg-canvas-subtle/50">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`badge-tag ${project.badgeBg}`}>
                      {project.badgeText}
                    </span>
                    <span className="text-[11px] font-mono text-ink-muted">
                      {project.categoryLabel}
                    </span>
                  </div>

                  <div className="w-8 h-8 rounded-xl border-2 border-ink bg-white flex items-center justify-center text-ink group-hover:bg-brand-coral group-hover:text-white transition-colors duration-200 shadow-tactile-sm shrink-0">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Project Visual Presentation */}
                <div className="relative p-4 flex-1 flex items-center justify-center bg-zinc-50 overflow-hidden">
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-ink/15 shadow-sm bg-white">
                    <Image
                      src={project.heroImage}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain p-3 group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                    />

                    {/* Hover Action Pill Overlay */}
                    <div className="absolute inset-0 bg-ink/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px] p-2">
                      <span className="px-3 py-1.5 rounded-xl bg-white border-2 border-ink font-display font-bold text-[11px] uppercase tracking-wider text-ink shadow-tactile flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <Eye className="w-3.5 h-3.5 text-brand-coral" />
                        <span>Case Study ↗</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project Summary Footer */}
                <div className="p-4 sm:p-5 space-y-3 border-t-2 border-ink/10 bg-white">
                  <div className="space-y-1">
                    <h3 className="font-display font-bold text-lg sm:text-xl text-ink tracking-tight group-hover:text-brand-coral transition-colors duration-150 line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="font-sans text-xs text-ink-muted leading-relaxed line-clamp-2">
                      {project.subtitle}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2 pt-2.5 border-t border-ink/10 text-xs font-mono text-ink-muted">
                    <div className="flex items-center gap-1 flex-wrap">
                      {project.tools.slice(0, 3).map((t) => (
                        <span key={t} className="px-1.5 py-0.5 rounded-md bg-canvas-subtle text-ink font-semibold text-[10px]">
                          {t}
                        </span>
                      ))}
                    </div>
                    <span className="font-bold text-ink flex items-center gap-1 text-[11px]">
                      Inspect ↗
                    </span>
                  </div>
                </div>
              </motion.div>
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

