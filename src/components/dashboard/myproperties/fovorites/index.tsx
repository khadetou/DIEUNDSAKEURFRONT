import React from "react";
import Bottom from "./list/bottom";
import Top from "./list/top";
import Topbody from "./top-body";

const BodyFavorites = () => {
  return (
    <div className="page-body">
      <Topbody />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="property-admin">
              <div className="property-section section-sm">
                <div className="row ratio_55 property-grid-2 property-map map-with-back">
                  <Top />
                  <Bottom />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyFavorites;
