import React from "react";
import { TrendingUp } from "react-feather";

const TotalProjects = () => {
  return (
    <div className="col-xl-3 xl-6 col-md-6 project-widgets">
      <div className="card">
        <div className="card-body">
          <div className="media">
            <div className="widget-icon bg-primary-light">
              <i className="fab fa-foursquare"></i>
            </div>
            <div className="media-body">
              <span>
                Completed
                <span className="font-success">
                  + 20%
                  <TrendingUp className="tw-inline" />
                </span>
              </span>
              <h4>Total projects</h4>
              <span className="status-history">New users</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalProjects;
