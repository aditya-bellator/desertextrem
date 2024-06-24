import "./enquiry.scss";
import { desertEx } from "../../assets";

const Enquiry = () => {
  return (
    <div className="enquiry-main" id="enquire-now">
      <img src={desertEx} alt="" />

      <div className="enquiry-form-container">
        <div className="form-center-col">
      <h1>enquiry Form</h1>
          <p>
            Fill in the details below and out advisory will
            <br />
            get in touch with you in the next 24 hours
          </p>
          <form>
            <div className="form-col">
              <div className="input-col">
                <label htmlFor="">First Name</label>
                <input type="text" name="firstName" placeholder="First Name" />
              </div>
              <div className="input-col">
                <label htmlFor="">Last Name</label>
                <input type="text" name="lastName" placeholder="Last Name" />
              </div>
             
            </div>
            <div className="form-col">
              <div className="input-col">
                <label htmlFor="">Email Adress</label>
                <input type="text" name="email" placeholder="Email"/>
              </div>
              <div className="input-col">
                <label htmlFor="">Phone Number</label>
                <input type="text" placeholder="+91" name="phone_number" />
              </div>
            </div>

            <div className="form-col">
              <div className="input-col">
                <label htmlFor="">Message</label>
                <textarea name="message" placeholder="Message" />
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
