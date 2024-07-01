
import "./enquiry.scss";
import { desertEx } from "../../assets";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const Enquiry = () => {
  const sendToEmail = (event) => {
    event.preventDefault();

    const email1 = "panthjyoti12@gmail.com"; // Replace with your first email address
    const email2 = "addyrj20@gmail.com"; 
    const email = `${email1},${email2}`;
    const firstName = document.querySelector('input[name="firstName"]').value;
    const lastName = document.querySelector('input[name="lastName"]').value;
    const emailAddress = document.querySelector('input[name="email"]').value;
    const phoneNumber = document.querySelector('input[name="phone_number"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    const subject = "New User Enquiry";
    const body = `First Name: ${firstName}
Last Name: ${lastName}
Email: ${emailAddress}
Mobile: ${phoneNumber}
Message: ${message}`;

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };
  const [formData, setFormData] = useState({})

  const formHandler = (e)=>{
    const {name,value} = e.target
    setFormData({...formData, [name]: value})
  }
  const submitHandler = async(e)=>{
    e.stopPropagation()
    await axios.post("https://tripatours.com/api/enquiry/desertExtremeEnquiry/formData").then((response)=>{
       if(response?.status){
      toast.success(response?.message)
         setFormData({})
       }else{
         toast.error(response?.message)
       }
     }).catch((error)=>{
      toast.error(error?.message)
     })
   }
   console.log(formData)
  return (
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
            <div className="form-col">
              <div className="input-col">
                <label htmlFor="message">Message</label>
                <textarea name="message" required value={formData?.message}  onChange={formHandler}/>
              </div>
            </div>
            <button type="submit" onClick={submitHandler}>Submit Query</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Enquiry;
