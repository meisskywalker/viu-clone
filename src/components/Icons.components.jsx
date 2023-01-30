import React from "react"

export const IconSearch = ({ size, color = "white", clickable = "false" }) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color}
      className={`${clickable ? "cursor-pointer" : ""}`}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 20 20'
    >
      <path
        fillRule='evenodd'
        d='M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z'
        clipRule='evenodd'
      />
    </svg>
  )
}

export const IconPlay = ({ size, color = "white", clickable = "false" }) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color}
      className={`${clickable ? "cursor-pointer" : ""}`}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 20 20'
    >
      <path d='M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z' />
    </svg>
  )
}
