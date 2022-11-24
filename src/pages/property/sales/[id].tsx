import Layout from "components/Layout";
import jwtDecode from "jwt-decode";
import { GetServerSideProps } from "next";
import { getCookie } from "redux/auth/authService";
import { logout, getUser } from "redux/auth/authSlice";
import { getPropertyById } from "redux/property/propertySlice";
import { wrapper } from "redux/store";
import SinglePropertyScreen from "screens/property/singlePropertyScreen";

const Property = () => {
  return (
    <Layout>
      <SinglePropertyScreen />
    </Layout>
  );
};

export default Property;
export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (context): Promise<any> => {
    const token: string = getCookie("token", context.req);

    const {
      query: { id },
    } = context;

    await store.dispatch<any>(getPropertyById(id as string));

    if (token) {
      if (jwtDecode<any>(token).exp < Date.now() / 1000) {
        await store.dispatch<any>(logout());
      } else {
        await store.dispatch<any>(getUser(token));
      }
    }
  });
