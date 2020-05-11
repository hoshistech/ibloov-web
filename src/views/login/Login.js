import React, { useReducer, useCallback } from "react";
import axios from "axios";
import { Link, useHistory, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

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
  const { token } = useSelector((state) => state.login);

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
      // .get("https://198.199.91.181:4000/auth/google/authurl")
      .get("https://ibloov.xpasson.com:4000/auth/google")
      .then((response) => {
        // handle success
        // console.log(response.data);
        // const { data } = response.data;
        // window.location = data;
      })
      .catch((error) => {
        // handle error
        // console.log(error);
      });
  };

  if (token) {
    return <Redirect to="/" />;
  }

  return (
    <section className="banner row">
      <div className="col-md-7 perfect-center">
        <Link to="/">
          <h2 className="auth-logo  font-bold">ibloov LOGO</h2>
        </Link>
      </div>
      <div className="col-md-5 auth-form-container perfect-center">
        <div className="auth-container">
          <div>
            <h4 className="font-bold">Sign in</h4>
            <div>
              <p className="text-muted small-info-text">
                New User?{" "}
                <Link to="/signup" className="font-bold text-dark">
                  {" "}
                  Sign up now!
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
              errorText="Please enter a valid email."
              required
              onInputChange={inputChangeHandler}
            />
            <div className="auth-button-container-login">
              <Button
                customClassName="auth-button bold-600"
                onClick={handleLogin}
                disabled={!formState.formIsValid}
              >
                Continue
              </Button>
            </div>
            <div className="row divider-container mt-5">
              <hr className="col-md-3 col-sm-3 divider" />
              <p className="mr-3 ml-3">Or</p>
              <hr className="col-md-3 col-sm-3 divider" />
            </div>
            <div className="auth-button-container-social-login">
              <Button
                customClassName="btn-outline-secondary bold-600 auth-google mb-2"
                onClick={(e) => socialAuthHandler(e, "google")}
              >
                Continue with Google
              </Button>
              <Button
                customClassName="auth-facebook bold-600 mb-2"
                // onclick={this.onButtonPress.bind(this)}
              >
                Continue with Facebook
              </Button>
              <Button
                customClassName="auth-twitter bold-600 mb-2"
                // onclick={this.onButtonPress.bind(this)}
              >
                Continue with Twitter
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
