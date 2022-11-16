import Image from "next/image";
import { useState } from "react";
import Signature from "/public/images/signature/2.png";
import Slider, { Settings } from "react-slick";
import InputRange from "react-input-range";

const HeroSection = () => {
  const settings: Settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [value, setValue] = useState({ min: 75, max: 300 });
  const [value1, setValue1] = useState({ min: 75, max: 300 });

  return (
    <section className="home-section layout-1 layout-6">
      <div className="home-main">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="container">
                <div className="home-left">
                  <div>
                    <div className="home-slider-1 arrow-light slick-shadow">
                      <Slider {...settings}>
                        <div>
                          <div className="home-content">
                            <div>
                              <Image
                                src={Signature}
                                className="img-fluid m-0"
                                alt=""
                              />
                              <h6 className="!tw-mt-6">
                                Envie d’acheter ou de louer un logement ?
                              </h6>
                              <h1 className="!tw-text-[calc(26px+(55_-_26)*((100vw-320px)/(1920_-_320)))] !tw-font-bold !tw-tracking-[0.03em] !tw-leading-[1.3] !tw-capitalize !tw-my-[0.67em]">
                                Les propriétés de la réalité résolvent vos
                                problèmes
                              </h1>
                              <a
                                href="submit-property.html"
                                className="btn btn-gradient color-6"
                              >
                                submit property
                              </a>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="home-content">
                            <div>
                              <Image
                                src={Signature}
                                className="img-fluid m-0"
                                alt=""
                              />
                              <h6 className="!tw-mt-6">
                                Want to buy or sell Land ?
                              </h6>
                              <h1 className="!tw-text-[calc(26px+(55_-_26)*((100vw-320px)/(1920_-_320)))] !tw-font-bold !tw-tracking-[0.03em] !tw-leading-[1.3] !tw-capitalize !tw-my-[0.67em]">
                                Elegant retreat in quiet Coral Gables
                              </h1>
                              <a
                                href="submit-property.html"
                                className="btn btn-gradient color-6"
                              >
                                submit property
                              </a>
                            </div>
                          </div>
                        </div>
                      </Slider>
                    </div>
                    <div className="looking-icons">
                      <h5 className="!tw-font-medium !tw-mb-[30px]">
                        What are you looking for?
                      </h5>
                      <ul>
                        <li>
                          <a href="grid-2.html" className="looking-icon">
                            <svg className="property-svg">
                              <use xlinkHref="/images/svg/icons.svg#home-lock"></use>
                            </svg>
                            <h6>House</h6>
                          </a>
                        </li>
                        <li>
                          <a href="user-create.html" className="looking-icon">
                            <svg className="property-svg">
                              <use xlinkHref="/images/svg/icons.svg#home-heart"></use>
                            </svg>
                            <h6>Booking</h6>
                          </a>
                        </li>
                        <li>
                          <a href="user-listing.html" className="looking-icon">
                            <svg className="property-svg">
                              <use xlinkHref="/images/svg/icons.svg#key"></use>
                            </svg>
                            <h6>Garage</h6>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="home-search-6">
                <div className="vertical-search">
                  <div className="left-sidebar">
                    <div className="row gx-3">
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label>Property Status</label>
                          <div className="dropdown">
                            <span
                              className="dropdown-toggle font-rubik"
                              data-bs-toggle="dropdown"
                            >
                              <span>Property Status</span>{" "}
                              <i className="fas fa-angle-down"></i>
                            </span>
                            <div className="dropdown-menu text-start">
                              <a className="dropdown-item">Property Status</a>
                              <a className="dropdown-item">For Rent</a>
                              <a className="dropdown-item">For Sale</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label>Property Type</label>
                          <div className="dropdown">
                            <span
                              className="dropdown-toggle font-rubik"
                              data-bs-toggle="dropdown"
                            >
                              <span>Property Type</span>{" "}
                              <i className="fas fa-angle-down"></i>
                            </span>
                            <div className="dropdown-menu text-start">
                              <a className="dropdown-item">Property Type</a>
                              <a className="dropdown-item">Apartment</a>
                              <a className="dropdown-item">Family House</a>
                              <a className="dropdown-item">Cottage</a>
                              <a className="dropdown-item">Condominium</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>Rooms</label>
                          <div className="dropdown">
                            <span
                              className="dropdown-toggle font-rubik"
                              data-bs-toggle="dropdown"
                            >
                              <span>Max Rooms</span>{" "}
                              <i className="fas fa-angle-down"></i>
                            </span>
                            <div className="dropdown-menu text-start">
                              <a className="dropdown-item">Max Rooms</a>
                              <a className="dropdown-item">1</a>
                              <a className="dropdown-item">2</a>
                              <a className="dropdown-item">3</a>
                              <a className="dropdown-item">4</a>
                              <a className="dropdown-item">5</a>
                              <a className="dropdown-item">6</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-group">
                          <label>Bed</label>
                          <div className="dropdown">
                            <span
                              className="dropdown-toggle font-rubik"
                              data-bs-toggle="dropdown"
                            >
                              <span>Bed</span>{" "}
                              <i className="fas fa-angle-down"></i>
                            </span>
                            <div className="dropdown-menu text-start">
                              <a className="dropdown-item">Bed</a>
                              <a className="dropdown-item">1</a>
                              <a className="dropdown-item">2</a>
                              <a className="dropdown-item">3</a>
                              <a className="dropdown-item">4</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-group">
                          <label>Bath</label>
                          <div className="dropdown">
                            <span
                              className="dropdown-toggle font-rubik"
                              data-bs-toggle="dropdown"
                            >
                              <span>Bath</span>{" "}
                              <i className="fas fa-angle-down"></i>
                            </span>
                            <div className="dropdown-menu text-start">
                              <a className="dropdown-item">Bath</a>
                              <a className="dropdown-item">1</a>
                              <a className="dropdown-item">2</a>
                              <a className="dropdown-item">3</a>
                              <a className="dropdown-item">4</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>Agencies</label>
                          <div className="dropdown">
                            <span
                              className="dropdown-toggle font-rubik"
                              data-bs-toggle="dropdown"
                            >
                              <span>Agencies</span>{" "}
                              <i className="fas fa-angle-down"></i>
                            </span>
                            <div className="dropdown-menu text-start">
                              <a className="dropdown-item">Agencies</a>
                              <a className="dropdown-item">Lincoln</a>
                              <a className="dropdown-item">Blue Sky</a>
                              <a className="dropdown-item">Zephyr</a>
                              <a className="dropdown-item">Premiere</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-sm-6">
                        <div className="form-group">
                          <div className="price-range">
                            <label htmlFor="amount">Price : </label>
                            <span className="tw-bg-transparent tw-text-white tw-max-w-[95px] tw-py-[1px] tw-px-[2px] tw-ml-1 tw-font-sans">{`$${value.min} - $${value.max}`}</span>
                            <InputRange
                              minValue={0}
                              maxValue={500}
                              value={value}
                              onChange={(value: any) => setValue(value)}
                              classNames={{
                                valueLabel: "1 tw-hidden",
                                activeTrack:
                                  "2 tw-bg-[#d70000] tw-left-0 tw-mt-[-0.15rem] tw-absolute tw-right-0 tw-top-[50%] tw-rounded-[0.3rem] tw-cursor-pointer tw-block tw-h-[0.3rem] tw-tras tw-transition-[left,_width] tw-duration-300 tw-ease-out",
                                disabledInputRange: "3",
                                inputRange: "4 tw-h-4 tw-relative tw-w-full",
                                labelContainer: "5 tw-hidden",
                                maxLabel: "6 tw-hidden",
                                minLabel: "7 tw-hidden",
                                slider:
                                  "8 tw-appearance-none tw-bg-[#d70000] tw-border tw-border-[#d70000] tw-rounded-full tw-cursor-pointer tw-block tw-h-4 -tw-ml-[0.5rem] -tw-mt-[0.38rem] tw-outline-none tw-absolute tw-top-1/2 tw-transition-[transform,_box-shadow] tw-duration-300 tw-ease-out tw-w-4 active:tw-scale-[1.3]",
                                sliderContainer:
                                  "9 tw-transition-[left] tw-duration-300 tw-ease-out ",
                                track:
                                  "10 tw-left-0 tw-mt-[-0.15rem] tw-absolute tw-right-0 tw-top-[50%] tw-rounded-[0.3rem] tw-cursor-pointer tw-block tw-h-[0.3rem] tw-tras tw-bg-white tw-transition-[left,_width] tw-duration-300 tw-ease-out",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-sm-6   ">
                        <div className="form-group">
                          <div className="price-range">
                            <label htmlFor="amount">Area : </label>
                            <span className="tw-bg-transparent tw-text-white tw-max-w-[95px] tw-py-[1px] tw-px-[2px] tw-ml-1 tw-font-sans">{`${value1.min} m² - ${value1.max} m²`}</span>
                            <InputRange
                              minValue={0}
                              maxValue={500}
                              value={value1}
                              onChange={(value: any) => setValue1(value)}
                              classNames={{
                                valueLabel: "1 tw-hidden",
                                activeTrack:
                                  "2 tw-bg-[#d70000] tw-left-0 tw-mt-[-0.15rem] tw-absolute tw-right-0 tw-top-[50%] tw-rounded-[0.3rem] tw-cursor-pointer tw-block tw-h-[0.3rem] tw-tras tw-transition-[left,_width] tw-duration-300 tw-ease-out",
                                disabledInputRange: "3",
                                inputRange: "4 tw-h-4 tw-relative tw-w-full",
                                labelContainer: "5 tw-hidden",
                                maxLabel: "6 tw-hidden",
                                minLabel: "7 tw-hidden",
                                slider:
                                  "8 tw-appearance-none tw-bg-[#d70000] tw-border tw-border-[#d70000] tw-rounded-full tw-cursor-pointer tw-block tw-h-4 -tw-ml-[0.5rem] -tw-mt-[0.38rem] tw-outline-none tw-absolute tw-top-1/2 tw-transition-[transform,_box-shadow] tw-duration-300 tw-ease-out tw-w-4 active:tw-scale-[1.3]",
                                sliderContainer:
                                  "9 tw-transition-[left] tw-duration-300 tw-ease-out ",
                                track:
                                  "10 tw-left-0 tw-mt-[-0.15rem] tw-absolute tw-right-0 tw-top-[50%] tw-rounded-[0.3rem] tw-cursor-pointer tw-block tw-h-[0.3rem] tw-tras tw-bg-white tw-transition-[left,_width] tw-duration-300 tw-ease-out",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <button
                          type="button"
                          onClick={() =>
                            console.log(
                              "document.location='list-left-sidebar.html'"
                            )
                          }
                          className="btn btn-gradient color-6 mt-3"
                        >
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
