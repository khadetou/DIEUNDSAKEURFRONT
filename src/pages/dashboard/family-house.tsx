import Layout from "components/dashboard/Layout";

import { useState } from "react";

import { useMediaQuery } from "react-responsive";
import FamilyHouseScreen from "screens/Types/family-house-screen";

const FamilyHouse = () => {
  const [open, setOpen] = useState(false);
  const isTabletOrMobile = useMediaQuery({ maxWidth: 991 });
  return (
    <Layout isTabletOrMobile={isTabletOrMobile} open={open} setOpen={setOpen}>
      <FamilyHouseScreen
        open={open}
        isTabletOrMobile={isTabletOrMobile}
        setOpen={setOpen}
      />
    </Layout>
  );
};

export default FamilyHouse;
