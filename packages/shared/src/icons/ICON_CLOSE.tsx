import * as React from 'react'
import { forwardRef, Ref } from 'react'

const ICON_CLOSE = forwardRef((props: React.SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
  return (
    <svg ref={ref} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12.6663 4.2735L11.7263 3.3335L7.99967 7.06016L4.27301 3.3335L3.33301 4.2735L7.05967 8.00016L3.33301 11.7268L4.27301 12.6668L7.99967 8.94016L11.7263 12.6668L12.6663 11.7268L8.93967 8.00016L12.6663 4.2735Z"
        fill="#39434F"
      />
    </svg>
  )
})

export default ICON_CLOSE
