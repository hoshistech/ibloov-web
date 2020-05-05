import { combineReducers } from "redux";
import signupReducer from "../../views/signup/signup.reducer";
import loginReducer from "../../views/login/login.reducer";
import createEventReducer from "../../views/createEvent/createEvent.reducer";
import homepageReducer from "../../views/homepage/homePage.reducer";

const rootReducer = combineReducers({
  signup: signupReducer,
  login: loginReducer,
  createEvent: createEventReducer,
  allEvents: homepageReducer,
});

export default rootReducer;
