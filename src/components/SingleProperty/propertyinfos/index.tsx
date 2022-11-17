import React from "react";
import About from "./About";
import Details from "./Details";
import Feature from "./Feature";
import Floor from "./Floor";
import Gallery from "./Gallery";
import Video from "./Video";
import Location from "./Location";
import Reviews from "./Reviews";
import Sidebar from "./Sidebar";

const PropertyInfo = () => {
  return (
    <section className="single-property">
      <div className="container">
        <div className="row ratio_65">
          <div className="col-xl-9 col-lg-8">
            <div className="description-section">
              <div className="description-details">
                <About />
                <Feature />
                <Gallery />
                <Video />
                <Details />
                <Floor />
                <Location />
                <Reviews />
              </div>
            </div>
          </div>
          <Sidebar />
        </div>
      </div>
    </section>
  );
};

export default PropertyInfo;
