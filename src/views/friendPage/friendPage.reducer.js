import { updateObject } from "../../utils/helper";
import {
  FOLLOW_USER,
  FOLLOW_USER_ERROR,
  FETCH_ALL_FRIEND_REQUEST_START,
  FETCH_ALL_FRIEND_REQUEST_SUCCESS,
  FETCH_ALL_FRIEND_REQUEST_FAIL,
  FETCH_ALL_USER_FOLLOWING_SUCCESS,
  FETCH_ALL_USER_FOLLOWING_FAIL,
  FETCH_USER_FRIENDS_START,
  FETCH_USER_FRIENDS_SUCCESS,
  FETCH_USER_FRIENDS_FAIL,
  FRIEND_START,
  FRIEND_ERROR,
  CREATE_GROUP_SUCCESS
} from "../../store/actionTypes";

const initialState = {
  loading: false,
  error: null,
  user: null,
  friendRequestList: null,
  friends: null,
  group: null
};

const followUserSuccess = (state, action) => {
  return updateObject(state, {
    user: action.user,
  });
};

const followUserFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
  });
};

const fetchFriendRequestStart = (state, action) => {
  return updateObject(state, {
    loading: true,
  });
};

const fetchFriendRequestSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    friendRequestList: action.friendRequestList,
  });
};

const fetchFriendRequestFail = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: action.error,
  });
};

const fetchUserFollowingSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    userFollowing: action.followingList,
  });
};

const fetchUserFollowingFail = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: action.error,
  });
};

const fetchUserFriendsStart = (state, action) => {
  return updateObject(state, {
    loading: true,
  });
};

const fetchUserFriendsSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    friends: action.friends,
  });
};

const fetchUserFriendsFail = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: action.error,
  });
};


const friendStart = (state, action) => {
  return updateObject(state, {
    loading: true,
  });
};

const createGroupSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    group: action.group,
  });
};

const friendFail = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: action.error,
  });
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW_USER:
      return followUserSuccess(state, action);
    case FOLLOW_USER_ERROR:
      return followUserFail(state, action);
    case FETCH_ALL_FRIEND_REQUEST_START:
      return fetchFriendRequestStart(state, action);
    case FETCH_ALL_FRIEND_REQUEST_SUCCESS:
      return fetchFriendRequestSuccess(state, action);
    case FETCH_ALL_FRIEND_REQUEST_FAIL:
      return fetchFriendRequestFail(state, action);
    case FETCH_ALL_USER_FOLLOWING_SUCCESS:
      return fetchUserFollowingSuccess(state, action);
    case FETCH_ALL_USER_FOLLOWING_FAIL:
      return fetchUserFollowingFail(state, action);
    case FETCH_USER_FRIENDS_START:
      return fetchUserFriendsStart(state, action);
    case FETCH_USER_FRIENDS_SUCCESS:
      return fetchUserFriendsSuccess(state, action);
    case FETCH_USER_FRIENDS_FAIL:
      return fetchUserFriendsFail(state, action);
    case FRIEND_START:
      return friendStart(state, action);
    case FRIEND_ERROR: 
      return friendFail(state, action);
    case CREATE_GROUP_SUCCESS: 
      return createGroupSuccess(state, action);

    default:
      return state;
  }
};
