import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const HomePage = (props) => {
  return (
    <div>
        <h2>Pages Available</h2>
      <ul>
        <li>
          <Link to="/signin">SignIn Page</Link>
        </li>
        <li>
          <Link to="/signup">SignUp Page</Link>
        </li>
        <li>
          <Link to="/events">Live Event Page</Link>
        </li>
      </ul>
    </div>
  );
};

HomePage.propTypes = {};

export default HomePage;
