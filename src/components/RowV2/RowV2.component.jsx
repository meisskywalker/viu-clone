import React from "react"
import { If } from "../If.component"
import RowItem from "../RowItem/RowItem.component"
import "./RowV2.component.css"

const RowV2 = ({ movies, isMovie = false }) => {
  return (
    <div className='row-v2 w-full'>
      <If condition={movies.length > 0}>
        <div className='row-v2__posters'>
          {movies?.map(
            (movie) =>
              movie.poster_path && (
                <RowItem key={movie.id} movie={movie} isMovie={isMovie} />
              )
          )}
        </div>
      </If>
      <If condition={movies.length === 0}>
        <div className='d-flex justify-content-center items-center w-full'>
          <span className='text-gray text-italic'>There is no item</span>
        </div>
      </If>
    </div>
  )
}

export default RowV2
