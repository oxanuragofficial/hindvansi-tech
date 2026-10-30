# Hindvansi Tech website

Single-page company website built with React 19, Vite and Tailwind CSS 4. Fonts (Sora and Manrope) are self-hosted, so the site makes no third-party font requests.

## Run it

```bash
npm install
npm run dev       # development server
npm run build     # production build in dist/
npm run preview   # serve the production build locally
```

Needs Node 20 or newer (built and tested on Node 22).

## Contact details and messages

Everything is in one file: `src/config.js`.

- Phone / WhatsApp: +91 74795 21662
- Email: hindvansitech.support@gmail.com
- Every WhatsApp, call and email button reads from this file, including the pre-written messages (general enquiry, per-service quote, per-project "I want something like this").

Change a number or a message there and the whole site updates.

## Content

| What | File |
| --- | --- |
| Services, projects, process, FAQ, form options | `src/data.js` |
| Colours, fonts, buttons, shared styles | `src/index.css` (`@theme` block at the top) |
| Logo | `src/components/Logo.jsx` and `public/favicon.svg` |
| Page sections | `src/components/Sections.jsx`, `Hero.jsx`, `Contact.jsx` |

## How the contact form works

The form has no server behind it. The visitor fills it in and chooses **Send on WhatsApp** or **Send by Email**. That opens WhatsApp (to your number) or their email app (to your address) with the whole enquiry written out, and the visitor presses send there. The page says this plainly and never claims a message was delivered. If you later want submissions to arrive by themselves, connect a form service such as Formspree.

## Deploy

- **Vercel**: import the repo, framework preset Vite, build command `npm run build`, output `dist`.
- **Netlify**: build command `npm run build`, publish directory `dist`.
- **GitHub Pages**: set `VITE_BASE=/your-repo-name/` before building, then publish `dist/`.
- **Any static host**: upload the contents of `dist/`.

It is a single page, so no rewrite rules are needed.

## Project previews

The sandbox this was built in could not open the live sites, so the previews are not live screenshots. Four were rendered from each project's public source code and two (La Bella Vista, Elite Salon) come from the screenshots in your `project-archive` repository. Each project card says which it is. To use real live screenshots, replace the files in `public/work/` (`<name>.webp` at 1440x900 and `<name>-720.webp` at 720x450).

## Tested

Run in headless Chromium against the production build: all 50 automated checks passed. They cover every phone, WhatsApp and email link (correct number, address and message), every external link (opens in a new tab, safe attributes), all page anchors, the six project tabs with their live, source and WhatsApp buttons, form validation, what the form sends to WhatsApp and email, the mobile menu and bottom bar, and no horizontal overflow at 320, 375, 430, 768, 1024, 1366 and 1920 px. No console errors.

Not tested: the six live project URLs (unreachable from the sandbox), real phones and tablets, Safari and Firefox, screen readers, a Lighthouse run, and an actual deployment.

## Please confirm

1. **Email address**: your message said `hindvansitech.support@gmil.com`; the site uses `@gmail.com`. Correct it in `src/config.js` if that is wrong.
2. **Project labels**: the four business sites are labelled "Concept website" and Project Namma "Front-end study". Change `kind` in `src/data.js` if any were real client work.
3. **Shanti Institute**: its repository README says faculty and achievement text is sample content, and the preview shows real student photos. Confirm the institute is happy for it to be shown.
4. **Project Namma**: the live URL in your brief and the one in its README differ (`oxanurag.github.io` vs `oxanuragofficial.github.io`). Open both and keep the working one.
5. **Budget ranges** in the form (`src/data.js`) are placeholders.
6. **Privacy policy**: none is included. Add one if you start storing enquiries.
7. **Logo**: original design; run a trademark check before relying on it commercially.

## Polish pass (v2.1)
- All section headings are left-aligned; Services no longer orphans a card at tablet width.
- Buttons wrap instead of overflowing; long email addresses break cleanly at the @.
- Phones: pill tabs for projects, compact process and "why" rows, two-column footer links.
- Header: active-section underline, scroll progress bar, WhatsApp CTA with a soft shine (disabled under reduced motion).
- Re-tested: 50 functional checks pass, no horizontal overflow from 320px to 1920px.

## Design v3
A new visual identity: warm paper background, warm black ink, one vermilion accent and a deep forest-green contact section. Fraunces (headlines) and Manrope (text) are self-hosted. The logo was recoloured to match.
- Floating pill header with active-section highlight and a reading-progress line; full-screen mobile menu.
- Hero: laptop plus phone preview slideshow of three real projects.
- Our Work: all six projects shown at once in browser frames (1 column on phones, 2 on tablets, 3 on desktop), each with Live site, Code and a prefilled "I want something like this" WhatsApp link.
- Colours live in the `@theme` block at the top of `src/index.css`.
