import React from 'react'
import "./navbar.scss";
// import logo from "../../assets/logo_images.png"
import { FiAlignLeft } from "react-icons/fi";
import { logo } from '../../assets';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='main-nav'>
      <div className="nav-logo">
        <Link to={"/"}>
        <img src={logo} alt="logo" />
        </Link>
        <FiAlignLeft />

      </div>
   
    </div>
  )
}

export default Navbar
