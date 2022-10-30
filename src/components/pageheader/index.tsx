import { Dispatch, FC } from "react";
import NavRight from "./nav-right";
import SidebarToggle from "./sidebar-toggle";
import { useMediaQuery } from "react-responsive";

interface PageHeaderProps {
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
  isTabletOrMobile: boolean;
}
// const isTabletOrMobile = useMediaQuery({ maxWidth: 991 });
const PageHeader: FC<PageHeaderProps> = ({
  open,
  setOpen,
  isTabletOrMobile,
}) => {
  return (
    <div className={`page-main-header row ${open && "close_icon"}`}>
      <SidebarToggle
        open={open}
        setOpen={setOpen}
        isTabletOrMobile={isTabletOrMobile}
      />
      <NavRight />
    </div>
  );
};

export default PageHeader;
