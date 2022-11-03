import LoginBody from "components/Authentication/Login";
import Layout from "components/Layout";
import { GetServerSideProps } from "next";
import { getCookie } from "redux/auth/authService";
import jwtDecode from "jwt-decode";
import { ToastContainer } from "react-toastify";

const Login = () => {
  return (
    <Layout>
      <LoginBody />
      <ToastContainer />
    </Layout>
  );
};

export default Login;
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
