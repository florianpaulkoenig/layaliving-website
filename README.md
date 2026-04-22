# Laya Living — Website

Public marketing site for [layaliving.ch](https://www.layaliving.ch) — Triangolo apartment, Kriens / Lucerne.

Completely separate from the private [`laya-host-app`](https://github.com/florianpaulkoenig/laya-host-app) (admin dashboard) — different Supabase project, different Vercel deployment, different repo.

## Stack

- Next.js 14 (App Router, TypeScript)
- Tailwind CSS + Cormorant Garamond + Lato + Dancing Script
- Supabase (public-reads-only for Recommendations)
- Lodgify Book-Now-Box embed
- Deployed on Vercel

## Setup

```bash
npm install
cp .env.example .env.local   # then fill in the anon + service role keys
npm run dev                   # http://localhost:3000
```

## Pages

| Route | What |
|---|---|
| `/` | Landing page (Hero + apartment USPs + local experience + CTA) |
| `/location` | Triangolo location + access info |
| `/recommendations` | Curated Lucerne guide (categories + filters — W.3) |
| `/contact` | Email + address |
| `/book` | Lodgify Book-Now-Box embed (direct booking, no fees) |
| `/welcome` | Guest-only page, not in navigation, QR-code access (W.2) |
| `/impressum` · `/datenschutz` | Legal |

## Deployment

Production on Vercel, auto-deploys on push to `main`. This project's env vars are its own separate set.

## Roadmap

- **W.1** Home / Location / Contact / Book (done)
- **W.2** Welcome page (guest guide) + QR code
- **W.3** Recommendations tool (DB schema, filters, CMS-editable entries)
- **W.4** Content curation (populate ~80 recommendations)
- **W.5** Custom domain swap: `www.layaliving.ch` from Squarespace → Vercel
