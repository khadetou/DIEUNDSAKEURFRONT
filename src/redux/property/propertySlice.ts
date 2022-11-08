import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import propertyService from "./propertyService";

interface PropertyState {
  properties: any[];
  property: null;
  page: number;
  pages: number;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}
const initialState: PropertyState = {
  properties: [],
  property: null,
  page: 0,
  pages: 0,
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

// CREATE PROPERTY
export const createProperty = createAsyncThunk(
  "property/create",
  async (propertyData: any, thunkAPI: any) => {
    try {
      const token = thunkAPI.getState().auth.token;
      return await propertyService.createProperty(propertyData, token);
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

// GET ALL PRODUCTS
export const getAllProperty = createAsyncThunk(
  "property/getAll",
  async (data: any, thunkAPI: any) => {
    console.log(data);
    try {
      return await propertyService.getAllProperty(
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

// DELETE PROPERTY
export const deleteProperty = createAsyncThunk(
  "property/delete",
  async (id: string, thunkAPI: any) => {
    try {
      const token = thunkAPI.getState().auth.token;
      return await propertyService.deleteProperty(id, token);
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

export const propertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {
    reset: (state: PropertyState) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(HYDRATE, (state, action) => {
        state.properties = action.payload.property.properties;
        state.property = action.payload.property.property;
        state.isError = action.payload.property.isError;
        state.isLoading = action.payload.property.isLoading;
        state.isSuccess = action.payload.property.isSuccess;
        state.message = action.payload.property.message;
      })
      .addCase(createProperty.pending, (state: PropertyState) => {
        state.isLoading = true;
      })
      .addCase(
        createProperty.fulfilled,
        (state: PropertyState, action: any) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.properties.push(action.payload);
        }
      )
      .addCase(createProperty.rejected, (state: PropertyState, action: any) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getAllProperty.pending, (state: any) => {
        state.isLoading = true;
      })
      .addCase(getAllProperty.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        state.page = action.payload.page;
        state.pages = action.payload.pages;
        state.properties = action.payload.properties;
      })
      .addCase(getAllProperty.rejected, (state: any, action: any) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteProperty.pending, (state: any) => {
        state.isLoading = true;
      })
      .addCase(deleteProperty.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.properties = state.properties.filter(
          (property: any) => property._id !== action.payload.id
        );
      })
      .addCase(deleteProperty.rejected, (state: PropertyState, action: any) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = propertySlice.actions;
export default propertySlice.reducer;
