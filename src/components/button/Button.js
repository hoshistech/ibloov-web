import React from "react";
import "./Button.css";

const Button = (props) => {
  const { customClassName, onclick } = props;
  return (
    <button
      type="button"
      onClick={onclick}
      className={`btn ${customClassName}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
