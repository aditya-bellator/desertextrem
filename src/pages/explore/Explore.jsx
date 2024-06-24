import { adventureImg, desertImg, headingImg, logo, singleImg, twinRider } from '../../assets'
import React, { useState } from 'react'
import "./styles.scss"
import Enquiry from '../../component/enquiryform/Enquiry'
import Slider from 'react-slick';
////styles
import "./styles.scss"
import SliderCard from '../../component/sliderCard/SliderCard';
import Card from '../../component/card/Card';
import Gallerycard from '../../component/card/Gallerycard';
import { FaFacebookF, FaLinkedinIn, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { PiInstagramLogoLight } from 'react-icons/pi';
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

    dots: true,
    beforeChange: (current, next) => setActiveSlide(next),

  };
  var settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    // centerPadding: "60px",
    slidesToScroll: 1,
    // centerMode:true,
  };
  var settings3 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    // centerPadding: "60px",
    slidesToScroll: 1,
    arrows:false,
    // centerMode:true,
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
            {[1, 2, 3, 4].map((item, index) => {
              return (

                <SliderCard key={item} animation={activeSlide} index={index} />
              )
            })}


          </Slider>
        </div>
        {/* <Slider /> */}
      </section>


      <section className='twin-rider-section'>
        <div className="twin-rider-title">

          <img src={adventureImg} alt="desert" />
          <img src={twinRider} alt="" />
        </div>
        <div className="twin-detail">
          <h1>ADULT (DOUBLE)</h1>
         <p>
            Embrace Adventure: Thrilling Buggy Tours Await
          </p>

        </div>


        <div className="twin-rider-slider">

          <Slider {...settings2}>
            <Card />
            <Card />
            <Card />

          </Slider>
          <div className="overlay"></div>
        </div>
      </section>


      <section className='single-rider-section'>
        <div className="twin-rider-title">

          <img src={adventureImg} alt="desert" />
          <img src={singleImg} alt="" />
        </div>
        <div className="twin-detail">
          <h1>ADULT (single)</h1>
         <p>
            Embrace Adventure: Thrilling Buggy Tours Await
          </p>

        </div>


        <div className="twin-rider-slider">

          <Slider {...settings2}>
            <Card />
            <Card />
            <Card />

          </Slider>
          <div className="overlay"></div>
        </div>
      </section>


      <section className='Dune-buggy-section'>
        <div className="twin-rider-title">

          <img src={adventureImg} alt="desert" />
          <img src={singleImg} alt="" />
        </div>
        <div className="twin-detail">
          <h1>Dune buggy</h1>
         <p>
            Embrace Adventure: Thrilling Buggy Tours Await
          </p>

        </div>


        <div className="twin-rider-slider">

          <Slider {...settings2}>
            <Card />
            <Card />
            <Card />

          </Slider>
          <div className="overlay"></div>
        </div>
      </section>


      
      <section className='Offroad-Bike-section'>
        <div className="twin-rider-title">

          <img src={adventureImg} alt="desert" />
          <img src={singleImg} alt="" />
        </div>
        <div className="twin-detail">
          <h1>Other Offroad Bikes & ATV’s (Single)</h1>
         <p>
            Embrace Adventure: Thrilling Buggy Tours Await
          </p>

        </div>


        <div className="twin-rider-slider">

          <Slider {...settings2}>
            <Card />
            <Card />
            <Card />

          </Slider>
          <div className="overlay"></div>
        </div>
      </section>


      <section className="gallery-sec">
        <div className="title">
          <img src={desertImg} alt="desert" />
        </div>
        <div className="gallery">
          <p>Gallery</p>
        </div>
        <div className="twin-rider-slider"> 

<Slider {...settings3}>
 
<Gallerycard />
<Gallerycard />
<Gallerycard />
<Gallerycard />
<Gallerycard />
</Slider>

</div> 

      </section>

      <section>

        <Enquiry />
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
            <hr style={{ width: "40%", marginBottom: "5px", marginTop: "10px" }} />
            <p className="phone-number">+971 52 606 3261</p>
          </div>
        </div>

      </section>
      <section className='footer-sec'>
      <div className="footer2">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul className='footer-menu'>
          <li>About</li>
          <li>contact us</li>
          <li>privacy ploicy</li>
          <li>terms & conditions</li>
        </ul>
          <ul className='footer-icon'>
            <li><FaYoutube />
            </li>
            <li><PiInstagramLogoLight />
            </li>
            <li><FaLinkedinIn />
            </li>
            <li><FaFacebookF />
            </li>
            <li><FaWhatsapp />
            </li>
          </ul>
      <div className="copywrite">
        <p><span>c</span>2024 DESERT XTREME</p>
      </div>
      </div>
      </section>

    </div>
  )
}

export default Explore
