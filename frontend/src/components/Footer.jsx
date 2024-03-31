import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  const githubLink = "https://github.com/dialop/portfolio.git";

  return (
    <footer className="container mx-auto py-8">
      <div className="flex justify-center items-center gap-8">
        {/* GitHub Icon with Tooltip */}
        <div className="group relative">
          <a href="https://github.com/" aria-label="GitHub" className="flex justify-center items-center p-4 bg-white rounded-lg shadow-lg transition-all hover:scale-110 hover:bg-gray-800">
            <FaGithub className="w-8 h-8 text-black group-hover:text-white transition-colors duration-300 ease-in-out" />
            <span className="absolute bottom-0 mb-12 w-auto p-2 text-sm text-white bg-black rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out -translate-x-1/2 left-1/2">
              GitHub
            </span>
          </a>
        </div>

        {/* LinkedIn Icon with Tooltip */}
        <div className="group relative">
          <a href="https://www.linkedin.com/" aria-label="LinkedIn" className="flex justify-center items-center p-4 bg-white rounded-lg shadow-lg transition-all hover:scale-110 hover:bg-blue-700">
            <FaLinkedin className="w-8 h-8 text-black group-hover:text-white transition-colors duration-300 ease-in-out" />
            <span className="absolute bottom-0 mb-12 w-auto p-2 text-sm text-white bg-black rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out -translate-x-1/2 left-1/2">
              LinkedIn
            </span>
          </a>
        </div>
      </div>

      <div className="text-gray-400 text-sm text-center mt-8">
        <a href={githubLink} rel="noopener noreferrer" target="_blank" className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300">
          Created & Designed by Diana © 2024
        </a>
      </div>
    </footer>
  );
}

export default Footer;
