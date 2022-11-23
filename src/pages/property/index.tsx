import Layout from "components/Layout";
import jwtDecode from "jwt-decode";
import { GetServerSideProps } from "next";
import { getCookie } from "redux/auth/authService";
import { getUser, logout } from "redux/auth/authSlice";
import { getAllProperty } from "redux/property/propertySlice";
import { wrapper } from "redux/store";
import PropertyListScreen from "screens/property";
import { Data } from "utils/interface";

const Property = () => {
  return (
    <Layout>
      <PropertyListScreen />
    </Layout>
  );
};

export default Property;
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
