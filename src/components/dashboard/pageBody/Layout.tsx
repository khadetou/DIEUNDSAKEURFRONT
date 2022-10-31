import SEO from "components/SEO";
import { Dispatch, FC } from "react";
import Customizer from "components/customizer";
import PageHeader from "../pageheader";
import PageSidebar from "./page-sidebar";
interface LayoutProp {
  children: React.ReactNode;
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
  isTabletOrMobile: boolean;
}

const Layout: FC<LayoutProp> = ({
  children,
  isTabletOrMobile,
  open,
  setOpen,
}) => {
  return (
    <>
      <div className="page-body-wrapper">
        <PageSidebar
          open={open}
          setOpen={setOpen}
          isTabletOrMobile={isTabletOrMobile}
        />
        <>{children}</>
      </div>
    </>
  );
};

export default Layout;
