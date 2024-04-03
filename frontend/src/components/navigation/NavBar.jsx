import React, { useState, useEffect } from 'react';
import NavTabs from './NavTabs';
import DarkModeToggle from './DarkModeToggle';
import { useDarkMode } from '../../DarkMode';


const NavBar = () => {
    const { darkMode, setDarkMode } = useDarkMode(); 
    const [showNavBar, setShowNavBar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const controlNavBarVisibility = () => {
            if (window.scrollY > lastScrollY) {
                setShowNavBar(false);
            } else {
                setShowNavBar(true);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener('scroll', controlNavBarVisibility);

        return () => {
            window.removeEventListener('scroll', controlNavBarVisibility);
        };
    }, [lastScrollY]);

    const scrollToAbout = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header
          style={{ backgroundColor: darkMode ? 'rgba(26, 32, 44, 0.8)' : 'rgba(243, 244, 246, 0.8)' }}
          className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out 
            ${showNavBar ? 'translate-y-0' : '-translate-y-full'} 
            ${darkMode ? 'text-white' : 'text-black'}`}> 
          <div
            className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 space-x-4">
            <div>
              <h1 className="text-3xl font-bold cursor-pointer" onClick={scrollToAbout}>DIANA LOPEZ</h1>
              <p className="text-md font-light">Full Stack Developer</p>
            </div>
            <div className="flex items-center space-x-4">
              <NavTabs />
              <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
            </div>
          </div>
        </header>
    );
};

export default NavBar;
