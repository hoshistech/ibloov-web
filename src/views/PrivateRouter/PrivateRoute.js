import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children, ...rest }) => {
  const isAuthenticated = useSelector((state) => state.login.isAuthenticated);
  const token = localStorage.getItem("token");


  const authenticated = isAuthenticated && token ? true : false ;

  return (
    <Route
      {...rest}
      render={({ location }) =>
        authenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  children: PropTypes.object.isRequired,
  rest: PropTypes.array,
};

export default PrivateRoute;
