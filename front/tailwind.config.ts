import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Neo-Swiss Colors
        "on-tertiary": "#ffffff",
        "on-surface": "#1b1b1b",
        "neo-primary": "#000000",
        "on-primary-fixed": "#1b1b1b",
        "error-container": "#ffdad6",
        "tertiary-container": "#1b1b1b",
        "outline-variant": "#cfc4c5",
        "surface-bright": "#f9f9f9",
        "on-tertiary-fixed": "#1b1b1b",
        "surface-container-lowest": "#ffffff",
        "tertiary": "#000000",
        "neo-primary-container": "#1b1b1b",
        "error": "#ba1a1a",
        "surface-variant": "#e2e2e2",
        "surface-tint": "#5e5e5e",
        "surface-container-high": "#e8e8e8",
        "on-background": "#1b1b1b",
        "on-primary-container": "#848484",
        "on-error": "#ffffff",
        "primary-fixed": "#e2e2e2",
        "on-secondary-fixed": "#02006d",
        "on-primary-fixed-variant": "#474747",
        "surface-container": "#eeeeee",
        "inverse-primary": "#c6c6c6",
        "tertiary-fixed": "#e2e2e2",
        "surface-container-highest": "#e2e2e2",
        "neo-on-secondary": "#ffffff",
        "outline": "#7e7576",
        "neo-on-primary": "#ffffff",
        "inverse-surface": "#303030",
        "tertiary-fixed-dim": "#c6c6c6",
        "neo-background": "#f9f9f9",
        "surface": "#f9f9f9",
        "secondary-container": "#2f32ff",
        "neo-secondary": "#0c00e0",
        "on-secondary-fixed-variant": "#0d00ee",
        "on-surface-variant": "#4c4546",
        "inverse-on-surface": "#f1f1f1",
        "surface-dim": "#dadada",
        "on-tertiary-container": "#848484",
        "surface-container-low": "#f3f3f3",
        "secondary-fixed-dim": "#bfc2ff",
        "on-secondary-container": "#cccdff",
        "primary-fixed-dim": "#c6c6c6",
        "on-tertiary-fixed-variant": "#474747",
        "on-error-container": "#93000a",
        "secondary-fixed": "#e0e0ff"
      },
      borderRadius: {
        lg: "0px",
        md: "0px",
        sm: "0px",
        DEFAULT: "0px",
        xl: "0px",
        full: "9999px"
      },
      spacing: {
        "unit_sm": "8px",
        "unit_md": "16px",
        "grid_columns": "12",
        "unit_2xl": "128px",
        "gutter": "24px",
        "unit_xs": "4px",
        "margin": "64px",
        "unit_xl": "64px",
        "unit_lg": "32px"
      },
      fontFamily: {
        "display-lg": ["Epilogue"],
        "mono-label": ["Space Grotesk"],
        "display-2xl": ["Epilogue"],
        "body-lg": ["Inter"],
        "headline-md": ["Epilogue"],
        "body-md": ["Inter"],
        "sans": ["var(--font-sans)"],
        "epilogue": ["var(--font-epilogue)"],
      },
      fontSize: {
        "display-lg": ["72px", { lineHeight: "72px", letterSpacing: "-0.03em", fontWeight: "700" }],
        "mono-label": ["14px", { lineHeight: "16px", letterSpacing: "0.1em", fontWeight: "600" }],
        "display-2xl": ["120px", { lineHeight: "110px", letterSpacing: "-0.04em", fontWeight: "800" }],
        "body-lg": ["20px", { lineHeight: "32px", letterSpacing: "0", fontWeight: "400" }],
        "headline-md": ["40px", { lineHeight: "44px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "body-md": ["16px", { lineHeight: "24px", letterSpacing: "0", fontWeight: "400" }]
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries")
  ],
} satisfies Config

export default config