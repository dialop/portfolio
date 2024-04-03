import React from 'react';
import { MdWbSunny, MdNightlight } from 'react-icons/md'; 
import { useDarkMode } from '../../DarkMode';

const DarkModeToggle = () => {
    const { darkMode, setDarkMode } = useDarkMode();
  return (
    <button
      type="toggle button"
      onClick={() => setDarkMode(!darkMode)}
      className="block cursor-pointer p-3 font-medium text-base lowercase transition duration-200 ease-in-out transform hover:translate-y-1 focus:translate-y-1 active:translate-y-1"
      aria-label=" dark mode toggle theme"
    >
      {darkMode ? (
        <MdWbSunny className="text-yellow-500" size="24px" />
      ) : (
        <MdNightlight className="text-black" size="24px" />
      )}
    </button>
  );
};

export default DarkModeToggle;
