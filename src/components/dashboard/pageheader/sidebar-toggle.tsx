import { ChevronsLeft, ChevronsRight } from "react-feather";
import { Dispatch, FC, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

interface SidebarToggleProps {
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
  isTabletOrMobile: boolean;
}
const SidebarToggle: FC<SidebarToggleProps> = ({
  open,
  setOpen,
  isTabletOrMobile,
}) => {
  return (
    <div
      id="sidebar-toggle"
      className="toggle-sidebar col-auto"
      onClick={() => {
        setOpen(!open);
      }}
    >
      <ChevronsLeft
        className={`tw-transition-all tw-duration-500 ${
          isTabletOrMobile ? "tw-rotate-180" : ""
        } `}
      />
    </div>
  );
};

export default SidebarToggle;
