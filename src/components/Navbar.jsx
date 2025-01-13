import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="fixed top-0 w-full bg-gray-800 bg-opacity-20 backdrop-blur-md shadow-lg z-50"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}>
      <div className="container mx-auto flex items-center justify-between p-4">
        <h1 className="text-xl font-bold text-gray-800">Forcythe</h1>
        {/* Menu Toggle Button (Visible on Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 focus:outline-none">
            {isOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>

        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full bg-white md:flex md:space-x-6 md:static md:bg-transparent`}>
          <li className="p-4 text-gray-600 hover:text-gray-900 cursor-pointer">
            About
          </li>
          <li className="p-4 text-gray-600 hover:text-gray-900 cursor-pointer">
            Services
          </li>
          <li className="p-4 text-gray-600 hover:text-gray-900 cursor-pointer">
            Portfolio
          </li>
          <li className="p-4 text-gray-600 hover:text-gray-900 cursor-pointer">
            Studio
          </li>
          <li className="p-4 text-gray-600 hover:text-gray-900 cursor-pointer">
            Foundation
          </li>
          <button className="px-6 py-3 border-2 border-blue-500 text-blue-500 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 ml-6">
            Book a Call
          </button>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
