/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                oswald: ['Oswald', 'sans-serif'],
                roboto: ['Roboto', 'sans-serif'],
            },
            colors: {
                'tactical-black': '#1a1a1a',
                'tactical-gray': '#2b2b2b',
                'tactical-red': '#e63946',
                'camo-green': '#4a5d23',
            },
            animation: {
                'fade-in-up': 'fadeInUp 1s ease-out forwards',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            }
        },
    },
    plugins: [],
}
