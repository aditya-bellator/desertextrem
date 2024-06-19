import React from 'react'
import { headingImg } from '../../assets'
////styles
import "./styles.scss"
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
    </div>
  )
}

export default Explore
