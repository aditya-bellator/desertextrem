import React, { useEffect, useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
///styles
import "./styles.scss";
import Modal from "../modal/Modal";
import Form from "../form/Form";
import { toast } from "react-toastify";
import ThankYouModal from "../thankYouModal/ThankYouModal";
import axios from "axios";
// import {favorite}from "../../assets"

const SimilarPackageCard = ({fun,data}) => {

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
    <div className="similar-package-card-col" >
      <div className="similar-card-img" style={{backgroundImage:`url(${data?.slide[0]})`}}>
      <div className="heart-icon" ><FavoriteBorderOutlinedIcon/></div>
      {/* <img src={favorite} alt="new" /> */}
      </div>
      <div className="similar-card-content">
        <h4>{data?.name}</h4>
        {/* <p>(4 Persons)</p> */}
        <hr />
        <div className="price">
          <h4 className="aed">AED {data?.minPrice} /-</h4> <p className="per-night">(Per Person)</p>
        </div>
        <div className="xtreme">
          Desert Xtreme <StarIcon /> 4.5
        </div>
        <div className="per-person-price">
          {/* <p>($1099 Per Person) x 4 = </p><h4>AED 1050</h4> */}
        </div>
      </div>
        <div className="similar-card-book-btn">
          <button onClick={()=>openModal()}>Send Enquiry</button>
        </div>
    </div>
    </>
  );
};

export default SimilarPackageCard;
