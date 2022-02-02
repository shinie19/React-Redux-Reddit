import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../components/User/UserSlice";
import postReducer from "../components/Posts/PostSlice";

const rootReducer = {
  user: userReducer,
  post: postReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
