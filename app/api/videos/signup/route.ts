import { NextResponse } from 'next/server';
import { callSheet, isValidEmail, siteUrl } from '../../../../lib/sheet';

export const dynamic = 'force-dynamic';

// A student fills in the form on /videos.
// The sheet saves them (source "Videos") and emails their personal link.
// If the email already signed up, the existing link is emailed again instead.
export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'bad_request' }, { status: 400 });
  }

  // Hidden "website" field: real people leave it empty, bots fill it in.
  if (typeof body.website === 'string' && body.website.trim() !== '') {
    return NextResponse.json({ ok: true });
  }

  const name = String(body.name ?? '').trim().slice(0, 120);
  const email = String(body.email ?? '').trim().toLowerCase();
  const lang = body.lang === 'ar' ? 'ar' : 'en';

  if (!name) return NextResponse.json({ ok: false, error: 'missing_name' }, { status: 400 });
  if (!isValidEmail(email)) return NextResponse.json({ ok: false, error: 'invalid_email' }, { status: 400 });

  try {
    const r = await callSheet('signup', {
      name,
      email,
      lang,
      source: 'Videos',
      linkBase: `${siteUrl()}/videos`,
    });
    if (!r.ok) throw new Error(String(r.error ?? 'sheet_error'));
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('videos/signup failed:', err);
    return NextResponse.json({ ok: false, error: 'server_error' }, { status: 500 });
  }
}
