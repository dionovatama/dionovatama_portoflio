import { useState } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { FeaturedVideo } from './components/FeaturedVideo';
import { Projects } from './components/Projects';
import { SocialLinks } from './components/SocialLinks';
import { Footer } from './components/Footer';
import { VideoProjects } from './components/VideoProjects';
import { AllProjects } from './components/AllProjects';

type Page = 'home' | 'video-projects' | 'all-projects';

export default function App() {
  const [page, setPage] = useState<Page>('home');

  if (page === 'video-projects') {
    return <VideoProjects onBack={() => setPage('home')} />;
  }

  if (page === 'all-projects') {
    return <AllProjects onBack={() => setPage('home')} />;
  }

  return (
    <div className="min-h-screen bg-[#0a0e14] font-['JetBrains_Mono',_monospace] text-[#00f0ff]">
      <Hero />
      <SocialLinks />
      <About />
      <FeaturedVideo onNavigate={() => setPage('video-projects')} />
      <Projects onNavigate={() => setPage('all-projects')} />
      <Footer />
    </div>
  );
}
