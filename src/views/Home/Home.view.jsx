import React, { useState, useCallback, useEffect } from "react"
import Banner from "../../components/Banner/Banner.component"
import Row from "../../components/Row/Row.component"
import axios from "../../utils/axios"
import requests from "../../utils/requests"
import "./Home.view.css"

const HomeView = () => {
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
    <div className='home'>
      <Banner movie={movie}>
        <div className='banner__contents'>
          <h1 className='banner__title'>
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <h1 className='banner__description'>
            {truncate(movie?.overview, 150)}
          </h1>
        </div>
      </Banner>
      <div className='home__rows'>
        <Row
          title='Viu Oroginals'
          fetchUrl={requests.fetchViuOriginals}
          isMovie={false}
        />
        <Row title='Drama' fetchUrl={requests.fetchDramaTv} isMovie={false} />
        <Row title='Anime' fetchUrl={requests.fetchAnimeTv} isMovie={false} />
      </div>
    </div>
  )
}

export default HomeView
