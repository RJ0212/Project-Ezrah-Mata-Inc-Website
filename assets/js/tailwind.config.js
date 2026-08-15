// Project Ezrah Mata — Tailwind theme tokens.
// Edit colors, fonts, and shadows here. This file is the single source of
// truth for the site's design system, kept separate from index.html and
// the components so the look and feel can be tuned in one place.
tailwind.config = {
  theme: {
    extend: {
      colors: {
        // Primary brand teal/mint, taken from the Project Ezrah Mata logo.
        ezrah: {
          50: '#effcf9',
          100: '#d9f5ef',
          200: '#b5e9df',
          300: '#86d7c9',
          400: '#61c6b5',
          500: '#53b9a8',
          600: '#3ca18f',
          700: '#317f71',
          800: '#2b655b',
          900: '#28534c'
        },
        ink: '#28413b',   // near-black text tone, tinted toward the brand green
        cream: '#fbfaf6', // warm off-white page background
        gold: '#c7a969',  // accent used sparingly for warmth (wordmark, dividers)
        blush: '#f5ebe5'  // soft accent used behind imagery
      },
      fontFamily: {
        sans: ['Nunito', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif']
      },
      boxShadow: {
        soft: '0 16px 50px rgba(40, 65, 59, 0.09)',
        mint: '0 14px 36px rgba(60, 161, 143, 0.14)'
      }
    }
  }
};
