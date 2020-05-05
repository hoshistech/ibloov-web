import React from "react";
import { Link, useLocation } from "react-router-dom";
import AuthNavbar from "../authNavbar/AuthNavbar";

import "./Navbar.css";
import NonAuthNavbar from "../nonAuthNavbar/NonAuthNavbar";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../views/login/login.action";

const Navbar = (props) => {
  const { isAuthenticated, user } = useSelector((state) => state.login);

  const dispatch = useDispatch();

  const location = useLocation();
  const { pathname } = location;

  const onLogoutHandler = () => {
    dispatch(logout());
  };

  const paths = ["myibloov", "myfriends"];

  const found = paths.find((path) => path === pathname.slice(1));

  let removeAbsolute = "";
  if (found) {
    removeAbsolute = "remove-nav-absolute";
  }

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark ${removeAbsolute}`}>
      <Link className="navbar-brand" to="/">
        ibloov
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNavDropdown"
      >
        {isAuthenticated ? (
          <AuthNavbar user={user} handleLogout={onLogoutHandler} />
        ) : (
          <NonAuthNavbar />
        )}
      </div>
    </nav>
  );
};

Navbar.propTypes = {};

export default Navbar;
