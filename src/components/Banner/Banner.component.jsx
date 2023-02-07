import React from "react"
import { url } from "../../utils/base"
import "./Banner.component.css"

const Banner = ({ children, movie }) => {
  return (
    <div
      className='banner'
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("${url.baseUrlImage}${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      {children}
    </div>
  )
}

export default Banner
