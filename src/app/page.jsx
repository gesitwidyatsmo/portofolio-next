'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero/index.jsx';
import About from '@/components/About/About';
import Blog from '@/components/Blog/Blog';
import Contact from '@/components/Contact/Contact';
import Project from '@/components/Project/Project';
import Reveal from '@/components/utils/Reveal';
import ButtonUp from '@/components/ButtonUp';
import { useState } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode && 'dark'}`}>
      <div className="bg-primary dark:bg-white">
        <Header darkMode={toggleDarkMode} dark={darkMode} />
        <div className="overflow-hidden">
          {/* Hero */}
          <Reveal>
            <Hero dark={darkMode} />
          </Reveal>

          {/* About */}
          <Reveal>
            <About />
          </Reveal>

          {/* Project */}
          <Reveal>
            <Project />
          </Reveal>

          {/* Blog */}
          <Blog />

          {/* Contact */}
          <Reveal>
            <Contact />
          </Reveal>
        </div>
        <ButtonUp />
        <Footer dark={darkMode} />
      </div>
    </div>
  );
}
