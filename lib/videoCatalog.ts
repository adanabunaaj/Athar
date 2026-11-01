// The list of videos shown on /videos.
// `file` must match the object name in the Cloudflare R2 bucket exactly.
// To add a video: upload it to the bucket, then add a line here.

export type VideoSection = 'general' | 'us' | 'uk';

export interface VideoItem {
  id: string;          // short id used in links and (later) analytics
  file: string;        // object name in R2
  section: VideoSection;
  title: { en: string; ar: string };
  // Optional resources shown under the video (sheets, docs, websites).
  links?: { label: { en: string; ar: string }; url: string }[];
}

export const VIDEO_SECTIONS: { id: VideoSection; title: { en: string; ar: string } }[] = [
  { id: 'general', title: { en: 'The essentials', ar: 'الأساسيات' } },
  { id: 'us', title: { en: 'Applying to the US', ar: 'التقديم إلى الولايات المتحدة' } },
  { id: 'uk', title: { en: 'Applying to the UK', ar: 'التقديم إلى المملكة المتحدة' } },
];

export const VIDEOS: VideoItem[] = [
  { id: 'intro', file: '[0]Intro_video.mp4', section: 'general',
    title: { en: 'Introduction', ar: 'مقدمة' } },
  { id: 'requirements', file: '[1]Requirements_video.mp4', section: 'general',
    title: { en: 'Application requirements', ar: 'متطلبات التقديم' } },
  { id: 'cv', file: '[2]CV.mp4', section: 'general',
    title: { en: 'Writing your CV', ar: 'كتابة السيرة الذاتية' } },
  { id: 'personal-statement', file: '[3]Personal_Statement.mp4', section: 'general',
    title: { en: 'The personal statement', ar: 'المقال الشخصي' } },
  { id: 'recommendations', file: '[4]Recommendations_References.mp4', section: 'general',
    title: { en: 'Recommendations & references', ar: 'رسائل التوصية' } },
  { id: 'interviews', file: '[5]Interviews.mp4', section: 'general',
    title: { en: 'Interviews', ar: 'المقابلات' } },
  { id: 'scholarships', file: '[6]Scholarships.mp4', section: 'general',
    title: { en: 'Scholarships', ar: 'المنح الدراسية' },
    links: [
      { label: { en: 'Scholarships sheet', ar: 'جدول المنح الدراسية' },
        url: 'https://docs.google.com/spreadsheets/d/1ebmWxwg8R583oc2H51ZZZffL81vphzvD3nLiy-3hbxM/edit?gid=1343678355#gid=1343678355' },
    ] },
  { id: 'common-app', file: '[0]Common_App.mp4', section: 'us',
    title: { en: 'The Common App', ar: 'منصة Common App' } },
  { id: 'grades-sat-english', file: '[1]Grades_SAT_Eng.mp4', section: 'us',
    title: { en: 'Grades, SAT & English tests', ar: 'العلامات وامتحان SAT واختبارات اللغة الإنجليزية' } },
  { id: 'ucas', file: '[0]UCAS.mp4', section: 'uk',
    title: { en: 'Applying through UCAS', ar: 'التقديم عبر UCAS' } },
];
