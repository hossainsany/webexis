/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'selector',
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        colors: {
            primary: '#ffffff', //dark blue, ligth text
            secondary: '#20252E', //dark blue, dark text
            tertiary: '#292F39', //light blue
            accent: '#3767b5', //accent blue

            lightBg: '#ffffff',
            'lightBg-alt': '#f0f0f0',

            darkBg: '#20252E',
            'darkBg-alt': '#252A33',
            white: '#ffffff',
        },
        fontFamily: {
            poppins: ['var(--font-poppins)'],
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
