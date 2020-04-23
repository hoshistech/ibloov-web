import { updateObject } from "../../utils/helper";
import {
  USER_SIGNUP_FAIL,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_START,
} from "../../store/actionTypes";

const initialState = {
  error: null,
  userDetails: null,
  loading: false,
};

const userSignupStart = (state) => {
  return updateObject(state, {
    loading: true,
  });
};

const userSignupSuccess = (state, action) => {
  return updateObject(state, {
    token: action.token,
    userDetails: action.authData,
    loading: false,
    error: null,
  });
};

const userSignupFail = (state, action) => {
  return updateObject(state, {
    error: action.authError,
    loading: false,
  });
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_SIGNUP_START:
      return userSignupStart(state, action);
    case USER_SIGNUP_SUCCESS:
      return userSignupSuccess(state, action);
    case USER_SIGNUP_FAIL:
      return userSignupFail(state, action);

    default:
      return state;
  }
};
