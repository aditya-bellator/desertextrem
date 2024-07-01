// Import Swiper React components

// Import Swiper styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { favorite2, favorite1, favorite } from "../../assets";

///styles
import "./styles.scss";
import SliderCard2 from "../sliderCard2/SliderCard2";
import { FavoriteJson } from "../json/Json";
const FavSliderComponent = ({ data }) => {
  var settings = {
    dots: false,
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
{FavoriteJson?.map((item,i)=>{
  return(

    <SliderCard2
    key={i+item.img}
      image={item?.img}
      name={item?.name}
      id={item?.id}
      description={
       item?.des}
      price={item?.price}
    />
  )
})}
     
    </Slider>
  );
};

export default FavSliderComponent;
