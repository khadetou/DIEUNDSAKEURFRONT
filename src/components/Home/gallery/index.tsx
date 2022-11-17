import React from "react";

const Gallery = () => {
  return (
    <section className="my-gallery gallery-6">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="title-1 color-6">
              <span className="label label-gradient color-6">city</span>
              <h2>Find Properties in These Cities</h2>
              <hr />
            </div>
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-5 col-sm-6 wow fadeInUp">
                <div className="find-cities bg-size tw-bg-cover tw-bg-[center_center] tw-bg-[url(/images/property/8.jpg)] tw-block">
                  {/* <img src="/images/property/8.jpg" className="bg-img" alt="" /> */}
                  <div className="citi-overlay">
                    <div>
                      <h4>12+ Property</h4>
                      <h2>Dubai</h2>
                      <h6 className="font-roboto">
                        Many Property in this city
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-5 col-sm-6 wow fadeInUp">
                <div className="find-cities bg-size tw-bg-cover tw-bg-[center_center] tw-bg-[url(/images/others/1.jpg)] tw-block">
                  {/* <img src="/images/others/1.jpg" className="bg-img" alt="" /> */}
                  <div className="citi-overlay">
                    <div>
                      <h4>5+ Property</h4>
                      <h2>U.s.a</h2>
                      <h6 className="font-roboto">Many Land in this city</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-8 col-md-7 wow fadeInUp">
                <div className="find-cities bg-size tw-bg-cover tw-bg-[center_center] tw-bg-[url(/images/3.jpg)] tw-block">
                  {/* <img src="/images/3.jpg" className="bg-img" alt="" /> */}
                  <div className="citi-overlay">
                    <div>
                      <h4>6+ Property</h4>
                      <h2>New York</h2>
                      <h6 className="font-roboto">Many Spaces in this city</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-8 col-md-7 wow fadeInUp">
                <div className="find-cities bg-size tw-bg-cover tw-bg-[center_center] tw-bg-[url(/images/property/6.jpg)] tw-block">
                  {/* <img src="/images/property/6.jpg" className="bg-img" alt="" /> */}
                  <div className="citi-overlay">
                    <div>
                      <h4>8+ Property</h4>
                      <h2>Brazil</h2>
                      <h6 className="font-roboto">Many Flat in this city</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-5 col-sm-6 wow fadeInUp">
                <div className="find-cities bg-size tw-bg-cover tw-bg-[center_center] tw-bg-[url(/images/1.jpg)] tw-block">
                  {/* <img src="/images/1.jpg" className="bg-img" alt="" /> */}
                  <div className="citi-overlay">
                    <div>
                      <h4>10+ Property</h4>
                      <h2>Dubai</h2>
                      <h6 className="font-roboto">Many Land in this city</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-5 col-sm-6 wow fadeInUp">
                <div className="find-cities bg-size tw-bg-cover tw-bg-[center_center] tw-bg-[url(/images/property/7.jpg)] tw-block">
                  {/* <img src="/images/property/7.jpg" className="bg-img" alt="" /> */}
                  <div className="citi-overlay">
                    <div>
                      <h4>12+ Property</h4>
                      <h2>France</h2>
                      <h6 className="font-roboto">Many Spaces in this city</h6>
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

export default Gallery;
