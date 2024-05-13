import React, { useRef, useEffect } from 'react';
import { Box, useTheme } from '@mui/material';
import { gsap } from 'gsap';
import Cursor from './components/Cursor'; 
import AboutSection from './components/AboutSection';
import Footer from './components/Footer'; 
import NavigationBar from './components/NavigationBar';

function App() {
  const theme = useTheme();
  const appRef = useRef();

  useEffect(() => {
    gsap.fromTo(appRef.current, { opacity: 0 }, { opacity: 1, duration: 1 });
  }, []);

  return (
    <>
      <Cursor />
      <Box ref={appRef} className="App">
      <NavigationBar/>
        <AboutSection />
        <Footer />
      </Box>
    </>
  );
}

export default App;
