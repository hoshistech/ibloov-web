import React from "react";
import { Provider } from "react-redux";
import { ToastContainer, Slide, toast } from "react-toastify";
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
} from "@fortawesome/free-brands-svg-icons";

import {
  faShareAlt,
  faHeart,
  faChevronDown,
  faBell,
  faCalendarAlt,
  faClock,
  faGift,
  faHandHolding
} from "@fortawesome/free-solid-svg-icons";

import "./App.css";
import Signup from "./views/signup/Signup";
import Login from "./views/login/Login";
import setupStore from "./store/reducer";
import Event from "./views/event/Event";
import HomePage from "./views/homepage/HomePage";
import Myibloov from "./views/myibloov/Myibloov";
import Dashboard from "./views/dashboard/Dashboard";
import VerifyPhoneNumber from "./views/verifyPhoneNumber/VerifyPhoneNumber";
import { checkAuth, getUser } from "./utils/helper";
import { userLoginSuccess } from "./views/login/login.action";
import PrivateRoute from "./views/PrivateRouter/PrivateRoute";

const store = setupStore();

if (localStorage.token) {
  const isAuthenticated = checkAuth();
  if (isAuthenticated) {
    //dispatch user details
    const { token, user } = getUser();
    store.dispatch(userLoginSuccess(token, user));
  }
}

toast.configure({
  position: "top-center",
});

library.add(
  faShareAlt,
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
  faHandHolding
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
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/signin">
              <Login />
            </Route>
            <Route path="/events">
              <Event />
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path="/myibloov">
              <Myibloov />
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
    </Provider>
  );
}

export default App;
