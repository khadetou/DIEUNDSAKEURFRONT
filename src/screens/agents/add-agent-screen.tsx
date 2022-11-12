import BodyAddAgent from "components/dashboard/agents/addagent";
import Layout from "components/dashboard/pageBody/Layout";
import { Dispatch, FC } from "react";

interface AddAgentScreenProps {
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
  isTabletOrMobile: boolean;
}
const AddAgentScreen: FC<AddAgentScreenProps> = ({
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

export default AddAgentScreen;
