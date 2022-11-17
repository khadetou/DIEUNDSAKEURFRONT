import React from "react";

const Details = () => {
  return (
    <div className="desc-box">
      <div className="page-section" id="details">
        <h4 className="content-title">
          Property Details
          <a
            href="https://www.google.com/maps/place/New+York,+NY,+USA/@40.697488,-73.979681,8z/data=!4m5!3m4!1s0x89c24fa5d33f083b:0xc80b8f06e177fe62!8m2!3d40.7127753!4d-74.0059728?hl=en"
            target="_blank"
          >
            <i className="fa fa-map-marker-alt"></i> view on map
          </a>
        </h4>
        <div className="row">
          <div className="col-md-6 col-xl-4">
            <ul className="property-list-details">
              <li>
                <span>Property Type :</span> House
              </li>
              <li>
                <span>Property ID :</span> ZOEA245
              </li>
              <li>
                <span>Property status :</span> For sale
              </li>
              <li>
                <span>Operating Since :</span> 2008
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-xl-4">
            <ul className="property-list-details">
              <li>
                <span>Price :</span> $ 1,50,000
              </li>
              <li>
                <span>Property Size :</span> 1730 sq / ft
              </li>
              <li>
                <span>Balcony :</span> 2
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-xl-4">
            <ul className="property-list-details">
              <li>
                <span>City :</span> Newyork
              </li>
              <li>
                <span>Bedrooms :</span> 8
              </li>
              <li>
                <span>Bathrooms :</span> 4
              </li>
            </ul>
          </div>
        </div>
        <h4 className="content-title mt-4">Attachments</h4>
        <a href="javascript:void(0)" className="attach-file">
          <i className="far fa-file-pdf"></i>Demo Property Document{" "}
        </a>
      </div>
    </div>
  );
};

export default Details;
