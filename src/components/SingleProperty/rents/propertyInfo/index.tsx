import Gallery from "./Gallery";
import DatePicker from "react-datepicker";
import { useEffect, useState } from "react";
import moment from "moment";
import { useMediaQuery } from "react-responsive";

const PropertyInfoRent = () => {
  const [checkInDate, setCheckInDate] = useState<Date | null>(new Date());
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(new Date());
  const [daysOfStay, setDaysOfStay] = useState(0);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const [isNotLaptop, setIsNotLaptop] = useState(false);
  const excludeDates = [];
  const onChange = (dates: [Date | null, Date | null]) => {
    const [checkInDate, checkOutDate] = dates;
    console.log(checkInDate);
    setCheckInDate(checkInDate);
    setCheckOutDate(checkOutDate);
    if (checkInDate && checkOutDate) {
      const date1: any = new Date(checkOutDate);
      const date2: any = new Date(checkInDate);
      const days = Math.floor((date1 - date2) / 86400000 + 1);
      setDaysOfStay(days);
      console.log(days);
    }
  };
  useEffect(() => {
    setIsNotLaptop(isTabletOrMobile);
  }, [isTabletOrMobile]);
  return (
    <section className="single-property mt-0 pt-0">
      <div className="container">
        <div className="row ratio_55">
          <div className="col-xl-9 col-lg-8">
            <div className="description-section tab-description">
              <div className="description-details">
                <Gallery />
                <div className="desc-box">
                  <ul
                    className="nav nav-tabs line-tab"
                    id="top-tab"
                    role="tablist"
                  >
                    <li className="nav-item">
                      <a
                        data-bs-toggle="tab"
                        className="nav-link active"
                        href="#about"
                      >
                        about
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        data-bs-toggle="tab"
                        className="nav-link"
                        href="#feature"
                      >
                        feature
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        data-bs-toggle="tab"
                        className="nav-link"
                        href="#video"
                      >
                        video
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        data-bs-toggle="tab"
                        className="nav-link"
                        href="#floor_plan"
                      >
                        Floor plan
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        data-bs-toggle="tab"
                        className="nav-link"
                        href="#location-map"
                      >
                        location
                      </a>
                    </li>
                  </ul>
                  <div className=" tab-content" id="top-tabContent">
                    <div
                      className="tab-pane fade show active about page-section"
                      id="about"
                    >
                      <h4 className="content-title">
                        Property Details
                        <a
                          href="https://www.google.com/maps/place/New+York,+NY,+USA/@40.697488,-73.979681,8z/data=!4m5!3m4!1s0x89c24fa5d33f083b:0xc80b8f06e177fe62!8m2!3d40.7127753!4d-74.0059728?hl=en"
                          target="_blank"
                        >
                          <i className="fa fa-map-marker-alt"></i> view on map
                        </a>
                      </h4>
                      <div className="row">
                        <div className="col-md-6 col-xl-4">
                          <ul className="property-list-details">
                            <li>
                              <span>Property Type :</span> House
                            </li>
                            <li>
                              <span>Property ID :</span> ZOEA245
                            </li>
                            <li>
                              <span>Property status :</span> For sale
                            </li>
                            <li>
                              <span>Operating Since :</span> 2008
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-6 col-xl-4">
                          <ul className="property-list-details">
                            <li>
                              <span>Price :</span> $ 1,50,000
                            </li>
                            <li>
                              <span>Property Size :</span> 1730 sq / ft
                            </li>
                            <li>
                              <span>Balcony :</span> 2
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-6 col-xl-4">
                          <ul className="property-list-details">
                            <li>
                              <span>City :</span> Newyork
                            </li>
                            <li>
                              <span>Bedrooms :</span> 8
                            </li>
                            <li>
                              <span>Bathrooms :</span> 4
                            </li>
                          </ul>
                        </div>
                      </div>
                      <h4 className="content-title mt-4">Attachments</h4>
                      <a href="javascript:void(0)" className="attach-file">
                        <i className="far fa-file-pdf"></i>Demo Property
                        Document{" "}
                      </a>
                      <h4 className="mt-4">Property Brief</h4>
                      <div className="row">
                        <div className="col-sm-4">
                          <p className="font-roboto">
                            Residences can be classified by and how they are
                            connected residences and land. Different types of
                            housing tenure can be used for the same physical
                            type.
                          </p>
                        </div>
                        <div className="col-sm-4">
                          <p className="font-roboto">
                            Connected residences owned by a single entity leased
                            out, or owned separately with an agreement covering
                            the relationship between units and common areas.
                          </p>
                        </div>
                        <div className="col-sm-4">
                          <p className="font-roboto">
                            Residential real estate may contain either a single
                            family or multifamily structure that is available
                            for occupation or for non-business purposes.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade page-section" id="feature">
                      <h4 className="content-title">features</h4>
                      <div className="single-feature row">
                        <div className="col-xl-3 col-6">
                          <ul>
                            <li>
                              <i className="fas fa-wifi"></i> Free Wi-Fi
                            </li>
                            <li>
                              <i className="fas fa-hands"></i> Elevator Lift
                            </li>
                            <li>
                              <i className="fas fa-power-off"></i> Power Backup
                            </li>
                            <li>
                              <i className="fas fa-monument"></i> Laundry
                              Service
                            </li>
                          </ul>
                        </div>
                        <div className="col-xl-3 col-6">
                          <ul>
                            <li>
                              <i className="fas fa-user-shield"></i> Security
                              Guard
                            </li>
                            <li>
                              <i className="fas fa-video"></i> CCTV
                            </li>
                            <li>
                              <i className="fas fa-door-open"></i> Emergency
                              Exit
                            </li>
                            <li>
                              <i className="fas fa-first-aid"></i> Doctor On
                              Call
                            </li>
                          </ul>
                        </div>
                        <div className="col-xl-3 col-6">
                          <ul>
                            <li>
                              <i className="fas fa-shower"></i> Shower
                            </li>
                            <li>
                              <i className="fas fa-car"></i> free Parking in the
                              area
                            </li>
                            <li>
                              <i className="fas fa-fan"></i> Air Conditioning
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade page-section ratio3_2"
                      id="gallery"
                    >
                      <h4 className="content-title">gallery</h4>
                    </div>
                    <div
                      className="tab-pane fade page-section ratio_40"
                      id="video"
                    >
                      <h4 className="content-title">video</h4>
                      <div className="play-bg-image">
                        <div className="bg-size">
                          <img
                            src="/images/property/11.jpg"
                            className="bg-img"
                            alt=""
                          />
                        </div>
                        <div className="icon-video">
                          <a
                            href="javascript:void(0)"
                            data-bs-toggle="modal"
                            data-bs-target="#videomodal"
                          >
                            <i className="fas fa-play"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade page-section" id="floor_plan">
                      <h4 className="content-title">Floor plan</h4>
                      <img
                        src="/images/single-property/floor-plan.png"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div
                      className="tab-pane fade page-section"
                      id="location-map"
                    >
                      <h4 className="content-title">location</h4>
                      <iframe
                        title="realestate location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.1583091352!2d-74.11976373946229!3d40.69766374859258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sin!4v1563449626439!5m2!1sen!2sin"
                        allowFullScreen={true}
                      ></iframe>
                    </div>
                  </div>
                </div>
                <div className="desc-box">
                  <div className="page-section">
                    <h4 className="content-title  xl:!tw-ml-[158px] !tw-text-xl">
                      {daysOfStay} nuits à nGapparou
                    </h4>
                    <p className=" xl:!tw-ml-[158px] !tw-text-sm !tw-font-light">{`${moment(
                      checkInDate
                    ).format("ll")} - ${moment(checkOutDate).format("ll")}`}</p>
                    <DatePicker
                      className="!tw-w-full !tw-h-[auto]"
                      onChange={onChange}
                      selected={checkInDate}
                      endDate={checkOutDate}
                      startDate={checkInDate}
                      minDate={new Date()}
                      selectsRange
                      monthsShown={isNotLaptop ? 1 : 2}
                      inline
                    />
                  </div>
                </div>
                <div className="desc-box">
                  <div className="page-section">
                    <h4 className="content-title">Reviews</h4>
                    <div className="review">
                      <div className="review-box">
                        <div className="media">
                          <img
                            src="/images/avatar/3.jpg"
                            className="img-70"
                            alt=""
                          />
                          <div className="media-body">
                            <h6>Olive Yew</h6>
                            <p>Sep 13, 2022</p>
                            <p className="mb-0">
                              The location, view from the rooms are just
                              awesome. Very cool landscaping has been done
                              Around the hotel. There are small activities that
                              you can indulge with your family.
                            </p>
                          </div>
                          <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </div>
                        </div>
                      </div>
                      <div className="review-box review-child">
                        <div className="media">
                          <img
                            src="/images/avatar/4.jpg"
                            className="img-70"
                            alt=""
                          />
                          <div className="media-body">
                            <h6>Allie Grater</h6>
                            <p>Sep 25, 2022</p>
                            <p className="mb-0">
                              We were there for 3 nights and hotel was too good.
                              Greenery was flaunting everywhere. There were
                              games kept for our entertainment.
                            </p>
                          </div>
                          <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                          </div>
                        </div>
                      </div>
                      <div className="review-box">
                        <div className="media">
                          <img
                            src="/images/avatar/2.jpg"
                            className="img-70"
                            alt=""
                          />
                          <div className="media-body">
                            <h6>Walter Melon</h6>
                            <p>Oct 20, 2022</p>
                            <p className="mb-0">
                              There are small activities that you can indulge
                              with your family. Very cool landscaping has been
                              done Around the hotel. The location, view from the
                              rooms are just awesome.
                            </p>
                          </div>
                          <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <h4 className="content-title">Write a Review</h4>
                    <form className="review-form">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Name"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          placeholder="Comment"
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        onClick={() =>
                          console.log(
                            "document.location='submit-property.html'"
                          )
                        }
                        className="btn btn-gradient color-2 btn-pill"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="property-section p-t-40">
              <div className="title-3 text-start inner-title">
                <h2>Related Properties</h2>
              </div>
              <div className="row ratio_65">
                <div className="col-12 property-grid-2">
                  <div className="property-2 row column-sm zoom-gallery property-label property-grid">
                    <div className="col-md-6">
                      <div className="property-box">
                        <div className="property-image">
                          <div className="property-slider">
                            <a href="javascript:void(0)">
                              <img
                                src="/images/property/10.jpg"
                                className="bg-img"
                                alt=""
                              />
                            </a>
                            <a href="javascript:void(0)">
                              <img
                                src="/images/property/5.jpg"
                                className="bg-img"
                                alt=""
                              />
                            </a>
                            <a href="javascript:void(0)">
                              <img
                                src="/images/property/3.jpg"
                                className="bg-img"
                                alt=""
                              />
                            </a>
                            <a href="javascript:void(0)">
                              <img
                                src="/images/property/4.jpg"
                                className="bg-img"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="labels-left">
                            <div>
                              <span className="label label-shadow">sale</span>
                            </div>
                          </div>
                          <div className="seen-data">
                            <i data-feather="camera"></i>
                            <span>25</span>
                          </div>
                          <div className="overlay-property-box">
                            <a
                              href="compare.html"
                              className="effect-round"
                              data-bs-toggle="tooltip"
                              data-bs-placement="left"
                              title="Compare"
                            >
                              <i data-feather="shuffle"></i>
                            </a>
                            <a
                              href="user-favourites.html"
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
                          <a href="single-property-8.html">
                            <h3>Little Acorn Farm</h3>
                          </a>
                          <h6>$6558.00*</h6>
                          <p className="font-roboto">
                            Real estate is divided into several categories,
                            including residential property, commercial property
                            and industrial property.
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
                                  "document.location='single-property-8.html'"
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
                    <div className="col-md-6">
                      <div className="property-box">
                        <div className="property-image">
                          <div className="property-slider">
                            <a href="javascript:void(0)">
                              <img
                                src="/images/property/14.jpg"
                                className="bg-img"
                                alt=""
                              />
                            </a>
                            <a href="javascript:void(0)">
                              <img
                                src="/images/property/6.jpg"
                                className="bg-img"
                                alt=""
                              />
                            </a>
                            <a href="javascript:void(0)">
                              <img
                                src="/images/property/10.jpg"
                                className="bg-img"
                                alt=""
                              />
                            </a>
                            <a href="javascript:void(0)">
                              <img
                                src="/images/property/9.jpg"
                                className="bg-img"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="labels-left">
                            <div>
                              <span className="label label-dark">no fees</span>
                            </div>
                            <span className="label label-success">
                              open house
                            </span>
                          </div>
                          <div className="seen-data">
                            <i data-feather="camera"></i>
                            <span>10</span>
                          </div>
                          <div className="overlay-property-box">
                            <a
                              href="compare.html"
                              className="effect-round"
                              data-bs-toggle="tooltip"
                              data-bs-placement="left"
                              title="Compare"
                            >
                              <i data-feather="shuffle"></i>
                            </a>
                            <a
                              href="user-favourites.html"
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
                          <span className="font-roboto">brazil</span>
                          <a href="single-property-8.html">
                            <h3>Hidden Spring Hideway</h3>
                          </a>
                          <h6>$9554.00*</h6>
                          <p className="font-roboto">
                            An interior designer is someone who
                            plans,researches,coordinates,management and manages
                            such enhancement projects.
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
                              onClick={() =>
                                console.log(
                                  "document.location='single-property-8.html'"
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
                    <div className="col-md-6">
                      <div className="property-box">
                        <div className="property-image">
                          <div className="property-slider">
                            <a href="javascript:void(0)">
                              <img
                                src="/images/property/12.jpg"
                                className="bg-img"
                                alt=""
                              />
                            </a>
                            <a href="javascript:void(0)">
                              <img
                                src="/images/property/10.jpg"
                                className="bg-img"
                                alt=""
                              />
                            </a>
                            <a href="javascript:void(0)">
                              <img
                                src="/images/property/6.jpg"
                                className="bg-img"
                                alt=""
                              />
                            </a>
                            <a href="javascript:void(0)">
                              <img
                                src="/images/property/9.jpg"
                                className="bg-img"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="labels-left">
                            <div>
                              <span className="label label-shadow">sale</span>
                            </div>
                          </div>
                          <div className="seen-data">
                            <i data-feather="camera"></i>
                            <span>25</span>
                          </div>
                          <div className="overlay-property-box">
                            <a
                              href="compare.html"
                              className="effect-round"
                              data-bs-toggle="tooltip"
                              data-bs-placement="left"
                              title="Compare"
                            >
                              <i data-feather="shuffle"></i>
                            </a>
                            <a
                              href="user-favourites.html"
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
                          <span className="font-roboto">usa</span>
                          <a href="single-property-8.html">
                            <h3>Home in Merrick Way</h3>
                          </a>
                          <h6>$4513.00*</h6>
                          <p className="font-roboto">
                            The most common and most absolute type of estate,
                            the tenant enjoys the greatest discretion over the
                            disposal of the property.
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
                            <span>January 6, 2022</span>
                            <button
                              type="button"
                              onClick={() =>
                                console.log(
                                  "document.location='single-property-8.html'"
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
                    <div className="col-md-6">
                      <div className="property-box">
                        <div className="property-image">
                          <div className="property-slider">
                            <a href="javascript:void(0)">
                              <img
                                src="/images/property/16.jpg"
                                className="bg-img"
                                alt=""
                              />
                            </a>
                            <a href="javascript:void(0)">
                              <img
                                src="/images/property/5.jpg"
                                className="bg-img"
                                alt=""
                              />
                            </a>
                            <a href="javascript:void(0)">
                              <img
                                src="/images/property/4.jpg"
                                className="bg-img"
                                alt=""
                              />
                            </a>
                            <a href="javascript:void(0)">
                              <img
                                src="/images/property/3.jpg"
                                className="bg-img"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="labels-left">
                            <div>
                              <span className="label label-dark">no fees</span>
                            </div>
                            <span className="label label-success">
                              open house
                            </span>
                          </div>
                          <div className="seen-data">
                            <i data-feather="camera"></i>
                            <span>25</span>
                          </div>
                          <div className="overlay-property-box">
                            <a
                              href="compare.html"
                              className="effect-round"
                              data-bs-toggle="tooltip"
                              data-bs-placement="left"
                              title="Compare"
                            >
                              <i data-feather="shuffle"></i>
                            </a>
                            <a
                              href="user-favourites.html"
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
                          <span className="font-roboto">brazil</span>
                          <a href="single-property-8.html">
                            <h3>Magnolia Ranch</h3>
                          </a>
                          <h6>$9554.00*</h6>
                          <p className="font-roboto">
                            Elegant retreat in a quiet Coral Gables setting.
                            This home provides wonderful entertaining spaces
                            with a chef kitchen opening…
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
                            <span>May 14, 2022</span>
                            <button
                              type="button"
                              onClick={() =>
                                console.log(
                                  "document.location='single-property-8.html'"
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
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4">
            <div className="left-sidebar sticky-cls single-sidebar">
              <div className="filter-cards">
                <div className="advance-card">
                  <h6>Contact Info</h6>
                  <div className="category-property">
                    <div className="agent-info">
                      <div className="media">
                        <img
                          src="/images/testimonial/3.png"
                          className="img-50"
                          alt=""
                        />
                        <div className="media-body ms-2">
                          <h6>Jonathan Scott</h6>
                          <p>Contact@gmail.com</p>
                        </div>
                      </div>
                    </div>
                    <ul>
                      <li>
                        <i data-feather="map-pin" className="me-2"></i>A-32,
                        Albany, Newyork.
                      </li>
                      <li>
                        <i data-feather="phone-call" className="me-2"></i>(+066)
                        518 - 457 - 5181
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="advance-card">
                  <h6>filter</h6>
                  <div className="row gx-2">
                    <div className="col-12">
                      <div className="dropdown">
                        <span
                          className="dropdown-toggle font-rubik"
                          data-bs-toggle="dropdown"
                        >
                          <span>Property Status</span>{" "}
                          <i className="fas fa-angle-down"></i>
                        </span>
                        <div className="dropdown-menu text-start">
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            Property Status
                          </a>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            For Rent
                          </a>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            For Sale
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="dropdown">
                        <span
                          className="dropdown-toggle font-rubik"
                          data-bs-toggle="dropdown"
                        >
                          <span>Property Type</span>{" "}
                          <i className="fas fa-angle-down"></i>
                        </span>
                        <div className="dropdown-menu text-start">
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            Property Type
                          </a>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            Apartment
                          </a>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            Family House
                          </a>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            Cottage
                          </a>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            Condominium
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="dropdown">
                        <span
                          className="dropdown-toggle font-rubik"
                          data-bs-toggle="dropdown"
                        >
                          <span>Property Location</span>{" "}
                          <i className="fas fa-angle-down"></i>
                        </span>
                        <div className="dropdown-menu text-start">
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            Property Location
                          </a>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            Austria
                          </a>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            Brazil
                          </a>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            New york
                          </a>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            USA
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="dropdown">
                        <span
                          className="dropdown-toggle font-rubik"
                          data-bs-toggle="dropdown"
                        >
                          <span>Max Rooms</span>{" "}
                          <i className="fas fa-angle-down"></i>
                        </span>
                        <div className="dropdown-menu text-start">
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            Max Rooms
                          </a>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            1
                          </a>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            2
                          </a>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            3
                          </a>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            4
                          </a>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            5
                          </a>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            6
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="dropdown">
                        <span
                          className="dropdown-toggle font-rubik"
                          data-bs-toggle="dropdown"
                        >
                          <span>Bed</span>
                          <i className="fas fa-angle-down"></i>
                        </span>
                        <div className="dropdown-menu text-start">
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            Bed
                          </a>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            1
                          </a>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            2
                          </a>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            3
                          </a>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            4
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="dropdown">
                        <span
                          className="dropdown-toggle font-rubik"
                          data-bs-toggle="dropdown"
                        >
                          <span>Bath</span>{" "}
                          <i className="fas fa-angle-down"></i>
                        </span>
                        <div className="dropdown-menu text-start">
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            Bath
                          </a>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            1
                          </a>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            2
                          </a>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            3
                          </a>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            4
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="dropdown">
                        <span
                          className="dropdown-toggle font-rubik"
                          data-bs-toggle="dropdown"
                        >
                          <span>Agencies</span>{" "}
                          <i className="fas fa-angle-down"></i>
                        </span>
                        <div className="dropdown-menu text-start">
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            Agencies
                          </a>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            Lincoln
                          </a>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            Blue Sky
                          </a>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            Zephyr
                          </a>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            Premiere
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="price-range">
                        <label htmlFor="amount">Price : </label>
                        <input type="text" id="amount" readOnly />
                        <div id="slider-range" className="theme-range-2"></div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="price-range">
                        <label htmlFor="amount">Area : </label>
                        <input type="text" id="amount1" readOnly />
                        <div id="slider-range1" className="theme-range-2"></div>
                      </div>
                    </div>
                    <div className="col-12">
                      <a
                        href="list-left-sidebar.html"
                        className="btn btn-gradient color-2 btn-block btn-pill mt-2"
                      >
                        Search{" "}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="advance-card feature-card">
                  <h6>Featured</h6>
                  <div className="feature-slider">
                    <div>
                      <img
                        src="/images/property/4.jpg"
                        className="bg-img"
                        alt=""
                      />
                      <div className="bottom-feature">
                        <h5>Neverland</h5>
                        <h6>
                          $13,000 <small>/ start from</small>
                        </h6>
                      </div>
                    </div>
                    <div>
                      <img
                        src="/images/property/16.jpg"
                        className="bg-img"
                        alt=""
                      />
                      <div className="bottom-feature">
                        <h5>Neverland</h5>
                        <h6>
                          $13,000 <small>/ start from</small>
                        </h6>
                      </div>
                    </div>
                    <div>
                      <img
                        src="/images/property/14.jpg"
                        className="bg-img"
                        alt=""
                      />
                      <div className="bottom-feature">
                        <h5>Neverland</h5>
                        <h6>
                          $13,000 <small>/ start from</small>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="labels-left">
                    <span className="label label-success">featured</span>
                  </div>
                </div>
                <div className="advance-card">
                  <h6>Recently Added</h6>
                  <div className="recent-property">
                    <ul>
                      <li>
                        <div className="media">
                          <img
                            src="/images/property/9.jpg"
                            className="img-fluid"
                            alt=""
                          />
                          <div className="media-body">
                            <h5>Sea Breezes</h5>
                            <span>
                              $9800 / <span>Month</span>
                            </span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="media">
                          <img
                            src="/images/property/10.jpg"
                            className="img-fluid"
                            alt=""
                          />
                          <div className="media-body">
                            <h5>Orchard House</h5>
                            <span>
                              $7500 / <span>Month</span>
                            </span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="media">
                          <img
                            src="/images/property/11.jpg"
                            className="img-fluid"
                            alt=""
                          />
                          <div className="media-body">
                            <h5>Neverland</h5>
                            <span>
                              $5000 / <span>Month</span>
                            </span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="advance-card">
                  <h6>Mortgage</h6>
                  <div className="category-property">
                    <form>
                      <div className="input-group mb-3">
                        <span className="input-group-text">$</span>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Loan Amount"
                          required
                        />
                      </div>
                      <div className="input-group mb-3">
                        <span className="input-group-text">$</span>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Down Payment"
                          required
                        />
                      </div>
                      <div className="input-group mb-3">
                        <span className="input-group-text">%</span>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Rate of Interest"
                          required
                        />
                      </div>
                      <div className="input-group mb-3">
                        <span className="input-group-text">$</span>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Number Of years"
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-gradient color-2 btn-block btn-pill"
                      >
                        Calculate
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyInfoRent;
