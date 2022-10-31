import React from "react";
import { TrendingUp } from "react-feather";

const BehanceProjects = () => {
  return (
    <div className="col-xl-3 xl-6 col-md-6 project-widgets">
      <div className="card">
        <div className="card-body">
          <div className="media">
            <div className="widget-icon bg-warning-light">
              <i className="fab fa-behance"></i>
            </div>
            <div className="media-body">
              <span>
                Completed
                <span className="font-success">
                  + 15%
                  <TrendingUp className="tw-inline" />
                </span>
              </span>
              <h4>Behance project</h4>
              <span className="status-history">Users</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BehanceProjects;
