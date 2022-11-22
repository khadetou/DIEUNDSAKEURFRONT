import axios from "axios";
import { API_URL } from "utils/index";
import { Data } from "utils/interface";

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
const getAllProperty = async (datas: Data) => {
  const {
    bath,
    beds,
    keyword,
    location,
    max,
    maxa,
    min,
    mina,
    pageNumber,
    region,
    rooms,
    status,
    type,
  } = datas;
  const { data } = await axios.get(
    `${API_URL}/property?keyword=${keyword}&pageNumber=${pageNumber}&type=${type}&status=${status}&min=${min}&max=${max}&mina=${mina}&maxa=${maxa}$bath=${bath}$beds=${beds}$rooms=${rooms}&region=${region}&location=${location}`
  );

  return data;
};

// UPDATE PRODUCT
const updateProperty = async (productData: any, token: any, id: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.put(
    `${API_URL}/property/${id}`,
    productData,
    config
  );

  return data;
};

// GET PROPERTY BY ID
const getPropertyById = async (id: string) => {
  const { data } = await axios.get(`${API_URL}/property/${id}`);
  return data;
};

// GET PROPERTY MY ID
const getMyProperty = async (
  token: string,
  req?: any,
  keyword: string = "",
  pageNumber = ""
) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.get(`${API_URL}/property/my-properties`, config);
  return data;
};

// CREATE REVIEW
export const createReview = async (
  id: string,
  reviewData: any,
  token: string
) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.post(
    `${API_URL}/property/${id}/reviews`,
    reviewData,
    config
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

const propertyService = {
  createProperty,
  deleteProperty,
  getAllProperty,
  createReview,
  updateProperty,
  getPropertyById,
  getMyProperty,
};
export default propertyService;
