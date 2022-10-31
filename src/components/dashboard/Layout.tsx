import SEO from "components/SEO";
import { Dispatch, FC, useEffect } from "react";
import Customizer from "components/customizer";
import PageHeader from "./pageheader";
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
      <div className="page-wrapper">
        <SEO />
        <PageHeader
          open={open}
          setOpen={setOpen}
          isTabletOrMobile={isTabletOrMobile}
        />
        <>{children}</>
        <Customizer />
      </div>
    </>
  );
};

export default Layout;
