import * as React from 'react'

const ICON_CHARTBAR = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M2.40625 11.375V7.4375H5.46875" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12.4688 11.375H1.53125" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.46875 11.375V4.8125H8.53125" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M11.5938 2.1875H8.53125V11.375H11.5938V2.1875Z"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ICON_CHARTBAR
