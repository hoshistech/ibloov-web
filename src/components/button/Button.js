import React from "react";
import "./Button.css";

const Button = (props) => {
  const { customClassName, onClick } = props;
  return (
    <button
      type="button"
      onClick={onClick}
      className={`btn ${customClassName}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
