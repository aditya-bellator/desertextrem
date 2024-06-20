
import { headingImg } from '../../assets'
////styles
import "./styles.scss"
import Slider from '../../component/slider/Slider'

const Explore = () => {
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
        <Slider />
      </section>
    </div>
  )
}

export default Explore
