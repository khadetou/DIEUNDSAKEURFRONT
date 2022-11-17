import React from "react";

const Banner = () => {
  return (
    <section className="banner-section banner-4 parallax-image">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="title-1 color-6">
              <span className="label label-gradient color-6">Buy or sell</span>
            </div>
            <div className="light-bg banner-1">
              <span className="big-gradient">*</span>
              <span className="small-white">*</span>
              <h6>Sheltos real estate</h6>
              <h2>
                Looking to Buy a new property or Sell an existing one? Real
                Homes provides an easy solution!
              </h2>
              <div className="button-banner">
                <a
                  href="submit-property.html"
                  className="btn btn-gradient color-6"
                >
                  Submit property
                </a>
                <a
                  href="portfolio-details.html"
                  className="btn btn-white color-6"
                >
                  {" "}
                  <span>Browse property</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
