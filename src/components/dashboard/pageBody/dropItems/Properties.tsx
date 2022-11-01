import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { ChevronsRight, Grid } from "react-feather";
import { FaAngleDown } from "react-icons/fa";
import SlideDown from "react-slidedown";
import Link from "next/link";
import { useRouter } from "next/router";

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

  const { pathname } = useRouter();
  const links = ["add-property", "edit-property", "list", "favorites"];
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
      onClick={() => setActive({ ...proactive, ["properties"]: true })}
    >
      <a
        className={`sidebar-link ${active.properties && "active"} ${
          links.find((link) => pathname.endsWith(link)) ? "active" : ""
        }`}
        onClick={toggleSidebarItems}
      >
        <Grid />
        <span>My properties</span>
        <div className="according-menu">
          <FaAngleDown
            className={`tw-transition-all tw-duration-500 ${
              open && "-tw-rotate-90"
            }`}
          />
        </div>
      </a>
      <SlideDown closed={open}>
        <ul className="nav-submenu menu-content pure-menu-list dropdown-list ">
          <li>
            <Link
              href="/dashboard/add-property"
              className={pathname.endsWith("add-property") ? "active" : ""}
            >
              <ChevronsRight />
              add property
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/edit-property"
              className={pathname.endsWith("edit-property") ? "active" : ""}
            >
              <ChevronsRight />
              edit property
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/list"
              className={pathname.endsWith("list") ? "active" : ""}
            >
              <ChevronsRight />
              property list
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/favorites"
              className={pathname.endsWith("favorites") ? "active" : ""}
            >
              <ChevronsRight />
              Favourites
            </Link>
          </li>
        </ul>
      </SlideDown>
    </li>
  );
};

export default Properties;
