import { Dispatch, FC, SetStateAction, useState } from "react";
import { Users, ChevronsRight } from "react-feather";
import SlideDown from "react-slidedown";
import { FaAngleRight } from "react-icons/fa";

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
  return (
    <li
      className="sidebar-item"
      onClick={() => {
        setActive({ ...manactive, ["manage"]: true });
      }}
    >
      <a
        href="#!"
        className={`sidebar-link ${active.manage && "active"}`}
        onClick={toggleSidebarItems}
      >
        <Users />
        <span>Manage users</span>
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
            <a href="user-profile.html">
              <ChevronsRight />
              Profile
            </a>
          </li>
          <li>
            <a href="add-user.html">
              <ChevronsRight />
              Add user
            </a>
          </li>
          <li>
            <a href="add-user-wizard.html">
              <ChevronsRight />
              Add user wizard{" "}
              <span className="label label-shadow ms-1">new</span>
            </a>
          </li>
          <li>
            <a href="edit-user.html">
              <ChevronsRight />
              Edit user
            </a>
          </li>
          <li>
            <a href="all-users.html">
              <ChevronsRight />
              All users
            </a>
          </li>
        </ul>
      </SlideDown>
    </li>
  );
};

export default ManageUsers;
