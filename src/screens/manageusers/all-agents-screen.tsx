import BodyAllAgent from "components/dashboard/agents/addagent";
import Layout from "components/dashboard/pageBody/Layout";
import { Dispatch, FC } from "react";

interface AllAgentScreenProps {
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
  isTabletOrMobile: boolean;
}
const AllAgentScreen: FC<AllAgentScreenProps> = ({
  open,
  setOpen,
  isTabletOrMobile,
}) => {
  return (
    <Layout open={open} setOpen={setOpen} isTabletOrMobile={isTabletOrMobile}>
      <BodyAllAgent />
    </Layout>
  );
};

export default AllAgentScreen;
