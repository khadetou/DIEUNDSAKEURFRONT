import { Dispatch, FC } from "react";
import Body from "./Body";
import Layout from "./Layout";

import PageSidebar from "./page-sidebar";
interface PageBodyProps {
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
  isTabletOrMobile: boolean;
}
const PageBody: FC<PageBodyProps> = ({ open, setOpen, isTabletOrMobile }) => {
  return (
    <Layout open={open} setOpen={setOpen} isTabletOrMobile={isTabletOrMobile}>
      <Body />
    </Layout>
  );
};

export default PageBody;
