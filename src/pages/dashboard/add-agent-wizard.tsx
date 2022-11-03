import Layout from "components/dashboard/Layout";
import jwtDecode from "jwt-decode";
import { GetServerSideProps } from "next";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { getCookie } from "redux/auth/authService";
import AddAgentWizardScreen from "screens/agents/add-agent-wizard-screen";

const AddAgentWizard = () => {
  const [open, setOpen] = useState(false);
  const isTabletOrMobile = useMediaQuery({ maxWidth: 991 });
  return (
    <Layout isTabletOrMobile={isTabletOrMobile} open={open} setOpen={setOpen}>
      <AddAgentWizardScreen
        open={open}
        isTabletOrMobile={isTabletOrMobile}
        setOpen={setOpen}
      />
    </Layout>
  );
};

export default AddAgentWizard;
export const getServerSideProps: GetServerSideProps = async (context) => {
  const token: string = getCookie("token", context.req);

  if (token) {
    if (jwtDecode<any>(token).exp < Date.now() / 1000) {
      return {
        props: {
          token,
          white: true,
        },
      };
    }
  } else {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return { props: { white: true } };
};
