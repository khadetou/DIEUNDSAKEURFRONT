import React from "react";

const LeftSidebar = () => {
  return (
    <div className="col-xl-3 col-lg-4">
      <div className="left-sidebar">
        <div className="filter-cards">
          <div className="advance-card">
            <div className="back-btn d-lg-none d-block">Back</div>
            <h5 className="mb-0 advance-title">Advance search </h5>
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
          <div className="advance-card">
            <h6>Category</h6>
            <div className="category-property">
              <ul>
                <li>
                  <a href="javascript:void(0)">
                    <i className="fas fa-arrow-right me-2"></i>Apartment{" "}
                    <span className="float-end">(15)</span>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <i className="fas fa-arrow-right me-2"></i>Villa{" "}
                    <span className="float-end">(10)</span>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <i className="fas fa-arrow-right me-2"></i>Family House{" "}
                    <span className="float-end">(8)</span>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <i className="fas fa-arrow-right me-2"></i>Town House{" "}
                    <span className="float-end">(5)</span>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <i className="fas fa-arrow-right me-2"></i>Offices{" "}
                    <span className="float-end">(12)</span>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <i className="fas fa-arrow-right me-2"></i>Duplexes{" "}
                    <span className="float-end">(3)</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="advance-card">
            <h6>Contact Info</h6>
            <div className="category-property">
              <ul>
                <li>
                  <i data-feather="map-pin" className="me-2"></i>A-32, Albany,
                  Newyork.
                </li>
                <li>
                  <i data-feather="phone-call" className="me-2"></i>
                  (+066) 518 - 457 - 5181
                </li>
                <li>
                  <i data-feather="mail" className="me-2"></i>
                  Contact@gmail.com
                </li>
              </ul>
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
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
