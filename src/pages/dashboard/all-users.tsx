import Layout from "components/dashboard/Layout";

import { useState } from "react";
import AllUserScreen from "screens/manageusers/all-users-screen";

import { useMediaQuery } from "react-responsive";

const AllUser = () => {
  const [open, setOpen] = useState(false);
  const isTabletOrMobile = useMediaQuery({ maxWidth: 991 });
  return (
    <Layout isTabletOrMobile={isTabletOrMobile} open={open} setOpen={setOpen}>
      <AllUserScreen
        open={open}
        isTabletOrMobile={isTabletOrMobile}
        setOpen={setOpen}
      />
    </Layout>
  );
};

export default AllUser;
