// type.ts 파일 내용 수정
import { VariantProps } from 'class-variance-authority'
import { ButtonHTMLAttributes, ReactElement, ReactNode, RefAttributes } from 'react'

import { rawButtonVariants } from './style'

export type ButtonElement = ButtonHTMLAttributes<HTMLButtonElement>

export interface RawButtonProps extends ButtonElement, VariantProps<typeof rawButtonVariants> {
  variant: 'primary'

  size: 'medium' | 'large' | 'small'

  asChild?: boolean
}

export interface ButtonProps extends RawButtonProps {
  /**
   * Optional. A React node for an icon to display on the left side of the button's content.
   */
  LeftIcon?: ReactNode

  /**
   * Optional. A React node for an icon to display on the right side of the button's content.
   */
  RightIcon?: ReactNode
}

export interface IconButtonProps extends RawButtonProps {
  children: ReactElement
}
