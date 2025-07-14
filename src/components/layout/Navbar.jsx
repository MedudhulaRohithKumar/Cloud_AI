import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BrainCircuit } from 'lucide-react';

const Navbar = () => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Product', path: '/product' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Investors', path: '/investors' },
    { name: 'Incubators', path: '/incubators' },
    { name: 'Documentation', path: '/documentation' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-900/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <NavLink to="/" className="flex items-center gap-2 font-bold text-lg text-white">
          <BrainCircuit className="h-6 w-6 text-emerald-400" />
          <span className="gradient-text">CloudAI</span>
        </NavLink>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-emerald-400 ${
                  isActive ? 'text-emerald-400' : 'text-slate-300'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Button asChild className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold">
            <Link to="/early-access">Early Access</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;