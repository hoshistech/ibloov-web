import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./AuthNavbar.css";
import notification from "../../assets/images/notification.png";
import passport from "../../assets/images/passport.jpg";

const AuthNavbar = (props) => {
  return (
    <ul className="navbar-nav header-list-container">
      <li className="nav-item active">
        <Link className="nav-link color-white" to="/">
          DASHBOARD <span className="sr-only">(current)</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link color-white" to="/myibloov">
          MY iBLOOV
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link color-white" to="#">
          MY FRIENDS
        </Link>
      </li>
      <li className="nav-item">
        <Link to="#">
          <div className="nav-notification-container">
            <img src={notification} className="nav-notification" alt="card" />
            {/* <span>2</span> */}
          </div>
        </Link>
      </li>
      <li className="nav-item dropdown user-image-dropdown">
        <div
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          to="/signin"
        >
          <Link to="/signin" className="mr-3">
            <img src={passport} className="nav-user-image" alt="card" />
          </Link>
          <span className="mr-3">Damilola Adekoya</span>
          <FontAwesomeIcon className="pt-1 navbar-icon" icon="chevron-down" />
        </div>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">
            Action
          </a>
          <a className="dropdown-item" href="#">
            Another action
          </a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">
            Something else here
          </a>
        </div>
      </li>
    </ul>
  );
};

AuthNavbar.propTypes = {};

export default AuthNavbar;
