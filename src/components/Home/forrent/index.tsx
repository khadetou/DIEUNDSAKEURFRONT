import React from "react";
import Card from "../Card";

const ForRent = () => {
  return (
    <section className="property-section property-color-6">
      <div className="container">
        <div className="row ratio_55">
          <div className="col">
            <div className="title-1 color-6">
              <span className="label label-gradient color-6">Rent</span>
              <h2>Latest For Rent</h2>
              <hr />
            </div>
            <div className="property-2 row column-space color-6">
              <Card />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForRent;
