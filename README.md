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

The contact form submits through Web3Forms from the browser.

1. Copy `.env.example` to `.env.local`
2. Add your Web3Forms key:

```bash
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_key_here
```

Without that env var, the form will stay visible but show a configuration error instead of sending.

## Quality Checks

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Notes

- This repo intentionally keeps most pages as Server Components and limits `"use client"` to interactive UI.
- The workspace includes AI-agent helper files like `AGENTS.md` and `CLAUDE.md`; they are repo tooling, not app runtime code.
