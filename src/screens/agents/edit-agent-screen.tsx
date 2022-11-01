import BodyEditAgent from "components/dashboard/agents/editagent";
import Layout from "components/dashboard/pageBody/Layout";
import { Dispatch, FC } from "react";

interface EditAgentScreenProps {
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
  isTabletOrMobile: boolean;
}
const EditAgentScreen: FC<EditAgentScreenProps> = ({
  open,
  setOpen,
  isTabletOrMobile,
}) => {
  return (
    <Layout open={open} setOpen={setOpen} isTabletOrMobile={isTabletOrMobile}>
      <BodyEditAgent />
    </Layout>
  );
};

export default EditAgentScreen;
