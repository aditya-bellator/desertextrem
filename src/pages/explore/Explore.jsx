
import { headingImg } from '../../assets'

import Slider from 'react-slick';
////styles
import "./styles.scss"
import SliderCard from '../../component/sliderCard/SliderCard';
const Explore = () => {


  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    arrows:false
    
  };
  return (

    <div style={{width:"100%"}}>

 <section className="twin-rider-sec">
  <div className="title">
    <img src="" alt="" />
    <img src="" alt="" />
  </div>
</section>


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
          <SliderCard/>
          <SliderCard/>
          <SliderCard/>
          <SliderCard/>
        
      </Slider>
    </div>
        {/* <Slider /> */}
      </section>
    </div>
  )
}

export default Explore
