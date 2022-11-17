import React from "react";
import Slick, { Settings } from "react-slick";
import { Heart, Mail, Eye } from "react-feather";

const About = () => {
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 2,
    draggable: true,
    slidesToScroll: 1,
  };
  return (
    <section className="about-section slick-between about-color6">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="title-1 color-6">
              <span className="label label-gradient color-6">Agent</span>
              <h2>Meet our Agent</h2>
              <hr />
            </div>
            <Slick
              {...settings}
              className="about-1 about-wrap arrow-white color-6"
            >
              <div>
                <div className="about-content row">
                  <div className="col-xl-6">
                    <div className="about-image">
                      <img
                        src="/images/about/1.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="about-overlay"></div>
                      <div className="overlay-content">
                        <ul>
                          <li>
                            <a href="https://accounts.google.com/">
                              <img src="/images/about/icon-1.png" alt="" />
                            </a>
                          </li>
                          <li>
                            <a href="https://twitter.com/">
                              <img src="/images/about/icon-2.png" alt="" />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.facebook.com/">
                              <img src="/images/about/icon-3.png" alt="" />
                            </a>
                          </li>
                        </ul>
                        <span>Connect</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="our-details">
                      <a href="agent-profile.html">
                        <h6 className="d-flex">
                          Ty R. Leeva{" "}
                          <span className="label-heart color-6 ms-2">
                            <Heart className="tw-inline" />
                          </span>
                        </h6>
                      </a>
                      <h3>Communicating with..</h3>
                      <span className="font-roboto">
                        <Mail className="me-1 tw-inline" />
                        Leeva@inspirythemes.com
                      </span>
                      <p className="font-roboto">
                        A real estate agent or broker is a person who represents
                        sellers or buyers advised to consult a licensed.
                      </p>
                      <a
                        href="agent-profile.html"
                        className="btn btn-gradient btn-pill color-6 mt-2"
                      >
                        <Eye className="tw-inline" />
                        View Portfolio
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="about-content row">
                  <div className="col-xl-6">
                    <div className="about-image">
                      <img
                        src="/images/about/2.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="about-overlay"></div>
                      <div className="overlay-content">
                        <ul>
                          <li>
                            <a href="https://accounts.google.com/">
                              <img src="/images/about/icon-1.png" alt="" />
                            </a>
                          </li>
                          <li>
                            <a href="https://twitter.com/">
                              <img src="/images/about/icon-2.png" alt="" />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.facebook.com/">
                              <img src="/images/about/icon-3.png" alt="" />
                            </a>
                          </li>
                        </ul>
                        <span>Connect</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="our-details">
                      <a href="agent-profile.html">
                        <h6 className="d-flex">
                          Mark Andry{" "}
                          <span className="label-heart color-6 ms-2">
                            <Heart className="tw-inline" />
                          </span>
                        </h6>
                      </a>
                      <h3>Sellers of property.</h3>
                      <span className="font-roboto">
                        <Mail className="me-1" />
                        John@inspirythemes.com
                      </span>
                      <p className="font-roboto">
                        They are responsible for managing employees and
                        overseeing daily productivity.
                      </p>
                      <a
                        href="agent-profile.html"
                        className="btn btn-gradient btn-pill color-6 mt-2"
                      >
                        <Eye className="tw-inline" />
                        View Portfolio
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="about-content row">
                  <div className="col-xl-6">
                    <div className="about-image">
                      <img
                        src="/images/about/1.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="about-overlay"></div>
                      <div className="overlay-content">
                        <ul>
                          <li>
                            <a href="https://accounts.google.com/">
                              <img src="/images/about/icon-1.png" alt="" />
                            </a>
                          </li>
                          <li>
                            <a href="https://twitter.com/">
                              <img src="/images/about/icon-2.png" alt="" />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.facebook.com/">
                              <img src="/images/about/icon-3.png" alt="" />
                            </a>
                          </li>
                        </ul>
                        <span>Connect</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="our-details">
                      <a href="agent-profile.html">
                        <h6 className="d-flex">
                          John David{" "}
                          <span className="label-heart color-6 ms-2">
                            <Heart className="tw-inline" />
                          </span>
                        </h6>
                      </a>
                      <h3>Advised to consult </h3>
                      <span className="font-roboto">
                        <Mail className="me-1 tw-inline" />
                        John@inspirythemes.com
                      </span>
                      <p className="font-roboto">
                        Buyer's agents are brokers or salespersons who assist
                        buyers by helping them.
                      </p>
                      <a
                        href="agent-profile.html"
                        className="btn btn-gradient btn-pill color-6 mt-2"
                      >
                        <Eye className="tw-inline" />
                        View Portfolio
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Slick>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
