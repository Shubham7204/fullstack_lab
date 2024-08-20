import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-center space-x-4">
      <Link to="/" className="hover:text-gray-400">Home</Link>
      <Link to="/about" className="hover:text-gray-400">About</Link>
      <Link to="/contact" className="hover:text-gray-400">Contact</Link>
    </nav>
  );
}

export default Navbar;
