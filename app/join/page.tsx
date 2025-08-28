'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Mail, User, MapPin, Calendar, Briefcase } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useLanguage } from '../components/LanguageContext';

const EMAILJS_PUBLIC_KEY  = 'udmTQ-e7BJ5FOPqLF';
const EMAILJS_SERVICE_ID  = 'service_rwj7l4k';
const EMAILJS_TEMPLATE_ID = 'template_fhvi9n8';

export default function JoinPage() {
  const { language, t, theme } = useLanguage();
  const [formData, setFormData] = useState({
    name: '', email: '', location: '', age: '', profession: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
    console.log('EmailJS init ok:', !!EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(p => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const res = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          to_email: formData.email,
          to_name: formData.name,
          from_name: 'Saddah',
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
        className={`min-h-screen flex items-center justify-center pt-24 pb-12 px-4 sm:px-6 lg:px-8 ${language === 'ar' ? 'rtl' : 'ltr'}`}
        style={{ backgroundColor: theme.colors.background.main }}
        dir={language === 'ar' ? 'rtl' : 'ltr'}
      >
        <div className="max-w-md w-full space-y-8 text-center">
          <div 
            className="p-8 rounded-2xl shadow-lg border"
            style={{ 
              backgroundColor: theme.colors.background.white,
              borderColor: theme.colors.background.gray[200]
            }}
          >
            <div className="mb-6">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: theme.colors.accent.success + '20' }}
              >
                <Mail className="w-8 h-8" style={{ color: theme.colors.accent.success }} />
              </div>
              <h2 
                className={`text-3xl font-bold mb-2 ${language === 'ar' ? 'font-arabic' : ''}`}
                style={{ color: theme.colors.background.gray[900] }}
              >
                {t.welcomeTitle}
              </h2>
              <p 
                className={`mt-2 ${language === 'ar' ? 'font-arabic text-right' : 'text-left'}`}
                style={{ color: theme.colors.background.gray[600] }}
              >
                {t.welcomeMessage}
              </p>
            </div>
            <Link
              href="/"
              className={`inline-flex items-center gap-2 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 ${language === 'ar' ? 'flex-row-reverse' : ''}`}
              style={{ backgroundColor: theme.colors.secondary.main }}
              onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.currentTarget.style.backgroundColor = theme.colors.secondary.dark;
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.currentTarget.style.backgroundColor = theme.colors.secondary.main;
              }}
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
      className={`min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 ${language === 'ar' ? 'rtl' : 'ltr'}`}
      style={{ backgroundColor: theme.colors.background.main }}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 
            className={`text-4xl font-bold mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}
            style={{ color: theme.colors.background.gray[900] }}
          >
            {t.joinTitle}
          </h1>
          <p 
            className={`text-xl ${language === 'ar' ? 'font-arabic' : ''}`}
            style={{ color: theme.colors.background.gray[600] }}
          >
            {t.joinSubtitle}
          </p>
        </div>

        {error && (
          <div 
            className="mb-6 rounded-lg border p-4 text-sm"
            style={{ 
              borderColor: theme.colors.accent.error + '33',
              backgroundColor: theme.colors.accent.error + '0A',
              color: theme.colors.accent.error
            }}
          >
            <p className={`font-semibold ${language === 'ar' ? 'font-arabic text-right' : 'text-left'}`}>
              {t.joinError}
            </p>
            <p className={`mt-1 ${language === 'ar' ? 'font-arabic text-right' : 'text-left'}`}>
              {error}
            </p>
            <p 
              className={`mt-1 ${language === 'ar' ? 'font-arabic text-right' : 'text-left'}`}
              style={{ color: theme.colors.background.gray[600] }}
            >
              {t.joinErrorTip}
            </p>
          </div>
        )}

        <div 
          className="rounded-2xl shadow-lg border p-8"
          style={{ 
            backgroundColor: theme.colors.background.white,
            borderColor: theme.colors.background.gray[200]
          }}
        >
          <form noValidate onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label 
                htmlFor="name" 
                className={`block text-sm font-medium mb-2 ${language === 'ar' ? 'font-arabic text-right' : 'text-left'}`}
                style={{ color: theme.colors.background.gray[900] }}
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
                className={`w-full px-4 py-3 border rounded-lg transition-colors ${language === 'ar' ? 'text-right font-arabic' : 'text-left'}`}
                style={{ 
                  borderColor: theme.colors.background.gray[300],
                  backgroundColor: theme.colors.background.white
                }}
                onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
                  e.currentTarget.style.borderColor = theme.colors.primary.main;
                  e.currentTarget.style.outline = `2px solid ${theme.colors.primary.main}20`;
                }}
                onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                  e.currentTarget.style.borderColor = theme.colors.background.gray[300];
                  e.currentTarget.style.outline = 'none';
                }}
                placeholder={t.fullNamePlaceholder}
                dir={language === 'ar' ? 'rtl' : 'ltr'}
              />
            </div>

            <div>
              <label 
                htmlFor="email" 
                className={`block text-sm font-medium mb-2 ${language === 'ar' ? 'font-arabic text-right' : 'text-left'}`}
                style={{ color: theme.colors.background.gray[900] }}
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
                className={`w-full px-4 py-3 border rounded-lg transition-colors ${language === 'ar' ? 'text-right font-arabic' : 'text-left'}`}
                style={{ 
                  borderColor: theme.colors.background.gray[300],
                  backgroundColor: theme.colors.background.white
                }}
                onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
                  e.currentTarget.style.borderColor = theme.colors.primary.main;
                  e.currentTarget.style.outline = `2px solid ${theme.colors.primary.main}20`;
                }}
                onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                  e.currentTarget.style.borderColor = theme.colors.background.gray[300];
                  e.currentTarget.style.outline = 'none';
                }}
                placeholder={t.emailPlaceholder}
                dir={language === 'ar' ? 'rtl' : 'ltr'}
              />
            </div>

            <div>
              <label 
                htmlFor="location" 
                className={`block text-sm font-medium mb-2 ${language === 'ar' ? 'font-arabic text-right' : 'text-left'}`}
                style={{ color: theme.colors.background.gray[900] }}
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
                className={`w-full px-4 py-3 border rounded-lg transition-colors ${language === 'ar' ? 'text-right font-arabic' : 'text-left'}`}
                style={{ 
                  borderColor: theme.colors.background.gray[300],
                  backgroundColor: theme.colors.background.white
                }}
                onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
                  e.currentTarget.style.borderColor = theme.colors.primary.main;
                  e.currentTarget.style.outline = `2px solid ${theme.colors.primary.main}20`;
                }}
                onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                  e.currentTarget.style.borderColor = theme.colors.background.gray[300];
                  e.currentTarget.style.outline = 'none';
                }}
                placeholder={t.locationPlaceholder}
                dir={language === 'ar' ? 'rtl' : 'ltr'}
              />
            </div>

            <div>
              <label 
                htmlFor="age" 
                className={`block text-sm font-medium mb-2 ${language === 'ar' ? 'font-arabic text-right' : 'text-left'}`}
                style={{ color: theme.colors.background.gray[900] }}
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
                className={`w-full px-4 py-3 border rounded-lg transition-colors ${language === 'ar' ? 'text-right font-arabic' : 'text-left'}`}
                style={{ 
                  borderColor: theme.colors.background.gray[300],
                  backgroundColor: theme.colors.background.white
                }}
                onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
                  e.currentTarget.style.borderColor = theme.colors.primary.main;
                  e.currentTarget.style.outline = `2px solid ${theme.colors.primary.main}20`;
                }}
                onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                  e.currentTarget.style.borderColor = theme.colors.background.gray[300];
                  e.currentTarget.style.outline = 'none';
                }}
                placeholder={t.agePlaceholder}
                dir={language === 'ar' ? 'rtl' : 'ltr'}
              />
            </div>

            <div>
              <label 
                htmlFor="profession" 
                className={`block text-sm font-medium mb-2 ${language === 'ar' ? 'font-arabic text-right' : 'text-left'}`}
                style={{ color: theme.colors.background.gray[900] }}
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
                className={`w-full px-4 py-3 border rounded-lg transition-colors ${language === 'ar' ? 'text-right font-arabic' : 'text-left'}`}
                style={{ 
                  borderColor: theme.colors.background.gray[300],
                  backgroundColor: theme.colors.background.white
                }}
                onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
                  e.currentTarget.style.borderColor = theme.colors.primary.main;
                  e.currentTarget.style.outline = `2px solid ${theme.colors.primary.main}20`;
                }}
                onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                  e.currentTarget.style.borderColor = theme.colors.background.gray[300];
                  e.currentTarget.style.outline = 'none';
                }}
                placeholder={t.professionPlaceholder}
                dir={language === 'ar' ? 'rtl' : 'ltr'}
              />
            </div>

            <div 
              className="p-4 rounded-lg"
              style={{ backgroundColor: theme.colors.background.gray[50] }}
            >
              <p 
                className={`text-sm ${language === 'ar' ? 'font-arabic text-right' : 'text-left'}`}
                style={{ color: theme.colors.background.gray[600] }}
              >
                {t.privacyNotice}
              </p>
            </div>

            <div className={`flex gap-4 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
              <Link 
                href="/" 
                className={`flex-1 px-6 py-3 rounded-lg font-medium transition-all duration-200 text-center hover:scale-105 ${language === 'ar' ? 'font-arabic' : ''}`}
                style={{ 
                  backgroundColor: theme.colors.background.gray[200],
                  color: theme.colors.background.gray[700]
                }}
                onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.currentTarget.style.backgroundColor = theme.colors.background.gray[300];
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.currentTarget.style.backgroundColor = theme.colors.background.gray[200];
                }}
              >
                {t.cancel}
              </Link>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`flex-1 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 disabled:opacity-50 hover:scale-105 ${language === 'ar' ? 'font-arabic' : ''}`}
                style={{ 
                  backgroundColor: isSubmitting ? theme.colors.background.gray[400] : theme.colors.primary.main 
                }}
                onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                  if (!isSubmitting) e.currentTarget.style.backgroundColor = theme.colors.primary.dark;
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                  if (!isSubmitting) e.currentTarget.style.backgroundColor = theme.colors.primary.main;
                }}
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
