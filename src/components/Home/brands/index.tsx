import React from "react";
import Slick, { Settings } from "react-slick";

const Brands = () => {
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    slidesToShow: 5,
    draggable: true,
    slidesToScroll: 1,
  };
  return (
    <section className="small-section">
      <div className="container">
        <div className="row">
          <div className="col">
            <Slick {...settings} className="slide-1 brand-slider">
              <div>
                <a className="logo-box">
                  <img
                    src="/images/brand/17.png"
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </div>
              <div>
                <a className="logo-box">
                  <img
                    src="/images/brand/18.png"
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </div>
              <div>
                <a className="logo-box">
                  <img
                    src="/images/brand/19.png"
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </div>
              <div>
                <a className="logo-box">
                  <img
                    src="/images/brand/20.png"
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </div>
              <div>
                <a className="logo-box">
                  <img
                    src="/images/brand/21.png"
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </div>
              <div>
                <a className="logo-box">
                  <img
                    src="/images/brand/18.png"
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </div>
            </Slick>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
