import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../components/User/UserSlice";

const rootReducer = {
  user: userReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
