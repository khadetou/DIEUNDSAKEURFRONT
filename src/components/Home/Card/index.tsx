import React, { useEffect } from "react";
import Slick, { Settings } from "react-slick";
import { Shuffle, Camera, Heart } from "react-feather";

const Card = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    document.querySelectorAll(".bg-img").forEach((img) => {
      const src = img.getAttribute("src");
      const parent = img.parentElement;
      parent?.setAttribute("style", `background-image: url(${src})`);
    });
  }, []);
  return (
    <div className="col-xl-4 col-md-6 wow fadeInUp">
      <div className="property-box">
        <div className="property-image">
          <Slick {...settings} className="property-slider color-6">
            <a
              className={`bg-size tw-relative !tw-bg-cover !tw-bg-center !tw-bg-no-repeat !tw-block`}
            >
              <img
                src="/images/property/25.jpg"
                className="bg-img !tw-hidden"
                alt=""
              />
            </a>
            <a
              className={`bg-size tw-relative !tw-bg-cover !tw-bg-center !tw-bg-no-repeat !tw-block`}
            >
              <img
                src="/images/property/24.jpg"
                className="bg-img !tw-hidden"
                alt=""
              />
            </a>
            <a
              className={`bg-size tw-relative !tw-bg-cover !tw-bg-center !tw-bg-no-repeat !tw-block`}
            >
              <img
                src="/images/property/22.jpg"
                className="bg-img !tw-hidden"
                alt=""
              />
            </a>
            <a
              className={`bg-size tw-relative !tw-bg-cover !tw-bg-center !tw-bg-no-repeat !tw-block`}
            >
              <img
                src="/images/property/16.jpg"
                className="bg-img !tw-hidden"
                alt=""
              />
            </a>
          </Slick>
          <div className="labels-left">
            <div>
              <span className="label label-dark">no fees</span>
            </div>
            <span className="label label-success">open house</span>
          </div>
          <div className="seen-data">
            <Camera className="tw-inline" />
            <span>42</span>
          </div>
          <div className="overlay-property-box">
            <a
              href="compare.html"
              className="effect-round"
              data-bs-toggle="tooltip"
              data-bs-placement="left"
              title="Compare"
            >
              <Shuffle />
            </a>
            <a
              href="user-favourites.html"
              className="effect-round like"
              data-bs-toggle="tooltip"
              data-bs-placement="left"
              title="wishlist"
            >
              <Heart />
            </a>
          </div>
        </div>
        <div className="property-details">
          <span className="font-roboto">brazil</span>
          <a href="single-property-8.html">
            <h3>Hidden Spring Hideway</h3>
          </a>
          <h6 className="color-6">$9554.00*</h6>
          <p className="font-roboto">
            An interior designer is someone who
            plans,researches,coordinates,management and manages such enhancement
            projects.
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
            <span>July 18, 2022</span>
            <button
              type="button"
              onClick={() => console.log("first")}
              className="btn btn-dashed btn-pill color-6"
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
