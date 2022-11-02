import React from "react";
import HeaderRight from "./header-right";
import NavBar from "./nav";

const Header = () => {
  return (
    <header className="header-1 header-6">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="menu">
              <div className="brand-logo">
                <a href="https://themes.pixelstrap.com/sheltos/index.html">
                  <img src="/images/logo/6.png" alt="" className="img-fluid" />
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
