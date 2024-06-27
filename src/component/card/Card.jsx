import React from 'react'
// import "./styles.scss"
import "./gallery.scss"
import { sliderImg } from '../../assets'
import { CiHeart } from "react-icons/ci";

const Card = ({title,hours,min,img,openModal}) => {
  return (
    <div className='card-container'>
      
      {/* <div className="rating">
        <span>

      <CiHeart />
        </span>

      </div> */}
      <div className="img-sec">
        <img src={img} alt="cardImg" />
      </div>
      <div className="detail-sec">
        <div className="title">
          <p>{title}</p>
        </div>
        <div className="price-sec">
          <div className="price">
            <span>{min}</span>
            <span>{hours}</span>
          </div>
          <div className="booknow">
            <button className="book-btn" onClick={openModal}>
              book now
            </button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Card