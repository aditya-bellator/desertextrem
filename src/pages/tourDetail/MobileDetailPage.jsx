import  {  useEffect, useState } from "react";
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
import Navbar from "../../component/navbar/Navbar";

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

  const getData = detailPageJson?.find((item)=>item?.id == id)
  const [showFull, setShowFull] = useState(false);

  const toggleShowFull = () => {
    setShowFull(!showFull);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  return (
    <>
    <Modal isOpen={isOpen} onClose={closeModal}>
       <Form/>
      </Modal>
      <div className="navbar-layout">
    <Navbar />
  </div>
       {/* <BasicModal  Children={<EnquiryForm setOpen={setOpen} id={id} width={"100%"}/>}  setOpen={setOpen} open={open}/> */}

      <div className="detail-center-col">
        <div className="mobile-detail-top-banner" style={{backgroundImage:`url(${ getData?.slide?.length && getData?.slide[0]})`}}>
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
          <h2>{getData?.name}</h2>
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

        <p>AED {getData?.maxPrice}/-</p>
<div className="book-btn">

<button onClick={()=>openModal()} >Book Now</button>
</div>
</div>
        <hr />
        <div className="detail-description">
        Embrace Adventure: Thrilling Buggy <br /> Tours Await
          {/* <span>SHOW MORE</span> */}
        </div>
        <div className="experience-section m-collapse">
          <h2>Experience</h2>
          <CustomAccordion >
            <AccordionSummary
              // expandIcon={null}
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
                  fontSize: "16px",
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
                Description
              </div>
            </AccordionSummary>
            <AccordionDetails>
            <p>{showFull ? getData?.description : `${getData?.description.slice(0, 100)}...`} <span onClick={toggleShowFull} style={{color:"#df723c"}}>  {showFull ? 'Show less' : 'Show more'}</span> </p>
     
            
            </AccordionDetails>
          </CustomAccordion>
          <CustomAccordion defaultExpanded>
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
                  fontSize: "16px",
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
                dangerouslySetInnerHTML={{ __html: getData?.inclusion}}
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
                  fontSize: "16px",
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
                dangerouslySetInnerHTML={{ __html:getData?.Needtoknow }}
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
                  fontSize: "16px",
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
                dangerouslySetInnerHTML={{ __html: getData?.cancellationPollicy }}
              />
            </AccordionDetails>
          </CustomAccordion>
        </div>
      </div>
      <Slides gallery={true}/>
   <FooterSection/>
    </>

  );
};

export default MobileDetailPage;
