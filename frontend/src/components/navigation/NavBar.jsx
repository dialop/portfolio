import React, { useEffect } from 'react';
import ChipTabs from './ChipTabs';
import DarkModeToggle from './DarkModeToggle';

const NavBar = ({ darkMode, setDarkMode }) => {

    useEffect(() => {
        // save dark mode state in localStorage 
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        setDarkMode(isDarkMode);
    }, [setDarkMode]);

    useEffect(() => {
        localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);

    const refreshPage = () => {
        window.location.reload();
    };

    return (
        <header className={`py-8 ${darkMode ? 'dark' : 'light'}`}>
            <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 space-x-4">
                <div>
                    <h1 className="text-3xl font-bold cursor-pointer" onClick={refreshPage}>DIANA LOPEZ</h1>
                    <p className="text-md font-light text-gray-400">Full Stack Developer</p>
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
