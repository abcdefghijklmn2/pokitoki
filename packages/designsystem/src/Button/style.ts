import { cva } from 'class-variance-authority'

const buttonVariants = cva(`rounded-[6px] inline-flex justify-center items-center`, {
  variants: {
    variant: {
      primary: ` bg-primary-01-default`,
    },

    size: {
      medium: 'px-spacing-3 gap-1 body-02-r text-text-white',
      large: 'px-spacing-3 gap-0.5',
      small: 'px-spacing-3 gap-1',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'medium',
  },
})

export const LeftButtonIconVariants = cva(``, {
  variants: {
    size: {
      medium: 'w-spacing-5 h-spacing-5',
      large: 'w-6 h-6',
      small: 'w-spacing-5 h-spacing-5',
    },
  },
  defaultVariants: {
    size: 'medium',
  },
})

export const RightButtonIconVariants = cva(``, {
  variants: {
    size: {
      medium: 'w-spacing-3 h-spacing-3',
      large: 'w-4 h-4',
      small: 'w-spacing-3 h-spacing-3',
    },
  },
  defaultVariants: {
    size: 'medium',
  },
})

export default buttonVariants
