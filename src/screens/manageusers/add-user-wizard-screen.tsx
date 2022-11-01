import BodyAddUserWizard from "components/dashboard/manageusers/adduserwizard";
import Layout from "components/dashboard/pageBody/Layout";
import { Dispatch, FC } from "react";

interface AddUserWizardScreenProps {
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
  isTabletOrMobile: boolean;
}
const AddUserWizardScreen: FC<AddUserWizardScreenProps> = ({
  open,
  setOpen,
  isTabletOrMobile,
}) => {
  return (
    <Layout open={open} setOpen={setOpen} isTabletOrMobile={isTabletOrMobile}>
      <BodyAddUserWizard />
    </Layout>
  );
};

export default AddUserWizardScreen;
