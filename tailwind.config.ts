import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: "#F7F5F0",
          pure: "#FFFFFF",
          subtle: "#EFECE4",
          card: "#FFFFFF",
          dark: "#0F0F11",
          darkCard: "#17171A",
          darkSubtle: "#222226",
        },
        ink: {
          DEFAULT: "#121214",
          pure: "#000000",
          muted: "#666460",
          light: "#96948E",
          faint: "#D4D1C9",
          dark: "#EFEFEF",
          darkMuted: "#A1A1AA",
        },
        brand: {
          coral: "#FF4D4D",
          coralHover: "#FF3333",
          cobalt: "#2B4CFF",
          cobaltHover: "#1E3AE8",
          lime: "#D4FF32",
          limeHover: "#C4F51E",
          amber: "#FFB800",
          lilac: "#8B5CF6",
          dark: "#121214",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Space Grotesk", "sans-serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      boxShadow: {
        "tactile": "4px 4px 0px #121214",
        "tactile-sm": "2px 2px 0px #121214",
        "tactile-lg": "6px 6px 0px #121214",
        "tactile-coral": "4px 4px 0px #FF4D4D",
        "tactile-lime": "4px 4px 0px #D4FF32",
        "tactile-cobalt": "4px 4px 0px #2B4CFF",
        "tactile-dark": "4px 4px 0px rgba(255, 255, 255, 0.9)",
        "soft-float": "0 20px 40px -15px rgba(18, 18, 20, 0.08)",
        "card-glow": "0 12px 30px -10px rgba(43, 76, 255, 0.15)",
      },
      animation: {
        "marquee": "marquee 28s linear infinite",
        "marquee-reverse": "marquee-reverse 28s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 20s linear infinite",
        "bounce-subtle": "bounce-subtle 2s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "bounce-subtle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(1deg)" },
        },
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
