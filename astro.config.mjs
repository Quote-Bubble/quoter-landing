import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  build: {
    // Single-page site with one stylesheet: inlining it removes the
    // render-blocking CSS request entirely, so first paint needs nothing
    // but the HTML document itself.
    inlineStylesheets: "always",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
