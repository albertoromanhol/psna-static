import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // ── Primary palette ──────────────────────────────────────────
        primary: {
          DEFAULT: '#1B3A6B', // Marian blue
          light:   '#2D5FA0',
          dark:    '#122850',
        },
        // ── Accent ───────────────────────────────────────────────────
        gold: {
          DEFAULT: '#C9A84C',
          light:   '#F0D080',
          dark:    '#9E7A2A',
        },
        // ── Surfaces ─────────────────────────────────────────────────
        surface: {
          DEFAULT: '#F3F0EB', // warm off-white cards
          white:   '#FAFAF8', // main page background
        },
        // ── Text ─────────────────────────────────────────────────────
        ink: {
          DEFAULT: '#1A1A1A',
          muted:   '#6B6B6B',
        },
        // ── Borders ──────────────────────────────────────────────────
        border: {
          DEFAULT: '#E2DDD6',
        },
        // ── Alert / important ────────────────────────────────────────
        alert: '#8B1A1A',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '72rem', // max-w-content ≈ max-w-6xl
      },
    },
  },
  plugins: [],
}

export default config
