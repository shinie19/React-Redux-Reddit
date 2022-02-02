import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [
      {
        title: "",
        description: "",
        tag: 0,
      },
    ],
  },
  reducers: {
    createPost(state, action) {
      state.posts = [...state.posts, action.payload];
    },
  },
});

const { reducer, actions } = postSlice;
export default reducer;
export const { createPost } = actions;
