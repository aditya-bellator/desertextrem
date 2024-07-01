import { useState } from 'react';
import "./style.scss";
import axios from 'axios';
import { toast } from 'react-toastify';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    senderEmail: 'ad@example.com', // Add senderEmail to the initial state
  });

  const formHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://tripatours.com/api/enquiry/desertExtremeEnquiry", formData);
      if (response.status === 200) {
        toast.success('Form submitted successfully');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          senderEmail: 'ad@example.com', // Reset senderEmail to the initial value
        });
      } else {
        toast.error('An error occurred');
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <div className='enquire-form'>
      <h3>Enquire Now</h3>
      <form className='form' onSubmit={submitHandler}>
        <input
          type="text"
          placeholder='Enter Name'
          name='name'
          value={formData.name}
          onChange={formHandler}
        />
        <input
          type="email"
          placeholder='Enter Email'
          name='email'
          value={formData.email}
          onChange={formHandler}
        />
        <input
          type="text"
          placeholder='Enter Number'
          name='phone'
          value={formData.phone}
          onChange={formHandler}
        />
        <textarea
          placeholder='Enter Message'
          name='message'
          value={formData.message}
          onChange={formHandler}
        />
        <button className='submit-btn' type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
