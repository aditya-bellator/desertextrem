import React from 'react'
// import dubaiLogo from "../../assets/welcome-dubai.png"
// import unleashImg from "../../assets/unleash.png"
import logo from "../../assets/logo_images.png"
import "./style.scss"
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="hero-sec">
           <div className="heading-logo">
            <img src={logo} alt="logo" />
          </div>
          {/*
          <div className="bottom">
            <div className='country-logo'>
              <img src={dubaiLogo} alt="dubai-img" />
            </div>
            <div className='sub-title'>
              <img src={unleashImg} alt="unleash-img" />
            </div>
         */}
         
          <Link to={"/explore"}>
           <button className='btn-explore'>explore now</button>
          </Link> 
          </div>
        </div>

      {/* // </div> */}


    </>
  )
}

export default Home