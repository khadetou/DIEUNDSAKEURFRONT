import { useEffect, useState } from "react";
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
    <div className="row">
      <div className="col-sm-12">
        <div className="single-gallery mb-4">
          <div className="blog-sidebar modal-form">
            <div className="filter-cards">
              <div className="advance-card">
                <h6>Request exploration</h6>
                <div className="category-property">
                  <form>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email Address"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        placeholder="phone number"
                        className="form-control"
                        name="mobnumber"
                        id="tbNumbers"
                        // oninput="maxLengthCheck(this)"
                        type="tel"
                        // onkeypress="javascript:return isNumber(event)"
                        maxLength={9}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        placeholder="Message"
                        className="form-control"
                        rows={3}
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      onClick={() =>
                        console.log("document.location='user-listing.html'")
                      }
                      className="btn btn-gradient color-2 btn-block btn-pill"
                    >
                      Submit Request
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
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
