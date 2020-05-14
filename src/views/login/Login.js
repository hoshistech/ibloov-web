import React, { useReducer, useCallback } from "react";
import axios from "../../utils/axiosConfig";
import { Link, useHistory, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Login.css";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { authLogin } from "./login.action";

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

const Login = (props) => {
  const history = useHistory();
  const { token, error } = useSelector((state) => state.login);

  const dispatch = useDispatch();

  const initilaState = {
    inputValues: {
      email: "",
      password: "",
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

  const handleLogin = async (e) => {
    e.preventDefault();

    const newUser = {
      ...formState.inputValues,
    };

    dispatch(authLogin(newUser, history));
  };
  const socialAuthHandler = (e, id) => {
    const googleAuth = "https://ibloov.xpasson.com:4000/auth/google";
    window.location = googleAuth;
    axios
      .get("/auth/google")
      .then((response) => {})
      .catch((error) => {});
  };

  if (token) {
    return <Redirect to="/" />;
  }

  return (
    <section className="banner login-section row">
      <div className="col-md-7 perfect-center">
        <Link to="/">
          <h2 className="auth-logo  font-bold">ibloov LOGO</h2>
        </Link>
      </div>
      <div className="col-md-5 auth-form-container perfect-center">
        <div className="auth-container">
          <div>
            <h4>Sign in</h4>
            <div>
              <p className="small-info-text">
                Are you a new user?{" "}
                <Link to="/signup" className="font-bold">
                  Sign up here
                </Link>
              </p>
            </div>
          </div>
          <form className="auth-form">
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

            <Input
              name="password"
              type="password"
              customClassName="form-control auth-input"
              id="password"
              placeHolder="Password"
              aria-describedby="password"
              errorText="Please enter a valid password."
              required
              onInputChange={inputChangeHandler}
            />
            <p className="input-error auth-error">{error}</p>
            <div className="auth-button-container-login">
              <Button
                customClassName="auth-button bold-600"
                onClick={handleLogin}
                btndisabled={!formState.formIsValid}
              >
                Sign in
              </Button>
            </div>
            <div className="divider-container mt-2">
              <div className="social-divider"></div>
              <p className="divider-content">Or Use</p>
              <div className="social-divider"></div>
            </div>
            <div className="auth-button-container-social-login">
              <Button
                customClassName="btn-outline-secondary bold-600 auth-google mb-2"
                // onClick={(e) => socialAuthHandler(e, "google")}
                onclick={() => {}}
                btndisabled={false}
              >
                <FontAwesomeIcon className="" icon={["fab", "google-plus-g"]} />
              </Button>
              <Button
                customClassName="auth-facebook bold-600 mb-2"
                onclick={() => {}}
                btndisabled={false}
              >
                <FontAwesomeIcon className="" icon={["fab", "facebook-f"]} />
              </Button>
              <Button
                customClassName="auth-twitter bold-600 mb-2"
                onclick={() => {}}
                btndisabled={false}
              >
                <FontAwesomeIcon className="" icon={["fab", "twitter"]} />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

Login.propTypes = {};

export default Login;
