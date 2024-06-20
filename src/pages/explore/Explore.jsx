import React from 'react'
import { headingImg ,twinRider} from '../../assets'
import "./styles.scss"
import Rider from '../../component/slider/Rider'
const Explore = () => {
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
