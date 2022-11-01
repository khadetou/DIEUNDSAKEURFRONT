import React from "react";

const Top = () => {
  return (
    <div className="col-12">
      <div className="filter-panel">
        <div className="listing-option">
          <h5 className="mb-0">
            Showing <span>1-15 of 69</span> Listings
          </h5>
          <div>
            <div className="d-flex">
              <span className="m-r-10">Map view</span>
              <label className="switch">
                <input
                  type="checkbox"
                  className="option-list"
                  name="step_1"
                  value="ani1"
                  checked
                />
                <span className="switch-state"></span>
              </label>
              <span className="m-l-10">List view</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
