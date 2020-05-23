import React from "react";
import Image from "../progressiveImage/ProgressiveImage";
import LogoImage from "../../assets/images/splash_logo.png";

import "./Logo.css";
const Logo = (props) => {
  const { customClassName } = props;
  return (
    <Image
      src={LogoImage}
      // customClass="navbar-logo"
      customClass={customClassName}
      placeholder=""
      alt="logo"
    />
  );
};

export default Logo;
