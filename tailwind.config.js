/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        colors: {
            primary: '#ffffff', //dark blue, ligth text
            secondary: '#20252E', //dark blue, dark text
            accent: '#3767b5', //light blue

            lightBg: '#ffffff',
            'lightBg-alt': '#f0f0f0',

            darkBg: '#20252E',
            'darkBg-alt': '#252A33',
            white: '#ffffff',
        },
        fontFamily: {
            sans: ['Poppins', 'sans-serif'],
        },
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
        dropShadow: {},
    },

    plugins: [],
};
