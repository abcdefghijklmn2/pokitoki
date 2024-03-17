const shared = require('shared')

const { TYPOGRAPHY } = shared
const { VARIABLES } = shared

const { COLOR, SPACE } = VARIABLES

const plugin = require('tailwindcss/plugin')
const animated = require('tailwindcss-animate')

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['selector', 'class'],
  content: ['./**/*.{ts,tsx}'],

  extend: {
    fontFamily: {
      sans: ['Spoqa Han Sans Neo'],
      pretendard: ['Pretendard', 'sans'],
    },
  },

  variants: {
    extend: {},
  },

  theme: {
    extend: {
      colors: {
        ...COLOR.light,
      },

      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },

      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },

      boxShadow: {},

      spacing: {
        ...SPACE.spacing,
      },
    },
  },
  /** @type {import('tailwindcss/types/config').PluginCreator} */
  plugins: [
    animated,
    plugin(function ({ addComponents }) {
      addComponents({ ...TYPOGRAPHY })
    }),
  ],
}
