// 'use client';
// import { useState } from 'react';
// import Link from 'next/link';
// import { Menu, X, Globe } from 'lucide-react';
// import { useLanguage } from './LanguageContext';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const { language, toggleLanguage, t, isLoaded } = useLanguage();

//   // Don't render until we've loaded the language preference to prevent flash
//   if (!isLoaded) {
//     return (
//       <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-95 backdrop-blur-sm border-b border-gray-200 z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             {/* Minimal loading state */}
//             <div className="flex items-center space-x-2">
//               <div
//                 className="w-8 h-8 rounded-lg flex items-center justify-center"
//                 style={{ background: 'linear-gradient(135deg, #6B0504 0%, #FD9635 100%)' }}
//               >
//                 <span className="text-white font-bold text-sm">S</span>
//               </div>
//               <span className="text-2xl font-bold text-black">Saddah</span>
//             </div>
//           </div>
//         </div>
//       </header>
//     );
//   }

//   return (
//     <header 
//       className={`fixed top-0 left-0 right-0 bg-white bg-opacity-95 backdrop-blur-sm border-b border-gray-200 z-50 ${language === 'ar' ? 'rtl' : 'ltr'}`}
//       dir={language === 'ar' ? 'rtl' : 'ltr'}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <Link href="/" className="flex items-center space-x-2">
//             <div
//               className="w-8 h-8 rounded-lg flex items-center justify-center"
//               style={{ background: 'linear-gradient(135deg, #6B0504 0%, #FD9635 100%)' }}
//             >
//               <span className="text-white font-bold text-sm">
//                 {language === 'ar' ? 'أ' : 'A'}
//               </span>
//             </div>
//             <span className="text-2xl font-bold text-black">
//               {t.title}
//             </span>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className={`hidden md:flex ${language === 'ar' ? 'space-x-reverse space-x-8' : 'space-x-8'}`}>
//             <Link
//               href="#why"
//               className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
//             >
//               {t.why}
//             </Link>
//             <Link
//               href="#how"
//               className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
//             >
//               {t.how}
//             </Link>
//             <Link
//               href="#vision"
//               className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
//             >
//               {t.vision}
//             </Link>
//           </nav>

//           {/* Language Toggle & CTA Button */}
//           <div className={`hidden md:flex items-center ${language === 'ar' ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
//             <button
//               onClick={toggleLanguage}
//               className={`flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-200 px-3 py-1 rounded-lg border border-gray-300 hover:border-gray-400 ${language === 'ar' ? 'space-x-reverse space-x-1' : 'space-x-1'}`}
//               title={language === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية'}
//             >
//               <Globe className="w-4 h-4" />
//               <span className="text-sm font-medium">
//                 {language === 'en' ? 'عربي' : 'EN'}
//               </span>
//             </button>
//             <Link
//               href="/join"
//               className="text-white px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-all duration-200"
//               style={{ backgroundColor: '#6B0504' }}
//             >
//               {t.joinUs}
//             </Link>
//           </div>

//           {/* Mobile menu button */}
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="md:hidden p-2 text-gray-600 hover:text-gray-800"
//           >
//             {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg border-b border-gray-200">
//             <nav className="flex flex-col space-y-4 px-4 py-6">
//               <Link
//                 href="#why"
//                 className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 {t.why}
//               </Link>
//               <Link
//                 href="#how"
//                 className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 {t.how}
//               </Link>
//               <Link
//                 href="#vision"
//                 className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 {t.vision}
//               </Link>
              
//               {/* Language Toggle for Mobile */}
//               <button
//                 onClick={() => {
//                   toggleLanguage();
//                   setIsMenuOpen(false);
//                 }}
//                 className={`flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-200 px-3 py-2 rounded-lg border border-gray-300 hover:border-gray-400 ${language === 'ar' ? 'space-x-reverse space-x-2' : 'space-x-2'}`}
//               >
//                 <Globe className="w-4 h-4" />
//                 <span className="text-sm font-medium">
//                   {language === 'en' ? 'عربي' : 'English'}
//                 </span>
//               </button>

//               <Link
//                 href="/join"
//                 className="text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 text-center mt-4"
//                 style={{ backgroundColor: '#6B0504' }}
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 {t.joinUs}
//               </Link>
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;


'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage, t, isLoaded, theme } = useLanguage();

  // Don't render until we've loaded the language preference to prevent flash
  if (!isLoaded) {
    return (
      <header 
        className="fixed top-0 left-0 right-0 bg-opacity-95 backdrop-blur-sm border-b z-50"
        style={{ 
          backgroundColor: `${theme.colors.background.main}F2`, // 95% opacity
          borderColor: theme.colors.background.gray[200]
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Minimal loading state */}
            <div className="flex items-center space-x-2">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: theme.gradients.accent }}
              >
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span 
                className="text-2xl font-bold"
                style={{ color: theme.colors.background.gray[900] }}
              >
                Saddah
              </span>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 bg-opacity-95 backdrop-blur-sm border-b z-50 ${language === 'ar' ? 'rtl' : 'ltr'}`}
      style={{ 
        backgroundColor: `${theme.colors.background.main}F2`, // 95% opacity
        borderColor: theme.colors.background.gray[200]
      }}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center shadow-md"
              style={{ background: theme.gradients.accent }}
            >
              <span className="text-white font-bold text-sm">
                {language === 'ar' ? 'ص' : 'S'}
              </span>
            </div>
            <span 
              className="text-2xl font-bold"
              style={{ color: theme.colors.background.gray[900] }}
            >
              {t.title}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className={`hidden md:flex ${language === 'ar' ? 'space-x-reverse space-x-8' : 'space-x-8'}`}>
            <Link
              href="#why"
              className="font-medium transition-colors duration-200 hover:scale-105"
              style={{ 
                color: theme.colors.background.gray[600],
              }}
              onMouseEnter={(e) => e.target.style.color = theme.colors.primary.main}
              onMouseLeave={(e) => e.target.style.color = theme.colors.background.gray[600]}
            >
              {t.why}
            </Link>
            <Link
              href="#how"
              className="font-medium transition-colors duration-200 hover:scale-105"
              style={{ 
                color: theme.colors.background.gray[600],
              }}
              onMouseEnter={(e) => e.target.style.color = theme.colors.primary.main}
              onMouseLeave={(e) => e.target.style.color = theme.colors.background.gray[600]}
            >
              {t.how}
            </Link>
            <Link
              href="#vision"
              className="font-medium transition-colors duration-200 hover:scale-105"
              style={{ 
                color: theme.colors.background.gray[600],
              }}
              onMouseEnter={(e) => e.target.style.color = theme.colors.primary.main}
              onMouseLeave={(e) => e.target.style.color = theme.colors.background.gray[600]}
            >
              {t.vision}
            </Link>
          </nav>

          {/* Language Toggle & CTA Button */}
          <div className={`hidden md:flex items-center ${language === 'ar' ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
            <button
              onClick={toggleLanguage}
              className={`flex items-center font-medium transition-all duration-200 px-3 py-1 rounded-lg border hover:scale-105 hover:shadow-md ${language === 'ar' ? 'space-x-reverse space-x-1' : 'space-x-1'}`}
              style={{
                color: theme.colors.background.gray[600],
                borderColor: theme.colors.background.gray[300],
                backgroundColor: theme.colors.background.white
              }}
              title={language === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية'}
              onMouseEnter={(e) => {
                e.target.style.borderColor = theme.colors.primary.main;
                e.target.style.color = theme.colors.primary.main;
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = theme.colors.background.gray[300];
                e.target.style.color = theme.colors.background.gray[600];
              }}
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">
                {language === 'en' ? 'عربي' : 'EN'}
              </span>
            </button>
            <Link
              href="/join"
              className="text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg"
              style={{ 
                backgroundColor: theme.colors.primary.main,
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = theme.colors.primary.dark}
              onMouseLeave={(e) => e.target.style.backgroundColor = theme.colors.primary.main}
            >
              {t.joinUs}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 transition-colors duration-200"
            style={{ color: theme.colors.background.gray[600] }}
            onMouseEnter={(e) => e.target.style.color = theme.colors.primary.main}
            onMouseLeave={(e) => e.target.style.color = theme.colors.background.gray[600]}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div 
            className="md:hidden absolute top-16 left-0 right-0 shadow-lg border-b"
            style={{ 
              backgroundColor: theme.colors.background.main,
              borderColor: theme.colors.background.gray[200]
            }}
          >
            <nav className="flex flex-col space-y-4 px-4 py-6">
              <Link
                href="#why"
                className="font-medium transition-colors duration-200"
                style={{ color: theme.colors.background.gray[600] }}
                onClick={() => setIsMenuOpen(false)}
                onMouseEnter={(e) => e.target.style.color = theme.colors.primary.main}
                onMouseLeave={(e) => e.target.style.color = theme.colors.background.gray[600]}
              >
                {t.why}
              </Link>
              <Link
                href="#how"
                className="font-medium transition-colors duration-200"
                style={{ color: theme.colors.background.gray[600] }}
                onClick={() => setIsMenuOpen(false)}
                onMouseEnter={(e) => e.target.style.color = theme.colors.primary.main}
                onMouseLeave={(e) => e.target.style.color = theme.colors.background.gray[600]}
              >
                {t.how}
              </Link>
              <Link
                href="#vision"
                className="font-medium transition-colors duration-200"
                style={{ color: theme.colors.background.gray[600] }}
                onClick={() => setIsMenuOpen(false)}
                onMouseEnter={(e) => e.target.style.color = theme.colors.primary.main}
                onMouseLeave={(e) => e.target.style.color = theme.colors.background.gray[600]}
              >
                {t.vision}
              </Link>
              
              {/* Language Toggle for Mobile */}
              <button
                onClick={() => {
                  toggleLanguage();
                  setIsMenuOpen(false);
                }}
                className={`flex items-center font-medium transition-all duration-200 px-3 py-2 rounded-lg border ${language === 'ar' ? 'space-x-reverse space-x-2' : 'space-x-2'}`}
                style={{
                  color: theme.colors.background.gray[600],
                  borderColor: theme.colors.background.gray[300],
                  backgroundColor: theme.colors.background.white
                }}
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">
                  {language === 'en' ? 'عربي' : 'English'}
                </span>
              </button>

              <Link
                href="/join"
                className="text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 text-center mt-4"
                style={{ backgroundColor: theme.colors.primary.main }}
                onClick={() => setIsMenuOpen(false)}
              >
                {t.joinUs}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;