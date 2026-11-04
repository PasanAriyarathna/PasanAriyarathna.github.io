# Pasan Ariyarathna — Portfolio

Personal portfolio built with React, TypeScript, Vite, and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

## Edit content

- `src/data/site.ts` — name, email, phone, social links, CV path
- `src/data/projects.ts` — project copy, screenshots, and links
- `src/data/skills.ts` — skill groups
- `src/data/experience.ts` — experience and competitions
- `src/data/education.ts` — education records
- `src/data/certificates.ts` — certificates

Screenshots live in `src/assets/projects/`. The CV is `public/cv/Pasan-Ariyarathna.pdf`. Certificate files live in `public/certificates/`.

Leave `image` as `null` when a project has no screenshot. The showcase shows a labelled placeholder.

## Contact form

The form validates in the browser. It does not send email until you set `VITE_FORMSPREE_ENDPOINT` in a `.env` file. See `.env.example`.
