import { NextResponse } from 'next/server';
import { callSheet, isValidEmail, siteUrl } from '../../../../lib/sheet';

export const dynamic = 'force-dynamic';

// "Lost your link?" — emails the link again to an address that already signed up.
// The answer is always the same, so nobody can use this to check who signed up.
export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'bad_request' }, { status: 400 });
  }

  const email = String(body.email ?? '').trim().toLowerCase();
  const lang = body.lang === 'ar' ? 'ar' : 'en';
  if (!isValidEmail(email)) return NextResponse.json({ ok: false, error: 'invalid_email' }, { status: 400 });

  try {
    await callSheet('resend', { email, lang, linkBase: `${siteUrl()}/videos` });
  } catch (err) {
    console.error('videos/resend failed:', err);
    return NextResponse.json({ ok: false, error: 'server_error' }, { status: 500 });
  }
  return NextResponse.json({ ok: true });
}
