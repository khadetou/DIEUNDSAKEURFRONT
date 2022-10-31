import Layout from "components/dashboard/Layout";
import PageBody from "components/dashboard/pageBody";
import { useState, useEffect } from "react";

import { useMediaQuery } from "react-responsive";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const isTabletOrMobile = useMediaQuery({ maxWidth: 991 });
  return (
    <Layout isTabletOrMobile={isTabletOrMobile} open={open} setOpen={setOpen}>
      <PageBody
        open={open}
        setOpen={setOpen}
        isTabletOrMobile={isTabletOrMobile}
      />
    </Layout>
  );
};

export default Dashboard;
