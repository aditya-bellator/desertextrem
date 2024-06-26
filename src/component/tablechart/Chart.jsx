import React from 'react';
import './style.scss'

const Chart = () => {
  return (
    <div className="col-xs-12 col-md-5">
      <div className="maintainancecpm">
        <div className="safari-section">
          <div className="safari-header">Quad Bike Safari (100 CC Bike)</div>
          <div className="safari-row">
            <div className="safari-label"><strong>Tour Duration :</strong></div>
            <div className="safari-value">30 MINUTES</div>
          </div>
          <div className="safari-row">
            <div className="safari-label"><strong>Tour Service :</strong></div>
            <div className="safari-value">Quad bike Safari (100 CC Bike) - *Inclusive of VAT</div>
          </div>
          <div className="safari-row">
            <div className="safari-label"><strong>Pick Time :</strong></div>
            <div className="safari-value">05:00 PM</div>
          </div>
          <div className="safari-row">
            <div className="safari-label"><strong>Drop off Time :</strong></div>
            <div className="safari-value">06:00 PM</div>
          </div>
          <div className="safari-row">
            <div className="safari-label"><strong>Per Child :</strong> (4 to 10)</div>
            <div className="safari-value"><strong>100 AED</strong></div>
          </div>
          <div className="safari-row">
            <div className="safari-label"><strong>Per Adult :</strong></div>
            <div className="safari-value"><strong>120 AED</strong></div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Chart;
