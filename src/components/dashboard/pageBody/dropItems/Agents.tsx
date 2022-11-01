import { useRouter } from "next/router";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { ChevronsRight, UserPlus } from "react-feather";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";
import SlideDown from "react-slidedown";

type Active = {
  properties: boolean;
  manage: boolean;
  agence: boolean;
  auth: boolean;
  type: boolean;
};
interface AgentsProps {
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

const Agents: FC<AgentsProps> = ({ active, setActive }) => {
  let agactive = {
    properties: false,
    auth: false,
    manage: false,
    type: false,
  };
  const [open, setOpen] = useState(true);
  // FUNCTIONS
  const toggleSidebarItems = () => {
    setOpen(!open);
  };

  const links = [
    "agent-profile",
    "add-agent",
    "add-agent-wizard",
    "edit-agent",
    "all-agents",
    "agent-invoice",
  ];
  const { pathname } = useRouter();

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
      onClick={() => setActive({ ...agactive, ["agence"]: true })}
    >
      <a
        className={`sidebar-link ${active.agence && "active"} ${
          links.find((link) => pathname.endsWith(link)) ? "active" : ""
        }`}
        onClick={toggleSidebarItems}
      >
        <UserPlus />
        <span>Agents</span>
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
              href="/dashboard/agent-profile"
              className={pathname.endsWith("agent-profile") ? "active" : ""}
            >
              <ChevronsRight />
              Profile
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/add-agent"
              className={pathname.endsWith("add-agent") ? "active" : ""}
            >
              <ChevronsRight />
              Add agent
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/add-agent-wizard"
              className={pathname.endsWith("add-agent-wizard") ? "active" : ""}
            >
              <ChevronsRight />
              Add agent wizard{" "}
              <span className="label label-shadow ms-1">new</span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/edit-agent"
              className={pathname.endsWith("edit-agent") ? "active" : ""}
            >
              <ChevronsRight />
              Edit agent
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/all-agents"
              className={pathname.endsWith("all-agents") ? "active" : ""}
            >
              <ChevronsRight />
              All agents
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/agent-invoice"
              className={pathname.endsWith("agent-invoice") ? "active" : ""}
            >
              <ChevronsRight />
              Invoice
            </Link>
          </li>
        </ul>
      </SlideDown>
    </li>
  );
};

export default Agents;
