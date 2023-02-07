import React, { useCallback } from "react"
import { url } from "../../utils/base"
import { IconPlay } from "../Icons.components"
import "./VideoItem.component.css"

const VideoItem = ({ movie, trailer, index = 0, playThisTrailer }) => {

  const handleClick = useCallback(() => {
    playThisTrailer(index)
  }, [index])

  return (
    <div className='video-item'>
      <div
        className='video-item__image'
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("${url.baseUrlImage}${movie.backdrop_path}")`,
          backgroundPosition: "center center"
        }}
      >
        <div className='video-item-play'>
          <span className='video-item-button'>
            <button className="d-flex justify-content-center items-center" onClick={handleClick}>
              <IconPlay size='40' clickable={true} />
            </button>
          </span>
        </div>
      </div>
      <div>
        <p className='text-truncate cursor-pointer' onClick={handleClick}>{trailer.name}</p>
      </div>
    </div>
  )
}

export default VideoItem
