import { updateObject } from "../../utils/helper";
import {
  FETCH_SINGLE_EVENT_START,
  FETCH_SINGLE_EVENT_SUCCESS,
  FETCH_SINGLE_EVENT_FAIL,
} from "../../store/actionTypes";

const initialState = {
  event: null,
  loading: false,
  error: null,
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
  });
};

const fetchEventFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
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

    default:
      return state;
  }
};
