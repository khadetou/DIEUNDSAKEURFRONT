import React from "react";
import Link from "next/link";

const NotfoundBody = () => {
  return (
    <div className="page-wrapper">
      <div className="page-not-found">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-8 col-sm-10">
              <div className="not-found-img">
                <img
                  src="https://themes.pixelstrap.com/sheltos/assets/images/svg/3.svg"
                  className="img-fluid"
                  alt=""
                />
                <div className="animation-error">
                  <img
                    src="https://themes.pixelstrap.com/sheltos/assets/images/svg/error.svg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-8 col-sm-10">
              <div className="not-found-content">
                <h2>Sorry...This page is gone.</h2>
                <p className="font-roboto light-font">
                  We are sorry but the page you are looking for doesn't exist or
                  has been removed. please check or search again.
                </p>
                <div className="btns">
                  <Link href="/" className="btn btn-pill btn-gradient color-4">
                    go to home page
                  </Link>
                  <Link
                    href="/"
                    className="btn btn-pill btn-dashed color-4 ms-2"
                  >
                    Report problem
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotfoundBody;
