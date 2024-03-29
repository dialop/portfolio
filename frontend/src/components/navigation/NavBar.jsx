import React, { useState, useEffect } from 'react';
import ChipTabs from './ChipTabs';
import DarkModeToggle from './DarkModeToggle';

const NavBar = ({ darkMode, setDarkMode }) => {
    const [showNavBar, setShowNavBar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        setDarkMode(isDarkMode);
    }, [setDarkMode]);

    useEffect(() => {
        localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);

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

    return (
        <header style={{ backgroundColor: darkMode ? 'rgba(26, 32, 44, 0.8)' : 'rgba(255, 255, 255, 0.2)' }} className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out ${showNavBar ? 'translate-y-0' : '-translate-y-full'}  text-black`}>
            <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 space-x-4">
                <div>
                    <h1 className="text-3xl font-bold cursor-pointer" onClick={() => window.location.reload()}>DIANA LOPEZ</h1>
                    <p className="text-md font-light">Full Stack Developer</p>
                </div>
                <div className="flex items-center space-x-4">
                    <ChipTabs />
                    <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
                </div>
            </div>
        </header>
    );
};

export default NavBar;
