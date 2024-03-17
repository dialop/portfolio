import React from 'react';
import './styles/App.css';
import NavBar from './components/NavBar';
import CentralMessage from './components/CentralMessage';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact'
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <NavBar />
      <main className="flex-grow">
      <CentralMessage />
        <div className="container mx-auto px-4 py-16">
      <Skills />
      <Projects/>
        </div>
      </main>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;