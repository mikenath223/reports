import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { requestProjects } from "../utils/request";

export const getProjects = createAsyncThunk("/projects/get", async () => {
  const data = await requestProjects();
  return data;
});

const initialState = {
  projectType: "All Projects",
  gatewayType: "All Gateways",
  fromDate: null,
  toDate: null,
};

export const formSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setProjectType(state, action) {
      return {
        ...state,
        projectType: action.payload,
      };
    },
    setGatewayType(state, action) {
      return {
        ...state,
        gatewayType: action.payload,
      };
    },
    setFromDate(state, action) {
      return {
        ...state,
        fromDate: action.payload,
      };
    },
    setToDate(state, action) {
      return {
        ...state,
        toDate: action.payload,
      };
    },
  },
});

export const { setProjectType, setGatewayType, setFromDate, setToDate } =
  formSlice.actions;
export default formSlice.reducer;
