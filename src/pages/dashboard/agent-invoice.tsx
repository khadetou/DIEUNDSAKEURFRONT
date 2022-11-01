import Layout from "components/dashboard/Layout";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import AgentInvoiceScreen from "screens/agents/agent-invoice-screen";

const AgentInvoice = () => {
  const [open, setOpen] = useState(false);
  const isTabletOrMobile = useMediaQuery({ maxWidth: 991 });
  return (
    <Layout isTabletOrMobile={isTabletOrMobile} open={open} setOpen={setOpen}>
      <AgentInvoiceScreen
        open={open}
        isTabletOrMobile={isTabletOrMobile}
        setOpen={setOpen}
      />
    </Layout>
  );
};

export default AgentInvoice;
