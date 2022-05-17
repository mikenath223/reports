import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { requestGateways } from "../utils/request";

export const getGateways = createAsyncThunk("/gateways/get", async () => {
  const data = await requestGateways();
  return data;
});

const initialState = {};

export const gatewaySlice = createSlice({
  name: "gateways",
  initialState,
  extraReducers: {
    [getGateways.fulfilled]: (_state, action) => {
      return action.payload;
    },
    [getGateways.rejected]: (_state, action) => action.payload,
  },
});

export default gatewaySlice.reducer;
