import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    srcDir: 'src',
    disDir: 'dist',
    markdown: {
        syntaxHighlighting: true,
        extension: 'md',
    },
});
