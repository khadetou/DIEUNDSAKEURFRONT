import React from "react";
import Slick, { Settings } from "react-slick";

const Testimonial = () => {
  const settings: Settings = {
    dots: false,
    infinite: true,
    fade: true,
    speed: 500,
    arrows: true,
    slidesToShow: 2,
    draggable: true,
    slidesToScroll: 1,
  };
  return (
    <section className="testimonial-bg testimonial-layout6">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="title-1 text-white">
              <span className="label label-gradient color-6">Our</span>
              <h2>Happy clients</h2>
              <hr />
            </div>
            <Slick {...settings} className="testimonial-2 arrow-light">
              <div>
                <div className="client-slider light-bg">
                  <ul className="user-list">
                    <li>
                      <img src="/images/testimonial/2.png" alt="" />
                    </li>
                    <li>
                      <img src="/images/testimonial/1.png" alt="" />
                      <div className="heart-bg"></div>
                      <img
                        src="/images/testimonial/heart.png"
                        alt=""
                        className="heart-icon"
                      />
                    </li>
                    <li>
                      <img src="/images/testimonial/3.png" alt="" />
                    </li>
                  </ul>
                  <p>
                    Surveyors make precise measurements of property boundaries.
                    Many industries, including construction, rely on these
                    measurements
                  </p>
                  <h6>real estate</h6>
                  <ul className="client-rating">
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                  </ul>
                  <span className="label label-white label-lg">
                    <span className="gradient-1 color-6">Mark Andry</span>
                  </span>
                </div>
              </div>
              <div>
                <div className="client-slider light-bg">
                  <ul className="user-list">
                    <li>
                      <img src="/images/testimonial/1.png" alt="" />
                    </li>
                    <li>
                      <img src="/images/testimonial/2.png" alt="" />
                      <div className="heart-bg"></div>
                      <img
                        src="/images/testimonial/heart.png"
                        alt=""
                        className="heart-icon"
                      />
                    </li>
                    <li>
                      <img src="/images/testimonial/3.png" alt="" />
                    </li>
                  </ul>
                  <p>
                    Residences can be classified by and connected to residences.
                    Different types of housing can be use same physical type.
                  </p>
                  <h6>real estate</h6>
                  <ul className="client-rating">
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                  </ul>
                  <span className="label label-white label-lg">
                    <span className="gradient-1 color-6">John David</span>
                  </span>
                </div>
              </div>
            </Slick>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
