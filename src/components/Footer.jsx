import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

// Reusable Link Component
const FooterLink = ({ href, children }) => (
  <li>
    <Link
      href={href}
      className="text-slate-700 hover:text-indigo-600 transition-colors duration-200 text-sm"
    >
      {children}
    </Link>
  </li>
);

// Reusable Social Icon Component
const SocialIcon = ({ href, icon: Icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="bg-white/80 border border-slate-200 text-slate-700 p-2 rounded-lg hover:bg-slate-50 hover:border-indigo-200 transition-colors duration-200 shadow-sm hover:shadow-md"
    title={label}
  >
    <Icon className="w-4 h-4" />
  </a>
);

// Section Header Component
const SectionHeader = ({ children }) => (
  <h3 className="text-slate-900 font-semibold mb-4 text-sm uppercase tracking-[0.15em]">
    {children}
  </h3>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/quotes", label: "Quotes" },
    { href: "/about", label: "About Us" },
  ];

  const legalLinks = [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/cookies", label: "Cookie Policy" },
  ];

  const socialLinks = [
    { 
      href: "https://github.com", 
      icon: Github, 
      label: "GitHub" 
    },
    { 
      href: "https://linkedin.com", 
      icon: Linkedin, 
      label: "LinkedIn" 
    },
    { 
      href: "https://twitter.com", 
      icon: Twitter, 
      label: "Twitter" 
    },
    { 
      href: "mailto:info@quotes.com", 
      icon: Mail, 
      label: "Email us" 
    },
  ];

  return (
    <footer 
      className="bg-gradient-to-r from-slate-50 via-sky-50 to-indigo-50 text-slate-800 border-t border-slate-100"
      aria-label="Main Footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
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
            <SectionHeader>Quick Links</SectionHeader>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <FooterLink key={link.href} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <SectionHeader>Connect With Us</SectionHeader>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <SocialIcon
                  key={social.href}
                  href={social.href}
                  icon={social.icon}
                  label={social.label}
                />
              ))}
            </div>
            <div className="pt-2">
              <a
                href="mailto:info@quotes.com"
                className="text-sm text-slate-700 hover:text-indigo-600 transition-colors duration-200"
              >
                info@quotes.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-100 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500 text-center md:text-left">
              &copy; {currentYear} Quotes. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-slate-500 hover:text-indigo-600 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
