'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Package,
  Layers,
  Video,
  ArrowUpRight,
  CheckCircle2,
  Maximize2,
  Palette,
  Film
} from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

export default function SinghBakeCaseStudy() {
  // Video Reel State
  const reels = [
    {
      id: 'bites',
      title: 'Signature Treats & AI Motion Cut',
      subtitle: 'Generative AI visual synthesis, dynamic pacing & sensory appetite appeal',
      src: '/singh-bake/reel-bites.mp4',
      tag: 'AI Video Reel / 01',
      badge: '✨ AI Generated',
    },
    {
      id: 'tutorial',
      title: 'Artisanal Craft & AI Process Flow',
      subtitle: 'AI-generated motion narrative showcasing baking textures & precision',
      src: '/singh-bake/reel-tutorial.mp4',
      tag: 'AI Video Reel / 02',
      badge: '✨ AI Generative Craft',
    },
    {
      id: 'promo',
      title: 'Brand Launch & AI Social Teaser',
      subtitle: 'AI-synthesized promotional hook built for viral social discover feeds',
      src: '/singh-bake/reel-promo.mp4',
      tag: 'AI Video Reel / 03',
      badge: '✨ AI Viral Hook',
    },
  ];

  const [activeReelIndex, setActiveReelIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [activeTab, setActiveTab] = useState<'all' | 'reels' | 'packaging' | 'social'>('all');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const currentReel = reels[activeReelIndex];

  const handleTogglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleToggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleSwitchReel = (index: number) => {
    setActiveReelIndex(index);
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  // Social Post Assets (Updated from latest creative suite)
  const socialPosts = [
    {
      id: 'biscuit-post',
      title: 'Artisanal Biscuit & Cookie Collection',
      tag: 'Post 01 • Product Showcase',
      src: '/singh-bake/biscuit-post.png',
      desc: 'High-contrast product framing highlighting fresh-baked artisanal biscuits with rich bakery amber tones and clear pricing callouts.',
    },
    {
      id: 'wholesale-post',
      title: 'Wholesale & B2B Bulk Orders',
      tag: 'Post 02 • Commercial Reach',
      src: '/singh-bake/wholesale-post.png',
      desc: 'Direct B2B supply campaign creative built for cafes, restaurants, and retail partners with bold typographic hierarchy.',
    },
    {
      id: 'sb-brand-post',
      title: 'Signature Bakes & Brand Crest',
      tag: 'Post 03 • Brand Identity',
      src: '/singh-bake/sb-brand-post.png',
      desc: 'Official brand identity showcase blending vector marks with mouthwatering bakery assortments for maximum social engagement.',
    },
    {
      id: 'post-2',
      title: 'Celebration Cakes & Speciality Treats',
      tag: 'Post 04 • Seasonal Delight',
      src: '/singh-bake/post-2.png',
      desc: 'Mouthwatering product photography framing with warm bakery amber tone mapping and celebratory visual rhythm.',
    },
  ];


  return (
    <section id="singh-bake" className="py-14 sm:py-20 lg:py-24 bg-canvas-subtle/80 text-ink relative overflow-hidden border-t-2 border-b-2 border-ink scroll-mt-20 sm:scroll-mt-28">

      {/* Ambient background blur */}
      <div className="absolute top-10 right-[-100px] w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-[-100px] w-96 h-96 bg-brand-coral/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 relative z-10">

        {/* Section Header: Flagship Case Study Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-ink/10 pb-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-700 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full uppercase tracking-widest font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Flagship Case Study / 360° Brand Transformation</span>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-ink-muted">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span>Identity • Packaging • AI Video • Social</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end justify-between">
            <div className="lg:col-span-8 space-y-2">
              <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-ink uppercase leading-none">
                Singh Bake &amp; Bites <br />
                <span className="text-amber-600">Full Digital Impression.</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-ink-muted max-w-2xl leading-relaxed">
                Transforming an artisanal bakery into an irresistible digital &amp; physical sensation. Complete creative direction spanning brand logo vectorization, eco-craft packaging, promotional campaign suites, and AI-generated video motion reels.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <div className="p-4 rounded-2xl bg-white border-2 border-ink shadow-tactile-sm space-y-1">
                <div className="text-[11px] font-mono uppercase text-ink-muted font-bold">Key Project Scope</div>
                <div className="text-xs font-sans text-ink font-semibold flex items-center gap-1.5 flex-wrap">
                  <span className="px-2 py-0.5 rounded-md bg-amber-100 text-amber-900 text-[11px]">Logo Vector</span>
                  <span className="px-2 py-0.5 rounded-md bg-amber-100 text-amber-900 text-[11px]">Packaging Mockup</span>
                  <span className="px-2 py-0.5 rounded-md bg-purple-100 text-purple-900 border border-purple-300 font-bold text-[11px]">✨ AI-Generated Video (3x)</span>
                  <span className="px-2 py-0.5 rounded-md bg-amber-100 text-amber-900 text-[11px]">Social Suite</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Feature Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
          {[
            { key: 'all', label: 'Complete 360° Overview' },
            { key: 'reels', label: '✨ AI Video Reels Theater (3 Videos)' },
            { key: 'packaging', label: 'Packaging & Brand Identity' },
            { key: 'social', label: 'Social Campaign Suite' },
          ].map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key as any)}
              className={`px-4 py-2 rounded-xl text-xs font-display uppercase tracking-wider font-bold border-2 transition-all duration-150 shrink-0 ${activeTab === tab.key
                ? 'bg-ink text-white border-ink shadow-tactile-sm'
                : 'bg-white text-ink-muted border-ink/15 hover:border-ink hover:text-ink'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* SECTION 1: Interactive Motion Theater (Reels Showcase) */}
        {(activeTab === 'all' || activeTab === 'reels') && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 sm:p-8 lg:p-10 rounded-3xl border-2 border-ink bg-white shadow-tactile space-y-6"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b-2 border-ink/10 pb-5">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 text-xs font-mono text-purple-700 bg-purple-100 px-3 py-1 rounded-full uppercase font-bold border border-purple-300">
                  <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                  <span>AI Video Generation &amp; Synthesis</span>
                </div>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-ink uppercase tracking-tight">
                  Generative AI Video Reels
                </h3>
              </div>
              <p className="text-xs sm:text-sm font-sans text-ink-muted max-w-md">
                Crafted using cutting-edge Generative AI video models, custom prompt engineering, and kinetic typography — distinct from standard video shooting or manual reel editing.
              </p>
            </div>

            {/* AI Video Production Callout Banner */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-purple-500/10 to-brand-coral/10 border-2 border-ink shadow-tactile-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-ink text-white flex items-center justify-center shrink-0 shadow-tactile-sm">
                  <Sparkles className="w-5 h-5 text-brand-lime" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-display font-black text-sm uppercase tracking-wide text-ink">
                      Made With Generative AI Video
                    </span>
                    <span className="text-[10px] font-mono font-bold bg-purple-700 text-white px-2 py-0.5 rounded-full uppercase">
                      Separate from Standard Reel Editing
                    </span>
                  </div>
                  <p className="text-xs font-sans text-ink-muted leading-relaxed max-w-2xl">
                    These video reels were generated directly using <strong>Generative AI video prompts &amp; neural motion synthesis</strong> (rather than filming real physical footage or standard clip trimming), seamlessly blended with custom pacing, typography, and sound design.
                  </p>
                </div>
              </div>
              <div className="shrink-0 flex items-center gap-2 font-mono text-[11px] text-ink font-bold bg-white px-3 py-1.5 rounded-xl border-2 border-ink shadow-sm">
                <Film className="w-3.5 h-3.5 text-purple-600" />
                <span>AI Prompted &amp; Synthesized</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">

              {/* Left Column: Phone Reel Frame with Real Video Player */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[320px] aspect-[9/16] rounded-[36px] border-4 border-ink bg-ink shadow-tactile-lg overflow-hidden flex flex-col justify-between p-3">

                  {/* Phone Notch & Header */}
                  <div className="relative z-20 flex items-center justify-between px-2 pt-1 text-white text-[11px] font-mono">
                    <span className="bg-purple-900/90 text-amber-300 font-bold backdrop-blur-sm px-2.5 py-0.5 rounded-full border border-purple-400/40 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      {currentReel.badge}
                    </span>
                    <button
                      type="button"
                      onClick={handleToggleMute}
                      className="p-1.5 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 text-white hover:bg-amber-500 transition-colors"
                      title={isMuted ? 'Unmute video' : 'Mute video'}
                      aria-label={isMuted ? 'Unmute' : 'Mute'}
                    >
                      {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  {/* HTML5 Video Element */}
                  <div className="absolute inset-0 z-10 flex items-center justify-center bg-black">
                    <video
                      ref={videoRef}
                      key={currentReel.src}
                      src={currentReel.src}
                      playsInline
                      loop
                      muted={isMuted}
                      onPlay={() => setIsPlaying(true)}
                      onPause={() => setIsPlaying(false)}
                      className="w-full h-full object-cover"
                    />

                    {/* Central Play/Pause Tap Overlay */}
                    <button
                      type="button"
                      onClick={handleTogglePlay}
                      className={`absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-200 ${isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'
                        }`}
                      aria-label={isPlaying ? 'Pause video' : 'Play video'}
                    >
                      <div className="w-16 h-16 rounded-full bg-white text-ink border-2 border-ink shadow-tactile flex items-center justify-center transform hover:scale-110 transition-transform">
                        {isPlaying ? (
                          <Pause className="w-6 h-6 fill-ink" />
                        ) : (
                          <Play className="w-6 h-6 fill-ink ml-1" />
                        )}
                      </div>
                    </button>
                  </div>

                  {/* Video Bottom Overlay */}
                  {/* <div className="relative z-20 p-3 bg-gradient-to-t from-black/90 via-black/50 to-transparent rounded-2xl text-white space-y-1">
                    <div className="text-[10px] font-mono text-amber-300 font-bold uppercase tracking-wider flex items-center gap-1.5">
                      <span>@singh.bakehouse</span>
                      <span>•</span>
                      <span className="bg-purple-600/80 px-1.5 py-0.5 rounded text-[9px] text-white">AI Generated Reel</span>
                    </div>
                    <div className="font-display font-bold text-xs uppercase leading-snug">
                      {currentReel.title}
                    </div>
                  </div> */}
                </div>
              </div>

              {/* Right Column: Reel Selector Deck & Technical Specs */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-3">
                  <div className="text-xs font-mono uppercase text-ink-muted font-bold flex items-center justify-between">
                    <span>Select Active Reel Cut</span>
                    {/* <span className="text-purple-700 font-bold">✨ Generative AI Video</span> */}
                  </div>
                  <div className="space-y-3">
                    {reels.map((reel, idx) => (
                      <button
                        key={reel.id}
                        type="button"
                        onClick={() => handleSwitchReel(idx)}
                        className={`w-full p-4 rounded-2xl border-2 text-left transition-all duration-200 flex items-center justify-between gap-4 ${activeReelIndex === idx
                          ? 'bg-amber-50 border-amber-600 shadow-tactile-sm translate-x-1'
                          : 'bg-canvas-subtle/50 border-ink/10 hover:border-ink hover:bg-white'
                          }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-10 h-10 rounded-xl border-2 flex items-center justify-center font-display font-black text-sm ${activeReelIndex === idx
                              ? 'bg-amber-600 text-white border-amber-700 shadow-sm'
                              : 'bg-white text-ink border-ink/20'
                              }`}
                          >
                            0{idx + 1}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-display font-bold text-sm text-ink uppercase">
                                {reel.title}
                              </span>
                              {/* <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-100 border border-purple-300 text-purple-900 font-bold">
                                {reel.badge}
                              </span> */}
                            </div>
                            <p className="text-xs font-sans text-ink-muted line-clamp-1 mt-0.5">
                              {reel.subtitle}
                            </p>
                          </div>
                        </div>

                        <div className="shrink-0 flex items-center gap-1.5 text-xs font-mono font-bold text-amber-700">
                          {activeReelIndex === idx ? (
                            <span className="flex items-center gap-1">
                              <span className="w-2 h-2 rounded-full bg-amber-600 animate-ping" />
                              Active
                            </span>
                          ) : (
                            <span className="text-ink-muted">Play Cut ↗</span>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Production Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl border-2 border-ink/10 bg-canvas-subtle">
                    <div className="text-[10px] font-mono uppercase text-ink-muted">Generation</div>
                    <div className="font-display font-bold text-sm text-purple-700">Generative AI</div>
                  </div>
                  <div className="p-3.5 rounded-xl border-2 border-ink/10 bg-canvas-subtle">
                    <div className="text-[10px] font-mono uppercase text-ink-muted">Format</div>
                    <div className="font-display font-bold text-sm text-ink">9:16 Vertical</div>
                  </div>
                  <div className="p-3.5 rounded-xl border-2 border-ink/10 bg-canvas-subtle">
                    <div className="text-[10px] font-mono uppercase text-ink-muted">Workflow</div>
                    <div className="font-display font-bold text-sm text-ink">Prompt + Motion</div>
                  </div>
                  <div className="p-3.5 rounded-xl border-2 border-ink/10 bg-canvas-subtle">
                    <div className="text-[10px] font-mono uppercase text-ink-muted">Retention Gain</div>
                    <div className="font-display font-black text-sm text-amber-700">
                      <AnimatedCounter to={190} prefix="+" suffix="%" /> vs Static
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        )}

        {/* SECTION 2: Packaging Design & Brand Identity Showcase */}
        {(activeTab === 'all' || activeTab === 'packaging') && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Left Box: Tactile Packaging Hero Display */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 p-6 sm:p-8 rounded-3xl border-2 border-ink bg-white shadow-tactile space-y-6"
            >
              <div className="flex items-center justify-between border-b-2 border-ink/10 pb-4">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-700 uppercase font-bold">
                    <Package className="w-4 h-4 text-amber-600" />
                    <span>Physical Merchandise &amp; Packaging</span>
                  </div>
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-ink uppercase tracking-tight">
                    Eco-Craft Paperbag System
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setLightboxImage('/singh-bake/paperbag.png')}
                  className="p-2 rounded-xl border-2 border-ink bg-canvas-subtle hover:bg-amber-500 hover:text-white transition-colors"
                  title="Expand packaging image"
                  aria-label="Expand image"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              {/* Packaging Image Container */}
              <div
                onClick={() => setLightboxImage('/singh-bake/paperbag.png')}
                className="group cursor-pointer relative w-full aspect-[4/3] rounded-2xl border-2 border-ink/15 bg-amber-50/40 overflow-hidden flex items-center justify-center"
              >
                <Image
                  src="/singh-bake/paperbag.png"
                  alt="Singh Bake and Bites Eco-Craft Paperbag Packaging Mockup"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-ink/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-3 py-1.5 rounded-xl bg-white border-2 border-ink text-xs font-display font-bold uppercase tracking-wider text-ink shadow-tactile-sm">
                    Click To Zoom Details ↗
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans text-ink-muted">
                <div className="p-3.5 rounded-xl bg-canvas-subtle border border-ink/10 space-y-1">
                  <div className="font-bold text-ink font-mono text-[11px] uppercase">Material Alignment</div>
                  <div>Earth-toned unbleached Kraft paper vector texture with deep espresso soy-based ink aesthetics.</div>
                </div>
                <div className="p-3.5 rounded-xl bg-canvas-subtle border border-ink/10 space-y-1">
                  <div className="font-bold text-ink font-mono text-[11px] uppercase">Shelf Impact</div>
                  <div>Clean central crest placement ensuring immediate bakery brand recognition in takeaway contexts.</div>
                </div>
              </div>
            </motion.div>

            {/* Right Box: Brand Logo Vector & Palette Architecture */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-5 p-6 sm:p-8 rounded-3xl border-2 border-ink bg-white shadow-tactile space-y-6"
            >
              <div className="space-y-1 border-b-2 border-ink/10 pb-4">
                <div className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-700 uppercase font-bold">
                  <Layers className="w-4 h-4 text-amber-600" />
                  <span>Logo Vector Architecture</span>
                </div>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-ink uppercase tracking-tight">
                  Brand Mark &amp; Identity
                </h3>
              </div>

              {/* Logo Display */}
              <div
                onClick={() => setLightboxImage('/singh-bake/logo.png')}
                className="group cursor-pointer relative w-full aspect-[16/10] rounded-2xl border-2 border-ink/15 bg-white overflow-hidden flex items-center justify-center p-6"
              >
                <Image
                  src="/singh-bake/logo.png"
                  alt="Singh Bake and Bites Official Vector Logo Mark"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-ink/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-3 py-1.5 rounded-xl bg-white border-2 border-ink text-xs font-display font-bold uppercase tracking-wider text-ink shadow-tactile-sm">
                    View Vector Logo ↗
                  </span>
                </div>
              </div>

              {/* Brand Palette Swatches */}
              <div className="space-y-2">
                <div className="text-xs font-mono uppercase text-ink-muted font-bold flex items-center gap-1.5">
                  <Palette className="w-3.5 h-3.5 text-amber-600" />
                  <span>Coordinated Color Matrix</span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { name: 'Amber Glow', hex: '#E07A28', color: 'bg-[#E07A28]' },
                    { name: 'Espresso Dark', hex: '#261B14', color: 'bg-[#261B14]' },
                    { name: 'Warm Kraft', hex: '#D4A373', color: 'bg-[#D4A373]' },
                    { name: 'Pure Frost', hex: '#FDFBF7', color: 'bg-[#FDFBF7] border border-ink/20' },
                  ].map((swatch) => (
                    <div key={swatch.name} className="p-2 rounded-xl bg-canvas-subtle border border-ink/10 space-y-1.5 text-center">
                      <div className={`w-full h-7 rounded-lg ${swatch.color} shadow-sm`} />
                      <div className="text-[10px] font-mono text-ink font-bold leading-tight">{swatch.hex}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Takeaway note */}
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs font-sans text-ink space-y-1">
                <div className="font-bold text-amber-900 font-mono text-[11px] uppercase flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-700" />
                  <span>Cross-Platform Versatility</span>
                </div>
                <p className="text-ink-muted">
                  Vector assets scale seamlessly from tiny 32px digital profile icons to giant 4-meter physical storefront banners without losing visual sharpness.
                </p>
              </div>

            </motion.div>

          </div>
        )}

        {/* SECTION 3: Multi-Part Social Campaign Post System */}
        {(activeTab === 'all' || activeTab === 'social') && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 sm:p-8 lg:p-10 rounded-3xl border-2 border-ink bg-white shadow-tactile space-y-8"
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-ink/10 pb-5">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-700 uppercase font-bold">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span>Curated Social Campaign Suite</span>
                </div>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-ink uppercase tracking-tight">
                  Scroll-Stopping Feed System
                </h3>
              </div>
              <p className="text-xs sm:text-sm font-sans text-ink-muted max-w-md">
                Cohesive social posts blending product photography, bold typographic messaging, and clear promotional triggers.
              </p>
            </div>

            {/* 4 Social Post Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">

              {socialPosts.map((post, idx) => (
                <div
                  key={post.id}
                  className="p-4 sm:p-5 rounded-2xl border-2 border-ink bg-canvas-subtle/50 space-y-4 flex flex-col justify-between group hover:shadow-tactile-sm transition-all"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono text-ink-muted">
                      <span className="font-bold text-amber-700">{post.tag}</span>
                      <span className="text-[10px] bg-white px-2 py-0.5 rounded-md border border-ink/10">1080x1080</span>
                    </div>

                    <div
                      onClick={() => setLightboxImage(post.src)}
                      className="group/img cursor-pointer relative w-full aspect-square rounded-xl border-2 border-ink/15 bg-white overflow-hidden"
                    >
                      <Image
                        src={post.src}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-contain p-2 group-hover/img:scale-105 transition-transform duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-ink/20 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="px-2.5 py-1 rounded-lg bg-white border border-ink text-[11px] font-display font-bold uppercase tracking-wider text-ink shadow-sm">
                          Inspect Post ↗
                        </span>
                      </div>
                    </div>

                    <h4 className="font-display font-bold text-base text-ink uppercase tracking-tight group-hover:text-amber-700 transition-colors">
                      {post.title}
                    </h4>
                    <p className="text-xs font-sans text-ink-muted leading-relaxed">
                      {post.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-ink/10 flex items-center justify-between text-[11px] font-mono text-ink-muted">
                    <span>Campaign Asset #{idx + 1}</span>
                    <button
                      type="button"
                      onClick={() => setLightboxImage(post.src)}
                      className="font-bold text-ink hover:text-amber-700 flex items-center gap-1"
                    >
                      <span>Full View</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Quantified Business Impact & Summary Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-6 sm:p-8 rounded-3xl bg-ink text-white border-2 border-ink shadow-tactile space-y-6"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-800 pb-5">
            <div className="space-y-1">
              <div className="text-xs font-mono text-amber-400 uppercase font-bold tracking-widest">
                Measured Outcomes &amp; Brand Reach
              </div>
              <h4 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-white">
                The 360° Transformation Impact
              </h4>
            </div>
            <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-mono font-bold">
              Artisanal Bakery Success
            </span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="p-4 sm:p-5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-1 hover:border-amber-400/60 hover:shadow-lg transition-all duration-200 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="font-display font-black text-2xl sm:text-4xl text-amber-400 tracking-tight">
                <AnimatedCounter from={0} to={310} prefix="+" suffix="%" duration={2.2} delay={0.1} />
              </div>
              <div className="text-xs font-mono text-zinc-400">Social Reach Surge</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="p-4 sm:p-5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-1 hover:border-brand-lime/60 hover:shadow-lg transition-all duration-200 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-brand-lime opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="font-display font-black text-2xl sm:text-4xl text-brand-lime tracking-tight">
                <AnimatedCounter from={0} to={190} prefix="+" suffix="%" duration={2.0} delay={0.2} />
              </div>
              <div className="text-xs font-mono text-zinc-400">Reel Watch Retention</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="p-4 sm:p-5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-1 hover:border-brand-coral/60 hover:shadow-lg transition-all duration-200 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-brand-coral opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="font-display font-black text-2xl sm:text-4xl text-brand-coral tracking-tight">
                <AnimatedCounter from={0} to={100} suffix="%" duration={1.8} delay={0.3} />
              </div>
              <div className="text-xs font-mono text-zinc-400">Brand Identity Cohesion</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="p-4 sm:p-5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-1 hover:border-cyan-400/60 hover:shadow-lg transition-all duration-200 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="font-display font-black text-2xl sm:text-4xl text-cyan-400 tracking-tight">
                <AnimatedCounter from={0} to={3} suffix="x" duration={1.5} delay={0.4} />
              </div>
              <div className="text-xs font-mono text-zinc-400">Custom Motion Video Cuts</div>
            </motion.div>
          </div>
        </motion.div>

      </div>

      {/* Lightbox Modal for High-Res Asset Inspection */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-3xl p-4 sm:p-6 border-4 border-ink shadow-2xl flex flex-col justify-between space-y-4"
            >
              <div className="flex items-center justify-between border-b-2 border-ink/10 pb-3">
                <div className="text-xs font-mono font-bold text-amber-700 uppercase">
                  Singh Bake &amp; Bites • High-Res Design Inspector
                </div>
                <button
                  type="button"
                  onClick={() => setLightboxImage(null)}
                  className="px-3 py-1 rounded-xl bg-ink text-white font-display font-bold text-xs uppercase hover:bg-brand-coral transition-colors"
                >
                  Close ✕
                </button>
              </div>

              <div className="relative w-full h-[60vh] rounded-2xl overflow-hidden bg-zinc-50 border-2 border-ink/10 flex items-center justify-center">
                <Image
                  src={lightboxImage}
                  alt="High Resolution Singh Bake Asset"
                  fill
                  className="object-contain p-4"
                />
              </div>

              <div className="text-center text-xs font-mono text-ink-muted">
                Created by Riya Mahajan • Click anywhere outside or press Close to dismiss
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
