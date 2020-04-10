import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShareAlt, faHeart, faChevronDown } from "@fortawesome/free-solid-svg-icons";

import "./App.css";
import Signup from "./views/signup/Signup";
import Login from "./views/login/Login";
import setupStore from "./store/reducer";
import Event from "./views/event/Event";

const store = setupStore();

library.add(faShareAlt, faHeart, faChevronDown);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/signup" component={Signup} />
            <Route path="/signin" component={Login} />
            <Route path="/events" component={Event} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
