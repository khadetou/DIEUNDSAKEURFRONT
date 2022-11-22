import React from "react";
import Slick, { Settings } from "react-slick";
import { Heart } from "react-feather";
import { useAppSelector } from "hooks/index";
import doubleBed from "/public/images/svg/icon/double-bed.svg";
import bathroom from "/public/images/svg/icon/bathroom.svg";
import squareRule from "/public/images/svg/icon/square-ruler-tool.svg";

import Image from "next/image";

const FeatureSection = () => {
  const settings: Settings = {
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
  };

  const { topProperties } = useAppSelector((store) => store.property);

  return (
    <section className="feature-section banner-4">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="title-1 text-white">
              <span className="label label-gradient color-6">Nos</span>
              <h2 className="!tw-text-[30px] !tw-font-bold !tw-tracking-[0.001em]">
                Propriétés En Vedettes
              </h2>
              <hr />
            </div>
            <div className="feature-1 arrow-light">
              <Slick {...settings}>
                {topProperties.map((properties: any, idx: any) => (
                  <div key={idx}>
                    <div className="feature-wrapper">
                      <div className="row">
                        <div className="col-xl-4 col-lg-3">
                          <div className="feature-left">
                            <div className="property-details">
                              <span className="font-roboto">
                                {properties.region}
                              </span>
                              <a href="single-property-8.html">
                                <h3 className="d-flex !tw-items-center !tw-font-bold !tw-text-[calc(18px+(22+_-18)*(100vw-320px)/(1920_-_320))]">
                                  {properties.name}{" "}
                                  <span>
                                    <span className="label label-dark label-pill">
                                      Open house
                                    </span>
                                  </span>
                                </h3>
                              </a>
                              <h6 className="color-6">
                                {Number(properties.price).toLocaleString(
                                  "fr-FR",
                                  {
                                    style: "currency",
                                    currency: "XOF",
                                  }
                                )}
                                *
                              </h6>
                              <p className="font-roboto">
                                {properties.description}
                                Different types of housing can be use same
                                physical type.connected residences might be
                                owned by a single entity or owned separately
                                with an agreement covering the relationship
                                between units and common areas and concerns.
                              </p>
                              <ul>
                                <li>
                                  <Image
                                    src={doubleBed}
                                    className="img-fluid"
                                    alt=""
                                  />
                                  Lits : {properties.beds}
                                </li>
                                <li>
                                  <Image
                                    src={bathroom}
                                    className="img-fluid"
                                    alt=""
                                  />
                                  Toilettes : {properties.baths}
                                </li>
                                <li>
                                  <Image
                                    src={squareRule}
                                    className="img-fluid ruler-tool"
                                    alt=""
                                  />
                                  M² : {properties.area}
                                </li>
                              </ul>
                              <a href="user-favourites.html">
                                <span className="round-half color-6">
                                  <Heart />
                                </span>
                              </a>
                              <div className="property-btn">
                                <a
                                  href="single-property-8.html"
                                  className="btn btn-dashed btn-pill color-6"
                                  tabIndex={0}
                                >
                                  Details
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-8 col-lg-9 order-md">
                          <div
                            style={{
                              backgroundImage: `url(${properties.images[0].url})`,
                            }}
                            className="feature-image bg-size tw-bg-cover tw-bg-[center_center] tw-bg-no-repeat "
                          >
                            {/* <img
                            src="/images/property/3.jpg"
                            alt=""
                            className="bg-img"
                          /> */}
                            <h4 className="!tw-tracking-[5px] !tw-font-semibold">
                              {properties.type}
                            </h4>
                            <span className="box-color"></span>
                            <span className="signature">
                              <img src="/images/signature/1.png" alt="" />
                            </span>
                            <span className="label label-white label-lg color-6">
                              En Vedette
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slick>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
