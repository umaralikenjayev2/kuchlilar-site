// tailwind.config.ts
import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#ecfff6",
          100: "#d4ffe9",
          200: "#a7fed2",
          300: "#6df9b5",
          400: "#2fec95",
          500: "#12c876",   // primary (yashil)
          600: "#0ca762",
          700: "#0a8750",
          800: "#0a6c43",
          900: "#0a5738",
        },
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(1200px 600px at 80% 10%, rgba(18,200,118,.25), transparent 60%), radial-gradient(800px 400px at 0% 0%, rgba(59,130,246,.18), transparent 60%)",
      },
    },
  },
  plugins: [typography],
} satisfies Config;