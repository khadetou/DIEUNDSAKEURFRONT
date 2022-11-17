import React from "react";

const Sidebar = () => {
  return (
    <div className="col-xl-3 col-lg-4">
      <div className="left-sidebar sticky-cls single-sidebar">
        <div className="filter-cards">
          <div className="advance-card">
            <h6>Contact Info</h6>
            <div className="category-property">
              <div className="agent-info">
                <div className="media">
                  <img
                    src="/images/testimonial/3.png"
                    className="img-50"
                    alt=""
                  />
                  <div className="media-body ms-2">
                    <h6>Jonathan Scott</h6>
                    <p>Contact@gmail.com</p>
                  </div>
                </div>
              </div>
              <ul>
                <li>
                  <i data-feather="map-pin" className="me-2"></i>A-32, Albany,
                  Newyork.
                </li>
                <li>
                  <i data-feather="phone-call" className="me-2"></i>(+066) 518 -
                  457 - 5181
                </li>
              </ul>
            </div>
          </div>
          <div className="advance-card">
            <h6>Request exploration</h6>
            <div className="category-property">
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    placeholder="phone number"
                    className="form-control"
                    name="mobnumber"
                    id="tbNumbers"
                    //   onInput={"maxLengthCheck(this)"}
                    type="tel"
                    //   onkeypress="javascript:return isNumber(event)"
                    maxLength={9}
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    placeholder="Message"
                    className="form-control"
                    rows={3}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  onClick={() =>
                    console.log("document.location='user-listing.html'")
                  }
                  className="btn btn-gradient color-2 btn-block btn-pill"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </div>
          <div className="advance-card">
            <h6>filter</h6>
            <div className="row gx-2">
              <div className="col-12">
                <div className="dropdown">
                  <span
                    className="dropdown-toggle font-rubik"
                    data-bs-toggle="dropdown"
                  >
                    <span>Property Status</span>{" "}
                    <i className="fas fa-angle-down"></i>
                  </span>
                  <div className="dropdown-menu text-start">
                    <a className="dropdown-item" href="javascript:void(0)">
                      Property Status
                    </a>
                    <a className="dropdown-item" href="javascript:void(0)">
                      For Rent
                    </a>
                    <a className="dropdown-item" href="javascript:void(0)">
                      For Sale
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="dropdown">
                  <span
                    className="dropdown-toggle font-rubik"
                    data-bs-toggle="dropdown"
                  >
                    <span>Property Type</span>{" "}
                    <i className="fas fa-angle-down"></i>
                  </span>
                  <div className="dropdown-menu text-start">
                    <a className="dropdown-item" href="javascript:void(0)">
                      Property Type
                    </a>
                    <a className="dropdown-item" href="javascript:void(0)">
                      Apartment
                    </a>
                    <a className="dropdown-item" href="javascript:void(0)">
                      Family House
                    </a>
                    <a className="dropdown-item" href="javascript:void(0)">
                      Cottage
                    </a>
                    <a className="dropdown-item" href="javascript:void(0)">
                      Condominium
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="dropdown">
                  <span
                    className="dropdown-toggle font-rubik"
                    data-bs-toggle="dropdown"
                  >
                    <span>Property Location</span>{" "}
                    <i className="fas fa-angle-down"></i>
                  </span>
                  <div className="dropdown-menu text-start">
                    <a className="dropdown-item" href="javascript:void(0)">
                      Property Location
                    </a>
                    <a className="dropdown-item" href="javascript:void(0)">
                      Austria
                    </a>
                    <a className="dropdown-item" href="javascript:void(0)">
                      Brazil
                    </a>
                    <a className="dropdown-item" href="javascript:void(0)">
                      New york
                    </a>
                    <a className="dropdown-item" href="javascript:void(0)">
                      USA
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="dropdown">
                  <span
                    className="dropdown-toggle font-rubik"
                    data-bs-toggle="dropdown"
                  >
                    <span>Max Rooms</span> <i className="fas fa-angle-down"></i>
                  </span>
                  <div className="dropdown-menu text-start">
                    <a className="dropdown-item" href="javascript:void(0)">
                      Max Rooms
                    </a>
                    <a className="dropdown-item" href="javascript:void(0)">
                      1
                    </a>
                    <a className="dropdown-item" href="javascript:void(0)">
                      2
                    </a>
                    <a className="dropdown-item" href="javascript:void(0)">
                      3
                    </a>
                    <a className="dropdown-item" href="javascript:void(0)">
                      4
                    </a>
                    <a className="dropdown-item" href="javascript:void(0)">
                      5
                    </a>
                    <a className="dropdown-item" href="javascript:void(0)">
                      6
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="dropdown">
                  <span
                    className="dropdown-toggle font-rubik"
                    data-bs-toggle="dropdown"
                  >
                    <span>Bed</span> <i className="fas fa-angle-down"></i>
                  </span>
                  <div className="dropdown-menu text-start">
                    <a className="dropdown-item" href="javascript:void(0)">
                      Bed
                    </a>
                    <a className="dropdown-item" href="javascript:void(0)">
                      1
                    </a>
                    <a className="dropdown-item" href="javascript:void(0)">
                      2
                    </a>
                    <a className="dropdown-item" href="javascript:void(0)">
                      3
                    </a>
                    <a className="dropdown-item" href="javascript:void(0)">
                      4
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="dropdown">
                  <span
                    className="dropdown-toggle font-rubik"
                    data-bs-toggle="dropdown"
                  >
                    <span>Bath</span> <i className="fas fa-angle-down"></i>
                  </span>
                  <div className="dropdown-menu text-start">
                    <a className="dropdown-item" href="javascript:void(0)">
                      Bath
                    </a>
                    <a className="dropdown-item" href="javascript:void(0)">
                      1
                    </a>
                    <a className="dropdown-item" href="javascript:void(0)">
                      2
                    </a>
                    <a className="dropdown-item" href="javascript:void(0)">
                      3
                    </a>
                    <a className="dropdown-item" href="javascript:void(0)">
                      4
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="dropdown">
                  <span
                    className="dropdown-toggle font-rubik"
                    data-bs-toggle="dropdown"
                  >
                    <span>Agencies</span> <i className="fas fa-angle-down"></i>
                  </span>
                  <div className="dropdown-menu text-start">
                    <a className="dropdown-item" href="javascript:void(0)">
                      Agencies
                    </a>
                    <a className="dropdown-item" href="javascript:void(0)">
                      Lincoln
                    </a>
                    <a className="dropdown-item" href="javascript:void(0)">
                      Blue Sky
                    </a>
                    <a className="dropdown-item" href="javascript:void(0)">
                      Zephyr
                    </a>
                    <a className="dropdown-item" href="javascript:void(0)">
                      Premiere
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="price-range">
                  <label htmlFor="amount">Price : </label>
                  <input type="text" id="amount" readOnly />
                  <div id="slider-range" className="theme-range-2"></div>
                </div>
              </div>
              <div className="col-12">
                <div className="price-range">
                  <label htmlFor="amount">Area : </label>
                  <input type="text" id="amount1" readOnly />
                  <div id="slider-range1" className="theme-range-2"></div>
                </div>
              </div>
              <div className="col-12">
                <a
                  href="list-left-sidebar.html"
                  className="btn btn-gradient color-2 btn-block btn-pill mt-2"
                >
                  Search{" "}
                </a>
              </div>
            </div>
          </div>
          <div className="advance-card feature-card">
            <h6>Featured</h6>
            <div className="feature-slider">
              <div>
                <img src="/images/property/4.jpg" className="bg-img" alt="" />
                <div className="bottom-feature">
                  <h5>Neverland</h5>
                  <h6>
                    $13,000 <small>/ start from</small>
                  </h6>
                </div>
              </div>
              <div>
                <img src="/images/property/16.jpg" className="bg-img" alt="" />
                <div className="bottom-feature">
                  <h5>Neverland</h5>
                  <h6>
                    $13,000 <small>/ start from</small>
                  </h6>
                </div>
              </div>
              <div>
                <img src="/images/property/14.jpg" className="bg-img" alt="" />
                <div className="bottom-feature">
                  <h5>Neverland</h5>
                  <h6>
                    $13,000 <small>/ start from</small>
                  </h6>
                </div>
              </div>
            </div>
            <div className="labels-left">
              <span className="label label-success">featured</span>
            </div>
          </div>
          <div className="advance-card">
            <h6>Recently Added</h6>
            <div className="recent-property">
              <ul>
                <li>
                  <div className="media">
                    <img
                      src="/images/property/9.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="media-body">
                      <h5>Sea Breezes</h5>
                      <span>
                        $9800 / <span>Month</span>
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="media">
                    <img
                      src="/images/property/10.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="media-body">
                      <h5>Orchard House</h5>
                      <span>
                        $7500 / <span>Month</span>
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="media">
                    <img
                      src="/images/property/11.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="media-body">
                      <h5>Neverland</h5>
                      <span>
                        $5000 / <span>Month</span>
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="advance-card">
            <h6>Mortgage</h6>
            <div className="category-property">
              <form>
                <div className="input-group mb-3">
                  <span className="input-group-text">$</span>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Loan Amount"
                    required
                  />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text">$</span>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Down Payment"
                    required
                  />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text">%</span>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Rate of Interest"
                    required
                  />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text">$</span>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Number Of years"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-gradient color-2 btn-block btn-pill"
                >
                  Calculate
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
