import axios from "../../utils/axiosConfig";
// import axios from "axios";
import { FOLLOW_USER, FOLLOW_USER_ERROR } from "../../store/actionTypes";
import { getUser } from "../../utils/helper";

export const toggleFollowUser = () => {
  return {
    type: FOLLOW_USER,
  };
};

export const toggleFollowUserError = () => {
  return {
    type: FOLLOW_USER_ERROR,
  };
};

export const followUser = (userId) => {
  const { token } = getUser();
  return (dispatch) => {
    return axios
      .post(
        `/v1/user/follow/${userId}`,
        {},
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        const { data } = response.data;
        dispatch(toggleFollowUser(data));
      })
      .catch((error) => {
        dispatch(toggleFollowUserError("error"));
      });
  };
};
