import React from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import Nav from "./components/Nav/Nav.component"
import "./App.css"
import HomeView from "./views/Home/Home.view"
import ListMovies from "./views/ListMovies/ListMovies.view"
import DetailMovie from "./views/DetailMovie/DetailMovie.view"
import ListAll from "./views/ListAll/ListAll.view"
import Search from "./views/Search/Search.view"

function App() {
  return (
    <div className='app'>
      <Nav/>
      <Routes>
        <Route name='home' path='/' element={<HomeView />} />
        <Route path='/list'>
          <Route path=':listTitle' element={<ListAll />} />
          <Route path='tv/:listTitle' element={<ListMovies />} />
          <Route path='movie/:listTitle' element={<ListMovies isMovie/>} />
        </Route>
        <Route path='/detail'>
          <Route path='tv/:movieId' element={<DetailMovie />} />
          <Route path='movie/:movieId' element={<DetailMovie isMovie />} />
        </Route>
        <Route name="search" path="/search/:query" element={<Search/>}/>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}

export default App
