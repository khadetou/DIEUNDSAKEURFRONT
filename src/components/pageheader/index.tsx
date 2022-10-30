import NavRight from "./nav-right";
import SidebarToggle from "./sidebar-toggle";

const PageHeader = () => {
  return (
    <div className="page-main-header row">
      <SidebarToggle />
      <NavRight />
    </div>
  );
};

export default PageHeader;
