import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const Button = (props) => {
  const { customClassName, onClick, btndisabled, ...customProps } = props;
  return (
    <button
      {...customProps}
      type="button"
      onClick={onClick}
      className={`btn ${customClassName}`}
      disabled={btndisabled}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  customClassName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  btndisabled: PropTypes.bool.isRequired,
};

export default Button;
