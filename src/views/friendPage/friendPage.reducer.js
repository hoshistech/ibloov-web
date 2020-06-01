import { updateObject } from "../../utils/helper";
import {
  FOLLOW_USER,
  FOLLOW_USER_ERROR,
  FETCH_ALL_FRIEND_REQUEST_START,
  FETCH_ALL_FRIEND_REQUEST_SUCCESS,
  FETCH_ALL_FRIEND_REQUEST_FAIL,
  FETCH_ALL_USER_FOLLOWING_SUCCESS,
  FETCH_ALL_USER_FOLLOWING_FAIL,
} from "../../store/actionTypes";

const initialState = {
  loading: false,
  error: null,
  user: null,
  friendRequestList: null,
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

    default:
      return state;
  }
};
