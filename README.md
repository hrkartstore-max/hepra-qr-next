# HEPRA QR Manager

Next.js 15 application for managing dynamic QR codes.

## Vercel deployment

Set these environment variables before using the admin features:

- DATABASE_URL
- ADMIN_USER
- ADMIN_PASSWORD
- SESSION_SECRET
- FALLBACK_URL
- NEXT_PUBLIC_BASE_URL (optional)

The application uses Neon Postgres. See `.env.example` and `schema.sql` for setup details.

Run locally with `npm install` and `npm run dev`.
