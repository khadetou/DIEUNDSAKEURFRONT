import axios from "axios";
import { API_URL } from "utils/index";

// CREATE AGENT
const createAgent = async (agentData: any, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.post(`${API_URL}/agent`, agentData, config);
  return data;
};

// GET ALL AGENT
const getAllAgent = async (
  req?: any,
  keyword: string = "",
  pageNumber = ""
) => {
  const { data } = await axios.get(
    `${API_URL}/agent?keyword=${keyword}&pageNumber=${pageNumber}`
  );

  return data;
};

// UPDATE AGENT
const updateAgent = async (agentData: any, token: any, id: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.put(`${API_URL}/agent/${id}`, agentData, config);

  return data;
};

// GET AGENT BY ID
const getAgentById = async (id: string) => {
  const { data } = await axios.get(`${API_URL}/agent/${id}`);
  return data;
};

// GET AGENT MY ID
const getMyAgent = async (
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
  const { data } = await axios.get(`${API_URL}/agent/my-properties`, config);
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
    `${API_URL}/agent/${id}/reviews`,
    reviewData,
    config
  );
  return data;
};

// DELETE AGENT
const deleteAgent = async (id: string, token: any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.delete(`${API_URL}/agent/${id}`, config);

  return data;
};

const agentService = {
  createAgent,
  deleteAgent,
  getAllAgent,
  createReview,
  updateAgent,
  getAgentById,
  getMyAgent,
};
export default agentService;
