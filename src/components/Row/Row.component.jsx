import React, { useCallback, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useFromHomeStore, useFetchUrlStore } from "../../stores"
import axios from "../../utils/axios"
import { fromKebabToNormal, toKebabCase } from "../../utils/functions"
import RowItem from "../RowItem/RowItem.component"
import "./Row.component.css"

const Row = ({
  title,
  fetchUrl,
  isMovie = false,
  detail = false,
  prefix = "",
}) => {
  const [movies, setMovies] = useState([])
  const setIsFromHome = useFromHomeStore((state) => state.setIsFromHome)
  const setUrl = useFetchUrlStore((state) => state.setUrl)

  useEffect(() => {
    fetchData()
  }, [fetchUrl])

  const fetchData = useCallback(async () => {
    const response = await axios.get(fetchUrl)
    const data = await response.data.results

    setMovies(data)

    return response
  }, [fetchUrl])

  const textToKebab = useCallback(toKebabCase, [])
  const textFromKebabToNormal = useCallback(fromKebabToNormal, [])

  const handleFromHome = useCallback(() => {
    setIsFromHome(true)
    setUrl(fetchUrl)
  }, [])

  return (
    <div className='row'>
      <div className='row__header'>
        <span className='row__title'>
          {textFromKebabToNormal(prefix)}&nbsp;
          {title}
        </span>
        <Link
          className={`row__see-all ${detail ? "d-none" : ""}`}
          to={`/list/${isMovie ? "movie" : "tv"}/${prefix ? prefix : textToKebab(title)}`}
          onClick={handleFromHome}
        >
          See All
        </Link>
      </div>
      <div className='row__container'>
        <div className={`row__posters ${detail ? "flex-wrap" : ""}`}>
          {movies?.map(
            (movie) =>
              movie.poster_path && (
                <RowItem key={movie.id} movie={movie} isMovie={isMovie} />
              )
          )}
        </div>
      </div>
    </div>
  )
}

export default Row
