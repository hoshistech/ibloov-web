import React from "react";
import PropTypes from "prop-types";
import ProgressiveImg from "react-progressive-image";
import imgPlaceholder from "../../assets/images/img_placeholder.gif";
const ProgressiveImage = props => {
  const { src, placeholder, customClass, alt } = props;
  return (
    <ProgressiveImg src={src} placeholder={placeholder || imgPlaceholder}>
      {src => <img className={customClass} src={src} alt={alt} />}
    </ProgressiveImg>
  );
};

ProgressiveImage.propTypes = {
  src: PropTypes.string.isRequired,
  customClass: PropTypes.string.isRequired,
  placeholder: PropTypes.string
};

export default ProgressiveImage;
