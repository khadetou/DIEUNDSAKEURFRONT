import Layout from "components/dashboard/Layout";
import jwtDecode from "jwt-decode";
import { GetServerSideProps } from "next";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { getCookie } from "redux/auth/authService";
import { logout, getUser } from "redux/auth/authSlice";
import { wrapper } from "redux/store";
import AddUserWizardScreen from "screens/manageusers/add-user-wizard-screen";
import { ToastContainer } from "react-toastify";

const AddUserWizard = () => {
  const [open, setOpen] = useState(false);
  const isTabletOrMobile = useMediaQuery({ maxWidth: 991 });
  return (
    <Layout isTabletOrMobile={isTabletOrMobile} open={open} setOpen={setOpen}>
      <AddUserWizardScreen
        open={open}
        isTabletOrMobile={isTabletOrMobile}
        setOpen={setOpen}
      />
      <ToastContainer />
    </Layout>
  );
};

export default AddUserWizard;
export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (context): Promise<any> => {
    const token: string = getCookie("token", context.req);

    if (token) {
      if (jwtDecode<any>(token).exp < Date.now() / 1000) {
        await store.dispatch<any>(logout());
      } else {
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
