import React, { useReducer, useEffect, Fragment } from "react";
import PropTypes from "prop-types";

import "./FormInput.css";

/** How to use the components
 * <Input type="text" name="firstName" customClassName="some-class"/>
 */



const FormInput = (props) => {
  const {
    textArea,
    customClassName,
    handleBlur,
    handleChange,
    value,
    name,
    type,
    placeHolder,
    onInputChange,
    id,
    errorText,
    required,
    ...customProps
  } = props;

  const initialState = {
    value: "",
    isValid: props.initiallyValid,
    touched: false,
  };

  const [inputState, dispatch] = useReducer(inputReducer, initialState);

  useEffect(() => {
    if (inputState.touched) {
      onInputChange(id, inputState.value, inputState.isValid);
    }

    // if (value) {
    //   onInputChange(id, value, inputState.isValid);
    // }
  }, [inputState, onInputChange, id]);

  const textChangeHandler = (e) => {
    const text = e.target.value;

    const letters = /^[A-Za-z]+$/;
    const phoneNumber = /^[0-9]+$/;
    //const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isValid = true;
    if (required && text.trim().length === 0) {
      isValid = false;
    }
    if (name === "email" && !emailRegex.test(text.toLowerCase())) {
      isValid = false;
    }

    if (name === "name" && !letters.test(text.toLowerCase())) {
      isValid = false;
    }
    if (name === "phoneNumber" && !phoneNumber.test(text)) {
      isValid = false;
    }

    dispatch({ type: INPUT_CHANGE, value: text, isValid: isValid });
  };

  const lostFocusHandler = () => {
    dispatch({ type: INPUT_BLUR });
  };

  return (
    <Fragment>
      {textArea ? (
        <Fragment>
          <textarea
            className="form-control"
            name={name}
            id={id}
            placeholder="Tell us about he event"
            rows="4"
            value={inputState.value || value}
            onChange={(e) => textChangeHandler(e)}
            onBlur={lostFocusHandler}
          ></textarea>
          <p className="input-error">
            {!inputState.isValid && inputState.touched ? errorText : ""}
          </p>
        </Fragment>
      ) : (
        <Fragment>
          {" "}
          <input
            {...customProps}
            type={type}
            placeholder={placeHolder}
            className={customClassName}
            name={name}
            value={inputState.value || value}
            onChange={(e) => textChangeHandler(e)}
            onBlur={lostFocusHandler}
          />
          <p className="input-error">
            {!inputState.isValid && inputState.touched ? errorText : ""}
          </p>
        </Fragment>
      )}
    </Fragment>
  );
};

Input.propTypes = {
  customClassName: PropTypes.string,
  handleBlur: PropTypes.func,
  handleChange: PropTypes.func,
  value: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  placeHolder: PropTypes.string,
  onInputChange: PropTypes.func,
  id: PropTypes.string,
  errorText: PropTypes.string,
  required: PropTypes.bool,
};

export default Input;
