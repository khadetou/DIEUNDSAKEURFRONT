import { Dispatch, FC, SetStateAction, useState } from "react";
import { Layout, ChevronsRight } from "react-feather";
import { FaAngleRight } from "react-icons/fa";
import SlideDown from "react-slidedown";

type Active = {
  properties: boolean;
  manage: boolean;
  agence: boolean;
  auth: boolean;
  type: boolean;
};
interface TypeProps {
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

const Types: FC<TypeProps> = ({ active, setActive }) => {
  let tyactive = {
    properties: false,
    agence: false,
    auth: false,
    manage: false,
  };
  const [open, setOpen] = useState(true);
  // FUNCTIONS
  const toggleSidebarItems = () => {
    setOpen(!open);
  };
  return (
    <li
      className="sidebar-item"
      onClick={() => setActive({ ...tyactive, ["type"]: true })}
    >
      <a
        href="#!"
        className={`sidebar-link ${active.type && "active"}`}
        onClick={toggleSidebarItems}
      >
        <Layout />
        <span>Types</span>
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
            <a href="family-house.html">
              <ChevronsRight />
              Family House
            </a>
          </li>
          <li>
            <a href="cottage.html">
              <ChevronsRight />
              Cottage
            </a>
          </li>
          <li>
            <a href="apartment.html">
              <ChevronsRight />
              Apartment
            </a>
          </li>
          <li>
            <a href="condominium.html">
              <ChevronsRight />
              Condominium
            </a>
          </li>
        </ul>
      </SlideDown>
    </li>
  );
};

export default Types;
