import Layout from "components/dashboard/pageBody/Layout";
import BodyCottage from "components/dashboard/types/cottage";
import { Dispatch, FC } from "react";

interface CottageScreenProps {
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
  isTabletOrMobile: boolean;
}
const CottageScreen: FC<CottageScreenProps> = ({
  open,
  setOpen,
  isTabletOrMobile,
}) => {
  return (
    <Layout open={open} setOpen={setOpen} isTabletOrMobile={isTabletOrMobile}>
      <BodyCottage />
    </Layout>
  );
};

export default CottageScreen;
