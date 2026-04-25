# Zackary Brown Web Solutions

Marketing site for Zackary Brown Web Solutions, built with Next.js App Router.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4 for global styling primitives
- `next/font` for `DM Sans` and `Instrument Serif`

## Project Structure

```text
src/app/            Routes and page-level metadata
src/components/     Shared UI building blocks
public/             Static images and project screenshots
```

## Local Development

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Contact Form Configuration

The contact form submits to the local `/api/contact` route, which then forwards the payload to Web3Forms from the server.

1. Copy `.env.example` to `.env.local`
2. Add your Web3Forms key:

```bash
WEB3FORMS_ACCESS_KEY=your_key_here
```

3. Add Upstash Redis credentials for shared cross-instance rate limiting:

```bash
UPSTASH_REDIS_REST_URL=your_upstash_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_token
```

If Upstash env vars are omitted, the API falls back to an in-memory limiter (acceptable for local development, not ideal for multi-instance production).

Without that env var, the form will stay visible but show a configuration error instead of sending.

## Analytics Configuration

Google Analytics 4 is optional. If you want the built-in CTA and form events to send to GA, add your measurement ID:

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Without that env var, analytics stays disabled.

## Quality Checks

```bash
npm run lint
npm run typecheck
npm run build
```

## CI

GitHub Actions runs `lint`, `typecheck`, and `build` on pushes and pull requests to `main`.

## Notes

- This repo intentionally keeps most pages as Server Components and limits `"use client"` to interactive UI.
- The workspace includes AI-agent helper files like `AGENTS.md` and `CLAUDE.md`; they are repo tooling, not app runtime code.
