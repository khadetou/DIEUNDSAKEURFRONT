import Layout from "components/dashboard/Layout";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import AllAgentScreen from "screens/agents/all-agents-screen";

const AllAgent = () => {
  const [open, setOpen] = useState(false);
  const isTabletOrMobile = useMediaQuery({ maxWidth: 991 });
  return (
    <Layout isTabletOrMobile={isTabletOrMobile} open={open} setOpen={setOpen}>
      <AllAgentScreen
        open={open}
        isTabletOrMobile={isTabletOrMobile}
        setOpen={setOpen}
      />
    </Layout>
  );
};

export default AllAgent;
