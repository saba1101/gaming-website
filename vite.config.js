import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { minify } from 'terser'
import path from 'path'
export default defineConfig({
    plugins: [react()],

    server: {
        port: 5005,
        open: true,
    },

    build: {
        modulePreload: false,
        target: 'esnext',
        minify: false,
        cssCodeSplit: false,
        // outDir: 'dist',
        // minify: 'terser',
        // sourcemap: true,
        // cssCodeSplit: true,
        // terserOptions: {
        //     compress: {
        //         drop_console: true,
        //     },
        //     // minify,
        // },
    },
    resolve: {
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },

    optimizeDeps: {
        include: ['react', 'react-dom'],
    },

    css: {
        modules: true,
        preprocessorOptions: {
            scss: {
                additionalData: `
            @import "@/styles/styleAssets/_variables.scss";
            @import "@/styles/styleAssets/_mixins.scss";
            @import "@/styles/styleAssets/_tokens.scss";
            @import "@/styles/styleAssets/_fonts.scss";
        `,
            },
        },
    },
})
