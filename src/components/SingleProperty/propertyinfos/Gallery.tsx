import { useAppSelector } from "hooks/index";
import React, { useEffect, useState, useRef, createRef } from "react";
import Slick, { Settings } from "react-slick";
import Image from "next/image";

const Gallery = () => {
  useEffect(() => {
    document.querySelectorAll(".bg-img").forEach((img) => {
      const src = img.getAttribute("src");
      const parent = img.parentElement;
      parent?.setAttribute("style", `background-image: url(${src})`);
    });
  }, []);
  const { property } = useAppSelector((store) => store.property);
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
    slidesToShow: property.images.length,
    draggable: true,
    slidesToScroll: 1,
    swipeToSlide: true,
    focusOnSelect: true,
  };
  const [nav1, setNav1] = useState<Slick | null>(null);
  const [nav2, setNav2] = useState<Slick | null>(null);
  const refImg = useRef<any[]>(property.images.map((_: any) => createRef()));

  useEffect(() => {
    refImg.current.forEach((children: any) => {
      const child = children.current?.children[0] as HTMLElement;
      child.setAttribute("style", `height: ${child.offsetWidth}px`);
    });
  }, []);

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
            {property.images.map((img: any, key: any) => (
              <div>
                <div
                  className="bg-size tw-bg-cover tw-bg-[center_center] tw-bg-no-repeat tw-block "
                  key={key}
                >
                  <Image
                    src={img.url}
                    width={img.width}
                    height={img.height}
                    className="bg-img !tw-hidden"
                    alt=""
                  />
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
            {property.images.map((img: any, key: any) => (
              <div key={key} ref={refImg.current[key]} className="tw-px-[5px]">
                <Image
                  src={img.url}
                  width={img.width}
                  height={img.height}
                  className={`img-fluid`}
                  alt=""
                />
              </div>
            ))}
          </Slick>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
