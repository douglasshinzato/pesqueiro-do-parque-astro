/** @type {import('tailwindcss').Config} */
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
        "hero-background": "url('/src/assets/hero-background.webp')",
        "footer-background": "url('/src/assets/footer-background.webp')",
        "gallery-background": "url('./src/assets/02.webp')",
      },
    },
  },
  plugins: [],
}
