import React from "react";
import PropTypes from "prop-types";
import Image from "../progressiveImage/ProgressiveImage";
import LogoImage from "../../assets/images/splash_logo.png";

import "./Logo.css";
const Logo = (props) => {
  return (
    <Image
      src={LogoImage}
      customClass="navbar-logo"
      placeholder=""
      alt="logo"
    />
  );
};

Logo.propTypes = {};

export default Logo;
