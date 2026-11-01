// Server-only: creates short-lived links to the private videos in Cloudflare R2.
//
// Env vars (set in Vercel):
//   R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY, R2_BUCKET

import { AwsClient } from 'aws4fetch';

// How long a video link works before the page has to ask for a new one.
const LINK_LIFETIME_SECONDS = 6 * 60 * 60;

let client: AwsClient | null = null;

function getClient(): AwsClient {
  if (!client) {
    const accessKeyId = process.env.R2_ACCESS_KEY_ID;
    const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY;
    if (!accessKeyId || !secretAccessKey) throw new Error('R2 keys are not set');
    client = new AwsClient({ accessKeyId, secretAccessKey, service: 's3', region: 'auto' });
  }
  return client;
}

export async function signedVideoUrl(file: string): Promise<string> {
  // Accept either the bare 32-character ID or the full
  // https://<id>.r2.cloudflarestorage.com address.
  const rawAccount = process.env.R2_ACCOUNT_ID ?? '';
  const accountId = rawAccount.match(/[0-9a-f]{32}/i)?.[0] ?? rawAccount.trim();
  const bucket = process.env.R2_BUCKET || 'saddah-videos';
  if (!accountId) throw new Error('R2_ACCOUNT_ID is not set');

  const objectPath = file.split('/').map(encodeURIComponent).join('/');
  const url = new URL(`https://${accountId}.r2.cloudflarestorage.com/${bucket}/${objectPath}`);
  url.searchParams.set('X-Amz-Expires', String(LINK_LIFETIME_SECONDS));

  const signed = await getClient().sign(new Request(url, { method: 'GET' }), {
    aws: { signQuery: true },
  });
  return signed.url;
}
