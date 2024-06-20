import React from 'react'
import "./style.scss"
import { sliderImg } from '../../assets'

const Rider = () => {
  return (
    <div className="slider">
        <div className="img">
            <img src={sliderImg} alt="" />
        </div>
        <div className="detail">
            <div className="title">
              <h2>kymko mxu 250 cc</h2>
            </div>
            <div className="price-sec">
                <div className="rate">
                  <span>30 min : 250 AED</span>
                  <span>1 Hour : 400 AED</span>
                </div>
                <div className="btn">
                  <button className='book-now'>Book now</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Rider