import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { navLinks } from './data/portfolio';
import { useActiveSection } from './hooks/useActiveSection';

import LoadingScreen from './components/layout/LoadingScreen';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollProgressBar from './components/layout/ScrollProgressBar';
import ScrollToTop from './components/layout/ScrollToTop';
import CustomCursor from './components/layout/CustomCursor';
import ParticleBackground from './components/layout/ParticleBackground';

import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';

/**
 * Root application component — orchestrates layout, sections, and global UI.
 */
export default function App() {
  const [loading, setLoading] = useState(true);
  const sectionIds = navLinks.map((link) => link.id);
  const activeSection = useActiveSection(sectionIds);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <ScrollProgressBar />
          <CustomCursor />
          <ParticleBackground />
          <Navbar activeSection={activeSection} />

          <main className="relative z-10">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Education />
            <Contact />
          </main>

          <Footer />
          <ScrollToTop />
        </>
      )}
    </>
  );
}
