import { combineReducers } from "redux";
import signupReducer from "../../views/signup/signup.reducer";
import loginReducer from "../../views/login/login.reducer";
import createEventReducer from "../../views/createEvent/createEvent.reducer";
import homepageReducer from "../../views/homepage/homePage.reducer";
import singleEventReducer from "../../views/singleEvent/singleEvent.reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import friendPageReducer from "../../views/friendPage/friendPage.reducer";
import createWishlistReducer from "../../views/createWishlist/createWishlist.reducer";
import allWishlistReducer from "../../views/createWishlist/allWishlist.reducer";

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
  friend: friendPageReducer,
  wishlist: createWishlistReducer,
  allWishlist: allWishlistReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
export default persistedReducer;
