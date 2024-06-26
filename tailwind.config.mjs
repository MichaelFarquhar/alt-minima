/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Titillium Web', 'sans-serif'],
            },
            colors: {
                'th-font': '#eeecdf',
                'th-blue': '#a6becc',
                'th-bg': '#1d232a',
            },
        },
    },
    plugins: [],
};
