import React from "react";
import Slider, { Settings } from "react-slick";

const NewOffer = () => {
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 2,
    draggable: true,
    slidesToScroll: 1,
  };
  return (
    <section className="offer-section banner-section banner-4 slick-between ">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="title-1 text-white">
              <span className="label label-gradient color-6">New Offer</span>
              <h2>Our New Offer</h2>
              <hr />
            </div>
            <Slider {...settings} className="offer-slider">
              <div>
                <div className="offer-wrapper">
                  <div className="media">
                    <div className="offer-icon">
                      <img src="/images/others/icon-1.png" alt="" />
                    </div>
                    <div className="media-body">
                      <h6>Sheltos</h6>
                      <h3>Looking for the new home?</h3>
                      <p>
                        10 new offers every day. 350 offers on site, trusted by
                        a community of thousands of users.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="offer-wrapper">
                  <div className="media">
                    <div className="offer-icon">
                      <img src="/images/others/icon-2.png" alt="" />
                    </div>
                    <div className="media-body">
                      <h6>Sheltos</h6>
                      <h3>Are you looking for home?</h3>
                      <p>
                        350 offers on site, trusted by a community of thousands
                        of users. 10 new offers every day.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="offer-wrapper">
                  <div className="media">
                    <div className="offer-icon">
                      <img src="/images/others/icon-1.png" alt="" />
                    </div>
                    <div className="media-body">
                      <h6>Sheltos</h6>
                      <h3>Looking for the new Office?</h3>
                      <p>
                        10 new offers every day. 350 offers on site, trusted by
                        a community of thousands of users.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewOffer;
