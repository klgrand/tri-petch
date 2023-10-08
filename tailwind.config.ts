import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["var(--roboto-font)"]
      },
      screens: {
        "sm": { "min": "120px"}
      },
      colors: {
        "primary-gray": {
          DEFAULT: "#F5F4F9"
        },
        "primary-purple": {
          DEFAULT: "#5E3DB3"
        },
        "primary-blue": {
          DEFAULT: "#090C35"
        },
        "title-color": "#C2C2C2",
        "header-color": "#E7E7E7"
      }
    },
  },
  plugins: [],
}
export default config
