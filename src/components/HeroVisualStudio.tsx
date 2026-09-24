'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  PenTool,
  Play,
  Pause,
  Layers,
  Sparkles,
  Zap,
  Palette,
  Activity,
  Maximize2,
  Compass,
  Check,
  Eye,
  Sliders,
  RotateCw,
} from 'lucide-react';

export default function HeroVisualStudio() {
  const [activeTab, setActiveTab] = useState<'vector' | 'motion' | 'brand'>('vector');
  const [activeColor, setActiveColor] = useState<'coral' | 'cobalt' | 'lime' | 'violet'>('coral');
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const colorPalettes = {
    coral: { hex: '#FF4D4D', name: 'Electric Coral', glow: 'from-brand-coral/30 via-brand-coral/10 to-transparent' },
    cobalt: { hex: '#2B4CFF', name: 'Royal Cobalt', glow: 'from-brand-cobalt/30 via-brand-cobalt/10 to-transparent' },
    lime: { hex: '#D4FF32', name: 'Punch Lime', glow: 'from-brand-lime/30 via-brand-lime/10 to-transparent' },
    violet: { hex: '#8B5CF6', name: 'Neo Lilac', glow: 'from-purple-500/30 via-purple-500/10 to-transparent' },
  };

  const handleCopyColor = (hex: string) => {
    setCopiedHex(hex);
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(hex);
    }
    setTimeout(() => setCopiedHex(null), 1800);
  };

  return (
    <div className="relative w-full max-w-lg lg:max-w-none select-none">
      {/* Ambient Dynamic Backdrop Glow */}
      <motion.div
        animate={{
          scale: [0.98, 1.04, 0.98],
          opacity: [0.65, 0.9, 0.65],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className={`absolute -inset-2 bg-gradient-to-tr ${colorPalettes[activeColor].glow} rounded-3xl blur-2xl pointer-events-none transition-all duration-700`}
      />

      {/* Main Studio Frame */}
      <motion.div
        whileHover={{ y: -3 }}
        transition={{ duration: 0.3 }}
        className="relative z-20 w-full rounded-2xl sm:rounded-3xl border-2 border-ink shadow-tactile-lg bg-white overflow-hidden flex flex-col"
      >
        {/* Studio Top Navigation Bar */}
        <div className="bg-ink px-3 sm:px-4 py-2 sm:py-2.5 flex items-center justify-between border-b-2 border-ink text-white">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-coral" />
            <span className="w-2.5 h-2.5 rounded-full bg-brand-lime" />
            <span className="w-2.5 h-2.5 rounded-full bg-brand-cobalt" />
            <span className="font-mono text-[10px] sm:text-xs text-zinc-300 ml-1.5 font-bold tracking-wider hidden xs:inline">
              RIYA.STUDIO_v2.4
            </span>
          </div>

          {/* Interactive Mode Pills */}
          <div className="flex items-center gap-1 bg-zinc-900 p-0.5 rounded-lg border border-zinc-700/60">
            <button
              onClick={() => setActiveTab('vector')}
              className={`px-2 py-1 rounded-md text-[10px] sm:text-xs font-mono font-semibold transition-all flex items-center gap-1 ${
                activeTab === 'vector'
                  ? 'bg-brand-coral text-white shadow-tactile-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <PenTool className="w-3 h-3" />
              <span>Vector</span>
            </button>

            <button
              onClick={() => setActiveTab('motion')}
              className={`px-2 py-1 rounded-md text-[10px] sm:text-xs font-mono font-semibold transition-all flex items-center gap-1 ${
                activeTab === 'motion'
                  ? 'bg-brand-cobalt text-white shadow-tactile-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Activity className="w-3 h-3" />
              <span>Motion</span>
            </button>

            <button
              onClick={() => setActiveTab('brand')}
              className={`px-2 py-1 rounded-md text-[10px] sm:text-xs font-mono font-semibold transition-all flex items-center gap-1 ${
                activeTab === 'brand'
                  ? 'bg-brand-lime text-ink shadow-tactile-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Palette className="w-3 h-3" />
              <span>Brand</span>
            </button>
          </div>
        </div>

        {/* Studio Canvas Display Area (16:9 Aspect Ratio) */}
        <div
          className="relative w-full aspect-[16/9] sm:aspect-[16/9] bg-zinc-50 overflow-hidden cursor-crosshair"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            setMousePos({
              x: Math.round(e.clientX - rect.left),
              y: Math.round(e.clientY - rect.top),
            });
          }}
        >
          {/* Subtle Precision Grid Pattern */}
          <div className="absolute inset-0 bg-lines opacity-60 pointer-events-none" />

          {/* Coordinate HUD Readout */}
          <div className="absolute top-2.5 left-3 z-30 font-mono text-[9px] sm:text-[10px] text-ink-muted bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md border border-ink/10 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-coral animate-ping" />
            <span>POS: [{mousePos.x || 342}, {mousePos.y || 188}]</span>
            <span className="text-zinc-400">|</span>
            <span className="text-brand-cobalt font-bold">60 FPS</span>
          </div>

          <AnimatePresence mode="wait">
            {/* VIEW 1: DYNAMIC VECTOR BEZIER LAB */}
            {activeTab === 'vector' && (
              <motion.div
                key="vector"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {/* Dynamic SVG Vector Curves */}
                <svg className="w-full h-full" viewBox="0 0 600 338" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="vectorGradCoral" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FF4D4D" />
                      <stop offset="50%" stopColor="#8B5CF6" />
                      <stop offset="100%" stopColor="#2B4CFF" />
                    </linearGradient>

                    <linearGradient id="vectorGradLime" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#2B4CFF" />
                      <stop offset="60%" stopColor="#D4FF32" />
                      <stop offset="100%" stopColor="#FF4D4D" />
                    </linearGradient>

                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="8" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* Secondary Background Ribbon Wave */}
                  <motion.path
                    d="M 20 280 C 140 120, 260 320, 380 180 C 460 90, 520 260, 580 80"
                    stroke="url(#vectorGradLime)"
                    strokeWidth="10"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.5"
                    animate={{
                      d: [
                        "M 20 280 C 140 120, 260 320, 380 180 C 460 90, 520 260, 580 80",
                        "M 20 240 C 160 300, 240 100, 360 220 C 440 280, 500 120, 580 140",
                        "M 20 280 C 140 120, 260 320, 380 180 C 460 90, 520 260, 580 80",
                      ],
                    }}
                    transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                  />

                  {/* Primary Dynamic Glowing Vector Ribbon */}
                  <motion.path
                    d="M 30 180 C 120 40, 240 300, 340 140 C 420 30, 490 220, 570 160"
                    stroke="url(#vectorGradCoral)"
                    strokeWidth="14"
                    strokeLinecap="round"
                    fill="none"
                    filter="url(#glow)"
                    animate={{
                      d: [
                        "M 30 180 C 120 40, 240 300, 340 140 C 420 30, 490 220, 570 160",
                        "M 30 130 C 150 260, 220 60, 350 200 C 430 300, 480 90, 570 200",
                        "M 30 180 C 120 40, 240 300, 340 140 C 420 30, 490 220, 570 160",
                      ],
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  />

                  {/* Vector Construction Tangent Lines & Anchors */}
                  <line x1="120" y1="40" x2="240" y2="300" stroke="#121214" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.3" />
                  <line x1="340" y1="140" x2="420" y2="30" stroke="#121214" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.3" />

                  {/* Anchor Point P1 */}
                  <circle cx="120" cy="40" r="5" fill="#FF4D4D" stroke="#121214" strokeWidth="2" />
                  <circle cx="240" cy="300" r="5" fill="#2B4CFF" stroke="#121214" strokeWidth="2" />
                  <circle cx="340" cy="140" r="6" fill="#D4FF32" stroke="#121214" strokeWidth="2" />
                  <circle cx="420" cy="30" r="5" fill="#8B5CF6" stroke="#121214" strokeWidth="2" />
                </svg>

                {/* Animated Designer Pen Tool Moving Along Path */}
                <motion.div
                  animate={{
                    x: [0, 80, 220, 320, 450, 0],
                    y: [0, -40, 60, -20, 30, 0],
                    rotate: [0, -15, 20, -10, 15, 0],
                  }}
                  transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute left-10 top-24 z-20 pointer-events-none"
                >
                  <div className="relative">
                    <div className="bg-ink text-white p-2 rounded-lg border-2 border-white shadow-tactile flex items-center justify-center">
                      <PenTool className="w-4 h-4 text-brand-lime" />
                    </div>
                    {/* Live Bézier Tooltip */}
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-ink text-[9px] font-mono text-white px-1.5 py-0.5 rounded whitespace-nowrap shadow-tactile-sm">
                      Bézier Active
                    </div>
                  </div>
                </motion.div>

                {/* Floating Geometric Stamp Badge */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                  className="absolute bottom-4 right-5 w-16 sm:w-20 h-16 sm:h-20 flex items-center justify-center"
                >
                  <div className="w-full h-full rounded-full border-2 border-dashed border-ink bg-brand-lime/20 flex items-center justify-center p-1 text-center font-display font-black text-[8px] sm:text-[9px] uppercase tracking-tighter text-ink">
                    ✦ 100% VECTOR ✦
                  </div>
                </motion.div>
              </motion.div>
            )}

            {/* VIEW 2: MOTION TIMELINE & 3D ENGINE */}
            {activeTab === 'motion' && (
              <motion.div
                key="motion"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="absolute inset-0 flex flex-col justify-between p-4 sm:p-6"
              >
                {/* 3D Kinetic Kinetic Sculpture in Center */}
                <div className="flex-1 flex items-center justify-center relative">
                  <motion.div
                    animate={{
                      rotateX: [0, 25, 0, -25, 0],
                      rotateY: [0, 45, 90, 180, 360],
                      scale: [1, 1.05, 0.98, 1],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                    className="relative w-28 sm:w-36 h-28 sm:h-36 preserve-3d"
                  >
                    {/* Isometric Cube Visualizer */}
                    <div className="absolute inset-0 rounded-2xl border-4 border-ink bg-brand-coral/80 transform rotate-12 shadow-tactile" />
                    <div className="absolute inset-0 rounded-2xl border-4 border-ink bg-brand-cobalt/80 transform -rotate-12 shadow-tactile" />
                    <div className="absolute inset-0 rounded-2xl border-4 border-ink bg-brand-lime flex items-center justify-center shadow-tactile">
                      <Sparkles className="w-10 h-10 text-ink animate-pulse" />
                    </div>
                  </motion.div>

                  {/* Floating Kinetic Particles */}
                  <motion.div
                    animate={{ y: [-15, 15, -15], rotate: [0, 180, 360] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-2 right-10 bg-brand-coral text-white p-2 rounded-xl border-2 border-ink shadow-tactile font-mono text-[10px] font-bold"
                  >
                    EASE_OUT_EXPO
                  </motion.div>
                  <motion.div
                    animate={{ y: [15, -15, 15], rotate: [360, 180, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute bottom-4 left-8 bg-brand-lime text-ink p-2 rounded-xl border-2 border-ink shadow-tactile font-mono text-[10px] font-bold"
                  >
                    KEYFRAME_03
                  </motion.div>
                </div>

                {/* Motion Playhead Scrubbing Bar */}
                <div className="bg-white/95 backdrop-blur-md p-2.5 rounded-xl border-2 border-ink shadow-tactile flex items-center gap-3">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-7 h-7 rounded-lg bg-ink text-white flex items-center justify-center shrink-0 hover:bg-brand-coral transition-colors"
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
                  </button>

                  {/* Timeline Track with Keyframe Diamonds */}
                  <div className="flex-1 relative h-4 flex items-center">
                    <div className="w-full h-1.5 bg-zinc-200 rounded-full overflow-hidden">
                      <motion.div
                        animate={isPlaying ? { width: ['0%', '100%'] } : {}}
                        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                        className="h-full bg-brand-cobalt"
                      />
                    </div>
                    {/* Keyframe Markers */}
                    <div className="absolute left-[20%] w-2.5 h-2.5 bg-brand-coral rotate-45 border border-ink" />
                    <div className="absolute left-[50%] w-2.5 h-2.5 bg-brand-lime rotate-45 border border-ink" />
                    <div className="absolute left-[80%] w-2.5 h-2.5 bg-brand-cobalt rotate-45 border border-ink" />
                  </div>

                  <span className="font-mono text-[10px] font-bold text-ink">01:42s</span>
                </div>
              </motion.div>
            )}

            {/* VIEW 3: BRAND DESIGN SYSTEM CANVAS */}
            {activeTab === 'brand' && (
              <motion.div
                key="brand"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-between"
              >
                {/* Typography Hierarchy Matrix */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white p-3 rounded-xl border-2 border-ink shadow-tactile-sm">
                    <div className="text-[9px] font-mono text-zinc-400 uppercase">Headline Scale</div>
                    <div className="font-display font-black text-2xl text-ink tracking-tight mt-1">Aa 900</div>
                    <div className="text-[10px] font-mono text-brand-coral font-bold mt-1">SPACE GROTESK</div>
                  </div>

                  <div className="bg-white p-3 rounded-xl border-2 border-ink shadow-tactile-sm">
                    <div className="text-[9px] font-mono text-zinc-400 uppercase">Editorial Text</div>
                    <div className="font-sans font-semibold text-base text-ink mt-1">Crisp Rhythm</div>
                    <div className="text-[10px] font-mono text-brand-cobalt font-bold mt-1">PLUS JAKARTA</div>
                  </div>
                </div>

                {/* Tactile Brand Badge Stamp */}
                <div className="bg-gradient-to-r from-brand-coral via-brand-cobalt to-brand-lime p-0.5 rounded-2xl shadow-tactile">
                  <div className="bg-ink text-white p-3 rounded-[14px] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-brand-lime text-ink font-display font-black flex items-center justify-center text-lg">
                        R
                      </div>
                      <div>
                        <div className="font-display font-bold text-xs uppercase tracking-wider text-white">
                          Riya Mahajan
                        </div>
                        <div className="text-[9px] font-mono text-zinc-400">Visual Identity System</div>
                      </div>
                    </div>

                    <span className="badge-tag bg-brand-lime/20 text-brand-lime border-brand-lime/40 text-[9px]">
                      APPROVED
                    </span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Studio Footer: Interactive Color Swatch Bar */}
        <div className="bg-white px-3 sm:px-4 py-2 sm:py-2.5 border-t-2 border-ink flex items-center justify-between">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="font-mono text-[9px] sm:text-[10px] text-ink-muted uppercase font-bold tracking-wider">
              SWATCHES:
            </span>

            {(['coral', 'cobalt', 'lime', 'violet'] as const).map((key) => {
              const pal = colorPalettes[key];
              const isSelected = activeColor === key;
              return (
                <button
                  key={key}
                  onClick={() => {
                    setActiveColor(key);
                    handleCopyColor(pal.hex);
                  }}
                  title={`Select & Copy ${pal.name} (${pal.hex})`}
                  className={`relative w-5 sm:w-6 h-5 sm:h-6 rounded-md border-2 border-ink transition-transform duration-150 flex items-center justify-center ${
                    isSelected ? 'scale-110 shadow-tactile-sm ring-2 ring-ink ring-offset-1' : 'hover:scale-105'
                  }`}
                  style={{ backgroundColor: pal.hex }}
                >
                  {isSelected && <Check className="w-3 h-3 text-ink drop-shadow" />}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            {copiedHex ? (
              <span className="font-mono text-[9px] sm:text-[10px] font-bold text-brand-coral animate-bounce">
                Copied {copiedHex}!
              </span>
            ) : (
              <span className="font-mono text-[9px] sm:text-[10px] text-ink-muted">
                {colorPalettes[activeColor].name}
              </span>
            )}
          </div>
        </div>
      </motion.div>

      {/* Floating Accent Badge 1 (Bottom Right) */}
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
        className="absolute -bottom-3 -right-2 sm:right-2 z-30 bg-ink text-white p-2 sm:p-2.5 rounded-xl sm:rounded-2xl border-2 border-ink shadow-tactile flex items-center gap-2 sm:gap-2.5 transform rotate-2 max-w-[210px] sm:max-w-none"
      >
        <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-brand-coral flex items-center justify-center text-white shrink-0">
          <Eye className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
        </div>
        <div>
          <div className="text-[9px] font-mono text-zinc-400 uppercase">Focus</div>
          <div className="font-display font-bold text-[10px] sm:text-xs uppercase tracking-wider text-brand-lime leading-tight">
            Attention &amp; Conversion
          </div>
        </div>
      </motion.div>

      {/* Floating Accent Badge 2 (Top Left) */}
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ repeat: Infinity, duration: 4.5, delay: 0.8, ease: 'easeInOut' }}
        className="absolute -top-3 -left-2 sm:left-2 z-30 bg-ink text-white px-2.5 sm:px-3 py-1.5 rounded-xl sm:rounded-2xl border-2 border-ink shadow-tactile hidden sm:flex items-center gap-2 transform -rotate-2"
      >
        <div className="w-2 h-2 rounded-full bg-brand-lime animate-pulse" />
        <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-white">
          ✦ Interactive Studio
        </span>
      </motion.div>
    </div>
  );
}
