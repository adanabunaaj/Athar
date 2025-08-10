import Link from 'next/link';
import { Mail, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-accent-gold to-secondary-terracotta rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-2xl font-bold">Athar</span>
            </div>
            <p className="text-neutral-cream max-w-md mb-6">
              Building a supportive community where Palestinian youth can thrive through 
              collective growth, meaningful dialogue, and shared success.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:hello@athar.org" 
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200"
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
                <Link href="#why" className="text-neutral-cream hover:text-accent-gold transition-colors duration-200">
                  Why
                </Link>
              </li>
              <li>
                <Link href="#how" className="text-neutral-cream hover:text-accent-gold transition-colors duration-200">
                  How
                </Link>
              </li>
              <li>
                <Link href="#vision" className="text-neutral-cream hover:text-accent-gold transition-colors duration-200">
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
                <Link href="#" className="text-neutral-cream hover:text-accent-gold transition-colors duration-200">
                  Join Community
                </Link>
              </li>
              <li>
                <Link href="#" className="text-neutral-cream hover:text-accent-gold transition-colors duration-200">
                  Share Your Story
                </Link>
              </li>
              <li>
                <Link href="#" className="text-neutral-cream hover:text-accent-gold transition-colors duration-200">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link href="#" className="text-neutral-cream hover:text-accent-gold transition-colors duration-200">
                  Donate
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-neutral-cream">
            © 2025 Athar Initiative. Building solidarity towards collective success.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;