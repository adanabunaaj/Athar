'use client';
import { useEffect, useState } from 'react';
import { Lock, Mail, PlayCircle, User, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../components/LanguageContext';
import { VIDEOS, VIDEO_SECTIONS } from '../../lib/videoCatalog';

const KEY_STORAGE = 'saddah-video-key';

const STRINGS = {
  en: {
    title: 'Saddah Video Library',
    subtitle: 'Short videos that walk you through applying to universities abroad: requirements, CV, personal statement, recommendations, interviews, scholarships, and more.',
    lockedTitle: 'Watch the videos',
    lockedText: 'Sign up with your name and email and we will send you a personal link to the full library. You will also join the Saddah community.',
    name: 'Full name',
    namePlaceholder: 'Enter your full name',
    email: 'Email address',
    emailPlaceholder: 'Enter your email address',
    submit: 'Send me the link',
    sending: 'Sending...',
    privacy: 'By signing up, you join the Saddah community and agree to receive resources and updates from Saddah. We will never share your information.',
    sentTitle: 'Check your email',
    sentText: 'We sent your personal link to {email}. Open it to watch the videos. It can take a minute or two, and it may land in your spam folder.',
    lostLink: 'Already signed up? Email me my link again',
    resendTitle: 'Get your link again',
    resendText: 'Enter the email you signed up with and we will send your link again.',
    resendBtn: 'Resend my link',
    resentText: 'If that email is signed up, your link is on its way. Check your inbox and spam folder.',
    backToSignup: 'Back to sign up',
    errorGeneric: 'Something went wrong. Please try again in a moment.',
    errorEmail: 'Please enter a valid email address.',
    errorName: 'Please enter your name.',
    checking: 'Opening your library...',
    welcome: 'Welcome back, {name}!',
    welcomeNoName: 'Welcome back!',
    unlockedText: 'Your personal link opens this page. Please keep it to yourself.',
    expiredLink: 'This link is no longer active. Sign up again or request your link below.',
  },
  ar: {
    title: 'مكتبة فيديوهات صدى',
    subtitle: 'فيديوهات قصيرة ترافقك في التقديم للجامعات في الخارج: المتطلبات، السيرة الذاتية، المقال الشخصي، رسائل التوصية، المقابلات، المنح الدراسية، وغيرها.',
    lockedTitle: 'شاهد الفيديوهات',
    lockedText: 'سجّل باسمك وبريدك الإلكتروني وسنرسل لك رابطاً شخصياً للمكتبة كاملة. وستنضم أيضاً إلى مجتمع صدى.',
    name: 'الاسم الكامل',
    namePlaceholder: 'أدخل اسمك الكامل',
    email: 'البريد الإلكتروني',
    emailPlaceholder: 'أدخل بريدك الإلكتروني',
    submit: 'أرسلوا لي الرابط',
    sending: 'جارٍ الإرسال...',
    privacy: 'بالتسجيل، تنضم إلى مجتمع صدى وتوافق على تلقي الموارد والتحديثات من صدى. لن نشارك معلوماتك أبداً.',
    sentTitle: 'تفقّد بريدك الإلكتروني',
    sentText: 'أرسلنا رابطك الشخصي إلى {email}. افتحه لمشاهدة الفيديوهات. قد يستغرق ذلك دقيقة أو اثنتين، وقد يصل إلى مجلد الرسائل غير المرغوب فيها.',
    lostLink: 'سجّلت من قبل؟ أرسلوا لي الرابط مرة أخرى',
    resendTitle: 'احصل على رابطك مجدداً',
    resendText: 'أدخل البريد الإلكتروني الذي سجّلت به وسنرسل لك الرابط مرة أخرى.',
    resendBtn: 'أعد إرسال الرابط',
    resentText: 'إذا كان هذا البريد مسجّلاً، فرابطك في الطريق. تفقّد صندوق الوارد ومجلد الرسائل غير المرغوب فيها.',
    backToSignup: 'العودة إلى التسجيل',
    errorGeneric: 'حدث خطأ ما. حاول مرة أخرى بعد قليل.',
    errorEmail: 'الرجاء إدخال بريد إلكتروني صحيح.',
    errorName: 'الرجاء إدخال اسمك.',
    checking: 'جارٍ فتح مكتبتك...',
    welcome: 'أهلاً بعودتك، {name}!',
    welcomeNoName: 'أهلاً بعودتك!',
    unlockedText: 'رابطك الشخصي هو ما يفتح هذه الصفحة. نرجو عدم مشاركته.',
    expiredLink: 'هذا الرابط لم يعد فعّالاً. سجّل من جديد أو اطلب رابطك أدناه.',
  },
};

type Status = 'checking' | 'locked' | 'unlocked';
type FormMode = 'signup' | 'sent' | 'resend' | 'resent';

export default function VideosPage() {
  const { language, isLoaded, theme } = useLanguage();
  const lang: 'en' | 'ar' = language === 'ar' ? 'ar' : 'en';
  const s = STRINGS[lang];
  const isAr = lang === 'ar';

  const [status, setStatus] = useState<Status>('checking');
  const [viewerName, setViewerName] = useState('');
  const [urls, setUrls] = useState<Record<string, string>>({});
  const [linkWasInvalid, setLinkWasInvalid] = useState(false);

  const [mode, setMode] = useState<FormMode>('signup');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState(''); // hidden anti-bot field
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // On load: use the key from the email link (or one saved from an earlier visit).
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const fromUrl = params.get('key');
    let key: string | null = fromUrl;
    try {
      if (fromUrl) {
        localStorage.setItem(KEY_STORAGE, fromUrl);
      } else {
        key = localStorage.getItem(KEY_STORAGE);
      }
    } catch { /* storage unavailable: fine, the URL key still works */ }

    // Remove the key from the address bar so it isn't copied by accident.
    if (fromUrl) window.history.replaceState(null, '', window.location.pathname);

    if (!key) {
      setStatus('locked');
      return;
    }

    fetch(`/api/videos/access?key=${encodeURIComponent(key)}`, { cache: 'no-store' })
      .then(async (res) => {
        if (!res.ok) throw new Error(String(res.status));
        const data = await res.json();
        const map: Record<string, string> = {};
        for (const v of data.videos as { id: string; url: string }[]) map[v.id] = v.url;
        setUrls(map);
        setViewerName(data.name || '');
        setStatus('unlocked');
      })
      .catch((err: Error) => {
        // Keep the saved key: if the link is switched back on, the page unlocks again.
        if (err.message === '401') setLinkWasInvalid(true);
        setStatus('locked');
      });
  }, []);

  const post = async (path: string, payload: Record<string, unknown>) => {
    const res = await fetch(path, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data.ok) throw new Error(data.error || 'server_error');
  };

  const errorText = (code: string) =>
    code === 'invalid_email' ? s.errorEmail : code === 'missing_name' ? s.errorName : s.errorGeneric;

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!name.trim()) return setError(s.errorName);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) return setError(s.errorEmail);
    setBusy(true);
    try {
      await post('/api/videos/signup', { name, email, lang, website });
      setMode('sent');
    } catch (err) {
      setError(errorText((err as Error).message));
    } finally {
      setBusy(false);
    }
  };

  const handleResend = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) return setError(s.errorEmail);
    setBusy(true);
    try {
      await post('/api/videos/resend', { email, lang });
      setMode('resent');
    } catch (err) {
      setError(errorText((err as Error).message));
    } finally {
      setBusy(false);
    }
  };

  const c = theme.colors;
  const font = isAr ? 'font-arabic' : '';
  const align = isAr ? 'text-right' : 'text-left';

  if (!isLoaded || status === 'checking') {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center" style={{ backgroundColor: c.background.main }}>
        <p className={font} style={{ color: c.background.gray[500] }}>{s.checking}</p>
      </div>
    );
  }

  const inputStyle = { borderColor: c.background.gray[300], backgroundColor: c.background.white };
  const primaryBtn = 'w-full text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg disabled:opacity-60';

  const emailField = (
    <div>
      <label htmlFor="v-email" className={`block text-sm font-medium mb-2 ${font} ${align}`} style={{ color: c.background.gray[900] }}>
        <Mail className={`w-4 h-4 inline ${isAr ? 'ml-2' : 'mr-2'}`} />{s.email} *
      </label>
      <input
        id="v-email"
        type="email"
        dir="ltr"
        autoComplete="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={s.emailPlaceholder}
        className={`w-full px-4 py-3 border rounded-lg ${align}`}
        style={inputStyle}
      />
    </div>
  );


  const formCard = (
    <div
      className="rounded-2xl shadow-lg border p-8"
      style={{ backgroundColor: c.background.white, borderColor: c.background.gray[200] }}
    >
      {mode === 'sent' || mode === 'resent' ? (
        <div className="text-center">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
            style={{ backgroundColor: c.accent.success + '20' }}
          >
            <Mail className="w-8 h-8" style={{ color: c.accent.success }} />
          </div>
          <h2 className={`text-2xl font-bold mb-2 ${font}`} style={{ color: c.background.gray[900] }}>
            {s.sentTitle}
          </h2>
          <p className={font} style={{ color: c.background.gray[600] }}>
            {mode === 'sent' ? s.sentText.replace('{email}', email.trim()) : s.resentText}
          </p>
        </div>
      ) : mode === 'resend' ? (
        <form noValidate onSubmit={handleResend} className="space-y-5">
          <div className={align}>
            <h2 className={`text-2xl font-bold mb-1 ${font}`} style={{ color: c.background.gray[900] }}>{s.resendTitle}</h2>
            <p className={font} style={{ color: c.background.gray[600] }}>{s.resendText}</p>
          </div>
          {emailField}
          {error && <p className={`text-sm ${font} ${align}`} style={{ color: c.accent.error }}>{error}</p>}
          <button type="submit" disabled={busy} className={primaryBtn} style={{ backgroundColor: c.primary.main }}>
            {busy ? s.sending : s.resendBtn}
          </button>
          <button
            type="button"
            onClick={() => { setMode('signup'); setError(null); }}
            className={`w-full text-sm underline ${font}`}
            style={{ color: c.background.gray[600] }}
          >
            {s.backToSignup}
          </button>
        </form>
      ) : (
        <form noValidate onSubmit={handleSignup} className="space-y-5">
          <div className={align}>
            <h2 className={`text-2xl font-bold mb-1 ${font}`} style={{ color: c.background.gray[900] }}>{s.lockedTitle}</h2>
            <p className={font} style={{ color: c.background.gray[600] }}>{s.lockedText}</p>
          </div>
          <div>
            <label htmlFor="v-name" className={`block text-sm font-medium mb-2 ${font} ${align}`} style={{ color: c.background.gray[900] }}>
              <User className={`w-4 h-4 inline ${isAr ? 'ml-2' : 'mr-2'}`} />{s.name} *
            </label>
            <input
              id="v-name"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={s.namePlaceholder}
              className={`w-full px-4 py-3 border rounded-lg ${font} ${align}`}
              style={inputStyle}
            />
          </div>
          {emailField}
          {/* Hidden from people; bots tend to fill it in */}
          <input
            type="text"
            name="website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}
          />
          {error && <p className={`text-sm ${font} ${align}`} style={{ color: c.accent.error }}>{error}</p>}
          <button type="submit" disabled={busy} className={primaryBtn} style={{ backgroundColor: c.primary.main }}>
            {busy ? s.sending : s.submit}
          </button>
          <p className={`text-xs ${font} ${align}`} style={{ color: c.background.gray[500] }}>{s.privacy}</p>
          <button
            type="button"
            onClick={() => { setMode('resend'); setError(null); }}
            className={`w-full text-sm underline ${font}`}
            style={{ color: c.secondary.dark }}
          >
            {s.lostLink}
          </button>
        </form>
      )}
    </div>
  );

  const library = VIDEO_SECTIONS.map((section) => {
    const items = VIDEOS.filter((v) => v.section === section.id);
    if (items.length === 0) return null;
    return (
      <section key={section.id} className="mb-12">
        <h2 className={`text-2xl font-bold mb-5 ${font} ${align}`} style={{ color: c.background.gray[900] }}>
          {section.title[lang]}
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {items.map((v, i) => (
            <article
              key={v.id}
              className="rounded-2xl border overflow-hidden shadow-sm"
              style={{ backgroundColor: c.background.white, borderColor: c.background.gray[200] }}
            >
              {status === 'unlocked' && urls[v.id] ? (
                <video
                  className="w-full aspect-video bg-black"
                  controls
                  playsInline
                  preload="metadata"
                  controlsList="nodownload"
                  onContextMenu={(e) => e.preventDefault()}
                  src={`${urls[v.id]}#t=1`}
                />
              ) : (
                <div
                  className="w-full aspect-video flex items-center justify-center"
                  style={{ background: theme.gradients.accent, opacity: 0.85 }}
                >
                  <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow">
                    <Lock className="w-6 h-6" style={{ color: c.background.gray[700] }} />
                  </div>
                </div>
              )}
              <div className={`p-4 flex items-center gap-3`}>
                <span
                  className="w-8 h-8 shrink-0 rounded-full flex items-center justify-center text-sm font-bold text-white"
                  style={{ backgroundColor: c.secondary.main }}
                >
                  {i + 1}
                </span>
                <h3 className={`font-semibold flex-1 ${font} ${align}`} style={{ color: c.background.gray[900] }}>
                  {v.title[lang]}
                </h3>
                {status === 'unlocked' && <PlayCircle className="w-5 h-5" style={{ color: c.primary.main }} />}
              </div>
            </article>
          ))}
        </div>
      </section>
    );
  });

  return (
    <div
      className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: c.background.main }}
      dir={isAr ? 'rtl' : 'ltr'}
    >
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-10">
          <h1 className={`text-4xl font-bold mb-4 ${font}`} style={{ color: c.background.gray[900] }}>{s.title}</h1>
          <p className={`text-lg max-w-3xl mx-auto ${font}`} style={{ color: c.background.gray[600] }}>{s.subtitle}</p>
        </header>

        {status === 'unlocked' ? (
          <div
            className={`mb-10 rounded-xl border p-4 flex items-center gap-3`}
            style={{ backgroundColor: c.primary[50], borderColor: c.primary[100] }}
          >
            <CheckCircle2 className="w-6 h-6 shrink-0" style={{ color: c.primary.dark }} />
            <div className={`${font} ${align}`}>
              <p className="font-semibold" style={{ color: c.background.gray[900] }}>
                {viewerName ? s.welcome.replace('{name}', viewerName) : s.welcomeNoName}
              </p>
              <p className="text-sm" style={{ color: c.background.gray[600] }}>{s.unlockedText}</p>
            </div>
          </div>
        ) : (
          <div className="max-w-xl mx-auto mb-14">
            {linkWasInvalid && (
              <p
                className={`mb-4 rounded-lg border p-3 text-sm ${font} ${align}`}
                style={{ borderColor: c.accent.warning + '55', backgroundColor: c.accent.warning + '12', color: c.background.gray[800] }}
              >
                {s.expiredLink}
              </p>
            )}
            {formCard}
          </div>
        )}

        {library}
      </div>
    </div>
  );
}
