# Simple Visual Novel Engine

using [Svelte](https://svelte.dev/) a Web Frontend Framework and [Tailwind CSS](https://tailwindcss.com/) for Styling using Directed Graph Data Structure to model relationship between Scene.

## [Click here to view the live project](https://visual-novel-don.vercel.app/)

Every Scene in Visual notel act as a Node in a Graph Data Structure it contains all possible path that exists.

## Prerequisite

Node.js (Latest Version)

## Setup

download or clone the repo.
then install dependencies

```
# for npm
npm install

# for yarn
yarn

# for pnpm
pnpm install
```

to run a dev server

```
npm run dev
```

to expose local development web server to you local network
add --host to arguments

to automatically open a new tab for your development server
add --open to arguments

example:

```
npm run dev -- --host --open
```

to compile your project for distribution. the compiled files will be in 'dist' folder

```
npm run build
```

to preview the compiled project

```
npm run preview
```
