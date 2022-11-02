import RegisterBody from "components/Authentication/Register";
import Layout from "components/Layout";
import { ToastContainer } from "react-toastify";

const Register = () => {
  return (
    <Layout>
      <RegisterBody />
      <ToastContainer />
    </Layout>
  );
};

export default Register;
