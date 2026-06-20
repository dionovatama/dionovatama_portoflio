import { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { FeaturedVideo } from './components/FeaturedVideo';
import { Projects } from './components/Projects';
import { SocialLinks } from './components/SocialLinks';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0e14] font-['JetBrains_Mono',_monospace] text-[#00f0ff]">
      <Hero />
      <About />
      <FeaturedVideo />
      <Projects />
      <SocialLinks />
      <Footer />
    </div>
  );
}
