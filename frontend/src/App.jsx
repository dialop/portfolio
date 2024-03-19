import React from 'react';
import './styles/App.css';
import NavBar from './components/NavBar';
import CentralMessage from './components/CentralMessage';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <NavBar />
      <main className="flex-grow">

        <section id="about" className="pt-24">
          <CentralMessage />
        </section> 
          <Skills />
        <section id="projects" className="py-16"> 
          <Projects />
        </section>
        <section id="contact" className="py-16"> 
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
