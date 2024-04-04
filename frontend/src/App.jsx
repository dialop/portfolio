import React, { useState, useEffect } from 'react';
import './styles/App.css';
import NavBar from './components/navigation/NavBar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion, useScroll } from 'framer-motion';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true' ? true : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : '';
  }, [darkMode]);

  const { scrollYProgress } = useScroll();

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <motion.div className="progress-bar" style={{
      scaleX: scrollYProgress,
      backgroundColor: darkMode ? '#29B6F6' : 'blue',
      height: '7px',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10,
      originX: 0, 
    }} />

      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="flex-grow">
        <section id="about" className="pt-24">
          <About darkMode={darkMode} />
        </section>
        <Skills darkMode={darkMode} />
        <section id="projects" className="py-16">
          <Projects darkMode={darkMode} />
        </section>
        <section id="contact" className="py-16">
          <Contact darkMode={darkMode} />
        </section>
      </main>
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
