'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="text-2xl font-bold text-gray-800">Athar</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="#why" 
              className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
            >
              Why
            </Link>
            <Link 
              href="#how" 
              className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
            >
              How
            </Link>
            <Link 
              href="#vision" 
              className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
            >
              Vision
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Link 
              href="#how" 
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              Join Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-800"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg border-b border-gray-200">
            <nav className="flex flex-col space-y-4 px-4 py-6">
              <Link 
                href="#why" 
                className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Why
              </Link>
              <Link 
                href="#how" 
                className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                How
              </Link>
              <Link 
                href="#vision" 
                className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Vision
              </Link>
              <Link 
                href="#how" 
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 text-center mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Join Us
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;