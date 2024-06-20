import { adventureImg, desertImg, headingImg, singleImg, twinRider } from '../../assets'
import React, { useState } from 'react'
import "./styles.scss"
import Rider from '../../component/slider/Rider'


import Slider from 'react-slick';
////styles
import "./styles.scss"
import SliderCard from '../../component/sliderCard/SliderCard';
const Explore = () => {

  const [activeSlide, setActiveSlide] = useState(0);
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    arrows: false,

    dots:true,
    beforeChange: (current, next) => setActiveSlide(next),
    
  };
  return (

    <div style={{ width: "100%" }}>




      <section className='experience-sec'>
        <div className="experience-heading">
          <img src={headingImg} alt="" />
        </div>
        <div className="sub-heading">
          <p> driving a desert buggy</p>
          <p>across stunning <span>
            sandy dunes.
          </span></p>

        </div>
    <div className="slider-container">

      <Slider {...settings}>
        {[1,2,3,4,5].map((item,index)=>{
          return(

            <SliderCard key={item} animation={activeSlide} index={index}/>
          )
        })}
         
        
      </Slider>
          </div>
        {/* <Slider /> */}
        <section className="gallery-sec">
        <div className="title">
        <img src={desertImg} alt="desert" />
        </div>
        <div className="gallery">
          <p>Gallery</p>
        </div>
        

        </section>
      </section>
      <section className="twin-rider-sec">
        <div className="title">
          <img src={adventureImg} alt="twin-rider" />
        </div>
        <div className="title">
      
          <img src={twinRider} alt="twin-rider" />
        </div>
        <div className="ride-detail">
          <h3> Adult (Double) </h3>
          <p> Embrace Adventure: Thrilling Buggy Tours Await</p>
        </div>
        <div className="rider-slider">
          <Rider />

        </div>
      </section>


      <section className="twin-rider-sec">
        <div className="title banner">
          <img src={adventureImg} alt="single-rider" />
        </div>
        <div className="title">
          <img src={singleImg} alt="single-rider" />
        </div>
        <div className="ride-detail">
          <h3> Adult (single) </h3>
          <p> Embrace Adventure: Thrilling Buggy Tours Await</p>
        </div>
        <div className="rider-slider">

          <Rider />
        </div>
      </section>

      <section className="enquiry-section">
        <div className="desert-img">
          <img src={desertImg} alt="desert" />

        </div>
        <div className="thanks">
          <h2>Thankyou</h2>
          <div className="card-thank">
            <p>We appreciate your interest in our services. One of our representatives 
              will get back to you shortly with the information you requested. If 
              you have any urgent questions, please feel free to contact us directly.</p>
              <hr style={{width:"40%", marginBottom:"5px", marginTop:"10px"}} />
              <p className="phone-number">+971 52 606 3261</p>
          </div>
        </div>

      </section>
    </div>
  )
}

export default Explore
