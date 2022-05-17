import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { requestReports } from "../utils/request";

export const getReports = createAsyncThunk(
  "/reports/post",
  async ({ payload, requestType, title }, { fulfillWithValue }) => {
    const data = await requestReports(payload);
    return fulfillWithValue({ data, type: requestType, title });
  }
);

const initialState = {
  data: {},
  type: null,
  title: "",
};

export const reportsSlice = createSlice({
  name: "reports",
  initialState,
  extraReducers: {
    [getReports.fulfilled]: (_state, action) => {
      return action.payload;
    },
    [getReports.rejected]: (_state, action) => action.payload,
  },
});

export default reportsSlice.reducer;
