import React from "react";
import Slick, { Settings } from "react-slick";
import { Heart } from "react-feather";

const FeatureSection = () => {
  const settings: Settings = {
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
  };
  return (
    <section className="feature-section banner-4">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="title-1 text-white">
              <span className="label label-gradient color-6">Our</span>
              <h2>Featured Property</h2>
              <hr />
            </div>
            <div className="feature-1 arrow-light">
              <Slick {...settings}>
                <div>
                  <div className="feature-wrapper">
                    <div className="row">
                      <div className="col-xl-4 col-lg-3">
                        <div className="feature-left">
                          <div className="property-details">
                            <span className="font-roboto">New York</span>
                            <a href="single-property-8.html">
                              <h3 className="d-flex">
                                Merrick in Spring Way{" "}
                                <span>
                                  <span className="label label-dark label-pill">
                                    Open house
                                  </span>
                                </span>
                              </h3>
                            </a>
                            <h6 className="color-6">$9554.00*</h6>
                            <p className="font-roboto">
                              Different types of housing can be use same
                              physical type.connected residences might be owned
                              by a single entity or owned separately with an
                              agreement covering the relationship between units
                              and common areas and concerns.
                            </p>
                            <ul>
                              <li>
                                <img
                                  src="https://themes.pixelstrap.com/sheltos/assets/images/svg/icon/double-bed.svg"
                                  className="img-fluid"
                                  alt=""
                                />
                                Bed : 5
                              </li>
                              <li>
                                <img
                                  src="https://themes.pixelstrap.com/sheltos/assets/images/svg/icon/bathroom.svg"
                                  className="img-fluid"
                                  alt=""
                                />
                                Baths : 3
                              </li>
                              <li>
                                <img
                                  src="https://themes.pixelstrap.com/sheltos/assets/images/svg/icon/square-ruler-tool.svg"
                                  className="img-fluid ruler-tool"
                                  alt=""
                                />
                                Sq Ft : 5000
                              </li>
                            </ul>
                            <a href="user-favourites.html">
                              <span className="round-half color-6">
                                <Heart />
                              </span>
                            </a>
                            <div className="property-btn">
                              <a
                                href="single-property-8.html"
                                className="btn btn-dashed btn-pill color-6"
                                tabIndex={0}
                              >
                                Details
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-8 col-lg-9 order-md">
                        <div className="feature-image bg-size tw-bg-cover tw-bg-[center_center] tw-bg-no-repeat tw-bg-[url(/images/property/3.jpg)]">
                          {/* <img
                            src="/images/property/3.jpg"
                            alt=""
                            className="bg-img"
                          /> */}
                          <h4>FAMILY HOME</h4>
                          <span className="box-color"></span>
                          <span className="signature">
                            <img src="/images/signature/1.png" alt="" />
                          </span>
                          <span className="label label-white label-lg color-6">
                            Featured
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="feature-wrapper">
                    <div className="row">
                      <div className="col-xl-4 col-lg-3">
                        <div className="feature-left ">
                          <div className="property-details">
                            <span className="font-roboto">New York</span>
                            <a href="single-property-8.html">
                              <h3 className="d-flex">
                                Allen's Across Way{" "}
                                <span>
                                  <span className="label label-dark label-pill">
                                    Open house
                                  </span>
                                </span>
                              </h3>
                            </a>
                            <h6 className="color-6">$6844.00*</h6>
                            <p className="font-roboto">
                              Connected residences might be owned by a single
                              entity or owned separately with an agreement
                              covering the relationship between units and common
                              areas and concerns. Different types of housing can
                              be use same physical type.
                            </p>
                            <ul>
                              <li>
                                <img
                                  src="https://themes.pixelstrap.com/sheltos/assets/images/svg/icon/double-bed.svg"
                                  className="img-fluid"
                                  alt=""
                                />
                                Bed : 3
                              </li>
                              <li>
                                <img
                                  src="https://themes.pixelstrap.com/sheltos/assets/images/svg/icon/bathroom.svg"
                                  className="img-fluid"
                                  alt=""
                                />
                                Baths : 2
                              </li>
                              <li>
                                <img
                                  src="https://themes.pixelstrap.com/sheltos/assets/images/svg/icon/square-ruler-tool.svg"
                                  className="img-fluid ruler-tool"
                                  alt=""
                                />
                                Sq Ft : 1000
                              </li>
                            </ul>
                            <a href="user-favourites.html">
                              <span className="round-half color-6">
                                <Heart />
                              </span>
                            </a>
                            <div className="property-btn">
                              <a
                                href="single-property-8.html"
                                className="btn btn-dashed btn-pill color-6"
                                tabIndex={0}
                              >
                                Details
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-8 col-lg-9 order-md">
                        <div className="feature-image bg-size tw-bg-cover tw-bg-no-repeat tw-bg-[url(/images/property/2.jpg)]">
                          {/* <img
                            src="/images/property/2.jpg"
                            alt=""
                            className="bg-img"
                          /> */}
                          <h4>FAMILY HOME</h4>
                          <span className="box-color"></span>
                          <span className="signature">
                            <img src="/images/signature/1.png" alt="" />
                          </span>
                          <span className="label label-white label-lg color-6">
                            Featured
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Slick>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
