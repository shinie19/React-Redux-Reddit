import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [
      {
        id: 0,
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
    deletePost(state, action) {
      let index = -1;
      state.posts.forEach((post, idx) => {
        if (post.id === action.payload) {
          index = idx;
          return;
        }
      });
      if (index > -1) {
        state.posts.splice(index, 1);
      }
    },
  },
});

const { reducer, actions } = postSlice;
export default reducer;
export const { createPost, deletePost } = actions;
