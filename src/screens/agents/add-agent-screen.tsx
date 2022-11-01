import BodyAddAgent from "components/dashboard/agents/addagent";
import Layout from "components/dashboard/pageBody/Layout";
import { Dispatch, FC } from "react";

interface AddUserScreenProps {
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
  isTabletOrMobile: boolean;
}
const AddUserScreen: FC<AddUserScreenProps> = ({
  open,
  setOpen,
  isTabletOrMobile,
}) => {
  return (
    <Layout open={open} setOpen={setOpen} isTabletOrMobile={isTabletOrMobile}>
      <BodyAddAgent />
    </Layout>
  );
};

export default AddUserScreen;
