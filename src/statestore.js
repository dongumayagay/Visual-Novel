import { writable } from "svelte/store";
import scenes from "./lib/scenes.json";
export let bg = writable();
export let character = writable();
export let canvasWidth = writable();
export let dialog = writable();
export let currentScene = writable(scenes["firstScene"]);

export const delay = 500;
