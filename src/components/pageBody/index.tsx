import { Dispatch, FC } from "react";
import PageSidebar from "./page-sidebar";
interface PageBodyProps {
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
  isTabletOrMobile: boolean;
}
const PageBody: FC<PageBodyProps> = ({ open, setOpen, isTabletOrMobile }) => {
  return (
    <div className="page-body-wrapper">
      <PageSidebar
        open={open}
        setOpen={setOpen}
        isTabletOrMobile={isTabletOrMobile}
      />
    </div>
  );
};

export default PageBody;
