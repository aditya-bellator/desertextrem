
import { useState } from "react";

import SimilarPackageCard from "../../component/similarPackageCard/SimilarPackageCard"

///styles
import "./styles.scss";
import DesertExtremeCard from "../../component/desertExtremeCard/DesertExtremeCard";
import { Outlet, useParams } from "react-router-dom";
import BannerSection from "../../component/bannerSection/BannerSection"
import FooterSection from "../../component/footerSec/FooterSection";

// import BasicModal from "../../component/modal/Modal";
// import EnquiryForm from "../../component/enquiryForm/EnquiryForm";


const TourDetailLayout = () => {


 
const checkLoaction = window.location.pathname
const [open, setOpen] = useState(false);
const handleOpen = () => setOpen(true);
const {id} = useParams()
 
  return (
    <>
  <BannerSection/>
     {/* <BasicModal Children={<EnquiryForm setOpen={setOpen} id={id} width={""}/>}  setOpen={setOpen} open={open}/> */}
      <div className="tour-detail-container content-center-col">
        <div className="tour-detail-left-col ">
       <Outlet context={[handleOpen]}/>
       
        </div>
        <div className="tour-detail-right-col">
          <h3>Similar Package</h3>
          <SimilarPackageCard fun={handleOpen}/>
          {/* {checkLoaction != "/listing"
           &&
          <DesertExtremeCard fun={handleOpen}/>
           } */}
           <div className="section-map">
           <div className="map">
            {/* <div className="innerWrap1"> */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14469.581523690338!2d55.7187776!3d24.9526592!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef577160f93faad%3A0xd593a598b2c7b63d!2sDESERT%20XTREME%20ADVENTURES!5e0!3m2!1sen!2sin!4v1719220932118!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            {/* </div> */}
            <div className="address">

            <p><b>Address :</b> Retreat by Sharjah Collection - Madam Rd
Near Al Badayer - Al Badayer
Sharjah - United Arab Emirates</p>
            </div>
          </div>
           </div>
           
        </div>
      </div>
      <FooterSection/>
    </>
  );
};

export default TourDetailLayout;
