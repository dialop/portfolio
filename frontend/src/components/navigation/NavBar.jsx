import React, { useState, useEffect } from 'react';
import ChipTabs from './ChipTabs';
import DarkModeToggle from './DarkModeToggle';

const NavBar = ({ darkMode, setDarkMode }) => {
    const [showNavBar, setShowNavBar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        // load dark mode state from localStorage
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        setDarkMode(isDarkMode);
    }, [setDarkMode]);

    useEffect(() => {
        // save dark mode state to localStorage
        localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);

    useEffect(() => {
        const controlNavBarVisibility = () => {
            // check if scrolling down or up
            if (window.scrollY > lastScrollY) {
                // scrolling down
                setShowNavBar(false);
            } else {
                setShowNavBar(true);
            }
            // update last scroll position
            setLastScrollY(window.scrollY);
        };

        window.addEventListener('scroll', controlNavBarVisibility);

        return () => {
            window.removeEventListener('scroll', controlNavBarVisibility);
        };
    }, [lastScrollY]);

    const refreshPage = () => {
        window.location.reload();
    };

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out ${showNavBar ? 'translate-y-0' : '-translate-y-full'} ${darkMode ? 'bg-transparent text-white' : 'bg-white text-black'}`}>
            <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 space-x-4">
                <div>
                    <h1 className="text-3xl font-bold cursor-pointer" onClick={refreshPage}>DIANA LOPEZ</h1>
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
