import { Dispatch, FC, useState } from "react";
import {
  Airplay,
  BarChart2,
  ChevronsLeft,
  MapPin,
  CreditCard,
} from "react-feather";
import { FaAngleRight } from "react-icons/fa";
import { useRouter } from "next/router";
import Agents from "./dropItems/Agents";
import ManageUsers from "./dropItems/ManageUsers";
import Properties from "./dropItems/Properties";
import Types from "./dropItems/Types";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "hooks/index";
import Image from "next/image";
import { initials } from "utils/index";
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

  const { pathname } = useRouter();
  const dispatch = useAppDispatch();
  const { user, isError, isAuthenticated, isSuccess, isLoading, message } =
    useAppSelector((store) => store.auth);

  return (
    <div
      className={`page-sidebar ${isTabletOrMobile && "close_icon"} ${
        open && "close_icon"
      } `}
    >
      <div className="logo-wrap">
        <Link href="/">
          <img
            src="/images/logo/4.png"
            className="img-fluid for-light"
            alt=""
          />
          <img src="/images/logo/9.png" className="img-fluid for-dark" alt="" />
        </Link>
        <div className="back-btn d-lg-none d-inline-block">
          <ChevronsLeft />
        </div>
      </div>
      <div className="main-sidebar">
        <div className="user-profile">
          <div className="media">
            {user && user.image.url ? (
              <div className="change-pic">
                <Image
                  src={user.image.url}
                  width={user.image.width}
                  height={user.image.height}
                  className="img-fluid"
                  alt=""
                />
              </div>
            ) : (
              <div className="tw-rounded-full tw-p-3 tw-mr-2 tw-font-bold tw-text-xs tw-bg-red-600 tw-text-white tw-cursor-pointer">
                {user && initials(user.firstname, user.lastname)}
              </div>
            )}
            <div className="media-body">
              <Link href="/dashboard/user-profile">
                <h6>{user && `${user.firstname} ${user.lastname}`}</h6>
              </Link>
              <span className="font-roboto">{user && `${user.email}`}</span>
            </div>
          </div>
        </div>
        <div id="mainsidebar">
          <ul className="sidebar-menu custom-scrollbar">
            <li className="sidebar-item">
              <Link
                href="/dashboard"
                className={`sidebar-link only-link ${
                  pathname.endsWith("dashboard") && "active"
                }`}
              >
                <Airplay />
                <span>Dashboard</span>
                <div className="according-menu">
                  <FaAngleRight />
                </div>
              </Link>
            </li>

            <Properties active={active} setActive={setActive} />

            <ManageUsers active={active} setActive={setActive} />

            {(user && user.role === "admin") ||
              (user && user.role === "agence" && (
                <Agents active={active} setActive={setActive} />
              ))}

            <li className="sidebar-item">
              <Link
                href="/dashboard/map"
                className={`sidebar-link only-link ${
                  pathname.endsWith("map") && "active"
                }`}
              >
                <MapPin />
                <span>Map</span>
              </Link>
            </li>

            <Types active={active} setActive={setActive} />
            <li className="sidebar-item">
              <Link
                href="/dashboard/reports"
                className={`sidebar-link only-link ${
                  pathname.endsWith("reports") && "active"
                }`}
              >
                <BarChart2 />
                <span>Reports</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link
                href="/dashboard/payments"
                className={`sidebar-link only-link ${
                  pathname.endsWith("payments") && "active"
                }`}
              >
                <CreditCard />
                <span>Paiement</span>
              </Link>
            </li>
            {/* <Authentication active={active} setActive={setActive} /> */}
            <li>
              <div className="upgrade-box">
                <img
                  src="https://themes.pixelstrap.com/sheltos/assets/images/svg/1.svg"
                  className="img-fluid"
                  alt=""
                />
                <h6>Need Help</h6>
                <a
                  href="/dashboard/https://pixelstrap.freshdesk.com/support/home"
                  target="_blank"
                  className="p-0 m-0"
                >
                  <span className="d-block">
                    Raise ticket à "support@dieundsakeur.com"
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
                  Acheter Maintenant
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
