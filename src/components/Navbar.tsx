'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'Case Study', href: '#singh-bake' },
    { name: 'Motion', href: '#motion' },
    { name: 'Process', href: '#process' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];


  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-canvas/95 backdrop-blur-md border-b-2 border-ink/10 py-3 sm:py-3.5 shadow-sm'
            : 'bg-transparent py-3 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2 sm:gap-2.5 font-display font-black text-xl sm:text-2xl tracking-tighter text-ink"
            aria-label="Riya Mahajan Portfolio"
          >
            <motion.div
              whileHover={{ rotate: 10, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-ink text-canvas-pure flex items-center justify-center font-display font-black text-base sm:text-lg border-2 border-ink group-hover:bg-brand-coral group-hover:text-white transition-colors duration-200 shadow-tactile-sm"
            >
              R
            </motion.div>
            <span className="tracking-tight text-lg sm:text-xl font-bold">
              RIYA<span className="text-brand-coral">.</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/90 dark:bg-canvas-darkCard/90 backdrop-blur-md border-2 border-ink/10 rounded-full px-3 py-1.5 shadow-sm">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ y: -1 }}
                whileTap={{ y: 0 }}
                className="px-3.5 py-1.5 rounded-full text-xs uppercase tracking-wider font-display font-semibold text-ink-muted hover:text-ink hover:bg-canvas-subtle transition-all duration-150"
              >
                {link.name}
              </motion.a>
            ))}
          </nav>

          {/* Availability Badge & Action CTA */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 text-xs font-mono font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for projects</span>
            </div>

            <motion.a
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ y: 1, scale: 0.98 }}
              href="#contact"
              className="relative inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-brand-coral text-white font-display font-bold text-xs uppercase tracking-wider border-2 border-ink shadow-tactile-sm hover:shadow-tactile transition-all duration-150"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </motion.a>
          </div>

          {/* Mobile Menu Actions */}
          <div className="flex items-center gap-2 md:hidden">
            <motion.a
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-3 py-1.5 rounded-lg bg-brand-coral text-white font-display font-bold text-xs uppercase tracking-wider border-2 border-ink shadow-tactile-sm"
            >
              Talk
            </motion.a>
            <motion.button
              whileTap={{ scale: 0.92 }}
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl border-2 border-ink bg-white text-ink shadow-tactile-sm hover:bg-canvas-subtle transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Animated Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-canvas/98 backdrop-blur-2xl md:hidden pt-20 px-5 flex flex-col justify-between pb-8 overflow-y-auto"
          >
            <div className="space-y-4 pt-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Available for selected projects</span>
              </div>

              <nav className="flex flex-col space-y-2">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.name}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04, duration: 0.2 }}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-3 px-4 rounded-xl border-2 border-ink/10 bg-white font-display font-bold text-lg text-ink hover:border-ink hover:bg-brand-lime transition-all duration-150"
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-xs font-mono text-ink-muted">0{idx + 1}</span>
                      {link.name}
                    </span>
                    <ArrowUpRight className="w-4 h-4 opacity-60" />
                  </motion.a>
                ))}
              </nav>
            </div>

            <div className="pt-4 border-t border-ink/10 space-y-3">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full btn-tactile-coral flex items-center justify-center gap-2 py-3.5 text-sm"
              >
                <Sparkles className="w-4 h-4" />
                <span>Start A Project</span>
              </a>
              <div className="text-center text-[11px] font-mono text-ink-muted">
                mahajanriya938@gmail.com • +91 8194903223
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
