import React from 'react'
import { Outlet } from 'react-router-dom'

import "./styles.scss"
const MainLayout = () => {
  return (
    <div className='main-layout'>
        <div className="navbar-layout"></div>
        <div className="content container">
            <Outlet/>
        </div>
        <div className="footer"></div>
    </div>
  )
}

export default MainLayout