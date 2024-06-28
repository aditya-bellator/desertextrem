import { adventureImg, bike, bluebuggy, cannam1000, cannam4, desertImg,  polaris1000, road1, road2, sharma180, sharma320, sharmaATV250, sharmaatv250, singleImg, sliderImg, twinRider } from '../../assets'
import  { useState } from 'react'
import "./styles.scss"
import Enquiry from '../../component/enquiryform/Enquiry'
import Slider from 'react-slick';
////styles
import "./styles.scss"
import SliderCard from '../../component/sliderCard/SliderCard';
import Card from '../../component/card/Card';
import Gallerycard from '../../component/card/Gallerycard';
const Slides = () => {

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




    


      <section className='twin-rider-section' id="activity">
        <div className="twin-rider-title">

          <img src={adventureImg} alt="desert" />
          <img src={twinRider} alt="" />
        </div>
        <div className="twin-detail">
          <h1>ADULT (DOUBLE)</h1>
         <p>
            Embrace Adventure: Thrilling Buggy <br /> Tours Await
          </p>

        </div>


        <div className="twin-rider-slider">

          <Slider {...settings2}>
            <Card title="kymko mxu 250 cc" min="30 min : 250 AED" hours="1 Hour : 400 AED" img={sliderImg}/>
            <Card title="SHARMAX hummer 320 CC" min="30 min : 300 AED" hours="1 Hour : 500 AED" img={sharma320}/>
            <Card title="kymko mxu 250 cc" min="30 min : 350 AED" hours="1 Hour : 550 AED" img={bluebuggy} />

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
            Embrace Adventure: Thrilling Buggy <br />Tours Await
          </p>

        </div>


        <div className="twin-rider-slider">

          <Slider {...settings2}>
          <Card title="kymko mxu 250 cc" min="30 min : 150 AED" hours="1 Hour : 300 AED" img={sliderImg}/>
            <Card title="SHARMAX hummer 320 CC" min="30 min : 200 AED" hours="1 Hour : 350 AED" img={sharma320}/>
            <Card title="kymko mxu 250 cc" min="30 min : 150 AED" hours="1 Hour : 300 AED" img={sharmaatv250} />


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
            Embrace Adventure: Thrilling Buggy <br /> Tours Await
          </p>

        </div>


        <div className="twin-rider-slider">

          <Slider {...settings2}>
          <Card title="polaris rzr 1000 cc (4 seater)" min="30 min : 1500 AED " hours="1 Hour : 2000 AED" img={cannam4}/>
            <Card title="CANNAM rzr 1000 cc (2 seater)" min="30 min : 150 AED " hours="1 Hour : 300 AED" img={cannam1000}/>
            <Card title="polaris rzr 1000 cc (2 seater)" min="30 min : 1000 AED " hours="1 Hour : 1500 AED" img={polaris1000} />


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
            Embrace Adventure: Thrilling Buggy <br />Tours Await
          </p>

        </div>


        <div className="twin-rider-slider">

          <Slider {...settings2}>
          <Card title="yamaha rapto 700 cc" min="30 min : 700 AED " hours="1 Hour : 1200 AED" img={road1} />
            <Card title="dirt bike 280/320 cc" min="30 min : 500 AED " hours="1 Hour : 800 AED" img={bike} />
            <Card title="polaris sportsman 570 cc" min="30 min : 350 AED " hours="1 Hour : 700 AED" img={road2} />


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

      <section id='enquiry'>

        <Enquiry />
      </section>


      {/* <section className="enquiry-section">
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

      </section> */}
    

    </div>
  )
}

export default Slides