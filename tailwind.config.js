/** @type {import('tailwindcss').Config} */
import nesting from "postcss-nesting";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  important: true,
  theme: {
    extend: {
      animation: {
        spin: "spin 3s linear infinite",
        loop1: "gradient 10s linear infinite",
        loop2: "gradient 5s linear infinite",
      },
      keyframes: {
        bounce: {
          "0%, 100%": {
            transform: "translateY(-45%)",
            "animation-timing-function": "cubic - bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
        gradient: {
          "0% ": {
            transform: "translateX(0)",
          },
          "50%": {
            transform: " translateX(10%)",
          },
          "100%": {
            transform: " translateX(0)",
          },
        },
      },
    },
  },
  plugins: [nesting],
};
