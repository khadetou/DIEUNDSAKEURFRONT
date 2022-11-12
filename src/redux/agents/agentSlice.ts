import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import agentService from "./agentService";

interface AgentState {
  agents: any[];
  agent: null;
  page: number;
  pages: number;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}
const initialState: AgentState = {
  agents: [],
  agent: null,
  page: 0,
  pages: 0,
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

// CREATE agent
export const createAgent = createAsyncThunk(
  "agent/create",
  async (agentData: any, thunkAPI: any) => {
    try {
      const token = thunkAPI.getState().auth.token;
      return await agentService.createAgent(agentData, token);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue({ message });
    }
  }
);

// GET ALL agent
export const getAllAgent = createAsyncThunk(
  "agent/getAll",
  async (data: any, thunkAPI: any) => {
    try {
      return await agentService.getAllAgent(
        data.req,
        data.keyword,
        data.pageNumber
      );
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

// UPDATE agent
export const updateAgent = createAsyncThunk(
  "agent/update",
  async (agentData: any, thunkAPI: any) => {
    console.log(agentData);
    try {
      const token = thunkAPI.getState().auth.token;
      const { id } = agentData;
      return await agentService.updateAgent(agentData.data, token, id);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

// GET agent BY
export const getAgentById = createAsyncThunk(
  "agent/getById",
  async (id: string, thunkAPI: any) => {
    try {
      return await agentService.getAgentById(id);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);
// GET MY agent
export const getMyAgent = createAsyncThunk(
  "agent/getMyPropety",
  async (data: any, thunkAPI: any) => {
    try {
      return await agentService.getMyAgent(
        data.token,
        data.req,
        data.keyword,
        data.pageNumber
      );
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

// CREATE REVIEWS
export const createReviews = createAsyncThunk(
  "create/review",
  async (agentsData: any, thunkAPI: any) => {
    try {
      const token = thunkAPI.getState().auth.token;
      return await agentService.createReview(
        agentsData.id,
        agentsData.data,
        token
      );
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

// DELETE agent
export const deleteAgent = createAsyncThunk(
  "agent/delete",
  async (id: string, thunkAPI: any) => {
    try {
      const token = thunkAPI.getState().auth.token;
      return await agentService.deleteAgent(id, token);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const agentSlice = createSlice({
  name: "agent",
  initialState,
  reducers: {
    reset: (state: AgentState) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(HYDRATE, (state, action) => {
        state.agents = action.payload.agent.agents;
        state.agent = action.payload.agent.agent;
        state.isError = action.payload.agent.isError;
        state.isLoading = action.payload.agent.isLoading;
        state.isSuccess = action.payload.agent.isSuccess;
        state.message = action.payload.agent.message;
      })
      .addCase(createAgent.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createAgent.fulfilled, (state: AgentState, action: any) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.agents.push(action.payload);
      })
      .addCase(createAgent.rejected, (state: AgentState, action: any) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getAllAgent.pending, (state: any) => {
        state.isLoading = true;
      })
      .addCase(getAllAgent.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        state.page = action.payload.page;
        state.pages = action.payload.pages;
        state.agents = action.payload.agents;
      })
      .addCase(getAllAgent.rejected, (state: any, action: any) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getAgentById.pending, (state: any) => {
        state.isLoading = true;
      })
      .addCase(getAgentById.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        state.agent = action.payload;
      })
      .addCase(getAgentById.rejected, (state: any, action: any) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(getMyAgent.pending, (state: any) => {
        state.isLoading = true;
      })
      .addCase(getMyAgent.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        state.page = action.payload.page;
        state.pages = action.payload.pages;
        state.agents = action.payload.agents;
      })
      .addCase(getMyAgent.rejected, (state: AgentState, action: any) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(updateAgent.pending, (state: any) => {
        state.isLoading = true;
      })
      .addCase(updateAgent.fulfilled, (state: AgentState, action: any) => {
        state.isSuccess = true;
        state.isLoading = false;
        state.agent = action.payload;
      })
      .addCase(updateAgent.rejected, (state: AgentState, action: any) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(deleteAgent.pending, (state: any) => {
        state.isLoading = true;
      })
      .addCase(deleteAgent.fulfilled, (state: AgentState, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.agents = state.agents.filter(
          (agent: any) => agent._id !== action.payload._id
        );
      })
      .addCase(deleteAgent.rejected, (state: AgentState, action: any) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(createReviews.rejected, (state: any, action: any) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(createReviews.pending, (state: any) => {
        state.isLoading = true;
      })
      .addCase(createReviews.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.agent = action.payload;
      });
  },
});

export const { reset } = agentSlice.actions;
export default agentSlice.reducer;
