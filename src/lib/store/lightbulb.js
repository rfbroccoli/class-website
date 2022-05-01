import { writable } from "svelte/store";

export const numLightBulbs = writable(8)
export const lightBulbs = writable([])