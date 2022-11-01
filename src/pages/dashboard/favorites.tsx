import Layout from "components/dashboard/Layout";

import { useState } from "react";

import { useMediaQuery } from "react-responsive";
import FavoritesScreen from "screens/Myproperties/fovorites";
import PropertyListScreen from "screens/Myproperties/propertyList";

const Favorites = () => {
  const [open, setOpen] = useState(false);
  const isTabletOrMobile = useMediaQuery({ maxWidth: 991 });
  return (
    <Layout isTabletOrMobile={isTabletOrMobile} open={open} setOpen={setOpen}>
      <FavoritesScreen
        open={open}
        isTabletOrMobile={isTabletOrMobile}
        setOpen={setOpen}
      />
    </Layout>
  );
};

export default Favorites;
