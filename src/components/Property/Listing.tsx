import { useAppSelector } from "hooks/index";
import React from "react";
import Card from "./Card";

const Listing = () => {
  const { properties } = useAppSelector((store) => store.property);
  return (
    <div className="col-xl-9 col-lg-8 property-grid-2">
      <div className="filter-panel">
        <div className="top-panel">
          <div>
            <h2>Properties Listing</h2>
            <span className="show-result">
              Showing <span>1-15 of 69</span> Listings
            </span>
          </div>
          <ul className="grid-list-filter d-flex">
            <li>
              <div className="dropdown">
                <span
                  className="dropdown-toggle font-rubik"
                  data-bs-toggle="dropdown"
                >
                  <span>Sort by Newest</span>{" "}
                  <i className="fas fa-angle-down ms-lg-3 ms-2"></i>
                </span>
                <div className="dropdown-menu text-start">
                  <a className="dropdown-item">Sort by Newest</a>
                  <a className="dropdown-item">Sort by Oldest</a>
                  <a className="dropdown-item">Sory by featured</a>
                  <a className="dropdown-item">Sort by price (Low to high)</a>
                </div>
              </div>
            </li>

            <li className="d-lg-none d-block">
              <div>
                <h6 className="mb-0 mobile-filter font-roboto">
                  Advance search{" "}
                  <i data-feather="align-center" className="float-end"></i>
                </h6>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="property-wrapper-grid">
        <div className="property-2 row column-sm zoom-gallery property-label property-grid">
          {properties.map((property: any, idx: any) => (
            <Card key={idx} {...property} />
          ))}
        </div>
      </div>
      {/* <nav className="theme-pagination">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" aria-label="Previous">
              <span aria-hidden="true">«</span>
              <span className="sr-only">Previous</span>
            </a>
          </li>
          <li className="page-item active">
            <a className="page-link">1</a>
          </li>
          <li className="page-item">
            <a className="page-link">2</a>
          </li>
          <li className="page-item">
            <a className="page-link">3</a>
          </li>
          <li className="page-item">
            <a className="page-link" aria-label="Next">
              <span aria-hidden="true">»</span>
              <span className="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </nav> */}
    </div>
  );
};

export default Listing;
