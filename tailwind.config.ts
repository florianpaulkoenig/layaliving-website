import type { Config } from "tailwindcss";

/**
 * LAYA Living website brand system.
 * Cream background, warm ink text, sage accent — aligned with host-app
 * for brand consistency. Cormorant Garamond (display) + Lato (body) as
 * open-source stand-ins for Kepler Std.
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
        cream: {
          DEFAULT: "#F7F3EE",
          light: "#FBF8F3",
          dark: "#EFE9E0",
        },
        ink: {
          DEFAULT: "#2A2724",
          soft: "#3a3530",
          muted: "#6b645d",
        },
        sage: {
          DEFAULT: "#8A9E94",
          light: "#D4E0DC",
          dark: "#6f8379",
        },
        line: "#E3DCD0",
      },
      fontFamily: {
        display: ["var(--font-display)", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-body)", "Lato", "ui-sans-serif", "system-ui", "sans-serif"],
        script: ["var(--font-script)", "Dancing Script", "cursive"],
      },
      borderRadius: {
        DEFAULT: "2px",
        sm: "2px",
        md: "2px",
        lg: "4px",
      },
      boxShadow: {
        subtle: "0 1px 0 0 rgba(42, 39, 36, 0.08)",
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
