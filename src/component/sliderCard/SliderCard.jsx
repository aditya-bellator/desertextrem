import './slidercard.scss';
import cardImage from '../../assets/mobile_slider_top_one.png';

const SliderCard = () => {
  return (
    <div className="sliderCard">
      <div className="slider-card-top-col">
        
      </div>
      <div className="sliderCardContent">
        <p className="sliderCardTitle">
          polaris rzr 1000 cc<br />
          2 seater<br />
          30 min : 1000 aed<br />
          1 hour: 1500 aed
        </p>
        <button className="sliderCardButton">Book Now</button>
      </div>
    </div>
  );
};

export default SliderCard;
