import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { requestProjects } from "../utils/request";

export const getProjects = createAsyncThunk("/projects/get", async () => {
  const data = await requestProjects();
  return data;
});

const initialState = {};

export const projectSlice = createSlice({
  name: "projects",
  initialState,
  extraReducers: {
    [getProjects.fulfilled]: (_state, action) => {
      return action.payload;
    },
    [getProjects.rejected]: (_state, action) => action.payload,
  },
});

export default projectSlice.reducer;
