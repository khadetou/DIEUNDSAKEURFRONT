import { ChevronsLeft, ChevronsRight } from "react-feather";
import { useState } from "react";

const SidebarToggle = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      id="sidebar-toggle"
      className="toggle-sidebar col-auto"
      onClick={() => setOpen(!open)}
    >
      {open ? <ChevronsRight /> : <ChevronsLeft />}
    </div>
  );
};

export default SidebarToggle;
