import React from "react";

const TopProperty = () => {
  return (
    <section className="breadcrumb-section p-0">
      <img
        src="/images/inner-background.jpg"
        className="bg-img img-fluid"
        alt=""
      />
      <div className="container">
        <div className="breadcrumb-content">
          <div>
            <h2>Left sidebar view</h2>
            <nav aria-label="breadcrumb" className="theme-breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Listing</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Left sidebar view
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopProperty;
