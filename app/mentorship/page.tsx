'use client';

import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';
import { useLanguage } from '../components/LanguageContext';

// TODO: replace with the real Calendly link once the event type is live
const CALENDLY_URL = 'https://calendly.com/saddah-info/15min ';

export default function MentorshipPage() {
  const { language, t, theme } = useLanguage();
  const isAr = language === 'ar';
  const c = theme.colors;

  const steps = [
    { title: t.mpStep1Title, desc: t.mpStep1Desc },
    { title: t.mpStep2Title, desc: t.mpStep2Desc },
    { title: t.mpStep3Title, desc: t.mpStep3Desc },
  ];

  const arFont = isAr ? 'font-arabic' : '';

  return (
    <div
      className={`min-h-screen ${isAr ? 'rtl' : 'ltr'}`}
      style={{ backgroundColor: c.background.white } as React.CSSProperties}
      dir={isAr ? 'rtl' : 'ltr'}
    >
      {/* Split hero: editorial text + CTA panel (no gradient, unlike homepage) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-24 pb-16">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-3">
            <div
              className="h-2 w-24 mb-8 rounded-full"
              style={{ backgroundColor: c.primary.main } as React.CSSProperties}
            />
            <h1
              className={`text-5xl lg:text-6xl font-bold mb-6 leading-tight ${arFont}`}
              style={{ color: c.background.gray[900] } as React.CSSProperties}
            >
              {t.mpHeroTitle}
            </h1>
            <p
              className={`text-xl lg:text-2xl leading-relaxed mb-8 ${arFont}`}
              style={{ color: c.background.gray[600] } as React.CSSProperties}
            >
              {t.mpHeroSubtitle}
            </p>
          </div>

          {/* CTA panel — visible immediately, no scrolling needed */}
          <div className="lg:col-span-2">
            <div
              className="rounded-2xl p-8 shadow-xl"
              style={{ backgroundColor: c.secondary.main } as React.CSSProperties}
            >
              <h2 className={`text-2xl font-bold text-white mb-3 ${arFont}`}>
                {t.mpCtaTitle}
              </h2>
              <p className={`text-white/85 mb-6 leading-relaxed ${arFont}`}>
                {t.mpCtaText}
              </p>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${isAr ? 'flex-row-reverse' : ''} ${arFont}`}
                style={{ backgroundColor: c.background.white, color: c.secondary.dark } as React.CSSProperties}
              >
                <Calendar className="w-5 h-5" />
                {t.mpCtaButton}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About — narrow column with a side rule, blockquote feel */}
      <section style={{ backgroundColor: c.secondary[50] } as React.CSSProperties}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div
            className={`max-w-3xl ${isAr ? 'border-r-4 pr-8 mr-0 lg:mr-12' : 'border-l-4 pl-8 ml-0 lg:ml-12'}`}
            style={{ borderColor: c.primary.main } as React.CSSProperties}
          >
            <h2
              className={`text-3xl font-bold mb-5 ${arFont}`}
              style={{ color: c.background.gray[900] } as React.CSSProperties}
            >
              {t.mpAboutTitle}
            </h2>
            <p
              className={`text-lg leading-relaxed ${arFont}`}
              style={{ color: c.background.gray[600] } as React.CSSProperties}
            >
              {t.mpAboutText}
            </p>
          </div>
        </div>
      </section>

      {/* How it works — vertical numbered timeline, not a card grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <h2
          className={`text-3xl font-bold mb-12 ${arFont}`}
          style={{ color: c.background.gray[900] } as React.CSSProperties}
        >
          {t.mpHowTitle}
        </h2>
        <div className="max-w-3xl">
          {steps.map((step, i) => (
            <div key={i} className={`relative flex gap-6 ${isAr ? 'flex-row' : ''}`}>
              {/* number + connector line */}
              <div className="flex flex-col items-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md flex-shrink-0"
                  style={{
                    backgroundColor: i === 2 ? c.secondary.main : c.primary.main,
                  } as React.CSSProperties}
                >
                  {i + 1}
                </div>
                {i < steps.length - 1 && (
                  <div
                    className="w-0.5 flex-1 my-2"
                    style={{ backgroundColor: c.background.gray[300] } as React.CSSProperties}
                  />
                )}
              </div>
              <div className={`pb-12 ${i === steps.length - 1 ? 'pb-0' : ''}`}>
                <h3
                  className={`text-xl font-bold mb-2 mt-2 ${arFont}`}
                  style={{ color: c.background.gray[900] } as React.CSSProperties}
                >
                  {step.title}
                </h3>
                <p
                  className={`leading-relaxed ${arFont}`}
                  style={{ color: c.background.gray[600] } as React.CSSProperties}
                >
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Expectations — flat two-column ledger with colored top rules */}
      <section style={{ backgroundColor: c.background.gray[50] } as React.CSSProperties}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
            {[
              { title: t.mpMentorsTitle, items: t.mpMentorsList, color: c.secondary.main },
              { title: t.mpMenteesTitle, items: t.mpMenteesList, color: c.primary.main },
            ].map((col, i) => (
              <div key={i}>
                <div
                  className="h-1.5 w-full mb-6 rounded-full"
                  style={{ backgroundColor: col.color } as React.CSSProperties}
                />
                <h3
                  className={`text-2xl font-bold mb-6 ${arFont}`}
                  style={{ color: c.background.gray[900] } as React.CSSProperties}
                >
                  {col.title}
                </h3>
                <ul className="space-y-0">
                  {col.items.map((item: string, j: number) => (
                    <li
                      key={j}
                      className={`py-4 ${j > 0 ? 'border-t' : ''} ${arFont}`}
                      style={{
                        borderColor: c.background.gray[200],
                        color: c.background.gray[600],
                      } as React.CSSProperties}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student strip — olive-tinted band with inline link */}
      <section style={{ backgroundColor: c.primary[100] } as React.CSSProperties}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className={`flex flex-col md:flex-row md:items-center gap-6 md:justify-between`}>
            <div>
              <h3
                className={`text-xl font-bold mb-1 ${arFont}`}
                style={{ color: c.background.gray[900] } as React.CSSProperties}
              >
                {t.mpStudentNoteTitle}
              </h3>
              <p
                className={`${arFont}`}
                style={{ color: c.background.gray[600] } as React.CSSProperties}
              >
                {t.mpStudentNote}
              </p>
            </div>
            <Link
              href="/join"
              className={`inline-flex items-center gap-2 font-semibold whitespace-nowrap transition-all duration-300 hover:gap-3 ${isAr ? 'flex-row-reverse' : ''} ${arFont}`}
              style={{ color: c.primary[900] } as React.CSSProperties}
            >
              {t.mpStudentButton}
              <ArrowRight className={`w-5 h-5 ${isAr ? 'rotate-180' : ''}`} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}