export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#FFFFFF',
        paper: '#F6F7F9',
        mist: '#EDEFF2',
        line: '#E1E4E9',
        steel: '#8A929D',
        graphite: '#3B424C',
        ink: '#111418',
        accent: {
          DEFAULT: '#0B3FD6',
          dark: '#0830A6',
          soft: '#EEF2FF',
        },
      },
      fontFamily: {
        display: ['"Inter Tight"', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        label: '0.18em',
      },
      maxWidth: {
        shell: '1440px',
        content: '1440px',
      },
      fontSize: {
        display: ['clamp(1.8rem, 5vw, 6.5rem)', { lineHeight: '0.94', letterSpacing: '-0.03em' }],
        section: ['clamp(1.4rem, 3.2vw, 3.9rem)', { lineHeight: '1.02', letterSpacing: '-0.025em' }],
        colossal: ['clamp(3rem, 10vw, 13rem)', { lineHeight: '0.82', letterSpacing: '-0.045em' }],
      },
      transitionTimingFunction: {
        expo: 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
    },
  },
  plugins: [],
}
