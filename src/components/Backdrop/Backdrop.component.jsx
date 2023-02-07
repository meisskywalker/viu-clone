import React, { useCallback } from "react"
import { useSidenavStore } from "../../stores"
import "./Backdrop.component.css"

const Backdrop = () => {
  const getIsOpen = useSidenavStore((state) => state.isOpen)
  const getToggleSidenav = useSidenavStore((state) => state.toggleSidenav)

  const handleSidenav = useCallback(() => {
    getToggleSidenav()
  }, [])

  return (
    <div
      className={`backdrop ${getIsOpen ? "" : "d-none"}`}
      onClick={handleSidenav}
    ></div>
  )
}

export default Backdrop
