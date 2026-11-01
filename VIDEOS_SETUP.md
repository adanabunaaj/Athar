# Video library setup (/videos)

## 1. Cloudflare R2 (videos)
- Bucket `saddah-videos`, public access OFF.
- Account API token with **Object Read only** on that bucket.
- File names in the bucket must match `lib/videoCatalog.ts`.

## 2. Google Sheet (signups + emails), logged in as saddah.info@gmail.com
1. Create a Google Sheet called "Saddah Video Library".
2. Extensions → Apps Script. Replace everything with `google-apps-script/Code.gs`. Save.
3. Choose the `setup` function → Run → allow the permissions.
   The log shows a long secret: copy it.
4. Deploy → New deployment → type **Web app**.
   - Execute as: **Me**
   - Who has access: **Anyone**
   Copy the **Web app URL**.

## 3. Vercel environment variables
| Name | Value |
|---|---|
| `R2_ACCOUNT_ID` | Cloudflare account ID |
| `R2_ACCESS_KEY_ID` | from the R2 token |
| `R2_SECRET_ACCESS_KEY` | from the R2 token |
| `R2_BUCKET` | `saddah-videos` |
| `APPS_SCRIPT_URL` | Web app URL from step 2.4 |
| `APPS_SCRIPT_SECRET` | secret from step 2.3 |
| `SITE_URL` | `https://saddah.vercel.app` |

Redeploy after adding them.

## Day to day
- **Switch off a shared link:** set "Active" to `No` in the Signups tab (takes up to 5 minutes).
- **Add a video:** upload it to the bucket, then add a line to `lib/videoCatalog.ts`.
- **Changed Code.gs?** Deploy → Manage deployments → edit → new version (keeps the same URL).
