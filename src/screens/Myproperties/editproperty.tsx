import BodyEditProperty from "components/dashboard/myproperties/editproperty";
import Layout from "components/dashboard/pageBody/Layout";
import { Dispatch, FC } from "react";

interface EditPropertyProps {
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
  isTabletOrMobile: boolean;
}
const EditPropertyScreen: FC<EditPropertyProps> = ({
  open,
  setOpen,
  isTabletOrMobile,
}) => {
  return (
    <Layout open={open} setOpen={setOpen} isTabletOrMobile={isTabletOrMobile}>
      <BodyEditProperty />
    </Layout>
  );
};

export default EditPropertyScreen;
