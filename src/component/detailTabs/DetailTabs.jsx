import { useEffect, useState } from "react"
import Slider from "react-slick";
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
///styles
import "./styles.scss"
import { Rating } from "@mui/material";
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import {desert,desert1,desert2,desert3,desert4,desert5}from "../../assets"
import { openModelHandlerRef } from "../../pages/webHome/WebHome";
import Modal from "../modal/Modal";
import Form from "../form/Form";
import axios from "axios";
import { toast } from "react-toastify";
import ThankYouModal from "../thankYouModal/ThankYouModal";


const DetailTabs = ({sliderData,fun,slides}) => {
  const [changeImage, setChangeImage] = useState( slides?.length && slides[0])
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
  // {
  // name:"Inclusions",link:"highlights"}, 
  // {
  // name:"Need to Know",link:"highlights"},
  {
  name:"Reviews",link:"review"},{
    name:"ENQUIRY NOW",link:"enquiry"},]
 
 
  const [checkFavourite, setCheckFavourite] = useState(false)

  
  useEffect(() => {
   setValue(4)
  }, [sliderData])
  
  const [isOpen, setIsOpen] = useState(false);

  
  
  
  const [isOpen2, setIsOpen2] = useState(false);
  
  const openModal = () => {
    setIsOpen(true);
  };


  const closeModal = () => {
    setIsOpen(false);
    setIsOpen2(false)
  };
  const openModal2 = () => {
  setIsOpen(false)
    setIsOpen2(true);
  };
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    senderEmail: 'ad@example.com', // Add senderEmail to the initial state
  });
  const [loading, setLoading] = useState(false)
  const submitHandler = async(e)=>{
    e.preventDefault()
    setLoading(true)
    await axios.post("https://tripatours.com/api/enquiry/desertExtremeEnquiry",formData).then((response)=>{
      if(response?.data?.status == "true"){
         openModal2()
         setLoading(false)
        // toast.success(response?.data?.message,{
        //   position: "top-right",
        // });
        //  setFormData((prev)=>{
        //   return{
        //     ...prev,name:"",email:"",phone:"",message:""
        //   }
        //  })
       }else{
        toast.error(response?.data?.message);
        setLoading(false)
       }
     }).catch((error)=>{
      toast.error(error?.response?.data?.message || 'An error occurred');
      setLoading(false)
    })
     setLoading(false)
   }
  return (
    <>
     
    <Modal isOpen={isOpen2} onClose={closeModal}>
    <ThankYouModal />
   </Modal>
       <Modal isOpen={isOpen} onClose={closeModal}>
     {loading ? <span style={{color:"black"}}>loading...</span>:<Form  setFormData={setFormData} formData={formData} submitHandler={submitHandler}/>}  
      </Modal>
    <div className="tabs-container">
      <div className="tabs-title">
        <ul>
          {tabs.map((item,index)=>{
            return(

            <a href={`#${item.link}`} key={item} >

              <li onClick={()=>item.link == "enquiry"?openModal(): setActiveTabs(index)} className={item.link == "enquiry" ?"bg-green":activeTabs == index?"active-tab":""}>{item.name}</li>
            </a> 
            )
          })}
         
        </ul>
      </div>
      <div className="tabs-content">
        <div className="slides">
          <div className="preview-slide">
            <img src={changeImage} alt="" />
            <div className={` ${checkFavourite ?"heart-icon2":"heart-icon"}`}>{!checkFavourite ?<FavoriteBorderOutlinedIcon/>:<FavoriteOutlinedIcon /> }</div>
          </div>
          <div className="slides-list">
          <Slider {...settings}>
              
         
            {slides?.map((item) => (
              <img src={item} alt={item} key={item} onClick={()=>setChangeImage(item)}/>
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