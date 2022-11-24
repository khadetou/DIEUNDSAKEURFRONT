import { useAppSelector } from "hooks/index";
import React, { useEffect } from "react";
import Slick, { Settings } from "react-slick";
import Image from "next/image";
import Doublebed from "/public/images/svg/icon/double-bed.svg";
import Bathroom from "/public/images/svg/icon/bathroom.svg";
import Sofa from "/public/images/svg/icon/sofa.svg";
import Square from "/public/images/svg/icon/square-ruler-tool.svg";
import Garbage from "/public/images/svg/icon/garage.svg";

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
  const { property } = useAppSelector((store) => store.property);
  return (
    <section className="ratio_40 breadcrumb-section p-0 single-property-images">
      <Slick {...settings} className="main-property-slider arrow-image">
        {property.images.map((image: any, idx: any) => (
          <div key={idx}>
            <div className="bg-size tw-bg-cover tw-bg-[center_center] tw-bg-no-repeat tw-block">
              <Image
                src={image.url}
                width={image.width}
                height={image.height}
                className="bg-img !tw-hidden"
                alt=""
              />
            </div>
          </div>
        ))}
      </Slick>
      <div className="single-property-section">
        <div className="container">
          <div className="single-title">
            <div className="left-single">
              <div className="d-flex">
                <h2 className="mb-0 !tw-text-[30px] !tw-font-bold !tw-capitalize">
                  {property.name}
                </h2>
                <span>
                  <span className="label label-shadow ms-2">A Vendre</span>
                </span>
              </div>
              <p className="mt-2">{property.address}</p>
              <ul>
                <li>
                  <div>
                    <Image src={Doublebed} className="img-fluid" alt="" />
                    <span>{property.beds} Lits</span>
                  </div>
                </li>
                <li>
                  <div>
                    <Image src={Bathroom} className="img-fluid" alt="" />
                    <span>{property.baths} Toilettes</span>
                  </div>
                </li>
                <li>
                  <div>
                    <Image src={Sofa} className="img-fluid" alt="" />
                    <span>{property.rooms} Chambres</span>
                  </div>
                </li>
                <li>
                  <div>
                    <Image
                      src={Square}
                      className="img-fluid ruler-tool"
                      alt=""
                    />
                    <span>{property.area} M²</span>
                  </div>
                </li>
              </ul>
              <div className="share-buttons">
                <div className="d-inline-block">
                  <a className="btn btn-gradient btn-pill color-2">
                    <i className="far fa-share-square"></i>
                    Partager
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
                <a className="btn btn-dashed btn-pill color-2 ms-md-2 ms-1 save-btn">
                  <i className="far fa-heart"></i>
                  Enregistrer
                </a>
                <a
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
              <h2 className="price !tw-text-[30px] !tw-font-bold !tw-capitalize">
                {Number(property.price).toLocaleString("fr-FR", {
                  style: "currency",
                  currency: "XOF",
                })}{" "}
                <span>/ start From</span>
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
