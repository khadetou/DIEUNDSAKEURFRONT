import BodyProfile from "components/dashboard/manageusers/profile";
import Layout from "components/dashboard/pageBody/Layout";
import { Dispatch, FC } from "react";

interface ProfileScreenProps {
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
  isTabletOrMobile: boolean;
}
const ProfileScreen: FC<ProfileScreenProps> = ({
  open,
  setOpen,
  isTabletOrMobile,
}) => {
  return (
    <Layout open={open} setOpen={setOpen} isTabletOrMobile={isTabletOrMobile}>
      <BodyProfile />
    </Layout>
  );
};

export default ProfileScreen;
