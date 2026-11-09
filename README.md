# HEPRA QR Manager v2

Dynamic QR codes with editable destinations, scan analytics, and SVG/PNG export.

## Deploy on Vercel
1. Create a Neon PostgreSQL database and copy its pooled connection string.
2. Add DATABASE_URL, ADMIN_USER, ADMIN_PASSWORD, SESSION_SECRET (at least 16 characters; use 32+ random characters), FALLBACK_URL and optionally NEXT_PUBLIC_BASE_URL in Vercel Project Settings → Environment Variables.
3. Redeploy and visit /admin.

Tables are created automatically on first admin visit. schema.sql is included for manual setup.

## Local development
Copy .env.example to .env.local, set real values, then run npm install and npm run dev.

## Features
Create custom/random QR codes; edit destinations without reprinting; pause/delete; analytics by day/device/OS; approximate unique devices; CSV export; QR colors/error correction/optional logo; SVG and PNG downloads.

Security: admin routes and server actions use signed HttpOnly cookies; passwords and secrets must remain private. IP addresses are stored only as salted hashes. Destination schemes are restricted to http, https, tel, mailto, upi and sms.