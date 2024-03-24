import { React, useState } from 'react';
import './styles/App.css';
import NavBar from './components/navigation/NavBar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DarkMode from './components/DarkMode';

function App() {
  const [darkMode, setDarkMode] = useState(false); // State for dark mode

  return (
    <div className={darkMode ? 'dark' : ''}> {/* Apply dark mode class to the entire app */}
      <NavBar />
      <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} /> {/* Render the dark mode toggle button */}
      <main className="flex-grow">
        <section id="about" className="pt-24">
          <About />
        </section> 
        <Skills />
        <section id="projects" className="py-16"> 
          <Projects />
        </section>
        <section id="contact" className="py-16"> 
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;