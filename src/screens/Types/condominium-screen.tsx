import Layout from "components/dashboard/pageBody/Layout";
import BodyCondominium from "components/dashboard/types/condominium";
import { Dispatch, FC } from "react";

interface CondominiumScreenProps {
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
  isTabletOrMobile: boolean;
}
const CondominiumScreen: FC<CondominiumScreenProps> = ({
  open,
  setOpen,
  isTabletOrMobile,
}) => {
  return (
    <Layout open={open} setOpen={setOpen} isTabletOrMobile={isTabletOrMobile}>
      <BodyCondominium />
    </Layout>
  );
};

export default CondominiumScreen;
