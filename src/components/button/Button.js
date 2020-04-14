import React from "react";
import "./Button.css";

const Button = (props) => {
  const { customClassName, onClick, ...customProps } = props;

  return (
    <button
      {...customProps}
      type="button"
      onClick={onClick}
      className={`btn ${customClassName}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
