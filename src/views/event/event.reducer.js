import { updateObject } from "../../utils/helper";
import {
    FILTER_BY_CATEGORY,
    FILTER_BY_LOCATION
} from "../../store/actionTypes";

const initialState = {
  events: null,
  likedEvents: null,
  loading: false,
  userEvents: null,
};

const filterByCategory = (state) => {
  return updateObject(state, {
    loading: true,
  });
};

const filterByLocation = (state, action) => {
  return updateObject(state, {
    events: action.events,
    likedEvents: action.likedEvents,
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
    case FETCH_USER_EVENTS_START:
      return userEventStart(state, action);
    case FETCH_USER_EVENTS_SUCCESS:
      return userEventSuccess(state, action);
    case FETCH_USER_EVENTS_FAIL:
      return userEventFail(state, action);

    default:
      return state;
  }
};
