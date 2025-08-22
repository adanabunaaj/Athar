'use client';
import { createContext, useContext, useState, useEffect } from 'react';

// Create the Language Context
const LanguageContext = createContext();

// Hook to use the Language Context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Language Provider Component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [isLoaded, setIsLoaded] = useState(false);

  // Load language preference from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('saddah-language');
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'ar')) {
      setLanguage(savedLanguage);
    }
    setIsLoaded(true);
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'ar' : 'en';
    setLanguage(newLanguage);
    localStorage.setItem('saddah-language', newLanguage);
  };

  // Translation object - you can expand this as needed
  const translations = {
    en: {
      // Header
      why: 'Why',
      how: 'How',
      vision: 'Vision',
      joinUs: 'Join Us',
      
      // Main Page
      title: 'Saddah',
      subtitle: 'Building solidarity towards collective success',
      learnMore: 'Learn More',
      joinCommunity: 'Join Our Community',
      
      // About Section
      whatBuilding: "What We're Building",
      aboutDescription: 'A hybrid platform where Palestinian youth can connect with a wider community, receive academic and professional support, and engage in meaningful dialogue that drives collective progress.',
      
      // Why Section
      whyMatters: 'Why It Matters',
      whyDescription: 'We address five interconnected gaps in our community',
      supportBelonging: 'Support & Belonging',
      supportDesc: 'Few safe, reliable networks to guide and lift people up.',
      roleModels: 'Role Models',
      roleModelsDesc: 'A lack of relatable and non-traditional success stories.',
      survivalMindset: 'Survival-Mode Mindset',
      survivalDesc: 'Focus on personal gain over collective growth.',
      publicSpaces: 'Public Spaces',
      publicSpacesDesc: 'Limited places for open dialogue and action.',
      agencyVoice: 'Agency & Voice',
      agencyDesc: 'Few opportunities to shape our own future.',
      
      // How Section
      howOperate: 'How We Operate',
      howDescription: 'Our work centers on three pillars',
      dialogue: 'Dialogue',
      dialogueDesc: 'Creating relational and empowering spaces for critical, brave conversations.',
      support: 'Support',
      supportDesc: 'Offering workshops, handbooks, networking opportunities, and financial resources.',
      storytelling: 'Storytelling',
      storytellingDesc: 'Using writing and the arts to share diverse stories of hardship, resilience, and success.',
      
      // Key Tools Section
      keyTools: 'Key Tools',
      keyToolsDesc: "How we're building our community",
      webinarWorkshops: 'Webinar Workshops',
      webinarDesc: 'College applications workshops and mentorship',
      communityDiscussions: 'Community Discussions',
      communityDesc: 'Online sessions with guest speakers',
      digitalMagazine: 'Digital Magazine',
      magazineDesc: 'Showcasing untold Palestinian stories',
      scholarshipFundraising: 'Scholarship Fundraising',
      scholarshipsDesc: 'Expanding educational access',
      
      // Vision Section
      changeWish: 'The Change We Wish to See',
      visionDescription: 'Redefine success as shared growth and collective achievement, fostering solidarity, resilience, and mutual support. We envision a cultural transformation from individualism to solidarity, where the community uplifts every member.',
      
      // Footer
      footerDescription: 'Building a supportive community where Palestinian youth can thrive through collective growth, meaningful dialogue, and shared success.',
      quickLinks: 'Quick Links',
      getInvolved: 'Get Involved',
      shareStory: 'Share Your Story',
      volunteer: 'Volunteer',
      donate: 'Donate',
      emailAddress: 'hello@Saddah.org',
      emailUs: 'Email Us',
      followInstagram: 'Follow us on Instagram',
      followTwitter: 'Follow us on Twitter',
      copyright: '© 2025 Saddah Initiative. Building solidarity towards collective success.',
      
      // Join Page
      joinTitle: 'Join the Saddah Community',
      joinSubtitle: 'Connect with Palestinian youth working towards collective success',
      joinError: "Couldn't send your email.",
      joinErrorTip: 'Tip: ensure EmailJS "Allowed origins" includes http://localhost:3000 and your Service/Template IDs are correct.',
      welcomeTitle: 'Welcome to Saddah!',
      welcomeMessage: 'Thank you for joining our community. Check your email for a welcome message!',
      backToHome: 'Back to Home',
      fullName: 'Full Name',
      fullNamePlaceholder: 'Enter your full name',
      emailAddress: 'Email Address',
      emailPlaceholder: 'Enter your email address',
      location: 'Location',
      locationPlaceholder: 'City, Country',
      age: 'Age',
      agePlaceholder: 'Enter your age',
      profession: 'Profession or Educational Level',
      professionPlaceholder: 'e.g., Student at XYZ University, Software Engineer, etc.',
      privacyNotice: 'By joining, you agree to receive community updates and resources from Saddah Initiative. You can unsubscribe at any time. We respect your privacy and will never share your information.',
      cancel: 'Cancel',
      joining: 'Joining...',
      joinCommunityBtn: 'Join Community'
    },
    ar: {
      // Header
      why: 'لماذا',
      how: 'كيف',
      vision: 'الرؤية',
      joinUs: 'انضم إلينا',
      
      // Main Page
      title: 'صدى',
      subtitle: 'معًا نحو التقدّم المجتمعي',
      learnMore: 'اعرف المزيد',
      joinCommunity: 'انضم إلى مجتمعنا',
      
      // About Section
      whatBuilding: 'من نحن ؟',
      aboutDescription: '.صدى هي منصة للجيل الشاب الفلسطيني لتعزيز الروابط مع المجتمع، الحصول على الدعم  الأكاديمي والمهني، والمشاركة في حواريات تسعى نحو التغيير والتقدّم المجتمعي',
      
      // Why Section
      whyMatters: 'لماذا صدى مهم ؟',
      whyDescription: 'نحن نتطرق إلى خمس فجوات مترابطة في مجتمعنا',
      supportBelonging: 'الدعم والانتماء',
      supportDesc: 'توفير ورشات، إرشادات، منح، وفرص للتواصل مع المجتمع.',
      roleModels: 'القدوة',
      roleModelsDesc: 'غياب قصص النجاح غير التقليدية التي تلهم الجيل الشبابي.',
      survivalMindset: 'صراع البقاء',
      survivalDesc: 'التركيز على النجاح الفرداني بدلًا من النجاح المجتمعي.',
      publicSpaces: 'المساحات العامة',
      publicSpacesDesc: 'منصات محدودة للحوارات والمبادرات المجتمعية.',
      agencyVoice: 'التمكين والتأثير',
      agencyDesc: 'فرص ضئيلة لبناء مستقبلنا كجيل شاب.',

      // How Section
      howOperate: 'كيف نعمل ؟',
      howDescription: 'يرتكز مشروع صدى على 3 ركائز أساسية',
      dialogue: 'الحوار',
      dialogueDesc: 'توفير مساحات لدعم وإلهام الجيل الشاب من خلال حوارات جريئة.',
      support: 'الدعم',
      supportDesc: 'توفير ورشات، إرشاد، منح، وفرص للتواصل والتعرف على أفراد المجتمع.',
      storytelling: 'رواية القصص',
      storytellingDesc: 'استخدام الكتابة والتعبير الفني لتسليط الضوء على قصص نجاح غير تقليدية أو غير متداولة.',

      // Key Tools Section
      keyTools: 'الأدوات الرئيسية ؟',
      keyToolsDesc: 'كيف نبني مجتمع صدى ؟',
      webinarWorkshops: 'ورشات إرشاد',
      webinarDesc: 'جلسات حول التقديم للجامعات والإرشاد الشخصي.',
      communityDialogue: 'حوارات',
      communityDiscussions: 'لقاءات ونقاشات مع متحدثين متميزين في مجالاتهم.',
      digitalMagazine: 'المجلة الرقمية',
      magazineDesc: 'تسليط الضوء على القصص الفلسطينية غير المتداولة - The Untold Stories.',
      scholarshipFundraising: 'منح طلابية',
      scholarshipsDesc: 'توفير فرص أكبر للتعليم العالي.',

      // Vision Section
      visionTitle: 'التغيير الذي نريد أن نراه',
      visionDescription: 'تسعى منصة صدى إلى إعادة تعريف معنى النجاح كهدف مجتمعي مشترك، يقوم على النجاح المجتمعي، التضامن، الصمود، والتعاون. نطمح إلى تغيير جذري من الفردانية إلى التضامن، حيث يدعم المجتمع الفرد ويقف الفرد بدوره سندًا لمجتمعه.',

      // Footer
      //footerDescription: 'بناء مجتمع داعم حيث يمكن للشباب الفلسطيني أن يزدهر من خلال النمو الجماعي والحوار الهادف والنجاح المشترك.',
      quickLinks: 'روابط سريعة',
      getInvolved: 'شارك معنا',
      shareStory: 'شارك قصتك',
      volunteer: 'تطوع',
      donate: 'تبرع',
      emailAddress: 'hello@saddah.org',
      emailUs: 'تواصل معنا',
      followInstagram: 'تابعنا على إنستغرام',
      followTwitter: 'تابعنا على تويتر',
      copyright: '© 2025 مبادرة صدى، معًا نحو النجاح المجتمعي',
      
      // Join Page
      joinTitle: 'انضم إلى مجتمع صدى',
      joinSubtitle: 'تواصل مع الشاب الفلسطيني الذي يعمل نحو النجاح المجتمعي',
      joinError: 'لم نتمكن من إرسال بريدك الإلكتروني.',
      joinErrorTip: 'نصيحة: تأكد من أن "الأصول المسموحة" في EmailJS تتضمن http://localhost:3000 وأن معرفات الخدمة/القالب صحيحة.',
      welcomeTitle: 'مرحباً بك في صدى!',
      welcomeMessage: 'شكراً لانضمامك إلى مجتمعنا. تحقق من بريدك الإلكتروني لرسالة الترحيب!',
      backToHome: 'العودة للرئيسية',
      fullName: 'الاسم الكامل',
      fullNamePlaceholder: 'أدخل اسمك الكامل',
      emailAddress: 'البريد الإلكتروني',
      emailPlaceholder: 'أدخل بريدك الإلكتروني',
      location: 'الموقع',
      locationPlaceholder: 'المدينة، البلد',
      age: 'العمر',
      agePlaceholder: 'أدخل عمرك',
      profession: 'المهنة أو المستوى التعليمي',
      professionPlaceholder: 'مثلاً، طالب في جامعة كذا، مهندس برمجيات، إلخ.',
      privacyNotice: 'بالانضمام، فإنك توافق على تلقي تحديثات المجتمع والموارد من مبادرة صدى. يمكنك إلغاء الاشتراك في أي وقت. نحن نحترم خصوصيتك ولن نشارك معلوماتك أبداً.',
      cancel: 'إلغاء',
      joining: 'جارٍ الانضمام...',
      joinCommunityBtn: 'انضم للمجتمع'

    }
  };

  const t = translations[language];

  const value = {
    language,
    toggleLanguage,
    t,
    isLoaded
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};