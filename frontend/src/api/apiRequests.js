import {
  updateStart,
  updateError,
  updateSuccess,
} from "../components/User/UserSlice";
import axios from "axios";

const updateUser = async (user, dispatch) => {
  dispatch(updateStart());

  try {
    const res = await axios.post("/v1/update", user);
    dispatch(updateSuccess(res.data));
  } catch (err) {
    dispatch(updateError());
  }
};

export { updateUser };
