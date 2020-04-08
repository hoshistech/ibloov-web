import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Signup from "./views/signup/Signup";
import Login from "./views/login/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/signin" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
