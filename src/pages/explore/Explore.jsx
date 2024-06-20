import React, { useState } from 'react'
import { headingImg ,twinRider} from '../../assets'
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
    dots:true,
    arrows:false,
    beforeChange: (current, next) => setActiveSlide(next),
    
  };
  return (

    <div style={{width:"100%"}}>




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
      </section>
      <section className="twin-rider-sec">
  <div className="title">
    {/* <img src="" alt="" /> */}
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
    </div>
  )
}

export default Explore
