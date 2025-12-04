"use client";

import { useState } from "react";
import { Menu, X, Quote } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 group cursor-pointer">
            <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg group-hover:shadow-lg transition-all duration-300">
              <Quote className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Quotes
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <a
              href="/"
              className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="/quotes"
              className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Quotes
            </a>
            <a
              href="/about"
              className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              About
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100 animate-in fade-in slide-in-from-top-2 duration-200">
            <a
              href="/"
              className="block px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="/quotes"
              className="block px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Quotes
            </a>
            <a
              href="/about"
              className="block px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              About
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
