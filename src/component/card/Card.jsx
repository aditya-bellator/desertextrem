// import "./styles.scss"
import "./gallery.scss"

import { useNavigate } from 'react-router-dom';

const Card = ({title,hours,min,img,id}) => {
  const nav =useNavigate()
  return (
    <div className='card-container'>
      
      {/* <div className="rating">
        <span>

      <CiHeart />
        </span>

      </div> */}
      <div className="img-sec" style={{backgroundImage:`url(${img})`}}>
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
          <button className="book-btn" onClick={()=>nav(`/tour-detail/${id}`)}>
              book now
            </button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Card