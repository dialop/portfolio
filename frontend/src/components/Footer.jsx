import React from 'react';

function Footer() {
  const githubLink = "https://github.com/dialop/portfolio.git";

  return (
    <div className="container mx-auto">
      <div className="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
        <div className="text-gray-400 text-sm text-center">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-grey dark:text-grey hover:text-indigo-500 dark:hover:text-indigo-400"
          >
            Created & Designed by Diana © 2024
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
