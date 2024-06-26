import React from 'react'
////styles
import "./styles.scss"
import  cardImage  from '../../assets/gallery_img1.jpg'
import  cardImage1  from '../../assets/cardImage1.jpg'
import  cardImage2  from '../../assets/cardImage2.jpg'
import  cardImage3  from '../../assets/cardImage3.jpg'
import  cardImage4  from '../../assets/cardImage4.jpg'
import  cardImage5  from '../../assets/cardImage5.jpg'
import  cardImage6  from '../../assets/cardImage6.jpg'

const MiniGalleryCard = () => {
  return (
    <div className='gallery-card-container'>

    <div className='min-card-container'>
      <div className="min-card-sec1">
        <img src={cardImage1} alt="cardimage" />
      </div>
      <div className="min-card-sec2">
        <div className="min-card-top">

        <img src={cardImage2} alt="cardimage" />
        </div>
        <div className="min-card-bottom">
        <img src={cardImage3} alt="cardimage" />
        <img src={cardImage4} alt="cardimage" />

        </div>
      </div>
      <div className="min-card-sec3">

        <img src={cardImage5} alt="cardimage" />
        <img src={cardImage6} alt="cardimage" />
      </div>
    </div>
    </div>
  )
}

export default MiniGalleryCard