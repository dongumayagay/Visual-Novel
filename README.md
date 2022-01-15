# Simple Visual Novel Engine

using [Svelte](https://svelte.dev/) a Web Frontend Framework and [Tailwind CSS](https://tailwindcss.com/) for Styling using `Directed Graph Data Structure` to model relationship between Scene.

### [Click here to view the live project](https://vn-don.vercel.app/) or [here](https://vn-don.web.app/)

Every Scene in Visual notel act as a Node in a Graph Data Structure it contains all possible path that exists.

Node.js (Latest Version)

## Setup

1. download or clone the repo.

2. then install dependencies

```bash
# for npm
npm install

# for yarn
yarn

# for pnpm
pnpm install
```

## Developing

start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
npm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.
