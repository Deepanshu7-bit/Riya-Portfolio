import React from 'react';
import InitialLoader from '@/components/InitialLoader';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

import Manifesto from '@/components/Manifesto';
import SelectedWork from '@/components/SelectedWork';
import SinghBakeCaseStudy from '@/components/SinghBakeCaseStudy';
import MotionSection from '@/components/MotionSection';
import BrandingSection from '@/components/BrandingSection';
import Process from '@/components/Process';
import BehindTheWork from '@/components/BehindTheWork';
import About from '@/components/About';
import WhyRiya from '@/components/WhyRiya';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-canvas text-ink flex flex-col selection:bg-brand-coral selection:text-white">
      <InitialLoader />
      <Navbar />
      <Hero />

      <Manifesto />
      <SelectedWork />
      <SinghBakeCaseStudy />
      <MotionSection />
      <BrandingSection />
      <Process />
      <BehindTheWork />
      <About />
      <WhyRiya />
      <Contact />
      <Footer />
    </main>
  );
}

