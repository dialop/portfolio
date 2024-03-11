const Header = () => {
    return (
        <header className="py-8 bg-transparent">
            <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
                <div>
                    <h1 className="text-3xl font-bold text-white">DIANA LOPEZ</h1>
                    <p className="text-md font-light text-gray-400">Full Stack Developer</p>
                </div>
                <nav>
                    <ul className="flex space-x-12">
                        <li><a href="/work" className="text-lg text-white hover:text-gray-300">Work</a></li>
                        <li><a href="/about" className="text-lg text-white hover:text-gray-300">About</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
