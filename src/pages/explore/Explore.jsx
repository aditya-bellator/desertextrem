
import { headingImg } from '../../assets'

////styles
import "./styles.scss"
<<<<<<< HEAD
import Slider from 'react-slick';
=======
import Slider from '../../component/slider/Slider'

>>>>>>> 1439270fcdd101bb17e772c5984abc356d3474fb
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
        <Slider />
      </section>
    </div>
  )
}

export default Explore
