import React from "react";
import TopBody from "./top-body";

const BodyMap = () => {
  return (
    <div className="page-body">
      <TopBody />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-header pb-0">
                <h5>Vector world map</h5>
              </div>
              <div className="card-body">
                <div className="jvector-map-height" id="world-map"></div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-header pb-0">
                <h5>Vector USA map</h5>
              </div>
              <div className="card-body">
                <div className="jvector-map-height" id="usa"></div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-header pb-0">
                <h5>Vector Asia map</h5>
              </div>
              <div className="card-body">
                <div className="jvector-map-height" id="asia"></div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-header pb-0">
                <h5>Vector India map</h5>
              </div>
              <div className="card-body">
                <div className="jvector-map-height" id="india"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyMap;
