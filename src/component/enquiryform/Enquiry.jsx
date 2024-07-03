
import "./enquiry.scss";
import { desertEx } from "../../assets";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import Modal from "../modal/Modal";
import ThankYouModal from "../thankYouModal/ThankYouModal"

const Enquiry = () => {

  const [formData, setFormData] = useState({})

  const formHandler = (e)=>{
    const {name,value} = e.target
    setFormData({...formData, [name]: value})
  }
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const submitHandler = async(e)=>{
    e.preventDefault()
    await axios.post("https://tripatours.com/api/enquiry/desertExtremeEnquiry",formData).then((response)=>{
      if(response?.data?.status == "true"){
         openModal()
        // toast.success(response?.data?.message,{
        //   position: "top-right",
        // });
         setFormData((prev)=>{
          return{
            ...prev,name:"",email:"",phone:"",message:""
          }
         })
       }else{
        toast.error(response?.data?.message);
       }
     }).catch((error)=>{
      toast.error(error?.response?.data?.message || 'An error occurred');
     })
   }
  return (
    <>
    <Modal isOpen={isOpen} onClose={closeModal}>
    <ThankYouModal/>
   </Modal>
    <div className="enquiry-main" id="enquire-now">
      <img src={desertEx} alt="" />
      <div className="enquiry-form-container">
        <div className="form-center-col">
          <h1>Enquiry Form</h1>
          <p>
            Fill in the details below and our advisory will
            <br />
            get in touch with you in the next 24 hours
          </p>
          <form >
            <div className="form-col">
              <div className="input-col">
                <label htmlFor="firstName">Name</label>
                <input type="text" name="name" value={formData?.name} required onChange={formHandler}/>
              </div>
              <div className="input-col">
                <label htmlFor="email">Email Address</label>
                <input type="email" name="email" required value={formData?.email}  onChange={formHandler}/>
              </div>
             
            </div>
            <div className="form-col">
             
              <div className="input-col">
                <label htmlFor="phone_number">Phone Number</label>
                <input type="tel" name="phone"  required  value={formData?.phone}  onChange={formHandler}/>
              </div>
            </div>
            {/* <div className="form-col">
              <div className="input-col">
                <label htmlFor="message">Message</label>
                <textarea name="message" required value={formData?.message}  onChange={formHandler}/>
              </div>
            </div> */}
            <button type="submit" onClick={submitHandler}>Submit Query</button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default Enquiry;
