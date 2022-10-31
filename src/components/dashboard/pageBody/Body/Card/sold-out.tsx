import React from "react";
import RadialChart from "./radialchart";
import { ChevronRight } from "react-feather";

const SoldOut = () => {
  return (
    <div className="col-xl-5 xl-6">
      <div className="card expiring-card">
        <div className="card-header">
          <div className="d-flex">
            <h5>Sold out</h5>
            <a href="apartment.html" className="arrow-animated admin">
              See Details
              <ChevronRight className="tw-inline" />
            </a>
          </div>
        </div>
        <div className="card-body pt-0 expiring-details">
          <RadialChart />
          <div className="chart-detail">
            <div className="d-flex">
              <div className="media">
                <div className="with-reload">
                  <img
                    src="/images/svg/icon/1.svg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="media-body">
                  <h5>78</h5>
                  <span className="light-font">Properties</span>
                </div>
              </div>
            </div>
          </div>
          <div className="legend-exiring">
            <ul>
              <li className="tw-inline">
                <div className="d-flex ">
                  <span className="square-series bg-primary"></span>
                  <h6 className="!tw-mb-0">10</h6>
                </div>
                <span className="light-font"> {"> "}20 Days</span>
              </li>
              <li className="tw-inline">
                <div className="d-flex ">
                  <span className="square-series bg-success"></span>
                  <h6 className="!tw-mb-0">50</h6>
                </div>
                <span className="light-font"> 21 - 40 Days</span>
              </li>
              <li className="tw-inline">
                <div className="d-flex ">
                  <span className="square-series bg-warning"></span>
                  <h6 className="!tw-mb-0">75</h6>
                </div>
                <span className="light-font">41 - 80 Days</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoldOut;
