import React from "react";

const MyProperties = () => {
  return (
    <div className="col-xl-3 xl-6 col-lg-12 col-md-6">
      <div className="card">
        <div className="card-header pb-0">
          <div className="d-flex">
            <h5>My properties</h5>
            <a href="add-property.html" className="admin">
              + New
            </a>
          </div>
        </div>
        <div className="card-body properties-list">
          <div className="media">
            <img src="/images/property/14.jpg" className="img-fluid" alt="" />
            <div className="media-body">
              <a href="listing.html">
                <h6>Orchard House</h6>
              </a>
              <ul>
                <li>
                  <img
                    src="https://themes.pixelstrap.com/sheltos/assets/images/svg/icon/double-bed.svg"
                    className="img-fluid"
                    alt=""
                  />
                  <span>3</span>
                </li>
                <li>
                  <img
                    src="/images/svg/icon/bathroom.svg"
                    className="img-fluid"
                    alt=""
                  />
                  <span>2</span>
                </li>
                <li>
                  <img
                    src="/images/svg/icon/sofa.svg"
                    className="img-fluid"
                    alt=""
                  />
                  <span>1</span>
                </li>
              </ul>
              <div>
                <span className="light-font">Status: </span>
                <span className="label label-light color-4">Rented</span>
              </div>
            </div>
          </div>
          <div className="media">
            <img src="/images/7.jpg" className="img-fluid" alt="" />
            <div className="media-body">
              <a href="listing.html">
                <h6>Neverland</h6>
              </a>
              <ul>
                <li>
                  <img
                    src="/images/svg/icon/double-bed.svg"
                    className="img-fluid"
                    alt=""
                  />
                  <span>4</span>
                </li>
                <li>
                  <img
                    src="/images/svg/icon/bathroom.svg"
                    className="img-fluid"
                    alt=""
                  />
                  <span>4</span>
                </li>
                <li>
                  <img
                    src="https://themes.pixelstrap.com/sheltos/assets/images/svg/icon/sofa.svg"
                    className="img-fluid"
                    alt=""
                  />
                  <span>2</span>
                </li>
              </ul>
              <div>
                <span className="light-font">Status: </span>
                <span className="label label-light color-4">Rented</span>
              </div>
            </div>
          </div>
          <div className="media">
            <img src="/images/8.jpg" className="img-fluid" alt="" />
            <div className="media-body">
              <a href="listing.html">
                <h6>Sea Breezes</h6>
              </a>
              <ul>
                <li>
                  <img
                    src="https://themes.pixelstrap.com/sheltos/assets/images/svg/icon/double-bed.svg"
                    className="img-fluid"
                    alt=""
                  />
                  <span>3</span>
                </li>
                <li>
                  <img
                    src="https://themes.pixelstrap.com/sheltos/assets/images/svg/icon/bathroom.svg"
                    className="img-fluid"
                    alt=""
                  />
                  <span>2</span>
                </li>
                <li>
                  <img
                    src="https://themes.pixelstrap.com/sheltos/assets/images/svg/icon/sofa.svg"
                    className="img-fluid"
                    alt=""
                  />
                  <span>0</span>
                </li>
              </ul>
              <div>
                <span className="light-font">Status: </span>
                <span className="label label-light color-3">Listed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProperties;
