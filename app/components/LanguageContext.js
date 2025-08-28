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

// Centralized Theme/Color System
const theme = {
  colors: {
    // Primary Colors
    primary: {
      main: '#A3AB4B',      // Your green
      light: '#B8C066',     // Lighter green
      dark: '#8E9536',      // Darker green
      50: '#F5F6F0',        // Very light green tint
      100: '#E8EBD4',       // Light green tint
      500: '#A3AB4B',       // Main green
      700: '#8E9536',       // Dark green
      900: '#6B7029',       // Very dark green
    },
    secondary: {
      main: '#907F9F',      // Your purple
      light: '#A896B3',     // Lighter purple
      dark: '#7A6B8A',      // Darker purple
      50: '#F3F1F5',        // Very light purple tint
      100: '#E3DDE8',       // Light purple tint
      500: '#907F9F',       // Main purple
      700: '#7A6B8A',       // Dark purple
      900: '#5C5166',       // Very dark purple
    },
    background: {
      main: '#FEFEF2',      // Your cream yellow
      white: '#FFFFFF',     // Pure white
      gray: {
        50: '#FAFAF8',      // Very light warm gray
        100: '#F5F5F0',     // Light warm gray
        200: '#E8E8E0',     // Light gray
        300: '#D1D1C8',     // Medium light gray
        400: '#A8A89E',     // Medium gray
        500: '#7A7A70',     // Dark gray
        600: '#5C5C54',     // Darker gray
        700: '#3F3F39',     // Very dark gray
        800: '#2B2B26',     // Almost black gray
        900: '#1A1A17',     // Black gray
      }
    },
    accent: {
      success: '#22C55E',   // Green for success states
      warning: '#F59E0B',   // Orange for warnings
      error: '#EF4444',     // Red for errors
      info: '#3B82F6',      // Blue for info
    }
  },
  gradients: {
    primary: `linear-gradient(135deg, #A3AB4B 0%, #8E9536 50%, #A3AB4B 100%)`,
    secondary: `linear-gradient(135deg, #907F9F 0%, #7A6B8A 50%, #907F9F 100%)`,
    hero: `linear-gradient(135deg, #A3AB4B 0%, #907F9F 50%, #A3AB4B 100%)`,
    accent: `linear-gradient(135deg, #A3AB4B 0%, #907F9F 100%)`,
  }
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
      programs: 'Programs',

      
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
      scholarshipDesc: 'Expanding educational access',
      
      // Vision Section
      changeWish: 'The Change We Wish to See',
      visionDescription: 'Redefine success as shared growth and collective achievement, fostering solidarity, resilience, and mutual support. We envision a cultural transformation from individualism to solidarity, where the community uplifts every member.',
      
      // Programs Section
      ourPrograms: 'Our Programs',
      programsDescription: 'Join our most recent programs',
      collegeApplications: 'College Applications Workshops',
      collegeApplicationsDesc: 'Comprehensive guidance through the college application process to the US and UK.',
      joinCollegeProgram: 'Join Program',
      mentorshipProgram: 'Mentorship Program', 
      mentorshipProgramDesc: 'Connecting students and young professionals with mentors to guide them with academic and career choices and applications.',
      applyMentorship: 'Join as a Mentor',
      
      // Footer
      footerDescription: 'Building a supportive community where Palestinian youth can thrive through collective growth, meaningful dialogue, and shared success.',
      quickLinks: 'Quick Links',
      getInvolved: 'Get Involved',
      shareStory: 'Share Your Story',
      volunteer: 'Volunteer',
      donate: 'Donate',
      emailAddress: 'saddah.info@gmail.com',
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
      programs: 'البرامج',

      
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
      communityDiscussions: 'لقاءات ونقاشات مع متحدثين متميزين في مجالاتهم.',
      digitalMagazine: 'المجلة الرقمية',
      magazineDesc: 'تسليط الضوء على القصص الفلسطينية غير المتداولة - The Untold Stories.',
      scholarshipFundraising: 'منح طلابية',
      scholarshipDesc: 'توفير فرص أكبر للتعليم العالي.',

      // Vision Section
      changeWish: 'التغيير الذي نريد أن نراه',
      visionDescription: 'تسعى منصة صدى إلى إعادة تعريف معنى النجاح كهدف مجتمعي مشترك، يقوم على النجاح المجتمعي، التضامن، الصمود، والتعاون. نطمح إلى تغيير جذري من الفردانية إلى التضامن، حيث يدعم المجتمع الفرد ويقف الفرد بدوره سندًا لمجتمعه.',

      // Programs Section
      ourPrograms: 'برامجنا',
      programsDescription: 'انضم إلى برامجنا',
      collegeApplications: 'ورشات التقديم للجامعات',
      collegeApplicationsDesc: 'إرشاد شامل خلال سيرورة التقديم للجامعات في أمريكا وبريطانيا.',
      joinCollegeProgram: 'انضم للبرنامج',
      mentorshipProgram: 'برنامج الإرشاد',
      mentorshipProgramDesc: 'ربط الطلاب والمهنيين الشباب مع مرشدين لدعمهم في اختياراتهم الأكاديمية والمهنية سيرورة التقديم.',

applyMentorship: 'انضم كمرشد',

      // Footer
      quickLinks: 'روابط سريعة',
      getInvolved: 'شارك معنا',
      shareStory: 'شارك قصتك',
      volunteer: 'تطوع',
      donate: 'تبرع',
      emailAddress: 'saddah.info@gmail.com',
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
    isLoaded,
    theme // Add theme to context
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};