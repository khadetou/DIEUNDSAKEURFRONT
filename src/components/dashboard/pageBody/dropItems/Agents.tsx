import { Dispatch, FC, SetStateAction, useState } from "react";
import { ChevronsRight, UserPlus } from "react-feather";
import { FaAngleRight } from "react-icons/fa";
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
  return (
    <li
      className="sidebar-item"
      onClick={() => setActive({ ...agactive, ["agence"]: true })}
    >
      <a
        href="#!"
        className={`sidebar-link ${active.agence && "active"}`}
        onClick={toggleSidebarItems}
      >
        <UserPlus />
        <span>Agents</span>
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
            <a href="agent-profile.html">
              <ChevronsRight />
              Profile
            </a>
          </li>
          <li>
            <a href="add-agent.html">
              <ChevronsRight />
              Add agent
            </a>
          </li>
          <li>
            <a href="add-agent-wizard.html">
              <ChevronsRight />
              Add agent wizard{" "}
              <span className="label label-shadow ms-1">new</span>
            </a>
          </li>
          <li>
            <a href="edit-agent.html">
              <ChevronsRight />
              Edit agent
            </a>
          </li>
          <li>
            <a href="all-agents.html">
              <ChevronsRight />
              All agents
            </a>
          </li>
          <li>
            <a href="agent-invoice.html">
              <ChevronsRight />
              Invoice
            </a>
          </li>
        </ul>
      </SlideDown>
    </li>
  );
};

export default Agents;
