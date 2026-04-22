import type { Config } from "tailwindcss";

/**
 * LAYA Living — Alpine Quiet palette.
 * Warm off-white, deep ink, dusty sage, with terracotta held on reserve
 * for the availability calendar. EB Garamond (display) + Inter (body).
 */
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cream aliases kept so pre-existing utility classes stay valid
        // during the subpage rollout; DEFAULT / light / dark now map to
        // Alpine Quiet values so the perceptual shift is consistent.
        cream: {
          DEFAULT: "#f4f1ea",
          light: "#faf7f1",
          dark: "#ebe6db",
        },
        ink: {
          DEFAULT: "#1d1a15",
          soft: "#4a443a",
          muted: "#857e72",
        },
        sage: {
          DEFAULT: "#8a947c",
          light: "#c4c6b4",
          dark: "#6b6a52",
        },
        accent: {
          DEFAULT: "#6b6a52",
          warm: "#a6765a",
        },
        line: "#d9d2c4",
      },
      fontFamily: {
        display: ["var(--font-display)", "EB Garamond", "Iowan Old Style", "Georgia", "serif"],
        sans: ["var(--font-body)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        script: ["var(--font-script)", "Dancing Script", "cursive"],
      },
      // Editorial flat edges — rounded radii only on pills.
      borderRadius: {
        DEFAULT: "0",
        sm: "0",
        md: "0",
        lg: "0",
        pill: "999px",
      },
      boxShadow: {
        subtle: "0 1px 0 0 rgba(29, 26, 21, 0.08)",
        image: "0 24px 54px 0 rgba(0, 0, 0, 0.1)",
      },
      maxWidth: {
        content: "68rem",
        prose: "40rem",
      },
    },
  },
  plugins: [],
};
export default config;
