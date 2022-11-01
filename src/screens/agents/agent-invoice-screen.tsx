import BodyAgentInvoice from "components/dashboard/agents/invoice";
import Layout from "components/dashboard/pageBody/Layout";
import { Dispatch, FC } from "react";

interface AgentInvoiceProps {
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
  isTabletOrMobile: boolean;
}
const AgentInvoiceScreen: FC<AgentInvoiceProps> = ({
  open,
  setOpen,
  isTabletOrMobile,
}) => {
  return (
    <Layout open={open} setOpen={setOpen} isTabletOrMobile={isTabletOrMobile}>
      <BodyAgentInvoice />
    </Layout>
  );
};

export default AgentInvoiceScreen;
