import Layout from "components/dashboard/Layout";
import jwtDecode from "jwt-decode";
import { GetServerSideProps } from "next";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { ToastContainer } from "react-toastify";
import { getAgentById } from "redux/agents/agentSlice";
import { getCookie } from "redux/auth/authService";
import { logout, getUser } from "redux/auth/authSlice";
import { wrapper } from "redux/store";
import EditAgentScreen from "screens/agents/edit-agent-screen";

const EditAgent = () => {
  const [open, setOpen] = useState(false);
  const isTabletOrMobile = useMediaQuery({ maxWidth: 991 });
  return (
    <Layout isTabletOrMobile={isTabletOrMobile} open={open} setOpen={setOpen}>
      <EditAgentScreen
        open={open}
        isTabletOrMobile={isTabletOrMobile}
        setOpen={setOpen}
      />
      <ToastContainer />
    </Layout>
  );
};

export default EditAgent;
export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (ctx): Promise<any> => {
    const token: string = getCookie("token", ctx.req);
    console.log(ctx.query);

    if (token) {
      if (jwtDecode<any>(token).exp < Date.now() / 1000) {
        await store.dispatch<any>(logout());
      } else {
        await store.dispatch<any>(getAgentById(ctx.query.id as string));
        await store.dispatch<any>(getUser(token));
      }
    } else {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    }
  });
