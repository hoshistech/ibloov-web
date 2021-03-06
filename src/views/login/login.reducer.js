import { updateObject } from "../../utils/helper";
import {
  USER_LOGIN_START,
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from "../../store/actionTypes";

const initialState = {
  error: null,
  token: null,
  loading: false,
  user: null,
  isAuthenticated: false,
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
    user: action.user,
    isAuthenticated: true,
  });
};

const loginFail = (state, action) => {
  return updateObject(state, {
    error: action.authError,
    loading: false,
  });
};

const logout = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    user: null,
    isAuthenticated: false,
    token: null,
  });
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_START:
      return loginStart(state, action);
    case USER_LOGIN_SUCCESS:
      return loginSuccess(state, action);
    case USER_LOGIN_FAIL:
      return loginFail(state, action);
    case USER_LOGOUT:
      return logout(state);

    default:
      return state;
  }
};
