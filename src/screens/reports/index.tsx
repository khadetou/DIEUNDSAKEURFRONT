import Layout from "components/dashboard/pageBody/Layout";
import BodyReports from "components/dashboard/reports";
import { Dispatch, FC } from "react";

interface ReportsScreenProps {
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
  isTabletOrMobile: boolean;
}
const ReportsScreen: FC<ReportsScreenProps> = ({
  open,
  setOpen,
  isTabletOrMobile,
}) => {
  return (
    <Layout open={open} setOpen={setOpen} isTabletOrMobile={isTabletOrMobile}>
      <BodyReports />
    </Layout>
  );
};

export default ReportsScreen;
