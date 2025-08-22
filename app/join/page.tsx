'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Mail, User, MapPin, Calendar, Briefcase } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useLanguage } from '../components/LanguageContext'; // Adjust import path as needed

// 🔧 FILL THESE with your real values from EmailJS
const EMAILJS_PUBLIC_KEY  = 'udmTQ-e7BJ5FOPqLF';     // your Public Key
const EMAILJS_SERVICE_ID  = 'service_rwj7l4k';       // e.g. service_abc123
const EMAILJS_TEMPLATE_ID = 'template_fhvi9n8';       // your template id

export default function JoinPage() {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '', email: '', location: '', age: '', profession: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // init EmailJS once
  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
    // quick sanity logging in browser console
    console.log('EmailJS init ok:', !!EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(p => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();               // ⬅️ prevents the native GET /join?name=... submit
    setError(null);
    setIsSubmitting(true);

    try {
      // Send welcome email **to the user** (requires your template "To email" = {{to_email}})
      const res = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          to_email: formData.email,      // recipient
          to_name: formData.name,

          from_name: formData.name,      // use whatever your template expects
          from_email: formData.email,
          reply_to: formData.email,

          location: formData.location,
          age: formData.age,
          profession: formData.profession,
        }
      );
      console.log('EmailJS success:', res.status, res.text);
      setIsSubmitted(true);
    } catch (err: any) {
      console.error('EmailJS failed raw:', err);
      // EmailJS often returns an object with 'text' or 'message'
      const msg = err?.text || err?.message || 'Email failed. Check console.';
      setError(String(msg));
      setIsSubmitted(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div 
        className={`min-h-screen bg-gray-50 flex items-center justify-center pt-24 pb-12 px-4 sm:px-6 lg:px-8 ${language === 'ar' ? 'rtl' : 'ltr'}`}
        dir={language === 'ar' ? 'rtl' : 'ltr'}
      >
        <div className="max-w-md w-full space-y-8 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            <div className="mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-green-600" />
              </div>
              <h2 className={`text-3xl font-bold text-black ${language === 'ar' ? 'font-arabic' : ''}`}>
                {t.welcomeTitle}
              </h2>
              <p className={`text-gray-600 mt-2 ${language === 'ar' ? 'font-arabic text-right' : 'text-left'}`}>
                {t.welcomeMessage}
              </p>
            </div>
            <Link
              href="/"
              className={`inline-flex items-center gap-2 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${language === 'ar' ? 'flex-row-reverse' : ''}`}
              style={{ backgroundColor: '#FD9635' }}
            >
              <ArrowLeft className={`w-4 h-4 ${language === 'ar' ? 'rotate-180' : ''}`} />
              <span className={language === 'ar' ? 'font-arabic' : ''}>
                {t.backToHome}
              </span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`min-h-screen bg-gray-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8 ${language === 'ar' ? 'rtl' : 'ltr'}`}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className={`text-4xl font-bold text-black mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}>
            {t.joinTitle}
          </h1>
          <p className={`text-xl text-gray-600 ${language === 'ar' ? 'font-arabic' : ''}`}>
            {t.joinSubtitle}
          </p>
        </div>

        {error && (
          <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800">
            <p className={`font-semibold ${language === 'ar' ? 'font-arabic text-right' : 'text-left'}`}>
              {t.joinError}
            </p>
            <p className={`mt-1 ${language === 'ar' ? 'font-arabic text-right' : 'text-left'}`}>
              {error}
            </p>
            <p className={`mt-1 text-gray-600 ${language === 'ar' ? 'font-arabic text-right' : 'text-left'}`}>
              {t.joinErrorTip}
            </p>
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
          {/* IMPORTANT: no action/method here, we handle it in JS */}
          <form noValidate onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label 
                htmlFor="name" 
                className={`block text-sm font-medium text-black mb-2 ${language === 'ar' ? 'font-arabic text-right' : 'text-left'}`}
              >
                <User className={`w-4 h-4 inline ${language === 'ar' ? 'ml-2' : 'mr-2'}`} /> 
                {t.fullName} *
              </label>
              <input
                id="name" 
                name="name" 
                required 
                value={formData.name} 
                onChange={handleChange}
                className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors ${language === 'ar' ? 'text-right font-arabic' : 'text-left'}`}
                placeholder={t.fullNamePlaceholder}
                dir={language === 'ar' ? 'rtl' : 'ltr'}
              />
            </div>

            <div>
              <label 
                htmlFor="email" 
                className={`block text-sm font-medium text-black mb-2 ${language === 'ar' ? 'font-arabic text-right' : 'text-left'}`}
              >
                <Mail className={`w-4 h-4 inline ${language === 'ar' ? 'ml-2' : 'mr-2'}`} /> 
                {t.emailAddress} *
              </label>
              <input
                type="email" 
                id="email" 
                name="email" 
                required 
                value={formData.email} 
                onChange={handleChange}
                className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors ${language === 'ar' ? 'text-right font-arabic' : 'text-left'}`}
                placeholder={t.emailPlaceholder}
                dir={language === 'ar' ? 'rtl' : 'ltr'}
              />
            </div>

            <div>
              <label 
                htmlFor="location" 
                className={`block text-sm font-medium text-black mb-2 ${language === 'ar' ? 'font-arabic text-right' : 'text-left'}`}
              >
                <MapPin className={`w-4 h-4 inline ${language === 'ar' ? 'ml-2' : 'mr-2'}`} /> 
                {t.location} *
              </label>
              <input
                id="location" 
                name="location" 
                required 
                value={formData.location} 
                onChange={handleChange}
                className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors ${language === 'ar' ? 'text-right font-arabic' : 'text-left'}`}
                placeholder={t.locationPlaceholder}
                dir={language === 'ar' ? 'rtl' : 'ltr'}
              />
            </div>

            <div>
              <label 
                htmlFor="age" 
                className={`block text-sm font-medium text-black mb-2 ${language === 'ar' ? 'font-arabic text-right' : 'text-left'}`}
              >
                <Calendar className={`w-4 h-4 inline ${language === 'ar' ? 'ml-2' : 'mr-2'}`} /> 
                {t.age} *
              </label>
              <input
                type="number" 
                id="age" 
                name="age" 
                required 
                min={17} 
                max={60} 
                value={formData.age} 
                onChange={handleChange}
                className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors ${language === 'ar' ? 'text-right font-arabic' : 'text-left'}`}
                placeholder={t.agePlaceholder}
                dir={language === 'ar' ? 'rtl' : 'ltr'}
              />
            </div>

            <div>
              <label 
                htmlFor="profession" 
                className={`block text-sm font-medium text-black mb-2 ${language === 'ar' ? 'font-arabic text-right' : 'text-left'}`}
              >
                <Briefcase className={`w-4 h-4 inline ${language === 'ar' ? 'ml-2' : 'mr-2'}`} /> 
                {t.profession} *
              </label>
              <input
                id="profession" 
                name="profession" 
                required 
                value={formData.profession} 
                onChange={handleChange}
                className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors ${language === 'ar' ? 'text-right font-arabic' : 'text-left'}`}
                placeholder={t.professionPlaceholder}
                dir={language === 'ar' ? 'rtl' : 'ltr'}
              />
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className={`text-sm text-gray-600 ${language === 'ar' ? 'font-arabic text-right' : 'text-left'}`}>
                {t.privacyNotice}
              </p>
            </div>

            <div className={`flex gap-4 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
              <Link 
                href="/" 
                className={`flex-1 bg-gray-200 text-black px-6 py-3 rounded-lg font-medium transition-colors duration-200 hover:bg-gray-300 text-center ${language === 'ar' ? 'font-arabic' : ''}`}
              >
                {t.cancel}
              </Link>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`flex-1 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 disabled:opacity-50 ${language === 'ar' ? 'font-arabic' : ''}`}
                style={{ backgroundColor: isSubmitting ? '#9ca3af' : '#FD9635' }}
              >
                {isSubmitting ? t.joining : t.joinCommunityBtn}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}