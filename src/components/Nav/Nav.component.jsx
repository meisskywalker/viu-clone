import React, { useState, useCallback, useEffect } from "react"
import { IconSearch } from "../Icons.components"
import "./Nav.component.css"

const Nav = () => {
  const [show, setShow] = useState(false)

  const transition = useCallback(() => {
    if (window.scrollY > 50) setShow(true)
    else setShow(false)
  })

  useEffect(() => {
    window.addEventListener("scroll", transition)

    return () => window.removeEventListener("scroll", transition)
  }, [])

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className='nav__contents'>
        <div className='nav__menu-left'>
          <img
            className='nav__logo'
            src='https://imgs.search.brave.com/itpEOigABtqIjqyzfgrXg5CXPshfavVr9Lq0lT7_-sQ/rs:fit:1200:730:1/g:ce/aHR0cDovL2VkZ2Uu/Y2FzYmFhLmNvbS93/b3JkcHJlc3Mvd3At/Y29udGVudC91cGxv/YWRzLzIwMTYvMDcv/Vml1X2xvZ28uc3Zn/Xy5wbmc'
          />
          <div className='nav__menu-list'>
            <a className='nav__menu-item' href=''>
              VIU Originals
            </a>
            <a className='nav__menu-item' href=''>
              Drama
            </a>
            <a className='nav__menu-item' href=''>
              Anime
            </a>
          </div>
        </div>
        <div className='nav__menu-right'>
          <div className='nav__search-box'>
            <input className='nav__search' type='text' />
            <IconSearch size={20} color='#ffbf00' />
          </div>
          <button className='nav__button' type=''>
            Sign in / Sign up
          </button>
        </div>
      </div>
    </div>
  )
}

export default Nav
