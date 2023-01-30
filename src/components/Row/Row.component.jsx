import React, { useCallback, useEffect, useState } from "react"
import axios from "../../services/axios"
import { url } from "../../services/base"
import { IconPlay } from "../Icons.components"
import "./Row.component.css"

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetchData()
  }, [fetchUrl])

  const fetchData = useCallback(async () => {
    const response = await axios.get(fetchUrl)
    const data = await response.data.results

    setMovies(data)

    return response
  }, [])

  return (
    <div className='row'>
      <div className='row__header'>
        <span className='row__title'>{title}</span>
        <a className='row__see-all' href=''>
          See All
        </a>
      </div>
      <div className='row__container'>
        <div className='row__posters'>
          {movies?.map(
            (movie) =>
              movie.poster_path && (
                <div
                  key={movie.id}
                  className='row__poster'
                  style={{
                    backgroundSize: "cover",
                    backgroundImage: `url("${url.baseUrlImage}${movie.poster_path}")`,
                  }}
                >
                  <div className="row__poster-play">
                    <span className="row__poster-button">
                      <IconPlay size="40" clickable={true}/>
                    </span>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  )
}

export default Row
