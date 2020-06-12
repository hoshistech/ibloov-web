import { updateObject } from "../../utils/helper";
import {} from "../../store/actionTypes";
import {
  CREATE_EVENT_START,
  CREATE_EVENT_SUCCESS,
  CREATE_EVENT_FAIL,
  CREATE_EVENT_END,
} from "../../store/actionTypes";

const initialState = {
  error: null,
  success: false,
  message: null,
  loading: false,
  data: null,
};

const createEventStart = (state) => {
  return updateObject(state, {
    loading: true,
  });
};

const createEventSuccess = (state, action) => {
  return updateObject(state, {
    success: true,
    message: action.message,
    data: action.data,
    loading: false,
  });
};

const createEventFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
    success: false,
  });
};

const createEventEnd = (state, action) => {
  return updateObject(state, {
    error: null,
    success: false,
    message: null,
    loading: false,
    data: null,
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
    case CREATE_EVENT_END:
      return createEventEnd(state, action);

    default:
      return state;
  }
};
