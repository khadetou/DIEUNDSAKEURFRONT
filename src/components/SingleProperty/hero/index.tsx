import React, { useEffect } from "react";
import Slick, { Settings } from "react-slick";

const Hero = () => {
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    draggable: true,
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
    <section className="ratio_40 breadcrumb-section p-0 single-property-images">
      <Slick {...settings} className="main-property-slider arrow-image">
        <div>
          <div className="bg-size tw-bg-cover tw-bg-[center_center] tw-bg-no-repeat tw-block">
            <img
              src="/images/property/4.jpg"
              className="bg-img !tw-hidden"
              alt=""
            />
          </div>
        </div>
        <div>
          <div className="bg-size tw-bg-cover tw-bg-[center_center] tw-bg-no-repeat tw-block">
            <img
              src="/images/property/2.jpg"
              className="bg-img !tw-hidden"
              alt=""
            />
          </div>
        </div>
        <div>
          <div className="bg-size tw-bg-cover tw-bg-[center_center] tw-bg-no-repeat tw-block">
            <img
              src="/images/property/4.jpg"
              className="bg-img !tw-hidden"
              alt=""
            />
          </div>
        </div>
        <div>
          <div className="bg-size tw-bg-cover tw-bg-[center_center] tw-bg-no-repeat tw-block">
            <img
              src="/images/property/5.jpg"
              className="bg-img !tw-hidden"
              alt=""
            />
          </div>
        </div>
      </Slick>
      <div className="single-property-section">
        <div className="container">
          <div className="single-title">
            <div className="left-single">
              <div className="d-flex">
                <h2 className="mb-0">Orchard House </h2>
                <span>
                  <span className="label label-shadow ms-2">For Sale</span>
                </span>
              </div>
              <p className="mt-2">
                Mina Road, Bur Dubai, Dubai, United Arab Emirates
              </p>
              <ul>
                <li>
                  <div>
                    <img
                      src="https://themes.pixelstrap.com/sheltos/assets/images/svg/icon/double-bed.svg"
                      className="img-fluid"
                      alt=""
                    />
                    <span>4 Bedrooms</span>
                  </div>
                </li>
                <li>
                  <div>
                    <img
                      src="https://themes.pixelstrap.com/sheltos/assets/images/svg/icon/bathroom.svg"
                      className="img-fluid"
                      alt=""
                    />
                    <span>4 Bathrooms</span>
                  </div>
                </li>
                <li>
                  <div>
                    <img
                      src="https://themes.pixelstrap.com/sheltos/assets/images/svg/icon/sofa.svg"
                      className="img-fluid"
                      alt=""
                    />
                    <span>2 Halls</span>
                  </div>
                </li>
                <li>
                  <div>
                    <img
                      src="https://themes.pixelstrap.com/sheltos/assets/images/svg/icon/square-ruler-tool.svg"
                      className="img-fluid ruler-tool"
                      alt=""
                    />
                    <span>5000 Sq ft</span>
                  </div>
                </li>
                <li>
                  <div>
                    <img
                      src="https://themes.pixelstrap.com/sheltos/assets/images/svg/icon/garage.svg"
                      className="img-fluid"
                      alt=""
                    />
                    <span>1 Garage</span>
                  </div>
                </li>
              </ul>
              <div className="share-buttons">
                <div className="d-inline-block">
                  <a
                    href="javascript:void(0)"
                    className="btn btn-gradient btn-pill color-2"
                  >
                    <i className="far fa-share-square"></i>
                    share
                  </a>
                  <div className="share-hover">
                    <ul>
                      <li>
                        <a
                          href="https://www.facebook.com/"
                          className="icon-facebook"
                        >
                          <i data-feather="facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/" className="icon-twitter">
                          <i data-feather="twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/"
                          className="icon-instagram"
                        >
                          <i data-feather="instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <a
                  href="javascript:void(0)"
                  className="btn btn-dashed btn-pill color-2 ms-md-2 ms-1 save-btn"
                >
                  <i className="far fa-heart"></i>
                  Save
                </a>
                <a
                  href="javascript:void(0)"
                  className="btn btn-dashed btn-pill color-2 ms-md-2 ms-1"
                  onClick={() => console.log("myFunction()")}
                >
                  <i data-feather="printer"></i>
                  Print
                </a>
              </div>
            </div>
            <div className="right-single">
              <div className="rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
              <h2 className="price">
                $20,45,472 <span>/ start From</span>
              </h2>
              <div className="feature-label">
                <span className="btn btn-dashed color-2 btn-pill">Wi-fi</span>
                <span className="btn btn-dashed color-2 ms-1 btn-pill">
                  Swimming Pool
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
