import { updateObject } from "../../utils/helper";
import {
  USER_LOGIN_START,
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
} from "../../store/actionTypes";

const initialState = {
  error: null,
  token: null,
  loading: false,
};

const loginStart = (state) => {
  return updateObject(state, {
    loading: true,
  });
};

const loginSuccess = (state, action) => {
  return updateObject(state, {
    token: action.token,
    loading: false,
  });
};

const loginFail = (state, action) => {
  return updateObject(state, {
    error: action.authError,
    loading: false,
  });
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_SIGNUP_START:
      return loginStart(state, action);
    case USER_SIGNUP_SUCCESS:
      return loginSuccess(state, action);
    case USER_SIGNUP_FAIL:
      return loginFail(state, action);

    default:
      return state;
  }
};
