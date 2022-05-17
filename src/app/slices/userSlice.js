import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { requestUsers } from "../utils/request";

export const getUsers = createAsyncThunk("/users/get", async () => {
  const data = await requestUsers();
  return data;
});

const initialState = {};

export const userSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: {
    [getUsers.fulfilled]: (_state, action) => {
      return action.payload;
    },
    [getUsers.rejected]: (_state, action) => action.payload,
  },
});

export default userSlice.reducer;
