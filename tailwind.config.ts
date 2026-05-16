import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Light warm beige theme
        bg:         '#FAFAF7',
        surface:    '#F2EFE9',
        elevated:   '#EAE6DF',
        border:     '#D8D4CB',
        borderHigh: '#C5C0B6',

        // Text
        primary:   '#18161A',
        secondary: '#5C5850',
        muted:     '#9A9590',

        // Accent — Vermillion
        signal:      '#E84A1C',
        signalHover: '#D43B0F',

        // Semantic
        success: '#16A34A',
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
