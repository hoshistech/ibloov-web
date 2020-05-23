import { updateObject } from "../../utils/helper";
import { FOLLOW_USER, FOLLOW_USER_ERROR } from "../../store/actionTypes";

const initialState = {
  error: null,
  user: null,
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

export default (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW_USER:
      return followUserSuccess(state, action);
    case FOLLOW_USER_ERROR:
      return followUserFail(state, action);

    default:
      return state;
  }
};
