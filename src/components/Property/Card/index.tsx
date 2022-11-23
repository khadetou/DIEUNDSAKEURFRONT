import React, { useEffect } from "react";
import Slick, { Settings } from "react-slick";
import { Shuffle, Camera, Heart } from "react-feather";
import Image from "next/image";
import moment from "moment";

const Card = (props: any) => {
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

  const {
    images,
    region,
    name,
    price,
    description,
    beds,
    baths,
    area,
    createdAt,
  } = props;

  return (
    <div className="col-lg-6 ">
      <div className="property-box">
        <div className="property-image">
          <Slick {...settings} className="property-slider color-6">
            {images.map((image: any, idx: any) => (
              <a
                className={`bg-size tw-relative !tw-bg-cover !tw-bg-center !tw-bg-no-repeat !tw-block`}
                key={idx}
              >
                <Image
                  src={image.url}
                  className="bg-img !tw-hidden"
                  width={image.width}
                  height={image.height}
                  alt=""
                />
              </a>
            ))}
          </Slick>
          <div className="labels-left">
            <div>
              <span className="label label-dark">no fees</span>
            </div>
            <span className="label label-success">open house</span>
          </div>
          <div className="seen-data">
            <Camera className="tw-inline" />
            <span>{images.length}</span>
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
          <span className="font-roboto">{region}</span>
          <a href="single-property-8.html">
            <h3 className="!tw-font-bold !tw-mb-[10px] !tw-text-[calc(18px+(22_-_18)*((100vw-320px)/(1920-320)))] !tw-leading-[1.2] !tw-tracking-[0.03em]">
              {name}
            </h3>
          </a>
          <h6 className="color-6">
            {Number(price).toLocaleString("fr-FR", {
              style: "currency",
              currency: "XOF",
            })}
            *
          </h6>
          <p className="font-roboto">
            {description}
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
              Lits :{beds}
            </li>
            <li>
              <img
                src="https://themes.pixelstrap.com/sheltos/assets/images/svg/icon/bathroom.svg"
                className="img-fluid"
                alt=""
              />
              Toillettes : {baths}
            </li>
            <li>
              <img
                src="https://themes.pixelstrap.com/sheltos/assets/images/svg/icon/square-ruler-tool.svg"
                className="img-fluid ruler-tool"
                alt=""
              />
              M² : {area}
            </li>
          </ul>
          <div className="property-btn d-flex">
            <span>{moment(createdAt).format("LL")}</span>
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
