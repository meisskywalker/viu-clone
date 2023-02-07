import React, { useCallback } from "react"
import { useIsWatchTrailer } from "../../stores"
import { If } from "../If.component"
import VideoItem from "../VideoItem/VideoItem.component"
import "./Video.component.css"

const Video = ({ movie, trailers }) => {
  const getSetIndex = useIsWatchTrailer((state) => state.setIndex)
  const getIsWatching = useIsWatchTrailer((state) => state.isWatching)

  const playThisTrailer = useCallback((index) => {
    window.scroll(0, 0)
    getIsWatching(true)
    getSetIndex(index)
  }, [])
  return (
    <div className='video w-full'>
      <If condition={trailers.length > 0}>
        {trailers.map((trailer, idx) => (
          <VideoItem
            key={trailer.key}
            movie={movie}
            trailer={trailer}
            index={idx}
            playThisTrailer={playThisTrailer}
          />
        ))}
      </If>
      <If condition={trailers.length === 0}>
        <div className='d-flex justify-content-center items-center w-full'>
          <span className="text-gray text-italic">There is no video</span>
        </div>
      </If>
    </div>
  )
}

export default Video
