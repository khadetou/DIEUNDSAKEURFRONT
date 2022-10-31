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
      this is the body
    </Layout>
  );
};

export default AddpropertyBody;
