import React, { useEffect } from "react";
import { Provider } from "react-redux";
import ReduxToastr from "react-redux-toastr";
import "react-toastify/dist/ReactToastify.min.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faTwitter,
  faFacebookF,
  faLinkedinIn,
  faInstagram,
  faGoogle,
  faGooglePlusG,
} from "@fortawesome/free-brands-svg-icons";

import {
  faShareAlt,
  faHeart,
  faChevronDown,
  faBell,
  faCalendarAlt,
  faClock,
  faGift,
  faHandHolding,
  faMusic,
  faMapMarkerAlt,
  faCheckCircle,
  faArrowLeft,
  faTimesCircle,
  faSearch,
  faEllipsisV,
  faBars,
  faUser,
  faPhoneAlt,
  faEnvelope,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import "react-redux-toastr/lib/css/react-redux-toastr.min.css";

import "./App.css";
import Signup from "./views/signup/Signup";
import Login from "./views/login/Login";
// import setupStore from "./store/reducer";
import Event from "./views/event/Event";
import HomePage from "./views/homepage/HomePage";
import { checkAuth, getUser } from "./utils/helper";
import { userLoginSuccess } from "./views/login/login.action";
import PrivateRoute from "./views/PrivateRouter/PrivateRoute";
import TestPage from "./views/testPage/TestPage";
import Myibloov from "./views/myibloov/Myibloov";
import Dashboard from "./views/dashboard/Dashboard";
import VerifyPhoneNumber from "./views/verifyPhoneNumber/VerifyPhoneNumber";
import SingleEvent from "./views/singleEvent/SingleEvent";
import Footer from "./components/footer/Footer";
import { persistStore } from "redux-persist";

import { setupStore } from "./store/reducer/index";
import { PersistGate } from "redux-persist/integration/react";
import persistedReducer from "./store/reducer/rootReducer";
import FriendPage from "./views/friendPage/FriendPage";
import Axios from "axios";
import { getUserFollowing } from "./views/friendPage/friendPage.action";
import PrivacyPolicy from "./views/privacyPolicy/PrivacyPolicy";
import ContactUs from "./views/contactUs/ContactUs";

const store = setupStore(persistedReducer);
const persistor = persistStore(store);

if (localStorage.token) {
  const isAuthenticated = checkAuth();
  if (isAuthenticated) {
    //dispatch user details
    const { token, user } = getUser();
    store.dispatch(userLoginSuccess(token, user));
  }
}

library.add(
  faShareAlt,
  faMusic,
  faGoogle,
  faGooglePlusG,
  faHeart,
  faChevronDown,
  faTwitter,
  faFacebookF,
  faLinkedinIn,
  faInstagram,
  faBell,
  faCalendarAlt,
  faClock,
  faGift,
  faHandHolding,
  faMapMarkerAlt,
  faCheckCircle,
  faArrowLeft,
  faTimesCircle,
  faSearch,
  faEllipsisV,
  faBars,
  faUser,
  faPhoneAlt,
  faEnvelope,
  faGlobe
);

function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for
        <code>{location.pathname}</code>
        <br />
        coming up with a 404 design soon
      </h3>
    </div>
  );
}
function App() {
  // https://ipapi.co/json/
  return (
    <Provider store={store}>
      <ReduxToastr
        preventDuplicates
        getState={(state) => state.toastr} // This is the default
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar
        closeOnToastrClick
      />
      <PersistGate persistor={persistor}>
        <Router>
          <div className="App">
            <Switch>
              <Route path="/signup">
                <Signup />
              </Route>
              <Route path="/test">
                <TestPage />
              </Route>
              <Route path="/signin">
                <Login />
              </Route>
              <Route path="/events">
                <div>
                  <Event />
                  <Footer />
                </div>
              </Route>
              <Route path="/contact" exact>
                <div>
                  <ContactUs />
                  <Footer />
                </div>
              </Route>
              <Route path="/" exact>
                <div>
                  <HomePage />
                  <Footer />
                </div>
              </Route>
              <Route path="/event/:eventId" exact>
                <SingleEvent />
              </Route>
              <Route path="/privacy" exact>
                <PrivacyPolicy />
              </Route>
              <PrivateRoute path="/dashboard">
                <Dashboard />
              </PrivateRoute>
              <PrivateRoute path="/myibloov">
                <Myibloov />
              </PrivateRoute>
              <PrivateRoute path="/myfriends">
                <FriendPage />
              </PrivateRoute>
              <PrivateRoute path="/verify-phone">
                <VerifyPhoneNumber />
              </PrivateRoute>
              <Route path="*">
                <NoMatch />
              </Route>
            </Switch>
          </div>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
