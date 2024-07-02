import { useState } from 'react';
import "./style.scss";
import axios from 'axios';
import { toast } from 'react-toastify';
import Modal from '../modal/Modal';
import ThankYouModal from '../thankYouModal/ThankYouModal';

const Form = ({formData,setFormData,submitHandler}) => {


  const formHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };



 

  return (
    <>
     
    <div className='enquire-form'>
      <h3>Enquire Now</h3>
      <form className='form' >
        <input
          type="text"
          placeholder='Enter Name'
          name='name'
          value={formData?.name}
          onChange={formHandler}
        />
        <input
          type="email"
          placeholder='Enter Email'
          name='email'
          value={formData?.email}
          onChange={formHandler}
        />
        <input
          type="text"
          placeholder='Enter Number'
          name='phone'
          value={formData?.phone}
          onChange={formHandler}
        />
        <textarea
          placeholder='Enter Message'
          name='message'
          // cols={50}
          // rows={40}
          value={formData?.message}
          onChange={formHandler}
        />
        <button className='submit-btn'  onClick={submitHandler}> Submit</button>
      </form>
    </div>
    </>
  );
};

export default Form;
