import React from "react";
import { Globe, Heart, DollarSign, User } from "react-feather";
import Link from "next/link";

const HeaderRight = () => {
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
          <li className="dropdown">
            <Link href="/login">
              <User className="tw-inline" />
            </Link>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default HeaderRight;
