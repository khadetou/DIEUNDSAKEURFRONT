import React from "react";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 footer-copyright">
            <p className="mb-0">
              Copyright 2022 © Sheltos All rights reserved.
            </p>
          </div>
          <div className="col-md-6">
            <p className="float-end mb-0 tw-flex tw-items-center">
              Developed with <FaHeart className="font-danger tw-ml-1" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
