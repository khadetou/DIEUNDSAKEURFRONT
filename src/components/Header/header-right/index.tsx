import React, { useEffect } from "react";
import { Globe, Heart, DollarSign, User } from "react-feather";
import Link from "next/link";
import { logout } from "redux/auth/authSlice";
import { useAppDispatch, useAppSelector } from "hooks/index";
import Profile from "../dropdown/profile";
import Avatar from "/public/images/avatar/3.jpg";
import Image from "next/image";
import { spawn } from "child_process";

const HeaderRight = () => {
  const dispatch = useAppDispatch();
  // useEffect(() => {
  //   dispatch(logout());
  // }, []);
  const { isAuthenticated, user } = useAppSelector((store) => store.auth);

  const initials = (firstname: string, lastname: string) => {
    let f, l;
    f = firstname.split("");
    l = lastname.split("");
    return `${f[0]}${l[0]}`;
  };

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
              {user.image.public_url ? (
                <Image
                  src={user.image.public_url}
                  width={user.image.width}
                  height={user.image.height}
                  className="tw-w-[30px] tw-ml-2 tw-rounded-lg img-fluid"
                  alt=""
                />
              ) : (
                <span className="tw-uppercase tw-cursor-pointer tw-rounded-md tw-bg-white tw-p-2 tw-ml-2 tw-font-semibold">
                  {initials(user.firstname, user.lastname)}
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
