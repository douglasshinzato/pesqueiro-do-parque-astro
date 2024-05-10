/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin")

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        fadeInDown: "fadeInDown 1s ease-out",
        fadeInUp: "fadeInUp 1s ease-out",
      },
      keyframes: {
        fadeInDown: {
          "0%": { opacity: 0, transform: "translateY(-100%)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(100%)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        kalam: ["Kalam", "cursive"],
      },
      backgroundImage: {
        "hero-background": "url('/hero-background.webp')",
        "footer-background": "url('/footer-background.webp')",
        "gallery-background": "url('/gallery-background.webp')",
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      )
    }),
  ],
}
