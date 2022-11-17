import React, { useEffect, useRef, useState } from "react";
import Slick, { Settings } from "react-slick";

const Gallery = () => {
  useEffect(() => {
    document.querySelectorAll(".bg-img").forEach((img) => {
      const src = img.getAttribute("src");
      const parent = img.parentElement;
      parent?.setAttribute("style", `background-image: url(${src})`);
    });
  }, []);

  const images = [
    "/images/property/4.jpg",
    "/images/property/3.jpg",
    "/images/property/14.jpg",
    "/images/property/11.jpg",
    "/images/property/12.jpg",
    "/images/property/6.jpg",
    "/images/property/7.jpg",
    "/images/property/8.jpg",
    "/images/property/1.jpg",
  ];
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    draggable: true,
    slidesToScroll: 1,
  };
  const settingsNav: Settings = {
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 8,
    draggable: true,
    slidesToScroll: 1,
    swipeToSlide: true,
    focusOnSelect: true,
  };
  const [nav1, setNav1] = useState<Slick | null>(null);
  const [nav2, setNav2] = useState<Slick | null>(null);

  return (
    <div className="desc-box">
      <div className="page-section ratio3_2" id="gallery">
        <h4 className="content-title">gallery</h4>
        <div className="single-gallery">
          <Slick
            asNavFor={nav2!}
            ref={(slider) => setNav1(slider)}
            {...settings}
            className="gallery-for"
          >
            {images.map((img, key) => (
              <div>
                <div className="bg-size " key={key}>
                  <img src={img} className="bg-img !tw-hidden" alt="" />
                </div>
              </div>
            ))}
          </Slick>
          <Slick
            asNavFor={nav1!}
            ref={(slider) => setNav2(slider)}
            {...settingsNav}
            className="gallery-nav "
          >
            {images.map((img, key) => (
              <div key={key} className="tw-px-[5px]">
                <img src={img} className="img-fluid " alt="" />
              </div>
            ))}
          </Slick>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
