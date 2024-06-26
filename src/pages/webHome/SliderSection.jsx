import React from 'react'
import Slider from 'react-slick';
import Card from '../../component/card/Card';
import { adventureImg, bike, bluebuggy, cannam1000, cannam4, desertImg, headingImg, polaris1000, road1, road2, sharma180, sharma320, sharmaatv250, singleImg, sliderImg, twinRider } from '../../assets'

const SliderSection = ({name,para,openModal}) => {
    var settings2 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        // centerPadding: "60px",
        slidesToScroll: 1,
        arrows:false,
        autoplay:true,
        // centerMode:true,
      };
  return (
    <section className='twin-rider-section2'>
    <div className="web-rider-title">
<h2>{name}</h2>
<p>{para}

</p>
      {/* <img src={adventureImg} alt="desert" />
      <img src={twinRider} alt="" /> */}
    </div>
    


    <div className="twin-rider-slider">

      <Slider {...settings2}>
        <Card openModal={openModal} title="kymko mxu 250 cc" min="30 min : 250 AED" hours="1 Hour : 400 AED" img={sliderImg}/>
        <Card openModal={openModal} title="SHARMAX hummer 320 CC" min="30 min : 300 AED" hours="1 Hour : 500 AED" img={sharma320}/>
        <Card openModal={openModal} title="kymko mxu 250 cc" min="30 min : 350 AED" hours="1 Hour : 550 AED" img={bluebuggy} />
        <Card openModal={openModal} title="kymko mxu 250 cc" min="30 min : 250 AED" hours="1 Hour : 400 AED" img={sliderImg}/>
        <Card openModal={openModal} title="SHARMAX hummer 320 CC" min="30 min : 300 AED" hours="1 Hour : 500 AED" img={sharma320}/>
        <Card openModal={openModal} title="kymko mxu 250 cc" min="30 min : 350 AED" hours="1 Hour : 550 AED" img={bluebuggy} />
        <Card openModal={openModal} title="kymko mxu 250 cc" min="30 min : 250 AED" hours="1 Hour : 400 AED" img={sliderImg}/>
        <Card openModal={openModal} title="SHARMAX hummer 320 CC" min="30 min : 300 AED" hours="1 Hour : 500 AED" img={sharma320}/>
        <Card openModal={openModal} title="kymko mxu 250 cc" min="30 min : 350 AED" hours="1 Hour : 550 AED" img={bluebuggy} />

      </Slider>
      {/* <div className="overlay"></div> */}
    </div>
  </section>
  )
}

export default SliderSection