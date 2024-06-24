import React from 'react'
import "./navbar.scss";
// import logo from "../../assets/logo_images.png"
import { FiAlignLeft } from "react-icons/fi";
import { logo } from '../../assets';

const Navbar = () => {
  return (
    <div className='main-nav'>
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <FiAlignLeft />

      </div>
   
    </div>
  )
}

export default Navbar
