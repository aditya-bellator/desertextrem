import React from "react";
////styles
import "./styles.scss";
const DetailCard = ({ name, list }) => {
  return (
    <div className="detail-card">
      <h2>{name}</h2>
      <ul>
    
               {/* <div dangerouslySetInnerHTML={{ __html: list }} /> */}
         {list}
         
      </ul>

    </div>
  );
};

export default DetailCard;









