/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
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
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
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
        'ghoul-bg': '#faf5f0',
        'ghoul-card': 'rgba(250, 245, 240, 0.9)',
        'ghoul-cyan': '#ec4899',
        'ghoul-purple': '#b76e79',
        'ghoul-accent': '#ff69b4',
        'ghoul-text': '#4a1c2a',
        'ghoul-muted': '#9ca3af',
        'ghoul-gold': '#d4a574',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        'glow': '0 0 20px rgba(236, 72, 153, 0.4), 0 0 40px rgba(183, 110, 121, 0.2)',
        'glow-intense': '0 0 30px rgba(236, 72, 153, 0.6), 0 0 60px rgba(183, 110, 121, 0.4)',
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
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "ghost-bob": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "ghost-sway": {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
        "glow-pulse": {
          "0%, 100%": { filter: "drop-shadow(0 0 10px rgba(236,72,153,0.3)) drop-shadow(0 0 20px rgba(212,165,116,0.2))" },
          "50%": { filter: "drop-shadow(0 0 20px rgba(236,72,153,0.5)) drop-shadow(0 0 40px rgba(212,165,116,0.3))" },
        },
        "glow-intense": {
          "0%, 100%": { filter: "drop-shadow(0 0 20px rgba(236,72,153,0.5)) drop-shadow(0 0 40px rgba(212,165,116,0.3))" },
          "50%": { filter: "drop-shadow(0 0 35px rgba(236,72,153,0.7)) drop-shadow(0 0 70px rgba(212,165,116,0.5))" },
        },
        "pulse-hint": {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "1" },
        },
        "bounce-subtle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(3px)" },
        },
        "screen-shake": {
          "0%, 100%": { transform: "translate(0)" },
          "10%": { transform: "translate(-5px, -3px)" },
          "20%": { transform: "translate(5px, 3px)" },
          "30%": { transform: "translate(-4px, 2px)" },
          "40%": { transform: "translate(4px, -2px)" },
          "50%": { transform: "translate(-3px, 3px)" },
          "60%": { transform: "translate(3px, -3px)" },
          "70%": { transform: "translate(-2px, 2px)" },
          "80%": { transform: "translate(2px, -2px)" },
          "90%": { transform: "translate(-1px, 1px)" },
        },
        "float-around": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(25px, -15px)" },
          "50%": { transform: "translate(-15px, 25px)" },
          "75%": { transform: "translate(15px, 15px)" },
        },
        "glam-shimmer": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "ghost-bob": "ghost-bob 3s ease-in-out infinite",
        "ghost-sway": "ghost-sway 4s ease-in-out infinite",
        "glow-pulse": "glow-pulse 2.5s ease-in-out infinite",
        "glow-intense": "glow-intense 1.8s ease-in-out infinite",
        "pulse-hint": "pulse-hint 2.5s ease-in-out infinite",
        "bounce-subtle": "bounce-subtle 0.5s ease-in-out infinite",
        "screen-shake": "screen-shake 0.5s ease-in-out",
        "float-around": "float-around 10s ease-in-out infinite",
        "glam-shimmer": "glam-shimmer 1s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
