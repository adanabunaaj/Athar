'use client';
import Link from 'next/link';
import { Mail, Instagram, Twitter } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const Footer = () => {
  const { language, t, theme } = useLanguage();

  return (
    <footer 
      className={`text-white ${language === 'ar' ? 'rtl' : 'ltr'}`}
      style={{ backgroundColor: theme.colors.background.gray[900] } as React.CSSProperties}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className={`flex items-center mb-4 ${language === 'ar' ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
              <img
                src="/Sada_logo.JPG"
                alt="Saddah Logo"
                className="w-8 h-8 rounded-lg object-cover shadow-lg"
              />
              <span className={`text-2xl font-bold ${language === 'ar' ? 'font-arabic' : ''}`}>
                {t.title}
              </span>
            </div>
            <p 
              className={`max-w-md mb-6 leading-relaxed ${language === 'ar' ? 'font-arabic text-right' : 'text-left'}`}
              style={{ color: theme.colors.background.gray[300] } as React.CSSProperties}
            >
              {t.footerDescription}
            </p>
            <div className={`flex ${language === 'ar' ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
                <a 
                  href="mailto:saddah.info@gmail.com"
                  className="p-2 rounded-lg transition-all duration-200 hover:scale-110"
                  style={{ 
                    backgroundColor: `${theme.colors.primary.main}20`,
                    color: theme.colors.primary.light
                  } as React.CSSProperties}
                  title={t.emailUs}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = theme.colors.primary.main;
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = `${theme.colors.primary.main}20`;
                    e.currentTarget.style.color = theme.colors.primary.light;
                  }}
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a 
                  href="https://instagram.com/saddah.echo" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg transition-all duration-200 hover:scale-110"
                  style={{ 
                    backgroundColor: `${theme.colors.secondary.main}20`,
                    color: theme.colors.secondary.light
                  } as React.CSSProperties}
                  title={t.followInstagram}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = theme.colors.secondary.main;
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = `${theme.colors.secondary.main}20`;
                    e.currentTarget.style.color = theme.colors.secondary.light;
                  }}
                >
                  <Instagram className="w-5 h-5" />
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
                  className={`transition-all duration-200 hover:scale-105 ${language === 'ar' ? 'font-arabic' : ''}`}
                  style={{ color: theme.colors.background.gray[300] } as React.CSSProperties}
                  onMouseEnter={(e) => (e.currentTarget.style.color = theme.colors.primary.light)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = theme.colors.background.gray[300])}
                >
                  {t.why}
                </Link>
              </li>
              <li>
                <Link 
                  href="#how" 
                  className={`transition-all duration-200 hover:scale-105 ${language === 'ar' ? 'font-arabic' : ''}`}
                  style={{ color: theme.colors.background.gray[300] } as React.CSSProperties}
                  onMouseEnter={(e) => (e.currentTarget.style.color = theme.colors.primary.light)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = theme.colors.background.gray[300])}
                >
                  {t.how}
                </Link>
              </li>

              <li>
                <Link 
                  href="#programs" 
                  className={`transition-all duration-200 hover:scale-105 ${language === 'ar' ? 'font-arabic' : ''}`}
                  style={{ color: theme.colors.background.gray[300] } as React.CSSProperties}
                  onMouseEnter={(e) => (e.currentTarget.style.color = theme.colors.primary.light)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = theme.colors.background.gray[300])}
                >
                  {t.programs}
                </Link>
              </li>
              <li>
                <Link 
                  href="#vision" 
                  className={`transition-all duration-200 hover:scale-105 ${language === 'ar' ? 'font-arabic' : ''}`}
                  style={{ color: theme.colors.background.gray[300] } as React.CSSProperties}
                  onMouseEnter={(e) => (e.currentTarget.style.color = theme.colors.primary.light)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = theme.colors.background.gray[300])}
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
                  className={`transition-all duration-200 hover:scale-105 ${language === 'ar' ? 'font-arabic' : ''}`}
                  style={{ color: theme.colors.background.gray[300] } as React.CSSProperties}
                  onMouseEnter={(e) => (e.currentTarget.style.color = theme.colors.secondary.light)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = theme.colors.background.gray[300])}
                >
                  {t.joinCommunity}
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className={`transition-all duration-200 hover:scale-105 ${language === 'ar' ? 'font-arabic' : ''}`}
                  style={{ color: theme.colors.background.gray[300] } as React.CSSProperties}
                  onMouseEnter={(e) => (e.currentTarget.style.color = theme.colors.secondary.light)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = theme.colors.background.gray[300])}
                >
                  {t.shareStory}
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className={`transition-all duration-200 hover:scale-105 ${language === 'ar' ? 'font-arabic' : ''}`}
                  style={{ color: theme.colors.background.gray[300] } as React.CSSProperties}
                  onMouseEnter={(e) => (e.currentTarget.style.color = theme.colors.secondary.light)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = theme.colors.background.gray[300])}
                >
                  {t.volunteer}
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className={`transition-all duration-200 hover:scale-105 ${language === 'ar' ? 'font-arabic' : ''}`}
                  style={{ color: theme.colors.background.gray[300] } as React.CSSProperties}
                  onMouseEnter={(e) => (e.currentTarget.style.color = theme.colors.secondary.light)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = theme.colors.background.gray[300])}
                >
                  {t.donate}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div 
          className={`border-t mt-8 pt-8 text-center ${language === 'ar' ? 'font-arabic' : ''}`}
          style={{ borderColor: theme.colors.background.gray[700] } as React.CSSProperties}
        >
          <p style={{ color: theme.colors.background.gray[400] } as React.CSSProperties}>
            {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;