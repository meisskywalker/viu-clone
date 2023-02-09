import React, { useCallback, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Banner from "../../components/Banner/Banner.component"
import { IconHeartOutline, IconPlay } from "../../components/Icons.components"
import { If } from "../../components/If.component"
import RowV2 from "../../components/RowV2/RowV2.component"
import Tab from "../../components/Tab/Tab.component"
import Video from "../../components/Video/Video.component"
import { YouTube } from "../../components/YouTube.component"
import {
  useIsWatchTrailer,
  useLikedMoviesStore,
  useSimilarsStore,
  useTrailerStore,
} from "../../stores"
import axios from "../../utils/axios"
import "./DetailMovie.view.css"

const DetailMovie = ({ isMovie = false }) => {
  const [movie, setMovie] = useState({})
  const [isLiked, setIsLiked] = useState(false)

  const getAddLikedMovie = useLikedMoviesStore((state) => state.addLikedMovie)
  const getRemoveLikedMovie = useLikedMoviesStore(
    (state) => state.removeLikedMovie
  )
  const getMovies = useLikedMoviesStore((state) => state.movies)

  const getFetchTrailers = useTrailerStore((state) => state.fetchTrailers)
  const getTrailers = useTrailerStore((state) => state.trailers)

  const getIndex = useIsWatchTrailer((state) => state.index)
  const getIsWatch = useIsWatchTrailer((state) => state.isWatch)
  const getIsWatching = useIsWatchTrailer((state) => state.isWatching)
  const getSetIndex = useIsWatchTrailer((state) => state.setIndex)

  const getSimilars = useSimilarsStore((state) => state.similars)
  const getFetchSimilars = useSimilarsStore((state) => state.fetchSimilars)

  const { movieId } = useParams()

  const tabs = ["Trailer", "Similar"]

  useEffect(() => {
    getIsWatching(false)
    getSetIndex(0)
  }, [])

  useEffect(() => {
    fetchData()
  }, [movieId])

  useEffect(() => {
    const exist = getMovies.filter((movie) => movie.id === parseInt(movieId))
    if (exist.length > 0) {
      setIsLiked(true)
    }
  }, [getMovies, movieId])

  useEffect(() => {
    getFetchTrailers(movieId, isMovie)
  }, [movieId, isMovie])

  useEffect(() => {
    getFetchSimilars(movieId, isMovie)
  }, [movieId, isMovie])

  const fetchData = useCallback(async () => {
    const url = isMovie ? "movie" : "tv"
    const lang = "language=en-US"
    const response = await axios.get(
      `/${url}/${movieId}?api_key=${import.meta.env.VITE_API_KEY}&${lang}`
    )
    const result = await response.data
    setMovie(result)

    return response
  }, [movieId])

  const handleLike = useCallback(
    (movie) => {
      const isExist = getMovies.filter((m) => m.id === movie.id)
      if (isExist.length > 0) {
        getRemoveLikedMovie(movie)
        setIsLiked(false)
      } else {
        getAddLikedMovie(movie)
        setIsLiked(true)
      }
    },
    [isLiked, getMovies]
  )

  const handleWatchTrailer = useCallback(() => {
    getIsWatching(true)
  }, [])

  return (
    <div>
      <If condition={!getIsWatch}>
        <Banner movie={movie}>
          <div className='banner__contents-detail'>
            <div className='spacer'></div>
            <div className='banner__contents-fade'>
              <div className='banner__info-detail'>
                <span className='banner__title-detail'>
                  {movie?.title || movie?.name || movie?.original_name}
                </span>
                <div className='banner__tags'>
                  <span className='banner__tag'>
                    {movie?.spoken_languages?.[0]?.english_name}
                  </span>
                  {movie?.genres?.map((genre) => (
                    <span className='banner__tag' key={genre.id}>
                      {genre.name}
                    </span>
                  ))}
                </div>
              </div>
              <div className='banner__buttons-detail'>
                <button
                  className={`banner__button-detail d-flex items-center ${
                    getTrailers.length > 0 ? "" : "d-none"
                  }`}
                  onClick={handleWatchTrailer}
                >
                  <IconPlay size={20} color='#664c00' />
                  <span>Watch Trailer</span>
                </button>
                <div className='banner__button-utils'>
                  <button
                    className='banner__button-util'
                    onClick={() => handleLike(movie)}
                  >
                    <IconHeartOutline
                      size={30}
                      color={isLiked ? "white" : "none"}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Banner>
      </If>
      <If condition={getIsWatch}>
        <div className='safe-area d-flex justify-content-center items-center'>
          <YouTube
            url={`https://www.youtube.com/embed/${getTrailers?.[getIndex]?.key}`}
          />
        </div>
      </If>
      <div className='detail-movie__info'>
        <div className='divider mb-15' />
        <div className='px-10 d-flex justify-content-between items-center'>
          <div>
            <span className='detail-movie__title'>About</span>
            <p className='detail-movie__overview'>{movie.overview}</p>
          </div>
          <div className='d-flex justify-content-between items-center'>
            <button
              className={`banner__button-util ${getIsWatch ? "" : "d-none"}`}
              onClick={() => handleLike(movie.id)}
            >
              <IconHeartOutline size={30} color={isLiked ? "white" : "none"} />
            </button>
          </div>
        </div>
        <div className='divider mt-15' />
      </div>
      <Tab
        tabs={tabs}
        children={[
          <Video key={getTrailers} movie={movie} trailers={getTrailers} />,
          <RowV2 key={getSimilars} movies={getSimilars} isMovie={isMovie} />,
        ]}
      />
    </div>
  )
}

export default DetailMovie
