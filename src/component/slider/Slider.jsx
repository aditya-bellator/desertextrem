
import ReactSlick from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.scss';
import SliderCard from '../sliderCard/SliderCard';

const Slider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100, 
    autoplay: true, 
    // autoplaySpeed: 2000, // Delay between each auto scroll in milliseconds
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="slider-wrapper">
      <ReactSlick {...settings}>
        <div>
          <SliderCard />
        </div>
        <div>
          <SliderCard />
        </div>
        <div>
          <SliderCard />
        </div>
      </ReactSlick>
    </div>
  );
};

export default Slider;
