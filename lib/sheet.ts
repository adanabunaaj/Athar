// Server-only helper that talks to the Google Apps Script attached to the
// Saddah Google Sheet. The script stores signups, checks personal keys and
// sends the emails (from saddah.info@gmail.com).
//
// Env vars (set in Vercel):
//   APPS_SCRIPT_URL     the "Web app" URL from Deploy > Manage deployments
//   APPS_SCRIPT_SECRET  the same value saved as SECRET in the script's properties

type ScriptResponse = { ok: boolean; [key: string]: unknown };

export async function callSheet(action: string, data: Record<string, unknown>): Promise<ScriptResponse> {
  const url = process.env.APPS_SCRIPT_URL;
  const secret = process.env.APPS_SCRIPT_SECRET;
  if (!url || !secret) {
    throw new Error('APPS_SCRIPT_URL / APPS_SCRIPT_SECRET are not set');
  }

  const res = await fetch(url, {
    method: 'POST',
    // text/plain avoids a CORS preflight and is what Apps Script expects
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify({ secret, action, ...data }),
    redirect: 'follow',
    cache: 'no-store',
  });

  const text = await res.text();
  try {
    return JSON.parse(text) as ScriptResponse;
  } catch {
    throw new Error(`Unexpected response from Apps Script (${res.status})`);
  }
}

// Key checks happen on every visit, so remember answers for a few minutes.
// A key switched off in the sheet stops working within KEY_CACHE_MS.
const KEY_CACHE_MS = 5 * 60 * 1000;
const keyCache = new Map<string, { valid: boolean; name: string; at: number }>();

export async function checkKey(key: string): Promise<{ valid: boolean; name: string }> {
  const hit = keyCache.get(key);
  if (hit && Date.now() - hit.at < KEY_CACHE_MS) return hit;

  const r = await callSheet('check', { key });
  const entry = { valid: r.ok === true && r.valid === true, name: String(r.name ?? ''), at: Date.now() };
  keyCache.set(key, entry);
  return entry;
}

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) && email.length <= 254;
}

export function siteUrl(): string {
  // On Vercel preview deployments, email links point back to the preview itself.
  if (process.env.VERCEL_ENV === 'preview' && process.env.VERCEL_BRANCH_URL) {
    return `https://${process.env.VERCEL_BRANCH_URL}`;
  }
  return (process.env.SITE_URL || 'https://saddah.vercel.app').replace(/\/$/, '');
}
