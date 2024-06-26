import React, { useEffect, useState } from "react";

import AccessTimeIcon from "@mui/icons-material/AccessTime";

import FavSliderComponent from "../../component/slider/FavSlider";
import DetailTabs from "../../component/detailTabs/DetailTabs";
import DetailCard from "../../component/detailsPageCard/DetailCard";
import {favorite}from "../../assets"

const TourDetail = () => {
  const names = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder",
  ];
  // const {data:houseRule} = useHouseRuleQuery(id)
  // const houseRuleData = houseRule && houseRule?.data[0]

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="heading">
        <div className="heading-left-col">
          <h1>Dessert Safari: Quad Bike</h1>
          <ul>
            {[1, 2, 3]?.map((item) => {
              return (
                <li key={item}>
                  <p>
                    <AccessTimeIcon />
                  </p>
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="heading-right-col">
          {/* <FormControl sx={{ width: "100%" }}>
                <BorderlessSelect
                  multiple
                  displayEmpty
                  value={personName}
                  onChange={handleChange}
                  input={<OutlinedInput />}
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return <>Sort By: Popularity</>;
                    }

                    return selected.join(", ");
                  }}
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem disabled value="">
                    <>Sort By: Popularity</>
                  </MenuItem>
                  {names.map((name) => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </BorderlessSelect>
              </FormControl> */}
        </div>
      </div>
      <DetailTabs />
      <div className="short-description">
        Get set to explore the Dubai desert in its finest hour and warm weather.
        It's the perfect time of the day when the dessert comes to life, and
        gaze under the stars for an unforgettable evening that aims at making
        your evening filled with serene lights and away from the hustle and
        bustle of the city. So sit back and relax as we take you on a long
        journey to the stars.
      </div>
      <div id="highlights">
        <div className="highlights-section">
          <DetailCard name={"Highlights"} list={<ul> <li> You’ll get to have a thrilling experience</li>
          <li>Ride a 1000 CC Polaris rzr .</li>
          <li>Feel the desert winds when you go up and down the red dunes</li>
          <li>Well- maintained SUV’s</li>
          <li>Well-thought itinerary</li>
          <li>Cordial staff attitude</li></ul>}/>
          <DetailCard name={"Inclusions"} list={<ul> 
  <li>BBQ & Buffet Dinner (Veg & non-veg Both Available)</li>
  <li>Tea & Coffee</li>
  <li>Unlimited Soft drinks & Water</li>
  <li>Live Arabic Tanoura Dance Show</li> 
  <li>Pick Up From Hotel / Home</li>
  <li>Pickup and Drop off by 4×4 Vehicle</li>
   <li>Pickup Time: 03:00 To 3:30</li>
   <li>Safari Guide (Speaking Guide)</li> 
  <li>Drop Off Time: 21:30 To 22:00
</li></ul>}/>
          <DetailCard name={"Need To Know"} list={<ul>
            <li>if 6 persons from 1 family or friends than we will upgrade to private tour private car</li>
          </ul>}/>
          <DetailCard name={"Cancellation Policy"}list={<ul>
  <li>If you cancel your trip before 48 hours, no cancellation amount charge is applicable</li>
  <li>In case you cancel within 24-48 hours of your travel date then 50 % of the cancellation charge is applicable</li>
  <li>If you cancel the trip 24 hours before the tour date, you’ll have to pay 100% cancellation charges as mentioned on the website.</li>
  <li>Please note the refund will be made within 7 working days after your cancellation date and the amount will depend on the previously mentioned cancellation policy</li> 

</ul>}/>
        </div>
      </div>
      <div className="guest-review">
        <div className="guest-review-left-col">Guest Reviews</div>
        <div className="guest-review-right-col">
          <ul>
            <li>8.1</li>
            <li>Very Good</li>
            <li>10,926 reviews</li>
            <li>Read all reviews</li>
          </ul>
        </div>
      </div>
      {/* <div className="house-rules">
            <div className="heading-house-rule">

              <h4>House Rules </h4>
              <p>{houseRuleData?.description}</p>
            </div>
            <div className="house-rule-content">
            

             <HouseRuleContent houseRuleData={houseRuleData}/>
          
             

            </div>

          
          </div> */}
      <div className="slider-section">
        <div className="slider-heading">
          Travellers' favorite choice
          <p className="para" style={{color:"black"}}>
            From Desert Sands to Celestial Canopies: Dubai Safari Expeditions
          </p>
        </div>
        <div className="slider-col2 slider-col">
          <div className="slider-container">
            <FavSliderComponent />
          </div>
          <div className="slider-bg"></div>
        </div>
      </div>
    </>
  );
};

export default TourDetail;
