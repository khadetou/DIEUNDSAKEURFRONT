import BodyEditUser from "components/dashboard/manageusers/adduser";
import Layout from "components/dashboard/pageBody/Layout";
import { Dispatch, FC } from "react";

interface EditUserScreenProps {
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
  isTabletOrMobile: boolean;
}
const EditUserScreen: FC<EditUserScreenProps> = ({
  open,
  setOpen,
  isTabletOrMobile,
}) => {
  return (
    <Layout open={open} setOpen={setOpen} isTabletOrMobile={isTabletOrMobile}>
      <BodyEditUser />
    </Layout>
  );
};

export default EditUserScreen;
