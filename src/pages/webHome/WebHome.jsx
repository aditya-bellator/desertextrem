import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import banner from "../../assets/banner-s.png";
import whatsApp from "../../assets/whtaup.png";
import { IoIosCall, IoIosStar } from "react-icons/io";
import { SiNike } from "react-icons/si";
import { Link } from "react-router-dom";
import "./styles.scss";
import Slider from "react-slick";
import Card from "../../component/card/Card";
import SliderSection from "./SliderSection";
import MiniGalleryCard from "./Gallery";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import SliderCard from "../../component/sliderCard/SliderCard";
import { great, last } from "../../assets";
import Greatcard from "../../component/greatcard/Greatcard";
import Modal from "../../component/modal/Modal";

const WebHome = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    arrows: false,

    dots: false,
    autoplay: true,
    beforeChange: (current, next) => setActiveSlide(next),
  };

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div>
       <Modal isOpen={isOpen} onClose={closeModal}>
        <h2>This is your custom modal!</h2>
        <p>You can put any content here.</p>
      </Modal>
      <section className="banenrSecttop">
        <div className="banner">
        <div className="manuWapper">
          <div className="whatupbox">
            <span>
              <a href="https://api.whatsapp.com/send?phone=+971526063261&amp;text=Hi,%20I%20would%20like%20to%20know%20more%20details">
                <img src={whatsApp} alt="" />
                +971 56 188 5977{" "}
              </a>
            </span>
          </div>
          <nav className="navbart" id="">
            <ul className="navbar-nav mx-auto centermanu">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home{" "}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About Us
                </a>
              </li>
              <li>
                <a className="navbar-brand" href="#">
                  <img src={logo} className="img-fluid" alt="" />
                </a>
                {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button> */}
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#Activities">
                  Our Activities{" "}
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
                  <SiNike />
                </span>
                100% Customised trips
              </li>
              <li>
                <span>
                  <SiNike />
                </span>
                100% Customised trips
              </li>
              <li>
                <span>
                  <SiNike />
                </span>
                24x7 concierge
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="right-row">
        <div className="col-md-12">
          <div className="rightSide">
            <div className="titleHeading">
              <h2>
                Experience an <br />
                exhilarating adventure
              </h2>
              <p>
                driving a desert buggy <br />
                across stunning <b className="bg_oragne">Sandy dunes.</b>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Swiper
        className="mySwiper"
        spaceBetween={1}
        slidesPerView={5}
        centeredSlides={true}
        roundLengths={true}
        loop={true}
        autoplay={true}
        // loopAdditionalSlides={30}
        pagination={{
          clickable: true,
        }}
      >
        {[1,2,3,4,5,6,7,8,9,10,11].map((item)=><SwiperSlide key={item}>
    
    <SliderCard openModal={openModal}/>
  </SwiperSlide>)}
        
      
       
       
      </Swiper>
      <SliderSection
        name={"Adult (double)"}
        para={"EMBRACE ADVENTURE: THRILLING BUGGY TOURS AWAIT"}
      />
      <SliderSection
        name={"Adult (Singal)"}
        para={"EMBRACE ADVENTURE: THRILLING BUGGY TOURS AWAIT"}
      />
      <SliderSection
        name={"DUNE BUGGY"}
        para={"EMBRACE ADVENTURE: THRILLING BUGGY TOURS AWAIT"}
      />
      <SliderSection
        name={"OTHER OFFROAD BIKES & ATV'S (SINGLE)"}
        para={"EMBRACE ADVENTURE: THRILLING BUGGY TOURS AWAIT"}
      />

      <div className="gallery-section">
        <div className="gallery-heading">Gallery</div>
        <div className="gallery-sub-heading">
          Dubai Safari's stunning wildlife gallery
        </div>
        <MiniGalleryCard />
      </div>
      <section className="best-place">
        THE BEST PLACE <br />
        FOR RIDE!
      </section>
      <section className="great-deal">
        <div className="great-col-left">
          <div className="img-left">
            <img src={great} alt="buggy" />
          </div>
          <div className="great-content">
            <div className="content">
              <h2>Great Deals!</h2>
              <h3>Flexible? Rides by your style & budget</h3>
              <p>
                Find your perfect travel destinations with our expert
                advice,travel trips, destination information and inspiration
                from usthat match your travel style in less than 2 minutest.
              </p>
            </div>
            <div className="btn-sec">
              <div className="btn-explore">
                <button>explore now</button>
              </div>
              <div className="or">or</div>
              <div className="request">
                <div className="phone">
                  <IoIosCall />
                </div>
                <div className="req-con">
                  Request a <br /> Call Back
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="great-col-right">
          <div className="img-top">
            <img src={last} alt="buggynew" />
          </div>
          <div className="testimonial">
            <div className="slider">
              <Slider {...settings}>
                <div>
                  <Greatcard />
                </div>
                <div>
                  <Greatcard />
                </div>
                <div>
                  <Greatcard />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>

      <section className="location-sec">
        <div className="loc-top">
          <h1>LOCATION MAP</h1>
          <p>DESERT XTREME ADVENTURES</p>
        </div>
        <div className="loc-bottom">
          <div className="detail-sec">
            <p>
              <b>DESERT XTREME ADVENTURES</b>
            </p>
            <p>
              Retreat by Sharjah Collection - Madam Rd <br /> Near Al Badayer - Al
              Badayer <br /> Sharjah - United Arab Emirates
            </p>
            <p>Phone Number : +97 152 606 3261</p>
          </div>
          <div className="map">
            {/* <div className="innerWrap1"> */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14469.581523690338!2d55.7187776!3d24.9526592!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef577160f93faad%3A0xd593a598b2c7b63d!2sDESERT%20XTREME%20ADVENTURES!5e0!3m2!1sen!2sin!4v1719220932118!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            {/* </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebHome;
