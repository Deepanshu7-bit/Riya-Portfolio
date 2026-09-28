'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Mail, Phone, ArrowUpRight, Copy, Check, FileDown, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('mahajanriya938@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-ink text-white relative overflow-hidden border-t-2 border-ink scroll-mt-20 sm:scroll-mt-28">

      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-brand-coral/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-brand-cobalt/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-800 pb-6 sm:pb-8"
        >
          <div className="space-y-2.5 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-brand-lime uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Let&apos;s Build Together / 09</span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl leading-[0.96] tracking-tighter uppercase text-white">
              Got An Idea? <br />
              <span className="text-brand-coral">Let&apos;s Make It</span> Impossible To Ignore.
            </h2>
          </div>

          <div className="space-y-2 max-w-sm">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-lime/10 border border-brand-lime/30 text-brand-lime text-xs font-mono font-bold">
              <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse" />
              <span>Available for Select Projects</span>
            </div>
            <p className="text-xs sm:text-sm font-sans text-zinc-400 leading-relaxed">
              Whether you need brand identity, dynamic video reels, social suites, or editorial brochures — reach out directly.
            </p>
          </div>
        </motion.div>

        {/* Direct Action Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">

          {/* Email Direct Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="p-5 sm:p-6 rounded-2xl border-2 border-zinc-800 bg-zinc-900/90 space-y-4 hover:border-brand-coral transition-colors flex flex-col justify-between group shadow-tactile-sm"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-brand-coral/10 text-brand-coral flex items-center justify-center border border-brand-coral/30">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 rounded-lg border border-zinc-700 bg-zinc-800 text-[10px] font-mono font-bold uppercase text-zinc-300 hover:text-white hover:border-brand-coral transition-colors flex items-center gap-1.5"
                  title="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3 h-3 text-brand-lime" />
                      <span className="text-brand-lime">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div>
                <div className="text-[11px] font-mono text-zinc-400 uppercase font-bold">Direct Email</div>
                <div className="font-display font-bold text-base sm:text-lg text-white break-all pt-0.5">
                  mahajanriya938@gmail.com
                </div>
              </div>
            </div>

            <a
              href="mailto:mahajanriya938@gmail.com"
              className="btn-tactile-coral py-2.5 text-xs text-center justify-center flex items-center gap-2"
            >
              <span>Send An Email</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Phone / WhatsApp Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="p-5 sm:p-6 rounded-2xl border-2 border-zinc-800 bg-zinc-900/90 space-y-4 hover:border-brand-lime transition-colors flex flex-col justify-between group shadow-tactile-sm"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-lime/10 text-brand-lime flex items-center justify-center border border-brand-lime/30">
                <Phone className="w-5 h-5" />
              </div>

              <div>
                <div className="text-[11px] font-mono text-zinc-400 uppercase font-bold">Call / WhatsApp</div>
                <div className="font-display font-bold text-base sm:text-lg text-white pt-0.5">
                  +91 8194903223
                </div>
                <p className="text-[11px] font-sans text-zinc-400 pt-0.5">
                  Available for discovery &amp; briefing calls.
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/918194903223"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tactile-lime py-2.5 text-xs text-center justify-center flex items-center gap-2"
            >
              <span>Chat on WhatsApp</span>
              <MessageSquare className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Quick Resume & Briefing Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.16 }}
            className="p-5 sm:p-6 rounded-2xl border-2 border-zinc-800 bg-zinc-900/90 space-y-4 hover:border-brand-cobalt transition-colors flex flex-col justify-between group shadow-tactile-sm"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-cobalt/10 text-brand-cobalt flex items-center justify-center border border-brand-cobalt/30">
                <FileDown className="w-5 h-5 text-[#5B7BFF]" />
              </div>

              <div>
                <div className="text-[11px] font-mono text-zinc-400 uppercase font-bold">Curriculum Vitae</div>
                <div className="font-display font-bold text-base sm:text-lg text-white pt-0.5">
                  Riya Mahajan Resume
                </div>
                <p className="text-[11px] font-sans text-zinc-400 pt-0.5">
                  1-Page PDF • Case Studies &amp; Experience.
                </p>
              </div>
            </div>

            <a
              href="/Riya_Mahajan_Resume.pdf"
              download="Riya_Mahajan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tactile-outline bg-white text-ink hover:bg-canvas-subtle py-2.5 text-xs text-center justify-center flex items-center gap-2"
            >
              <span>Download Resume PDF</span>
              <FileDown className="w-4 h-4" />
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

