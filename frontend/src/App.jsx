import React, { useState, useEffect } from 'react';
import './styles/App.css';
import NavBar from './components/navigation/NavBar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // check local storage for dark mode preference
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true' ? true : false;
  });

  useEffect(() => {
    // update local storage when darkMode changes
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  useEffect(() => {
    // apply or remove the dark class on body element based on darkMode state
    document.body.className = darkMode ? 'dark' : '';
  }, [darkMode]);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'}`}>
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
