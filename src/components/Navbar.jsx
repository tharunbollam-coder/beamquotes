"use client";

import { useState } from "react";
import { Menu, X, Quote } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-xl z-50 border-b border-slate-100 shadow-[0_8px_30px_rgba(15,23,42,0.04)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center space-x-2 group cursor-pointer"
          >
            <div className="p-2 bg-gradient-to-br from-indigo-500 to-sky-500 rounded-lg group-hover:shadow-md transition-all duration-300">
              <Quote className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-sky-500 bg-clip-text text-transparent">
              Quotes
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <a
              href="/"
              className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-indigo-600 transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="/quotes"
              className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-indigo-600 transition-colors duration-200"
            >
              Quotes
            </a>
            <a
              href="/about"
              className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-indigo-600 transition-colors duration-200"
            >
              About
            </a>
           <a
              href="/contact"
              className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-indigo-600 transition-colors duration-200"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              className="p-2 rounded-lg hover:bg-slate-100 transition-colors duration-200"
              title={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <X className="w-6 h-6 text-slate-700" />
              ) : (
                <Menu className="w-6 h-6 text-slate-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div id="mobile-menu" className="md:hidden pb-4 border-t border-slate-100 animate-in fade-in slide-in-from-top-2 duration-200">
            <a
              href="/"
              className="block px-4 py-2 text-sm font-medium text-slate-700 hover:text-indigo-600 transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="/quotes"
              className="block px-4 py-2 text-sm font-medium text-slate-700 hover:text-indigo-600 transition-colors duration-200"
            >
              Quotes
            </a>
            <a
              href="/about"
              className="block px-4 py-2 text-sm font-medium text-slate-700 hover:text-indigo-600 transition-colors duration-200"
            >
              About
            </a>
            <a
              href="/contact"
              className="block px-4 py-2 text-sm font-medium text-slate-700 hover:text-indigo-600 transition-colors duration-200"
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
