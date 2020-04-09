import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "../button/Button";

import "./Navbar.css";
const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <Link className="navbar-brand" href="#">
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
        <ul className="navbar-nav header-list-container">
          <li className="nav-item active">
            <Link className="nav-link color-white" href="#">
              HOME <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link color-white" href="#">
              LIVE EVENTS
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link color-white" href="#">
              EXCLUSIVES
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link color-white" href="#">
              CONTACT
            </Link>
          </li>
          <li className="nav-item">
            <Button
              customClassName="header-button header-button-login bold-600"
              // onclick={this.onButtonPress.bind(this)}
            >
              Login
            </Button>
          </li>
          <li className="nav-item">
            <Button
              customClassName="header-button header-button-register bold-600"
              // onclick={this.onButtonPress.bind(this)}
            >
              Register
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

Navbar.propTypes = {};

export default Navbar;
