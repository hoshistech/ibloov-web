import React, { useReducer, useRef } from "react";
import PropTypes from "prop-types";
import "./RadioInput.css";

const SENIOR_CITIZEN = "SENIOR_CITIZEN";
const CHILDREN_ONLY = "CHILDREN_ONLY";
const WOMEN_ONLY = "WOMEN_ONLY";

const restrictReducer = (state, action) => {
  console.log("action", action);
  switch (action.type) {
    case SENIOR_CITIZEN:
      return {
        ...state,
        seniorCitizen: !state.radios.seniorCitizen,
        value: action.value,
      };
    case CHILDREN_ONLY:
      return {
        ...state,
        childrenOnly: state.radios.childrenOnly,
        value: state.radios.childrenOnly ? "" : action.value,
      };
    case WOMEN_ONLY:
      return {
        ...state,
        womenOnly: !state.radios.womenOnly,
        value: action.value,
      };

    default:
      return state;
  }
};

const RadioInput = (props) => {
  const restrictionRef = useRef();

  const initialState = {
    radios: {
      womenOnly: false,
      seniorCitizen: false,
      none: false,
      childrenOnly: false,
      noChildren: false,
      adult: false,
    },

    value: null,
  };

  const [state, dispatch] = useReducer(restrictReducer, initialState);

  const {
    radioName,
    customClass,
    name,
    id,
    checkedClass,
    labelName,
    onSelectOption,
  } = props;

  console.log(55, checkedClass);

  const selectOptionHandler = (e, name) => {
    // e.preventDefault();

    console.log(111, e.target.value);
    // const name = e.target.name;
    // console.log(222, p);

    dispatch({ type: name, value: name });
  };

  // const selectOptionHandler = (e) => {
  //   console.log(111, e.target);
  //   console.log(222, restrictionRef.current);
  // };
  // checked="checked"
  // const checked = true;
  return (
    <label
      class="container-input-radio"
      name={labelName}
      onClick={(e) => selectOptionHandler(e, name)}
      ref={restrictionRef}
      id={state.value}
    >
      <input type="radio" />
      <span class="checkmark" name={name}></span>
      {/* {radioName} */}
      <p className={checkedClass} id={id} name={name}>
        {radioName}
      </p>
    </label>
  );
};

RadioInput.propTypes = {};

export default RadioInput;
