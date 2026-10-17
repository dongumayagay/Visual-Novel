# Simple Visual Novel Engine

A lightweight browser-based visual novel experiment built with **Svelte 3**, **Vite**, and Tailwind CSS. Scenes are modeled as nodes in a directed graph, with transitions representing the player's choices.

## Original demo links

- [Vercel deployment](https://vn-don.vercel.app/)
- [Firebase Hosting deployment](https://vn-don.web.app/)

These URLs came from the original project. Their current availability has **not** been reverified.

## How it works

- `src/App.svelte` — application entry UI.
- `src/lib` — visual-novel components and content.
- `src/statestore.js` — state management.
- The scene graph defines possible narrative paths and player choices.

This is a **Vite + Svelte SPA**, not a SvelteKit application. It does **not** require a SvelteKit adapter to build.

## Run locally

```bash
npm install
npm run dev
```

Build and preview:

```bash
npm run build
npm run preview
```

## Maintenance status

- Uses an older Svelte 3 / Vite 2 toolchain.
- [Dependabot](.github/dependabot.yml) is configured for weekly npm version updates.
- No GitHub Actions have been introduced.
- A full migration to modern Svelte 5/Bun and replacement hosting on Cloudflare is **not yet completed**.

Do not switch the production host until the scene navigation, assets, and user interaction have passed browser testing on the new build.
