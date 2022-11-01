import { useRouter } from "next/router";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { Layout, ChevronsRight, Link } from "react-feather";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
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

  const { pathname } = useRouter();

  const links = ["family-house", "cottage", "apartment", "condominium"];

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
      onClick={() => setActive({ ...tyactive, ["type"]: true })}
    >
      <Link
        className={`sidebar-link ${active.type && "active"}`}
        onClick={toggleSidebarItems}
      >
        <Layout />
        <span>Types</span>
        <div className="according-menu">
          <FaAngleDown
            className={`tw-transition-all tw-duration-500 ${
              open && "-tw-rotate-90"
            }`}
          />
        </div>
      </Link>
      <SlideDown closed={open}>
        <ul className="nav-submenu menu-content">
          <li>
            <Link
              href="/dashboard/family-house"
              className={pathname.endsWith("family-house") ? "active" : ""}
            >
              <ChevronsRight />
              Family House
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/cottage"
              className={pathname.endsWith("cottage") ? "active" : ""}
            >
              <ChevronsRight />
              Cottage
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/apartment"
              className={pathname.endsWith("apartment") ? "active" : ""}
            >
              <ChevronsRight />
              Apartment
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/condominium"
              className={pathname.endsWith("condominium") ? "active" : ""}
            >
              <ChevronsRight />
              Condominium
            </Link>
          </li>
        </ul>
      </SlideDown>
    </li>
  );
};

export default Types;
