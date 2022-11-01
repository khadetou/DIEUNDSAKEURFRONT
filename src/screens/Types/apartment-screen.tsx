import Layout from "components/dashboard/pageBody/Layout";
import BodyApartment from "components/dashboard/types/apartment";
import { Dispatch, FC } from "react";

interface ApartmentScreenProps {
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
  isTabletOrMobile: boolean;
}
const ApartmentScreen: FC<ApartmentScreenProps> = ({
  open,
  setOpen,
  isTabletOrMobile,
}) => {
  return (
    <Layout open={open} setOpen={setOpen} isTabletOrMobile={isTabletOrMobile}>
      <BodyApartment />
    </Layout>
  );
};

export default ApartmentScreen;
