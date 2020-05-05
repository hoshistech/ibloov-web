import { updateObject } from "../../utils/helper";
import {
  FETCH_ALL_EVENTS_START,
  FETCH_ALL_EVENTS_SUCCESS,
  FETCH_ALL_EVENTS_FAIL,
} from "../../store/actionTypes";

const initialState = {
  events: null,
  likedEvents: null,
  loading: false,
};

const allEventStart = (state) => {
  return updateObject(state, {
    loading: true,
  });
};

const allEventSuccess = (state, action) => {
  return updateObject(state, {
    events: action.events,
    likedEvents: action.likedEvents,
    loading: false,
  });
};

const allEventFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_EVENTS_START:
      return allEventStart(state, action);
    case FETCH_ALL_EVENTS_SUCCESS:
      return allEventSuccess(state, action);
    case FETCH_ALL_EVENTS_FAIL:
      return allEventFail(state, action);

    default:
      return state;
  }
};
