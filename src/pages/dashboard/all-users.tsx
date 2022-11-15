import Layout from "components/dashboard/Layout";

import { useState } from "react";
import AllUserScreen from "screens/manageusers/all-users-screen";

import { useMediaQuery } from "react-responsive";
import { wrapper } from "redux/store";
import jwtDecode from "jwt-decode";
import { GetServerSideProps } from "next";
import { getCookie } from "redux/auth/authService";
import { logout, getAllUsers, getUser } from "redux/auth/authSlice";

const AllUser = () => {
  const [open, setOpen] = useState(false);
  const isTabletOrMobile = useMediaQuery({ maxWidth: 991 });
  return (
    <Layout isTabletOrMobile={isTabletOrMobile} open={open} setOpen={setOpen}>
      <AllUserScreen
        open={open}
        isTabletOrMobile={isTabletOrMobile}
        setOpen={setOpen}
      />
    </Layout>
  );
};

export default AllUser;
export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (context): Promise<any> => {
    const token: string = getCookie("token", context.req);

    if (token) {
      if (jwtDecode<any>(token).exp < Date.now() / 1000) {
        await store.dispatch<any>(logout());
      } else {
        await store.dispatch<any>(getUser(token));
        await store.dispatch<any>(getAllUsers(token));
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
