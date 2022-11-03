import { wrapper } from "../../redux";
import Layout from "components/dashboard/Layout";
import PageBody from "components/dashboard/pageBody";
import jwtDecode from "jwt-decode";
import { GetServerSideProps } from "next";
import { useState } from "react";

import { useMediaQuery } from "react-responsive";
import { getCookie } from "redux/auth/authService";
import { logout, getUser } from "redux/auth/authSlice";

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

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (context): Promise<any> => {
    const token: string = getCookie("token", context.req);

    const data = {
      req: context.req,
      keyword: context.query.keyword,
      pageNumber: context.query.pageNumber,
    };
    // await store.dispatch<any>(getAllProducts(data));

    if (token) {
      if (jwtDecode<any>(token).exp < Date.now() / 1000) {
        await store.dispatch<any>(logout());
      } else {
        await store.dispatch<any>(getUser(token));
      }
    }
  });
