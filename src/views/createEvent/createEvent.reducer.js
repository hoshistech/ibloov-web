import { updateObject } from "../../utils/helper";
import {} from "../../store/actionTypes";
import {
  CREATE_EVENT_START,
  CREATE_EVENT_SUCCESS,
  CREATE_EVENT_FAIL,
} from "../../store/actionTypes";

const initialState = {
  error: null,
  success: null,
  loading: false,
};

const createEventStart = (state) => {
  return updateObject(state, {
    loading: true,
  });
};

const createEventSuccess = (state, action) => {
  return updateObject(state, {
    success: action.message,
  });
};

const createEventFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_EVENT_START:
      return createEventStart(state, action);
    case CREATE_EVENT_SUCCESS:
      return createEventSuccess(state, action);
    case CREATE_EVENT_FAIL:
      return createEventFail(state, action);

    default:
      return state;
  }
};
