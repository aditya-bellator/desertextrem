import React from 'react'
import { headingImg } from '../../assets'

////styles
import "./styles.scss"
import Slider from 'react-slick';
const Explore = () => {


  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    
  };
  return (
    <div style={{width:"100%"}}>
      <section className='experience-sec'>
        <div className="experience-heading">
          <img src={headingImg} alt="" />
        </div>
        <div className="sub-heading">
        driving a desert buggy
        across stunning <span>
            sandy dunes.
          </span>
        </div>
        <div className="slider-container">
      <Slider {...settings}>
        <div >
          <h3>dafdsafsdfdsf1</h3>
        </div>
        <div>
          <h3>asdasdfaf2</h3>
        </div>
        <div>
          <h3>dsfsdfisfd</h3>
        </div>
        <div>
          <h3>asdhbfdhbh</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
      </section>
    </div>
  )
}

export default Explore
