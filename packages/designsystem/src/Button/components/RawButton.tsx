// RawButton 컴포넌트
import { Slot } from '@radix-ui/react-slot'
import { forwardRef } from 'react'

import { cn } from '../../utils'
import buttonVariants from '../style'
import { RawButtonProps } from '../type'

const RawButton = forwardRef<HTMLButtonElement, RawButtonProps>(
  ({ className, variant, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp ref={ref} className={cn(buttonVariants({ variant }), className)} {...props}>
        {children}
      </Comp>
    )
  },
)
RawButton.displayName = 'RawButton'

export default RawButton
