import { combineReducers } from "redux";
import signupReducer from "../../views/signup/signup.reducer";
import loginReducer from "../../views/login/login.reducer";

const rootReducer = combineReducers({
  signup: signupReducer,
  login: loginReducer,
});

export default rootReducer;
