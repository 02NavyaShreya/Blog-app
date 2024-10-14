import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-pink-500 p-4">
      <div className="container mx-auto flex justify-between">
        <div className="text-blue-300 text-2xl">Journey of Joy</div>
        <div className="flex space-x-4">
          <Link to="/" className="text-blue-200 hover:text-gray-400">
            Home
          </Link>
          <Link to="/about" className="text-blue-200 hover:text-gray-400">
            About
          </Link>
          <Link to="/login" className="text-blue-200 hover:text-gray-400">
            Login
          </Link>
          <Link to="/signup" className="text-blue-200 hover:text-gray-400">
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
