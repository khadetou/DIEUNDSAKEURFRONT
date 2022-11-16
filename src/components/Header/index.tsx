import React from "react";
import HeaderRight from "./header-right";
import NavBar from "./nav";
import DSK from "/public/images/logo/dsksvg.svg";
import Image from "next/image";

const Header = () => {
  return (
    <header className="header-1 header-6">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="menu">
              <div className="brand-logo">
                <a href="https://themes.pixelstrap.com/sheltos/index.html">
                  <Image
                    src={DSK}
                    alt=""
                    className="img-fluid after:tw-opacity-[0.3] after:tw-shadow-[-5.15px_8.572px_25px] after:tw-shadow-[#7e0000]"
                  />
                </a>
              </div>
              <NavBar />
              <HeaderRight />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
