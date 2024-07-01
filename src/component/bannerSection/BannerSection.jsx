import React from 'react'
import { logo, tickIcon } from "../../assets";
import { IoIosStar } from "react-icons/io";
import { SiNike } from "react-icons/si";
import banner from "../../assets/banner.png";
import whatsApp from "../../assets/whtaup.png";

import "./styles.scss"
import { Link } from 'react-router-dom';
const BannerSection = () => {
  return (
    <section className="banenrSecttop">
        <div className="banner">
        <div className="manuWapper">
          <div className="whatupbox">
            <span>
              <a href="https://api.whatsapp.com/send?phone=+971526063261&amp;text=Hi,%20I%20would%20like%20to%20know%20more%20details">
                <img src={whatsApp} alt="" />
                <p>

                +971 56 188 5977
                </p>
              </a>
            </span>
          </div>
          <nav className="navbart" id="">
            <ul className="navbar-nav mx-auto centermanu">
              <li className="nav-item active">
                <Link className="nav-link" to="/" >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#ADULT">
                ADULT Double
                </a>
              </li>
              <li>
                <Link className="navbar-brand" to="/">
                  <img src={logo} className="img-fluid" alt="" />
                </Link>
                {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button> */}
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#dune">
                  Dune Buggy{" "}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Gallery">
                  Gallery
                </a>
              </li>
            </ul>
          </nav>
        </div>
          <img src={banner} className="img-fluid" alt="" />
          <div className="top-banner-bottom-rectangle">
            <ul>
              <li>
                <span>
                  <IoIosStar />
                </span>
                4.6 Rated
              </li>
              <li>
                <span>
                  <img src={tickIcon} alt="" />
                </span>
                100% Customised trips
              </li>
              <li>
                <span>
                  <img src={tickIcon} alt="" />
                </span>
                100% Customised trips
              </li>
              <li>
                <span>
                  <img src={tickIcon} alt="" />
                </span>
                24x7 concierge
              </li>
            </ul>
          </div>
        </div>
      </section>
  )
}

export default BannerSection