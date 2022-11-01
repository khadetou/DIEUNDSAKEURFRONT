import Layout from "components/dashboard/Layout";

import { useState } from "react";

import { useMediaQuery } from "react-responsive";
import CottageScreen from "screens/Types/cottage-screen";

const Cottage = () => {
  const [open, setOpen] = useState(false);
  const isTabletOrMobile = useMediaQuery({ maxWidth: 991 });
  return (
    <Layout isTabletOrMobile={isTabletOrMobile} open={open} setOpen={setOpen}>
      <CottageScreen
        open={open}
        isTabletOrMobile={isTabletOrMobile}
        setOpen={setOpen}
      />
    </Layout>
  );
};

export default Cottage;
