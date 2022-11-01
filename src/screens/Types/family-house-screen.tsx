import Layout from "components/dashboard/pageBody/Layout";
import BodyFamilyHouse from "components/dashboard/types/familyhouse";
import { Dispatch, FC } from "react";

interface FamilyHouseScreenProps {
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
  isTabletOrMobile: boolean;
}
const FamilyHouseScreen: FC<FamilyHouseScreenProps> = ({
  open,
  setOpen,
  isTabletOrMobile,
}) => {
  return (
    <Layout open={open} setOpen={setOpen} isTabletOrMobile={isTabletOrMobile}>
      <BodyFamilyHouse />
    </Layout>
  );
};

export default FamilyHouseScreen;
