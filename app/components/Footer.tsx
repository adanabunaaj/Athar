'use client';
import Link from 'next/link';
import { Mail, Instagram, Twitter } from 'lucide-react';
import { useLanguage } from './LanguageContext'; // Adjust import path as needed

const Footer = () => {
  const { language, t } = useLanguage();

  return (
    <footer 
      className={`text-white bg-black ${language === 'ar' ? 'rtl' : 'ltr'}`}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className={`flex items-center mb-4 ${language === 'ar' ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
              <div 
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #6B0504 0%, #FD9635 100%)' }}
              >
                <span className="text-white font-bold text-sm">
                  {language === 'ar' ? 'أ' : 'A'}
                </span>
              </div>
              <span className={`text-2xl font-bold ${language === 'ar' ? 'font-arabic' : ''}`}>
                {t.title}
              </span>
            </div>
            <p 
              className={`max-w-md mb-6 ${language === 'ar' ? 'font-arabic text-right' : 'text-left'}`}
              style={{ color: '#FBFFFE' }}
            >
              {t.footerDescription}
            </p>
            <div className={`flex ${language === 'ar' ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
              <a 
                href={`mailto:${t.emailAddress}`}
                className="p-2 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-colors duration-200"
                title={t.emailUs}
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-colors duration-200"
                title={t.followInstagram}
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-colors duration-200"
                title={t.followTwitter}
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${language === 'ar' ? 'font-arabic text-right' : 'text-left'}`}>
              {t.quickLinks}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="#why" 
                  className={`hover:opacity-80 transition-opacity duration-200 ${language === 'ar' ? 'font-arabic' : ''}`}
                  style={{ color: '#FBFFFE' }}
                >
                  {t.why}
                </Link>
              </li>
              <li>
                <Link 
                  href="#how" 
                  className={`hover:opacity-80 transition-opacity duration-200 ${language === 'ar' ? 'font-arabic' : ''}`}
                  style={{ color: '#FBFFFE' }}
                >
                  {t.how}
                </Link>
              </li>
              <li>
                <Link 
                  href="#vision" 
                  className={`hover:opacity-80 transition-opacity duration-200 ${language === 'ar' ? 'font-arabic' : ''}`}
                  style={{ color: '#FBFFFE' }}
                >
                  {t.vision}
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${language === 'ar' ? 'font-arabic text-right' : 'text-left'}`}>
              {t.getInvolved}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/join" 
                  className={`hover:opacity-80 transition-opacity duration-200 ${language === 'ar' ? 'font-arabic' : ''}`}
                  style={{ color: '#FBFFFE' }}
                >
                  {t.joinCommunity}
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className={`hover:opacity-80 transition-opacity duration-200 ${language === 'ar' ? 'font-arabic' : ''}`}
                  style={{ color: '#FBFFFE' }}
                >
                  {t.shareStory}
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className={`hover:opacity-80 transition-opacity duration-200 ${language === 'ar' ? 'font-arabic' : ''}`}
                  style={{ color: '#FBFFFE' }}
                >
                  {t.volunteer}
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className={`hover:opacity-80 transition-opacity duration-200 ${language === 'ar' ? 'font-arabic' : ''}`}
                  style={{ color: '#FBFFFE' }}
                >
                  {t.donate}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div 
          className={`border-t mt-8 pt-8 text-center ${language === 'ar' ? 'font-arabic' : ''}`}
          style={{ borderColor: 'rgba(251, 255, 254, 0.2)' }}
        >
          <p style={{ color: '#FBFFFE' }}>
            {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;