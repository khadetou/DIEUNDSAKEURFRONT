import { Globe, Heart, DollarSign, User } from "react-feather";
import Link from "next/link";
import { useAppSelector } from "hooks/index";
import Profile from "../dropdown/profile";
import Image from "next/image";
import { initials } from "utils/index";
import { useEffect } from "react";

const HeaderRight = () => {
  const { isAuthenticated, user } = useAppSelector((store) => store.auth);

  return (
    <ul className="header-right">
      <li className="right-menu color-6">
        <ul className="nav-menu">
          <li className="dropdown language">
            <a>
              <Globe className="tw-inline" />
            </a>
            <ul className="nav-submenu">
              <li>
                <a>English</a>
              </li>
              <li>
                <a>French</a>
              </li>
              <li>
                <a>Arabic</a>
              </li>
              <li>
                <a>Spanish</a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="user-favourites.html">
              <Heart className="tw-inline" />
            </a>
          </li>

          <li className="dropdown currency">
            <a>
              <DollarSign className="tw-inline" />
            </a>
            <ul className="nav-submenu">
              <li>
                <a>Dollar</a>
              </li>
              <li>
                <a>Euro</a>
              </li>
              <li>
                <a>Pound</a>
              </li>
              <li>
                <a>Yuan</a>
              </li>
            </ul>
          </li>
        </ul>
        <div className="tw-flex tw-items-center">
          {user && isAuthenticated ? (
            <div className="profile-avatar onhover-dropdown">
              {user!.image.public_url ? (
                <Image
                  src={user!.image.public_url}
                  width={user!.image.width}
                  height={user!.image.height}
                  className="tw-w-[30px] tw-ml-2 tw-rounded-lg img-fluid"
                  alt=""
                />
              ) : (
                <span className="tw-uppercase tw-cursor-pointer tw-rounded-md tw-bg-white tw-p-2 tw-ml-2 tw-font-semibold">
                  {initials(user!.firstname, user!.lastname)}
                </span>
              )}
              <Profile />
            </div>
          ) : (
            <Link href="/login" className="tw-px-[5px] tw-ml-[10px]">
              <User className="tw-inline " />
            </Link>
          )}
        </div>
      </li>
    </ul>
  );
};

export default HeaderRight;
