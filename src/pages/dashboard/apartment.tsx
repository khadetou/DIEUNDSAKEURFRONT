import Layout from "components/dashboard/Layout";

import { useState } from "react";

import { useMediaQuery } from "react-responsive";
import ApartmentScreen from "screens/Types/apartment-screen";

const Apartment = () => {
  const [open, setOpen] = useState(false);
  const isTabletOrMobile = useMediaQuery({ maxWidth: 991 });
  return (
    <Layout isTabletOrMobile={isTabletOrMobile} open={open} setOpen={setOpen}>
      <ApartmentScreen
        open={open}
        isTabletOrMobile={isTabletOrMobile}
        setOpen={setOpen}
      />
    </Layout>
  );
};

export default Apartment;
