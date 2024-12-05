import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xlg: "1600px",
        badgeBR: "1020px",
      },
      colors: {
        background: "var(--background)", // Global background color
        foreground: "var(--foreground)", // Global foreground color
        primaryLight: "var(--primary-light)", // Primary light color
        primaryMedium: "var(--primary-medium)", // Primary medium color
        primaryDark: "var(--primary-dark)", // Primary dark color
        cyan100: "var(--cyan-100)", // Cyan color 100
        cyan200: "var(--cyan-200)", // Cyan color 200
        cyan300: "var(--cyan-300)", // Cyan color 300
      },
      boxShadow: {
        outset: "var(--shadow-outset)", // Outset shadow
        inset: "var(--shadow-inset)", // Inset shadow
      },
      fontSize: {
        small: "var(--text-small)", // Small text size
        medium: "var(--text-medium)", // Medium text size
        large: "var(--text-large)", // Large text size
      },
      borderRadius: {
        DEFAULT: "var(--border-radius)",
      },
      letterSpacing: {
        DEFAULT: "var(--letter-spacing)",
      },
      transitionDuration: {
        DEFAULT: "var(--transition)",
      },
      keyframes: {
        slide: {
          from: { left: "100%" },
          to: { left: "-3rem" },
        },
        slideR: {
          from: { left: "-3rem" },
          to: { left: "100%" },
        },
      },
      animation: {
        slide: "slide 7s linear infinite",
        slideReverse: "slideR 15s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
