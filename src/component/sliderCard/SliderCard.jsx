import './slidercard.scss';
import cardImage from '../../assets/mobile_slider_top_one.png';
import { Link } from 'react-router-dom';

const SliderCard = ({animation,index,openModal,item}) => {
  return (
    <div className={`sliderCard ${index === animation ? 'active-slide' : ''}`}>
      <div className="slider-card-top-col" style={{backgroundImage:`url(${item})`}}>
        
      </div>
      <div className="sliderCardContent">
        <p className="sliderCardTitle">
          polaris rzr 1000 cc<br />
          2 seater<br />
          30 min : 1000 aed<br />
          1 hour: 1500 aed
        </p>
          
        <Link to="/tour-detail/">
        <button className="sliderCardButton" >
          Book Now</button>
        </Link>
     
      </div>
    </div>
  );
};

export default SliderCard;
