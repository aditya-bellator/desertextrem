import React from "react";
import "./style.scss";

import { FaStar } from "react-icons/fa";
import { user } from "../../assets";

const Greatcard = () => {
  return (
    <div className="card">
      <div className="star">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <span>4.5/5</span>
      </div>
      <div className="content">
        <h1>Well Organized Trip</h1>
        <p>
          We are back to India and have to admit, our Big Australian Holiday was
          amazing!! I would like to personally thank Mr.Jalaj for selecting the
          right places for us and Swati for organizing everything bef
        </p>
      </div>
      <div className="user">
        <div className="user-img">
          <img src={user} alt="client" />
        </div>
        <div className="user-name">
          <h4>John William</h4>
          <p>Software Developer</p>
        </div>
      </div>
    </div>
  );
};

export default Greatcard;
