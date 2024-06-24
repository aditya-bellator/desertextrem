import React from "react";
import "./enquiry.scss";
import { desertEx } from "../../assets";

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

  return (
    <div className="enquiry-main">
      <img src={desertEx} alt="" />
      <div className="enquiry-form-container">
        <div className="form-center-col">
          <h1>Enquiry Form</h1>
          <p>
            Fill in the details below and our advisory will
            <br />
            get in touch with you in the next 24 hours
          </p>
          <form onSubmit={sendToEmail}>
            <div className="form-col">
              <div className="input-col">
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName" required />
              </div>
              <div className="input-col">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName" required />
              </div>
            </div>
            <div className="form-col">
              <div className="input-col">
                <label htmlFor="email">Email Address</label>
                <input type="email" name="email" required />
              </div>
              <div className="input-col">
                <label htmlFor="phone_number">Phone Number</label>
                <input type="tel" name="phone_number" placeholder="+91" required />
              </div>
            </div>
            <div className="form-col">
              <div className="input-col">
                <label htmlFor="message">Message</label>
                <textarea name="message" required />
              </div>
            </div>
            <button type="submit">Submit Query</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Enquiry;
