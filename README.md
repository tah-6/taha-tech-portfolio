# Syed Taha Irfan — portfolio

Next.js (App Router) + TypeScript + Tailwind CSS. Statically generated.

```
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build
```

## Editing content

All site copy lives in `src/data/content.ts`. Edit that file and every page
updates. Open items are marked `TODO(Taha)`.

- **Resume:** put the PDF at `public/Taha_Irfan_Resume.pdf` and rebuild.
- **Project photos:** put files in `public/projects/<slug>/` and list them in
  that project's `images` array (`{ src, alt }`).
- **Site URL:** set `NEXT_PUBLIC_SITE_URL` to the production domain so the
  sitemap, canonical links and Open Graph tags point at it. On Vercel the
  production URL is used automatically if the variable is unset.

`PORTFOLIO_SPEC.md` is the source of truth for wording and design.
