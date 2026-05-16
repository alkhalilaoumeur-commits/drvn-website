import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Dark theme
        bg:         '#09090B',
        surface:    '#111113',
        elevated:   '#18181B',
        border:     '#27272A',
        borderHigh: '#3F3F46',

        // Text
        primary:   '#FAFAFA',
        secondary: '#A1A1AA',
        muted:     '#52525B',

        // Accent — Vermillion, used sparingly
        signal:  '#E84A1C',
        signalHover: '#FF6133',

        // Semantic
        success: '#22C55E',
      },
      fontFamily: {
        sans:  ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono:  ['"Geist Mono"', 'ui-monospace', 'monospace'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
      },
      maxWidth: {
        site: '1280px',
      },
    },
  },
  plugins: [],
}

export default config
