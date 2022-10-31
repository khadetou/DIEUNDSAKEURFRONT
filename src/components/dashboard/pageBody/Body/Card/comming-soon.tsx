import React from "react";

const CommingSoon = () => {
  return (
    <div className="col-xl-3 xl-6 col-md-6 project-widgets">
      <div className="card">
        <div className="card-body">
          <div className="media">
            <div className="widget-icon bg-success-light">
              <i className="fab fa-angellist"></i>
            </div>
            <div className="media-body">
              <span>
                <span className="font-success">Coming soon</span>
              </span>
              <h4>10,000</h4>
              <span className="status-history">Agents</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommingSoon;
