import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import AuthNavbar from "../authNavbar/AuthNavbar";

import "./Navbar.css";
import NonAuthNavbar from "../nonAuthNavbar/NonAuthNavbar";

const Navbar = (props) => {
  const isAuth = true;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <Link className="navbar-brand" href="/">
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
        {isAuth ? <AuthNavbar /> : <NonAuthNavbar />}
      </div>
    </nav>
  );
};

Navbar.propTypes = {};

export default Navbar;
