import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#142B3D",
        navyDeep: "#0F2130",
        teal: "#0E7C7B",
        cream: "#FAF7F2",
        creamDeep: "#F3EDE4",
        secondary: "#6B7280",
        body: "#445468",
        gold: "#D6A75C",
        whatsapp: "#25D366",
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        sans: ["Inter", "Helvetica", "Arial", "sans-serif"],
      },
      keyframes: {
        dash: { from: { strokeDashoffset: "620" }, to: { strokeDashoffset: "0" } },
        pulseSoft: {
          "0%": { boxShadow: "0 0 0 0 rgba(37,211,102,0.45)" },
          "70%": { boxShadow: "0 0 0 16px rgba(37,211,102,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(37,211,102,0)" },
        },
        tipIn: {
          from: { opacity: "0", transform: "translateX(8px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        dash: "dash 1.8s ease-out forwards",
        pulseSoft: "pulseSoft 3.4s ease-out infinite",
        tipIn: "tipIn 300ms ease-out both",
      },
    },
  },
  plugins: [],
} satisfies Config;
