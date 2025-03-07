import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}', // Adjust this according to your project structure
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config
