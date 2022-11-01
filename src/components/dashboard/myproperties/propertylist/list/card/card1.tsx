import Slick, { Settings } from "react-slick";
import { Camera, Shuffle, Heart } from "react-feather";
const Card1 = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="col-xl-4 col-md-6 xl-6">
      <div className="property-box">
        <div className="property-image">
          <Slick {...settings} className="property-slider">
            <a className="bg-size !tw-bg-[url('/images/property/1.jpg')] !tw-bg-cover !tw-bg-center !tw-bg-no-repeat !tw-block">
              <img
                src="/images/property/1.jpg"
                className="bg-img !tw-hidden"
                alt=""
              />
            </a>
            <a className="bg-size !tw-bg-[url('/images/property/2.jpg')] !tw-bg-cover !tw-bg-center !tw-bg-no-repeat !tw-block">
              <img
                src="/images/property/2.jpg"
                className="bg-img !tw-hidden"
                alt=""
              />
            </a>
            <a className="bg-size !tw-bg-[url('/images/property/3.jpg')] !tw-bg-cover !tw-bg-center !tw-bg-no-repeat !tw-block">
              <img
                src="/images/property/3.jpg"
                className="bg-img !tw-hidden"
                alt=""
              />
            </a>
            <a className="bg-size !tw-bg-[url('/images/property/4.jpg')] !tw-bg-cover !tw-bg-center !tw-bg-no-repeat !tw-block">
              <img
                src="/images/property/4.jpg"
                className="bg-img !tw-hidden"
                alt=""
              />
            </a>
          </Slick>

          <div className="labels-left">
            <div>
              <span className="label label-shadow">sale</span>
            </div>
          </div>
          <div className="seen-data">
            <Camera className="tw-inline" />
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
              <Shuffle className="tw-inline" />
            </a>
            <a
              href="favourites.html"
              className="effect-round like"
              data-bs-toggle="tooltip"
              data-bs-placement="left"
              title="wishlist"
            >
              <Heart className="tw-inline" />
            </a>
          </div>
        </div>

        <div className="property-details">
          <span className="font-roboto">France</span>
          <a href="https://themes.pixelstrap.com/sheltos/main/single-property-8.html">
            <h3>Little Acorn Farm</h3>
          </a>
          <h6>$6558.00*</h6>
          <p className="font-roboto light-font">
            Real estate is divided into several categories, including
            residential property, commercial property and industrial property.
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
            <span>August 4, 2022</span>
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
  );
};

export default Card1;
