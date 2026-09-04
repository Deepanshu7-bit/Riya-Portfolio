'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Sparkles, Sliders, Palette, Smartphone, Monitor, Instagram } from 'lucide-react';

export default function Playground() {
  // Playground State
  const [activeTab, setActiveTab] = useState<'type' | 'palette' | 'formats'>('type');
  
  // Kinetic Type States
  const [fontSize, setFontSize] = useState(48);
  const [letterSpacing, setLetterSpacing] = useState(-1);
  const [headlineText, setHeadlineText] = useState('DESIGN THAT STOPS SCROLLS');

  // Palette Lab States
  const palettes = [
    { name: 'Warm Electric', bg: 'bg-[#F7F5F0]', card: 'bg-[#FF4D4D]', text: 'text-white', badge: 'bg-[#D4FF32] text-ink' },
    { name: 'Midnight Cobalt', bg: 'bg-[#0E0E12]', card: 'bg-[#2B4CFF]', text: 'text-white', badge: 'bg-[#FF4D4D] text-white' },
    { name: 'Cyber Lime', bg: 'bg-[#121214]', card: 'bg-[#D4FF32]', text: 'text-[#121214]', badge: 'bg-[#2B4CFF] text-white' },
    { name: 'Festive Saffron', bg: 'bg-[#FFF8E7]', card: 'bg-[#FF9E00]', text: 'text-white', badge: 'bg-[#D00000] text-white' },
  ];
  const [selectedPalette, setSelectedPalette] = useState(0);

  // Aspect Ratio Simulator
  const [selectedFormat, setSelectedFormat] = useState<'story' | 'post' | 'landscape'>('story');

  return (
    <section id="playground" className="py-24 sm:py-32 bg-canvas-subtle/60 border-y-2 border-ink relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-ink/10 pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-brand-cobalt uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Playground / 10</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl tracking-tight text-ink uppercase">
              Creative <br />
              <span className="text-brand-coral">Experiment Lab.</span>
            </h2>
          </div>

          <p className="font-sans text-sm sm:text-base text-ink-muted max-w-md leading-relaxed">
            A playful interactive sandbox showcasing typographic hierarchy, color temperature shifting, and cross-platform layout mechanics.
          </p>
        </div>

        {/* Experiment Tab Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => setActiveTab('type')}
            className={`px-5 py-2.5 rounded-xl font-display font-bold text-xs uppercase tracking-wider border-2 transition-all duration-150 ${
              activeTab === 'type'
                ? 'bg-ink text-white border-ink shadow-tactile-sm'
                : 'bg-white text-ink-muted border-ink/10 hover:border-ink hover:text-ink'
            }`}
          >
            01. Kinetic Type Studio
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('palette')}
            className={`px-5 py-2.5 rounded-xl font-display font-bold text-xs uppercase tracking-wider border-2 transition-all duration-150 ${
              activeTab === 'palette'
                ? 'bg-ink text-white border-ink shadow-tactile-sm'
                : 'bg-white text-ink-muted border-ink/10 hover:border-ink hover:text-ink'
            }`}
          >
            02. Palette Harmonizer
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('formats')}
            className={`px-5 py-2.5 rounded-xl font-display font-bold text-xs uppercase tracking-wider border-2 transition-all duration-150 ${
              activeTab === 'formats'
                ? 'bg-ink text-white border-ink shadow-tactile-sm'
                : 'bg-white text-ink-muted border-ink/10 hover:border-ink hover:text-ink'
            }`}
          >
            03. Multi-Format Simulator
          </button>
        </div>

        {/* Experiment 1: Kinetic Type Studio */}
        {activeTab === 'type' && (
          <div className="p-8 sm:p-12 rounded-3xl border-2 border-ink bg-white shadow-tactile-lg space-y-8 animate-in fade-in duration-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Controls */}
              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-1">
                  <div className="text-xs font-mono font-bold text-brand-coral uppercase">
                    Variable Controls
                  </div>
                  <h3 className="font-display font-black text-2xl text-ink uppercase">
                    Interactive Headline Engine
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-ink-muted flex items-between justify-between">
                      <span>Type Custom Text:</span>
                    </label>
                    <input
                      type="text"
                      value={headlineText}
                      onChange={(e) => setHeadlineText(e.target.value)}
                      className="w-full p-3 rounded-xl border-2 border-ink font-display font-bold text-sm bg-canvas focus:outline-none focus:ring-2 focus:ring-brand-coral"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-mono text-ink-muted">
                      <span>Type Scale:</span>
                      <span className="font-bold text-ink">{fontSize}px</span>
                    </div>
                    <input
                      type="range"
                      min="28"
                      max="72"
                      value={fontSize}
                      onChange={(e) => setFontSize(Number(e.target.value))}
                      className="w-full accent-brand-coral"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-mono text-ink-muted">
                      <span>Letter Spacing:</span>
                      <span className="font-bold text-ink">{letterSpacing}px</span>
                    </div>
                    <input
                      type="range"
                      min="-4"
                      max="8"
                      value={letterSpacing}
                      onChange={(e) => setLetterSpacing(Number(e.target.value))}
                      className="w-full accent-brand-cobalt"
                    />
                  </div>
                </div>
              </div>

              {/* Live Preview Canvas */}
              <div className="lg:col-span-7 p-8 rounded-2xl bg-canvas border-2 border-ink shadow-tactile min-h-[260px] flex items-center justify-center overflow-hidden text-center">
                <div
                  className="font-display font-black text-ink uppercase tracking-tight transition-all duration-100 break-words max-w-full"
                  style={{
                    fontSize: `${fontSize}px`,
                    letterSpacing: `${letterSpacing}px`,
                    lineHeight: '0.95',
                  }}
                >
                  {headlineText || 'TYPE SOMETHING...'}
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Experiment 2: Palette Harmonizer */}
        {activeTab === 'palette' && (
          <div className="p-8 sm:p-12 rounded-3xl border-2 border-ink bg-white shadow-tactile-lg space-y-8 animate-in fade-in duration-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-1">
                  <div className="text-xs font-mono font-bold text-brand-cobalt uppercase">
                    Color Lab
                  </div>
                  <h3 className="font-display font-black text-2xl text-ink uppercase">
                    Harmonic Theme Switcher
                  </h3>
                  <p className="text-xs font-sans text-ink-muted leading-relaxed">
                    Test how color temperature completely alters audience perception and mood in promotional assets.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {palettes.map((pal, idx) => (
                    <button
                      key={pal.name}
                      type="button"
                      onClick={() => setSelectedPalette(idx)}
                      className={`p-3 rounded-xl border-2 text-left transition-all ${
                        selectedPalette === idx
                          ? 'border-ink shadow-tactile-sm bg-zinc-50'
                          : 'border-ink/10 hover:border-ink/40'
                      }`}
                    >
                      <div className="text-xs font-display font-bold text-ink">{pal.name}</div>
                      <div className="flex gap-1.5 mt-2">
                        <span className={`w-4 h-4 rounded-full border border-ink ${pal.card}`} />
                        <span className={`w-4 h-4 rounded-full border border-ink ${pal.badge.split(' ')[0]}`} />
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Dynamic Theme Preview Card */}
              <div className="lg:col-span-7">
                <div className={`p-8 rounded-2xl border-2 border-ink shadow-tactile transition-colors duration-300 ${palettes[selectedPalette].bg}`}>
                  <div className={`p-6 rounded-2xl border-2 border-ink shadow-tactile transition-colors duration-300 ${palettes[selectedPalette].card} ${palettes[selectedPalette].text} space-y-4`}>
                    <div className="flex justify-between items-center">
                      <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold border border-ink ${palettes[selectedPalette].badge}`}>
                        SPECIAL OFFER
                      </span>
                      <span className="text-xs font-mono">RIYA DESIGN LAB</span>
                    </div>

                    <h4 className="font-display font-black text-3xl sm:text-4xl leading-tight uppercase">
                      Stop The Scroll With High Contrast.
                    </h4>

                    <p className="text-xs sm:text-sm opacity-90 leading-relaxed font-sans">
                      Harmonized contrast drives up to 3x higher click-through retention on paid and organic feeds.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Experiment 3: Multi-Format Aspect Ratio Simulator */}
        {activeTab === 'formats' && (
          <div className="p-8 sm:p-12 rounded-3xl border-2 border-ink bg-white shadow-tactile-lg space-y-8 animate-in fade-in duration-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-1">
                  <div className="text-xs font-mono font-bold text-brand-lime text-ink uppercase">
                    Responsive Composition
                  </div>
                  <h3 className="font-display font-black text-2xl text-ink uppercase">
                    Platform Aspect Simulator
                  </h3>
                  <p className="text-xs font-sans text-ink-muted leading-relaxed">
                    Visualizing how key focal elements adjust between Stories (9:16), Square Feeds (1:1), and Display Banners (16:9).
                  </p>
                </div>

                <div className="flex flex-col gap-2.5">
                  <button
                    type="button"
                    onClick={() => setSelectedFormat('story')}
                    className={`p-3 rounded-xl border-2 flex items-center justify-between transition-all ${
                      selectedFormat === 'story'
                        ? 'border-ink bg-brand-coral text-white shadow-tactile-sm'
                        : 'border-ink/10 bg-white text-ink hover:border-ink'
                    }`}
                  >
                    <span className="font-display font-bold text-xs uppercase flex items-center gap-2">
                      <Smartphone className="w-4 h-4" />
                      9:16 Vertical Story / Reel
                    </span>
                    <span className="text-[10px] font-mono font-bold">1080 x 1920</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedFormat('post')}
                    className={`p-3 rounded-xl border-2 flex items-center justify-between transition-all ${
                      selectedFormat === 'post'
                        ? 'border-ink bg-brand-cobalt text-white shadow-tactile-sm'
                        : 'border-ink/10 bg-white text-ink hover:border-ink'
                    }`}
                  >
                    <span className="font-display font-bold text-xs uppercase flex items-center gap-2">
                      <Instagram className="w-4 h-4" />
                      1:1 Square Feed Post
                    </span>
                    <span className="text-[10px] font-mono font-bold">1080 x 1080</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedFormat('landscape')}
                    className={`p-3 rounded-xl border-2 flex items-center justify-between transition-all ${
                      selectedFormat === 'landscape'
                        ? 'border-ink bg-brand-lime text-ink shadow-tactile-sm'
                        : 'border-ink/10 bg-white text-ink hover:border-ink'
                    }`}
                  >
                    <span className="font-display font-bold text-xs uppercase flex items-center gap-2">
                      <Monitor className="w-4 h-4" />
                      16:9 Web &amp; Banner Frame
                    </span>
                    <span className="text-[10px] font-mono font-bold">1920 x 1080</span>
                  </button>
                </div>
              </div>

              {/* Aspect Ratio Canvas */}
              <div className="lg:col-span-7 flex items-center justify-center p-6 bg-canvas rounded-2xl border-2 border-ink min-h-[360px]">
                <div
                  className={`relative rounded-xl overflow-hidden border-2 border-ink shadow-tactile bg-white transition-all duration-300 ${
                    selectedFormat === 'story'
                      ? 'w-[200px] aspect-[9/16]'
                      : selectedFormat === 'post'
                      ? 'w-[280px] aspect-square'
                      : 'w-full max-w-[440px] aspect-[16/9]'
                  }`}
                >
                  <Image
                    src="/riya-work/food design 1.png"
                    alt="Responsive Framing Demo"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/80 text-white font-mono text-[9px]">
                    {selectedFormat.toUpperCase()} VIEW
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
