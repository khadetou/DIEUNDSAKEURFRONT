import Layout from "components/dashboard/Layout";

import { useState } from "react";
import AddUserScreen from "screens/manageusers/adduser-screen";

import { useMediaQuery } from "react-responsive";

const AddUser = () => {
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

export default AddUser;
