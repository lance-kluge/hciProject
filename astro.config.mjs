// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://lance-kluge.github.io',
	base: '/hciProject',
	trailingSlash: 'always',
	vite: {
		plugins: [tailwindcss()]
	}
});
