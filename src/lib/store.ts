import { browser } from '$app/env';
import { writable } from 'svelte/store';

export const DarkTheme = writable(
	(browser && JSON.parse(localStorage.getItem('DarkTheme'))) || false
);

DarkTheme.subscribe((val) => browser && (localStorage.DarkTheme = JSON.stringify(val)));
