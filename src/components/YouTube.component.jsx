import React from "react"

export const YouTube = ({ url }) => {
  return (
    <div style={{
      width: "calc(100vw - 60px)",
      height: "480px",
      display: "flex",
      justifyContent: "center"
    }}>
      <iframe
        width='100%'
        height='100%'
        src={url}
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowFullScreen
      ></iframe>
    </div>
  )
}
