const colors = require('tailwindcss/colors')

module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './hoc/**/*.{js,ts,jsx,tsx}'],
    darkMode: false,
    theme: {
        extend: {},
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            ...colors
        },
        fontFamily: {
            'rmono': ['"JetBrains Mono"','"Roboto Mono"', "Roboto", "Poppins", "sans-serif"]
        }
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms')
    ]
}
