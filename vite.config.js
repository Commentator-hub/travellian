import {resolve} from 'path'
import {defineConfig} from 'vite'
import vitePugPlugin from 'vite-plugin-pug-transformer';

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')


export default defineConfig({
    root: root,
    build: {
        outDir: outDir,
        emptyOutDir: true,
        rollupOptions: {
            input: {
                index: resolve(root, 'index.html'),
                // about: resolve(root, 'about', 'index.html') // Если понадобится добавить несколько страниц.
            }
        }
    },
    plugins: [vitePugPlugin()]
});