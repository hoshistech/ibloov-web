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
  FETCH_USER_FRIENDS_START,
  FETCH_USER_FRIENDS_SUCCESS,
  FETCH_USER_FRIENDS_FAIL,
  FRIEND_START,
  FRIEND_ERROR,
  CREATE_GROUP_SUCCESS
} from "../../store/actionTypes";
import { getUser } from "../../utils/helper";

export const toggleFollowUser = () => {
  return {
    type: FOLLOW_USER
  };
};

export const toggleFollowUserError = () => {
  return {
    type: FOLLOW_USER_ERROR
  };
};

export const fetchFriendRequestStart = () => {
  return {
    type: FETCH_ALL_FRIEND_REQUEST_START
  };
};

export const fetchFriendRequestSuccess = friendRequestList => {
  return {
    type: FETCH_ALL_FRIEND_REQUEST_SUCCESS,
    friendRequestList
  };
};

export const fetchFriendRequestFail = error => {
  return {
    type: FETCH_ALL_FRIEND_REQUEST_FAIL,
    error
  };
};

export const acceptFriendRequestSuccess = friendRequestList => {
  return {
    type: ACCEPT_FRIEND_REQUEST_SUCCESS,
    friendRequestList
  };
};

export const acceptFriendRequestFail = error => {
  return {
    type: ACCEPT_FRIEND_REQUEST_FAIL,
    error
  };
};

export const getUserFollowingSuccess = followingList => {
  return {
    type: FETCH_ALL_USER_FOLLOWING_SUCCESS,
    followingList
  };
};

export const getUserFollowingFailed = error => {
  return {
    type: FETCH_ALL_USER_FOLLOWING_FAIL,
    error
  };
};

export const fetchUserFriendsStart = () => {
  return {
    type: FETCH_USER_FRIENDS_START
  };
};

export const fetchUserFriendsSuccess = friends => {
  return {
    type: FETCH_USER_FRIENDS_SUCCESS,
    friends,
    friends
  };
};

export const fetchUserFriendsFail = error => {
  return {
    type: FETCH_USER_FRIENDS_FAIL,
    error
  };
};

export const friendStart = () => {
  return {
    type: FRIEND_START
  };
};

export const createGroupSuccess = group => {
  return {
    type: CREATE_GROUP_SUCCESS,
    group
  };
};

export const friendError = error => {
  return {
    type: FRIEND_ERROR,
    error
  };
};

export const followUser = userId => {
  const { token } = getUser();
  return dispatch => {
    return axios
      .post(
        `/v1/user/follow/${userId}`,
        {},
        {
          headers: {
            authorization: `Bearer ${token}`
          }
        }
      )
      .then(response => {
        const { data } = response.data;
        dispatch(toggleFollowUser(data));
      })
      .catch(error => {
        dispatch(toggleFollowUserError("error"));
      });
  };
};

export const getUserFollowing = userId => {
  const { user } = getUser();

  if (!userId) {
    userId = user.id;
  }
  return dispatch => {
    return axios(true)
      .get(`/v1/user/following/${userId}`)
      .then(response => {
        const { data } = response.data;
        dispatch(getUserFollowingSuccess(data));
      })
      .catch(error => {
        dispatch(getUserFollowingFailed("error"));
      });
  };
};

export const getUserFriends = () => {
  return dispatch => {
    dispatch(fetchUserFriendsStart());
    return axios(true)
      .get("/v1/user/friends")
      .then(response => {
        const { data } = response.data;
        dispatch(fetchUserFriendsSuccess(data.all));
      })
      .catch(error => {
        dispatch(fetchUserFriendsFail("error"));
      });
  };
};

export const getFriendRequestList = () => {
  return dispatch => {
    dispatch(fetchFriendRequestStart());
    return axios(true)
      .get("/v1/user/followrequests")
      .then(response => {
        const { data } = response.data;

        // const list = {
        //   accepted: data.accepted,
        //   ...data.requesteeId,
        // };
        dispatch(fetchFriendRequestSuccess(data));
      })
      .catch(error => {
        dispatch(fetchFriendRequestFail("error"));
      });
  };
};

export const acceptFriendRequest = requestId => {
  return dispatch => {
    return axios(true)
      .post(`/v1/request/accept/${requestId}`, {})
      .then(response => {
        const { data } = response.data;
        dispatch(acceptFriendRequestSuccess(data));
      })
      .catch(error => {
        dispatch(acceptFriendRequestFail("error"));
      });
  };
};

export const denyFriendRequest = requestId => {
  return dispatch => {
    return axios(true)
      .post(`/v1/request/deny/${requestId}`, {})
      .then(response => {
        const { data } = response.data;
        dispatch(acceptFriendRequestSuccess(data));
      })
      .catch(error => {
        dispatch(acceptFriendRequestFail("error"));
      });
  };
};

export const createGroup = (groupName, history) => {
  return dispatch => {
    dispatch(friendStart());
    return axios(true)
      .post("/v1/group/create", { name: groupName })
      .then(response => {
        const { data } = response.data;
        history.push({
          pathname: "/myfriends",
          state: { action: "group" },
        });

        dispatch(createGroupSuccess(data));
      })
      .catch(error => {
        dispatch(friendError("something went wrong"));
      });
  };
};
