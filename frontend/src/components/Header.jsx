
const Header = () => {
    return (
        <header className="bg-black text-white py-6">
            <div className="container mx-auto flex justify-between items-center px-6">
                <h1 className="text-xl font-bold">Diana Lopez</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="/work" className="hover:text-gray-300">Work</a></li>
                        <li><a href="/about" className="hover:text-gray-300">About</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;