# Monten Top

Marketing site for Monten Top — AI-powered short-term rental management for
property investors in the United Kingdom and Ireland.

Built with Next.js (App Router), React and TypeScript. Styling is hand-written
CSS (`app/globals.css`) with design tokens for colour, type and spacing; no CSS
framework is required.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run typecheck
```

## Structure

```
app/
  layout.tsx          Fonts, metadata, header/footer/cookie chrome
  page.tsx            Homepage composition + JSON-LD (Organization, FAQPage)
  globals.css         Design system and all section styles
  api/enquiry/route.ts  Enquiry validation and delivery
  privacy/, terms/    Legal placeholder pages
components/           One component per section, shared UI in icons.tsx / Logo.tsx
lib/content.ts        All copy, service data, FAQ and form options
public/images/        Locally hosted WebP photography
```

## Enquiry form

`POST /api/enquiry` validates the submission, silently discards honeypot hits,
and delivers the enquiry through whichever destination is configured:

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Resend API key used to email the enquiry |
| `ENQUIRY_TO_EMAIL` | Team inbox that receives enquiries |
| `ENQUIRY_FROM_EMAIL` | Verified sender, e.g. `Monten Top <enquiries@domain.com>` |
| `ENQUIRY_WEBHOOK_URL` | Optional CRM/automation endpoint that also receives the JSON |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL for metadata |

Copy `.env.example` to `.env.local` and fill in the values. At least one of
Resend or the webhook must be configured; in production the route returns a
clear 503 rather than pretending an undelivered enquiry succeeded, and in
development it logs the payload and returns success so the UI can be exercised.

Before launch: replace `CONTACT_EMAIL` in `lib/content.ts` with the real inbox,
and have the privacy and terms pages reviewed.

## Positioning guardrails baked into the copy

- Sold as a fully managed service, not software.
- AI is described as the operating engine; physical work is always attributed to
  people and local partners.
- No guaranteed income, no invented testimonials, clients, awards or statistics.
- Dashboard figures are labelled illustrative demo data.
- Coverage is limited to the UK and Ireland, with location confirmed per enquiry.
