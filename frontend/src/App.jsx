import React from 'react';
import './styles/App.css';
import NavBar from './components/navigation/NavBar';
import CentralMessage from './components/CentralMessage';
import Skills from './components/Skills';
// import Projects from './components/projects/Projects';
// import { Parallax as ParallaxOne } from './components/projects/parallax-1/parallax';
import { Parallax as ParallaxThree } from './components/projects/parallax-3/parallax';
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
          {/* <Projects /> */}
        {/* </section>
        <section id="parallaxOne" className="py-16"> */}
          {/* <ParallaxOne /> */}
        </section>

        <section id="parallaxThree" className="py-16">
          <ParallaxThree />
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
