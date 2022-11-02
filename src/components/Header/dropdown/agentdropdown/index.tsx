import React from "react";

const AgendropDown = () => {
  return (
    <ul className="nav-submenu menu-content">
      <li>
        <a href="agent-profile.html">Agent Profile</a>
      </li>
      <li>
        <a href="agent-grid.html">Agent Grid</a>
      </li>
      <li>
        <a href="agent-list.html">Agent List</a>
      </li>
      <li>
        <a href="submit-property.html">
          Submit property <span className="label">New</span>
        </a>
      </li>
    </ul>
  );
};

export default AgendropDown;
