/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
export default {
  content: ["./src/**/*.{html,ts,tsx}"],
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ef4444",
          secondary: "#fca5a5",
          accent: "#a8a29e",
          neutral: "#1f2625",
          "base-100": "#fcfcfc",
          info: "#fde047",
          success: "#22c55e",
          warning: "#ea580c",
          error: "#b91c1c",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
};
