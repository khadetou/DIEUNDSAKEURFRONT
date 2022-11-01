import BodyEditUser from "components/dashboard/manageusers/adduser";
import BodyMap from "components/dashboard/map";
import Layout from "components/dashboard/pageBody/Layout";
import { Dispatch, FC } from "react";

interface MapScreenProps {
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
  isTabletOrMobile: boolean;
}
const MapScreen: FC<MapScreenProps> = ({ open, setOpen, isTabletOrMobile }) => {
  return (
    <Layout open={open} setOpen={setOpen} isTabletOrMobile={isTabletOrMobile}>
      <BodyMap />
    </Layout>
  );
};

export default MapScreen;
