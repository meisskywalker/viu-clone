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

export const IconHeart = ({ size, color = "white", clickable = "false" }) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color}
      className={`${clickable ? "cursor-pointer" : ""}`}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 20 20'
    >
      <path d='M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z' />
    </svg>
  )
}

export const IconHeartOutline = ({
  size,
  color = "none",
  stroke = "white",
  clickable = "false",
}) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color}
      stroke={stroke}
      className={`${clickable ? "cursor-pointer" : ""}`}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
      />
    </svg>
  )
}

export const IconHamburger = ({
  size,
  color = "white",
  clickable = "false",
}) => {
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
        d='M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z'
        clipRule='evenodd'
      />
    </svg>
  )
}
