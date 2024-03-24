import React from 'react';
import './styles/App.css';
import NavBar from './components/navigation/NavBar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <NavBar />
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
