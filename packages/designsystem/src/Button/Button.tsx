import { Slot } from '@radix-ui/react-slot'
import { FC, forwardRef } from 'react'

import RawButton from './components/RawButton'
import { LeftButtonIconVariants, RightButtonIconVariants } from './style'
import { ButtonProps } from './type'

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, LeftIcon, RightIcon, ...props }, ref) => {
  const { size } = props

  return (
    <RawButton ref={ref} {...props}>
      <>
        {LeftIcon && (
          <>
            <div className={LeftButtonIconVariants({ size })} role="none presentation" aria-hidden="true">
              {LeftIcon}
            </div>
          </>
        )}

        {children}

        {RightIcon && (
          <>
            <div className={RightButtonIconVariants({ size })} role="none presentation" aria-hidden="true">
              {RightIcon}
            </div>
          </>
        )}
      </>
    </RawButton>
  )
})
export default Button
