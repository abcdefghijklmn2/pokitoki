import { cva } from 'class-variance-authority'

export const rawButtonVariants = cva(`rounded-[6px] inline-flex justify-center items-center`, {
  variants: {
    variant: {
      primary: ` bg-primary-01-default text-text-white hover:bg-primary-01-hover active:bg-primary-01-press disabled:bg-background-extension-disabled-bg`,
    },

    size: {
      medium: 'gap-1 body-02-r',
      large: 'gap-0.5 body-03-r',
      small: 'gap-1 body-01-r',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'medium',
  },
})

export const buttonVariants = cva('', {
  variants: {
    size: {
      medium: 'h-[1.875rem] py-[0.3125rem] px-spacing-3',
      large: 'h-10 py-2 px-spacing-4',
      small: 'h-6 py-[0.1875rem] px-spacing-2',
    },
  },
  defaultVariants: {
    size: 'medium',
  },
})

export const iconButtonVariants = cva('', {
  variants: {
    size: {
      medium: 'p-[0.375rem]',
      large: 'p-2',
      small: 'p-[0.125rem]',
    },
  },
  defaultVariants: {
    size: 'medium',
  },
})

export const LeftButtonIconVariants = cva(``, {
  variants: {
    size: {
      medium: '[&>svg]:w-spacing-5 [&>svg]:h-spacing-5',
      large: '[&>svg]:w-6 [&>svg]:h-6',
      small: '[&>svg]:w-spacing-5 [&>svg]:h-spacing-5',
    },
  },
  defaultVariants: {
    size: 'medium',
  },
})

export const RightButtonIconVariants = cva(``, {
  variants: {
    size: {
      medium: '[&>svg]:w-spacing-3 [&>svg]:h-spacing-3',
      large: '[&>svg]:w-4 h-4',
      small: '[&>svg]:w-spacing-3 [&>svg]:h-spacing-3',
    },
  },
  defaultVariants: {
    size: 'medium',
  },
})
