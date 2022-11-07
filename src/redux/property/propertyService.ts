import axios from "axios";
import { API_URL } from "utils/index";

// CREATE PROPERTY
const createProperty = async (propertyData: any, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.post(
    `${API_URL}/property`,
    propertyData,
    config
  );
  return data;
};

const propertyService = { createProperty };
export default propertyService;
