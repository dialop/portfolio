import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="flex justify-center items-center transparent">
      <div className="flex flex-col justify-center items-center p-8 lg:px-12 xl:px-32 w-full text-center">
        <h1 className="text-5xl font-semibold text-gray-800 capitalize dark:text-white">
          Let's Connect.
        </h1>
        <div className="mt-6">
          <a href="mailto:dianalophernandez@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline text-3xl">
            dianalophernandez@gmail.com
          </a>
        </div>
        <div className="flex justify-center items-center gap-8 mt-12">
          {/* GitHub Icon */}
          <div className="group relative">
            <a href="https://github.com/dialop" aria-label="GitHub" className="flex justify-center items-center p-4 bg-white rounded-lg shadow-lg transition-all hover:scale-110 hover:bg-gray-800">
              <FaGithub className="w-8 h-8 text-black group-hover:text-white transition-colors duration-300 ease-in-out" />
              <span className="absolute bottom-full mb-3 w-auto p-2 text-sm text-white bg-black rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out -translate-x-1/2 left-1/2">
                GitHub
              </span>
            </a>
          </div>

          {/* LinkedIn Icon */}
          <div className="group relative">
            <a href="https://www.linkedin.com/in/diana-lopezh" aria-label="LinkedIn" className="flex justify-center items-center p-4 bg-white rounded-lg shadow-lg transition-all hover:scale-110 hover:bg-blue-700">
              <FaLinkedin className="w-8 h-8 text-black group-hover:text-white transition-colors duration-300 ease-in-out" />
              <span className="absolute bottom-full mb-3 w-auto p-2 text-sm text-white bg-black rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out -translate-x-1/2 left-1/2">
                LinkedIn
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
