import { writable } from "svelte/store";

export let bg = writable("pupout.jpg");
export let character = writable();
export let canvasWidth = writable();
export let dialog = writable();
