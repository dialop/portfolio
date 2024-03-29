import React from 'react';

function Footer() {
  const githubLink = "https://github.com/dialop/portfolio.git";

  return (
 
    <footer className="container mx-auto pb-8">
        <div className="text-gray-400 text-sm text-center mb-4"> 
          <a
            href={githubLink}
            rel="noopener noreferrer"
            target="_blank"
            className="text-grey dark:text-grey hover:text-indigo-500 dark:hover:text-indigo-400"
          >
            Created & Designed by Diana © 2024
          </a>
        </div>
    </footer>
  );
}

export default Footer;
