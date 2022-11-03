import { wrapper } from "../redux";
import HomeSection from "components/Home/Homesection";
import Layout from "components/Layout";
import jwtDecode from "jwt-decode";
import { GetServerSideProps } from "next";
import { getCookie } from "redux/auth/authService";
import { logout, getUser } from "redux/auth/authSlice";

export default function Home() {
  return (
    <Layout>
      <HomeSection />
      <h1>Hello world!</h1>
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
