import React from "react";
import { Provider } from "react-redux";
import { ToastContainer, Slide, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
} from "@fortawesome/free-solid-svg-icons";

import "./App.css";
import Signup from "./views/signup/Signup";
import Login from "./views/login/Login";
import setupStore from "./store/reducer";
import Event from "./views/event/Event";
import HomePage from "./views/homepage/HomePage";
import Myibloov from "./views/myibloov/Myibloov";

const store = setupStore();
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
  faBell
);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/signup" component={Signup} />
            <Route path="/signin" component={Login} />
            <Route path="/events" component={Event} />
            <Route path="/myibloov" component={Myibloov} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
