import React, { useCallback } from "react"
import { Link } from "react-router-dom"
import { url } from "../../utils/base"
import { If } from "../If.component"
import "./SearchItem.component.css"

const SearchItem = ({ movie }) => {
  const truncate = useCallback((string, n) => {
    return string?.length > n ? string.substring(0, n - 1) + "..." : string
  }, [])

  return (
    <div className='search-item'>
      <If condition={movie.backdrop_path}>
        <img
          className='search-item__poster'
          src={`${url.baseUrlImage}${movie.backdrop_path}`}
        />
        <div className='search-item__contents'>
          <Link
            className='search-item__title'
            to={`/detail/${movie.media_type}/${movie.id}`}
          >
            {truncate(movie.title, 40) ||
              truncate(movie.name, 40) ||
              truncate(movie.original_name, 40)}
          </Link>
          <div className='search-item__infos'>
            <span className='search-item__info'>
              {movie.media_type.toUpperCase()}
            </span>
            <span className='search-item__info'>
              {movie?.release_date?.substring(0, 4) ||
                movie?.first_air_date?.substring(0, 4)}
            </span>
          </div>
          <p className='search-item__overview'>
            {truncate(movie.overview, 100)}
          </p>
        </div>
      </If>
    </div>
  )
}

export default SearchItem
