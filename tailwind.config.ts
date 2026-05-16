import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Surfaces
        paper:   '#FAFAF7',
        ink:     '#0E0E0C',
        // Text
        primary:   '#0E0E0C',
        secondary: '#5C5B57',
        muted:     '#9B9A95',
        hairline:  '#E5E3DD',
        // Single accent — use max 5× per page
        signal:  '#E84A1C',
        // Selective surface
        surface: '#F2EFE8',
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
