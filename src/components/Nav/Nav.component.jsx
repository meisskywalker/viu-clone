import React, { useState, useCallback, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useFromHomeStore, useSidenavStore } from "../../stores"
import { toKebabCase } from "../../utils/functions"
import Backdrop from "../Backdrop/Backdrop.component"
import { IconHamburger, IconSearch } from "../Icons.components"
import "./Nav.component.css"

const Nav = () => {
  const [show, setShow] = useState(false)
  const [query, setQuery] = useState("")
  const setIsFromHome = useFromHomeStore((state) => state.setIsFromHome)
  const getIsOpen = useSidenavStore((state) => state.isOpen)
  const getToggleSidenav = useSidenavStore((state) => state.toggleSidenav)

  const navigate = useNavigate()

  const transition = useCallback(() => {
    if (window.scrollY > 50) setShow(true)
    else setShow(false)
  })

  useEffect(() => {
    window.addEventListener("scroll", transition)

    return () => window.removeEventListener("scroll", transition)
  }, [])

  const textToKebab = useCallback(toKebabCase, [])

  const handleFromHome = useCallback(() => {
    setIsFromHome(true)
  }, [])

  const handleSearchInput = useCallback((event) => {
    setQuery(event.target.value)
  }, [])

  const handleSearchSubmit = useCallback(
    (event) => {
      event.preventDefault()
      navigate(`/search/${query}`)
    },
    [query, navigator]
  )

  const handleSidenav = useCallback(() => {
    getToggleSidenav()
  }, [])

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className='nav__contents'>
        <div className='nav__menu-left'>
          <button className='nav__hamburger-menu' onClick={handleSidenav}>
            <IconHamburger size={25} />
          </button>
          <Link className='d-flex items-center nav__logo-wrapper' to='/'>
            <img
              className='nav__logo'
              src='https://imgs.search.brave.com/itpEOigABtqIjqyzfgrXg5CXPshfavVr9Lq0lT7_-sQ/rs:fit:1200:730:1/g:ce/aHR0cDovL2VkZ2Uu/Y2FzYmFhLmNvbS93/b3JkcHJlc3Mvd3At/Y29udGVudC91cGxv/YWRzLzIwMTYvMDcv/Vml1X2xvZ28uc3Zn/Xy5wbmc'
            />
          </Link>
          <div className={`nav__menu-list ${getIsOpen ? "w-200" : ""}`}>
            <Link
              className='nav__menu-item'
              to={`/list/${textToKebab("Viu Originals")}`}
              onClick={handleFromHome}
            >
              VIU Originals
            </Link>
            <Link
              className='nav__menu-item'
              to={`/list/${textToKebab("Drama")}`}
              onClick={handleFromHome}
            >
              Drama
            </Link>
            <Link
              className='nav__menu-item'
              to={`/list/${textToKebab("Anime")}`}
              onClick={handleFromHome}
            >
              Anime
            </Link>
            <Link
              className='nav__menu-item'
              to={`/${textToKebab("Favorites")}`}
              onClick={handleFromHome}
            >
              Favorites
            </Link>
            <div className='spacer spacer-nav'></div>
          </div>
        </div>
        <div className='nav__menu-right'>
          <form onSubmit={handleSearchSubmit}>
            <div className='nav__search-box'>
              <input
                className='nav__search'
                type='text'
                onChange={handleSearchInput}
              />
              <button
                type='submit'
                className='border-0 d-flex justify-content-center items-center nav__search-button'
              >
                <IconSearch size={20} color='#ffbf00' />
              </button>
            </div>
          </form>
          {/*<button className='nav__button' type=''>
            Sign in / Sign up
          </button>*/}
        </div>
      </div>
      <Backdrop />
    </div>
  )
}

export default Nav
