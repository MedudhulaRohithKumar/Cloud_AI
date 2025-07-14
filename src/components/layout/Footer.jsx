import React from 'react';
import { NavLink } from 'react-router-dom';
import { BrainCircuit } from 'lucide-react';

const Footer = () => {
  const footerLinks = [
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto py-12 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-6 md:mb-0">
            <BrainCircuit className="h-7 w-7 text-emerald-400" />
            <span className="font-bold text-xl text-white gradient-text">CloudAI</span>
          </div>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6 md:mb-0">
            {footerLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className="text-sm text-slate-400 hover:text-emerald-400 transition-colors"
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
          <div className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Concepts of Cloud. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;