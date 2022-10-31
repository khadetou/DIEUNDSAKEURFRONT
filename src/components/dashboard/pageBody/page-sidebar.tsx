import { Dispatch, FC, useState } from "react";
import {
  Airplay,
  BarChart2,
  ChevronsLeft,
  MapPin,
  CreditCard,
} from "react-feather";
import { FaAngleRight } from "react-icons/fa";

import Agents from "./dropItems/Agents";
import Authentication from "./dropItems/Authentication";
import ManageUsers from "./dropItems/ManageUsers";
import Properties from "./dropItems/Properties";
import Types from "./dropItems/Types";
interface PageSidebarProps {
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
  isTabletOrMobile: boolean;
}

const PageSidebar: FC<PageSidebarProps> = ({
  open,
  setOpen,
  isTabletOrMobile,
}) => {
  // REACT USESTATES

  const [active, setActive] = useState({
    properties: false,
    manage: false,
    agence: false,
    auth: false,
    type: false,
  });
  // FUNCTIONS

  return (
    <div
      className={`page-sidebar ${isTabletOrMobile && "close_icon"} ${
        open && "close_icon"
      } `}
    >
      <div className="logo-wrap">
        <a href="index.html">
          <img
            src="/images/logo/4.png"
            className="img-fluid for-light"
            alt=""
          />
          <img src="/images/logo/9.png" className="img-fluid for-dark" alt="" />
        </a>
        <div className="back-btn d-lg-none d-inline-block">
          <ChevronsLeft />
        </div>
      </div>
      <div className="main-sidebar">
        <div className="user-profile">
          <div className="media">
            <div className="change-pic">
              <img src="/images/avatar/3.jpg" className="img-fluid" alt="" />
            </div>
            <div className="media-body">
              <a href="user-profile.html">
                <h6>Zack Lee</h6>
              </a>
              <span className="font-roboto">zackle@gmail.com</span>
            </div>
          </div>
        </div>
        <div id="mainsidebar">
          <ul className="sidebar-menu custom-scrollbar">
            <li className="sidebar-item">
              <a href="index.html" className="sidebar-link only-link">
                <Airplay />
                <span>Dashboard</span>
                <div className="according-menu">
                  <FaAngleRight />
                </div>
              </a>
            </li>

            <Properties active={active} setActive={setActive} />

            <ManageUsers active={active} setActive={setActive} />

            <Agents active={active} setActive={setActive} />

            <li className="sidebar-item">
              <a href="map.html" className="sidebar-link only-link">
                <MapPin />
                <span>Map</span>
              </a>
            </li>

            <Types active={active} setActive={setActive} />
            <li className="sidebar-item">
              <a href="reports.html" className="sidebar-link only-link">
                <BarChart2 />
                <span>Reports</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="payments.html" className="sidebar-link only-link">
                <CreditCard />
                <span>Payments</span>
              </a>
            </li>
            <Authentication active={active} setActive={setActive} />
            <li>
              <div className="upgrade-box">
                <img
                  src="https://themes.pixelstrap.com/sheltos/assets/images/svg/1.svg"
                  className="img-fluid"
                  alt=""
                />
                <h6>Need Help</h6>
                <a
                  href="https://pixelstrap.freshdesk.com/support/home"
                  target="_blank"
                  className="p-0 m-0"
                >
                  <span className="d-block">
                    Raise ticket at "support@pixelstrap.com"
                  </span>
                </a>
                <button
                  type="button"
                  onClick={() =>
                    console.log(
                      " window.open('https://themeforest.net/user/pixelstrap/portfolio', '_blank');"
                    )
                  }
                  className="btn btn-pill btn-gradient color-4 btn-sm mt-2 fw-bold"
                >
                  Buy Now
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PageSidebar;
