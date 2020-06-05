import axios from "../../utils/axiosConfig";
// import axios from "axios";
import {
  FOLLOW_USER,
  FOLLOW_USER_ERROR,
  FETCH_ALL_FRIEND_REQUEST_START,
  FETCH_ALL_FRIEND_REQUEST_SUCCESS,
  FETCH_ALL_FRIEND_REQUEST_FAIL,
  ACCEPT_FRIEND_REQUEST_SUCCESS,
  ACCEPT_FRIEND_REQUEST_FAIL,
  FETCH_ALL_USER_FOLLOWING_SUCCESS,
  FETCH_ALL_USER_FOLLOWING_FAIL,
} from "../../store/actionTypes";
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

export const fetchFriendRequestStart = () => {
  return {
    type: FETCH_ALL_FRIEND_REQUEST_START,
  };
};

export const fetchFriendRequestSuccess = (friendRequestList) => {
  return {
    type: FETCH_ALL_FRIEND_REQUEST_SUCCESS,
    friendRequestList,
  };
};

export const fetchFriendRequestFail = (error) => {
  return {
    type: FETCH_ALL_FRIEND_REQUEST_FAIL,
    error,
  };
};

export const acceptFriendRequestSuccess = (friendRequestList) => {
  return {
    type: ACCEPT_FRIEND_REQUEST_SUCCESS,
    friendRequestList,
  };
};

export const acceptFriendRequestFail = (error) => {
  return {
    type: ACCEPT_FRIEND_REQUEST_FAIL,
    error,
  };
};

export const getUserFollowingSuccess = (followingList) => {
  return {
    type: FETCH_ALL_USER_FOLLOWING_SUCCESS,
    followingList,
  };
};

export const getUserFollowingFailed = (error) => {
  return {
    type: FETCH_ALL_USER_FOLLOWING_FAIL,
    error,
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

export const getUserFollowing = (userId) => {
  const { token, user } = getUser();
  // if (!token) {
  //   return;
  // }
  if (!userId) {
    userId = user.id;
  }
  return (dispatch) => {
    return axios
      .get(`/v1/user/following/${userId}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const { data } = response.data;
        dispatch(getUserFollowingSuccess(data));
      })
      .catch((error) => {
        dispatch(getUserFollowingFailed("error"));
      });
  };
};

export const getFriendRequestList = () => {
  const { token } = getUser();
  return (dispatch) => {
    dispatch(fetchFriendRequestStart());
    return axios
      .get("/v1/user/followrequests", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const { data } = response.data;

        // const list = {
        //   accepted: data.accepted,
        //   ...data.requesteeId,
        // };
        dispatch(fetchFriendRequestSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchFriendRequestFail("error"));
      });
  };
};

export const acceptFriendRequest = (requestId) => {
  const { token } = getUser();
  return (dispatch) => {
    return axios
      .post(
        `/v1/request/accept/${requestId}`,
        {},
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        const { data } = response.data;
        dispatch(acceptFriendRequestSuccess(data));
      })
      .catch((error) => {
        dispatch(acceptFriendRequestFail("error"));
      });
  };
};

export const denyFriendRequest = (requestId) => {
  const { token } = getUser();
  return (dispatch) => {
    return axios
      .post(
        `/v1/request/deny/${requestId}`,
        {},
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        const { data } = response.data;
        dispatch(acceptFriendRequestSuccess(data));
      })
      .catch((error) => {
        dispatch(acceptFriendRequestFail("error"));
      });
  };
};
