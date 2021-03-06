import React from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import Button from "../button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./AuthNavbar.css";
import notification from "../../assets/images/notification.png";
import avatarPlaceHolder from "../../assets/images/profile_placeholder_small.gif";
import ProgressiveImage from "../progressiveImage/ProgressiveImage";

const AuthNavbar = (props) => {
  const { user, handleLogout } = props;
  const { firstName, lastName, avatar } = user;

  return (
    <ul className="navbar-nav header-list-container">
      <li className="nav-item">
        <NavLink
          activeClassName="selected-path"
          className="nav-link"
          to="/events"
        >
          Events
        </NavLink>
        <div className="navlink-border-bottom"></div>
      </li>
      <li className="nav-item active">
        <NavLink
          activeClassName="selected-path"
          className="nav-link"
          to="/dashboard"
        >
          Dashboard <span className="sr-only">(current)</span>
        </NavLink>
        <div className="navlink-border-bottom"></div>
      </li>
      <li className="nav-item">
        <NavLink
          activeClassName="selected-path"
          className="nav-link"
          to="/myibloov"
        >
          My ibloov
        </NavLink>
        <div className="navlink-border-bottom"></div>
      </li>
      <li className="nav-item">
        <NavLink
          activeClassName="selected-path"
          className="nav-link"
          to="/myfriends"
        >
          My friends
        </NavLink>
        <div className="navlink-border-bottom"></div>
      </li>
      {/* <li className="nav-item">
        <NavLink activeClassName="selected-path" to="#">
          <div className="nav-notification-container">
            <img src={notification} className="nav-notification" alt="card" />
            <span>2</span>
          </div>
        </NavLink>
      </li> */}
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
            <ProgressiveImage
              src={avatar ? avatar : avatarPlaceHolder}
              customClass="nav-user-image"
              placeholder=""
              alt="card"
            />
          </Link>
          <span className="mr-3">{`${firstName} ${lastName}`}</span>
          <FontAwesomeIcon className="pt-1 navbar-icon" icon="chevron-down" />
        </div>
        <div
          className="dropdown-menu auth-nav-dropdown"
          aria-labelledby="navbarDropdown"
        >
          <Link
            className="dropdown-item"
            to={{
              pathname: "/myibloov",
              state: { action: "newEvent" },
            }}
          >
            New Event
          </Link>
          <Link className="dropdown-item" to="/" onClick={handleLogout}>
            Logout
          </Link>
          {/* <a className="dropdown-item" href="#">
            Another action
          </a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">
            Something else here
          </a> */}
        </div>
      </li>
    </ul>
  );
};

AuthNavbar.propTypes = {
  user: PropTypes.object.isRequired,
};

export default AuthNavbar;
