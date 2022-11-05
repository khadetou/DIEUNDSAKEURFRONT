import React from "react";

const Filter = () => {
  return (
    <div className="col-xl-3 xl-6 col-md-6 project-widgets">
      <div className="left-sidebar">
        <a href="single-property-1.html">
          <h2> Sick about moving out? </h2>
        </a>
        <div className="row gx-2">
          <div className="col-md-6">
            <label>Property Status</label>
            <div className="dropdown">
              <span
                className="dropdown-toggle font-rubik"
                data-bs-toggle="dropdown"
              >
                <span>For Rent</span> <i className="fas fa-angle-down"></i>
              </span>
              <div className="dropdown-menu text-start">
                <a className="dropdown-item" href="javascript:void(0)">
                  For Rent
                </a>
                <a className="dropdown-item" href="javascript:void(0)">
                  For Sale
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <label>Property Type</label>
            <div className="dropdown">
              <span
                className="dropdown-toggle font-rubik"
                data-bs-toggle="dropdown"
              >
                <span>Apartment</span> <i className="fas fa-angle-down"></i>
              </span>
              <div className="dropdown-menu text-start">
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
          <div className="col-sm-6">
            <label>Max Rooms</label>
            <div className="dropdown">
              <span
                className="dropdown-toggle font-rubik"
                data-bs-toggle="dropdown"
              >
                <span>2</span> <i className="fas fa-angle-down"></i>
              </span>
              <div className="dropdown-menu text-start">
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
          <div className="col-6">
            <label>Bed</label>
            <div className="dropdown">
              <span
                className="dropdown-toggle font-rubik"
                data-bs-toggle="dropdown"
              >
                <span>3</span> <i className="fas fa-angle-down"></i>
              </span>
              <div className="dropdown-menu text-start">
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
          <div className="col-6">
            <label>Bath</label>
            <div className="dropdown">
              <span
                className="dropdown-toggle font-rubik"
                data-bs-toggle="dropdown"
              >
                <span>1</span> <i className="fas fa-angle-down"></i>
              </span>
              <div className="dropdown-menu text-start">
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
            <label>Agencies</label>
            <div className="dropdown">
              <span
                className="dropdown-toggle font-rubik"
                data-bs-toggle="dropdown"
              >
                <span>Premiere</span> <i className="fas fa-angle-down"></i>
              </span>
              <div className="dropdown-menu text-start">
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
          <div className="col-lg-12">
            <div className="price-range">
              <label htmlFor="amount">Price : </label>
              <input type="text" id="amount" readOnly />
              <div
                id="slider-range"
                className="theme-range-4 ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
              >
                <div className="ui-slider-range ui-corner-all ui-widget-header"></div>
                <span
                  tabIndex={0}
                  className="ui-slider-handle ui-corner-all ui-state-default"
                  style={{ left: "15%" }}
                ></span>
                <span
                  tabIndex={0}
                  className="ui-slider-handle ui-corner-all ui-state-default"
                  style={{ left: "60%" }}
                ></span>
                <div
                  className="ui-slider-range ui-corner-all ui-widget-header"
                  style={{ left: "15%", width: "45%" }}
                ></div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="price-range">
              <label htmlFor="amount">Area : </label>
              <input type="text" id="amount1" readOnly />
              <div
                id="slider-range1"
                className="theme-range-4 ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
              >
                <div className="ui-slider-range ui-corner-all ui-widget-header"></div>
                <span
                  tabIndex={0}
                  className="ui-slider-handle ui-corner-all ui-state-default"
                  style={{ left: "15%" }}
                ></span>
                <span
                  tabIndex={0}
                  className="ui-slider-handle ui-corner-all ui-state-default"
                  style={{ left: "60%" }}
                ></span>
                <div
                  className="ui-slider-range ui-corner-all ui-widget-header"
                  style={{ left: "15%", width: "45%" }}
                ></div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <button
              type="button"
              onClick={() =>
                console.log("document.location='list-left-sidebar.html'")
              }
              className="btn btn-gradient color-4 mt-2"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
