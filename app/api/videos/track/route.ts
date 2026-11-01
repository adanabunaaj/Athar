import { NextResponse } from 'next/server';
import { callSheet, checkKey } from '../../../../lib/sheet';
import { VIDEOS } from '../../../../lib/videoCatalog';

export const dynamic = 'force-dynamic';

const VIEW_EVENTS = new Set(['Started', '25%', '50%', '75%', 'Finished']);
const KEY_RE = /^[a-zA-Z0-9]{16,64}$/;

// Analytics from /videos, written to the Google Sheet:
//   { type: 'visit', from, lang, key? }   -> Visits tab
//   { type: 'view', key, video, event }   -> Video views tab
// Country comes from Vercel's location header; IP addresses are never stored.
export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = JSON.parse(await req.text());
  } catch {
    return new NextResponse(null, { status: 204 });
  }

  const country = req.headers.get('x-vercel-ip-country') || '';
  const key = typeof body.key === 'string' && KEY_RE.test(body.key) ? body.key : '';

  try {
    if (body.type === 'visit') {
      await callSheet('visit', {
        from: String(body.from ?? '').slice(0, 60) || 'Direct / unknown',
        lang: body.lang === 'ar' ? 'ar' : 'en',
        country,
        key,
      });
    } else if (body.type === 'view') {
      const video = VIDEOS.find((v) => v.id === body.video);
      const event = String(body.event ?? '');
      if (!video || !VIEW_EVENTS.has(event) || !key) return new NextResponse(null, { status: 204 });
      const { valid } = await checkKey(key);
      if (!valid) return new NextResponse(null, { status: 204 });
      await callSheet('view', { key, video: video.title.en, event });
    }
  } catch (err) {
    console.error('videos/track failed:', err);
  }
  return new NextResponse(null, { status: 204 });
}
