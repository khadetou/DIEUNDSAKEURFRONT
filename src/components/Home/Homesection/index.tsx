import React from "react";

const HomeSection = () => {
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
                      <div>
                        <div className="home-content">
                          <div>
                            <img
                              src="/images/signature/2.png"
                              className="img-fluid m-0"
                              alt=""
                            />
                            <h6>Want to buy or rent Home ?</h6>
                            <h1>Reality Properties solve your problems</h1>
                            <a
                              href="submit-property.html"
                              className="btn btn-gradient color-6"
                            >
                              submit property
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* <div>
                        <div className="home-content">
                          <div>
                            <img
                              src="/images/signature/2.png"
                              className="img-fluid m-0"
                              alt=""
                            />
                            <h6>Want to buy or sell Land ?</h6>
                            <h1>Elegant retreat in quiet Coral Gables</h1>
                            <a
                              href="submit-property.html"
                              className="btn btn-gradient color-6"
                            >
                              submit property
                            </a>
                          </div>
                        </div>
                      </div> */}
                    </div>
                    <div className="looking-icons">
                      <h5>What are you looking for?</h5>
                      <ul>
                        <li>
                          <a href="grid-2.html" className="looking-icon">
                            <svg className="property-svg">
                              <use xlinkHref="https://themes.pixelstrap.com/sheltos/assets/svg/icons.svg#home-lock"></use>
                            </svg>
                            <h6>House</h6>
                          </a>
                        </li>
                        <li>
                          <a href="user-create.html" className="looking-icon">
                            <svg className="property-svg">
                              <use xlinkHref="https://themes.pixelstrap.com/sheltos/assets/svg/icons.svg#home-heart"></use>
                            </svg>
                            <h6>Booking</h6>
                          </a>
                        </li>
                        <li>
                          <a href="user-listing.html" className="looking-icon">
                            <svg className="property-svg">
                              <use xlinkHref="https://themes.pixelstrap.com/sheltos/assets/svg/icons.svg#key"></use>
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
                              <a
                                className="dropdown-item"
                                href="javascript:void(0)"
                              >
                                Property Status
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0)"
                              >
                                For Rent
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0)"
                              >
                                For Sale
                              </a>
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
                              <a
                                className="dropdown-item"
                                href="javascript:void(0)"
                              >
                                Property Type
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0)"
                              >
                                Apartment
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0)"
                              >
                                Family House
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0)"
                              >
                                Cottage
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0)"
                              >
                                Condominium
                              </a>
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
                              <a
                                className="dropdown-item"
                                href="javascript:void(0)"
                              >
                                Max Rooms
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0)"
                              >
                                1
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0)"
                              >
                                2
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0)"
                              >
                                3
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0)"
                              >
                                4
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0)"
                              >
                                5
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0)"
                              >
                                6
                              </a>
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
                              <a
                                className="dropdown-item"
                                href="javascript:void(0)"
                              >
                                Bed
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0)"
                              >
                                1
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0)"
                              >
                                2
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0)"
                              >
                                3
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0)"
                              >
                                4
                              </a>
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
                              <a
                                className="dropdown-item"
                                href="javascript:void(0)"
                              >
                                Bath
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0)"
                              >
                                1
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0)"
                              >
                                2
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0)"
                              >
                                3
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0)"
                              >
                                4
                              </a>
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
                              <a
                                className="dropdown-item"
                                href="javascript:void(0)"
                              >
                                Agencies
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0)"
                              >
                                Lincoln
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0)"
                              >
                                Blue Sky
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0)"
                              >
                                Zephyr
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0)"
                              >
                                Premiere
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-sm-6">
                        <div className="form-group">
                          <div className="price-range">
                            <label htmlFor="amount">Price : </label>
                            <input type="text" id="amount" readOnly />
                            <div
                              id="slider-range"
                              className="theme-range-3"
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-sm-6">
                        <div className="form-group">
                          <div className="price-range">
                            <label htmlFor="amount">Area : </label>
                            <input type="text" id="amount1" readOnly />
                            <div
                              id="slider-range1"
                              className="theme-range-3"
                            ></div>
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

export default HomeSection;
