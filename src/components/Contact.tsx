'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Mail, Phone, Send, CheckCircle2, Copy, Check } from 'lucide-react';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Social Media & Campaigns',
    budget: '$500 - $1,500',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('mahajanriya938@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-14 sm:py-20 lg:py-24 bg-ink text-white relative overflow-hidden border-t-2 border-ink scroll-mt-20 sm:scroll-mt-28">

      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-brand-coral/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-brand-cobalt/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12 relative z-10">

        {/* Massive Final Headline */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="space-y-6 max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono text-brand-lime uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Let&apos;s Build Together / 09</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.94] tracking-tighter uppercase text-white break-words">
            Got An Idea? <br />
            Let&apos;s Make It <br />
            <span className="text-brand-coral underline decoration-brand-lime decoration-4 underline-offset-8">
              Impossible
            </span>{' '}
            To Ignore.
          </h2>

          <p className="font-sans text-sm sm:text-lg lg:text-xl text-zinc-300 max-w-2xl leading-relaxed">
            Whether you need a complete campaign suite, an educational brochure, an attention-grabbing social media system, or motion reels — let&apos;s start the conversation.
          </p>
        </motion.div>

        {/* Contact Matrix: Direct Details (Left) + Inquiry Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

          {/* Left Column: Direct Contact Info & Availability */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 space-y-5 sm:space-y-6"
          >

            {/* Direct Email Card */}
            <div className="p-5 sm:p-6 rounded-2xl border-2 border-zinc-800 bg-zinc-900/80 space-y-3 shadow-tactile-sm">
              <div className="text-xs font-mono text-zinc-400 uppercase">Direct Email</div>
              <div className="flex items-center justify-between gap-3">
                <a
                  href="mailto:mahajanriya938@gmail.com"
                  className="font-display font-bold text-base sm:text-xl text-white hover:text-brand-lime transition-colors break-all"
                >
                  mahajanriya938@gmail.com
                </a>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-lg border border-zinc-700 bg-zinc-800 hover:bg-brand-coral hover:border-brand-coral text-white transition-colors flex-shrink-0"
                  aria-label="Copy email address"
                  title="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-brand-lime" /> : <Copy className="w-4 h-4" />}
                </motion.button>
              </div>
              {copiedEmail && (
                <div className="text-[11px] font-mono text-brand-lime animate-in fade-in">
                  ✓ Email copied to clipboard!
                </div>
              )}
            </div>

            {/* Direct Phone & WhatsApp */}
            <div className="p-5 sm:p-6 rounded-2xl border-2 border-zinc-800 bg-zinc-900/80 space-y-2.5 shadow-tactile-sm">
              <div className="text-xs font-mono text-zinc-400 uppercase">Phone &amp; WhatsApp</div>
              <a
                href="tel:+918194903223"
                className="font-display font-bold text-lg sm:text-xl text-white hover:text-brand-lime transition-colors block"
              >
                +91 8194903223
              </a>
              <div className="text-xs text-zinc-400">
                Available for discovery calls (IST timezone).
              </div>
            </div>

            {/* Availability Box */}
            <div className="p-5 sm:p-6 rounded-2xl border-2 border-brand-lime bg-zinc-900 space-y-2 shadow-tactile-sm">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-lime animate-ping" />
                <span className="text-xs font-mono font-bold text-brand-lime uppercase">
                  Current Status
                </span>
              </div>
              <div className="font-display font-bold text-base sm:text-lg text-white">
                Accepting select freelance &amp; full-time briefs.
              </div>
            </div>

          </motion.div>

          {/* Right Column: Tactile Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-10 lg:p-12 rounded-3xl border-2 border-zinc-700 bg-zinc-900 shadow-2xl space-y-6">

              <div className="space-y-1">
                <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
                  Project Inquiry Form
                </h3>
                <p className="text-xs sm:text-sm font-sans text-zinc-400">
                  Fill in a few details and I will reply within 24 hours.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-6 sm:p-8 rounded-2xl bg-brand-lime/10 border-2 border-brand-lime text-center space-y-4 animate-in fade-in">
                  <CheckCircle2 className="w-12 h-12 text-brand-lime mx-auto" />
                  <h4 className="font-display font-black text-xl sm:text-2xl text-white uppercase">
                    Thank You! Message Received.
                  </h4>
                  <p className="text-sm font-sans text-zinc-300 max-w-md mx-auto">
                    I have received your project inquiry and will get back to you shortly at <strong>{formData.email}</strong>.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="btn-tactile-lime mt-4 text-xs"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-zinc-400 uppercase">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sarah Jenkins"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full p-3 sm:p-3.5 rounded-xl border-2 border-zinc-700 bg-zinc-950 text-white font-sans text-sm focus:outline-none focus:border-brand-lime transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-zinc-400 uppercase">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full p-3 sm:p-3.5 rounded-xl border-2 border-zinc-700 bg-zinc-950 text-white font-sans text-sm focus:outline-none focus:border-brand-lime transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-zinc-400 uppercase">Project Type</label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full p-3 sm:p-3.5 rounded-xl border-2 border-zinc-700 bg-zinc-950 text-white font-sans text-sm focus:outline-none focus:border-brand-lime transition-colors"
                      >
                        <option>Social Media &amp; Campaigns</option>
                        <option>Brand Identity &amp; Systems</option>
                        <option>Motion &amp; Video Editing</option>
                        <option>Editorial Brochure &amp; Print</option>
                        <option>Full Creative Retainer</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-zinc-400 uppercase">Estimated Budget</label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full p-3 sm:p-3.5 rounded-xl border-2 border-zinc-700 bg-zinc-950 text-white font-sans text-sm focus:outline-none focus:border-brand-lime transition-colors"
                      >
                        <option>Flexible / To Discuss</option>
                        <option>$300 - $600</option>
                        <option>$600 - $1,500</option>
                        <option>$1,500 - $3,000+</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-400 uppercase">Tell Me About The Brief</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="What are we building? What is the timeline and vision?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-3 sm:p-3.5 rounded-xl border-2 border-zinc-700 bg-zinc-950 text-white font-sans text-sm focus:outline-none focus:border-brand-lime transition-colors"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    className="w-full btn-tactile-coral py-3.5 sm:py-4 text-sm flex items-center justify-center gap-2 font-display font-bold uppercase tracking-wider"
                  >
                    <span>Send Project Inquiry</span>
                    <Send className="w-4 h-4" />
                  </motion.button>
                </form>
              )}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

