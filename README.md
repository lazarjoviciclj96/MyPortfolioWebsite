# Lazar Jovičić — QA Portfolio

A dark-themed, neon-green portfolio site for a Manual & Automation QA Engineer,
built with Next.js (App Router), TypeScript, and Tailwind CSS v4. The hero
section features a custom canvas grid background that reacts to cursor
movement with a glowing spotlight effect.

## Tech Stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4** (CSS-based theme tokens, no `tailwind.config.js` needed)
- **Canvas API** for the interactive grid background (no animation library)
- **next/font** for optimized Geist Sans / Geist Mono loading

## Project Structure

```
src/
  app/
    layout.tsx        # Root layout, fonts, global metadata
    page.tsx           # Assembles all sections into the homepage
    globals.css         # Theme tokens (colors, glow utilities) + Tailwind import
  components/
    Header.tsx          # Sticky nav bar with logo + mobile menu
    Hero.tsx             # Hero section: value prop, CTAs, stats, grid background
    InteractiveGrid.tsx  # Canvas-based cursor-reactive grid (client component)
    About.tsx            # Summary, highlights, experience timeline, skills
    Projects.tsx         # Project cards grid
    Referrals.tsx        # Testimonials / recommendations
    Contact.tsx          # Email + social links (mailto, LinkedIn, GitHub)
    Footer.tsx           # Footer with back-to-top link
  data/
    profile.ts           # ALL editable content lives here (see below)
```

## Editing Content

Every piece of visible text — name, headline, bio, experience, skills,
projects, testimonials, and contact links — lives in **`src/data/profile.ts`**.
You should not need to touch component files to update copy; just edit the
data objects there:

- `personal` — name, handle, role, email, LinkedIn/GitHub links
- `hero` — eyebrow tag, headline, subheadline, CTA labels/links, stats
- `about` — summary, highlights, experience timeline, education, skills
- `projects` — project cards (title, description, tags, links)
- `referrals` — testimonial quotes
- `contact` — heading/subheading above the contact links

The current copy in `profile.ts` is **placeholder content** shaped around a
QA Manual/Automation Engineer profile. Replace it with real details pulled
from the LinkedIn profile (linkedin.com/in/lazarjovicic96) before shipping.

## Theming

Colors are defined as CSS custom properties in `src/app/globals.css` and
exposed to Tailwind via `@theme inline`, so they're usable as utility classes
like `bg-background`, `text-neon`, `border-neon-dim`, etc.

| Token | Purpose |
|---|---|
| `--background` | Page background (near-black) |
| `--background-elevated` | Card/section background, one step lighter |
| `--foreground` | Primary text color (off-white) |
| `--muted` | Secondary/body text |
| `--border` | Subtle borders/dividers |
| `--neon` | Primary neon green (CTAs, glow accents, logo) |
| `--neon-soft` | Softer green for body-safe highlights/links |
| `--neon-dim` | Very dim green for borders and idle states |

Two utility classes add the neon glow look: `.text-glow` (text-shadow) and
`.border-glow` (box-shadow), used sparingly on key elements like the logo and
hover states.

## Interactive Grid Background

`InteractiveGrid.tsx` draws a grid of lines/dots on a `<canvas>` sized to its
parent section, then layers an additive radial-gradient "spotlight" at the
(smoothed) cursor position using `globalCompositeOperation = "lighter"` —
this brightens whatever grid lines fall under the glow without a second
geometry pass. It:

- Uses `requestAnimationFrame` with linear interpolation for a smooth trailing
  glow instead of snapping straight to the pointer.
- Recenters to the middle of the section when the pointer leaves.
- Falls back to a static (non-animated) grid when
  `prefers-reduced-motion: reduce` is set.
- Resizes with the window/container automatically.

To adjust the look, tweak the constants at the top of the file:
`GRID_SIZE` (spacing), `GLOW_RADIUS` (spotlight size), and the color
constants.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

Other scripts:

```bash
npm run build   # production build
npm run start   # run the production build
npm run lint    # lint the project
```

## Deployment

This is a standard Next.js app — deploy it on [Vercel](https://vercel.com/new)
(recommended, zero-config) or any Node hosting provider that supports
`next build` / `next start`.

## Roadmap / Next Steps

- [x] Real LinkedIn/resume content in `src/data/profile.ts`
- [x] Real headshot in the About section (`public/headshot.png`)
- [x] Resume download button wired to `public/resume.pdf`
- [ ] Replace the sample quotes in the Referrals section with real LinkedIn recommendations
- [ ] Consider a functional contact form (e.g. Resend, EmailJS) instead of `mailto:`
- [ ] Add OG image / favicon branding
- [ ] Confirm/add a public GitHub profile link if you want one in Contact
