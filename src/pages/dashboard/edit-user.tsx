import Layout from "components/dashboard/Layout";

import { useState } from "react";
import EditUserScreen from "screens/manageusers/edit-user-screen";

import { useMediaQuery } from "react-responsive";

const EditUser = () => {
  const [open, setOpen] = useState(false);
  const isTabletOrMobile = useMediaQuery({ maxWidth: 991 });
  return (
    <Layout isTabletOrMobile={isTabletOrMobile} open={open} setOpen={setOpen}>
      <EditUserScreen
        open={open}
        isTabletOrMobile={isTabletOrMobile}
        setOpen={setOpen}
      />
    </Layout>
  );
};

export default EditUser;
