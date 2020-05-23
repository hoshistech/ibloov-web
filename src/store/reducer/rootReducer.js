import { combineReducers } from "redux";
import signupReducer from "../../views/signup/signup.reducer";
import loginReducer from "../../views/login/login.reducer";
import createEventReducer from "../../views/createEvent/createEvent.reducer";
import homepageReducer from "../../views/homepage/homePage.reducer";
import singleEventReducer from "../../views/singleEvent/singleEvent.reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import friendPageReducer from "../../views/friendPage/friendPage.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["allEvents"],
};
const rootReducer = combineReducers({
  signup: signupReducer,
  login: loginReducer,
  createEvent: createEventReducer,
  allEvents: homepageReducer,
  singleEvent: singleEventReducer,
  friend: friendPageReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
export default persistedReducer;
