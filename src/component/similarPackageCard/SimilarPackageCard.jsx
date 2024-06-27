import React, { useEffect, useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
///styles
import "./styles.scss";
import Modal from "../modal/Modal";
import Form from "../form/Form";
// import {favorite}from "../../assets"

const SimilarPackageCard = ({fun}) => {

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    console.log("first")
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
         
         <Modal isOpen={isOpen} onClose={closeModal}>
       <Form/>
      </Modal>
    <div className="similar-package-card-col">
      <div className="similar-card-img">
      <div className="heart-icon" ><FavoriteBorderOutlinedIcon/></div>
      {/* <img src={favorite} alt="new" /> */}
      </div>
      <div className="similar-card-content">
        <h4>Ultimate Adventure Dessert Safari</h4>
        {/* <p>(4 Persons)</p> */}
        <hr />
        <div className="price">
          <h4 className="aed">AED 199.00</h4> <p className="per-night">(Per Person)</p>
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
