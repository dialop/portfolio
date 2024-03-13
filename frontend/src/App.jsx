import React from 'react';
import './styles/App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import BoxGrid from './components/BoxGrid';
import ProjectBox from './components/ProjectBox';
import CentralMessage from './components/CentralMessage';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <NavBar />
      <main className="flex-grow">
      <CentralMessage />
        <div className="container mx-auto px-4 py-16">
          <BoxGrid />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;