import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../../data/data";

const userSlice = createSlice({
  name: "users",
  initialState: userList,
  reducers: {
    createUser: (state, action) => {
      console.log(action);
    },
    updateUser: (state, action) => {
      console.log(action);
    },
    deleteUser: (state, action) => {
      console.log(action);
    },
  },
});

export const { createUser, loginUser, updateUser, deleteUser } =
  userSlice.actions;

export default userSlice.reducer;
