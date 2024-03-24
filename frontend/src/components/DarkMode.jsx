import React from 'react';

const DarkMode = ({ darkMode, setDarkMode }) => {
  return (
    <button
      className="fixed top-5 right-5 bg-gray-300 dark:bg-gray-700 px-4 py-2 rounded-md text-gray-800 dark:text-gray-200"
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default DarkMode;