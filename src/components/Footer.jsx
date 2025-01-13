import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div>
          <input
            type="email"
            placeholder="Your Email Address"
            className="w-full md:w-2/3 p-3 rounded bg-gray-800 text-white mb-4"
          />
          <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">
            Subscribe
          </button>
          <div className="mt-4">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-sm">
                I agree to receive other notifications from Forcythe
              </span>
            </label>
          </div>
        </div>

        {/* Center Section */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}>
            <h3 className="text-2xl font-bold mb-2">Forcythe</h3>
            <p className="text-gray-400 text-sm">
              We are the growth company for businesses looking to scale. We are
              dedicated to transforming businesses with bespoke digital
              solutions that drive growth.
            </p>
          </motion.div>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-blue-500">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h4 className="text-xl font-bold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <a href="#" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Studio
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Foundation
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Blog
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        <p>Copyright © 2024 Forcythe. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
