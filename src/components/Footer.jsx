import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud, Brain, Twitter, Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative">
                <Cloud className="h-8 w-8 text-blue-400" />
                <Brain className="h-4 w-4 text-emerald-400 absolute -top-1 -right-1" />
              </div>
              <span className="text-xl font-bold gradient-text">CloudAI</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Revolutionizing cloud management with AI-driven provisioning, multi-cloud cost analysis, and intelligent infrastructure optimization.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <span className="text-white font-semibold mb-4 block">Quick Links</span>
            <div className="space-y-2">
              <Link to="/product" className="text-gray-400 hover:text-emerald-400 transition-colors block">
                Product Features
              </Link>
              <Link to="/solutions" className="text-gray-400 hover:text-emerald-400 transition-colors block">
                Solutions
              </Link>
              <Link to="/documentation" className="text-gray-400 hover:text-emerald-400 transition-colors block">
                Documentation
              </Link>
              <Link to="/blog" className="text-gray-400 hover:text-emerald-400 transition-colors block">
                Blog
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <span className="text-white font-semibold mb-4 block">Company</span>
            <div className="space-y-2">
              <Link to="/about" className="text-gray-400 hover:text-emerald-400 transition-colors block">
                About Us
              </Link>
              <Link to="/investors" className="text-gray-400 hover:text-emerald-400 transition-colors block">
                Investors
              </Link>
              <Link to="/incubators" className="text-gray-400 hover:text-emerald-400 transition-colors block">
                Incubators
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-emerald-400 transition-colors block">
                Contact
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Concepts of Cloud. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;