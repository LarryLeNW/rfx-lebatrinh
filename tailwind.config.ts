import type { Config } from 'tailwindcss'

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: '#1CA8CB',
            },
            fontFamily: {
                montez: ['Montez', 'cursive'],
            },
            animation: {
                'spin-slow': 'spin 20s linear infinite',
            },
        },
    },
    plugins: [],
} satisfies Config
