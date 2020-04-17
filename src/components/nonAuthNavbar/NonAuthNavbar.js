import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "../button/Button";

const NonAuthNavbar = (props) => {
  return (
    <ul className="navbar-nav header-list-container">
      <li className="nav-item active">
        <Link className="nav-link color-white" to="/">
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
        <Link to="/signin">
          <Button
            customClassName="header-button header-button-login bold-600"
            // onclick={this.onButtonPress.bind(this)}
          >
            Login
          </Button>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/signup">
          <Button
            customClassName="header-button header-button-register bold-600"
            // onclick={this.onButtonPress.bind(this)}
          >
            Register
          </Button>
        </Link>
      </li>
    </ul>
  );
};

NonAuthNavbar.propTypes = {};

export default NonAuthNavbar;
