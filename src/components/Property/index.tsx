import React from "react";
import LeftSidebar from "./LeftSidebar";
import Listing from "./Listing";
import TopProperty from "./TopProperty";

const Property = () => {
  return (
    <>
      <TopProperty />
      <section className="property-section">
        <div className="container">
          <div className="row ratio_63">
            <LeftSidebar />
            <Listing />
          </div>
        </div>
      </section>
    </>
  );
};

export default Property;
