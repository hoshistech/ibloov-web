import React, { useState, useReducer, useCallback, useEffect } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import DatePicker from "react-datepicker";
import Axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Signup.css";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { useDispatch, useSelector } from "react-redux";
import { authSignup } from "./signup.action";
import TelephoneInput from "../../components/telephoneInput/TelephoneInput";
import { formReducer, FORM_INPUT_UPDATE } from "../../utils/formReducer";
import Logo from "../../components/logo/Logo";

const Signup = props => {
  const history = useHistory();

  const [checkTerms, setCheckTerms] = useState(false);
  const [countryCode, setCountryCode] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  const authErrors = useSelector(state => state.signup.error);
  const { token } = useSelector(state => state.login);

  const dispatch = useDispatch();

  const initilaState = {
    inputValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      phoneNumber: ""
    },
    inputValidities: {
      email: false,
      password: false
    },
    formIsValid: false
  };

  const [formState, dispatchFormState] = useReducer(formReducer, initilaState);

  useEffect(() => {
    Axios.get("https://ipapi.co/json/")
      .then(response => {
        const { country_calling_code: callingCode } = response.data;
        setCountryCode(callingCode);
      })
      .catch(error => {});
  }, []);

  const inputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier
      });
    },
    [dispatchFormState]
  );

  const handleCheck = () => {
    setCheckTerms(!checkTerms);
  };

  const handleSelectCountry = e => {
    setCountryCode(e.target.value);
  };

  const handleSignup = async e => {
    e.preventDefault();

    const newUser = {
      ...formState.inputValues,
      phoneNumber: `${countryCode}${formState.inputValues.phoneNumber}`
    };

    const phoneDetails = {
      countryCode,
      phoneNumber: formState.inputValues.phoneNumber
    };

    dispatch(authSignup(newUser, phoneDetails, history));
  };

  const socialAuthHandler = (e, id) => {
    const socialAuth = `https://ibloov-backend.herokuapp.com/auth/${id}`;
    window.location = socialAuth;
  };

  let displayError = "";

  if (authErrors) {
    displayError = Object.values(authErrors).map(error => (
      <p className="signup-error">{error}</p>
    ));

    // displayError = <p className="signup-error">error</p>;
  }
  if (token) {
    return <Redirect to="/" />;
  }
  return (
    <section className="banner row">
      <div className="col-md-7 perfect-center">
        <Link to="/">
          <Logo customClassName="auth-page-logo" />
        </Link>
      </div>
      <div className="col-md-5 perfect-center auth-form-container">
        <div className="auth-container">
          <div>
            <h2 className="font-bold">Create an account</h2>
            <div>
              <p className="small-info-text">
                Have you already registered?
                <Link to="/signin" className="font-bold ml-1">
                  Sign in here
                </Link>
              </p>
            </div>
          </div>
          {/* {Object.values(authErrors).map((error) => (
            <p className="signup-error">{error}</p>
          ))} */}
          {displayError}
          {/* <p className="signup-error">error</p> */}

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
              <DatePicker
                selected={dateOfBirth}
                onChange={date => setDateOfBirth(date)}
                placeholderText="Date of Birth"
                className="form-control auth-input"
              />
            </div>
            <div className="auth-input-container telephone-container">
              <TelephoneInput
                onInputChange={inputChangeHandler}
                onSelectCountry={handleSelectCountry}
                selectedCountry={countryCode}
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
                I agree to the <Link to="/privacy">Terms and conditions</Link>{" "}
                and <Link to="/privacy">Privacy policy</Link>
              </label>
              <div className="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>

            <div className="auth-button-container">
              <Button
                customClassName="auth-button bold-600"
                onClick={handleSignup}
                btndisabled={!(formState.formIsValid && checkTerms)}
              >
                CREATE AN ACCOUNT
              </Button>
            </div>

            <div className="divider-container mt-2">
              <div className="social-divider"></div>
              <p className="divider-content">Or Sign up with</p>
              <div className="social-divider"></div>
            </div>
            <div className="auth-button-container-social-login">
              <Button
                customClassName="btn-outline-secondary bold-600 auth-google mb-2"
                onClick={e => socialAuthHandler(e, "google")}
                // onClick={() => {}}
                btndisabled={false}
              >
                <FontAwesomeIcon className="" icon={["fab", "google-plus-g"]} />
              </Button>
              <Button
                customClassName="auth-facebook bold-600 mb-2"
                onClick={e => socialAuthHandler(e, "facebook")}
                btndisabled={false}
              >
                <FontAwesomeIcon className="" icon={["fab", "facebook-f"]} />
              </Button>
              {/* <Button
                customClassName="auth-twitter bold-600 mb-2"
                onClick={() => {}}
                btndisabled={false}
              >
                <FontAwesomeIcon className="" icon={["fab", "twitter"]} />
              </Button> */}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

Signup.propTypes = {};

export default Signup;
