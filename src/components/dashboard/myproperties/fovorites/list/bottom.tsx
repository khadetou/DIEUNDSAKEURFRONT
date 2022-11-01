import React from "react";
import { Navigation } from "react-feather";
import Card from "./card";

const Bottom = () => {
  return (
    <div className="col-xl-12">
      <div className="property-2 row column-sm property-label property-grid">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        {/* <div className="col-xl-4 col-md-6 xl-6">
          <div className="property-box">
            <div className="property-image">
              <div className="property-slider">
                <a>
                  <img src="/images/property/3.jpg" className="bg-img" alt="" />
                </a>
                <a>
                  <img src="/images/property/1.jpg" className="bg-img" alt="" />
                </a>
                <a>
                  <img src="/images/property/4.jpg" className="bg-img" alt="" />
                </a>
                <a>
                  <img src="/images/property/2.jpg" className="bg-img" alt="" />
                </a>
              </div>
              <div className="labels-left">
                <div>
                  <span className="label label-dark">for rent</span>
                </div>
                <span className="label label-success">featured</span>
              </div>
              <div className="seen-data">
                <i data-feather="camera"></i>
                <span>06</span>
              </div>
              <div className="overlay-property-box">
                <a
                  href="https://themes.pixelstrap.com/sheltos/main/compare.html"
                  className="effect-round"
                  data-bs-toggle="tooltip"
                  data-bs-placement="left"
                  title="Compare"
                >
                  <i data-feather="shuffle"></i>
                </a>
                <a
                  href="favourites.html"
                  className="effect-round like"
                  data-bs-toggle="tooltip"
                  data-bs-placement="left"
                  title="wishlist"
                >
                  <i data-feather="heart"></i>
                </a>
              </div>
            </div>

            <div className="property-details">
              <span className="font-roboto">France</span>
              <a href="https://themes.pixelstrap.com/sheltos/main/single-property-8.html">
                <h3>Merrick in Spring Way</h3>
              </a>
              <h6>$6558.00*</h6>
              <p className="font-roboto light-font">
                This home provides wonderful entertaining spaces with a chef
                kitchen opening… Elegant retreat in a quiet Coral Gables
                setting.
              </p>
              <ul>
                <li>
                  <img
                    src="https://themes.pixelstrap.com/sheltos/assets/images/svg/icon/double-bed.svg"
                    className="img-fluid"
                    alt=""
                  />
                  Bed : 4
                </li>
                <li>
                  <img
                    src="https://themes.pixelstrap.com/sheltos/assets/images/svg/icon/bathroom.svg"
                    className="img-fluid"
                    alt=""
                  />
                  Baths : 4
                </li>
                <li>
                  <img
                    src="https://themes.pixelstrap.com/sheltos/assets/images/svg/icon/square-ruler-tool.svg"
                    className="img-fluid ruler-tool"
                    alt=""
                  />
                  Sq Ft : 5000
                </li>
              </ul>
              <div className="property-btn d-flex">
                <span>December 1, 2022</span>
                <button
                  type="button"
                  onClick={() =>
                    console.log(
                      "document.location='https://themes.pixelstrap.com/sheltos/main/single-property-8.html'"
                    )
                  }
                  className="btn btn-dashed btn-pill color-2"
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-6 xl-6">
          <div className="property-box">
            <div className="property-image">
              <div className="property-slider">
                <a>
                  <img src="/images/property/2.jpg" className="bg-img" alt="" />
                </a>
                <a>
                  <img src="/images/property/4.jpg" className="bg-img" alt="" />
                </a>
                <a>
                  <img src="/images/property/3.jpg" className="bg-img" alt="" />
                </a>
                <a>
                  <img src="/images/property/1.jpg" className="bg-img" alt="" />
                </a>
              </div>
              <div className="labels-left">
                <div>
                  <span className="label label-shadow">sale</span>
                </div>
              </div>
              <div className="seen-data">
                <i data-feather="camera"></i>
                <span>05</span>
              </div>
              <div className="overlay-property-box">
                <a
                  href="https://themes.pixelstrap.com/sheltos/main/compare.html"
                  className="effect-round"
                  data-bs-toggle="tooltip"
                  data-bs-placement="left"
                  title="Compare"
                >
                  <i data-feather="shuffle"></i>
                </a>
                <a
                  href="favourites.html"
                  className="effect-round like"
                  data-bs-toggle="tooltip"
                  data-bs-placement="left"
                  title="wishlist"
                >
                  <i data-feather="heart"></i>
                </a>
              </div>
            </div>

            <div className="property-details">
              <span className="font-roboto">France</span>
              <a href="https://themes.pixelstrap.com/sheltos/main/single-property-8.html">
                <h3>Allen's Across Way</h3>
              </a>
              <h6>$6558.00*</h6>
              <p className="font-roboto light-font">
                Elegant retreat in a quiet Coral Gables setting. This home
                provides wonderful entertaining spaces with a chef kitchen
                opening…
              </p>
              <ul>
                <li>
                  <img
                    src="https://themes.pixelstrap.com/sheltos/assets/images/svg/icon/double-bed.svg"
                    className="img-fluid"
                    alt=""
                  />
                  Bed : 4
                </li>
                <li>
                  <img
                    src="https://themes.pixelstrap.com/sheltos/assets/images/svg/icon/bathroom.svg"
                    className="img-fluid"
                    alt=""
                  />
                  Baths : 4
                </li>
                <li>
                  <img
                    src="https://themes.pixelstrap.com/sheltos/assets/images/svg/icon/square-ruler-tool.svg"
                    className="img-fluid ruler-tool"
                    alt=""
                  />
                  Sq Ft : 5000
                </li>
              </ul>
              <div className="property-btn d-flex">
                <span>May 4, 2022</span>
                <button
                  type="button"
                  onClick={() =>
                    console.log(
                      "document.location='https://themes.pixelstrap.com/sheltos/main/single-property-8.html'"
                    )
                  }
                  className="btn btn-dashed btn-pill color-2"
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-6 xl-6">
          <div className="property-box">
            <div className="property-image">
              <div className="property-slider">
                <a>
                  <img src="/images/property/7.jpg" className="bg-img" alt="" />
                </a>
                <a>
                  <img src="/images/property/6.jpg" className="bg-img" alt="" />
                </a>
                <a>
                  <img src="/images/property/3.jpg" className="bg-img" alt="" />
                </a>
                <a>
                  <img src="/images/property/2.jpg" className="bg-img" alt="" />
                </a>
              </div>
              <div className="labels-left">
                <div>
                  <span className="label label-dark">for rent</span>
                </div>
                <span className="label label-success">featured</span>
              </div>
              <div className="seen-data">
                <i data-feather="camera"></i>
                <span>03</span>
              </div>
              <div className="overlay-property-box">
                <a
                  href="https://themes.pixelstrap.com/sheltos/main/compare.html"
                  className="effect-round"
                  data-bs-toggle="tooltip"
                  data-bs-placement="left"
                  title="Compare"
                >
                  <i data-feather="shuffle"></i>
                </a>
                <a
                  href="favourites.html"
                  className="effect-round like"
                  data-bs-toggle="tooltip"
                  data-bs-placement="left"
                  title="wishlist"
                >
                  <i data-feather="heart"></i>
                </a>
              </div>
            </div>

            <div className="property-details">
              <span className="font-roboto">France</span>
              <a href="https://themes.pixelstrap.com/sheltos/main/single-property-8.html">
                <h3>Hidden Spring Hideway</h3>
              </a>
              <h6>$6558.00*</h6>
              <p className="font-roboto light-font">
                The most common and most absolute type of estate, the tenant
                enjoys the greatest discretion over the disposal of the
                property.
              </p>
              <ul>
                <li>
                  <img
                    src="https://themes.pixelstrap.com/sheltos/assets/images/svg/icon/double-bed.svg"
                    className="img-fluid"
                    alt=""
                  />
                  Bed : 4
                </li>
                <li>
                  <img
                    src="https://themes.pixelstrap.com/sheltos/assets/images/svg/icon/bathroom.svg"
                    className="img-fluid"
                    alt=""
                  />
                  Baths : 4
                </li>
                <li>
                  <img
                    src="https://themes.pixelstrap.com/sheltos/assets/images/svg/icon/square-ruler-tool.svg"
                    className="img-fluid ruler-tool"
                    alt=""
                  />
                  Sq Ft : 5000
                </li>
              </ul>
              <div className="property-btn d-flex">
                <span>September 9, 2022</span>
                <button
                  type="button"
                  onClick={() =>
                    console.log(
                      "document.location='https://themes.pixelstrap.com/sheltos/main/single-property-8.html'"
                    )
                  }
                  className="btn btn-dashed btn-pill color-2"
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-6 xl-6">
          <div className="property-box">
            <div className="property-image">
              <div className="property-slider">
                <a>
                  <img src="/images/property/6.jpg" className="bg-img" alt="" />
                </a>
                <a>
                  <img src="/images/property/2.jpg" className="bg-img" alt="" />
                </a>
                <a>
                  <img src="/images/property/7.jpg" className="bg-img" alt="" />
                </a>
                <a>
                  <img src="/images/property/1.jpg" className="bg-img" alt="" />
                </a>
              </div>
              <div className="labels-left">
                <div>
                  <span className="label label-dark">for sale</span>
                </div>
                <span className="label label-shadow">featured</span>
              </div>
              <div className="seen-data">
                <i data-feather="camera"></i>
                <span>04</span>
              </div>
              <div className="overlay-property-box">
                <a
                  href="https://themes.pixelstrap.com/sheltos/main/compare.html"
                  className="effect-round"
                  data-bs-toggle="tooltip"
                  data-bs-placement="left"
                  title="Compare"
                >
                  <i data-feather="shuffle"></i>
                </a>
                <a
                  href="favourites.html"
                  className="effect-round like"
                  data-bs-toggle="tooltip"
                  data-bs-placement="left"
                  title="wishlist"
                >
                  <i data-feather="heart"></i>
                </a>
              </div>
            </div>

            <div className="property-details">
              <span className="font-roboto">France</span>
              <a href="https://themes.pixelstrap.com/sheltos/main/single-property-8.html">
                <h3>Home in Merrick Way</h3>
              </a>
              <h6>$6558.00*</h6>
              <p className="font-roboto light-font">
                Real estate market in most countries are not as organize or
                efficient as markets for other, more liquid investment
                instruments.
              </p>
              <ul>
                <li>
                  <img
                    src="https://themes.pixelstrap.com/sheltos/assets/images/svg/icon/double-bed.svg"
                    className="img-fluid"
                    alt=""
                  />
                  Bed : 4
                </li>
                <li>
                  <img
                    src="https://themes.pixelstrap.com/sheltos/assets/images/svg/icon/bathroom.svg"
                    className="img-fluid"
                    alt=""
                  />
                  Baths : 4
                </li>
                <li>
                  <img
                    src="https://themes.pixelstrap.com/sheltos/assets/images/svg/icon/square-ruler-tool.svg"
                    className="img-fluid ruler-tool"
                    alt=""
                  />
                  Sq Ft : 5000
                </li>
              </ul>
              <div className="property-btn d-flex">
                <span>June 15, 2022</span>
                <button
                  type="button"
                  onClick={() =>
                    console.log(
                      "document.location='https://themes.pixelstrap.com/sheltos/main/single-property-8.html'"
                    )
                  }
                  className="btn btn-dashed btn-pill color-2"
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-6 xl-6">
          <div className="property-box">
            <div className="property-image">
              <div className="property-slider">
                <a>
                  <img src="/images/property/8.jpg" className="bg-img" alt="" />
                </a>
                <a>
                  <img src="/images/property/6.jpg" className="bg-img" alt="" />
                </a>
                <a>
                  <img src="/images/property/7.jpg" className="bg-img" alt="" />
                </a>
                <a>
                  <img src="/images/property/2.jpg" className="bg-img" alt="" />
                </a>
              </div>
              <div className="labels-left">
                <div>
                  <span className="label label-dark">for rent</span>
                </div>
                <span className="label label-success">featured</span>
              </div>
              <div className="seen-data">
                <i data-feather="camera"></i>
                <span>07</span>
              </div>
              <div className="overlay-property-box">
                <a
                  href="https://themes.pixelstrap.com/sheltos/main/compare.html"
                  className="effect-round"
                  data-bs-toggle="tooltip"
                  data-bs-placement="left"
                  title="Compare"
                >
                  <i data-feather="shuffle"></i>
                </a>
                <a
                  href="favourites.html"
                  className="effect-round like"
                  data-bs-toggle="tooltip"
                  data-bs-placement="left"
                  title="wishlist"
                >
                  <i data-feather="heart"></i>
                </a>
              </div>
            </div>

            <div className="property-details">
              <span className="font-roboto">France</span>
              <a href="https://themes.pixelstrap.com/sheltos/main/single-property-8.html">
                <h3>Magnolia Ranch</h3>
              </a>
              <h6>$6558.00*</h6>
              <p className="font-roboto light-font">
                An interior designer is someone who plans,researches, management
                and manages such enhancement projects.
              </p>
              <ul>
                <li>
                  <img
                    src="https://themes.pixelstrap.com/sheltos/assets/images/svg/icon/double-bed.svg"
                    className="img-fluid"
                    alt=""
                  />
                  Bed : 4
                </li>
                <li>
                  <img
                    src="https://themes.pixelstrap.com/sheltos/assets/images/svg/icon/bathroom.svg"
                    className="img-fluid"
                    alt=""
                  />
                  Baths : 4
                </li>
                <li>
                  <img
                    src="https://themes.pixelstrap.com/sheltos/assets/images/svg/icon/square-ruler-tool.svg"
                    className="img-fluid ruler-tool"
                    alt=""
                  />
                  Sq Ft : 5000
                </li>
              </ul>
              <div className="property-btn d-flex">
                <span>July 23, 2022</span>
                <button
                  type="button"
                  onClick={() =>
                    console.log(
                      "document.location='https://themes.pixelstrap.com/sheltos/main/single-property-8.html'"
                    )
                  }
                  className="btn btn-dashed btn-pill color-2"
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <Navigation />
    </div>
  );
};

export default Bottom;
