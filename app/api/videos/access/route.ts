import { NextResponse } from 'next/server';
import { checkKey } from '../../../../lib/sheet';
import { signedVideoUrl } from '../../../../lib/r2';
import { VIDEOS } from '../../../../lib/videoCatalog';

export const dynamic = 'force-dynamic';

// Called by /videos with the student's personal key.
// Valid key  -> short-lived playback links for every video.
// Otherwise  -> 401, and the page shows the locked preview.
export async function GET(req: Request) {
  const key = new URL(req.url).searchParams.get('key')?.trim() ?? '';
  if (!/^[a-zA-Z0-9]{16,64}$/.test(key)) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  try {
    const { valid, name } = await checkKey(key);
    if (!valid) return NextResponse.json({ ok: false }, { status: 401 });

    const videos = await Promise.all(
      VIDEOS.map(async (v) => ({ id: v.id, url: await signedVideoUrl(v.file) })),
    );
    return NextResponse.json(
      { ok: true, name, videos },
      { headers: { 'Cache-Control': 'no-store' } },
    );
  } catch (err) {
    console.error('videos/access failed:', err);
    return NextResponse.json({ ok: false, error: 'server_error' }, { status: 500 });
  }
}
