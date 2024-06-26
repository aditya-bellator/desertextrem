import { useEffect, useState } from "react"
import Slider from "react-slick";
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
///styles
import "./styles.scss"
import { Rating } from "@mui/material";
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import {desert,desert1,desert2,desert3,desert4,desert5}from "../../assets"


const DetailTabs = ({sliderData,fun}) => {
  const [value, setValue] =useState(4);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    variableWidth: false,
    autoPlay:true,
    Loop:true,
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
  const [activeTabs, setActiveTabs] = useState(0)
  const tabs = [ {
  name:"Highlights",link:"highlights"},
  {
  name:"Inclusions",link:"highlights"}, {
  name:"Need to Know",link:"highlights"},{
  name:"Cancellation Policy",link:"highlights"},{
  name:"Reviews",link:"highlights"}]
 
 
  const [checkFavourite, setCheckFavourite] = useState(false)

  
  useEffect(() => {
   setValue(4)
  }, [sliderData])
  return (
    <>
     

    <div className="tabs-container">
      <div className="tabs-title">
        <ul>
          {tabs.map((item,index)=>{
            return(

            <a href={`#${item.link}`} key={item} >

              <li onClick={()=>setActiveTabs(index)} className={activeTabs == index?"active-tab":""}>{item.name}</li>
            </a> 
            )
          })}
         
        </ul>
      </div>
      <div className="tabs-content">
        <div className="slides">
          <div className="preview-slide">
            <img src={desert1} alt="" />
            <div className={` ${checkFavourite ?"heart-icon2":"heart-icon"}`}>{!checkFavourite ?<FavoriteBorderOutlinedIcon/>:<FavoriteOutlinedIcon /> }</div>
          </div>
          <div className="slides-list">
          <Slider {...settings}>
              
         
            {[desert2,desert3,desert4,desert,desert5].map((item) => (
              <img src={item} alt={item} key={item} />
            ))}
    </Slider>
         
          </div>
        </div>
      
      </div>
    </div>
    </>
  )
}

export default DetailTabs