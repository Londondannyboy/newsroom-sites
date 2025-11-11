/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#10b981', // Green theme for agricultural/farming
        secondary: '#059669',
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
}
