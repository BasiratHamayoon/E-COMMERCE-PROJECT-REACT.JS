import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-black text-white py-10 px-5 md:px-20"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Logo & About */}
        <div>
          <h1 className="text-red-500 text-2xl font-bold mb-3">QuickKart</h1>
          <p className="text-gray-400 text-sm">
            Your ultimate destination for seamless and quick shopping.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Quick Links</h2>
          <ul className="text-gray-400 space-y-2">
            <li className="hover:text-red-500 transition duration-300">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-red-500 transition duration-300">
              <Link to="/Products">Products</Link>
            </li>
            <li className="hover:text-red-500 transition duration-300">
              <Link to="/About">About</Link>
            </li>
            <li className="hover:text-red-500 transition duration-300">
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Follow Us</h2>
          <div className="flex justify-center md:justify-start gap-4">
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="#"
              className="text-gray-400 hover:text-blue-600 transition duration-300"
            >
              <FaFacebookF size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="#"
              className="text-gray-400 hover:text-sky-500 transition duration-300"
            >
              <FaTwitter size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="#"
              className="text-gray-400 hover:text-pink-500 transition duration-300"
            >
              <FaInstagram size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="#"
              className="text-gray-400 hover:text-blue-700 transition duration-300"
            >
              <FaLinkedinIn size={20} />
            </motion.a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-10 text-gray-500 text-sm border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} QuickKart. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
