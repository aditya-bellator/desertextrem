import  {  useState } from "react";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import AirportShuttleOutlinedIcon from "@mui/icons-material/AirportShuttleOutlined";
import LocalHotelOutlinedIcon from "@mui/icons-material/LocalHotelOutlined";
import RamenDiningOutlinedIcon from "@mui/icons-material/RamenDiningOutlined";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
////styles
import "./mobileDetail.scss";
import { Rating } from "@mui/material";
import { CustomAccordion } from "./styled";
import { Link, useParams } from "react-router-dom";
import Modal from "../../component/modal/Modal";
import Form from "../../component/form/Form";
import FooterSection from "../../component/footerSec/FooterSection";
import Slides from "../explore/Slides";
import { detailPageJson } from "../../component/json/Json";

const MobileDetailPage = () => {
const handleOpen = () => setOpen(true);

const [isOpen, setIsOpen] = useState(false);

const openModal = () => {

  setIsOpen(true);
};

const closeModal = () => {
  setIsOpen(false);
};
const {id} = useParams()

  const getData = detailPageJson.find((item)=>item.id == id)
  return (
    <>
    <Modal isOpen={isOpen} onClose={closeModal}>
       <Form/>
      </Modal>
       {/* <BasicModal  Children={<EnquiryForm setOpen={setOpen} id={id} width={"100%"}/>}  setOpen={setOpen} open={open}/> */}

      <div className="detail-center-col">
        <div className="mobile-detail-top-banner">
           {/* style={{backgroundImage:`url("")`}}> */}
          <div className="mobile-deatil-banner-head">
            <div className="head-left-col">
              <Link to={"/"}> 
                <div className="head-icon">
                  <KeyboardBackspaceOutlinedIcon />
                </div>
              </Link>
              <button>Buggy Tours</button>
            </div>
            <div className="head-right-col">
             
              <div className="head-icon">
                <ReplyOutlinedIcon />
              </div>
            </div>
          </div>
          <div className="mobile-detail-banner-bottom-col">
            <ul>
              <li>
                <div className="icon">
                  <AccessAlarmsIcon />
                </div>
                <div className="text-b">Duration 6Hr.</div>
              </li>
              <li>
                <div className="icon">
                  <AirportShuttleOutlinedIcon />
                </div>
                <div className="text-b">Transfer Included</div>
              </li>
              <li>
                <div className="icon">
                  <LocalHotelOutlinedIcon />
                </div>
                <div className="text-b">Hotel Pickup</div>
              </li>
              <li>
                <div className="icon">
                  <RamenDiningOutlinedIcon />
                </div>
                <div className="text-b">Meals Included</div>
              </li>
            </ul>
          </div>
        </div>
        <div className="detail-heading">
          <h2>{getData.name}</h2>
        </div>
        <div className="price-rating-section">
        <div className="number-rating">
      

              <p>Very Good</p>
              <p>

              (44 VERIFIED RATINGS)
              </p>
       
            </div>  
          <div className="star-rating">

<Rating
  size="small"
  name="simple-controlled"
  color="green"
  value={5}
  // onChange={(event, newValue) => {
  //   setValue(newValue);
  // }}
/>
</div>
        
      
        </div>
        <div className="price-btn">

        <p>AED {getData?.price}/-</p>
<div className="book-btn">

<button onClick={()=>openModal()} >Book Now</button>
</div>
</div>
        <hr />
        <div className="detail-description">
        Embrace Adventure: Thrilling Buggy <br /> Tours Await
          {/* <span>SHOW MORE</span> */}
        </div>
        <div className="experience-section">
          <h2>Experience</h2>
          <CustomAccordion defaultExpanded>
            <AccordionSummary
              // expandIcon={null}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{
                // filter: "drop-shadow(0px 1px 8px rgba(0,0,0,0.09))",
                backgroundColor: "#ffffff",
                borderRadius: "4px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "14px",
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    background: "green",
                    borderRadius: "100px",
                  }}
                ></span>
                Highlights
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div
                dangerouslySetInnerHTML={{ __html: "Ride a 1000 CC Polaris rzr" }}
              />
            </AccordionDetails>
          </CustomAccordion>
          <CustomAccordion>
            <AccordionSummary
             expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{
                filter: "drop-shadow(0px 1px 8px rgba(0,0,0,0.09))",
                backgroundColor: "#ffffff",
                borderRadius: "4px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "14px",
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    background: "green",
                    borderRadius: "100px",
                  }}
                ></span>
                Inclusions
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div
                dangerouslySetInnerHTML={{ __html: "Tea & Coffee"}}
              />
            </AccordionDetails>
          </CustomAccordion>
          <CustomAccordion>
            <AccordionSummary
           expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{
                filter: "drop-shadow(0px 1px 8px rgba(0,0,0,0.09))",
                backgroundColor: "#ffffff",
                borderRadius: "4px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "14px",
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    background: "green",
                    borderRadius: "100px",
                  }}
                ></span>
                Need To Know
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div
                dangerouslySetInnerHTML={{ __html:"Pick Up From Hotel / Home" }}
              />
            </AccordionDetails>
          </CustomAccordion>
          <CustomAccordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{
                filter: "drop-shadow(0px 1px 8px rgba(0,0,0,0.09))",
                backgroundColor: "#ffffff",
                borderRadius: "4px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "14px",
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    background: "green",
                    borderRadius: "100px",
                  }}
                ></span>
                Cancel Policy
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div
                dangerouslySetInnerHTML={{ __html: "If you cancel your trip before 48 hours, no cancellation amount charge is applicable" }}
              />
            </AccordionDetails>
          </CustomAccordion>
        </div>
      </div>
      <Slides/>
   <FooterSection/>
    </>

  );
};

export default MobileDetailPage;
