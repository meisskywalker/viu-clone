import React from "react"
import { Link } from "react-router-dom"
import { url } from "../../utils/base"
import { IconPlay } from "../Icons.components"
import "./RowItem.component.css"

const RowItem = ({ movie, isMovie = false }) => {
  return (
    <div
      className='row__item'
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("${url.baseUrlImage}${movie.poster_path}")`,
      }}
    >
      <div className='row__item-play'>
        <span className='row__item-button'>
          <Link
            className='d-flex'
            to={`/detail/${isMovie ? "movie" : "tv"}/${movie.id}`}
          >
            <IconPlay size='40' clickable={true} />
          </Link>
        </span>
      </div>
    </div>
  )
}

export default RowItem
