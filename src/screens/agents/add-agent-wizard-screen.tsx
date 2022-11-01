import BodyAddAgentWizard from "components/dashboard/agents/addagentwizard";
import Layout from "components/dashboard/pageBody/Layout";
import { Dispatch, FC } from "react";

interface AddAgentWizardScreenProps {
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
  isTabletOrMobile: boolean;
}
const AddAgentWizardScreen: FC<AddAgentWizardScreenProps> = ({
  open,
  setOpen,
  isTabletOrMobile,
}) => {
  return (
    <Layout open={open} setOpen={setOpen} isTabletOrMobile={isTabletOrMobile}>
      <BodyAddAgentWizard />
    </Layout>
  );
};

export default AddAgentWizardScreen;
