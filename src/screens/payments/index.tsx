import Layout from "components/dashboard/pageBody/Layout";
import BodyPayments from "components/dashboard/payments";
import { Dispatch, FC } from "react";

interface PaymentsScreenProps {
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
  isTabletOrMobile: boolean;
}
const PaymentsScreen: FC<PaymentsScreenProps> = ({
  open,
  setOpen,
  isTabletOrMobile,
}) => {
  return (
    <Layout open={open} setOpen={setOpen} isTabletOrMobile={isTabletOrMobile}>
      <BodyPayments />
    </Layout>
  );
};

export default PaymentsScreen;
