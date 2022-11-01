import { useRouter } from "next/router";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { Unlock, ChevronsRight } from "react-feather";
import { FaAngleDown } from "react-icons/fa";
import SlideDown from "react-slidedown";

type Active = {
  properties: boolean;
  manage: boolean;
  agence: boolean;
  auth: boolean;
  type: boolean;
};
interface AuthProps {
  active: Active;
  setActive: Dispatch<
    SetStateAction<{
      properties: boolean;
      manage: boolean;
      agence: boolean;
      auth: boolean;
      type: boolean;
    }>
  >;
}
const Authentication: FC<AuthProps> = ({ active, setActive }) => {
  let authactive = {
    properties: false,
    agence: false,
    manage: false,
    type: false,
  };
  const [open, setOpen] = useState(true);
  // FUNCTIONS
  const toggleSidebarItems = () => {
    setOpen(!open);
  };

  const { pathname } = useRouter();
  const links = ["login", "signup", "404"];
  useEffect(() => {
    links.forEach((link) => {
      if (pathname.includes(link)) {
        setOpen(false);
      }
    });
  }, [pathname]);

  return (
    <li
      className="sidebar-item"
      onClick={() => setActive({ ...authactive, ["auth"]: true })}
    >
      <a
        className={`sidebar-link ${active.auth && "active"} ${
          links.find((link) => pathname.endsWith(link)) ? "active" : ""
        }`}
        onClick={toggleSidebarItems}
      >
        <Unlock /> <span>Authentication</span>
        <div className="according-menu">
          <FaAngleDown
            className={`tw-transition-all tw-duration-500 ${
              open && "-tw-rotate-90"
            }`}
          />
        </div>
      </a>
      <SlideDown closed={open}>
        <ul className="nav-submenu menu-content">
          <li>
            <a
              href="/dashboard/login"
              className={pathname.endsWith("login") ? "active" : ""}
            >
              <ChevronsRight />
              Log in
            </a>
          </li>
          <li>
            <a
              href="/dashboard/signup"
              className={pathname.endsWith("signup") ? "active" : ""}
            >
              <ChevronsRight />
              sign up
            </a>
          </li>
          <li>
            <a
              href="/dashboard/404"
              className={pathname.endsWith("404") ? "active" : ""}
            >
              <ChevronsRight />
              404
            </a>
          </li>
        </ul>
      </SlideDown>
    </li>
  );
};

export default Authentication;
