import path from 'path';
import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
	test: {
		globals: true,
		environment: 'jsdom',
		coverage: {
			all: true,
			include: ['src/routes/**/*.ts', 'src/routes/**/*.svelte']
		}
	},
	root: '.',
	esbuild: {
		tsconfigRaw: '{}'
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src/routes')
		}
	},
	plugins: [svelte()]
});
