// import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">MyLogo</Link>

        {/* Hamburger Button (Mobile) */}
        {/* <button 
          className="md:hidden text-white text-2xl focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button> */}

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
          <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {/* {isOpen && (
        <div className="md:hidden mt-2 bg-blue-700 py-2 space-y-2">
          <Link to="/" className="block text-center hover:text-gray-300" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="block text-center hover:text-gray-300" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/contact" className="block text-center hover:text-gray-300" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )} */}
    </nav>
  );
}
