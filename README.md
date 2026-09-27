# Anjali Food Industries — Premium B2B Website Demo

React + Vite static website built for Cloudflare Pages.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The deploy directory is `dist/`.

## Cloudflare Pages

- Framework preset: Vite
- Build command: `npm run build`
- Build output directory: `dist`

## Edit business settings

Open `src/data/site.js` and update:

- `whatsappNumber`
- `displayPhone`
- `alternatePhone`
- `email`
- `address`
- `mapsUrl`

The current public Google Maps listing shows **+91 94136 47054** for the business. TradeKeyIndia separately lists **+91 98290 47054**. The supplied artwork also shows these numbers in different places, so confirm the preferred WhatsApp number with the owner before launch.

## Product data

Product names and categories are centralized in `src/data/site.js`. Remove or add products there.

## Images

The website uses the supplied business/product images in `src/assets/` so the demo is self-contained and does not depend on third-party image hosting.

## SEO

Update the domain in `public/robots.txt` and `public/sitemap.xml` once a real domain is known.

## Notes for owner verification

Before publishing for the business, verify any commercial/legal details shown on packaging or older public listings, especially certifications, licence numbers, and contact details. The demo intentionally avoids presenting those as current website claims unless verified.
