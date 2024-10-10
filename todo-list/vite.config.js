import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// https://vitejs.dev/config/
export default defineConfig({
    base: '/todo-app-vue-localstorage/',
    plugins: [vue()],
    resolve: {
        alias: {
            '@': '/src', // Ensure this is correct
        },
    },
});
