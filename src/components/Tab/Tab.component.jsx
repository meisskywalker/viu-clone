import React, { useCallback, useEffect, useState } from "react"
import "./Tab.component.css"

const Tab = ({ children, tabs }) => {
  const [tabIndex, setTabIndex] = useState(0)

  useEffect(() => {
    setTabIndex(0)
  }, [children])

  const handleTab = useCallback((idx) => {
    setTabIndex(idx)
  })
  return (
    <div className='tab'>
      <div className='tab__items'>
        {tabs.map((tab, idx) => (
          <span
            key={idx}
            className={`tab__item cursor-pointer ${idx === tabIndex ? "active" : ""
              }`}
            onClick={() => handleTab(idx)}
          >
            {tab}
          </span>
        ))}
      </div>
      <div className='tab__content-items'>
        {children.map((child, idx) => (
          <div key={idx} className={`w-full ${idx !== tabIndex ? "d-none" : ""}`}>{child}</div>
        ))}
      </div>
    </div>
  )
}

export default Tab
