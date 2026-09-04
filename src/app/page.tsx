import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Manifesto from '@/components/Manifesto';
import SelectedWork from '@/components/SelectedWork';
import MotionSection from '@/components/MotionSection';
import BrandingSection from '@/components/BrandingSection';
import Process from '@/components/Process';
import BehindTheWork from '@/components/BehindTheWork';
import Services from '@/components/Services';
import WhyRiya from '@/components/WhyRiya';
import About from '@/components/About';
import Playground from '@/components/Playground';
import ClientJourney from '@/components/ClientJourney';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-canvas text-ink flex flex-col selection:bg-brand-coral selection:text-white">
      <Navbar />
      <Hero />
      <Manifesto />
      <SelectedWork />
      <MotionSection />
      <BrandingSection />
      <Process />
      <BehindTheWork />
      <Services />
      <WhyRiya />
      <About />
      <Playground />
      <ClientJourney />
      <Contact />
      <Footer />
    </main>
  );
}
