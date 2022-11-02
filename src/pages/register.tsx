import RegisterBody from "components/Authentication/Register";
import Layout from "components/Layout";
import jwtDecode from "jwt-decode";
import { GetServerSideProps } from "next";
import { ToastContainer } from "react-toastify";
import { getCookie } from "redux/auth/authService";

const Register = () => {
  return (
    <Layout>
      <RegisterBody />
      <ToastContainer />
    </Layout>
  );
};

export default Register;
export const getServerSideProps: GetServerSideProps = async (context) => {
  const token = getCookie("token", context.req);
  if (token) {
    if (jwtDecode<any>(token).exp > Date.now() / 1000) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }
  }
  return { props: {} };
};
