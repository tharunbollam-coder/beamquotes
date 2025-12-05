import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-50 via-sky-50 to-indigo-50 text-slate-800 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-gradient-to-br from-indigo-500 to-sky-500 rounded-lg shadow-sm">
                <span className="text-white font-bold text-lg">Q</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-sky-500 bg-clip-text text-transparent">
                Quotes
              </span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Discover inspiring quotes from great minds around the world.
              Perfect for your daily motivation and creative projects.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-slate-900 font-semibold mb-4 text-sm uppercase tracking-[0.15em]">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/"
                  className="text-slate-700 hover:text-indigo-600 transition-colors duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/quotes"
                  className="text-slate-700 hover:text-indigo-600 transition-colors duration-200"
                >
                  Quotes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-700 hover:text-indigo-600 transition-colors duration-200"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-slate-900 font-semibold mb-4 text-sm uppercase tracking-[0.15em]">
              Categories
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-slate-700 hover:text-indigo-600 transition-colors duration-200"
                >
                  Motivation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-700 hover:text-indigo-600 transition-colors duration-200"
                >
                  Success
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-700 hover:text-indigo-600 transition-colors duration-200"
                >
                  Wisdom
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-700 hover:text-indigo-600 transition-colors duration-200"
                >
                  Inspiration
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-slate-900 font-semibold mb-4 text-sm uppercase tracking-[0.15em]">
              Connect With Us
            </h3>
            <div className="flex space-x-3 mb-4">
              <a
                href="#"
                className="bg-white/80 border border-slate-200 text-slate-700 p-2 rounded-lg hover:bg-slate-50 hover:border-indigo-200 transition-colors duration-200 shadow-sm"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="bg-white/80 border border-slate-200 text-slate-700 p-2 rounded-lg hover:bg-slate-50 hover:border-indigo-200 transition-colors duration-200 shadow-sm"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="bg-white/80 border border-slate-200 text-slate-700 p-2 rounded-lg hover:bg-slate-50 hover:border-indigo-200 transition-colors duration-200 shadow-sm"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="bg-white/80 border border-slate-200 text-slate-700 p-2 rounded-lg hover:bg-slate-50 hover:border-indigo-200 transition-colors duration-200 shadow-sm"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <p className="text-xs text-slate-600">info@quotes.com</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-200 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-xs sm:text-sm text-slate-600">
              &copy; {new Date().getFullYear()} Quotes. All rights reserved.
            </p>
            <div className="flex space-x-4 text-xs sm:text-sm">
              <a
                href="#"
                className="text-slate-700 hover:text-indigo-600 transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-slate-700 hover:text-indigo-600 transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-slate-700 hover:text-indigo-600 transition-colors duration-200"
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
