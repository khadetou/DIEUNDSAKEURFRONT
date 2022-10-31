import BodyAddProperty from "components/dashboard/myproperties/addproperty";
import Layout from "components/dashboard/pageBody/Layout";
import { Dispatch, FC } from "react";

interface AddpropertyBodyProps {
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
  isTabletOrMobile: boolean;
}
const AddpropertyBody: FC<AddpropertyBodyProps> = ({
  open,
  setOpen,
  isTabletOrMobile,
}) => {
  return (
    <Layout open={open} setOpen={setOpen} isTabletOrMobile={isTabletOrMobile}>
      <BodyAddProperty />
    </Layout>
  );
};

export default AddpropertyBody;
