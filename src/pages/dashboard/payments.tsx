import Layout from "components/dashboard/Layout";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import PaymentsScreen from "screens/payments";

const Payments = () => {
  const [open, setOpen] = useState(false);
  const isTabletOrMobile = useMediaQuery({ maxWidth: 991 });
  return (
    <Layout isTabletOrMobile={isTabletOrMobile} open={open} setOpen={setOpen}>
      <PaymentsScreen
        open={open}
        isTabletOrMobile={isTabletOrMobile}
        setOpen={setOpen}
      />
    </Layout>
  );
};

export default Payments;
