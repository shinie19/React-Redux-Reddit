import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "Shinie",
    age: "20",
    about: "I'm a software developer",
    avatarUrl: "https://i.redd.it/mozfkrjpoa261.png",
    themeColor: "#e69138",
    pending: false,
    error: false,
  },
  reducers: {
    updateStart(state) {
      state.pending = true;
    },

    updateError(state) {
      state.pending = false;
      state.error = true;
    },

    updateSuccess(state, action) {
      state.pending = false;
      state.error = false;

      //update
      state.name = action.payload.name;
      state.age = action.payload.age;
      state.about = action.payload.about;
      state.avatarUrl = action.payload.avatarUrl;
      state.themeColor = action.payload.themeColor;
    },
  },
});

const { reducer, actions } = userSlice;
export default reducer;
export const { updateStart, updateError, updateSuccess } = actions;
