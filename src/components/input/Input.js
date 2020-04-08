import React from "react";
import PropTypes from "prop-types";

import "./Input.css";

/** How to use the components
 * <Input type="text" name="firstName" customClassName="some-class"/>
 */

const Input = (props) => {
  const {
    customClassName,
    handleBlur,
    handleChange,
    value,
    name,
    type,
    placeHolder,
    ...customProps
  } = props;

  return (
    <input
      {...customProps}
      onChange={handleChange}
      type={type}
      onBlur={handleBlur}
      placeholder={placeHolder}
      className={customClassName}
      name={name}
      value={value}
    />
  );
};

Input.propTypes = {};

export default Input;
