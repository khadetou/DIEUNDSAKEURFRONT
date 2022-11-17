import React from "react";

const Feature = () => {
  return (
    <div className="desc-box">
      <div className="page-section feature-dec" id="feature">
        <h4 className="content-title">features</h4>
        <div className="single-feature row">
          <div className="col-xxl-3 col-xl-4 col-6">
            <ul>
              <li>
                <i className="fas fa-wifi"></i> Free Wi-Fi
              </li>
              <li>
                <i className="fas fa-hands"></i> Elevator Lift
              </li>
              <li>
                <i className="fas fa-power-off"></i> Power Backup
              </li>
              <li>
                <i className="fas fa-monument"></i> Laundry Service
              </li>
            </ul>
          </div>
          <div className="col-xxl-3 col-xl-4 col-6">
            <ul>
              <li>
                <i className="fas fa-user-shield"></i> Security Guard
              </li>
              <li>
                <i className="fas fa-video"></i> CCTV
              </li>
              <li>
                <i className="fas fa-door-open"></i> Emergency Exit
              </li>
              <li>
                <i className="fas fa-first-aid"></i> Doctor On Call
              </li>
            </ul>
          </div>
          <div className="col-xxl-3 col-xl-4 col-6">
            <ul>
              <li>
                <i className="fas fa-shower"></i> Shower
              </li>
              <li>
                <i className="fas fa-car"></i> free Parking in the area
              </li>
              <li>
                <i className="fas fa-fan"></i> Air Conditioning
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
