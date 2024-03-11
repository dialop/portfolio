const Header = () => {
    return (
      <header className="py-8 bg-transparent">
        <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
          <div>
            <h1 className="text-3xl font-bold text-white">DIANA LOPEZ</h1>
            <p className="text-md font-light text-gray-400">Full Stack Developer</p>
          </div>
          <nav>
            <div className="flex">
              <a href="/work" className="text-lg text-white hover:text-gray-300 mr-16">Work</a>
            </div>
            <div className="flex">
              <a href="/about" className="text-lg text-white hover:text-gray-300 mr-16">About</a>
            </div>
          </nav>
        </div>
      </header>
    );
  };
  
  export default Header;
  