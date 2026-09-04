'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'Motion', href: '#motion' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'About', href: '#about' },
    { name: 'Playground', href: '#playground' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-canvas/90 backdrop-blur-md border-b-2 border-ink/10 py-3.5 shadow-sm'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 font-display font-black text-2xl tracking-tighter text-ink"
            aria-label="Riya Mahajan Portfolio"
          >
            <div className="w-9 h-9 rounded-xl bg-ink text-canvas-pure flex items-center justify-center font-display font-black text-lg border-2 border-ink group-hover:bg-brand-coral group-hover:text-white transition-colors duration-200 shadow-tactile-sm">
              R
            </div>
            <span className="tracking-tight text-xl font-bold">
              RIYA<span className="text-brand-coral">.</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/80 dark:bg-canvas-darkCard/80 backdrop-blur-md border-2 border-ink/10 rounded-full px-3 py-1.5 shadow-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 rounded-full text-xs uppercase tracking-wider font-display font-semibold text-ink-muted hover:text-ink hover:bg-canvas-subtle transition-all duration-150"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Availability Badge & Action CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 text-xs font-mono font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for selected projects</span>
            </div>

            <a
              href="#contact"
              className="relative inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-brand-coral text-white font-display font-bold text-xs uppercase tracking-wider border-2 border-ink shadow-tactile-sm hover:shadow-tactile hover:-translate-y-0.5 active:translate-y-0.5 transition-all duration-150"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href="#contact"
              className="px-3 py-1.5 rounded-lg bg-brand-coral text-white font-display font-bold text-xs uppercase tracking-wider border-2 border-ink shadow-tactile-sm"
            >
              Talk
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl border-2 border-ink bg-white text-ink shadow-tactile-sm hover:bg-canvas-subtle"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-canvas/98 backdrop-blur-xl md:hidden pt-24 px-6 flex flex-col justify-between pb-12 animate-in fade-in duration-200">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 text-xs font-mono mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for selected projects</span>
            </div>

            <nav className="flex flex-col space-y-2">
              {navLinks.map((link, idx) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-3 px-4 rounded-xl border-2 border-ink/10 bg-white font-display font-bold text-xl text-ink hover:border-ink hover:bg-brand-lime transition-all duration-150"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs font-mono text-ink-muted">0{idx + 1}</span>
                    {link.name}
                  </span>
                  <ArrowUpRight className="w-5 h-5 opacity-60" />
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-ink/10">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full btn-tactile-coral flex items-center justify-center gap-2 py-4 text-base"
            >
              <Sparkles className="w-4 h-4" />
              <span>Start A Project</span>
            </a>
            <div className="mt-4 text-center text-xs font-mono text-ink-muted">
              mahajanriya938@gmail.com • +91 8194903223
            </div>
          </div>
        </div>
      )}
    </>
  );
}
