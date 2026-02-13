import { Link } from 'react-router-dom';
const Navbar = () => {



  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="hidden md:flex items-center space-x-1 justify-between w-full">
            <Link to = "/" className="py-5 px-3 text-gray-300 hover:bg-gray-700 hover:text-white transition duration-300 float-left"> Home </Link>
            <Link to = "/about" className="py-5 px-3 text-gray-300 hover:bg-gray-700 hover:text-white transition duration-300 text-right"> About </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
