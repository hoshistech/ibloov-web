import React from "react";
import PropTypes from "prop-types";
import ProgressiveImg from "react-progressive-image";

const ProgressiveImage = (props) => {
  const { src, placeholder, customClass, alt } = props;
  return (
    <ProgressiveImg src={src} placeholder={placeholder}>
      {(src) => <img className={customClass} src={src} alt={alt} />}
    </ProgressiveImg>
  );
};

ProgressiveImage.propTypes = {
  src: PropTypes.string.isRequired,
  customClass: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

export default ProgressiveImage;
