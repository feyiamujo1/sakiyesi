# Sàkíyèsí Book Launch Landing Page

A responsive Next.js + Tailwind CSS landing page for **Sàkíyèsí — A Mindful Colouring Experience** by Dr. Adérónkẹ́ Lawal.

## Design direction

The page uses the supplied launch palette:

- Warm Ivory `#F5F0E7` — primary background
- Deep Charcoal `#292622` — text and dark surfaces
- Terracotta Brown `#8B4A2F` — primary accent
- Dusty Mauve `#A9828D` — soft accent
- Muted Sage `#7D8968` — botanical accent
- Dusty Blue `#718A98` — secondary accent
- Warm Sand `#C8B59B` — neutral support
- Soft Gold `#B99A5B` — highlight accent

The supplied book-cover artwork is included locally and used in the hero.

## Badhorse font

The design is set up to use **Badhorse** for the Sàkíyèsí wordmark if you have a licensed webfont file.

1. Put the licensed file at `public/fonts/Badhorse.woff2`.
2. No code changes are required; the CSS already references that path.
3. Until the file is added, the page uses a serif fallback.

The font file itself is intentionally not included.

## Content notes

The book description and feature count are based on the supplied cover copy. The following content is intentionally demo/placeholder content and should be replaced before launch:

- Author biography
- Author portrait
- Launch date, time and venue
- Sales / signed-copy information
- RSVP form backend integration

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production

```bash
npm run build
npm start
```

The project can be deployed directly to Vercel or any platform that supports Next.js.
