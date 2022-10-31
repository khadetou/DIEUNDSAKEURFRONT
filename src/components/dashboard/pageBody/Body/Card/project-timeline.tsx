import React from "react";
import TimelineChart from "./timelinechart";

const ProjectTimeline = () => {
  return (
    <div className="col-lg-6">
      <div className="card">
        <div className="card-header">
          <div className="d-flex">
            <h5>Project timeline</h5>
            <a href="add-property.html" className="admin">
              + Add project
            </a>
          </div>
        </div>
        <TimelineChart />
      </div>
    </div>
  );
};

export default ProjectTimeline;
