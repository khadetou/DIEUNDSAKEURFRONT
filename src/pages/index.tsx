import { wrapper } from "../redux";
import Layout from "components/Layout";
import jwtDecode from "jwt-decode";
import { GetServerSideProps } from "next";
import { getCookie } from "redux/auth/authService";
import { logout, getUser } from "redux/auth/authSlice";
import HomeScreen from "screens/home";

export default function Home() {
  return (
    <Layout>
      <HomeScreen />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (context): Promise<any> => {
    const token: string = getCookie("token", context.req);

    if (token) {
      if (jwtDecode<any>(token).exp < Date.now() / 1000) {
        await store.dispatch<any>(logout());
      } else {
        await store.dispatch<any>(getUser(token));
      }
    }
  });
