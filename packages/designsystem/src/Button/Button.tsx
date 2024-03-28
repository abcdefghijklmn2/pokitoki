import { forwardRef } from 'react'

import { cn } from '../utils'
import RawButton from './components/RawButton'
import { buttonVariants, LeftButtonIconVariants, rawButtonVariants, RightButtonIconVariants } from './style'
import { ButtonProps } from './type'

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, LeftIcon, RightIcon, ...props }, ref) => {
    const { size } = props

    return (
      <RawButton className={cn(rawButtonVariants({ size }), buttonVariants({ size }), className)} ref={ref} {...props}>
        <>
          {LeftIcon && (
            <span className={LeftButtonIconVariants({ size })} role="none presentation" aria-hidden="true">
              {LeftIcon}
            </span>
          )}

          {children}

          {RightIcon && (
            <span className={RightButtonIconVariants({ size })} role="none presentation" aria-hidden="true">
              {RightIcon}
            </span>
          )}
        </>
      </RawButton>
    )
  },
)
export default Button
