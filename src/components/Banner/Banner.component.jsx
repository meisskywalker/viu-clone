import React, { useCallback, useEffect, useState } from "react"
import axios from "../../services/axios"
import { url } from "../../services/base"
import requests from "../../services/requests"
import "./Banner.component.css"

const Banner = () => {
  const [movie, setMovie] = useState({})

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = useCallback(async () => {
    const response = await axios.get(requests.fetchTrendings)
    const data = await response.data.results
    const chosen = data[Math.floor(Math.random() * data.length - 1)]

    setMovie(chosen)

    return response
  }, [])

  const truncate = useCallback((string, n) => {
    return string?.length > n ? string.substring(0, n - 1) + "..." : string
  }, [])

  return (
    <div
      className='banner'
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("${url.baseUrlImage}${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className='banner__contents'>
        <h1 className='banner__title'>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <h1 className='banner__description'>
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
    </div>
  )
}

export default Banner
