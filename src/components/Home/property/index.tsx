const PropertySection = () => {
  return (
    <section className="property-section slick-between slick-shadow property-color-6">
      <div className="container">
        <div className="row ratio_landscape">
          <div className="col">
            <div className="title-1 color-6">
              <span className="label label-gradient color-6">Sale</span>
              <h2>Latest For Sale</h2>
              <hr />
            </div>
            <div className="listing-hover-property row">
              <div className="col-xl-4 col-md-6 wow fadeInUp">
                <div className="property-box">
                  <div className="property-image">
                    <a
                      //   style={{
                      //     backgroundImage: `url(${Img1})`,
                      //   }}
                      className="tw-bg-cover tw-bg-[center_center] tw-block tw-bg-[url(/images/1.jpg)] tw-bg-no-repeat bg-size"
                    >
                      <div className="labels-left">
                        <span className="label label-shadow">Sale</span>
                      </div>
                    </a>
                    <div className="bottom-property">
                      <div className="d-flex">
                        <div>
                          <h5>
                            <a href="single-property-6.html">Neverland</a>
                          </h5>
                          <h6>
                            $13,000 <small>/ start from</small>
                          </h6>
                        </div>
                        <button
                          type="button"
                          className="btn btn-gradient color-6 mt-3"
                          onClick={() =>
                            console.log(
                              "document.location='single-property-8.html'"
                            )
                          }
                        >
                          Details
                        </button>
                      </div>
                      <div className="overlay-option">
                        <ul>
                          <li>
                            <span>Beds</span>
                            <h6>2</h6>
                          </li>
                          <li>
                            <span>Baths</span>
                            <h6>1</h6>
                          </li>
                          <li>
                            <span>Balcony</span>
                            <h6>1</h6>
                          </li>
                          <li>
                            <span>Area</span>
                            <h6>
                              120m<sup>2</sup>
                            </h6>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-md-6 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="property-box">
                  <div className="property-image">
                    <a
                      //   style={{
                      //     backgroundImage: `url(${Img2})`,
                      //   }}
                      className="tw-bg-cover tw-block tw-bg-[url('/images/1.jpg')] tw-bg-[center_center] tw-bg-no-repeat bg-size"
                    >
                      {/* <img src="/images/1.jpg" className="bg-img" alt="" /> */}
                      <div className="labels-left">
                        <div>
                          <span className="label label-dark">no fees</span>
                        </div>
                        <span className="label label-success">open house</span>
                      </div>
                    </a>
                    <div className="bottom-property">
                      <div className="d-flex">
                        <div>
                          <h5>
                            <a href="single-property-6.html">Orchard House</a>
                          </h5>
                          <h6>
                            $14,520 <small>/ start from</small>
                          </h6>
                        </div>
                        <button
                          type="button"
                          className="btn btn-gradient color-6 mt-3"
                          onClick={() =>
                            console.log(
                              "document.location='single-property-8.html'"
                            )
                          }
                        >
                          Details
                        </button>
                      </div>
                      <div className="overlay-option">
                        <ul>
                          <li>
                            <span>Beds</span>
                            <h6>2</h6>
                          </li>
                          <li>
                            <span>Baths</span>
                            <h6>1</h6>
                          </li>
                          <li>
                            <span>Balcony</span>
                            <h6>2</h6>
                          </li>
                          <li>
                            <span>Area</span>
                            <h6>
                              480m<sup>2</sup>
                            </h6>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-md-6 wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="property-box">
                  <div className="property-image">
                    <a
                      //   style={{
                      //     backgroundImage: `url(/images/others/1.png)`,
                      //   }}
                      className="tw-bg-cover tw-block tw-bg-[center_center] tw-bg-[url('/images/1.jpg')] tw-bg-no-repeat bg-size"
                    >
                      {/* <img src="/images/3.jpg" className="bg-img" alt="" /> */}
                      <div className="labels-left">
                        <span className="label label-shadow">Sold</span>
                      </div>
                    </a>
                    <div className="bottom-property">
                      <div className="d-flex">
                        <div>
                          <h5>
                            <a href="single-property-6.html">Sea Breezes</a>
                          </h5>
                          <h6>
                            $12,200 <small>/ start from</small>
                          </h6>
                        </div>
                        <button
                          type="button"
                          className="btn btn-gradient color-6 mt-3"
                          onClick={() =>
                            console.log(
                              "document.location='single-property-8.html'"
                            )
                          }
                        >
                          Details
                        </button>
                      </div>
                      <div className="overlay-option">
                        <ul>
                          <li>
                            <span>Beds</span>
                            <h6>2</h6>
                          </li>
                          <li>
                            <span>Baths</span>
                            <h6>1</h6>
                          </li>
                          <li>
                            <span>Balcony</span>
                            <h6>0</h6>
                          </li>
                          <li>
                            <span>Area</span>
                            <h6>
                              220m<sup>2</sup>
                            </h6>
                          </li>
                        </ul>
                      </div>
                    </div>
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

export default PropertySection;
