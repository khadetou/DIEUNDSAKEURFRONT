import BodyAllUser from "components/dashboard/manageusers/adduser";
import Layout from "components/dashboard/pageBody/Layout";
import { Dispatch, FC } from "react";

interface AllUserScreenProps {
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
  isTabletOrMobile: boolean;
}
const AllUserScreen: FC<AllUserScreenProps> = ({
  open,
  setOpen,
  isTabletOrMobile,
}) => {
  return (
    <Layout open={open} setOpen={setOpen} isTabletOrMobile={isTabletOrMobile}>
      <BodyAllUser />
    </Layout>
  );
};

export default AllUserScreen;
