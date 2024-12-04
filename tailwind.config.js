/** @type {import('tailwindcss').Config} */
/* index.css */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "bg-gray": "rgb(156 163 175)",
      "bg-white": "rgb(255 255 255)",
      "shadow-item-color": "#9739BF",
      "border-color": "#D98B79",
      "content-color": "#A571D9",
      "text-color": "white",
      "bg-color": "#D98B79",
    },
    fontFamily: {
      sans: ['Nunito', 'ui-sans-serif', 'system-ui'],
    },
    extend: {},
  },
  plugins: [],
};
