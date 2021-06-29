import { default as App } from './App.svelte';
import type { MyProps } from './App.svelte';

const app = new App({
	target: document.body
});

export const Props : MyProps = { name: 'something', other: 'something' }

export default app;