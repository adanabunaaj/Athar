import Link from 'next/link';
import { Mail, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="text-white bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div 
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #6B0504 0%, #FD9635 100%)' }}
              >
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-2xl font-bold">Athar</span>
            </div>
            <p 
              className="max-w-md mb-6"
              style={{ color: '#FBFFFE' }}
            >
              Building a supportive community where Palestinian youth can thrive through 
              collective growth, meaningful dialogue, and shared success.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:hello@athar.org" 
                className="p-2 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-colors duration-200"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="#why" 
                  className="hover:opacity-80 transition-opacity duration-200"
                  style={{ color: '#FBFFFE' }}
                >
                  Why
                </Link>
              </li>
              <li>
                <Link 
                  href="#how" 
                  className="hover:opacity-80 transition-opacity duration-200"
                  style={{ color: '#FBFFFE' }}
                >
                  How
                </Link>
              </li>
              <li>
                <Link 
                  href="#vision" 
                  className="hover:opacity-80 transition-opacity duration-200"
                  style={{ color: '#FBFFFE' }}
                >
                  Vision
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get Involved</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="#" 
                  className="hover:opacity-80 transition-opacity duration-200"
                  style={{ color: '#FBFFFE' }}
                >
                  Join Community
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="hover:opacity-80 transition-opacity duration-200"
                  style={{ color: '#FBFFFE' }}
                >
                  Share Your Story
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="hover:opacity-80 transition-opacity duration-200"
                  style={{ color: '#FBFFFE' }}
                >
                  Volunteer
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="hover:opacity-80 transition-opacity duration-200"
                  style={{ color: '#FBFFFE' }}
                >
                  Donate
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div 
          className="border-t mt-8 pt-8 text-center"
          style={{ borderColor: 'rgba(251, 255, 254, 0.2)' }}
        >
          <p style={{ color: '#FBFFFE' }}>
            © 2025 Athar Initiative. Building solidarity towards collective success.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;