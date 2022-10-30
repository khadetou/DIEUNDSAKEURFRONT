import { Dispatch, FC, SetStateAction, useState } from "react";
import { ChevronsRight, Grid } from "react-feather";
import { FaAngleRight } from "react-icons/fa";
import SlideDown from "react-slidedown";

type Active = {
  properties: boolean;
  manage: boolean;
  agence: boolean;
  auth: boolean;
  type: boolean;
};
interface PropertyProps {
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

const Properties: FC<PropertyProps> = ({ active, setActive }) => {
  let proactive = {
    agence: false,
    auth: false,
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
      onClick={() => setActive({ ...proactive, ["properties"]: true })}
    >
      <a
        href="#!"
        className={`sidebar-link ${active.properties && "active"}`}
        onClick={toggleSidebarItems}
      >
        <Grid />
        <span>My properties</span>
        <div className="according-menu">
          <FaAngleRight
            className={`tw-transition-all tw-duration-500 ${
              open && "tw-rotate-90"
            }`}
          />
        </div>
      </a>
      <SlideDown closed={open}>
        <ul className="nav-submenu menu-content pure-menu-list dropdown-list ">
          <li>
            <a href="add-property.html">
              <ChevronsRight />
              add property
            </a>
          </li>
          <li>
            <a href="edit-property.html">
              <ChevronsRight />
              edit property
            </a>
          </li>
          <li>
            <a href="listing.html">
              <ChevronsRight />
              property list
            </a>
          </li>
          <li>
            <a href="favourites.html">
              <ChevronsRight />
              Favourites
            </a>
          </li>
        </ul>
      </SlideDown>
    </li>
  );
};

export default Properties;
