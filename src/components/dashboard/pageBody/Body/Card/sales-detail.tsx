import React from "react";
import SaleChart from "./saleschart";
import { TrendingUp } from "react-feather";

const SalesDetail = () => {
  return (
    <div className="col-xl-8 large-12">
      <div className="card sales-details">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-4">
              <div className="sales-status">
                <h5 className="light-font">Sales summary</h5>
                <div className="status-price">
                  <h3>$16,230/-</h3>
                  <span>
                    last week
                    <span className="font-success">
                      + 10%
                      <TrendingUp className="tw-inline" />
                    </span>
                  </span>
                </div>
              </div>
              <div className="chart-legends">
                <ul>
                  <li>
                    <div className="bg-primary circle-label"></div>
                    <span>Last week</span>
                  </li>
                  <li className="mt-1">
                    <div className="bg-secondary circle-label"></div>
                    <span>Running week</span>
                  </li>
                </ul>
              </div>
              <div className="last-updated light-box">
                <span>Last updated</span>
                <h5>Dec 26, 2022</h5>
              </div>
            </div>
            <div className="col-sm-8">
              <div className="monthly-sales">
                <div className="icon-box">
                  <i className="fas fa-chevron-left light-font"></i>
                </div>
                <h6 className="!tw-font-normal !tw-my-0">Octobar, 2022</h6>
                <div className="icon-box">
                  <i className="fas fa-chevron-right light-font"></i>
                </div>
              </div>
              <SaleChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesDetail;
