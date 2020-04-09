import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Signup from "./views/signup/Signup";
import Login from "./views/login/Login";
import setupStore from "./store/reducer";
import Event from "./views/event/Event";

const store = setupStore();

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
