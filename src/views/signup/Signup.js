import React, { useState, useReducer, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./Signup.css";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { useDispatch, useSelector } from "react-redux";
import { authSignup } from "./signup.action";

const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE";

const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value,
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid,
    };
    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }
    return {
      formIsValid: updatedFormIsValid,
      inputValidities: updatedValidities,
      inputValues: updatedValues,
    };
  }
  return state;
};

const Signup = (props) => {
  const { history } = props;

  const [checkTerms, setCheckTerms] = useState(false);

  const emailExist = useSelector((state) => state.signup.error);

  const dispatch = useDispatch();

  const initilaState = {
    inputValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    },
    inputValidities: {
      email: false,
      password: false,
    },
    formIsValid: false,
  };

  const [formState, dispatchFormState] = useReducer(formReducer, initilaState);

  const inputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier,
      });
    },
    [dispatchFormState]
  );

  const handleCheck = () => {
    setCheckTerms(!checkTerms);
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    const newUser = {
      ...formState.inputValues,
    };

    dispatch(authSignup(newUser, history));
  };

  return (
    <section className="banner row">
      <div className="col-md-8 perfect-center">
        <h2 className="auth-logo  font-bold">ibloov LOGO</h2>
      </div>
      <div className="col-md-4 perfect-center">
        <div className="auth-container">
          <div>
            <h4 className="font-bold">Create an account</h4>
            <div>
              <p className="small-info-text">
                Already Registered?{" "}
                <Link to="/signin" className="font-bold text-dark">
                  {" "}
                  Sign in now!
                </Link>
              </p>
            </div>
          </div>
          <p className="signup-error">{emailExist}</p>
          <form className="auth-form">
            <div className="auth-input-container">
              <Input
                name="email"
                type="email"
                customClassName="form-control auth-input"
                id="email"
                placeHolder="Email address"
                aria-describedby="emailHelp"
                errorText="Please enter a valid email."
                required
                onInputChange={inputChangeHandler}
              />
            </div>
            <div className="auth-input-container">
              <Input
                name="name"
                type="text"
                customClassName="form-control auth-input"
                id="firstName"
                placeHolder="First Name"
                aria-describedby="firstName"
                errorText="Please enter a valid name."
                required
                onInputChange={inputChangeHandler}
              />
            </div>
            <div className="auth-input-container">
              <Input
                name="name"
                type="text"
                customClassName="form-control auth-input"
                id="lastName"
                placeHolder="Last Name"
                aria-describedby="lastName"
                errorText="Please enter a valid name."
                required
                onInputChange={inputChangeHandler}
              />
            </div>
            <div className="auth-input-container">
              <Input
                name="password"
                type="password"
                customClassName="form-control auth-input"
                id="password"
                placeHolder="Password"
                aria-describedby="passwordHelp"
                errorText="Please enter a valid password."
                required
                onInputChange={inputChangeHandler}
              />
            </div>
            <div className="form-check">
              <input
                className="form-check-input terms-checkbox"
                type="checkbox"
                id="invalidCheck"
                value=""
                onChange={handleCheck}
                defaultChecked={checkTerms}
                required
              />

              <label
                className="form-check-label terms-condition"
                htmlFor="invalidCheck"
              >
                I agree to the Terms and conditions and Privacy policy
              </label>
              <div className="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>

            <div className="auth-button-container">
              <Button
                customClassName="auth-button bold-600"
                onClick={handleSignup}
                disabled={!formState.formIsValid && !checkTerms}
              >
                Continue
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

Signup.propTypes = {};

export default Signup;
