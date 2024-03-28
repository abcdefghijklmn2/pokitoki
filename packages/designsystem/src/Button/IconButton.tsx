import { cloneElement, forwardRef } from 'react'

import { cn } from '../utils'
import RawButton from './components/RawButton'
import { iconButtonVariants, LeftButtonIconVariants, rawButtonVariants } from './style'
import { IconButtonProps } from './type'

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(({ children, className = '', ...props }, ref) => {
  const { size } = props

  return (
    <RawButton
      className={cn(rawButtonVariants({ size }), iconButtonVariants({ size }), className)}
      ref={ref}
      {...props}
    >
      <span className={LeftButtonIconVariants({ size })} role="none presentation" aria-hidden="true">
        {children}
      </span>
    </RawButton>
  )
})
export default IconButton
