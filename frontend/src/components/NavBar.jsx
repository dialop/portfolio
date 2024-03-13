import React from 'react';

const NavBar = () => {
    return (
        <header className="py-8 bg-transparent" style={{ paddingTop: '2rem', paddingBottom: '6rem'}}  > 
            <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
                <div> 
                    <h1 className="text-3xl font-bold text-black">DIANA LOPEZ </h1>
                    <p className="text-md font-light text-gray-400">Full Stack Developer</p>
                </div>
                <nav className="flex items-center justify-between bg-gray-800 p-4">
      
      <ul className="flex space-x-4">
        <li>
          <a href="/work" className="text-black hover:underline">Work</a>
        </li>
        <li>
          <a href="/about" className="text-black hover:underline">About</a>
        </li>
      </ul>
    </nav>
            </div>
        </header>
    );
};

export default NavBar;
