import Layout from "components/dashboard/Layout";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import AddAgentScreen from "screens/agents/add-agent-screen";

const AddAgent = () => {
  const [open, setOpen] = useState(false);
  const isTabletOrMobile = useMediaQuery({ maxWidth: 991 });
  return (
    <Layout isTabletOrMobile={isTabletOrMobile} open={open} setOpen={setOpen}>
      <AddAgentScreen
        open={open}
        isTabletOrMobile={isTabletOrMobile}
        setOpen={setOpen}
      />
    </Layout>
  );
};

export default AddAgent;
