import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../../data/data";

const userSlice = createSlice({
  name: "users",
  initialState: userList,
  reducers: {
    createUser: (state, action) => {
      const foundEmail = state.find(
        (user) =>
          user.email.toLowerCase() === action.payload.email.toLowerCase()
      );

      if (foundEmail) {
        return alert("Email already registered");
      }

      state.push(action.payload);
    },
    updateUser: (state, action) => {
      const { email, user } = action.payload;

      const userIndex = state.findIndex((user) => user.email === email);

      if (userIndex !== -1) {
        state[userIndex] = { ...state[userIndex], ...user };
      }
    },
    deleteUser: (state, action) => {
      return state.filter((user) => user.email !== action.payload);
    },
  },
});

export const { createUser, loginUser, updateUser, deleteUser } =
  userSlice.actions;

export default userSlice.reducer;
