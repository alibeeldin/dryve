import React from 'react';
import { Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <img 
              src="/dryve.svg" 
              alt="DRYVE" 
              className="h-10 w-auto opacity-90"
            />
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a 
              href="https://instagram.com/dryvemtl" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300"
            >
              <Instagram size={20} />
              <span className="text-sm">@dryvemtl</span>
            </a>
            <a 
              href="mailto:hello@dryvemtl.com"
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300"
            >
              <Mail size={20} />
              <span className="text-sm">hello@dryvemtl.com</span>
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-400">
              © 2025 DRYVE. Montreal, QC.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;