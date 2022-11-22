import { wrapper } from "../redux";
import Layout from "components/Layout";
import jwtDecode from "jwt-decode";
import { GetServerSideProps } from "next";
import { getCookie } from "redux/auth/authService";
import { logout, getUser } from "redux/auth/authSlice";
import HomeScreen from "screens/home";
import { getAllProperty } from "redux/property/propertySlice";
import { Data } from "utils/interface";

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

    const data: Data = {
      req: context.req,
      keyword: context.query.keyword ? context.query.keyword : "",
      bath: context.query.bath ? context.query.bath : "",
      max: context.query.max ? context.query.max : "",
      beds: context.query.beds ? context.query.beds : "",
      location: context.query.location ? context.query.location : "",
      maxa: context.query.maxa ? context.query.maxa : "",
      min: context.query.min ? context.query.min : "",
      mina: context.query.mina ? context.query.mina : "",
      pageNumber: context.query.pageNumber ? context.query.pageNumber : "",
      region: context.query.region ? context.query.region : "",
      rooms: context.query.room ? context.query.room : "",
      status: context.query.status ? context.query.status : "",
      type: context.query.type ? context.query.type : "",
    };

    await store.dispatch<any>(getAllProperty(data));

    if (token) {
      if (jwtDecode<any>(token).exp < Date.now() / 1000) {
        await store.dispatch<any>(logout());
      } else {
        await store.dispatch<any>(getUser(token));
      }
    }
  });
