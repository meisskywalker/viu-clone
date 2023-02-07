import React, { useCallback } from "react"
import { Navigate, useParams } from "react-router-dom"
import Row from "../../components/Row/Row.component"
import { useFetchUrlStore, useFromHomeStore } from "../../stores"
import { fromKebabToNormal } from "../../utils/functions"
import "./ListMovies.view.css"

const ListMovies = ({ isMovie = false }) => {
  const { listTitle } = useParams()
  const getIsFromHome = useFromHomeStore((state) => state.isFromHome)
  const getFetchUrl = useFetchUrlStore((state) => state.url)

  const textFromKebabToNormal = useCallback(fromKebabToNormal, [])

  if (!getIsFromHome) return <Navigate replace to='/' />

  return (
    <div className='list-movies'>
      <Row
        title={textFromKebabToNormal(listTitle)}
        fetchUrl={getFetchUrl}
        detail={true}
        isMovie={isMovie ? true : false}
      />
    </div>
  )
}

export default ListMovies
