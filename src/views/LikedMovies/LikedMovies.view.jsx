import React from "react"
import "./LikedMovies.view.css"
import RowV2 from "../../components/RowV2/RowV2.component"
import { useLikedMoviesStore } from "../../stores"

const LikedMovies = () => {
  const getMovies = useLikedMoviesStore((state) => state.movies)
  return (
    <div className="liked-movies">
      <h1>Favorites</h1>
      <RowV2 movies={getMovies} />
    </div>
  )
}

export default LikedMovies
