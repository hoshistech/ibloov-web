import React from "react";
import { Link } from "react-router-dom";
import Button from "../button/Button";

const NonAuthNavbar = (props) => {
  return (
    <ul className="navbar-nav header-list-container">
      <li className="nav-item active">
        <Link className="nav-link color-white" to="/">
          Home <span className="sr-only">(current)</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link color-white event-link" to="/events">
          Live events
        </Link>
      </li>
      {/* <li className="nav-item">
        <Link className="nav-link color-white" to="#">
          EXCLUSIVES
        </Link>
      </li> */}
      {/* <li className="nav-item">
        <Link className="nav-link color-white" to="#">
          CONTACT
        </Link>
      </li> */}
      <li className="nav-item">
        <Link to="/signin" className="login-btn" data-testid="login-btn">
          <Button
            customClassName="header-button header-button-login bold-600"
            onClick={() => {}}
            btndisabled={false}
          >
            Login
          </Button>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/signup" className="register-btn">
          <Button
            customClassName="header-button header-button-register bold-600"
            onClick={() => {}}
            btndisabled={false}
          >
            Register
          </Button>
        </Link>
      </li>
    </ul>
  );
};

export default NonAuthNavbar;
