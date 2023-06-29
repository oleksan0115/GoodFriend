import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
    server: {
        port: 10010
    },
    preview: {
        port: 10010
    },	
	plugins: [sveltekit()]
});