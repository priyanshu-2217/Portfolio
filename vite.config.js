import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        heroReveal: {
          "0%": { opacity: 0, transform: "scale(0.92) translateY(30px)" },
          "100%": { opacity: 1, transform: "scale(1) translateY(0)" },
        },
      },
      animation: {
        heroReveal: "heroReveal 0.9s ease-out forwards",
      },
    },
  },
  plugins: [react(), tailwindcss()],
});
