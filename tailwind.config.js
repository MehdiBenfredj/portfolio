/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'vscode-blue': '#011628',
        'name-color': '#c3d2df',
      },
    },
  },
  plugins: [],
}