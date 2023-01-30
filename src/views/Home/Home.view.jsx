import React from "react"
import Banner from "../../components/Banner/Banner.component"
import Nav from "../../components/Nav/Nav.component"
import Row from "../../components/Row/Row.component"
import requests from "../../services/requests"
import "./Home.view.css"

const HomeView = () => {
  return (
    <div className="home">
      <Nav />
      <Banner />
      <div className='home__rows'>
        <Row title="Viu Oroginals" fetchUrl={requests.fetchViuOriginals} />
        <Row title="Drama" fetchUrl={requests.fetchDramaTv} />
        <Row title="Anime" fetchUrl={requests.fetchAnimeTv} />
      </div>
    </div>
  )
}

export default HomeView
