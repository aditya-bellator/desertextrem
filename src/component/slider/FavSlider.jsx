// Import Swiper React components

// Import Swiper styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { favorite2, favorite1, favorite } from "../../assets";

///styles
import "./styles.scss";
import SliderCard2 from "../sliderCard2/SliderCard2";
const FavSliderComponent = ({ data }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    variableWidth: false,
    autoPlay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    // <Slider {...settings}>

    //   {data?.map((item, index) => {
    //     return <SliderCard2 key={index} data={} />;
    //   })}
    // </Slider>
    <Slider {...settings}>
      <SliderCard2
        image={favorite2}
        name={"RZR Xtreme Terrain Package 4 seater"}
        description={
          "Calling all adventure enthusiasts for an unforgettable experience in the desert. Unravel a thrilling adventure in the desert, riding a 1000 cc Polaris rzr, on the red dunes, get this thrilling experience with Tripatours and create a memory for a lifetime, riding a cool ATV."
        }
        price={"AED 800"}
      />
      <SliderCard2
        image={favorite1}
        name={"Ultimate Adventure Dessert Safari"}
        description={
          "Get set to explore the Dubai desert in its finest hour and warm weather. It's the perfect time of the day when the dessert comes to life, and gaze under the stars for an unforgetta"
        }
        price={"AED 199"}
      />
      <SliderCard2
        image={favorite}
        name={"Xtreme Quad Experience"}
        description={
          "Calling all adventure enthusiasts for an unforgettable experience in the desert. Unravel a thrilling adventure in the desert, riding a 150CC Quad Bike, on the red dunes, get this thrilling experience with Tripatours and create a memory for a lifetime, riding a cool ATV."
        }
        price={"AED 299"}
      />
    </Slider>
  );
};

export default FavSliderComponent;
