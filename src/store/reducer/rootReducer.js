import { combineReducers } from "redux";
import signupReducer from "../../views/signup/signup.reducer";

const rootReducer = combineReducers({
  signup: signupReducer,
});

export default rootReducer;
