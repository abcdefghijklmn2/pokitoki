import * as React from 'react'

const ICON_FILTER_LIST = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M8.25 13.5H9.75C10.1625 13.5 10.5 13.1625 10.5 12.75C10.5 12.3375 10.1625 12 9.75 12H8.25C7.8375 12 7.5 12.3375 7.5 12.75C7.5 13.1625 7.8375 13.5 8.25 13.5ZM2.25 5.25C2.25 5.6625 2.5875 6 3 6H15C15.4125 6 15.75 5.6625 15.75 5.25C15.75 4.8375 15.4125 4.5 15 4.5H3C2.5875 4.5 2.25 4.8375 2.25 5.25ZM5.25 9.75H12.75C13.1625 9.75 13.5 9.4125 13.5 9C13.5 8.5875 13.1625 8.25 12.75 8.25H5.25C4.8375 8.25 4.5 8.5875 4.5 9C4.5 9.4125 4.8375 9.75 5.25 9.75Z"
        fill="#101828"
      />
    </svg>
  )
}

export default ICON_FILTER_LIST
