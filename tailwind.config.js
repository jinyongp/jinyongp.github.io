/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./{layouts,static}/**/*.{html,css,js}",
  ],
  theme: {
    extend: {
      colors: {
        "accent": "var(--accent)",
      },
      width: (theme) => theme("maxWidth"),
      height: (theme) => theme("maxHeight"),
    },
  },
  plugins: [],
}
