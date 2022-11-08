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

// GET ALL PRODUCTS

const getAllProperty = async (
  req?: any,
  keyword: string = "",
  pageNumber = ""
) => {
  const { data } = await axios.get(
    `${API_URL}/property?keyword=${keyword}&pageNumber=${pageNumber}`
  );

  return data;
};

// DELETE PROPERTY
const deleteProperty = async (id: string, token: any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.delete(`${API_URL}/property/${id}`, config);
  return data;
};

const propertyService = { createProperty, deleteProperty, getAllProperty };
export default propertyService;
