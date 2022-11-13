import Layout from "components/dashboard/Layout";
import jwtDecode from "jwt-decode";
import { GetServerSideProps } from "next";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { getMyAgent } from "redux/agents/agentSlice";
import { getCookie } from "redux/auth/authService";
import { logout, getUser } from "redux/auth/authSlice";
import { wrapper } from "redux/store";
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
export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (context): Promise<any> => {
    const token: string = getCookie("token", context.req);
    const data = {
      token,
      req: context.req,
      keyword: context.query.keyword,
      pageNumber: context.query.pageNumber,
    };
    if (token) {
      if (jwtDecode<any>(token).exp < Date.now() / 1000) {
        await store.dispatch<any>(logout());
      } else {
        await store.dispatch<any>(getMyAgent(data));
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
