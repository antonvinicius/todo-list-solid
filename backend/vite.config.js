import path from 'path'
import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        setupFiles: './src/tests/setup.ts'
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        },
    },
});