## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

**Important:** The user runs the dev server in a terminal. Do NOT rebuild/restart the dev server unless explicitly asked — changes to Astro components and static files will hot-reload automatically.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Project Context

**Project:** University transfer admissions portfolio for admissions officers (not recruiters)
**Framework:** Astro static site, single scrollable page, mobile-first, semantic HTML
**Styling:** No Tailwind/Bootstrap — use flexbox/grid with `rem`, `%`, `clamp()`
**Deploy:** GitHub Pages (static Astro build)

**Visual Style:**
- White/airy, frosted-glass cards, soft spacing
- Accents: `#fae3f6`, white, blue, `#E723C1`, `#6F23E7`
- Minimal motion — subtle hover states only
- Ornithopter motif: thin translucent silhouette near hero, muted looping video in timeline

**Section Order (from plan):**
Hero → Timeline → About → Research → Leadership → Projects → Awards → Skills → Learning → Hobbies → Contact

**Key Rules:**
- Preserve user's exact wording/voice — don't polish or genericize
- Leave clear placeholders for missing content: `[description missing, add about 50 words here]`, `[project links missing]`, `[Image missing]`
- Mobile-first with readable spacing, relative sizing, no hardcoded pixel-heavy layouts
- One long scrollable page with sticky top nav jumping to sections
- Reusable Astro components, minimal JS
- Clear headings, large featured cards, short text blocks over dense layouts

## Key Reference Files

- **`.github/instructions/portfolio-website.instructions.md`** — Full project instructions (apply to `src/**`, `public/**`)
- **`missing.md`** — Task tracker for missing content/assets (update with `[x]` when done)
- **`src/data/`** — Content data files (projects.ts, leadership.ts, awards.ts, etc.)
- **`public/videos/`** — Ornithopter video assets (hero + timeline)
- **`public/images/`** — Project images (placeholders need replacement)
- **`public/documents/`** — Resume PDF (missing)
