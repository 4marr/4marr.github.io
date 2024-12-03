/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
  content: ['./public/**/*.{html,js}', './index.html', './blog/index.html', './projects/index.html', './404.html'],
  theme: {
    extend: {
        colors: {
            "l-base": "#eff1f5",
            "l-on-base": "#4c4f69",
            "d-base": "#111215",
            "d-on-base": "rgb(156 163 175)",
        }
    },
  },
  plugins: [],
}
