import React from "react";
import { ChevronRight } from "react-feather";

const PropertyCard = () => {
  return (
    <div className="large-6 col-lg-12 col-md-6">
      <div className="card all-properties">
        <div className="card-body">
          <div className="media">
            <img src="/images/svg/icon/1.svg" className="img-fluid" alt="" />
            <div className="media-body">
              <h4 className="mb-0">45</h4>
              <h6 className="light-font">Properties</h6>
            </div>
            <a
              href="listing.html"
              className="arrow-animated admin tw-flex tw-items-center"
            >
              See all properties
              <ChevronRight />
            </a>
          </div>
          <ul className="light-box">
            <li>
              <img
                src="/images/svg/icon/sold.png"
                className="img-fluid"
                alt=""
              />
              <div>
                <h5>1500</h5>
                <span className="light-font">Sale</span>
              </div>
            </li>
            <li>
              <img
                src="/images/svg/icon/rent.png"
                className="img-fluid"
                alt=""
              />
              <div>
                <h5>380</h5>
                <span className="light-font">Rented</span>
              </div>
            </li>
            <li>
              <img
                src="/images/svg/icon/unlisted.png"
                className="img-fluid"
                alt=""
              />
              <div>
                <h5>240</h5>
                <span className="light-font">Unlisted</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
