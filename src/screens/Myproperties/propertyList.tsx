import BodyListProperty from "components/dashboard/myproperties/propertylist";
import Layout from "components/dashboard/pageBody/Layout";
import { Dispatch, FC } from "react";

interface PropertyListProps {
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
  isTabletOrMobile: boolean;
}
const PropertyListScreen: FC<PropertyListProps> = ({
  open,
  setOpen,
  isTabletOrMobile,
}) => {
  return (
    <Layout open={open} setOpen={setOpen} isTabletOrMobile={isTabletOrMobile}>
      <BodyListProperty />
    </Layout>
  );
};

export default PropertyListScreen;
