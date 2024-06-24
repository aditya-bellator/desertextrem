import React from 'react'
import "./styles.scss"
import { sliderImg } from '../../assets'
import { CiHeart } from "react-icons/ci";

const Card = () => {
  return (
    <div className='card-container'>
      
      {/* <div className="rating">
        <span>

      <CiHeart />
        </span>

      </div> */}
      <div className="img-sec">
        <img src={sliderImg} alt="cardImg" />
      </div>
      <div className="detail-sec">
        <div className="title">
          <p>kymko mxu 250 cc</p>
        </div>
        <div className="price-sec">
          <div className="price">
            <span>30 min : 250 AED</span>
            <span>1 Hour : 400 AED</span>
          </div>
          <div className="booknow">
            <a href="#enquire-now">
            <button className="book-btn">
              book now
            </button>

            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card