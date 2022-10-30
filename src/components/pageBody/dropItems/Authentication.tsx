import { Dispatch, FC, SetStateAction, useState } from "react";
import { Unlock, ChevronsRight } from "react-feather";
import { FaAngleRight } from "react-icons/fa";
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
  return (
    <li
      className="sidebar-item"
      onClick={() => setActive({ ...authactive, ["auth"]: true })}
    >
      <a
        href="#!"
        className={`sidebar-link ${active.auth && "active"}`}
        onClick={toggleSidebarItems}
      >
        <Unlock /> <span>Authentication</span>
        <div className="according-menu">
          <FaAngleRight
            className={`tw-transition-all tw-duration-500 ${
              open && "tw-rotate-90"
            }`}
          />
        </div>
      </a>
      <SlideDown closed={open}>
        <ul className="nav-submenu menu-content">
          <li>
            <a href="login.html">
              <ChevronsRight />
              Log in
            </a>
          </li>
          <li>
            <a href="signup.html">
              <ChevronsRight />
              sign up
            </a>
          </li>
          <li>
            <a href="404.html">
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
