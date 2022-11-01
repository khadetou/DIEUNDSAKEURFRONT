import Layout from "components/dashboard/Layout";

import { useState } from "react";

import { useMediaQuery } from "react-responsive";
import AddUserScreen from "screens/manageusers/adduser-screen";

const UserProfile = () => {
  const [open, setOpen] = useState(false);
  const isTabletOrMobile = useMediaQuery({ maxWidth: 991 });
  return (
    <Layout isTabletOrMobile={isTabletOrMobile} open={open} setOpen={setOpen}>
      <AddUserScreen
        open={open}
        isTabletOrMobile={isTabletOrMobile}
        setOpen={setOpen}
      />
    </Layout>
  );
};

export default UserProfile;
