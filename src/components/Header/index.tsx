import React, { FC, useEffect, useState } from "react";
import HeaderRight from "./header-right";
import NavBar from "./nav";
import DSK from "/public/images/logo/dsksvg.svg";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";
import Logo from "/public/images/logo/2.png";

interface HeaderProps {
  className?: boolean;
}

const Header: FC<HeaderProps> = ({ className }) => {
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery({
    query: "(max-width: 1199px)",
  });
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    setMobile(isMobile);
  }, [isMobile]);
  return (
    <header className={`${className ? "inner-page" : "header-1 header-6"}`}>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="menu">
              <div className="brand-logo tw-max-w-[181px] tw-w-full">
                <Link href="/">
                  <Image
                    src={DSK}
                    alt=""
                    className="img-fluid after:tw-opacity-[0.3] after:tw-shadow-[-5.15px_8.572px_25px] after:tw-shadow-[#7e0000]"
                  />
                </Link>
              </div>
              <NavBar open={open} setOpen={setOpen} />
              <HeaderRight />
            </div>
          </div>
        </div>
      </div>
      {mobile && (
        <div
          className={`bg-overlay ${open ? "active" : ""}`}
          onClick={() => setOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Header;

Header.defaultProps = {
  className: false,
};
