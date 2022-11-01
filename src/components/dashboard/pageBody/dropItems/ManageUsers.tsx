import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { Users, ChevronsRight } from "react-feather";
import SlideDown from "react-slidedown";
import { FaAngleDown } from "react-icons/fa";
import { useRouter } from "next/router";
import Link from "next/link";

type Active = {
  properties: boolean;
  manage: boolean;
  agence: boolean;
  auth: boolean;
  type: boolean;
};
interface ManageUsersProps {
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

const ManageUsers: FC<ManageUsersProps> = ({ active, setActive }) => {
  const [open, setOpen] = useState(true);
  let manactive = {
    properties: false,
    agence: false,
    auth: false,
    type: false,
  };
  // FUNCTIONS
  const toggleSidebarItems = () => {
    setOpen(!open);
  };

  const { pathname } = useRouter();
  const links = [
    "user-profile",
    "add-user",
    "add-user-wizard",
    "edit-user",
    "all-users",
  ];
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
      onClick={() => {
        setActive({ ...manactive, ["manage"]: true });
      }}
    >
      <a
        className={`sidebar-link ${active.manage && "active"} ${
          links.find((link) => pathname.endsWith(link)) ? "active" : ""
        }`}
        onClick={toggleSidebarItems}
      >
        <Users />
        <span>Manage users</span>
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
            <Link
              href="/dashboard/user-profile"
              className={pathname.endsWith("user-profile") ? "active" : ""}
            >
              <ChevronsRight />
              Profile
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/add-user"
              className={pathname.endsWith("add-user") ? "active" : ""}
            >
              <ChevronsRight />
              Add user
            </Link>
          </li>
          <li>
            <Link
              href="add-user-wizard"
              className={pathname.endsWith("add-user-wizard") ? "active" : ""}
            >
              <ChevronsRight />
              Add user wizard{" "}
              <span className="label label-shadow ms-1">new</span>
            </Link>
          </li>
          <li>
            <Link
              href="edit-user"
              className={pathname.endsWith("edit-user") ? "active" : ""}
            >
              <ChevronsRight />
              Edit user
            </Link>
          </li>
          <li>
            <Link
              href="all-users"
              className={pathname.endsWith("all-users") ? "active" : ""}
            >
              <ChevronsRight />
              All users
            </Link>
          </li>
        </ul>
      </SlideDown>
    </li>
  );
};

export default ManageUsers;
