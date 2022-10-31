import React from "react";
import { TrendingUp } from "react-feather";

const MonthlyNewp = () => {
  return (
    <div className="col-xl-3 xl-6 col-md-6 project-widgets">
      <div className="card">
        <div className="card-body">
          <div className="media">
            <i className="fab fa-cloudscale"></i>
            <div className="media-body">
              <span>
                Monthly
                <span className="font-success">
                  + 10%
                  <TrendingUp className="tw-inline" />
                </span>
              </span>
              <h4>36,000</h4>
              <span className="status-history"> New project</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthlyNewp;
