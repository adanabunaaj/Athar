'use client';
import { ArrowRight, Users, MessageCircle, BookOpen, HandFist } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from './components/LanguageContext';

export default function HomePage() {
  const { language, t } = useLanguage();

  return (
    <div className={`min-h-screen bg-gray-50 ${language === 'ar' ? 'rtl' : 'ltr'}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section 
        className="relative overflow-hidden py-20 lg:py-32"
        style={{
          background: 'linear-gradient(135deg, #6B0504 0%, #8b1008 50%, #6B0504 100%)'
        }}
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
                className={`text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl ${language === 'ar' ? 'flex-row-reverse' : ''}`}
                style={{
                  backgroundColor: '#FD9635',
                }}
              >
                {t.learnMore} <ArrowRight className={`w-5 h-5 ${language === 'ar' ? 'rotate-180' : ''}`} />
              </Link>
              <Link 
                href="/join" 
                className="border-2 border-white text-white hover:bg-white hover:text-red-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 backdrop-blur-sm"
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
        style={{ backgroundColor: '#FBFFFE' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-4xl font-bold mb-8 text-black ${language === 'ar' ? 'font-arabic' : ''}`}>
            {t.whatBuilding}
          </h2>
          <p className={`text-xl max-w-4xl mx-auto leading-relaxed text-gray-600 ${language === 'ar' ? 'font-arabic text-right' : 'text-left'}`}>
            {t.aboutDescription}
          </p>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section id="why" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 text-black ${language === 'ar' ? 'font-arabic' : ''}`}>
              {t.whyMatters}
            </h2>
            <p className={`text-lg text-gray-600 max-w-3xl mx-auto ${language === 'ar' ? 'font-arabic' : ''}`}>
              {t.whyDescription}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div 
              className="p-8 rounded-2xl hover:shadow-lg transition-all duration-300 border border-gray-200"
              style={{ backgroundColor: '#FBFFFE' }}
            >
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-md"
                style={{ backgroundColor: '#6B0504' }}
              >
                <HandFist className="w-6 h-6 text-white" />
              </div>
              <h3 className={`text-xl font-bold mb-3 text-black ${language === 'ar' ? 'font-arabic text-right' : 'text-left'}`}>
                {t.supportBelonging}
              </h3>
              <p className={`text-gray-600 ${language === 'ar' ? 'font-arabic text-right' : 'text-left'}`}>
                {t.supportDesc}
              </p>
            </div>

            <div 
              className="p-8 rounded-2xl hover:shadow-lg transition-all duration-300 border border-gray-200"
              style={{ backgroundColor: '#FBFFFE' }}
            >
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-md"
                style={{ backgroundColor: '#FD9635' }}
              >
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className={`text-xl font-bold mb-3 text-black ${language === 'ar' ? 'font-arabic text-right' : 'text-left'}`}>
                {t.roleModels}
              </h3>
              <p className={`text-gray-600 ${language === 'ar' ? 'font-arabic text-right' : 'text-left'}`}>
                {t.roleModelsDesc}
              </p>
            </div>

            <div 
              className="p-8 rounded-2xl hover:shadow-lg transition-all duration-300 border border-gray-200"
              style={{ backgroundColor: '#FBFFFE' }}
            >
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-md bg-black"
              >
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className={`text-xl font-bold mb-3 text-black ${language === 'ar' ? 'font-arabic text-right' : 'text-left'}`}>
                {t.survivalMindset}
              </h3>
              <p className={`text-gray-600 ${language === 'ar' ? 'font-arabic text-right' : 'text-left'}`}>
                {t.survivalDesc}
              </p>
            </div>

            <div 
              className="p-8 rounded-2xl hover:shadow-lg transition-all duration-300 border border-gray-200"
              style={{ backgroundColor: '#FBFFFE' }}
            >
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-md"
                style={{ backgroundColor: '#FD9635' }}
              >
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className={`text-xl font-bold mb-3 text-black ${language === 'ar' ? 'font-arabic text-right' : 'text-left'}`}>
                {t.publicSpaces}
              </h3>
              <p className={`text-gray-600 ${language === 'ar' ? 'font-arabic text-right' : 'text-left'}`}>
                {t.publicSpacesDesc}
              </p>
            </div>

            <div 
              className="p-8 rounded-2xl hover:shadow-lg transition-all duration-300 border border-gray-200 md:col-span-2 lg:col-span-1"
              style={{ backgroundColor: '#FBFFFE' }}
            >
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-md"
                style={{ backgroundColor: '#6B0504' }}
              >
                <ArrowRight className="w-6 h-6 text-white" />
              </div>
              <h3 className={`text-xl font-bold mb-3 text-black ${language === 'ar' ? 'font-arabic text-right' : 'text-left'}`}>
                {t.agencyVoice}
              </h3>
              <p className={`text-gray-600 ${language === 'ar' ? 'font-arabic text-right' : 'text-left'}`}>
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
        style={{ backgroundColor: '#FBFFFE' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 text-black ${language === 'ar' ? 'font-arabic' : ''}`}>
              {t.howOperate}
            </h2>
            <p className={`text-lg text-gray-600 ${language === 'ar' ? 'font-arabic' : ''}`}>
              {t.howDescription}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
              <div 
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                style={{ backgroundColor: '#6B0504' }}
              >
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className={`text-2xl font-bold mb-4 text-black ${language === 'ar' ? 'font-arabic' : ''}`}>
                {t.dialogue}
              </h3>
              <p className={`text-gray-600 ${language === 'ar' ? 'font-arabic text-right' : 'text-left'}`}>
                {t.dialogueDesc}
              </p>
            </div>

            <div className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg bg-black">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className={`text-2xl font-bold mb-4 text-black ${language === 'ar' ? 'font-arabic' : ''}`}>
                {t.support}
              </h3>
              <p className={`text-gray-600 ${language === 'ar' ? 'font-arabic text-right' : 'text-left'}`}>
                {t.supportDesc}
              </p>
            </div>

            <div className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
              <div 
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                style={{ backgroundColor: '#FD9635' }}
              >
                <BookOpen className="w-10 h-10 text-white" />
              </div>
              <h3 className={`text-2xl font-bold mb-4 text-black ${language === 'ar' ? 'font-arabic' : ''}`}>
                {t.storytelling}
              </h3>
              <p className={`text-gray-600 ${language === 'ar' ? 'font-arabic text-right' : 'text-left'}`}>
                {t.storytellingDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Tools Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold text-white mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}>
              {t.keyTools}
            </h2>
            <p className={`text-lg text-gray-300 ${language === 'ar' ? 'font-arabic' : ''}`}>
              {t.keyToolsDesc}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
              <h3 className={`text-lg font-semibold text-black mb-2 ${language === 'ar' ? 'font-arabic' : ''}`}>
                {t.webinarWorkshops}
              </h3>
              <p className={`text-gray-600 text-sm ${language === 'ar' ? 'font-arabic text-right' : 'text-left'}`}>
                {t.webinarDesc}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
              <h3 className={`text-lg font-semibold text-black mb-2 ${language === 'ar' ? 'font-arabic' : ''}`}>
                {t.communityDiscussions}
              </h3>
              <p className={`text-gray-600 text-sm ${language === 'ar' ? 'font-arabic text-right' : 'text-left'}`}>
                {t.communityDesc}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
              <h3 className={`text-lg font-semibold text-black mb-2 ${language === 'ar' ? 'font-arabic' : ''}`}>
                {t.digitalMagazine}
              </h3>
              <p className={`text-gray-600 text-sm ${language === 'ar' ? 'font-arabic text-right' : 'text-left'}`}>
                {t.magazineDesc}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
              <h3 className={`text-lg font-semibold text-black mb-2 ${language === 'ar' ? 'font-arabic' : ''}`}>
                {t.scholarshipFundraising}
              </h3>
              <p className={`text-gray-600 text-sm ${language === 'ar' ? 'font-arabic text-right' : 'text-left'}`}>
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
        style={{ background: 'linear-gradient(135deg, #FD9635 0%, #ffb366 50%, #FD9635 100%)' }}
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
              className="px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              style={{ 
                backgroundColor: '#FBFFFE', 
                color: '#000000' 
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