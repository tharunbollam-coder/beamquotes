import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 to-slate-800 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg">
                <span className="text-white font-bold text-lg">Q</span>
              </div>
              <span className="text-xl font-bold text-white">Quotes</span>
            </div>
            <p className="text-sm text-gray-400">
              Discover inspiring quotes from great minds around the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                >
                  Quotes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                >
                  Categories
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                >
                  Motivation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                >
                  Success
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                >
                  Wisdom
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                >
                  Inspiration
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a
                href="#"
                className="bg-slate-700 p-2 rounded-lg hover:bg-blue-500 transition-colors duration-200"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-slate-700 p-2 rounded-lg hover:bg-blue-500 transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-slate-700 p-2 rounded-lg hover:bg-blue-500 transition-colors duration-200"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-slate-700 p-2 rounded-lg hover:bg-blue-500 transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-xs text-gray-500">info@quotes.com</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              &copy; 2025 Quotes. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
