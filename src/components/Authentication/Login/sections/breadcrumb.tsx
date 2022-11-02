import React from "react";

const Breadcrumb = () => {
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
            <h2>Log in</h2>
            <nav aria-label="breadcrumb" className="theme-breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Log in
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
