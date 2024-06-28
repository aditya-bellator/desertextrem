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
import { bluebuggy, cardImage, great, kymko250, last, polaris1000, sharmaATV250, sharmaatv250 } from "../../assets";
import Greatcard from "../../component/greatcard/Greatcard";
import Modal from "../../component/modal/Modal";
import { Autoplay } from "swiper/modules";
import Form from "../../component/form/Form";
import BannerSection from "../../component/bannerSection/BannerSection";
import FooterSection from "../../component/footerSec/FooterSection";
import FavSliderComponent from "../../component/slider/FavSlider";
import { Adultdouble, Adultsingle, DuneBuggy, ExperienceSlides, Offroad } from "../../component/json/Json";
export let openModelHandlerRef;

const WebHome = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    infinite: false,
    slidesToShow: 1,
    speed: 777500,
    arrows: false,

    dots: false,
    autoplay: false,
    beforeChange: (current, next) => setActiveSlide(next),
  };

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
  
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  
  const AdultdoubleData = Adultdouble
  return (
    <div>
       <Modal isOpen={isOpen} onClose={closeModal}>
       <Form/>
      </Modal>
      <BannerSection/>
<div className="content-center-col">

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
        // modules={[Autoplay]}
        //   autoplay={{
        //             delay: 5500,
        //             disableOnInteraction: false
        //         }}
        // loopAdditionalSlides={30}
        pagination={{
          clickable: true,
        }}
      >
        {ExperienceSlides.map((item)=><SwiperSlide key={item} >
    
    <SliderCard openModal={openModal} item={item}/>
  </SwiperSlide>)}
        
      
       
       
      </Swiper>
      <div id="activity">

      <SliderSection
        name={"Adult (double)"}
        data={AdultdoubleData}
        para={"EMBRACE ADVENTURE: THRILLING BUGGY TOURS AWAIT"}
        />
        </div>
      <SliderSection
      openModal={openModal}
        name={"Adult (Single)"}
        data={Adultsingle}
        para={"EMBRACE ADVENTURE: THRILLING BUGGY TOURS AWAIT"}
      />
      <SliderSection
      openModal={openModal}
        name={"DUNE BUGGY"}
        data={DuneBuggy}
        para={"EMBRACE ADVENTURE: THRILLING BUGGY TOURS AWAIT"}
      />
      <SliderSection
      openModal={openModal}
      data={Offroad}
        name={"OTHER OFFROAD BIKES & ATV'S (SINGLE)"}
        para={"EMBRACE ADVENTURE: THRILLING BUGGY TOURS AWAIT"}
      />
    <div className="slider-section">
        <div className="slider-heading">
          Travellers' favorite choice
          <p className="para" style={{color:"black"}}>
            From Desert Sands to Celestial Canopies: Dubai Safari Expeditions
          </p>
        </div>
        <div className="slider-col2 slider-col" id="fav">
          <div className="slider-container" style={{width:"92%",margin:"2% auto"}}>
            <FavSliderComponent />
          </div>
          <div className="slider-bg"></div>
        </div>
      </div>
      <div className="gallery-section" id="Gallery">
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
                <button onClick={()=>openModal()} >explore now</button>
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
        <div className="great-col-right" style={{backgroundImage:`url(${last})`}}>
          {/* <div className="img-top">
            <img src={last} alt="buggynew" />
          </div> */}
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
       
        <div className="loc-bottom">
          <div className="detail-sec">
          <div className="loc-top">
          <h1>LOCATION MAP</h1>
          <p>DESERT XTREME ADVENTURES</p>
        </div>
            
            <p>
              Retreat by Sharjah Collection - Madam Rd <br /> Near Al Badayer - Al
              Badayer <br /> Sharjah - United Arab Emirates
            </p>
            <p>Phone Number : +971 526 063 261</p>
          </div>
          <div className="map">
            {/* <div className="innerWrap1"> */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14469.581523690338!2d55.7187776!3d24.9526592!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef577160f93faad%3A0xd593a598b2c7b63d!2sDESERT%20XTREME%20ADVENTURES!5e0!3m2!1sen!2sin!4v1719220932118!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            {/* </div> */}
          </div>
        </div>
      </section>
  
</div>
<FooterSection/>
    </div>
  );
};

export default WebHome;
