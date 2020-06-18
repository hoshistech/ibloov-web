import { updateObject } from "../../utils/helper";
import {
  FETCH_SINGLE_EVENT_START,
  FETCH_SINGLE_EVENT_SUCCESS,
  FETCH_SINGLE_EVENT_FAIL,
  FOLLOW_EVENT_SUCCESS,
  FOLLOW_EVENT_ERROR,
  LIKE_EVENT_SUCCESS,
  LIKE_EVENT_ERROR,
} from "../../store/actionTypes";

const initialState = {
  event: null,
  loading: false,
  error: null,
  follow: null,
  eventFollowers: null,
  eventLikes: null,
};

const fetchEventStart = (state) => {
  return updateObject(state, {
    loading: true,
  });
};

const fetchEventSuccess = (state, action) => {
  return updateObject(state, {
    event: action.event,
    loading: false,
    error: null,
    eventFollowers: action.isFollowing,
    eventLikes: action.eventLikes,
  });
};

const fetchEventFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

const followEventSuccess = (state, action) => {
  return updateObject(state, {
    eventFollowers: action.follow,
    error: null,
  });
};

const followEventFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
  });
};

const likeEventSuccess = (state, action) => {
  return updateObject(state, {
    eventLikes: action.eventLikes,
    error: null,
  });
};

const likeEventFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
  });
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SINGLE_EVENT_START:
      return fetchEventStart(state, action);
    case FETCH_SINGLE_EVENT_SUCCESS:
      return fetchEventSuccess(state, action);
    case FETCH_SINGLE_EVENT_FAIL:
      return fetchEventFail(state, action);
    case FOLLOW_EVENT_SUCCESS:
      return followEventSuccess(state, action);
    case FOLLOW_EVENT_ERROR:
      return followEventFail(state, action);
    case LIKE_EVENT_SUCCESS:
      return likeEventSuccess(state, action);
    case LIKE_EVENT_ERROR:
      return likeEventFail(state, action);

    default:
      return state;
  }
};
