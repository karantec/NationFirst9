// Navbar.js
import React, { useState } from "react";
import { Menu, Search, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logoremoved.png";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 h-20 bg-blue-500 shadow-md z-50 ">
        <div className="container mx-auto flex items-center justify-between h-20 px-4 md:px-8">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img className="w-32 h-32" src={logo} alt="logo" />
            <span className="text-white font-bold -ml-6  text-lg md:hidden">
              Nation First
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6 font-semibold text-white">
              {[
                "अंतरराष्ट्रीय",
                "राष्ट्रीय",
                "राज्य",
                "राजनीति",
                "शिक्षा",
                "रोजगार",
                "स्वास्थ्य",
                "खेल",
                "व्यापार",
                "मौसम",
                "जायका",
                "पर्यटन",
              ].map((category) => (
                <li key={category}>
                  <Link
                    to={`/category/${category}`}
                    className="hover:text-slate-100 transition-colors"
                  >
                    {category}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/podcast"
                  className="hover:text-blue-600 transition-colors"
                >
                  Podcast
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-blue-600 transition-colors"
                >
                  Blogs
                </Link>
              </li>
            </ul>
          </nav>

          {/* Search and Menu Buttons */}
          <div className="flex items-center space-x-4">
            <button
              className="hidden md:flex text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="h-6 w-6 text-white" />
            </button>

            <button
              className="lg:hidden text-gray-700 hover:text-blue-600 transition-colors z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? null : <Menu className="h-10 w-10 text-white" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu (Slide-in) */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity ${
            isMenuOpen ? "opacity-100 visible" : "invisible"
          }`}
          onClick={() => setIsMenuOpen(false)}
        />

        <div
          className={`fixed top-0 left-0 h-full w-3/4 max-w-xs bg-slate-600 shadow-md transform transition-transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } z-50`}
        >
          <div className="flex justify-between items-center p-4 border-b">
            <span className="text-xl font-semibold text-white">Menu</span>
            <button onClick={() => setIsMenuOpen(false)}>
              <X className="h-6 w-6  hover:text-red-600 text-white transition-colors" />
            </button>
          </div>

          <nav className="p-4">
            <ul className="space-y-4 ">
              {[
                "अंतरराष्ट्रीय",
                "राष्ट्रीय",
                "राज्य",
                "राजनीति",
                "शिक्षा",
                "रोजगार",
                "स्वास्थ्य",
                "खेल",
                "व्यापार",
                "मौसम",
                "जायका",
                "पर्यटन",
              ].map((category) => (
                <li key={category}>
                  <Link
                    to={`/category/${category}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-lg font-semibold text-white hover:text-blue-600 transition-colors hover:bg-slate-400 p-2"
                  >
                    {category}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/podcast"
                  className="block text-lg font-semibold text-white hover:text-blue-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Podcast
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="block text-lg font-semibold text-white hover:text-blue-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blogs
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
