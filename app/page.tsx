'use client';
import { ArrowRight, Users, MessageCircle, BookOpen, HandFist } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from './components/LanguageContext';

export default function HomePage() {
  const { language, t, theme } = useLanguage();

  return (
    <div 
      className={`min-h-screen ${language === 'ar' ? 'rtl' : 'ltr'}`} 
      style={{ backgroundColor: theme.colors.background.main } as React.CSSProperties}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* Hero Section */}
      <section 
        className="relative overflow-hidden py-20 lg:py-32"
        style={{ background: theme.gradients.hero } as React.CSSProperties}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className={`text-5xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg ${language === 'ar' ? 'font-arabic' : ''}`}>
              {t.title}
            </h1>
            <p className={`text-3xl lg:text-4xl font-bold text-white mb-8 max-w-3xl mx-auto drop-shadow-md ${language === 'ar' ? 'font-arabic' : ''}`}>
              {t.subtitle}
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center ${language === 'ar' ? 'sm:flex-row-reverse' : ''}`}>
              <Link 
                href="#about" 
                className={`text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 ${language === 'ar' ? 'flex-row-reverse' : ''}`}
                style={{ backgroundColor: theme.colors.secondary.main } as React.CSSProperties}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = theme.colors.secondary.dark)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = theme.colors.secondary.main)}
              >
                {t.learnMore} <ArrowRight className={`w-5 h-5 ${language === 'ar' ? 'rotate-180' : ''}`} />
              </Link>
              <Link 
                href="/join" 
                className="border-2 border-white text-white hover:bg-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 backdrop-blur-sm hover:scale-105"
                style={{ 
                  borderColor: 'white',
                  color: 'white'
                } as React.CSSProperties}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.style.color = theme.colors.primary.main;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'white';
                }}
              >
                {t.joinCommunity}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section 
        id="about" 
        className="py-20"
        style={{ backgroundColor: theme.colors.background.white } as React.CSSProperties}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 
            className={`text-4xl font-bold mb-8 ${language === 'ar' ? 'font-arabic' : ''}`}
            style={{ color: theme.colors.background.gray[900] } as React.CSSProperties}
          >
            {t.whatBuilding}
          </h2>
          <p 
            className={`text-xl max-w-4xl mx-auto leading-relaxed ${language === 'ar' ? 'font-arabic text-right' : 'text-left'}`}
            style={{ color: theme.colors.background.gray[600] } as React.CSSProperties}
          >
            {t.aboutDescription}
          </p>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section 
        id="why" 
        className="py-20"
        style={{ backgroundColor: theme.colors.background.main } as React.CSSProperties}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className={`text-4xl font-bold mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}
              style={{ color: theme.colors.background.gray[900] } as React.CSSProperties}
            >
              {t.whyMatters}
            </h2>
            <p 
              className={`text-lg max-w-3xl mx-auto ${language === 'ar' ? 'font-arabic' : ''}`}
              style={{ color: theme.colors.background.gray[600] } as React.CSSProperties}
            >
              {t.whyDescription}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Support & Belonging */}
            <div 
              className="p-8 rounded-2xl hover:shadow-lg transition-all duration-300 border hover:scale-105"
              style={{ 
                backgroundColor: theme.colors.background.white,
                borderColor: theme.colors.background.gray[200]
              } as React.CSSProperties}
            >
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-md"
                style={{ backgroundColor: theme.colors.primary.main } as React.CSSProperties}
              >
                <HandFist className="w-6 h-6 text-white" />
              </div>
              <h3 
                className={`text-xl font-bold mb-3 ${language === 'ar' ? 'font-arabic text-right' : 'text-left'}`}
                style={{ color: theme.colors.background.gray[900] } as React.CSSProperties}
              >
                {t.supportBelonging}
              </h3>
              <p 
                className={`${language === 'ar' ? 'font-arabic text-right' : 'text-left'}`}
                style={{ color: theme.colors.background.gray[600] } as React.CSSProperties}
              >
                {t.supportDesc}
              </p>
            </div>

            {/* Role Models */}
            <div 
              className="p-8 rounded-2xl hover:shadow-lg transition-all duration-300 border hover:scale-105"
              style={{ 
                backgroundColor: theme.colors.background.white,
                borderColor: theme.colors.background.gray[200]
              } as React.CSSProperties}
            >
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-md"
                style={{ backgroundColor: theme.colors.secondary.main } as React.CSSProperties}
              >
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 
                className={`text-xl font-bold mb-3 ${language === 'ar' ? 'font-arabic text-right' : 'text-left'}`}
                style={{ color: theme.colors.background.gray[900] } as React.CSSProperties}
              >
                {t.roleModels}
              </h3>
              <p 
                className={`${language === 'ar' ? 'font-arabic text-right' : 'text-left'}`}
                style={{ color: theme.colors.background.gray[600] } as React.CSSProperties}
              >
                {t.roleModelsDesc}
              </p>
            </div>

            {/* Survival Mindset */}
            <div 
              className="p-8 rounded-2xl hover:shadow-lg transition-all duration-300 border hover:scale-105"
              style={{ 
                backgroundColor: theme.colors.background.white,
                borderColor: theme.colors.background.gray[200]
              } as React.CSSProperties}
            >
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-md"
                style={{ backgroundColor: theme.colors.background.gray[800] } as React.CSSProperties}
              >
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 
                className={`text-xl font-bold mb-3 ${language === 'ar' ? 'font-arabic text-right' : 'text-left'}`}
                style={{ color: theme.colors.background.gray[900] } as React.CSSProperties}
              >
                {t.survivalMindset}
              </h3>
              <p 
                className={`${language === 'ar' ? 'font-arabic text-right' : 'text-left'}`}
                style={{ color: theme.colors.background.gray[600] } as React.CSSProperties}
              >
                {t.survivalDesc}
              </p>
            </div>

            {/* Public Spaces */}
            <div 
              className="p-8 rounded-2xl hover:shadow-lg transition-all duration-300 border hover:scale-105"
              style={{ 
                backgroundColor: theme.colors.background.white,
                borderColor: theme.colors.background.gray[200]
              } as React.CSSProperties}
            >
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-md"
                style={{ backgroundColor: theme.colors.secondary.main } as React.CSSProperties}
              >
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 
                className={`text-xl font-bold mb-3 ${language === 'ar' ? 'font-arabic text-right' : 'text-left'}`}
                style={{ color: theme.colors.background.gray[900] } as React.CSSProperties}
              >
                {t.publicSpaces}
              </h3>
              <p 
                className={`${language === 'ar' ? 'font-arabic text-right' : 'text-left'}`}
                style={{ color: theme.colors.background.gray[600] } as React.CSSProperties}
              >
                {t.publicSpacesDesc}
              </p>
            </div>

            {/* Agency & Voice */}
            <div 
              className="p-8 rounded-2xl hover:shadow-lg transition-all duration-300 border md:col-span-2 lg:col-span-1 hover:scale-105"
              style={{ 
                backgroundColor: theme.colors.background.white,
                borderColor: theme.colors.background.gray[200]
              } as React.CSSProperties}
            >
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-md"
                style={{ backgroundColor: theme.colors.primary.main } as React.CSSProperties}
              >
                <ArrowRight className="w-6 h-6 text-white" />
              </div>
              <h3 
                className={`text-xl font-bold mb-3 ${language === 'ar' ? 'font-arabic text-right' : 'text-left'}`}
                style={{ color: theme.colors.background.gray[900] } as React.CSSProperties}
              >
                {t.agencyVoice}
              </h3>
              <p 
                className={`${language === 'ar' ? 'font-arabic text-right' : 'text-left'}`}
                style={{ color: theme.colors.background.gray[600] } as React.CSSProperties}
              >
                {t.agencyDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Operate Section */}
      <section 
        id="how" 
        className="py-20"
        style={{ backgroundColor: theme.colors.background.white } as React.CSSProperties}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className={`text-4xl font-bold mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}
              style={{ color: theme.colors.background.gray[900] } as React.CSSProperties}
            >
              {t.howOperate}
            </h2>
            <p 
              className={`text-lg ${language === 'ar' ? 'font-arabic' : ''}`}
              style={{ color: theme.colors.background.gray[600] } as React.CSSProperties}
            >
              {t.howDescription}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Dialogue */}
            <div 
              className="text-center p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border hover:scale-105"
              style={{ 
                backgroundColor: theme.colors.background.main,
                borderColor: theme.colors.background.gray[200]
              } as React.CSSProperties}
            >
              <div 
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                style={{ backgroundColor: theme.colors.primary.main } as React.CSSProperties}
              >
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              <h3 
                className={`text-2xl font-bold mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}
                style={{ color: theme.colors.background.gray[900] } as React.CSSProperties}
              >
                {t.dialogue}
              </h3>
              <p 
                className={`${language === 'ar' ? 'font-arabic text-right' : 'text-left'}`}
                style={{ color: theme.colors.background.gray[600] } as React.CSSProperties}
              >
                {t.dialogueDesc}
              </p>
            </div>

            {/* Support */}
            <div 
              className="text-center p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border hover:scale-105"
              style={{ 
                backgroundColor: theme.colors.background.main,
                borderColor: theme.colors.background.gray[200]
              } as React.CSSProperties}
            >
              <div 
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                style={{ backgroundColor: theme.colors.secondary.main } as React.CSSProperties}
              >
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 
                className={`text-2xl font-bold mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}
                style={{ color: theme.colors.background.gray[900] } as React.CSSProperties}
              >
                {t.support}
              </h3>
              <p 
                className={`${language === 'ar' ? 'font-arabic text-right' : 'text-left'}`}
                style={{ color: theme.colors.background.gray[600] } as React.CSSProperties}
              >
                {t.supportDesc}
              </p>
            </div>

            {/* Storytelling */}
            <div 
              className="text-center p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border hover:scale-105"
              style={{ 
                backgroundColor: theme.colors.background.main,
                borderColor: theme.colors.background.gray[200]
              } as React.CSSProperties}
            >
              <div 
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                style={{ backgroundColor: theme.colors.background.gray[800] } as React.CSSProperties}
              >
                <BookOpen className="w-10 h-10 text-white" />
              </div>
              <h3 
                className={`text-2xl font-bold mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}
                style={{ color: theme.colors.background.gray[900] } as React.CSSProperties}
              >
                {t.storytelling}
              </h3>
              <p 
                className={`${language === 'ar' ? 'font-arabic text-right' : 'text-left'}`}
                style={{ color: theme.colors.background.gray[600] } as React.CSSProperties}
              >
                {t.storytellingDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Tools Section */}
      <section 
        className="py-20"
        style={{ backgroundColor: theme.colors.background.gray[900] } as React.CSSProperties}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold text-white mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}>
              {t.keyTools}
            </h2>
            <p 
              className={`text-lg ${language === 'ar' ? 'font-arabic' : ''}`}
              style={{ color: theme.colors.background.gray[300] } as React.CSSProperties}
            >
              {t.keyToolsDesc}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div 
              className="p-6 rounded-lg text-center hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
              style={{ backgroundColor: theme.colors.background.white } as React.CSSProperties}
            >
              <h3 
                className={`text-lg font-semibold mb-2 ${language === 'ar' ? 'font-arabic' : ''}`}
                style={{ color: theme.colors.background.gray[900] } as React.CSSProperties}
              >
                {t.webinarWorkshops}
              </h3>
              <p 
                className={`text-sm ${language === 'ar' ? 'font-arabic text-right' : 'text-left'}`}
                style={{ color: theme.colors.background.gray[600] } as React.CSSProperties}
              >
                {t.webinarDesc}
              </p>
            </div>

            <div 
              className="p-6 rounded-lg text-center hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
              style={{ backgroundColor: theme.colors.background.white } as React.CSSProperties}
            >
              <h3 
                className={`text-lg font-semibold mb-2 ${language === 'ar' ? 'font-arabic' : ''}`}
                style={{ color: theme.colors.background.gray[900] } as React.CSSProperties}
              >
                {t.communityDiscussions}
              </h3>
              <p 
                className={`text-sm ${language === 'ar' ? 'font-arabic text-right' : 'text-left'}`}
                style={{ color: theme.colors.background.gray[600] } as React.CSSProperties}
              >
                {t.communityDesc}
              </p>
            </div>

            <div 
              className="p-6 rounded-lg text-center hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
              style={{ backgroundColor: theme.colors.background.white } as React.CSSProperties}
            >
              <h3 
                className={`text-lg font-semibold mb-2 ${language === 'ar' ? 'font-arabic' : ''}`}
                style={{ color: theme.colors.background.gray[900] } as React.CSSProperties}
              >
                {t.digitalMagazine}
              </h3>
              <p 
                className={`text-sm ${language === 'ar' ? 'font-arabic text-right' : 'text-left'}`}
                style={{ color: theme.colors.background.gray[600] } as React.CSSProperties}
              >
                {t.magazineDesc}
              </p>
            </div>

            <div 
              className="p-6 rounded-lg text-center hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
              style={{ backgroundColor: theme.colors.background.white } as React.CSSProperties}
            >
              <h3 
                className={`text-lg font-semibold mb-2 ${language === 'ar' ? 'font-arabic' : ''}`}
                style={{ color: theme.colors.background.gray[900] } as React.CSSProperties}
              >
                {t.scholarshipFundraising}
              </h3>
              <p 
                className={`text-sm ${language === 'ar' ? 'font-arabic text-right' : 'text-left'}`}
                style={{ color: theme.colors.background.gray[600] } as React.CSSProperties}
              >
                {t.scholarshipDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section 
        id="vision" 
        className="py-20 relative overflow-hidden"
        style={{ background: theme.gradients.secondary } as React.CSSProperties}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-4xl font-bold text-white mb-8 drop-shadow-md ${language === 'ar' ? 'font-arabic' : ''}`}>
            {t.changeWish}
          </h2>
          <p className={`text-xl text-white text-opacity-95 max-w-4xl mx-auto mb-8 drop-shadow-sm ${language === 'ar' ? 'font-arabic text-right' : 'text-left'}`}>
            {t.visionDescription}
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${language === 'ar' ? 'sm:flex-row-reverse' : ''}`}>
            <Link 
              href="/join" 
              className="px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              style={{ 
                backgroundColor: theme.colors.background.white, 
                color: theme.colors.background.gray[900] 
              } as React.CSSProperties}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = theme.colors.primary.light;
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = theme.colors.background.white;
                e.currentTarget.style.color = theme.colors.background.gray[900];
              }}
            >
              {t.joinCommunity}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}