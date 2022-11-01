import BodyFavorites from "components/dashboard/myproperties/fovorites";
import Layout from "components/dashboard/pageBody/Layout";
import { Dispatch, FC } from "react";

interface PropertyFovoritesProps {
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
  isTabletOrMobile: boolean;
}
const FavoritesScreen: FC<PropertyFovoritesProps> = ({
  open,
  setOpen,
  isTabletOrMobile,
}) => {
  return (
    <Layout open={open} setOpen={setOpen} isTabletOrMobile={isTabletOrMobile}>
      <BodyFavorites />
    </Layout>
  );
};

export default FavoritesScreen;
