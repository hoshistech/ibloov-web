import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import PropTypes from "prop-types";

import PrivateRoute from "./PrivateRoute";
import Myibloov from "../myibloov/Myibloov";
import Dashboard from "../dashboard/Dashboard";
import VerifyPhoneNumber from "../verifyPhoneNumber/VerifyPhoneNumber";
import Navbar from "../../components/navbar/Navbar";

const AuthRoute = (props) => {
  return (
    <div>
      <PrivateRoute path="/dashboard">
        <Dashboard />
      </PrivateRoute>
      <PrivateRoute path="/myibloov">
        <Myibloov />
      </PrivateRoute>
      <PrivateRoute path="/verify-phone">
        <VerifyPhoneNumber />
      </PrivateRoute>
    </div>
  );
};

AuthRoute.propTypes = {};

export default AuthRoute;
