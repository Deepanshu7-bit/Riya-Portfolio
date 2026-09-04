'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUp, Instagram, Mail, Phone, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-canvas border-t-2 border-ink py-16 text-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b-2 border-ink/10">
          <div className="space-y-2">
            <Link
              href="/"
              className="font-display font-black text-3xl tracking-tighter text-ink flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded-lg bg-ink text-white flex items-center justify-center text-sm font-mono font-bold">
                R
              </div>
              <span>RIYA MAHAJAN<span className="text-brand-coral">.</span></span>
            </Link>
            <p className="text-xs font-mono text-ink-muted">
              Graphic Designer • Visual Creative • Motion Designer
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-display font-bold uppercase tracking-wider">
            <a href="#work" className="hover:text-brand-coral transition-colors">Work</a>
            <a href="#motion" className="hover:text-brand-coral transition-colors">Motion</a>
            <a href="#services" className="hover:text-brand-coral transition-colors">Services</a>
            <a href="#process" className="hover:text-brand-coral transition-colors">Process</a>
            <a href="#about" className="hover:text-brand-coral transition-colors">About</a>
            <a href="#playground" className="hover:text-brand-coral transition-colors">Playground</a>
            <a href="#contact" className="hover:text-brand-coral transition-colors">Contact</a>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="p-3 rounded-xl border-2 border-ink bg-white shadow-tactile-sm hover:shadow-tactile hover:-translate-y-0.5 transition-all text-ink flex items-center gap-2 text-xs font-display font-bold uppercase"
            aria-label="Back to top"
          >
            <span>Back To Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom Metadata Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-ink-muted">
          <div>
            © {new Date().getFullYear()} Riya Mahajan. Crafted with intentional visual rhythm.
          </div>

          <div className="flex items-center gap-6">
            <a
              href="mailto:mahajanriya938@gmail.com"
              className="hover:text-brand-coral transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
            <a
              href="https://instagram.com/designxriya"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-coral transition-colors flex items-center gap-1.5"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>Instagram</span>
            </a>
            <a
              href="tel:+918194903223"
              className="hover:text-brand-coral transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Phone</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
