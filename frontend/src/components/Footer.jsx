import React from 'react';

function Footer() {
  const githubLink = "https://github.com/dialop/portfolio.git";

  return (
    <div className="container mx-auto">
        <div className="text-gray-400 text-sm text-center">
          <a
            href={githubLink}
            rel="noopener noreferrer"
            className="text-grey dark:text-grey hover:text-indigo-500 dark:hover:text-indigo-400"
          >
            Created & Designed by Diana © 2024
          </a>
        </div>
    </div>
  );
}

export default Footer;
