import React, { useCallback, useEffect, useState } from "react"
import { Navigate, useParams } from "react-router-dom"
import Row from "../../components/Row/Row.component"
import { useFromHomeStore } from "../../stores"
import { fromKebabToNormal } from "../../utils/functions"
import requests from "../../utils/requests"
import "./ListAll.view.css"

const ListAll = () => {
  const { listTitle } = useParams()
  const [urls, setUrls] = useState([])
  const getIsFromHome = useFromHomeStore((state) => state.isFromHome)

  const textFromKebabToNormal = useCallback(fromKebabToNormal, [])

  if (!getIsFromHome) return <Navigate replace to='/' />

  useEffect(() => {
    checkTitle()
  }, [listTitle])

  const checkTitle = useCallback(() => {
    switch (listTitle) {
      case "viu-originals":
        setUrls([requests.fetchViuOriginals, requests.fetchViuOriginalsMovie])
        break
      case "drama":
        setUrls([requests.fetchDramaTv, requests.fetchDramaMovie])
        break
      case "anime":
        setUrls([requests.fetchAnimeTv, requests.fetchAnimeMovie])
        break

      default:
        setUrls([])
    }
  }, [listTitle])

  return (
    <div className='list-movies'>
      <h1>{textFromKebabToNormal(listTitle)}</h1>
      {urls.map((url, i) => (
        <Row
          key={i}
          title={i === 0 ? "Tv" : "Movie"}
          fetchUrl={url}
          isMovie={i ? true : false}
          prefix={listTitle}
        />
      ))}
    </div>
  )
}

export default ListAll
